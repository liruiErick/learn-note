(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.TabContent = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var is_lte_IE7 = false,
		ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		ieVersionNum = ieVersion && ieVersion[1] - 0;
	if (navigator.appName == 'Microsoft Internet Explorer' && ieVersionNum <= 7) is_lte_IE7 = true;

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click',

		defaultOptions = {
			content: '', // 内容元素选择器，与btn对应
			delegate: '', // 一个选择器，表示按钮的事件委托的对象。此时tab按钮的选择器必须是该委托选择器的子选择器
			activeClass: 'active', // 焦点类
			activeEvent: 'click', // 激活事件，可以是'click'或者'mouseenter'
			initIndex: 0, // 初始焦点的索引
			tabDuration: 0, // 切换动画持续时间

			// 以下回调中 this 指向当前按钮的 DOM 对象
			// i            表示当前单击或准备切换的索引
			// $curBtn      表示当前单击或准备切换按钮的 jQuery 对象
			// $curContent  表示当前单击或准备切换内容的 jQuery 对象
			onClick: function(i, $curBtn, $curContent) {}, // 单击后的回调。即单击当前按钮也会回调。
			onTab: function(i, $curBtn, $curContent) {} // 切换的回调。即单击当前按钮不会回调。如果回调返回值为false，则不切换。
		};

	/**
	 * [TabContent description]
	 * @param {String | DOM | jQueryObject}        btn      tab按钮的选择器
	 * @param {String | DOM | jQueryObjectObject}  options  配置选项，如果没有配置选项，这个参数可以直接传入 callback
	 * @param {Function}                           callback 切换回调
	 */
	function TabContent(btn, options, callback) {
		if (!(this instanceof TabContent)) {
			return new TabContent(btn, options);
		}

		this.btnSelector = btn;
		if ($.isFunction(options)) {
			this.onTab = options;
			this.options = $.extend({}, defaultOptions);
		} else {
			if ($.isPlainObject(options)) {
				options.onTab = callback;
				this.options = $.extend({}, defaultOptions, options);
			} else{
				this.options = $.extend({}, defaultOptions, { content: options, onTab: callback });
			}
		}

		this._init();
	}

	var p = TabContent.prototype;

	p._init = function() {
		this.contentSelector = this.options.content;
		this.delegateSelector = this.options.delegate;
		this.activeClass = this.options.activeClass;
		this.activeEvent = this.options.activeEvent;
		this.initIndex = this.options.initIndex;
		this.tabDuration = this.options.tabDuration / 2;
		this.onClick = this.options.onClick;
		this.onTab = this.options.onTab;

		// 生成回调代理
		this._init = $.proxy(this, '_init');
		this._onClick = $.proxy(this, '_onClick');

		if (this.delegateSelector) {
			this.$delegate = $(this.delegateSelector);
		} else {
			this.$btn = $(this.btnSelector);
			this.$content = $(this.contentSelector);
		}

		var $content = this._getElem('content');
		if ($content.length) {
			$content.hide();
		}

		this.$curBtn = $();

		// IE6-7 在使用 IE9.js 做兼容时，会生成一些元素用于模拟伪元素，如果当前焦点内含有伪元素，那么生成后的模拟伪元素无法根据样式改变，因此需要延时添加焦点类
		if (is_lte_IE7) window.setTimeout(this._initBtn);
		else this._initBtn();

		if (this.activeEvent === 'click') {
			this.activeEvent = clickEventType;
		}

		this.setActiveEvent(this.activeEvent);
	};

	p._initBtn = function() {
		var $btn = this._getElem('btn'),
			index = this.initIndex;

		// 优先选择页面上添加焦点类的按钮为当前按钮
		var $curBtn = $btn.filter('.' + this.activeClass).removeClass(this.activeClass);

		if ($curBtn.length) {
			index = $btn.index($curBtn);
		}

		this.tab(index);
	};

	p._getElem = function(keyword) {
		var $elem;
		if (this.delegateSelector) {
			$elem = keyword === 'btn' ? $(this.delegateSelector + ' ' + this[keyword + 'Selector']) : $(this[keyword + 'Selector'])
		} else {
			$elem = this['$' + keyword]
		}
		return $elem;
	};

	p._setCurBtn = function($curBtn) {
		this.$curBtn && this.$curBtn.removeClass(this.activeClass);
		this.$curBtn = $curBtn;
		this.$curBtn && $curBtn.addClass(this.activeClass);
	};

	p._setCurContent = function($curContent) {
		if (this.$curContent) {
			var _this = this;
			this.$curContent
				.stop()
				.fadeOut(this.tabDuration, function() {
					_this.$curContent = $curContent;
					_this.$curContent && _this.$curContent.stop().fadeIn(_this.tabDuration);
				});
		} else {
			this.$curContent = $curContent;
			this.$curContent && this.$curContent.show();
		}

	};

	p._setCurrent = function(index, $curBtn, $curContent) {
		this.curIndex = index;
		this._setCurBtn($curBtn);
		this._setCurContent($curContent);
	};

	p.setActiveEvent = function(eventName) {
		if (this.delegateSelector) {
			this.$delegate.off(this.activeEvent, this.btnSelector, this._onClick);
			this.$delegate.on(eventName, this.btnSelector, this._onClick);
			this.activeEvent = eventName;
		} else {
			this.$btn.off(this.activeEvent, this._onClick);
			this.$btn.on(eventName, this._onClick);
			this.activeEvent = eventName;
		}
	};

	p._onClick = function(e) {
		e.preventDefault();

		var $btn = this._getElem('btn'),
			$content = this._getElem('content'),
			index = $btn.index(e.currentTarget),
			$curBtn = $(e.currentTarget),
			$curContent;

		if (index >= 0 && index < $content.length) {
			$curContent = $content.eq(index);
		}

		if (typeof this.onClick === 'function') this.onClick.call($curBtn[0], index, $curBtn, $curContent);

		this._onTab(index, $curBtn, $curContent);
	};

	p._onTab = function(index, $curBtn, $curContent) {

		if ($curBtn) {
			if ($curBtn[0] === this.$curBtn[0]) return;

			if (typeof this.onTab === 'function') {
				var returnValue = this.onTab.call($curBtn[0], index, $curBtn, $curContent);

				if (returnValue === false) { // 如果回调返回值为false，则不切换
					return returnValue;
				} else if (typeof returnValue === 'object' && returnValue.then) { // 如果返回值是一个延迟对象，则在允许时切换
					var _this = this;
					returnValue.then(function() {
						_this._setCurrent(index, $curBtn, $curContent);
					});
					return returnValue;
				}
			}
		} else {
			$curBtn = $();
		}

		this._setCurrent(index, $curBtn, $curContent);
	};

	p.tab = function(index) {
		var $btn = this._getElem('btn'),
			$content = this._getElem('content'),
			$curBtn,
			$curContent;

		if (index >= 0 && index < $btn.length) {
			$curBtn = $btn.eq(index);
		}

		if (index >= 0 && index < $content.length) {
			$curContent = $content.eq(index);
		}

		this._onTab(index, $curBtn, $curContent);
	};

	p.destroy = function() {
		if (this.delegateSelector) {
			this.$delegate.off(clickEventType, this.btnSelector, this._onClick);
			this.$delegate = null;
		} else {
			this.$btn.off(clickEventType, this._onClick);
			this.$btn = null;
			this.$content = null;
		}

		this.$curBtn = null;
		this.$curContent = null;
	};

	return TabContent;
}));
