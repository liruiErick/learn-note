/**
 * @brief DynamicPage v1.6.4 触摸设备动态滑动页
 * @author baijunjie 625603381@qq.com 2015/8/7
 */
(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate', 'DragEvent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.dynamicPage = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	'use strict';

	var utils = {
		// 判断是否为百分比
		isPercent: function(value) {
			var str = value + '';
			return /%$/.test(str);
		},

		// 判断是否为em
		isEm: function(value) {
			var str = value + '';
			return /em$/.test(str);
		},

		// 判断对象是否为对象
		isObj: function(obj) {
			return typeof obj === 'object';
		},

		// 判断对象是否为数组
		isArray: function(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		},

		// 像素转百分比
		pxToPercent: function(value, base) {
			value = parseFloat(value);
			base = parseFloat(base);
			return value / base * 100 + '%';
		},

		// 像素转em
		pxToEm: function(value, base) {
			value = parseFloat(value);
			base = parseFloat(base);
			return value / base + 'em';
		},

		// 百分比转像素
		percentToPx: function(value, base) {
			value = parseFloat(value);
			base = parseFloat(base);
			return value / 100 * base;
		},

		// em转像素
		emToPx: function(value, base) {
			value = parseFloat(value);
			base = parseFloat(base);
			return value * base;
		},

		// 单位转换
		unitTo: function(value, unit) {
			value = parseFloat(value);
			if (!unit) return value;
			return value + unit;
		},

		// 将样式属性由js书写风格转为css书写风格
		styleFormat: function(style) {
			var newStyle = {};
			for (var i in style) {
				var prop = i.replace(/([A-Z])/g, '-$1'); //如marginLeft转为margin-Left
				prop = prop.toLowerCase(); //再转为小写margin-left
				newStyle[prop] = style[i];
			}
			return newStyle;
		},

		// 获取最终样式值（如果某个样式值为百分比，当元素display不为none时，则获取到的是计算后的像素值）
		getStyle: function(elem, pro) {
			elem = ('string' === typeof elem) ? document.getElementById(elem) : elem;
			if (!elem) return null;
			if (elem.style[pro]) { //内联
				return elem.style[pro];
			} else if (elem.currentStyle) { //IE
				return elem.currentStyle[pro];
			} else if (window.getComputedStyle) { //W3C标准
				var s = window.getComputedStyle(elem, null);
				return s[pro];
			} else if (document.defaultView && document.defaultView.getComputedStyle) { //FF,CHROME等
				pro = pro.replace(/([A-Z])/g, '-$1'); //如marginLeft转为margin-Left
				pro = pro.toLowerCase(); //再转为小写margin-left
				var s = document.defaultView.getComputedStyle(elem, '');
				return s && s.getPropertyValue(pro);
			} else return null;
		},

		// 让隐藏元素正确执行程序
		hideAction: function(jq, func, target) {
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
		},

		// 根据name获取对应的元素，如果不存在，则重新创建一个
		getElem: function(name, $container, link) {
			var elem = link ? '<a href="' + link + '">' : '<div>';
			if (!name) return $(elem);
			var $obj = $container.find(name);
			if (!$obj.length && name.indexOf('#') >= 0) $obj = $(name);

			if (!$obj.length) {
				$obj = $(elem);
				var arr = name.split(' '),
					n = arr[arr.length-1];
				if (!n.indexOf('#')) $obj.attr('id', name.substr(1));
				else if (!n.indexOf('.')) $obj.addClass(name.substr(1))
				else $obj.addClass(n);
			}
			return $obj;
		},

		// 判断元素是否含有滚动条
		isScroll: function(el) {
			var overflow_x = this.getStyle(el, 'overflow-x'),
				overflow_y = this.getStyle(el, 'overflow-y');
			return {
				x: !!((el.offsetWidth < el.scrollWidth) && (overflow_x === 'auto' || overflow_x === 'scroll')),
				y: !!((el.offsetHeight < el.scrollHeight) && (overflow_y === 'auto' || overflow_y === 'scroll'))
			};
		}
	}


	// 定义页元素对象
	var PageElement = function($obj) {
		this.$obj = $obj;
		this.style = {};
		this.scaleStyle = {};
		this.startStyle = {};
		this.scaleStartStyle = {};
		this.endStyle = {};
		this.scaleEndStyle = {};
		this.endStyleQueue = {};
		this.scaleEndStyleQueue = {};
	};


	var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
	var Class = function() {};
	Class.extend = function(prop) {
	    var _super = this.prototype;

	    initializing = true;
	    var prototype = new this();
	    initializing = false;

	    for (var name in prop) {
	        prototype[name] = typeof prop[name] === 'function' &&
	            typeof _super[name] === 'function' && fnTest.test(prop[name]) ?
	            (function(name, fn){
	                return function() {
	                    var tmp = this._super;
	                    this._super = _super[name];
	                    var ret = fn.apply(this, arguments);
	                    this._super = tmp;
	                    return ret;
	                };
	            })(name, prop[name]) :
	        prop[name];
	    }

	    function Class() {
	        if ( !initializing && this._init ) this._init.apply(this, arguments);
	    }
	    Class.prototype = prototype;
	    Class.prototype.constructor = Class;
	    Class.extend = this.extend;

	    return Class;
	};



	// 定义页对象
	var Page = Class.extend({

		_defaultConfig: {
			style: {}, //设置样式
			className: '', //可以为元素设置一个或一组类
			bgColor: '', //设置背景色
			bgImg: '', //设置背景图片的url。该背景图片以<img>的形式呈现，而非使用style，主要是为了便于监控加载进程
			basePath: '', //本页内图片资源的基路径
			bgSize: 'cover', //设置背景图片的覆盖方式，包含两个值：'contain'表示背景图片完全显示，'cover'表示背景图片覆盖整个屏幕
			onlyOne: false, //所有动画是否只显示一次，默认为 false
			elemConfig: [] //子元素的配置对象数组
		},

		_elemDefaultConfig: {
			url: '', //元素内图片路径
			html: '', //元素内html内容
			name: '', //设置元素的id名或者类名。传入一个选择器，会首先查找是否存在对应选择器的元素，如果存在，则使用该元素
			className: '', //可以为元素设置一个或一组类
			link: '', //跳转链接地址
			style: {}, //元素样式

			maxWidth: 0, //设置元素的最大宽度。如果超出该值，元素将会被等比缩放。（一般用于防止文本元素超出限定个宽度）
			maxHeight: 0, //设置元素的最大高度。如果超出该值，元素将会被等比缩放。
						//设置maxWidth或者maxHeight该参数后，可以通过设置元素的CSS属性transform-origin来调整缩放后的位置，比如缩放后是居左还是居中或者是居右。
			centerX: false, //水平方向是否以元素中心进行定位，默认为 false
			centerY: false, //垂直方向是否以元素中心进行定位，默认为 false
			pause: false, //是否在此元素显示后停止其后元素的显示，默认为 false。如果是最后一个显示的元素，则无效。设置为 true 后可以再次执行 elemShow()
			nowrap: false, //是否不被包裹层包裹，默认为 false。如果元素是倚靠屏幕边缘定位的，那么应该设为 true。如果是已存在元素，那么为元素声明 'nowrap' 类也会有相同作用
			fixed: false, //如果本页包含滚动条，有不想让该元素跟随内容滚动，则可以将该值设置为 true
			keep: false, //在该元素动画开始前，是否保持原大小和位置，即不跟随屏幕调整自身的大小和位置。（一般用于loading元素）
			show: false, //元素是否始终显示，如果为true则表示该元素在动画开始前不会被隐藏，但注意需要同时设置opacity大于0。（一般用于loading元素，和背景元素）
			onlyOne: false, //该元素动画是否只显示一次，默认为 false
			easing: 'swing', //动画的缓动函数 继续显示其后元素
			dur: 'slow', //动画持续的毫秒数或关键字。可能的值：毫秒（比如 1000）、'slow'(600)、'normal'、'fast'(200)。

			container: 0, //按elemConfig对象中的配置顺序，将指定索引对应的元素作为该元素的容器。默认为 0，表示使用默认容器。如果值为负数，则会从当前元素的索引处反向查找。
						//注意，所有设置基于目标的索引值不能大于自身的索引值，也就是说不能基于在配置顺序中位于自身之后的元素
			delay: 0, //动画延迟的毫秒数
			baseDelay: -1, //表示显示延迟将基于上一个元素开始显示时的延迟（设置后delay将被无视）
			delayBaseTo: -1, //改变延迟基于的目标，默认目标元素为elemConfig对象中配置顺序的前一个。如果值为负数，则会从当前元素的索引处反向查找。
			xBaseTo: -1, //改变水平位置基于的目标，默认目标元素为elemConfig对象中配置顺序的前一个。如果值为负数，则会从当前元素的索引处反向查找。
			yBaseTo: -1, //改变垂直位置基于的目标，默认目标元素为elemConfig对象中配置顺序的前一个。如果值为负数，则会从当前元素的索引处反向查找。
			baseLeft: NaN, //表示元素的right基于上一个元素的左侧定位，同时接受基于包裹层尺寸的百分比值（设置后style的right将被无视）
			baseRight: NaN, //表示元素的left基于上一个元素的右侧定位，同时接受基于包裹层尺寸的百分比值（设置后style的left将被无视）
			baseTop: NaN, //表示元素的bottom基于上一个元素的顶部定位，同时接受基于包裹层尺寸的百分比值（设置后style的bottom将被无视）
			baseBottom: NaN, //表示元素的top基于上一个元素的底部定位，同时接受基于包裹层尺寸的百分比值（设置后style的top将被无视）

			opacity: 0, //动画开始前的透明值，动画结束后会回到默认值。（默认值可被style属性或者endStyle属性修改）
			x: 0, //动画开始前的水平偏移量，动画结束后会回到默认值。（使用的是translateX）
			y: 0, //动画开始前的垂直偏移量，动画结束后会回到默认值。（使用的是translateY）
			scale: 1, //动画开始前的缩放比例，动画结束后会回到默认值。
			scaleX: NaN, //动画开始前X轴的缩放比例，动画结束后会回到默认值。
			scaleY: NaN, //动画开始前Y轴的缩放比例，动画结束后会回到默认值。
			rotate: 0, //动画开始前Z轴的旋转角度，动画结束后会回到默认值。
			rotateX: 0, //动画开始前X轴的旋转角度，动画结束后会回到默认值。
			rotateY: 0, //动画开始前Y轴的旋转角度，动画结束后会回到默认值。
			skewX: 0, //动画开始前X轴的倾斜度，动画结束后会回到默认值。
			skewY: 0, //动画开始前Y轴的倾斜度，动画结束后会回到默认值。

			startStyle: {}, //动画开始前的样式。（只接受数值型样式，且会覆盖掉其他CSS3变换属性的设置）
			endStyle: {}, //动画结束后的样式。（只接受数值型样式，且会覆盖掉其他CSS3变换属性的设置）

			event: 'click', //交互事件的默认事件类型，默认为'click'
			onEvent: function(){}, //事件回调，this指向为当前元素的DOM对象，并将本页的DynamicPage对象作为参数传入
			onStart: function(){}, //元素动画开始前的回调，this指向为当前元素的DOM对象，并将本页的DynamicPage对象作为参数传入
			onEnd: function(){} //元素动画完成后的回调，this指向为当前元素的DOM对象，并将本页的DynamicPage对象作为参数传入
		},

		// 定义按比例缩放的属性数组
		_scaleArr: [
			'font-size',
			'line-height',
			'vertical-align',
			'width',
			'height',
			'max-width',
			'max-height',
			'min-width',
			'min-height',
			'padding-left',
			'padding-right',
			'padding-top',
			'padding-bottom',
			'margin-left',
			'margin-right',
			'margin-top',
			'margin-bottom',
			'left',
			'right',
			'top',
			'bottom',
			'x',
			'y'
		],

		// 定义需要获取的变换属性数组
		_transformArr: [
			'x',
			'y',
			'scaleX',
			'scaleY',
			'rotate',
			'rotateX',
			'rotateY',
			'skewX',
			'skewY',
			'opacity'
		],

		_splitScale: function(style) {
			if ('scale' in style) {
				if (!('scaleX' in style) || isNaN(style['scaleX'])) {
					style['scaleX'] = style['scale'];
				}
				if (!('scaleY' in style) || isNaN(style['scaleY'])) {
					style['scaleY'] = style['scale'];
				}
				delete style['scale'];
			}
		},

		/**
		 * @param $container 动态页容器的jQuery对象
		 * @param pageName 设置本页的id名或者类名。传入一个选择器，会首先查找是否存在对应选择器的元素，如果存在，则使用该元素
		 * @param config 本页的配置对象
		 * @param option 本页的选项参数
		 * @option_param preload 设置本页是否预加载
		 * @option_param wrapSize 设置包裹层的大小比例对象，包含 width 和 height。默认包裹层大小比例等于初始化时容器的大小比例
		 * @option_param loadingConfig 一个包含loading对象设置参数的对象
		 * @option_param scaleAdjust 是否启用CSS3缩放来进行屏幕自适应调整。如果开启会提高自适应效率，但会降低图片和文字的质量
		 * @option_param basePath 图片资源的基路径
		 */
		_init: function($container, pageName, config, option) {
			this.$container = $container;
			this.pageName = (typeof pageName === 'string') ? pageName : '';
			this.config = $.extend(true, {}, this._defaultConfig, config);
			this.config.basePath = this.config.basePath && !this.config.basePath.match(/\/$/) ? this.config.basePath + '/' : this.config.basePath;
			this.config.basePath = option.basePath + this.config.basePath;

			// 本页的jQuery对象引用
			this.$obj = utils.getElem(this.pageName, this.$container);
			this.$obj.css({
				'position': 'absolute',
				'z-index': 0,
				'width': '100%',
				'height': '100%',
				'overflow': 'hidden',
				'background-color': this.config.bgColor,
				'transform': 'translateZ(0)'
			})
				.css(this.config.style)
				.addClass(this.config.className)
				.hide()
				.appendTo(this.$container);

			this.elemConfig = this.config.elemConfig;

			this.jqAnimateElements = []; //包含所有动画元素的jQuery对象数组
			this.animateElements = []; //包含所有动画元素的PageElement对象数组
			this.elements = []; //包含所有元素的PageElement对象数组，保存这些对象主要为了使它们能够跟随屏幕调整时缩放

			this.showCount = 0; //每次第一个子元素的动画开始播放时+1
			this.pauseIndex = 0; //动画执行过程中当前暂停到元素的索引号
			this.elemShowExecuted = false; //判断是否已经执行显示元素
			this.loadCount = 0; //需要加载的数量
			this.loadedCount = 0; //已加载完成的数量
			this.loadErrorCount = 0; //加载失败的数量
			this.loading = false; //判断是否正在加载中

			this.scale = 1; //初始设置大小相对于屏幕的缩放比例
			this.wrapScale = 1; //包裹层相对于屏幕的缩放比例
			this.scaleAdjust = !!option.scaleAdjust; //是否启用CSS3缩放来进行屏幕自适应调整。
			// 用于记录计算位置的执行次数。如果启用了CSS3缩放来进行屏幕自适应调整，则该值大于0后，不在更新包裹内元素的大小和位置
			this.calculateStyleCount = 0; //样式的计算次数
			this.initSize = option.wrapSize || {}; //获取初始设置大小
			this.initSize.width = this.initSize.width || this.containerSize.width;
			this.initSize.height = this.initSize.height || this.containerSize.height;
			this.wrapWidth = this.initSize.width;
			this.wrapHeight = this.initSize.height;

			this.loadingConfig = { //loadingConfig的默认配置，用于创建loading对象
				name: '',
				html: '',
				style: {}
			};
			$.extend(true, this.loadingConfig, option.loadingConfig);

			this.fixedElements = []; //包含所有被设置为 fixed 的元素
			this.$container.on('startDrag.bjj', $.proxy(this._startDragHandler, this));

			if (option.preload) this._createPage();
		},

		_createPage: function() {

			// 容器内的包裹层
			this.$wrap = $('<div class="wrap">').css({
				'position': 'absolute',
				'z-index': 1,
				'width': this.wrapWidth,
				'height': this.wrapHeight,
				'left': '50%',
				'top': '50%',
				'margin-left': -this.wrapWidth * .5,
				'margin-top': -this.wrapHeight * .5
			});
			this.$obj.children().appendTo(this.$wrap);
			this.$obj.append(this.$wrap);

			if (this.config.bgImg != '') { //设置背景图片
				this.loading = true;
				this.loadCount = 1;
				this.$bg = $('<img>');
				this.$bg.css({
					'position': 'absolute',
					'left': '50%',
					'top': '50%'
				}).prependTo(this.$obj)
					.on('load', $.proxy(this._bgLoadHandler, this))
					.on('error', $.proxy(this._bgErrorHandler, this))
					.attr('src', this.config.basePath + this.config.bgImg)
					.hide();
			}

			this._createElements();

			// 如果有图片需要加载，那么配置loading对象
			if (this.loading) {
				this.$loading = utils.getElem(this.loadingConfig.name, this.$obj);
				this.$loading.html(this.loadingConfig.html)
					.css(this.loadingConfig.style)
					.addClass('loading')
					.appendTo(this.$obj)
					.show();
			}

			// 无论有没有可加载图片，都派该事件，用于报告需要加载图片的数量
			this.$obj.trigger('loading.bjj', {
				obj: this,
				index: this.index,
				loadCount: this.loadCount,
				loadedCount: this.loadedCount,
				status: 'start'
			});

			// 计算所有元素的延迟
			this._calculateAnimateElementDelay();

			// 屏幕调整自适应
			this._resize();
			$(window).resize($.proxy(this._resize, this));

			// 如果没有加载中的图片，则执行_checkLoaded()
			if (!this.loading) this._checkLoaded();
		},

		_createElements: function() {
			for (var i in this.elemConfig) {
				var config = $.extend(true, {}, this._elemDefaultConfig, this.elemConfig[i]);
				var $elem = utils.getElem(config.name, this.$obj, config.link);
				$elem.addClass(config.className);
				$elem.hide(); //获取最终样式前先隐藏

				var ae = new PageElement($elem);
				ae.config = config;
				this.elements.push(ae);

				// 判断应该添加进那个容器
				var curIndex = this.animateElements.length;
				if (config.container) {
					var containerIndex = config.container > 0 ? config.container : curIndex + config.container;
					containerIndex = Math.min(curIndex, Math.max(0, containerIndex));
					if (containerIndex != curIndex) {
						var containerAe = this.animateElements[containerIndex];
						ae.$container = containerAe.$obj;
						config.nowrap = containerAe.config.nowrap;
					}
				}

				if (config.container && ae.$container && ae.$container.length) ae.$obj.appendTo(ae.$container);
				else if (config.nowrap) ae.$obj.appendTo(this.$obj);
				else ae.$obj.appendTo(this.$wrap);

				// 格式化样式属性名，如 marginLeft 转为 margin-left
				config.style = utils.styleFormat(config.style);
				config.startStyle = utils.styleFormat(config.startStyle);
				config.endStyle = utils.styleFormat(config.endStyle);

				// 将 scale 拆分成 scaleX、scaleY
				this._splitScale(config);
				this._splitScale(config.style);
				this._splitScale(config.startStyle);
				this._splitScale(config.endStyle);

				ae.startStyle = config.startStyle;
				ae.endStyle = config.endStyle;

				ae.$obj.css({
					'position': 'absolute',
					'transform': 'translateZ(0)'
				}).css(config.style);

				// 获取配置样式的初始值
				for (var j = 0, jl = this._scaleArr.length; j < jl; j++) {
					var prop = this._scaleArr[j];
					ae.style[prop] = ae.scaleStyle[prop] = utils.getStyle(ae.$obj[0], prop);
				}

				// 设置元素的动画结束样式
				// 同时将结束样式中定义的独立动画配置信息保存到的结束样式队列中
				for (var prop in ae.endStyle) {
					var value = ae.endStyle[prop];
					if (utils.isObj(value)) {
						ae.endStyleQueue[prop] = value;
						delete ae.endStyle[prop];
						ae.$obj.css(prop, value['value']);
					} else {
						ae.$obj.css(prop, value);
					}
				}

				// startStyle 和 endStyle 用于保存变换动画的样式按比例调整前的原始值
				for (var j = 0, jl = this._transformArr.length; j < jl; j++) {
					var prop = this._transformArr[j];
					// 如果起始样式中没有定义该变换属性，则将配置中变换动画起始样式并入 config.startStyle
					if (!(prop in ae.startStyle)) {
						ae.startStyle[prop] = config[prop];
					}
					// 如果结束样式中没有定义该变换属性，则将元素当前变换样式并入 config.endStyle
					if (!(prop in ae.endStyle) && !(prop in ae.endStyleQueue)) {
						if (prop === 'x' || prop === 'y') { // 如果是translate属性，则需要统一变换前后的属性单位
							ae.endStyle[prop] = utils.isPercent(ae.startStyle[prop]) ?
								utils.unitTo(ae.$obj.css(prop), '%') :
								utils.unitTo(ae.$obj.css(prop));
						} else if (prop === 'scaleX' || prop === 'scaleY') { // 如果没有直接设置scaleX、scaleY，那么css()方法将无法获取该值
							ae.endStyle[prop] = ae.$obj.css(prop);
						} else {
							ae.endStyle[prop] = ae.$obj.css(prop);
						}
					}
				}

				// 检查元素动画样式中是否设置了宽高
				// 如果该元素是以中心点定位的，那么margin也要随之调整，才能保证中心位置不变
				// 因此这里为其补齐margin的声明
				this._fillMargin(ae.startStyle, ae.style);
				this._fillMargin(ae.endStyle, ae.style);
				this._fillMargin(ae.endStyleQueue, ae.style);

				// scaleStartStyle 和 scaleEndStyle 以及 scaleEndStyleQueue 用于保存变换动画的样式按比例调整后的新属性值
				for (var prop in ae.startStyle) {
					ae.scaleStartStyle[prop] = ae.startStyle[prop];

					// 同时检查 startStyle 中是否含有 endStyle 中没有定义的属性，如果包含，则为 endStyle 定义该属性
					if (!(prop in ae.endStyle) && !(prop in ae.endStyleQueue)) {
						ae.endStyle[prop] = config.style[prop] || utils.getStyle(ae.$obj[0], prop);
					}
				}
				for (var prop in ae.endStyle) {
					ae.scaleEndStyle[prop] = ae.endStyle[prop];
				}
				for (var prop in ae.endStyleQueue) {
					ae.scaleEndStyleQueue[prop] = ae.endStyleQueue[prop];
				}

				// 如果设置了html内容，则添加html内容
				if (config.html != '') {
					ae.$obj.html(config.html);
				}

				// 注意，这里在 this.config.html 被设置之后执行
				this._initChildren(ae.$obj, config.nowrap, config.keep);

				// 如果设置了图片路径，则添加图片
				var width = utils.getStyle(ae.$obj[0], 'width'),
					height = utils.getStyle(ae.$obj[0], 'height');
				if (config.url) {
					this.loading = true;
					this.loadCount++;
					ae.$img = $('<img>');
					ae.$img.css({
						'display': 'block',
						'width': width === 'auto' ? 'auto' : '100%',
						'height': height === 'auto' ? 'auto' : '100%'
					}).on('load', $.proxy(this._elemLoadHandler, this, ae))
						.on('error', $.proxy(this._elemErrorHandler, this, ae))
						.attr('src', this.config.basePath + config.url)
						.appendTo(ae.$obj);
				}

				// 如果为fixed元素，或者设置了最大最小宽高，则为该元素内所有子元素包裹一层div
				if (config.fixed || config.maxWidth || config.maxHeight) {
					ae.$obj.wrapInner('<div>');
					ae.$wrap = ae.$obj.children();
					ae.$wrap.css({
						'width': width === 'auto' ? 'auto' : '100%',
						'height': height === 'auto' ? 'auto' : '100%',
						'transform-origin': '0 0',
						'x': 0,
						'y': 0,
						'scale' : 1
					});

					if (config.fixed) this.fixedElements.push(ae);
				}

				// 添加交互事件
				ae.$obj.on(config.event, $.proxy(config.onEvent, null, this));

				// 如果设置了一直显示，并且没有可加在的内容，则直接计算元素大小和偏移，然后设置动画到开始前样式，并显示出来
				if (config.show && !config.url) {
					utils.hideAction(ae.$obj, function() {
						this._calculateAnimateElementSizeOffset(ae);
					}, this);
					ae.$obj.css(ae.scaleStartStyle).show();
				}

				this.animateElements.push(ae);
				this.jqAnimateElements.push(ae.$obj);
			}
		},

		// 初始化所有的静态元素，记录原始的样式，以便根据当前缩放比例进行调整
		_initChildren: function($obj, nowrap, keep) {
			var $children = $obj.children();
			if (!$children.length) return;
			var self = this;
			$children.each(function(i, n) {
				var ae = new PageElement($(n));
				ae.config = {};
				ae.config.nowrap = nowrap;
				ae.config.keep = keep;

				for (var j = 0, jl = self._scaleArr.length; j < jl; j++) {
					var prop = self._scaleArr[j];
					ae.style[prop] = ae.scaleStyle[prop] = utils.getStyle(n, prop);
				}
				self.elements.push(ae);
				self._initChildren(ae.$obj, ae.config.nowrap, ae.config.keep);
			});
		},

		_resize: function() {
			this.containerWidth = this.$container.innerWidth();
			this.containerHeight = this.$container.innerHeight();

			// 计算包裹层缩放比
			var sX = this.containerWidth / this.initSize.width,
				sY = this.containerHeight / this.initSize.height;
			if (sX > sY) this.scale = sY;
			else this.scale = sX;

			if (this.scaleAdjust && this.calculateStyleCount) { //在初始化时，包裹层需要根据当前容器大小调整一次，因此这里不执行
				// 从第二次调整开始，根据第一次调整的大小计算缩放比例
				sX = this.containerWidth / this.wrapWidth;
				sY = this.containerHeight / this.wrapHeight;
				if (sX > sY) this.wrapScale = sY;
				else this.wrapScale = sX;
				this.$wrap.css('scale', this.wrapScale);
			} else {
				this.wrapWidth = this.initSize.width * this.scale;
				this.wrapHeight = this.initSize.height * this.scale;
				this.$wrap.css({
					'width': this.wrapWidth,
					'height': this.wrapHeight,
					'margin-left': -this.wrapWidth * .5,
					'margin-top': -this.wrapHeight * .5
				});
			}

			if (!this.loading) this._bgScale();
			this._updateElements();
		},

		_startDragHandler: function() {
			// 页面滑动时，关闭fixed元素的锁定属性
			if (!this.fixedElements.length) return;
			this.$obj.css('transform', 'translateZ(0)');
			var obj = this.$obj[0];
			for (var i = 0, il = this.fixedElements.length; i < il; i++) {
				var ae = this.fixedElements[i];
				ae.$obj.css('position', 'absolute');
				ae.$wrap.css({
					'x': obj.scrollLeft,
					'y': obj.scrollTop
				});
			}
		},

		_finishHandler: function() {
			// 页面静止时，打开fixed元素的锁定属性
			if (!this.fixedElements.length) return;
			this.$obj.css('transform', '');
			for (var i = 0, il = this.fixedElements.length; i < il; i++) {
				var ae = this.fixedElements[i];
				ae.$obj.css('position', 'fixed');
				ae.$wrap.css({
					'x': 0,
					'y': 0
				});
			}
		},

		_reset: function() {
			if (this.config.onlyOne && this.showCount) return;
			for (var i = 0; i < this.pauseIndex; i++) {
				var ae = this.animateElements[i];
				ae.$obj.stop(false,true).stop(false,true);
				if (ae.config.onlyOne && this.showCount) continue;

				ae.$obj.css(ae.scaleStartStyle);
				if (ae.config.show) ae.$obj.show();
				else ae.$obj.hide();
			}
			this.pauseIndex = 0;
			this.elemShowExecuted = false;
			this.elemShowed = false;
		},

		// 根据缩放比，更新所有元素的位置
		_updateElements: function() {
			for (var i = 0, il = this.animateElements.length; i < il; i++) {
				var ae = this.animateElements[i];
				// 如果开启了CSS3缩放适应屏幕模式，那么包裹层内元素这里只执行一次
				if (this.scaleAdjust && !ae.config.nowrap && this.calculateStyleCount) continue;

				ae.$obj.stop(false,true).stop(false,true);
				// 按缩放比例重新计算其他数值类样式
				for (var j = 0, jl = this._scaleArr.length; j < jl; j++) {
					var prop = this._scaleArr[j];
					if (!ae.config.keep && prop in ae.scaleStartStyle) ae.scaleStartStyle[prop] = this._calculateScaleValue(ae.startStyle[prop]);
					if (prop in ae.scaleEndStyle) ae.scaleEndStyle[prop] = this._calculateScaleValue(ae.endStyle[prop]);
					if (prop in ae.scaleEndStyleQueue) ae.scaleEndStyleQueue[prop]['value'] = this._calculateScaleValue(ae.endStyleQueue[prop]['value']);
				}
			}

			for (var i = 0, il = this.elements.length; i < il; i++) {
				var ae = this.elements[i];
				// 如果开启了CSS3缩放适应屏幕模式，那么包裹层内元素这里只执行一次
				if (this.scaleAdjust && !ae.config.nowrap && this.calculateStyleCount) continue;

				// 按缩放比例重新计算其他数值类样式
				for (var j = 0, jl = this._scaleArr.length; j < jl; j++) {
					var prop = this._scaleArr[j];
					if (!ae.config.keep) ae.scaleStyle[prop] = this._calculateScaleValue(ae.style[prop]);
				}
				// 设置新计算出的样式
				ae.$obj.css(ae.scaleStyle);
			}

			if (this.config.onlyOne && this.showCount > 1) return;
			// 将暂停后的子元素位置设置回动画前
			for (var i = this.pauseIndex, il = this.animateElements.length; i < il; i++) { //如果该已经显示，则不在重置位置到动画前
				var ae = this.animateElements[i];
				// 如果开启了CSS3缩放适应屏幕模式，那么包裹层内元素这里只执行一次
				if (this.scaleAdjust && !ae.config.nowrap && this.calculateStyleCount) continue;

				ae.$obj.css(ae.scaleStartStyle);
			}

			this.calculateStyleCount++;
		},

		// 按比例计算值，如果值为百分比或者em，则直接返回原值
		_calculateScaleValue: function(value) {
			if (!utils.isPercent(value) && !utils.isEm(value)) {
				var number = parseFloat(value);
				if (!isNaN(number)) return number * this.scale + 'px';
			}
			return value;
		},

		// 计算元素的宽高与偏移
		_calculateAnimateElementSizeOffset: function(ae) {
			// 先计算动画开始时元素的宽高与偏移
			if ('width' in ae.scaleStartStyle) ae.$obj.css('width', ae.scaleStartStyle['width']);
			if ('height' in ae.scaleStartStyle) ae.$obj.css('height', ae.scaleStartStyle['height']);

			if (ae.config.centerX) {
				var outerHalfWidth = ae.$obj.outerWidth() * .5 / this.scale;
				this._correctPosition(ae.startStyle, ae.scaleStartStyle, 'margin-left', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.startStyle, ae.scaleStartStyle, 'margin-right', this.initSize.width, outerHalfWidth);
			}

			if (ae.config.centerY) {
				var outerHalfHeight = ae.$obj.outerHeight() * .5 / this.scale;
				this._correctPosition(ae.startStyle, ae.scaleStartStyle, 'margin-top', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.startStyle, ae.scaleStartStyle, 'margin-bottom', this.initSize.height, outerHalfHeight);
			}

			// 再计算动画结束后元素的宽高与偏移
			if ('width' in ae.scaleStyle) ae.$obj.css('width', ae.scaleStyle['width']);
			if ('height' in ae.scaleStyle) ae.$obj.css('height', ae.scaleStyle['height']);
			if ('width' in ae.scaleEndStyle) ae.$obj.css('width', ae.scaleEndStyle['width']);
			if ('height' in ae.scaleEndStyle) ae.$obj.css('height', ae.scaleEndStyle['height']);
			if ('width' in ae.scaleEndStyleQueue) ae.$obj.css('width', ae.scaleEndStyleQueue['width']['value']);
			if ('height' in ae.scaleEndStyleQueue) ae.$obj.css('height', ae.scaleEndStyleQueue['height']['value']);
			// 将获取到的尺寸储存在config对象下
			ae.config['outerWidth'] = ae.$obj.outerWidth();
			ae.config['outerHeight'] = ae.$obj.outerHeight();

			// 如果超出了设置的最大宽度或最大高度，则将其缩放到设置的最大值
			if (ae.config.maxWidth || ae.config.maxHeight) {
				var maxWidth = ae.config.maxWidth * this.scale,
					maxHeight = ae.config.maxHeight * this.scale,
					scale = 1;
				if (ae.config.maxWidth && ae.config['outerWidth'] > maxWidth) {
					scale = Math.min(scale, maxWidth / ae.config['outerWidth']);
				}
				if (ae.config.maxHeight && ae.config['outerHeight'] > maxHeight) {
					scale = Math.min(scale, maxHeight / ae.config['outerHeight']);
				}

				if (scale != 1) {
					ae.config['outerWidth'] *= scale;
					ae.config['outerHeight'] *= scale;
					ae.$wrap.css('scale', scale);
				}
			}

			if (ae.config.centerX) {
				var outerHalfWidth = ae.config['outerWidth'] * .5 / this.scale;
				this._correctPosition(ae.style, ae.scaleStyle, 'margin-left', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.style, ae.scaleStyle, 'margin-right', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.endStyle, ae.scaleEndStyle, 'margin-left', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.endStyle, ae.scaleEndStyle, 'margin-right', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.endStyleQueue, ae.scaleEndStyleQueue, 'margin-left', this.initSize.width, outerHalfWidth);
				this._correctPosition(ae.endStyleQueue, ae.scaleEndStyleQueue, 'margin-right', this.initSize.width, outerHalfWidth);
			}

			if (ae.config.centerY) {
				var outerHalfHeight = ae.config['outerHeight'] * .5 / this.scale;
				this._correctPosition(ae.style, ae.scaleStyle, 'margin-top', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.style, ae.scaleStyle, 'margin-bottom', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.endStyle, ae.scaleEndStyle, 'margin-top', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.endStyle, ae.scaleEndStyle, 'margin-bottom', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.endStyleQueue, ae.scaleEndStyleQueue, 'margin-top', this.initSize.height, outerHalfHeight);
				this._correctPosition(ae.endStyleQueue, ae.scaleEndStyleQueue, 'margin-bottom', this.initSize.height, outerHalfHeight);
			}
		},

		// 计算各个动态元素的具体位置
		_calculateAnimateElementPosition: function() {
			utils.hideAction(this.jqAnimateElements, function() {
				// 先计算所有子元素的外边距，以保证中心位置正确
				for (var i = 0, il = this.animateElements.length; i < il; i++) {
					var ae = this.animateElements[i];

					if (!ae.config.show) { // 始终显示元素之前已经计算过，因此不再重复计算
						this._calculateAnimateElementSizeOffset(ae);
					} else if (!ae.config.url) {
						// 如果始终显示元素不是可加载元素，则说明该元素的宽高数据还是缩放前的数据，因此需要更新
						ae.config['outerWidth'] *= this.scale;
						ae.config['outerHeight'] *= this.scale;
					}

					// 此时设置动画元素到结束时的样式
					ae.$obj.css(ae.scaleStyle).css(ae.scaleEndStyle);
					for (var prop in ae.scaleEndStyleQueue) {
						ae.$obj.css(prop, ae.scaleEndStyleQueue[prop]['value']);
					}
				}
				// 计算包裹层与容器的水平和垂直方向上的半宽高差
				var nowrapOffsetX = (this.containerWidth - this.wrapWidth) * .5,
					nowrapOffsetY = (this.containerHeight - this.wrapHeight) * .5;
				// 再计算所有子元素的定位属性
				for (var i = 0, il = this.animateElements.length; i < il; i++) {
					var ae = this.animateElements[i];

					var left = ae.config.baseLeft,
						right = ae.config.baseRight,
						top = ae.config.baseTop,
						bottom = ae.config.baseBottom;

					// 无论是包裹层内还是包裹层外，定位的百分比始终是基于包裹层的宽高
					if (utils.isPercent(left)) left = utils.percentToPx(left, this.wrapWidth);
					else if (utils.isEm(left)) left = utils.emToPx(left, ae.$obj.css('font-size'));
					else left = parseFloat(left) * this.scale;

					if (utils.isPercent(right)) right = utils.percentToPx(right, this.wrapWidth);
					else if (utils.isEm(right)) right = utils.emToPx(right, ae.$obj.css('font-size'));
					else right = parseFloat(right) * this.scale;

					if (utils.isPercent(top)) top = utils.percentToPx(top, this.wrapHeight);
					else if (utils.isEm(top)) top = utils.emToPx(top, ae.$obj.css('font-size'));
					else top = parseFloat(top) * this.scale;

					if (utils.isPercent(bottom)) bottom = utils.percentToPx(bottom, this.wrapHeight);
					else if (utils.isEm(bottom)) bottom = utils.emToPx(bottom, ae.$obj.css('font-size'));
					else bottom = parseFloat(bottom) * this.scale;

					if (isNaN(left) && isNaN(right) && isNaN(top) && isNaN(bottom)) continue;

					if (!isNaN(left) || !isNaN(right)) {
						var xBaseIndex = ae.config.xBaseTo >= 0 ? ae.config.xBaseTo : i + ae.config.xBaseTo,
							baseLeft, baseRight;
						xBaseIndex = Math.min(i, Math.max(0, xBaseIndex));

						if (xBaseIndex === i) {
							baseLeft = 0;
							baseRight = 0;
						} else {
							var xBaseAe = this.animateElements[xBaseIndex];

							baseLeft = xBaseAe.$obj.offset().left;
							if (ae.config.container && ae.$container && ae.$container.length) {
								baseLeft -= ae.$container.offset().left;
							} else if (!ae.config.nowrap) {
								baseLeft -= this.$wrap.offset().left;
							}

							baseRight = (baseLeft + xBaseAe.config['outerWidth']);
						}

						if (!isNaN(left)) {
							ae.scaleStyle['left'] = baseLeft - left - ae.config['outerWidth'];
						}
						if (!isNaN(right)) {
							ae.scaleStyle['left'] = baseRight + right;
						}
						ae.style['left'] = ae.scaleStyle['left'] / this.scale;
					}
					if (!isNaN(top) || !isNaN(bottom)) {
						var yBaseIndex = ae.config.yBaseTo >= 0 ? ae.config.yBaseTo : i + ae.config.yBaseTo,
							baseTop, baseBottom;
						yBaseIndex = Math.min(i, Math.max(0, yBaseIndex));

						if (yBaseIndex === i) {
							baseTop = 0;
							baseBottom = 0;
						} else {
							var yBaseAe = this.animateElements[yBaseIndex];

							baseTop = yBaseAe.$obj.offset().top;
							if (ae.config.container && ae.$container && ae.$container.length) {
								baseTop -= ae.$container.offset().top;
							} else if (!ae.config.nowrap) {
								baseTop -= this.$wrap.offset().top;
							}

							baseBottom = (baseTop + yBaseAe.config['outerHeight']);
						}

						if (!isNaN(top)) {
							ae.scaleStyle['top'] = baseTop - top - ae.config['outerHeight'];
						}
						if (!isNaN(bottom)) {
							ae.scaleStyle['top'] = baseBottom + bottom;
						}
						ae.style['top'] = ae.scaleStyle['top'] / this.scale;
					}

					ae.$obj.css(ae.scaleStyle);
				}
			}, this);

			// 将动画元素位置设置回动画前
			for (var i = 0, il = this.animateElements.length; i < il; i++) {
				var ae = this.animateElements[i];
				ae.$obj.css(ae.scaleStartStyle);
			}
		},

		// 补全 margin 属性
		// 第一个参数为需要检查的样式对象
		// 第二个参数为补齐margin值时用到的数据源样式对象
		_fillMargin: function(style, fillStyle) {
			var marginList = [
				'margin-left',
				'margin-right',
				'margin-top',
				'margin-bottom'
			];
			if (('width' in style && style['width'] !== 'auto')
			|| ('height' in style && style['height'] !== 'auto')) {

				for (var l = marginList.length; l--;) {
					var margin = marginList[l];
					if (!(margin in style)) {
						if (utils.isObj(style[margin])) {
							style[margin]['value'] = fillStyle[margin];
						} else {
							style[margin] = fillStyle[margin];
						}
					}
				}
			}
		},

		// 矫正位置，保证元素的定位点在元素中心
		// 第一个参数为需要矫正的原始样式对象
		// 第二个参数为需要矫正的缩放后样式对象
		// 第三个参数为需要矫正的样式属性
		// 第四个参数为缩放前父容器的宽或高，用于在属性值为百分比时计算具体像素值
		// 第五个参数为缩放前需要矫正的偏移量
		_correctPosition: function(style, scaleStyle, prop, baseSize, offset) {
			var value = style[prop];
			if (typeof value === 'undefined') return;
			var isObj = utils.isObj(value);
			if (isObj) value = value['value'];

			if (utils.isPercent(value)) value = utils.percentToPx(value, baseSize);
			else if (!utils.isEm(value)) value = parseFloat(value);
			value = isNaN(value) ? 0 : value;

			if (isObj) {
				style[prop]['value'] = value - offset;
				scaleStyle[prop]['value'] = style[prop]['value'] * this.scale;
			} else {
				style[prop] = value - offset;
				scaleStyle[prop] = style[prop] * this.scale;
			}
		},

		// 计算各个元素的动画延迟
		_calculateAnimateElementDelay: function() {
			for (var i = 0, il = this.animateElements.length; i < il; i++) {
				var ae = this.animateElements[i];
				if (ae.config.baseDelay >= 0) {
					ae.config.delay = ae.config.baseDelay;
					var baseIndex,
						isBasePrev,
						currentIndex,
						baseAe = ae;
					while (true) {
						currentIndex = this.animateElements.indexOf(baseAe);
						baseIndex = baseAe.config.delayBaseTo >= 0 ? baseAe.config.delayBaseTo : currentIndex + baseAe.config.delayBaseTo;
						isBasePrev = (baseIndex < 0 || baseIndex >= this.animateElements.length);
						if (baseIndex === currentIndex) break;
						if (isBasePrev && currentIndex === 0) break;
						baseAe = isBasePrev ? this.animateElements[currentIndex-1] : this.animateElements[baseIndex];

						if (baseAe.config.baseDelay >= 0) {
							ae.config.delay += baseAe.config.baseDelay;
						} else {
							ae.config.delay += baseAe.config.delay;
							break;
						}
					}
				}
			}
		},

		// 背景元素等比缩放
		_bgScale: function() {
			// 背景图根据覆盖方式居中显示
			if (!this.$bg || !this.$bg instanceof jQuery) return;
			utils.hideAction(this.$bg, function() {
				var imgW = this.$bg.outerWidth();
				var imgH = this.$bg.outerHeight();
				var sX = this.containerWidth / imgW;
				var sY = this.containerHeight / imgH;
				if (this.config.bgSize === 'cover') {
					if (sX > sY) {
						this.$bg.width(imgW * sX);
						this.$bg.height(imgH * sX);
					} else {
						this.$bg.width(imgW * sY);
						this.$bg.height(imgH * sY);
					}
				} else if (this.config.bgSize === 'contain') {
					if (sX > sY) {
						this.$bg.width(imgW * sY);
						this.$bg.height(imgH * sY);
					} else {
						this.$bg.width(imgW * sX);
						this.$bg.height(imgH * sX);
					}
				}

				this.$bg.css({
					'margin-left': -this.$bg.outerWidth() * .5,
					'margin-top': -this.$bg.outerHeight() * .5
				});
			}, this);
		},
		// 检查是否全部加载完成
		_checkLoaded: function() {
			var data = {
				obj: this,
				index: this.index,
				loadCount: this.loadCount,
				loadedCount: this.loadedCount,
				loadErrorCount: this.loadErrorCount,
				status: 'loadding'
			};
			if (this.loadCount === this.loadedCount) {
				this.loading = false;
				if (this.$loading) this.$loading.hide();
				this._calculateAnimateElementPosition();
				if (this.elemShowExecuted) this.elemShow(); //如果在全部加载完成前执行过元素显示方法，那么加载完成后立即再执行一次
				data.status = 'complete';
			}
			this.$obj.trigger('loading.bjj', data);
		},
		// 主背景图加载完成回调
		_bgLoadHandler: function() {
			this._bgScale();
			this.$bg.show();
			this.loadedCount++;
			this._checkLoaded();
		},
		// 主背景图加载失败回调
		_bgErrorHandler: function() {
			this.$bg.remove();
			this.$bg = null;
			this.loadedCount++;
			this.loadErrorCount++;
			this._checkLoaded();
		},
		// 元素图加载完成回调
		_elemLoadHandler: function(ae) {
			// 如果设置了一直显示，则直接计算元素大小和偏移，然后设置动画到开始前样式，并显示出来
			if (ae.config.show) {
				utils.hideAction(ae.$obj, function() {
					this._calculateAnimateElementSizeOffset(ae);
				}, this);
				ae.$obj.css(ae.scaleStartStyle).show();
			}
			this.loadedCount++;
			this._checkLoaded();
		},
		// 元素图加载失败回调
		_elemErrorHandler: function(ae) {
			ae.$img.remove();
			ae.$img = null;
			this.loadedCount++;
			this.loadErrorCount++;
			this._checkLoaded();
		},

		elemShow: function() { //执行子元素显示的动画
			this.elemShowExecuted = true;
			if (this.loading) return; //如果图片还没有加载完成，则跳出方法，暂不显示元素，等加载完成后该方法会被重新执行一次

			// 只要动画开始显示，那么显示次数+1
			if (this.pauseIndex === 0) this.showCount++;
			if (this.config.onlyOne && this.showCount > 1) return;
			this.elemShowed = true;

			for (var i = this.pauseIndex, il = this.animateElements.length; i < il; i++) {
				var ae = this.animateElements[i],
					config = ae.config;
				if (config.onlyOne && this.showCount > 1) { //如果是第二次播放动画，且自身动画只播放一次，则跳过
					this.pauseIndex++;
					if (config.pause) break;
					else continue;
				}

				ae.$obj.delay(config.delay).queue($.proxy(function(ae) {
					var config = ae.config;
					config.onStart.call(ae.$obj[0], this);
					ae.$obj.show()
						.animate(ae.scaleEndStyle, config.dur, config.easing, $.proxy(config.onEnd, null, this));

					// 设置需要单独运行的动画
					var obj, now, style;
					for (var prop in ae.scaleEndStyleQueue) {
						obj = ae.scaleEndStyleQueue[prop];
						now = false;
						if (obj['delay']) {
							now = $.now() + '';
							ae.$obj.delay(obj['delay'], now);
						}
						style = {};
						style[prop] = obj['value'];
						ae.$obj.animate(style, {
							duration: obj['dur'] || config.dur,
							delay: obj['easing'] || config.easing,
							queue: now
						});
						if (now) ae.$obj.dequeue(now);
					}
					ae.$obj.dequeue();
				}, this, ae));

				this.pauseIndex++;
				if (config.pause) break;
			}
		},

		// 返回该动态页的DOM对象
		getDOM: function() {
			return this.$obj[0];
		},

		// 返回该动态页相对于初始设置的wrapSize的缩放比例
		getScale: function() {
			return this.scale;
		},

		// 返回该动态页的索引值
		getIndex: function() {
			return this.index;
		}
	});





	var DynamicPage = Page.extend({

		_dynamicPageDefaultConfig: {
			dir: 'y', //表示本页的滑动方向，分别有'y'（垂直）、'x'（水平）、'none'（无）三个值，默认为'y'
			dur: 400, //本页划入动画持续的毫秒数，默认为400毫秒
			easing: 'swing', //本页的动画的缓动函数，默认为'swing'
			autoShow: true, //本页准备好后，是否自动显示子元素动画，即自动执行elemShow()
			prevReadyAtUp: false, //上一个（左上）准备时是否将从上方出现，默认为 false
			nextReadyAtUp: true, //下一个（右下）准备时是否将从上方出现，默认为 true
			enableScale: false, //本页是否启用缩放过渡动画，默认禁用
			enableOpacity: false, //本页是否启用透明过渡动画，默认禁用
			enableOffset: true, //本页是否启用位移过渡动画，默认启用
			minScale: 0.5, //本页启用缩放过渡动画后的最小缩放比，取值0.0~1.0
			minOpacity: 0, //本页启用透明过渡动画后的最小透明度，取值0.0~1.0
			coefOffset: 0.3, //本页启用位移过渡动画后的位移系数，取值0.0~1.0
			onReady: function(){}, //页面准备好后的回调函数，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
			onEnter: function(){}, //页面完全显示出来后的回调函数，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
			onLeave: function(){}, //页面被完全划出屏幕后的回调函数，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
		},

		/**
		 * @param index 本页在容器中的位置索引
		 * @option_param startEvent 开始交互事件名称
		 * @option_param moveEvent 交互中事件名称
		 * @option_param endEvent 结束交互事件名称
		 */
		_init: function(index, $container, pageName, config, option) {
			this._super($container, pageName, config, option);

			this.index = index;
			this._dynamicPageDefaultConfig.enableScale = option.enableScale;
			this._dynamicPageDefaultConfig.enableOpacity = option.enableOpacity;
			this._dynamicPageDefaultConfig.enableOffset = option.enableOffset;
			this._dynamicPageDefaultConfig.minScale = option.minScale;
			this._dynamicPageDefaultConfig.minOpacity = option.minOpacity;
			this._dynamicPageDefaultConfig.coefOffset = option.coefOffset;
			this.config = $.extend(true, {}, this._dynamicPageDefaultConfig, this.config);

			this.xProp = option.xProp || 'left';
			this.yProp = option.yProp || 'top';

			this.startX = 0; //滑入前的X位置
			this.startY = 0; //滑入前的Y位置
			this.curObj = null; //当前显示对象
			this.isReady = false; //判断是否为正在准备的页面
			this.isTopReady = false; //判断是否为上准备的页面
			this.isBottomReady = false; //判断是否为下准备的页面
			this.isLeftReady = false; //判断是否为左准备的页面
			this.isRightReady = false; //判断是否为右准备的页面
			// 复位
			this._reset();

			// 触摸事件变量
			this.horizontal = false; //判断滑动是否为水平方向
			this.vertical = false; //判断滑动是否为垂直方向
			this.dragging = false; //判断是否在拖拽中
			this.dragAtUp = false; //判断自身在拖拽中是否处于上方
			this.dragUpObj = null; //拖拽时处于上方的DynamicPage对象
			this.dragDownObj = null; //拖拽时处于下方的DynamicPage对象

			this.startDragX = 0;
			this.startDragY = 0;
			this.dx = 0;
			this.dy = 0;

			this.scroller = null; //当前容器中包含滚动条的元素
			this.scrollX = false; //这个包含滚动条的元素是否为X轴滚动
			this.scrollY = false; //这个包含滚动条的元素是否为Y轴滚动
			this.scrolling = false; //是否在滚动中

			this.dragEvent = new DragEvent({
				obj: this.$container,
				holder: this,
				start: this._touchstartHandler,
				move: this._touchmoveHandler,
				end: this._touchendHandler
			});

			this.$container
				.on('finish.bjj', $.proxy(this._finishHandler, this))
				.on('nextShow.bjj', $.proxy(this._nextShowHandler, this));

			$(document).on('fix.bjj', $.proxy(this._fixHandler, this))
				.on('unfix.bjj', $.proxy(this._unfixHandler, this));
		},

		// 复位
		_reset: function() {
			this._super();

			this.startX = 0;
			this.startY = 0;
			var style = {};
			style['z-index'] = 0;
			style['opacity'] = 1;
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			style['scale'] = 1;
			this.$obj.finish().css(style);
		},

		// 屏幕调整
		_resize: function() {
			this._super();

			if (this.isTopReady) {
				this.startX = 0;
				this.startY = -this.containerHeight;
			} else if (this.isBottomReady) {
				this.startX = 0;
				this.startY = this.containerHeight;
			} else if (this.isLeftReady) {
				this.startX = -this.containerWidth;
				this.startY = 0;
			} else if (this.isRightReady) {
				this.startX = this.containerWidth;
				this.startY = 0;
			} else {
				this.startX = 0;
				this.startY = 0;
			}

			var style = {};
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			this.$obj.css(style);
		},

		// 触摸开始回调
		_touchstartHandler: function(e, data) {
			if (e.type != 'mousemove') {
				this.scroller = e.target;
				var isScroll;
				while (this.scroller) {
					if (this.scroller.tagName === 'HTML') {
						this.scroller = null;
						this.scrollX = false;
						this.scrollY = false;
						break;
					} else {
						isScroll = utils.isScroll(this.scroller);
						if (isScroll.x || isScroll.y) {
							this.scrollX = isScroll.x;
							this.scrollY = isScroll.y;
							break;
						}
					}
					this.scroller = this.scroller.parentNode;
				}
			}
			if (!this.isReady && !data.scroller) {
				return false;
			}

			this.startDragX = data.x;
			this.startDragY = data.y;
		},

		// 触摸移动回调
		_touchmoveHandler: function(e, data) {
			if (this.scroller) {
				e.originalEvent._isScroller = true; //表示是否处于滚动容器中
			}
			if (this.scrolling) return;

			this.dx = data.x - this.startDragX;
			this.dy = data.y - this.startDragY;

			var dx = this.dx,
				dy = this.dy,
				absDx = Math.abs(dx),
				absDy = Math.abs(dy),

				isLeftReady = this.isLeftReady,
				isRightReady = this.isRightReady,
				isTopReady = this.isTopReady,
				isBottomReady = this.isBottomReady;

			if (!this.horizontal && !this.vertical) {
				if (absDx >= absDy) { //水平方向
					if (this.scrollX) { // 如果包含在溢出滚动元素中，且没有处于溢出滚动元素的边缘，则优先在该元素中滚动
						if ((dx > 0 && this.scroller.scrollLeft > 0)
						|| (dx < 0 && this.scroller.scrollLeft < this.scroller.scrollWidth - this.scroller.clientWidth)) {
							this.scrolling = true;
							return;
						}
					}

					if ((dx > 0 && isLeftReady) || (dx < 0 && isRightReady)) { //开始水平滑动
						this.horizontal = true;
						this.dragging = true;
						this.allFix();
						this.$obj.trigger('startDrag.bjj');
						if ((isLeftReady && this.config.prevReadyAtUp) ||
							(isRightReady && this.config.nextReadyAtUp)) {
							this.dragAtUp = true;
							this.dragUpObj = this;
							this.dragDownObj = this.curObj;
						} else {
							this.dragAtUp = false;
							this.dragUpObj = this.curObj;
							this.dragDownObj = this;
						}
						this._startDargStyle(this.dragUpObj.$obj);
					} else { //如果判定当前方向没有可滑动的元素，则更新旧坐标，以便下一次判定
						this.startDragX = data.x;
						this.startDragY = data.y;
					}
				} else { //垂直方向
					if (this.scrollY) { // 如果包含在溢出滚动元素中，且没有处于溢出滚动元素的边缘，则优先在该元素中滚动
						if ((dy > 0 && this.scroller.scrollTop > 0)
						|| (dy < 0 && this.scroller.scrollTop < this.scroller.scrollHeight - this.scroller.clientHeight)) {
							this.scrolling = true;
							return;
						}
					}

					if ((dy > 0 && isTopReady) || (dy < 0 && isBottomReady)) { //开始垂直滑动
						this.vertical = true;
						this.dragging = true;
						this.allFix();
						this.$obj.trigger('startDrag.bjj');
						if ((isTopReady && this.config.prevReadyAtUp) ||
							(isBottomReady && this.config.nextReadyAtUp)) {
							this.dragAtUp = true;
							this.dragUpObj = this;
							this.dragDownObj = this.curObj;
						} else {
							this.dragAtUp = false;
							this.dragUpObj = this.curObj;
							this.dragDownObj = this;
						}
						this._startDargStyle(this.dragUpObj.$obj);
					} else {
						this.startDragX = data.x;
						this.startDragY = data.y;
					}
				}
			}

			if (!this.dragging) return;

			var style = {},

				dragUpObj = this.dragUpObj,
				dragDownObj = this.dragDownObj,

				dragUpObjStartX = dragUpObj.startX,
				dragUpObjStartY = dragUpObj.startY,

				dragDownObjConfig = dragDownObj.config,
				minOpacity = dragDownObjConfig.minOpacity,
				minScale = dragDownObjConfig.minScale,
				coefOffset = dragDownObjConfig.coefOffset,

				xProp = this.xProp,
				yProp = this.yProp,
				containerWidth = this.containerWidth,
				containerHeight = this.containerHeight;

			if (this.horizontal) {
				e.preventDefault();

				var offset = dragUpObjStartX + dx;
				if (isLeftReady) offset = Math.min(dragUpObjStartX + containerWidth, Math.max(dragUpObjStartX, offset));
				else if (isRightReady) offset = Math.max(dragUpObjStartX - containerWidth, Math.min(dragUpObjStartX, offset));
				dragUpObj.$obj.css(xProp, offset);

				if (this.dragAtUp) {
					if ((isLeftReady && dx < 0) || (isRightReady && dx > 0)) {
						style['opacity'] = 1;
						style['scale'] = 1;
					} else {
						style['opacity'] = dragDownObjConfig.enableOpacity ?
							((containerWidth-absDx)/containerWidth*(1-minOpacity))+minOpacity : 1;
						style['scale'] = dragDownObjConfig.enableScale ?
							((containerWidth-absDx)/containerWidth*(1-minScale))+minScale : 1;
					}

					style[xProp] = dragDownObjConfig.enableOffset ?
						dx * coefOffset : 0;

					if (isLeftReady) style[xProp] = Math.max(0, style[xProp]);
					else if (isRightReady) style[xProp] = Math.min(0, style[xProp]);
				} else {
					if ((isLeftReady && dx < 0) || (isRightReady && dx > 0)) {
						style['opacity'] = 1;
						style['scale'] = 1;
					} else {
						style['opacity'] = dragDownObjConfig.enableOpacity ?
							absDx/containerWidth*(1-minOpacity)+minOpacity : 1;
						style['scale'] = dragDownObjConfig.enableScale ?
							absDx/containerWidth*(1-minScale)+minScale : 1;
					}

					style[xProp] = dragDownObjConfig.enableOffset ?
						(dx - containerWidth * (isLeftReady?1:-1)) * coefOffset : 0;

					if (isLeftReady) style[xProp] = Math.min(0, style[xProp]);
					else if (isRightReady) style[xProp] = Math.max(0, style[xProp]);
				}

				style['opacity'] = Math.max(0, Math.min(1, style['opacity']));
				style['scale'] = Math.max(0, Math.min(1, style['scale']));
				dragDownObj.$obj.css(style);
			} else if (this.vertical) {
				e.preventDefault();

				var offset = dragUpObjStartY + dy;
				if (isTopReady) offset = Math.min(dragUpObjStartY + containerHeight, Math.max(dragUpObjStartY, offset));
				else if (isBottomReady) offset = Math.max(dragUpObjStartY - containerHeight, Math.min(dragUpObjStartY, offset));
				dragUpObj.$obj.css(yProp, offset);

				if (this.dragAtUp) {
					if ((isTopReady && dy < 0) || (isBottomReady && dy > 0)) {
						style['opacity'] = 1;
						style['scale'] = 1;
					} else {
						style['opacity'] = dragDownObjConfig.enableOpacity ?
							((containerHeight-absDy)/containerHeight*(1-minOpacity))+minOpacity : 1;
						style['scale'] = dragDownObjConfig.enableScale ?
							((containerHeight-absDy)/containerHeight*(1-minScale))+minScale : 1;
					}

					style[yProp] = dragDownObjConfig.enableOffset ?
						dy * coefOffset : 0;

					if (isTopReady) style[yProp] = Math.max(0, style[yProp]);
					else if (isBottomReady) style[yProp] = Math.min(0, style[yProp]);
				} else {
					if ((isTopReady && dy < 0) || (isBottomReady && dy > 0)) {
						style['opacity'] = 1;
						style['scale'] = 1;
					} else {
						style['opacity'] = dragDownObjConfig.enableOpacity ?
							absDy/containerHeight*(1-minOpacity)+minOpacity : 1;
						style['scale'] = dragDownObjConfig.enableScale ?
							absDy/containerHeight*(1-minScale)+minScale : 1;
					}

					style[yProp] = dragDownObjConfig.enableOffset ?
						(dy - containerHeight * (isTopReady?1:-1)) * coefOffset : 0;

					if (isTopReady) style[yProp] = Math.min(0, style[yProp]);
					else if (isBottomReady) style[yProp] = Math.max(0, style[yProp]);
				}

				style['opacity'] = Math.max(0, Math.min(1, style['opacity']));
				style['scale'] = Math.max(0, Math.min(1, style['scale']));
				dragDownObj.$obj.css(style);
			}
		},

		// 触摸结束回调
		_touchendHandler: function(e, data) {
			this.scrolling = false;
			this.horizontal = false;
			this.vertical = false;

			if (!this.dragging) return;
			this.dragging = false;

			if ((this.isRightReady && data.swipeLeft)
			|| (this.isLeftReady && data.swipeRight)
			|| (this.isBottomReady && data.swipeTop)
			|| (this.isTopReady && data.swipeBottom)) {
				this._tween();
			} else {
				var offset, refer;
				if (this.isLeftReady || this.isRightReady) {
					offset = this.dx;
					refer = this.containerWidth;
				} else if (this.isTopReady || this.isBottomReady) {
					offset = this.dy;
					refer = this.containerHeight;
				}
				if (this._judge(offset, refer)) this._tween();
				else this._restore();
			}
		},

		// finish.bjj事件回调
		_finishHandler: function(e, curObj) {
			this._super();

			if (!this.curObj || this.curObj.index != curObj.index) { //如果不存在当前页，或者上一个当前页不是现在的当前页，则表示滑动完成
				if (this.curObj && this.index === this.curObj.index) { //当自己为上一个当前页，则判定为结束显示
					this.config.onLeave.call(this.$obj[0], this); //执行结束回调，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
				} else if (this.index === curObj.index) { //当自己为当前页，则判定为刚刚显示
					this.config.onEnter.call(this.$obj[0], this); //执行回调，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
					if (this.config.autoShow && !this.pauseIndex) this.elemShow(); //如果是自动显示，并且没有被暂停，则执行显示
				}
			}

			if (this.$container.is(curObj.$container)) { //如果事件派发者与本页是兄弟节点，则设置当前对象，并阻止事件向上冒泡
				this.curObj = curObj;
				e.stopPropagation();
			}

			if (this.index-1 === this.curObj.index) {
				if (this.config.dir === 'x') this._rightReady();
				else if (this.config.dir === 'y') this._bottomReady();
				else {
					this.hide();
					this._reset();
				}
			} else if (this.index+1 === this.curObj.index) {
				if (this.curObj.config.dir === 'x') this._leftReady();
				else if (this.curObj.config.dir === 'y') this._topReady();
				else {
					this.hide();
					this._reset();
				}
			} else if (this.isReady && this.index != this.curObj.index) {
				this.hide();
			}

		},

		// nextShow.bjj事件回调
		_nextShowHandler: function(e, data) {
			if (e.target === e.currentTarget) return; //如果注册监听的元素是事件派发者，则不处理该事件。即防止子页响应自己派发的事件
			e.stopPropagation();
			if (this.index === data.i) {
				this.show(data.duration, data.callback);
			}
		},

		// fix.bjj事件回调
		_fixHandler: function(e) {
			if (this != this.curObj) {
				this.dragEvent.close();
			}

			if (this.isReady && !this.dragging) {
				this.dragEvent.stop();
			}
		},

		// unfix.bjj事件回调
		_unfixHandler: function(e) {
			this.dragEvent.open();
		},


		// 如果判断为进入下一页，则完成补间
		_tween: function() {
			// 开始计算下方对象的目标值
			var style = {},
				$dragUpObj = this.dragUpObj.$obj,
				dragDownObjConfig = this.dragDownObj.config,

				isLeftReady = this.isLeftReady,
				isRightReady = this.isRightReady,
				isTopReady = this.isTopReady,
				isBottomReady = this.isBottomReady,

				xProp = this.xProp,
				yProp = this.yProp,
				containerWidth = this.containerWidth,
				containerHeight = this.containerHeight,

				dur = this.config.dur,
				easing = this.config.easing;

			if (this.dragAtUp) {
				style['opacity'] = dragDownObjConfig.enableOpacity ? dragDownObjConfig.minOpacity : 1;
				style['scale'] = dragDownObjConfig.enableScale ? dragDownObjConfig.minScale : 1;
				if (isLeftReady || isRightReady) {
					style[xProp] = dragDownObjConfig.enableOffset ?
						containerWidth * dragDownObjConfig.coefOffset * (isLeftReady?1:-1) : 0;
					style[yProp] = 0;
				} else if (isTopReady || isBottomReady) {
					style[xProp] = 0;
					style[yProp] = dragDownObjConfig.enableOffset ?
						containerHeight * dragDownObjConfig.coefOffset * (isTopReady?1:-1) : 0;
				}
			} else {
				style['opacity'] = 1;
				style['scale'] = 1;
				style[xProp] = 0;
				style[yProp] = 0;
			}
			// 拖拽成功，则使用当前拖拽对象的动画时长和缓动效果
			this.dragDownObj.$obj.animate(style, dur, easing);

			// 开始计算上方对象的目标值
			style = {};
			if (isLeftReady) {
				style[xProp] = this.dragUpObj.startX + containerWidth;
				style[yProp] = 0;
			} else if (isRightReady) {
				style[xProp] = this.dragUpObj.startX - containerWidth;
				style[yProp] = 0;
			} else if (isTopReady) {
				style[xProp] = 0;
				style[yProp] = this.dragUpObj.startY + containerHeight;
			} else if (isBottomReady) {
				style[xProp] = 0;
				style[yProp] = this.dragUpObj.startY - containerHeight;
			}
			this.startX = this.startY = 0;
			// 拖拽成功，则使用当前拖拽对象的动画时长和缓动效果
			$dragUpObj.animate(style, dur, easing, $.proxy(function() {
				this._cancelReady();
				this._endDargStyle($dragUpObj);
				this.allUnfix();
				this.$obj.trigger('finish.bjj', this);
			}, this));
		},

		// 如果判断为留在这一页，则让滑出部分复位
		_restore: function() {
			// 开始计算下方对象的目标值
			var style = {},
				$dragUpObj = this.dragUpObj.$obj,
				dragDownObjConfig = this.dragDownObj.config,

				xProp = this.xProp,
				yProp = this.yProp,

				dur = this.curObj.config.dur,
				easing = this.curObj.config.easing;

			if (this.dragAtUp) {
				style['opacity'] = 1;
				style['scale'] = 1;
				style[xProp] = 0;
				style[yProp] = 0;
			} else {
				style['opacity'] = dragDownObjConfig.enableOpacity ? dragDownObjConfig.minOpacity : 1;
				style['scale'] = dragDownObjConfig.enableScale ? dragDownObjConfig.minScale : 1;
				if (this.isLeftReady || this.isRightReady) {
					style[xProp] = dragDownObjConfig.enableOffset ?
						this.containerWidth * dragDownObjConfig.coefOffset * (this.isRightReady?1:-1) : 0;
					style[yProp] = 0;
				} else if (this.isTopReady || this.isBottomReady) {
					style[xProp] = 0;
					style[yProp] = dragDownObjConfig.enableOffset ?
						this.containerHeight * dragDownObjConfig.coefOffset * (this.isBottomReady?1:-1) : 0;
				}
			}
			// 拖拽失败，则使用当前显示对象的动画时长和缓动效果
			this.dragDownObj.$obj.animate(style, dur, easing);

			// 开始计算上方对象的目标值
			style = {};
			style[xProp] = this.dragUpObj.startX;
			style[yProp] = this.dragUpObj.startY;
			// 拖拽失败，则使用当前显示对象的动画时长和缓动效果
			$dragUpObj.animate(style, dur, easing, $.proxy(function() {
				this._endDargStyle($dragUpObj);
				this.allUnfix();
				this.$obj.trigger('finish.bjj', this.curObj);
			}, this));
		},

		// 根据滑动过的比例计算是否进入下一页
		_judge: function(offset, refer) {
			var m = offset/refer;
			if ((m>=0.5 && (this.isLeftReady||this.isTopReady))
			|| (m<=-0.5 && (this.isRightReady||this.isBottomReady))) return true;
			else return false;
		},

		_cancelReady: function() {
			this.isReady = this.isTopReady = this.isBottomReady = this.isLeftReady = this.isRightReady = false;
		},

		_topReady: function() {
			this.isReady = this.isTopReady = true;
			this._reset();
			this.$obj.show();

			this.startX = 0;
			this.startY = -this.containerHeight;

			var style = {};
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			this.$obj.css(style);

			this.config.onReady.call(this.$obj[0], this);
		},

		_bottomReady: function() {
			this.isReady = this.isBottomReady = true;
			this._reset();
			this.$obj.show();

			this.startX = 0;
			this.startY = this.containerHeight;

			var style = {};
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			this.$obj.css(style);

			this.config.onReady.call(this.$obj[0], this);
		},

		_leftReady: function() {
			this.isReady = this.isLeftReady = true;
			this._reset();
			this.$obj.show();

			this.startX = -this.containerWidth;
			this.startY = 0;

			var style = {};
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			this.$obj.css(style);

			this.config.onReady.call(this.$obj[0], this);
		},

		_rightReady: function() {
			this.isReady = this.isRightReady = true;
			this._reset();
			this.$obj.show();

			this.startX = this.containerWidth;
			this.startY = 0;

			var style = {};
			style[this.xProp] = this.startX;
			style[this.yProp] = this.startY;
			this.$obj.css(style);

			this.config.onReady.call(this.$obj[0], this);
		},

		_startDargStyle: function($obj) {
			$obj.css({'z-index': 1, 'box-shadow': '0 0 10px rgba(0,0,0,.4)'});
		},

		_endDargStyle: function($obj) {
			$obj.css({'z-index': 0, 'box-shadow': 'none'});
		},

		allFix: function() {
			this.$obj.trigger('fix.bjj'); //所有DynamicPage对象锁定
		},

		allUnfix: function() {
			this.$obj.trigger('unfix.bjj'); //所有DynamicPage对象解锁
		},

		nextShow: function(duration, nextIndex, callback) {
			if (typeof(duration) === 'function') {
				callback = duration;
				duration = 0;
				nextIndex = this.index + 1;
			} else {
				duration = duration || 0;
				if (typeof(nextIndex) === 'function') {
					callback = nextIndex;
				} else {
					callback = callback || function(){};
				}

				if (typeof(nextIndex) !== 'number' || nextIndex < 0) {
					nextIndex = this.index + 1;
				}
			}

			// 派发事件，让下一个DynamicPage对象显示
			// 传入要显示页的索引，以及显示的动画时长
			this.$obj.trigger('nextShow.bjj', {i: nextIndex, duration: duration, callback: callback});
		},

		show: function(duration, callback) { //不经过准备阶段，直接显示时使用该方法
			if (typeof(duration) === 'function') {
				callback = duration;
				duration = 0;
			} else {
				duration = (typeof(duration) === 'number') ? duration : 0;
				callback = callback || function(){};
			}

			this._reset();
			this.config.onReady.call(this.$obj[0], this);
			this.allFix();
			this.$obj.hide().fadeIn(duration, $.proxy(function() {
				this.allUnfix();
				this._cancelReady();
				this.$obj.trigger('finish.bjj', this);
				callback.call(this.$obj[0], this); //执行参数回调，this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
			}, this));
		},

		hide: function(duration, callback) {
			if (typeof(duration) === 'function') {
				callback = duration;
				duration = 0;
			} else {
				duration = (typeof(duration) === 'number') ? duration : 0;
				callback = callback || function(){};
			}
			this._cancelReady();
			// 参数回调的this指向为当前页的DOM对象，并将本页的DynamicPage对象作为参数传入
			this.$obj.fadeOut(duration, $.proxy(callback, null, this));
		}
	});


	var dynamicPage = function(option) {
		var opt = {
			config: {}, //必须参数，所有页的配置对象
			basePath: '', //图片资源的基路径
			container: '', //为所有页指定一个容器，可以是一个DOM元素、jQuery对象或者选择器。如果找不到对应容器，则使用 body
			curIndex: 0, //初始化时首先显示的页面索引，默认为第一个
			scaleAdjust: false, //是否启用CSS3缩放来进行屏幕自适应调整。如果开启会提高自适应效率，但会降低图片和文字的质量
			preload: false, //所有页是否预加载
			loadingConfig: {}, //一个包含loading对象设置参数的对象，用于在每个页面加载过程中显示
			wrapSize: {width: 320, height: 480}, //设置包裹层的大小对象，包含 width 和 height。如果未定义，则包裹层大小等于初始化时容器的大小

			enableScale: false, //是否全部页都启用缩放过渡动画，默认禁用
			enableOpacity: false, //是否全部页都启用透明过渡动画，默认禁用
			enableOffset: true, //是否全部页都启用位移过渡动画，默认启用
			minScale: 0.5, //全部页启用缩放过渡动画后的最小缩放比，取值0.0~1.0
			minOpacity: 0, //全部页启用透明过渡动画后的最小透明度，取值0.0~1.0
			coefOffset: 0.3, //全部页启用位移过渡动画后的位移系数，取值0.0~1.0

			dur: 0, //首先显示的页初始化完成后显示出来的时长，默认为直接显示
			callback: function(){}, //首先显示的页面初始化完成并显示出来后的回调，自身的 DynamicPage 对象会作为参数被传入
			progress: function(){}, //页面内资源加载进程回调
			complete: function(){} //全部页面初始化完成，且所有资源加载完成时的回调
		};
		$.extend(true, opt, option);

		// 阻止页面的弹性滑动，winPhone上页面的弹性滑动会导致所有动态页都无法滑动
		document.addEventListener(DragEvent.moveEvent, function(e) {
			if (!e._isScroller) e.preventDefault();
		}, false);

		var supportTransform = 'transform' in document.documentElement.style ||
						'webkitTransform' in document.documentElement.style ||
						'MozTransform' in document.documentElement.style ||
						'OTransform' in document.documentElement.style ||
						'msTransform' in document.documentElement.style;
		var xProp, yProp;
		if (supportTransform) {
			xProp = 'x';
			yProp = 'y';
		} else {
			xProp = 'left';
			yProp = 'top';
		}

		var $container = (opt.container instanceof jQuery) ? opt.container : $(opt.container);
		if (!$container.length) $container = $(document.body);
		$container.css({
			//'user-select': 'none',
			//'-webkit-touch-callout': 'none',
			'overflow': 'hidden',
			'width': '100%',
			'height': '100%'
		});
		if ($container.css('position') === 'static') $container.css('position','relative');
		$('html, body').css({
			'width': '100%',
			'height': '100%'
		});


		var inited = false, //表示所有页面是否初始化完成
			completeExecuted = false, //表示complete回调是否已经执行
			pageCount = 0,
			startPageCount = 0,
			completePageCount = 0,
			loadCount = 0,
			loadedCount = 0,
			loadErrorCount = 0,
			progress = 0;

		for (var i in option.config) pageCount++;
		opt.curIndex = Math.max(0, Math.min(pageCount - 1, opt.curIndex));
		if (!opt.preload && pageCount > 2) {
			if (opt.curIndex > 0 && opt.curIndex < pageCount - 1) pageCount = 3;
			else pageCount = 2;
		}
		$container.on('loading.bjj', function(e, data){
			if (e.target === e.currentTarget) return; //如果注册监听的元素是事件派发者，则不处理该事件。即防止子页响应自己派发的事件

			if (data.status === 'start') {
				loadCount += data.loadCount;
				startPageCount++;
			} else {
				// 如果该页面没有加载内容，而直接发送complete状态，防止此时增加已加载次数
				if (data.loadCount) loadedCount ++;

				if (data.status === 'complete') {
					completePageCount ++;
					loadErrorCount += data.loadErrorCount;
				}

				if (startPageCount === pageCount) {
					if (loadCount) progress = loadedCount/loadCount*100 | 0;
					else progress = 100;

					opt.progress.call(data.obj.$obj[0],{
						loadCount: loadCount,
						loadedCount: loadedCount,
						progress: progress,
						obj: data.obj
					});
				}

				if (completePageCount === pageCount) {
					if (loadErrorCount) {
						alert('抱歉，共有 ' + loadErrorCount + ' 张图片加载失败！');
					}

					// 如果加载飞快，或者没有可加载元素，那么执行到这里的时候可能最后一个页面还没有初始化完成
					// 如果 opt.curIndex 为最后一页的索引，那么这时 pages[opt.curIndex] 可能为空
					// 因此需要先判断是否初始化完成，如果没有初始化完成，则不执行 complete 回调
					if (inited && !completeExecuted) {
						completeExecuted = true;
						var curPage = pages[opt.curIndex];
						opt.complete.call(curPage.$obj[0], {
							loadCount: loadCount,
							loadedCount: loadedCount,
							progress: progress,
							obj: curPage
						});
					}
				}
			}
		});

		var pages = [],
			index = 0;
		for (var i in opt.config) {
			pages.push(new DynamicPage(index++, $container, i, opt.config[i], {
				preload: opt.preload,
				container: opt.container,
				wrapSize: opt.wrapSize,
				loadingConfig: opt.loadingConfig,
				scaleAdjust: opt.scaleAdjust,
				basePath: opt.basePath && !opt.basePath.match(/\/$/) ? opt.basePath + '/' : opt.basePath,

				enableScale: opt.enableScale,
				enableOpacity: opt.enableOpacity,
				enableOffset: opt.enableOffset,
				minScale: opt.minScale,
				minOpacity: opt.minOpacity,
				coefOffset: opt.coefOffset,

				xProp: xProp,
				yProp: yProp
			}));
		}

		pages[opt.curIndex].show(opt.dur, function(obj) {
			opt.callback.call(this, obj);

			inited = true;
			// 如果初始化完成时，所有页面已经加载完成，且未执行 complete 回调，则在此执行
			if (completePageCount === pageCount && !completeExecuted) {
				completeExecuted = true;
				opt.complete.call(this, {
					loadCount: loadCount,
					loadedCount: loadedCount,
					progress: progress,
					obj: pages[opt.curIndex]
				});
			}
		});
		return pages; //返回包含所有 DynamicPage 对象的数组
	}

	return dynamicPage;

}));
