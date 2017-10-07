(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery', 'DragEvent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.DragElement = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	'use strict';

	var $body = $(document.body),

		/**
		 * 默认回调
		 * this 指向 DragElement 的实例对象
		 * 包含 3 个参数 function(pos, parentRect, $drag)
		 *
		 * @param {array} pos        一个数组，数组包含两个值，每个值包含 x, y 两个坐标值。
		 *                           表示当前拖拽对象相对于参考元素（默认为最近的定位父元素）的位置。
		 *                           数组的第一个值表示像素位置，第二值表示百分比位置。
		 * @param {objec} parentRect 表示参考元素内部的矩形盒子（不包含边框和内边距），即拖拽对象的活动范围。
		 *                           包含 x, y, width, height 四个值。这里的 x, y 表示参考元素在文档中的坐标值。
		 * @param {jQuery} $drag     表示正在被拖拽元素的 jQuery 对象
		 */
		noop = function(pos, parentRect, $drag) {},

		defaultOptions = {
			parent: '', // 拖拽移动中的参考元素，移动只会被局限于该元素中。默认为空，程序将会自动获取最近的定位父元素
			drag: '', // 一个DOM对象或者elem的子选择器，如果指定了该元素，那么只能通过该元素来拖拽整个元素
			cursor: 'move', // 设置拖拽元素的鼠标图形
			pos: {}, // 拖拽元素的起始坐标。包含 x, y 两个坐标
			box: {}, // 碰撞盒。包含 x, y, width, height 四个属性。x, y 是基于自身盒模型左上角的坐标。如果对应的属性值为空，则使用拖拽元素的原始值
			lockX: false, // 是否锁定X轴
			lockY: false, // 是否锁定Y轴
			bounce: true, // 是否带回弹效果

			onDragStart: noop, // 开始拖拽的回调
			onDrag: noop, // 拖拽中的回调
			onDragEnd: noop // 结束拖拽的回调
		};

	/**
	 * 拖拽元素
	 * @param {DOM | string} elem 被拖拽元素的DOM对象或者选择器，表示被鼠标拖拽并移动的元素
	 * @param {object} options 配置选项
	 */
	function DragElement(elem, options) {
		if (!(this instanceof DragElement)) {
			return new DragElement(elem, options);
		}

		this.$elem = $(elem);
		if (!this.$elem.length) {
			throw new Error('drag element not find');
		}
		this.options = $.extend({}, defaultOptions, options);
		this._init();
	}

	var p = DragElement.prototype;

	p.constructor = DragElement;

	p._init = function() {
		var $elem = this.$elem,
			$drag = this.$elem.find(this.options.drag);

		if (!$drag.length) {
			$drag = $elem;
		}

		if ($elem.css('position') === 'static') {
			$elem.css('position', 'relative');
		}

		this.$offsetParent = $(this.options.parent);
		if (!this.$offsetParent.length) {
			this.$offsetParent = $elem.offsetParent();
		}

		$drag.css('cursor', this.options.cursor);

		if ($.cssHooks.x) {
			this.xProp = 'x';
			this.yProp = 'y';

			if ($.support.transform3d) {
				$elem.css('z', 0);
			}
		} else {
			this.xProp = 'left';
			this.yProp = 'top';
		}

		this.pos = {};
		this.posPercent = {};
		this.lockX = this.options.lockX;
		this.lockY = this.options.lockY;
		this.bounce = this.options.bounce;

		this.onDragStart = $.isFunction(this.options.onDragStart) ? this.options.onDragStart : null;
		this.onDrag = $.isFunction(this.options.onDrag) ? this.options.onDrag : null;
		this.onDragEnd = $.isFunction(this.options.onDragEnd) ? this.options.onDragEnd : null;

		this.update(this.options.pos);

		this.dragEvent = new DragEvent({
			obj: $drag,
			holder: this,
			start: this._dragStartHandler,
			move: this._dragMoveHandler,
			end: this._dragEndHandler
		});
	};

	p._dragStartHandler = function(e, data) {
		$body.css('user-select', 'none'); // 防止拖拽过程中选择到其他元素
		$('iframe').css('pointer-events', 'none'); // 防止拖拽过程被iframe阻断事件
		if (this.onDragStart && this.onDragStart !== noop) {
			this.onDragStart.call(this, this.getPos(), this.parentRect, this.$elem);
		}
	};

	p._dragMoveHandler = function(e, data) {
		var x = this.lockX ? null : this.pos.x + data.stepDx,
			y = this.lockY ? null : this.pos.y + data.stepDy;
		if (this.bounce) {
			this._setPos(x, y);
		} else {
			this._setPos(this._computePos(x, y));
		}
		this._setCss();

		if (this.onDrag && this.onDrag !== noop) {
			this.onDrag.call(this, this.getPos(), this.parentRect, this.$elem);
		}
	};

	p._dragEndHandler = function(e, data) {
		$body.css('user-select', '');
		$('iframe').css('pointer-events', '');

		if (this.bounce) {
			this._setPos(this._computePos(this.pos));
			this._setCss(200);
		}

		if (this.onDragEnd && this.onDragEnd !== noop) {
			this.onDragEnd.call(this, this.getPos(), this.parentRect, this.$elem);
		}
	};

	p._computePos = function(x, y) {
		if (typeof x === 'object') {
			y = x.y;
			x = x.x;
		}

		if (typeof x !== 'number') x = this.pos.x;
		if (typeof y !== 'number') y = this.pos.y;

		var parentRect = this.parentRect,
			box = this.box,
			rect = {
				left: x,
				top: y,
				right: x + box.width,
				bottom: y + box.height
			};

		var leftOffset = -rect.left,
			rightOffset = parentRect.width - rect.right,
			topOffset = -rect.top,
			bottomOffset = parentRect.height - rect.bottom;

		if (leftOffset > 0) {
			x += leftOffset;
		} else if (rightOffset < 0) {
			x += rightOffset;
		}

		if (topOffset > 0) {
			y += topOffset;
		} else if (bottomOffset < 0) {
			y += bottomOffset;
		}

		return {
			x: x,
			y: y
		};
	};

	// 这里注意 ignoreLock 参数如果为 true, 那么表示本次设置将忽略 x, y 轴的锁定。
	// 设置这个属性的目的在于，如果锁定了某个轴的情况也，仍然可以手动改变他的位置
	p._setCss = function(duration, ignoreLock) {
		duration = duration || 0;
		var props = {};
		if (ignoreLock || !this.lockX) props[this.xProp] = this.pos.x - this.box.x;
		if (ignoreLock || !this.lockY) props[this.yProp] = this.pos.y - this.box.y;
		if (duration) {
			this.$elem.stop().animate(props, duration);
		} else {
			this.$elem.stop().css(props);
		}
	};

	p._setPos = function(x, y) {
		if (typeof x === 'object') {
			y = x.y;
			x = x.x;
		}

		this.pos = this.pos || {};
		if (typeof x === 'number') this.pos.x = x;
		if (typeof y === 'number') this.pos.y = y;

		this.posPercent.x = pxToPercent(this.pos.x, this.parentRect.width);
		this.posPercent.y = pxToPercent(this.pos.y, this.parentRect.height);
	};

	// 设置位置坐标，也可以为百分比
	p.setPos = function(x, y) {
		if (typeof x === 'object') {
			y = x.y;
			x = x.x;
		}

		if (isPercent(x)) x = percentToPx(x, this.parentRect.width);
		if (isPercent(y)) y = percentToPx(y, this.parentRect.height);

		this._setPos(this._computePos(x, y));
		this._setCss(0, true);
		return this;
	};

	// 获取位置坐标
	// 返回一个数组，包含两个值，
	p.getPos = function() {
		return [$.extend({}, this.pos), $.extend({}, this.posPercent)];
	};

	p.update = function(pos) {
		var $offsetParent = this.$offsetParent,
			$elem = this.$elem;

		hideAction($elem, function() {

			var offset = $elem.offset(),
				boxWidth = $elem.outerWidth(),
				boxHeight = $elem.outerHeight(),
				parentOffset = $offsetParent.offset(),
				parentBorderLeftWidth = parseFloat($offsetParent.css('border-left-width')),
				parentBorderTopWidth = parseFloat($offsetParent.css('border-top-width')),
				parentPaddingLeft = parseFloat($offsetParent.css('padding-left')),
				parentPaddingTop = parseFloat($offsetParent.css('padding-top'));

			var parentRect = this.parentRect = {
				x: parentOffset.left,
				y: parentOffset.top,
				width: $offsetParent.width(),
				height: $offsetParent.height()
			};

			var box = this.options.box;
			if (isPercent(box.x)) box.x = percentToPx(box.x, boxWidth);
			if (isPercent(box.y)) box.y = percentToPx(box.y, boxHeight);
			if (isPercent(box.width)) box.width = percentToPx(box.width, boxWidth);
			if (isPercent(box.height)) box.height = percentToPx(box.height, boxHeight);

			box = this.box = $.extend({
				x: 0,
				y: 0,
				width: $elem.outerWidth(),
				height: $elem.outerHeight()
			}, box);

			var posPercent = {};
			posPercent.x = this.posPercent.x && this.posPercent.x + '%';
			posPercent.y = this.posPercent.y && this.posPercent.y + '%';
			pos = $.extend({}, posPercent, pos);

			// 根据文档结构，获取初始位置
			if (typeof pos.x === 'undefined') {
				pos.x = offset.left + box.x - parseFloat($elem.css('margin-left'))
						- (parentOffset.left + parentBorderLeftWidth + parentPaddingLeft);
			}
			if (typeof pos.y === 'undefined') {
				pos.y = offset.top + box.y - parseFloat($elem.css('margin-top'))
						- (parentOffset.top + parentBorderTopWidth + parentPaddingTop);
			}

		}, this);

		$elem.css({
			'left': 0,
			'top': 0,
			'right': 'auto',
			'bottom': 'auto'
		});

		this.setPos(pos);

		return this;
	};

	p.lock = function() {
		this.dragEvent.remove();
		return this;
	};

	p.unlock = function() {
		this.dragEvent.open();
		return this;
	};

	p.destroy = function() {
		this.dragEvent.remove();
		this.$elem = null;
		this.$offsetParent = null;
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

	// 判断是否为百分比
	function isPercent(value) {
		var str = value + '';
		return /%$/.test(str);
	};

	// 像素转百分比
	function pxToPercent(value, base) {
		if (typeof value !== 'number') value = parseFloat(value);
		if (typeof base !== 'number') base = parseFloat(base);
		return value / base * 100;
	};

	// 百分比转像素
	function percentToPx(value, base) {
		if (typeof value !== 'number') value = parseFloat(value);
		if (typeof base !== 'number') base = parseFloat(base);
		return value / 100 * base;
	};

	return DragElement;
}));
