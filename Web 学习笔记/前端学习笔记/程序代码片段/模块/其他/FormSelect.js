/*
html 格式如下：
<div class="select">
	<div class="select-btn">请选择</div>
	<div class="select-menu">
		<div class="select-option">选项1</div>
		<div class="select-option">选项2</div>
		<div class="select-option">选项3</div>
	</div>
</div>
*/

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.FormSelect = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click',

		$doc = $(document),

		id = 0, // 每个select注册在document上的点击事件必须有独立的命名空间

		defaultOptions = {
			className: '', // 虚拟 select 控件的类名。如果为设置，则会取元素的 data-class 作为自己的类名
			prop: {}, // 为虚拟 select 元素添加的属性
			options: null, // 选项数组，格式如下：
						// [
						//     '选项1',
						//     '选项2',
						//     '选项3'
						// ]
						// or
						// [
						//     { value: 'option1', text: '选项1' },
						//     { value: 'option2', text: '选项2' },
						//     { value: 'option3', text: '选项3' }
						// ]
			value: '', // 初始化时的当前值。
					// 如果 options 数组中每一个值是字符串，则 value 为该值的索引
					// 如果 options 数组中每一个值是对象，则 value 为该对象的 value
			placeholder: '请选择', // 当没有当前值时的默认占位符

			valueClassName: 'select-value', // 值显示区域的类名
			menuClassName: 'select-menu', // 菜单容器的类名
			optionClassName: 'select-option', // 选项的类名

			activeType: 'click', // 激活事件，可以是'click'或者'hover'
			activeClass: 'active', // 选项焦点类
			duration: 0, // 选项容器显示与隐藏时的动画持续时间。也可以为一个数组，包含两个值，分别为显示时的动画持续时间和隐藏时的动画持续时间
			easing: '', // 选项容器显示与隐藏时应用的缓动。也可以为一个数组，包含两个值，分别为显示时的缓动和隐藏时的缓动

			// 初始化结束后以及每次 update 后的回调。this 指向 FormSlider 的实例对象
			// value    当前选项的 value
			// text     当前选项的 text
			// $option  当前虚拟 select 选中选项的 jQuery 对象
			// $select  当前虚拟 select 的 jQuery 对象
			// 如果在回调函数中 return false，则不会自动关闭下拉列表
			onReady: function(value, text, $option, $select) {},

			// 选择时的回调。this 指向 FormSlider 的实例对象
			// value    当前选项的 value
			// text     当前选项的 text
			// $option  当前虚拟 select 选中选项的 jQuery 对象
			// $select  当前虚拟 select 的 jQuery 对象
			// 如果在回调函数中 return false，则不会自动关闭下拉列表
			onSelect: function(value, text, $option, $select) {},

			// 当值改变时的回调。this 指向 FormSlider 的实例对象
			onChange: function(newValue, newText, $newOption, oldValue, oldText, $oldOption, $select) {}
		};

	function FormSelect(select, options) {
		if (!(this instanceof FormSelect)) {
			return new FormSelect(select, options);
		}

		this.$input = $(select);

		if (!this.$input.length) {
			throw new Error('select element not find');
		} else if (this.$input.length > 1) {
			var selectGroup = [];
			this.$input.each(function() {
				selectGroup.push(new FormSelect(this, options));
			});

			return selectGroup;
		}

		if ($.cssHooks.scale) {
			this.supportScale = true;
			defaultOptions.duration = [300, 0];
			defaultOptions.easing = ['easeOutBack', ''];
		}

		this._updateOptions(options);
		this._init();
	}

	var p = FormSelect.prototype;

	p.constructor = FormSelect;

	p._init = function() {

		this.placeholder = this.options.placeholder || this.$input.data('placeholder');
		this.optionClassName = this.options.optionClassName;
		this.optionSelector = '.' + this.optionClassName;
		this.activeType = this.options.activeType;
		this.activeClass = this.options.activeClass;
		this.onReady = this.options.onReady;
		this.onSelect = this.options.onSelect;
		this.onChange = this.options.onChange;

		if ($.isArray(this.options.duration)) {
			this.startDuration = this.options.duration[0];
			this.endDuration = this.options.duration[1];
		} else {
			this.startDuration = this.endDuration = this.options.duration;
		}

		if ($.isArray(this.options.easing)) {
			this.startEasing = this.options.easing[0];
			this.endEasing = this.options.easing[1];
		} else {
			this.startEasing = this.endEasing = this.options.easing;
		}

		this._initElement();
		this.update();

		if (this.$curOption && this.$curOption.length === 1) {
			this.onSelect.call(this, this._value, this._text, this.$curOption, this.$select);
		}

		// 生成回调代理
		this._onClickDoc = $.proxy(this, '_onClickDoc');
		this._onClickMenu = $.proxy(this, '_onClickMenu');
		this._onClickSelect = $.proxy(this, '_onClickSelect');
		this._onEnterSelect = $.proxy(this, '_onEnterSelect');
		this._onLeaveSelect = $.proxy(this, '_onLeaveSelect');

		this.eventId = id++;
		this._addEvent();
	};

	p._updateOptions = function(options) {
		if ($.isArray(options)) {
			options = { options: options };
		}

		if (this.options) {
			$.extend(this.options, options);
		} else {
			options.className = options.className || this.$input.data('class');
			this.options = $.extend({}, defaultOptions, options);
		}
	};

	p._initElement = function() {
		this.$select = $('<div>')
					.attr(this.options.prop)
					.addClass(this.options.className);
		this.$input.after(this.$select).hide().appendTo(this.$select);
		this.input = this.$input[0];

		this.$value = $('<div>').addClass(this.options.valueClassName).appendTo(this.$select);
		this.$menu = $('<div>').addClass(this.options.menuClassName).appendTo(this.$select);

		this.$menu.hide();
		this.isShow = false;
	};

	p._addEvent = function() {
		this.$menu.on(clickEventType, this.optionSelector, this._onClickMenu);
		if (this.activeType === 'click') {
			$doc.on(clickEventType + '.' + this.eventId, this._onClickDoc);
			this.$select.on(clickEventType, this._onClickSelect);
		} else if (this.activeType === 'hover')  {
			this.$select.on('mouseenter', this._onEnterSelect);
			this.$select.on('mouseleave', this._onLeaveSelect);
		}
	};

	p._removeEvent = function() {
		this.$menu.off(clickEventType, this.optionSelector, this._onClickMenu);
		if (this.activeType === 'click') {
			$doc.off(clickEventType + '.' + this.eventId, this._onClickDoc);
			this.$select.off(clickEventType, this._onClickSelect);
		} else if (this.activeType === 'hover')  {
			this.$select.off('mouseenter', this._onEnterSelect);
			this.$select.off('mouseleave', this._onLeaveSelect);
		}
	};

	p._setValue = function(value) {
		var $oldOption = this.$curOption,
			$curOption = this._getOptionByValue(value),
			oldValue = this._value,
			oldText = this._text,
			newValue = $curOption && $curOption.data('value');

		if ((newValue || newValue === 0) && newValue === oldValue) return;

		this.$curOption && this.$curOption.removeClass(this.activeClass);

		if (newValue || newValue === 0) {
			this._text = $curOption.text();
			this.$curOption = $curOption.addClass(this.activeClass);
		} else {
			this._text = this.placeholder;
			this.$curOption = null;
		}

		this._value = newValue;
		this.$value.text(this._text);
		if (this.$curOption) this.input.selectedIndex = $curOption.data('index');
		else this.input.selectedIndex = -1;

		if ($oldOption === undefined) {
			this.onReady.call(this, this._value, this._text, this.$curOption, this.$select);
		} else {
			this.$input.trigger('change');
			this.onChange.call(this, this._value, this._text, this.$curOption, oldValue, oldText, $oldOption, this.$select);
		}
	};

	// 根据值获取对应选项
	p._getOptionByValue = function (value) {
		if (!value) return;
		var $curOption;
		this.$menu.find(this.optionSelector).each(function(i) {
			var $option = $(this);
			if ($option.data('value') == value) {
				$curOption = $option;
				return false;
			}
		});
		return $curOption;
	};

	p._onClickDoc = function(e) {
		if (this.isShow && !$.contains(this.$select[0], e.target)) {
			this.isShow = false;
			this._menuHide();
		}
	};

	p._onClickMenu = function(e) {
		this._setValue($(e.target).data('value'));

		if (this.onSelect.call(this, this._value, this._text, this.$curOption, this.$select) !== false) {
			this.isShow = false;
			this._menuHide();
		}

		return false;
	};

	p._onClickSelect = function(e) {
		e.preventDefault();

		if (this.isShow) {
			this.isShow = false;
			this._menuHide();
		} else {
			this.isShow = true;
			this._menuShow();
		}
	};

	p._onEnterSelect = function(e) {
		if (!this.isShow) {
			this.isShow = true;
			this._menuShow();
		}
	};

	p._onLeaveSelect = function(e) {
		if (this.isShow) {
			this.isShow = false;
			this._menuHide();
		}
	};

	p._menuShow = function() {
		var prop = {};
		prop['opacity'] = 0;
		if (this.supportScale) prop['scale'] = .5;

		this.$menu
			.stop()
			.css(prop)
			.show();

		prop['opacity'] = 1;
		if (this.supportScale) prop['scale'] = 1;

		this.$menu.animate(prop, this.startDuration, this.startEasing);
	};

	p._menuHide = function() {
		var $menu = this.$menu,
			prop = {};
		prop['opacity'] = 0;
		if (this.supportScale) prop['scale'] = .5;

		$menu
			.stop()
			.animate(prop, this.endDuration, this.endEasing, function() {
				$menu.hide();
			});
	};

	// options 可选参数，是新的配置选项
	// 但仅支持修改 value 与 options
	p.update = function(options) {
		if (options) this._updateOptions(options);

		var optionArr = this.options.options || this.$input.data('options') || this.input.options,
			value = this.input.value;

		if (optionArr) {
			if (typeof optionArr === 'string') {
				optionArr = eval("(" + optionArr + ")");
			}

			var html = '',
				optionClassName = this.optionClassName;

			for (var i = 0, option; option = optionArr[i]; i++) {
				if (typeof option !== 'object') {
					option = {
						value: i,
						text: option
					};
					optionArr[i] = option;
				} else if (!option.tagName) {
					this.input.options[i] = new Option(option.text, option.value);
				}

				if (option.selected) value = option.value;

				html += '<div class="' + optionClassName + '" data-value="' + option.value + '" data-index="' + i + '">' + option.text + '</div>'
			}

			this.$menu
				.empty()
				.html(html);
		}

		// 执行刷新方法时，本次传入的当前值优先级最高
		// 其次是获取到原生表单的 value 为当前值
		// 最后是使用上一次的有效值作为当前值
		value = (options ? options.value : this.options.value) || value || this.options.value;

		if (!value && this.activeClass) {
			var $curOption = this.$menu.find('.' + this.activeClass).removeClass(this.activeClass);
			if ($curOption.length) {
				value = $curOption.data('value');
			}
		}

		this.$curOption = undefined;
		this._setValue(value);

		return this;
	};

	p.value = function(value) {
		if (value) {
			this._setValue(value);
		}
		return this._value;
	};

	p.setactiveType = function(type) {
		this._removeEvent();
		this.$menu.hide();
		this.isShow = false;
		this.activeType = type;
		this._addEvent();

		return this;
	};

	p.destroy = function() {
		this._removeEvent();
		this.$select.after(this.$input.show());
		this.$select.remove();
		this.$select = null;
		this.$input = null;
		this.$value = null;
		this.$menu = null;
		this.$curOption = null;
	};

	return FormSelect;
}));
