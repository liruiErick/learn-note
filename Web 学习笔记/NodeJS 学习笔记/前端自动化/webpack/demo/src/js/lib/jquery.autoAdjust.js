/**
 * @brief jquery.autoAdjust v1.1 按屏幕尺寸自动调整页面大小到一屏内完全显示
 * @author 白俊杰 625603381@qq.com 2014/11/14
 * @param option 一个配置选项
 * @option_param useScale 是否使用CSS3缩放来进行屏幕自适应调整，默认关闭。如果开启会提高自适应效率，但会降低图片和文字的质量
 * @option_param vScroll 是否启用横屏时带滚动条显示，默认为是。这样的好处是横屏时不会缩小页面，使一些交互页面便于操作
 * @option_param oneScreen 是否一屏幕显示
 * @option_param nowrapClass 如果元素是倚靠屏幕边缘定位的，那么应该为元素声明一个类，以便自动调整时程序忽略掉它。默认类名为 "nowrap"
 * @option_param noscaleClass 如果元素不需要此程序来做缩放，那么应该为元素声明一个类，以便自动调整时程序忽略掉它。默认类名为 "noscale"
 * @option_param wrapSize 包裹层的初始化大小
 */

(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		factory(root.jQuery);
	}

}(this, function($) {
	"use strict";

	var $win = $(window);

	$.fn.autoAdjust = function(option) {
		this.each(function() {
			new AutoAdjust(this, option);
		});
		return this;
	}

	var AutoAdjust = function(container, option) {
		var opt = {
			oneScreen: false, //是否一屏显示
			useScale: false, //是否使用CSS3缩放来进行屏幕自适应调整。
			vScroll: true, //是否启用横屏时带滚动条显
			nowrapClass: "nowrap",
			noscaleClass: "noscale",
			wrapSize: {width: 320, height: 480}
		};
		$.extend(true, opt, option);

		this.useScale = !!opt.useScale;
		this.vScroll = !!opt.vScroll;
		this.oneScreen = !!opt.oneScreen;
		this.nowrapClass = opt.nowrapClass;
		this.noscaleClass = opt.noscaleClass;
		this.initSize = opt.wrapSize;

		this.$obj = $(container).css("display", "none");

		this.elems = []; //包含所有内容元素的jQuery对象数组
		this._initElems(this.$obj);

		this.scale = 1; //初始设置大小相对于屏幕的缩放比例

		if (this.oneScreen) {
			this.wrapScale = 1; //包裹层相对于屏幕的缩放比例示。
			this.calculatePositionCount = 0; //用于记录计算位置的执行次数。如果启用了CSS3缩放来进行屏幕自适应调整，则该值大于0后，不在更新包裹内元素的大小和位置

			// 获取初始设置大小
			this.initSize.width = this.initSize.width || $win.width();
			this.initSize.height = this.initSize.height || $win.height();
			this.wrapWidth = this.initSize.width;
			this.wrapHeight = this.initSize.height;

			// 创建容器内的包裹层
			this.$wrap = $("<div class='wrap'>").css({
				"position": "absolute",
				"left": "50%",
				"top": "50%"
			});
		}

		// 屏幕调整自适应
		this._resize = $.proxy(this, "_resize");
		this._resize();
		$win.resize(this._resize);

		if (this.oneScreen) {
			this.$obj
				.children(":not(."+this.nowrapClass+")")
				.appendTo(this.$wrap);
			this.$obj.append(this.$wrap);
		}

		this.$obj.css("display", "");
	}

	var p = AutoAdjust.prototype;

	// 定义按比例缩放的属性数组
	p.scaleArr = [
		"font-size",
		"line-height",
		"width",
		"height",
		"max-width",
		"max-height",
		"min-width",
		"min-height",
		"padding",
		"margin",
		"background-size",
		//"border-left-width",
		//"border-right-width",
		//"border-top-width",
		//"border-bottom-width",
		"left",
		"right",
		"top",
		"bottom",
		"x",
		"y"
	];

	p._resize = function() {
		this.winWidth = $win.width();
		this.winHeight = $win.height();

		if (this.oneScreen) {
			var isScroll;
			if (this.vScroll) {
				// 即使设置了横屏滚动条，且已处于横屏状态，也只有在窗口高度小于初始化高度的时候才设置溢出纵向滚动
				if (this.winWidth > this.winHeight && this.winHeight < this.initSize.height) {
					isScroll = true;
					this.winHeight = this.winWidth / this.initSize.width * this.initSize.height;
					this.$wrap.css("top", 0);
				} else {
					this.$wrap.css("top", "50%");
				}
			}
		}

		// 计算包裹层缩放比
		var sX = this.winWidth / this.initSize.width,
			sY = this.winHeight / this.initSize.height;

		if (this.oneScreen) {

			if (sX > sY) this.scale = sY;
			else this.scale = sX;

			if (this.useScale && this.calculatePositionCount) { //在初始化时，包裹层需要根据当前容器大小调整一次，因此这里不执行
				// 从第二次调整开始，根据第一次调整的大小计算缩放比例
				sX = this.winWidth / this.wrapWidth;
				sY = this.winHeight / this.wrapHeight;
				if (sX > sY) this.wrapScale = sY;
				else this.wrapScale = sX;
				this._scale(this.$wrap, this.wrapScale);
			} else {
				this.wrapWidth = this.initSize.width * this.scale;
				this.wrapHeight = this.initSize.height * this.scale;
				this.$wrap.css({
					"width": this.wrapWidth,
					"height": this.wrapHeight,
					"margin-left": -this.wrapWidth * .5,
					"margin-top": isScroll ? 0 : -this.wrapHeight * .5
				});
			}
		} else {
			this.scale = sX;
		}

		this._calculateElementPosition(); //则计算所有元素位置
	};

	// 初始化所有元素
	p._initElems = function($obj, nowrap) {
		var $children = $obj.children();
		if (!$children.length) return;

		var self = this;
		$children.each(function(i, n) {
			var $elem = $(n);
			if ($elem.hasClass(self.noscaleClass)) return;

			$elem.custom = {};
			$elem.custom.style = {};
			$elem.custom.newStyle = {};
			$elem.custom.nowrap = nowrap || $elem.hasClass(self.nowrapClass);

			for (var j = 0, jl = self.scaleArr.length; j < jl; j++) {
				var prop = self.scaleArr[j];
				$elem.custom.style[prop] = $elem.custom.newStyle[prop] = self._getStyle(n, prop);
			}
			self.elems.push($elem);
			self._initElems($elem, $elem.custom.nowrap);
		});
	};

	// 计算各个元素的具体位置
	p._calculateElementPosition = function() {
		for (var i = 0, il = this.elems.length; i < il; i++) {
			var $elem = this.elems[i];
			// 如果开启了CSS3缩放适应屏幕模式，那么包裹层内元素这里只执行一次
			if (this.oneScreen
			&& this.useScale
			&& !$elem.custom.nowrap
			&& this.calculatePositionCount) continue;

			// 按缩放比例重新计算其他数值类样式
			for (var j = 0, jl = this.scaleArr.length; j < jl; j++) {
				var prop = this.scaleArr[j];
				$elem.custom.newStyle[prop] = this._calculateScaleValue($elem.custom.style[prop]);
			}
			// 设置新计算出的样式
			$elem.css($elem.custom.newStyle);
		}

		this.calculatePositionCount++;
	};

	// 按比例计算值，如果值为百分比或者em，则直接返回原值
	p._calculateScaleValue = function(value) {
		var valueArr = (value + "").split(" "),
			l = valueArr.length,
			v;

		while (l--) {
			v = valueArr[l];

			if (!this._isPercent(v) && !this._isEm(v)) {
				var number = parseFloat(v);
				if (!isNaN(number)) valueArr[l] = number * this.scale + "px";
			}
		}
		return valueArr.join(" ");
	};

	// 设置CSS3缩放
	p._scale = function($obj, ratio) {
		var style = {
			"-webkit-transform": "scale("+ratio+")",
			"-moz-transform": "scale("+ratio+")",
			"-ms-transform": "scale("+ratio+")",
			"-o-transform": "scale("+ratio+")",
			"transform": "scale("+ratio+")"
		}
		$obj.css(style);
	}
	// 判断是否为百分比
	p._isPercent = function(value) {
		var str = value + "";
		return /%$/.test(str);
	};
	// 判断是否为em
	p._isEm = function(value) {
		var str = value + "";
		return /em$/.test(str);
	};
	// 像素转百分比
	p._pxToPercent = function(value, base) {
		var number = parseFloat(value);
		return number/base*100;
	};
	// 百分比转像素
	p._percentToPx = function(value, base) {
		var number = parseFloat(value);
		return number/100*base;
	};
	// 单位转换
	p._unitTo = function(value, unit) {
		var number = parseFloat(value);
		if (!unit) return number;
		return number + unit;
	};
	// 获取最终样式值（如果某个样式值为百分比，当元素display不为none时，则获取到的是计算后的像素值）
	p._getStyle = function(elem, pro) {
		elem = ("string" == typeof elem) ? document.getElementById(elem) : elem;
		if (!elem) return null;
		if (elem.style[pro]) { //内联
			return elem.style[pro];
		} else if (elem.currentStyle) { //IE
			return elem.currentStyle[pro];
		} else if (window.getComputedStyle) { //W3C标准
			var s = window.getComputedStyle(elem, null);
			return s[pro];
		} else if (document.defaultView && document.defaultView.getComputedStyle) { //FF,CHROME等
			pro = pro.replace(/([A-Z])/g, "-$1"); //如marginLeft转为margin-Left
			pro = pro.toLowerCase(); //再转为小写margin-left
			var s = document.defaultView.getComputedStyle(elem, "");
			return s && s.getPropertyValue(pro);
		} else return null;
	};

	return $;

}));

