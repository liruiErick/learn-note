(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.Tree = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var is_mobile = !!navigator.userAgent.match(/mobile/i),
		clickEventType = is_mobile ? 'touchend' : 'click',

		defaultOptions = {
			nav: 'a', // 一个选择器，表示按钮的事件委托的对象。此时按钮的选择器必须是该委托选择器的子选择器
			activeClass: 'active', // 激活时的类名。因为这个类名是确定的，一般用于添加特定的样式
			treeClass: 'tree', // 目录为树形时的类名
			noTreeClass: 'notree', // 目录为非树形时的类名

			// 创建节点容器的模板
			containerTemplate: '<ul></ul>',
			// 创建节点的模板
			itemTemplate: '<li><a><i class="icon"></i><span class="name"></span><em class="xin" data-active-icon-class="icon-heart-empty" data-unactive-icon-class="icon-heart-empty"></em></a></li>',

			autoClose: true, // 当新的目录打开时，是否自动关闭前一个目录
			onClick: function($nav, $menu, isOpen) {} // 点击回调，this指向点击项的DOM对象，同时将点击项的jQuery对象作为参数传入
			// 如果点击项是一个包含子项的目录，则第二个参数为该子项的容器，第三个参数表示该目录是否将要被打开
			// 如果在回调函数中 return false，则会阻止目录接下来的展开或收起行为
		},

		nodeOpenClass = 'node-open',
		nodeCloseClass = 'node-close',
		activeDataName = 'active-icon-class',
		unactiveDataName = 'unactive-icon-class',

		$win = $(window),
		$doc = $(document);

	/**
	 * @brief 状态按钮
	 * @param {string} container 树容器选择器
	 * @param {string} container2 缩进后的树容器选择器
	 * @param {string} options 配置选项
	 */
	function Tree(container, options) {
		// 读取配置数据
		var opt = $.extend({}, defaultOptions, options);

		this.$container = $(container);
		this.nav = opt.nav;
		this.activeClass = opt.activeClass;

		this.treeClass = opt.treeClass;
		this.noTreeClass = opt.noTreeClass;

		this.containerTemplate = opt.containerTemplate;
		this.itemTemplate = opt.itemTemplate;

		this.autoClose = opt.autoClose;
		this.onClick = opt.onClick;

		// 生成回调代理
		this._onClickTree = $.proxy(this, '_onClickTree');
		this._onClickNoTree = $.proxy(this, '_onClickNoTree');
		this._onClickFirstNav = $.proxy(this, '_onClickFirstNav');
		this._onEnterFirstItem = $.proxy(this, '_onEnterFirstItem');
		this._onLeaveFirstItem = $.proxy(this, '_onLeaveFirstItem');
		this._onClickDoc = $.proxy(this, '_onClickDoc');

		this.isTree = undefined; // 表示当前目录是否为树形
		this.$curNav = $(); // 表示当前项
		this.nodes = {}; // 保存所有树节点

		this.changeTree(true);
	}

	var p = Tree.prototype;

	p._setIconActive = function($nav, active) {
		this._getActiveClass($nav);
		if (active) {
			$nav
				.removeClass(nodeCloseClass)
				.addClass(nodeOpenClass + ' ' + this.activeClass)
				.find('.icon')
				.removeClass(this.unactiveIconClass)
				.addClass(this.activeIconClass);
		} else {
			$nav
				.addClass(nodeCloseClass)
				.removeClass(nodeOpenClass + ' ' + this.activeClass)
				.find('.icon')
				.addClass(this.unactiveIconClass)
				.removeClass(this.activeIconClass);
		}
	};

	p._getActiveClass = function($nav) {
		this.activeIconClass = $nav.data(activeDataName);
		this.unactiveIconClass = $nav.data(unactiveDataName);
	};

	p._slideIn = function($nav, $menu) {
		var navOffset = $nav.offset(),
			navRight = navOffset.left + $nav.outerWidth(),
			navTop = navOffset.top,
			navHeight = $nav.outerHeight(),
			navBottom = navTop + navHeight,

			menuHeight = $menu.outerHeight(),

			winBottom = $win.scrollTop() + $win.height();

		$menu
			.css({
				'left': navRight - 50,
				'top': navTop + menuHeight > winBottom ? navTop - (menuHeight - navHeight) : navTop,
				'opacity': 0
			})
			.show()
			.stop()
			.animate({
				'left': navRight,
				'opacity': 1
			}, 200);
	};

	p._onClickTree = function(e) {
		e.stopImmediatePropagation();

		if (!e.currentTarget.target) { // 如果声明了其他打开方式，则不阻止浏览器的默认行为
			e.preventDefault();
		}

		var $nav = $(e.currentTarget),
			$menu = $nav.next(),
			isOpen = !$nav.hasClass(nodeOpenClass);

		if (!$menu.length) {
			$menu = undefined;
			isOpen = undefined;
		}

		if (this.onClick.call(e.currentTarget, $nav, $menu, isOpen) === false) return false;

		if ($menu) {
			this._setIconActive($nav, isOpen);

			if (isOpen) {
				$menu.stop().slideDown();

				if (this.autoClose) { // 自动关闭前一个开的目录
					// 找出其他同级菜单
					var $other = $nav.parent().siblings(),
						$openNav = $other.children('a.' + nodeOpenClass);

					if ($openNav.length) {
						var _this = this;
						$openNav.each(function(i, n) {
							var $nav = $openNav.eq(i);
							$nav
								.next()
								.stop()
								.slideUp();

							_this._setIconActive($nav, false);
						});
					}
				}

			} else {
				$menu.stop().slideUp();
			}

			if ($nav[0] === this.$curNav[0]) return;
			this.$curNav.removeClass(this.activeClass);
			this.$curNav = $nav;

		} else {

			if ($nav[0] === this.$curNav[0]) return;
			$nav.addClass(this.activeClass);
			this.$curNav.removeClass(this.activeClass);
			this.$curNav = $nav;
		}
	};

	p._onClickNoTree = function(e) {
		//e.stopImmediatePropagation(); // 这里会使em标签无法被点击掉，因此暂时注释掉
		e.preventDefault();

		var $nav = $(e.currentTarget),
			$menu = undefined,
			isOpen = undefined,
			returnValue = this.onClick.call(e.currentTarget, $nav, $menu, isOpen);

		if (returnValue === false) return false;

		if ($nav[0] === this.$curNav[0]) return;
		$nav.addClass(this.activeClass);
		this.$curNav.removeClass(this.activeClass);
		this.$curNav = $nav;

		if (!is_mobile && e.target.tagName !== 'EM') {
			this.$firstMenu.stop().fadeOut(200);
		}
	};

	p._onClickFirstNav = function(e) {
		e.stopImmediatePropagation();
		e.preventDefault();

		var $nav = $(e.currentTarget),
			$menu = $nav.next(),
			isOpen = !$nav.hasClass(nodeOpenClass);

		if (!$menu.length) {
			$menu = undefined;
			isOpen = undefined;
		}

		if (this.onClick.call(e.currentTarget, $nav, $menu, isOpen) === false) return false;

		if ($menu) {
			this._setIconActive($nav, isOpen);

			if (isOpen) {
				this._slideIn($nav, $menu);
			} else {
				$menu.stop().fadeOut(200);
			}
		}

		// 找出其他同级打开菜单，并关闭
		var $other = $nav.parent().siblings(),
			$openNav = $other.children('a.' + nodeOpenClass);

		if ($openNav.length) {
			var _this = this;
			$openNav.each(function(i, n) {
				var $nav = $openNav.eq(i);
				$nav
					.next()
					.stop()
					.hide();

				_this._setIconActive($nav, false);
			});
		}
	};


	p._onEnterFirstItem = function(e) {
		var $item = $(e.currentTarget),
			$nav = $item.children(this.nav),
			$menu = $nav.next(),
			isOpen = !$nav.hasClass(nodeOpenClass);

		if (!$menu.length) {
			$menu = undefined;
		}

		if ($menu && isOpen) {
			this._setIconActive($nav, isOpen);
			this._slideIn($nav, $menu);
		}
	};

	p._onLeaveFirstItem = function(e) {
		var $item = $(e.currentTarget),
			$nav = $item.children(this.nav),
			$menu = $nav.next();

		if (!$menu.length) {
			$menu = undefined;
		}

		if ($menu) {
			var toElem = e.relatedTarget || e.toElement;
			if (!$.contains($menu[0], toElem)) {
				this._setIconActive($nav, false);
				$menu.stop().fadeOut(200);
			}
		}
	};

	p._onClickDoc = function(e) {
		if (!$.contains(this.$container[0], e.target)) {
			this.menuHide();
		}
	};

	// 更新目录树内容
	// 第一个参数 data 表示树节点的数据对象
	// 第二个参数 local 表示是否为局部更新，默认为全局更新
	// data 结构如下：
	// [
	//     {id:1, pId:0, name:"根目录1", className:"mulu1", iconClass:"iconfont", activeIconClass:"open", unactiveIconClass:"close"},
	//         {id:101, pId:1, name:"目录1", href:"page/page1.html", iconClass:"iconfont", activeIconClass:"open", unactiveIconClass:"close"},
	//             {id:10101, pId:101, name:"子目录1", href:"page/page1-1.html"}
	// ]
	// 配置属性说明：
	// id - 目录项的 id。主要用于按 id 的顺序排列目录
	// pId - 目录项的父级 id。该目录项将会被添加到指定父级 id 对应的目录项
	// name - 目录名称
	// href - 目录指向的地址
	// target - 定义目录的打开方式，比如"_blank"
	// className - 指定目录项所持有的类名
	// iconClass - 目录项下图标元素的类名
	// activeIconClass - 目录项激活时，图标元素的类名
	// unactiveIconClass - 目录项非激活时，图标元素的类名
	// isLove - 布尔值，表示是否已经收藏
	// remove - 布尔值，表示是否删除该节点，只有在局部更新目录树时有效
	p.update = function(data, local) {
		var nodes = {}, // 用来保存所有已经创建的节点信息，key 为 id 值
			removeId = [], // 保存所有被删除的id
			l = data.length;

		if (!local) { // 如果不是局部更新，则更新所有节点
			this.$container.empty();
			this.nodes = nodes;
		}

		// 根据数据信息，创建所有节点
		while (l--) {
			var nodeData = data[l],
				id = nodeData.id,
				pId = nodeData.pId,
				$node;

			if (local && id in this.nodes) {
				$node = this.nodes[id];

				if (nodeData.remove) {
					delete this.nodes[id];
					removeId[id] = $node;
					continue;
				} else if (pId != $node.data('tree-node-pId')) {
					$node.data({
						'tree-node-update': true,
						'tree-node-pId': pId
					});
				}
			} else {
				$node = $(this.itemTemplate);
				$node.data({
					'tree-node-update': true,
					'tree-node-id': id,
					'tree-node-pId': pId
				});
				nodes[id] = $node;
			}

			var $nav = $node.children(this.nav);

			$nav
				.find('.icon')
				.addClass(nodeData.iconClass);

			$nav
				.find('.name')
				.text(nodeData.name);

			var $xin = $nav.find('.xin');
			this._getActiveClass($xin);
			if (nodeData.isLove) {
				$xin.removeClass(this.unactiveIconClass);
				$xin.addClass(this.activeIconClass);
				$xin.addClass(this.activeClass);
			} else {
				$xin.removeClass(this.activeClass);
				$xin.removeClass(this.activeIconClass);
				$xin.addClass(this.unactiveIconClass);
			}

			$nav
				.css('cursor', 'pointer')
				.attr({
					id: 'tree-node-' + id,
					href: nodeData.href,
					target: nodeData.target,
					title: nodeData.name
				})
				.addClass(nodeData.className);;

			if (nodeData.activeIconClass) {
				$nav.data(activeDataName, nodeData.activeIconClass);
			}
			if (nodeData.unactiveIconClass) {
				$nav.data(unactiveDataName, nodeData.unactiveIconClass);
			}
		}

		// 将节点根据层级关系添加进容器中
		for (var id in this.nodes) {
			var $node = this.nodes[id],
				update = $node.data('tree-node-update'),
				pId = $node.data('tree-node-pId'),
				$container;

			if (local && !update) { // 如果是局部更新，则只更新需要更新父节点的节点
				if (removeId[pId]) { // 如果该节点的父节点被删除，则将子节点从储存集合中移除
					delete this.nodes[id];
				}
				continue;
			}

			$node.data({'tree-node-update': false});

			if (!pId) { // 如果父级 id 为 0 或者未定义，则判定节点的容器为最顶级容器
				$container = this.$container;
			} else { // 根据父级 id 找出对应的节点容器
				var $parent = this.nodes[pId];
				$container = $parent.children(':not(a)');

				if (!$container.length) { // 如果为找到对应的容器，则根据模板创建一个
					$container = $(this.containerTemplate).appendTo($parent);
					$container.hide();
				}
			}

			if ($container.is(':empty')) { // 如果容器内没有节点，则直接将节点加入容器
				$container.append($node);
			} else {
				var $children = $container.children(),
					maxIndex = $children.length - 1;
				$children.each(function(i, n) { // 如果容器中存在其他节点，则根据节点的次序添加
					var $child = $(n),
						childId = $child.data('tree-node-id');

					if (id < childId) {
						$node.insertBefore($child);
					} if (i == maxIndex) {
						$container.append($node);
					}
				});
			}
		}

		if (local) { // 最后将应该删除节点删除
			$.each(removeId, function(i, $node) {
				if ($node) {
					$node.slideUp(200, function() {
						$node.remove();
					});
				}
			});
		}

		this.changeTree(this.isTree);
	};

	// 非树结构下，隐藏所有菜单
	p.menuHide = function() {
		if (this.isTree) return;

		var $openNav = this.$firstNav.filter('a.' + nodeOpenClass),
			_this = this;
		$openNav.each(function(i, n) {
			var $nav = $openNav.eq(i);
			$nav
				.next()
				.stop()
				.fadeOut(200);
			_this._setIconActive($nav, false);
		});
	};

	// 打开所非1级的目录
	p.open = function() {
		var _this = this;
		this.$container
			.children()
			.children(this.nav)
			.removeClass(_this.activeClass)
			.next()
			.find(this.nav)
			.next()
			.show()
			.prev()
			.each(function(i, n) {
				var $nav = $(this);
				_this._setIconActive($nav, true);
				$nav.removeClass(_this.activeClass);
			});
	};

	// 关闭所有目录
	p.close = function() {
		var _this = this;
		this.$container
			.find(this.nav)
			.next()
			.hide()
			.prev()
			.each(function(i, n) {
				var $nav = $(this);
				_this._setIconActive($nav, false);
			});
	};

	// 改变树形结构
	p.changeTree = function(isTree) {
		if (typeof isTree === 'undefined') {
			this.isTree = !this.isTree;
		} else {
			this.isTree = isTree;
		}

		this.$container.off(clickEventType, this.nav, this._onClickTree);
		this.$firstNav && this.$firstNav.off(clickEventType, this._onClickFirstNav);
		this.$firstMenu && this.$firstMenu.off(clickEventType, this.nav, this._onClickNoTree);

		var $children = this.$container.children();
		this.$firstNav = $children.children(this.nav); // 所有的一级导航项
		this.$firstMenu = this.$firstNav.next(); // 所有的一级菜单
		var $firstItem = this.$firstNav.parent();

		if (is_mobile) {
			$doc.off(clickEventType, this._onClickDoc);
		} else {
			$firstItem
				.off('mouseenter', this._onEnterFirstItem)
				.off('mouseleave', this._onLeaveFirstItem);
		}

		if (this.isTree) {
			this.$container
				.removeClass(this.noTreeClass)
				.addClass(this.treeClass);

			this.$container.on(clickEventType, this.nav, this._onClickTree);

			this.close();

		} else {
			this.$container
				.removeClass(this.treeClass)
				.addClass(this.noTreeClass);

			this.$firstMenu.on(clickEventType, this.nav, this._onClickNoTree);
			this.$firstNav.on(clickEventType, this._onClickFirstNav);

			if (is_mobile) {
				$doc.on(clickEventType, this._onClickDoc);
			} else {
				$firstItem
					.on('mouseenter', this._onEnterFirstItem)
					.on('mouseleave', this._onLeaveFirstItem);
			}

			this.close();
			this.open();
		}
	};

	return Tree;
}));

