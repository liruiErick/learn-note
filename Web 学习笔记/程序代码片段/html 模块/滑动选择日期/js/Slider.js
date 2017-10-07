/* 同容器内多项目滑动 */

/*
// Slider 结构如下
<div id="slider">
	<ul>
		<li></li>
		<li></li>
	</ul>
</div>

// 初始化
var slider = new Slider($("#slider"), {
	prevBtn: ".prevBtn",
	nextBtn: ".nextBtn",
	aequilate: false
});

// 切换到前一页
slider.prevPage();

// 切换到下一页
slider.nextPage();

// 刷新，并停留在指定项目上
slider.update(1);

// 设置指定项目为焦点
slider.setItem(2);

// 跳转到指定项目上。执行跳转项目的同时，返回跳转后当前项目左上角到容器左上角的距离
slider.gotoItem(2);

// 销毁 Slider 对象
slider.destroy();

*/

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery', 'DragEvent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.Slider = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	'use strict';

	var is_mobile = !!navigator.userAgent.match(/mobile/i), //判断是否为移动设备

		$win = $(window),

		defaultOptions = {
			item: '>', //基于滑动层元素的子项选择器
			prevBtn: null, //前一页按钮
			nextBtn: null, //后一页按钮
			btnDisableClass: 'disabled', //前后按钮禁用类名

			align: 'start', //当前项目的对齐方式，默认居于起始位置。'center'表示居中，'end'表示居于结束位置
			isVer: false, //排列方向，默认为水平方向。如果值为true则表示垂直方向
			offset: 0, //设置起始位置的偏移量

			activeClass: 'active', //当前焦点的焦点类名
			initIndex: 0, //初始化时的索引，默认为0
			duration: 400, //拖拽结束后，滑动动画的持续时间
			aequilate: true, //每个项目是否等宽

			// 项目单击后的回调函数。并将当前点击（焦点）项目的索引作为参数传入。this指向点击项的DOM对象
			onClick: function(i) {},
			// 拖拽结束后，项目定位滑动前的回调函数。并将拖拽结束后判定的当前索引作为第一个参数传入，第二个参数为当前项目左上角到容器左上角的距离。this指向该项的DOM对象
			onSlide: function(i, offset) {}
		};

	function Slider() {
		this._init.apply(this, arguments);
	}

	var p = Slider.prototype;

	p._init = function(container, options) {
		// 读取配置数据
		var opt = $.extend({}, defaultOptions, options);

		this.$container = $(container).css({
			'overflow': 'hidden',
			'user-select': 'none'
		});

		this.$wrap = this.$container.children().first().css('cursor', '-webkit-grab');

		this.item = opt.item;
		this.$prevBtn = $(opt.prevBtn);
		this.$nextBtn = $(opt.nextBtn);
		this.hasPrevBtn = !!this.$prevBtn.length;
		this.hasNextBtn = !!this.$nextBtn.length;
		this.btnDisableClass = opt.btnDisableClass;

		this.isVer = opt.isVer;
		this.offset = opt.offset;

		this.activeClass = opt.activeClass;
		this.duration = opt.duration;
		this.aequilate = opt.aequilate;

		this.onClick = opt.onClick;
		this.onSlide = opt.onSlide;

		if (this.hasPrevBtn) {
			this.$prevBtn.css('user-select', 'none');
		}
		if (this.hasNextBtn) {
			this.$nextBtn.css('user-select', 'none');
		}

		if (opt.align === 'end') this.sizeRatio = 1;
		else if (opt.align === 'center') this.sizeRatio = 0.5;
		else this.sizeRatio = 0;

		// 获得切换属性
		if ($.cssHooks.x) {
			if (this.isVer) this.tabAttr = 'y';
			else this.tabAttr = 'x';

			if ($.support.transform3d) {
				this.$wrap.css('z', 0);
			}
		} else {
			if (this.isVer) this.tabAttr = 'top';
			else this.tabAttr = 'left';

			if (this.$wrap.css('position') === 'static') {
				this.$wrap.css('position', 'relative');
			}
		}

		if (this.isVer) {
			this.beforeType = 'top';
			this.afterType = 'bottom';
			this.sizeApi = 'height';
		} else {
			this.beforeType = 'left';
			this.afterType = 'right';
			this.sizeApi = 'width';
		}

		// 生成回调代理
		this.prevPage = $.proxy(this, 'prevPage');
		this.nextPage = $.proxy(this, 'nextPage');
		this._resize = $.proxy(this, '_resize');
		this._onClick = $.proxy(this, '_onClick');

		this.update(opt.initIndex);

		// 加入事件
		this._addEvent();
	};

	p._addEvent = function() {

		$win.on('resize', this._resize);

		if (is_mobile) {

			if (this.hasPrevBtn) {
				this.$prevBtn.on('touchend', this.prevPage);
			}
			if (this.hasNextBtn) {
				this.$nextBtn.on('touchend', this.nextPage);
			}

		} else {
			if (this.hasPrevBtn) {
				this.$prevBtn.on('click', this.prevPage);
			}
			if (this.hasNextBtn) {
				this.$nextBtn.on('click', this.nextPage);
			}
		}

		// 拖拽事件
		this.startPos = 0;
		this.curPos = 0;
		this.horizontal = false;
		this.vertical = false;
		this.startX = 0;
		this.startY = 0;
		this.dx = 0;
		this.dy = 0;
		this.r = 0.5; //声明一个比较是否划过下一张的比较系数

		this.dragEvent = new DragEvent({
			obj: this.$wrap,
			holder: this,
			start: this._touchstartHandler,
			move: this._touchmoveHandler,
			end: this._touchendHandler
		});

		this.$wrap.on('click', this.item, this._onClick);
	};

	p._removeEvent = function() {
		if (is_mobile) {
			if (this.hasPrevBtn) {
				this.$prevBtn.off('touchend', this.prevPage);
			}
			if (this.hasNextBtn) {
				this.$nextBtn.off('touchend', this.nextPage);
			}
		} else {
			if (this.hasPrevBtn) {
				this.$prevBtn.off('click', this.prevPage);
			}
			if (this.hasNextBtn) {
				this.$nextBtn.off('click', this.nextPage);
			}
		}

		this.dragEvent && this.dragEvent.remove();

		this.$wrap.off('click', this.item, this._onClick);
	};

	p._resize = function() {
		if (!$.contains(document, this.$container[0])) return; //如果容器被移出文档，则不向下执行

		hideAction(this.$wrap, function() {

			var $itemFirst = this.$item.first(),
				firstBeforeOuter = parseInt($itemFirst.css('padding-'+this.beforeType))
								+ parseInt($itemFirst.css('margin-'+this.beforeType))
								+ parseInt($itemFirst.css('border-'+this.beforeType+'-width')),
				firstAfterOuter = parseInt($itemFirst.css('padding-'+this.afterType))
								+ parseInt($itemFirst.css('margin-'+this.afterType))
								+ parseInt($itemFirst.css('border-'+this.afterType+'-width')),
				itemFirstOuterDifference = firstBeforeOuter - firstAfterOuter, //获取第一个项目的前后outer差

				$itemLast = this.$item.last(),
				lastBeforeOuter = parseInt($itemLast.css('padding-'+this.beforeType))
								+ parseInt($itemLast.css('margin-'+this.beforeType))
								+ parseInt($itemLast.css('border-'+this.beforeType+'-width')),
				lastAfterOuter = parseInt($itemLast.css('padding-'+this.afterType))
								+ parseInt($itemLast.css('margin-'+this.afterType))
								+ parseInt($itemLast.css('border-'+this.afterType+'-width')),
				itemLastOuterDifference = lastAfterOuter - lastBeforeOuter, //获取最后一个项目的前后outer差

				maxPosDifference = 0, // 最大位置补差
				itemOuterDifference = itemFirstOuterDifference + itemLastOuterDifference; // 计算首尾项目的outer差值

			// 当首尾项目的outer差值之和为0，即所有项的outer值相同时，则修改最大位置的补差值
			if (itemOuterDifference === 0) {
				maxPosDifference = itemFirstOuterDifference;
			}

			this.parentSize = this.$container[this.sizeApi](); //计算项目容器的父容器宽度
			this.itemSize = []; //每个项目的平均宽度或者每个项目的宽度数组
			this.itemPos = []; //每个项目的位置数组

			var _this = this,
				allSize = 0,
				outerSize = firstAfterOuter + lastBeforeOuter, //计算项目的outer大小
				// 获取包裹层的前后padding
				itemWrapPadding = parseInt(this.$wrap.css('padding-'+this.beforeType))
								+ parseInt(this.$wrap.css('padding-'+this.afterType));

			if (this.aequilate) {
				var size = this.$item[this.sizeApi]() + outerSize;

				this.$item.each(function(i) {
					_this.itemPos.push(-size*i + _this.offset); //相当于保存每个项目距离容器左边缘的位置
					_this.itemSize.push(size);
				});

				allSize = size * this.itemCount + itemOuterDifference;
				this.displayCount = this.parentSize / size | 0; //计算容器父元素一次能显示多少张完整图
			} else {
				this.$item.each(function(i, n) {
					_this.itemPos.push(-allSize + _this.offset); //相当于保存每个项目距离容器左边缘的位置

					var $n = $(n),
						size = $n.css(_this.sizeApi, '')[_this.sizeApi]();

					// 由于项目大小可能包含小数，但是API只能获取到整数，所以这里强制设置项目的大小为整数
					// 这么做事为了防止之后设置容器大小时出现误差
					$n[_this.sizeApi](size);

					size += outerSize;
					_this.itemSize.push(size);
					allSize += size;
				});

				allSize += itemOuterDifference;
			}

			this.minPos = this.offset;
			this.maxPos = this.parentSize
					- itemWrapPadding
					- allSize
					- maxPosDifference
					- this.offset; //计算容器的位置限制
			this.maxPos = Math.min(this.maxPos, 0);

			this.$wrap[this.sizeApi](allSize);

			// 根据对齐方向，计算当前项距离对齐点的偏移量
			this.ailgnOffset = (this.parentSize - (itemOuterDifference + maxPosDifference + this.offset*2)) * this.sizeRatio;

			this.minIndex = Math.max(0, Math.floor(this._calculateMultiple(this.minPos) - this.sizeRatio));
			this.maxIndex = Math.min(this.itemCount - 1, Math.ceil(this._calculateMultiple(this.maxPos) - this.sizeRatio));

			this._slide(0);
		}, this);
	};

	// 限制index，防止其超出范围
	p._limitIndex = function(curIndex) {
		return Math.min(this.maxIndex, Math.max(this.minIndex, curIndex));
	};

	// 锁定边缘位置
	p._fixedRange = function(curPos) {
		return Math.min(this.minPos, Math.max(this.maxPos, curPos));
	};

	// 判断当前位置是否超出范围，并返回合理的值
	p._outOfRange = function(curPos) {
		// 超出限制后减速滑动
		if (curPos > this.minPos) curPos *= 0.3;
		if (curPos < this.maxPos) curPos = (curPos-this.maxPos) * 0.3 + this.maxPos;
		return curPos;
	};

	p._gotoPos = function(curPos) {
		var prop = {};
		prop[this.tabAttr] = curPos;
		this.$wrap.css(prop);
	};

	// 设置滑动动画的同时，返回动画结束后当前项目左上角到容器左上角的距离
	p._slide = function(duration) {
		if (typeof duration !== 'number') duration = this.duration;

		var curRealIndex = this._limitIndex(this.curIndex),
			curPos = this.itemPos[curRealIndex],
			prop = {};

		prop[this.tabAttr] = this._fixedRange(curPos + this.ailgnOffset - this.itemSize[curRealIndex] * this.sizeRatio);
		// 计算当前项目左上角到容器左上角的距离
		this.curItemOffset = prop[this.tabAttr] - this.itemPos[this.curIndex];
		this.onSlide.call(this.$item[this.curIndex], this.curIndex, this.curItemOffset);

		// 刷新前后按钮的隐藏与显示
		if (this.minPos > this.maxPos) {
			if (this.hasPrevBtn) {
				if (this.curIndex <= this.minIndex) this.$prevBtn.addClass(this.btnDisableClass);
				else this.$prevBtn.removeClass(this.btnDisableClass);
			}
			if (this.hasNextBtn) {
				if (this.curIndex >= this.maxIndex) this.$nextBtn.addClass(this.btnDisableClass);
				else this.$nextBtn.removeClass(this.btnDisableClass);
			}
		} else {
			if (this.hasPrevBtn) this.$prevBtn.addClass(this.btnDisableClass);
			if (this.hasNextBtn) this.$nextBtn.addClass(this.btnDisableClass);
		}

		this.$wrap.stop().animate(prop, duration);

		return this.curItemOffset;
	};

	p._onClick = function(e) {
		if (!this.isClick) return;
		var index = this.$item.index(e.currentTarget);
		this.setItem(index);
		this.onClick.call(e.currentTarget, index);
	};

	p._touchstartHandler = function(e, data) {
		this.isClick = true;
		this.startX = data.x;
		this.startY = data.y;
		this.$wrap.css('cursor', '-webkit-grabbing');
	};

	p._touchmoveHandler = function(e, data) {
		this.dx = data.x - this.startX;
		this.dy = data.y - this.startY;

		if (!this.horizontal && !this.vertical) {
			var absDx = Math.abs(this.dx),
				absDy = Math.abs(this.dy);
			if (this.isVer) {
				if (absDx <= absDy) {
					this.vertical = true;
					this.$wrap.stop();
					this.startPos = parseInt(this.$wrap.css(this.tabAttr));
				} else {
					this.horizontal = true;
					// 重置起始点
					this.startX = data.x;
					this.startY = data.y;
				}
			} else {
				if (absDx >= absDy) {
					this.horizontal = true;
					this.$wrap.stop();
					this.startPos = parseInt(this.$wrap.css(this.tabAttr));
				} else {
					this.vertical = true;
					// 重置起始点
					this.startX = data.x;
					this.startY = data.y;
				}
			}
		}
		if ((!this.isVer && !this.horizontal) || (this.isVer && !this.vertical)) return;
		e.preventDefault();
		this.isClick = false;

		if (this.isVer) this.curPos = this._outOfRange(this.startPos + this.dy);
		else this.curPos = this._outOfRange(this.startPos + this.dx);

		this._gotoPos(this.curPos);
	};

	p._touchendHandler = function(e, data) {
		this.$wrap.css('cursor', '-webkit-grab');
		if (this.isVer) {
			this.horizontal = false;
			if (!this.vertical) return;
			this.vertical = false;
		} else {
			this.vertical = false;
			if (!this.horizontal) return;
			this.horizontal = false;
		}

		if (this.isVer && (data.swipeTop || data.swipeBottom)) { //判断为垂直清扫时触摸结束的执行动作
			if (data.swipeTop) { //手指上滑，页面向下显示
				this.nextPage();
			} else if (data.swipeBottom) { //手指下滑，页面向上显示
				this.prevPage();
			}
		} else if (!this.isVer && (data.swipeLeft || data.swipeRight)) { //判断为水平清扫时触摸结束的执行动作
			if (data.swipeLeft) { //手指左滑，页面向右显示
				this.nextPage();
			} else if (data.swipeRight) { //手指右滑，页面向左显示
				this.prevPage();
			}
		} else { //判断为一般滑动时触摸结束的执行动作
			var m = this._calculateMultiple(this.curPos) - this.sizeRatio;
			if (this.isVer) {
				this.curIndex = this.dy < 0 ? Math.ceil(m-this.r) : Math.floor(m+this.r);
			} else {
				this.curIndex = this.dx < 0 ? Math.ceil(m-this.r) : Math.floor(m+this.r);
			}
			this._slide();
		}

		return false; //水平移动时防止<a>链接被点击到
	};

	// 根据位置计算当前位置的倍数
	p._calculateMultiple = function(curPos) {
		var index,
			m = 0, //倍数
			posReference = curPos - this.ailgnOffset - this.offset;

		if (this.aequilate) {
			if (posReference < 0) {
				m = Math.max(0, -posReference) / this.itemSize[0]; //计算倍数
			}
		} else {
			var pos, size;
			for (var i = 0, l = this.itemCount; i < l; i++) {
				pos = this.itemPos[i];
				size = this.itemSize[i];

				if (pos - size < posReference) {
					m = Math.max(0, pos - posReference) / size + i; //计算倍数
					break;
				}
			}
		}
		return m;
	};

	p.prevPage = function() {
		var curIndex = this.curIndex;
		if (this.aequilate) {
			curIndex -= this.displayCount;
		} else {
			var curPos = this.itemPos[curIndex];
			var pos;
			for (var i = curIndex; i >= 0; i--) {
				pos = this.itemPos[i];
				if (pos - curPos >= this.parentSize) break;
				curIndex = i;
			}
		}
		curIndex = Math.max(this.minIndex, curIndex);
		// 在手指清扫动作时，经常会遇到当前索引未变，但需要位移的情况，因此这里不能阻断
		//if (curIndex == this.curIndex) return;
		this.curIndex = curIndex;
		this._slide();
	};

	p.nextPage = function() {
		var curIndex = this.curIndex;
		if (this.aequilate) {
			curIndex += this.displayCount;
		} else {
			var curPos = this.itemPos[curIndex];
			var pos;
			for (var i = curIndex, l = this.itemCount; i < l; i++) {
				pos = this.itemPos[i];
				if (curPos - pos >= this.parentSize) break;
				curIndex = i;
			}
		}
		curIndex = Math.min(this.maxIndex, curIndex);
		// 在手指清扫动作时，经常会遇到当前索引未变，但需要位移的情况，因此这里不能阻断
		//if (curIndex == this.curIndex) return;
		this.curIndex = curIndex;
		this._slide();
	};

	p.update = function(index) {
		this.$item = this.$wrap.find(this.item);
		this.itemCount = this.$item.length;

		this.curIndex = (typeof(index) === 'number' && index >= 0 && index < this.itemCount) ? index : this.sizeRatio === 1 ? itemCount - 1 : 0;
		this.setItem(index);

		// 1）防止在低版本浏览器（IE8及以下浏览器）中出现元素还未渲染完成就执行数据重置的计算
		// 2）防止在初始化第一次执行 onSlide 时，对象实例还未初始化完成导致的调用实例方法失败
		window.setTimeout(this._resize);
	};

	// 设置指定项目为焦点
	p.setItem = function(index) {
		this.curActiveIndex = index;
		this.$item.removeClass(this.activeClass);
		if (index < 0 || index >= this.itemCount) return;
		this.$item.eq(index).addClass(this.activeClass);
	};

	// 跳转到指定项目上。执行跳转项目的同时，返回跳转后当前项目左上角到容器左上角的距离
	p.gotoItem = function(i) { // 直接滑动至该索引对应的项目
		this.curIndex = i;
		return this._slide();
	};

	p.destroy = function() {
		this._removeEvent();
		this.$container = null;
		this.$wrap = null;
		this.$item = null;
		this.$prevBtn = null;
		this.$nextBtn = null;
	};

	function hideAction(jq, func, target) {
		var $hide = $();
		$.each(jq, function(i, n){
			var $n = (n instanceof jQuery) ? n : $(n),
				$hidden = $n.parents().addBack().filter(':hidden'),
				$none,
				i = $hidden.length;
			while (i--) {
				if (!$n.is(':hidden')) break;
				$none = $hidden.eq(i);
				if ($none.css('display') === 'none') $hide = $hide.add($none.show());
			}
		});
		if (typeof(func) === 'function') func.call(target || this);
		$hide.hide();
	}

	return Slider;

}));
