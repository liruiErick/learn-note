(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		root.bjj = root.bjj || {};
		root.bjj.TabContent = factory(root.jQuery);
	}

}(this, function($) {
	"use strict";

	var is_lte_IE7 = false,
		ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		ieVersionNum = ieVersion && ieVersion[1] - 0;
	if (navigator.appName == "Microsoft Internet Explorer" && ieVersionNum <= 7) is_lte_IE7 = true;

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? "touchend" : "click",

		defaultOption = {
			content: "", // 内容元素选择器，与btn对应
			delegate: "", // 一个选择器，表示按钮的事件委托的对象。此时按钮的选择器必须是该委托选择器的子选择器
			activeClass: "active", // 焦点类
			activeEvent: "click", // 激活事件，可以是"click"或者"mouseenter"
			initIndex: 0, // 初始焦点的索引
			tabDuration: 0, // 切换动画持续时间
			onTab: function(i, $curBtn){} // 切换回调，this指向当前按钮的DOM对象，并将当前切换的索引以及按钮的jQuery对象作为参数传入
		};

	function TabContent(btn, option) {
		// 读取配置数据
		var opt = $.extend({}, defaultOption, option);

		this.btnSelector = btn;
		this.contentSelector = opt.content;
		this.delegateSelector = opt.delegate;
		this.activeClass = opt.activeClass;
		this.activeEvent = opt.activeEvent;
		this.initIndex = opt.initIndex;
		this.tabDuration = opt.tabDuration / 2;
		this.onTab = opt.onTab;

		// 生成回调代理
		this._init = $.proxy(this, "_init");
		this._onClick = $.proxy(this, "_onClick");

		if (this.delegateSelector) {
			this.$delegate = $(this.delegateSelector);
		} else {
			this.$btn = $(this.btnSelector);
			this.$content = $(this.contentSelector);
		}

		var $content = this._getElem("content");
		if ($content.length) {
			$content.hide();
		}

		this.$curBtn = $();

		// IE6-7 在使用 IE9.js 做兼容时，会生成一些元素用于模拟伪元素，如果当前焦点内含有伪元素，那么生成后的模拟伪元素无法根据样式改变，因此需要延时添加焦点类
		if (is_lte_IE7) window.setTimeout(this._init, 0);
		else this._init();

		if (this.activeEvent === "click") {
			this.activeEvent = clickEventType;
		}

		this.setActiveEvent(this.activeEvent);
	}

	var p = TabContent.prototype;

	p._init = function() {
		var $btn = this._getElem("btn"),
			index = this.initIndex;

		// 优先选择页面上添加焦点类的按钮为当前按钮
		var $curBtn = $btn.filter("." + this.activeClass).removeClass(this.activeClass);

		if ($curBtn.length) {
			index = $btn.index($curBtn);
		}

		this.tab(index);
	};

	p._getElem = function(keyword) {
		var $elem;
		if (this.delegateSelector) {
			$elem = keyword === "btn" ? $(this.delegateSelector + " " + this[keyword + "Selector"]) : $(this[keyword + "Selector"])
		} else {
			$elem = this["$" + keyword]
		}
		return $elem;
	};

	p._onClick = function(e) {
		e.preventDefault();
		if (e.currentTarget === this.$curBtn[0]) return;

		var $btn = this._getElem("btn"),
			index = $btn.index(e.currentTarget);

		this.tab(index);
	};

	p._setCurBtn = function(index, $curBtn) {
		this.$curBtn && this.$curBtn.removeClass(this.activeClass);
		this.$curBtn = $curBtn;
		this.$curBtn && $curBtn.addClass(this.activeClass);
	};

	p._setCurContent = function(index) {
		var $content = this._getElem("content"),
			$curContent = null;

		if (index >= 0 && index < $content.length) {
			$curContent = $content.eq(index);
		}

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

	p._setCurrent = function(index, $curBtn) {
		this.curIndex = index;
		this._setCurBtn(this.curIndex, $curBtn);
		this._setCurContent(this.curIndex);
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

	p.tab = function(index) {
		var $btn = this._getElem("btn"),
			curIndex = $btn.index(this.$curBtn),
			$curBtn;

		if (index == curIndex) {
			return;
		}

		if (index >= 0 && index < $btn.length) {
			var onTab = this.onTab;

			$curBtn = $btn.eq(index);
			if (typeof onTab === "function") {
				var returnValue = onTab.call($curBtn[0], index, $curBtn);

				if (returnValue === false) { // 如果回调返回值为false，则不切换
					return returnValue;
				} else if (typeof returnValue === "object" && returnValue.done) { // 如果返回值是一个延迟对象，则在允许时切换
					var _this = this;
					returnValue.done(function() {
						_this._setCurrent(index, $curBtn);
					});
					return returnValue;
				}
			}
		} else {
			$curBtn = $();
		}

		this._setCurrent(index, $curBtn);
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
