(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.StateButton = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click',

		defaultOptions = {
			delegate: '', // 一个选择器，表示按钮的事件委托的对象。此时按钮的选择器必须是该委托选择器的子选择器
			isActive: false, // 初始化时是否激活
			activeClass: 'active', // 激活时的类名。因为这个类名是确定的，一般用于添加特定的样式
			active: 'data-active', // 激活时的类名。如果是自定义属性名，则读取该属性的值作为类名
			unactive: 'data-unactive', // 未激活时的类名。如果是自定义属性名，则读取该属性的值作为类名
			onChange: function(isActive, $btn){}, // 状态改变时的回调，this指向按钮的DOM对象，同时将表示是否处于激活状态的布尔值以及按钮的jQuery对象作为参数传入
			onClick: function(e, isActive, $btn){} // 点击回调，this指向点击按钮的DOM对象，同时将事件对象、表示是否处于激活状态的布尔值以及点击按钮的jQuery对象作为参数传入
			// 如果在回调函数中 return false，则不会改变按钮状态
		};

	/**
	 * @brief 状态按钮
	 * @param {string} btn 按钮选择器
	 * @param {string} options 配置选项
	 */
	function StateButton(btn, options) {
		// 读取配置数据
		var opt = $.extend({}, defaultOptions, options);

		this.activeClass = opt.activeClass;
		this.active = opt.active;
		this.unactive = opt.unactive;
		this.onChange = opt.onChange;
		this.onClick = opt.onClick;

		if (!this.active.indexOf('data-')) {
			this.activeDataName = this.active.replace('data-', '');
		}

		if (!this.unactive.indexOf('data-')) {
			this.unactiveDataName = this.unactive.replace('data-', '');
		}

		// 生成回调代理
		this._onClick = $.proxy(this, '_onClick');

		if (opt.delegate) {
			this.$delegate = $(opt.delegate).on(clickEventType, btn, this._onClick);
			this.btn = btn;
		} else {
			this.$btn = $(btn);
			this._getActiveClass(this.$btn);
			this.$btn.on(clickEventType, this._onClick);
		}

		if (opt.isActive) {
			this.toggle(true);
		}
	}

	var p = StateButton.prototype;

	p.constructor = StateButton;

	p._onClick = function(e) {
		e.preventDefault();

		var $btn;
		if (this.$delegate) {
			$btn = $(e.currentTarget);
			this._getActiveClass($btn);
		} else {
			$btn = this.$btn;
		}

		var isActive = !$btn.hasClass(this.activeClass);

		if (this.onClick.call(this, e, isActive, $btn) === false) return;

		this._toggle($btn, isActive);
	};

	p._getActiveClass = function($btn) {
		this.active = this.activeDataName ?
			$btn.data(this.activeDataName) :
			this.active;
		this.unactive = this.unactiveDataName ?
			$btn.data(this.unactiveDataName) :
			this.unactive;
	};

	p._toggle = function($btn, isActive) {
		if (typeof isActive === 'undefined') {
			isActive = !$btn.hasClass(this.activeClass);
		} else if (isActive === $btn.hasClass(this.activeClass)) {
			return;
		}

		if (isActive) {
			$btn.removeClass(this.unactive);
			$btn.addClass(this.active);
			$btn.addClass(this.activeClass);

		} else {
			$btn.removeClass(this.active);
			$btn.addClass(this.unactive);
			$btn.removeClass(this.activeClass);
		}

		this.onChange.call(this, isActive, $btn);
	};

	p.toggle = function(isActive, $btn) {
		if (this.$btn) {
			$btn = this.$btn;
		}

		if ($btn) {
			this._toggle($btn, isActive);
		} else if (this.$delegate) {
			var $btns = this.$delegate.find(this.btn),
				_this = this;
			$btns.each(function() {
				var $btn = $(this);
				_this._getActiveClass($btn);
				_this._toggle($btn, isActive);
			});
		}
	};

	return StateButton;
}));
