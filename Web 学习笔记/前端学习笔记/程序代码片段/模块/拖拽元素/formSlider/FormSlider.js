(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('DragElement'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery', 'DragElement'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.FormSlider = factory(root.jQuery, root.bjj.DragElement);
	}

}(this, function($, DragElement) {
	'use strict';

		/**
		 * 默认回调
		 * this 指向 FormSlider 的实例对象
		 * 包含 2 个参数 function(value, oldValue)
		 *
		 * @param {array} value    表示当前值。
		 * @param {objec} oldValue 表示旧值。
		 */
	var noop = function(value, oldValue) {},

		defaultOptions = {
			className: '', // 虚拟 slider 控件的类名。如果未设置，则会取元素的 data-class 作为自己的类名
			handleName: '.slider-handle', // 虚拟 slider 控制手柄的类名
			rangeName: '.slider-range', // 虚拟 slider 拖拽范围显示条的类名
			prop: {}, // 为虚拟 slider 元素添加的属性
			handleProp: {}, // 为虚拟 slider 控制手柄添加的属性
			rangeProp: {}, // 为虚拟 slider 拖拽范围显示条添加的属性
			range: '', // 拖拽范围的起始位置，'min' 表示从最小值开始，'max' 表示从最大值开始。默认为空，也就是不显示拖拽范围。
			cursor: '', // 设置控制手柄的鼠标图形
			min: 0, // 最小值
			max: 100, // 最大值
			value: 0, // 当前值
			fixed: 0, // 所有值保留小数的位数。会四舍五入
			isVer: false, // 是否垂直
			onReady: noop, // 初始化完成后以及每次 update 后的回调
			onSlide: noop, // 滑动过程中的回调
			onChange: noop // 滑动结束后，如果值改变，则执行此回调。
		};

	/**
	 * 表单滑块
	 * @param  {string | DOM}    slider  控件元素选择器或者DOM对象
	 * @param  {number | object} options 选项，默认值见 defaultOptions
	 */
	function FormSlider(slider, options) {
		if (!(this instanceof FormSlider)) {
			return new FormSlider(slider, options);
		}

		this.$input = $(slider);
		if (!this.$input.length) {
			throw new Error('slider element not find');
		}

		this._updateOptions(options);
		this._init();
	}

	var p = FormSlider.prototype;

	p.constructor = FormSlider;

	p._init = function() {
		this.fixed = this.options.fixed;
		this.min = toFixed(this.options.min, this.fixed);
		this.max = toFixed(this.options.max, this.fixed);
		this.valueRange = this.max - this.min;

		this.onReady = $.isFunction(this.options.onReady) ? this.options.onReady : null;
		this.onSlide = $.isFunction(this.options.onSlide) ? this.options.onSlide : null;
		this.onChange = $.isFunction(this.options.onChange) ? this.options.onChange : null;

		// 生成回调代理
		this._onSlide = $.proxy(this, '_onSlide');
		this._onSlideEnd = $.proxy(this, '_onSlideEnd');

		var range = this.options.range;
		if (range === 'min' || range === 'max') {
			range = this.range = {
				name: this.options.rangeName,
				type: range
			};

			if (range.type === 'min') range.startToEnd = true;
			else if (range.type === 'max') range.startToEnd = false;
		} else {
			range = this.range = null;
		}

		var pos = {},
			box = {
				x: '50%',
				y: '50%',
				width: 0,
				height: 0
			},
			lockX = false,
			lockY = false;

		if (this.options.isVer) {
			this.cursor = this.options.cursor || 'ns-resize';
			this.dir = 'y';
			pos.x = '50%';
			lockX = true;

			if (range) {
				range.thicknessProp = 'width';
				if (range.startToEnd) range.rangeStartProp = 'top';
				else range.rangeStartProp = 'bottom';
			}
		} else {
			this.cursor = this.options.cursor || 'ew-resize';
			this.dir = 'x';
			pos.y = '50%';
			lockY = true;

			if (range) {
				range.thicknessProp = 'height';
				if (range.startToEnd) range.rangeStartProp = 'left';
				else range.rangeStartProp = 'right';
			}
		}

		this._initElement();

		var dragElementOptions = {
			parent: this.$slider,
			cursor: this.cursor,
			pos: pos,
			box: box,
			lockX: lockX,
			lockY: lockY,
			bounce: false,
			onDrag: this._onSlide,
			onDragEnd: this._onSlideEnd
		};

		this.dragElement = new DragElement(this.$handle, dragElementOptions);

		this.value(this.options.value);
	};

	// options 只支持更新 min、max、value
	// options 可以为数字，表示 value 值
	// 如果不是数字，且非 false，但又不是一个对象，则按空对象对待
	p._updateOptions = function(options) {
		if (typeof options === 'number') {
			options = { value: options };
		} else if (options && !$.isPlainObject(options)) {
			options = {};
		}

		// range 控件不支持小数
		// 如果指定的 min 包含小数，则读取到的 value 会被强制小数部分等于 min 的小数部分，而整数部分会被反向四舍五入
		// 如果指定的 value 包含小数，则读取到的值会四舍五入
		// 因此在读取值后，直接将其解析成功整数
		options.min = typeof options.min !== 'undefined' ? options.min : (parseInt(this.$input.prop('min')) || undefined);
		options.max = typeof options.max !== 'undefined' ? options.max : (parseInt(this.$input.prop('max')) || undefined);
		options.value = typeof options.value !== 'undefined' ? options.value : (parseInt(this.$input.prop('value')) || undefined);

		if (this.options) {
			$.extend(this.options, options);
		} else {
			options.className = options.className || this.$input.data('class');
			this.options = $.extend({}, defaultOptions, options);
		}
	};

	p._initElement = function() {
		this.$slider = $('<div>')
					.attr(this.options.prop)
					.addClass(this.options.className);

		this.$input
			.prop({
				'min': this.min,
				'max': this.max
			})
			.after(this.$slider)
			.hide()
			.appendTo(this.$slider);

		if (this.$slider.css('position') === 'static') {
			this.$slider.css('position', 'relative');
		}

		if (this.range) {
			this.$range = getElementByName(this.range.name, this.$slider)
				.attr(this.options.rangeProp)
				.css({
					'position': 'absolute',
					'pointer-events': 'none'
				})
				.css(this.range.rangeStartProp, 0)
				.css(this.range.thicknessProp, '100%')
				.appendTo(this.$slider);
		}

		this.$handle = getElementByName(this.options.handleName, this.$slider)
			.attr(this.options.handleProp)
			.css({
				'position': 'absolute',
				'z-index': 1
			})
			.appendTo(this.$slider);
	};

	p._onSlide = function(pos) {
		var percent = pos[1][this.dir],
			value = percentToPx(percent, this.valueRange) + this.min;
		this._setValue(value, percent, true);
	};

	p._onSlideEnd = function(pos) {
		var percent = pos[1][this.dir],
			value = percentToPx(percent, this.valueRange) + this.min;
		this._setValue(value, percent);
	};

	// 设置值并联动视图
	p._setValue = function(value, percent, isSlide) {
		value = Math.min(Math.max(value, this.min), this.max);
		value = this.fixed > 0 ? value.toFixed(this.fixed) : value | 0;

		// 联动视图
		if (this.$range) {
			percent = this.range.startToEnd ? percent : 100 - percent;
			this.$range.width(percent + '%');
		}

		if (!isSlide) {
			if (value == this.oldValue) return;
			this.oldValue = this._value;
		}

		this._value = value;
		this.$input.prop('value', this._value);
		this.$input.attr('value', this._value);

		if (isSlide) {
			this.$input.trigger('input');
			this.onSlide.call(this, this._value, this.oldValue);
		} else {
			if (this.oldValue) {
				this.$input.trigger('change');
				this.onChange.call(this, this._value, this.oldValue);
			} else {
				this.onReady.call(this, this._value);
			}
		}
	};

	// 设置或返回当前值
	p.value = function(value) {
		if (typeof value === 'string') {
			value = parseFloat(value);
		}

		if (typeof value === 'number') {
			var percent = pxToPercent(value - this.min, this.valueRange),
				pos = {};
			this._setValue(value, percent);
			pos[this.dir] = percent + '%';
			this.dragElement.setPos(pos);
		}

		return this._value;
	};

	// options 可选参数，是新的配置选项，但仅支持修改 value、min、max
	// options 可以为数字，表示 value 值
	// 如果传入 true 或者一个非数字非 false 的值，则按空对象对待，作用是根据控件元素属性绑定的 value、min、max 来更新控件
	p.update = function(options) {
		this.dragElement.update();

		if (options) {
			this._updateOptions(options);
			this.value(this.options.value);
		}

		return this;
	};

	p.lock = function() {
		this.dragElement.lock();
		return this;
	};

	p.unlock = function() {
		this.dragElement.unlock();
		return this;
	};

	p.destroy = function() {
		this.dragElement.destroy();
		this.$slider.after(this.$input.show());
		this.$slider.remove();
		this.$slider = null;
		this.$input = null;
		this.$handle = null;
		this.$range = null;
	};

	/**
	 * 根据name获取对应的元素，如果不存在，则重新创建一个
	 * @param  {String}       name    类名或者选择器
	 * @param  {jQueryObject} context 查找该元素时所限制的上下文环境，默认为 document
	 * @param  {String}       link    如果是一个超链接，则传入链接地址
	 * @return {jQueryObject} 返回获取到的 jQuery 对象
	 */
	function getElementByName(name, context, link) {
		var elem = link ? '<a href="' + link + '">' : '<div>';
		if (!name) return $(elem);

		var $elem = $(name, context);
		if (!$elem.length) {
			$elem = $(elem);
			var arr = name.split(' '),
				n = arr[arr.length - 1];

			if (!n.indexOf('#')) $elem.attr('id', name.substr(1));
			else if (!n.indexOf('.')) $elem.addClass(name.substr(1))
			else $elem.addClass(n);
		}

		return $elem;
	}

	// 像素转百分比
	function pxToPercent(value, base) {
		if (typeof value !== 'number') value = parseFloat(value);
		if (typeof base !== 'number') base = parseFloat(base);
		return value / base * 100;
	}

	// 百分比转像素
	function percentToPx(value, base) {
		if (typeof value !== 'number') value = parseFloat(value);
		if (typeof base !== 'number') base = parseFloat(base);
		return value / 100 * base;
	}

	// 保留小数为指定位数
	function toFixed(value, num) {
		return parseFloat(parseFloat(value).toFixed(num));
	}

	return FormSlider;
}));