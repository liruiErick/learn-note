(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.jQuery.extend(root.utils || {}, factory(root.jQuery));
	}

}(this, function($) {
	'use strict';

	var utils = {

		// 添加一个cookie：setCookie(name,value,expiresHours)
		setCookie: function(name, value, expiresHours) {
			var cookieString = name + '=' + escape(value);
			//判断是否设置过期时间
			if (expiresHours > 0) {
				var date = new Date();
				date.setTime(date.getTime + expiresHours * 3600 * 1000);
				cookieString = cookieString + '; expires=' + date.toGMTString();
			}
			document.cookie = cookieString;
		},

		// 获取指定名称的cookie值：getCookie(name)
		getCookie: function(name) {
			var strCookie = document.cookie;
			var arrCookie = strCookie.split('; ');
			for (var i = 0; i < arrCookie.length; i++) {
				var arr = arrCookie[i].split('=');
				if (arr[0] == name) return arr[1];
			}
			return '';
		},

		// 删除指定名称的cookie：deleteCookie(name)
		deleteCookie: function(name) {
			var date = new Date();
			date.setTime(date.getTime() - 10000);
			document.cookie = name + '=v; expires=' + date.toGMTString();
		},

		// 创建一个音乐对象
		createSound: function(src, loop, id) {
			var sound = document.createElement('audio');
			if (!sound.canPlayType) return false;
			if (id) sound.id = id;
			sound.src = src;
			sound.preload = 'auto';
			if (typeof(loop) === 'undefined') loop = true;
			sound.loop = loop;
			return sound;
		},

		/**
		 * 函数名：cutStr
		 * 函数说明：将多行文本按指定高度截断，并在末尾加三点
		 * @param selector 多行文本元素的jQuery对象
		 * @param row 文本限制行数
		 * @param lineHeight 文本行高的像素值
		 */
		cutStr: function($obj, row, lineHeight) {
			var limitHeight = row * lineHeight,
				maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
				maxHeight = maxRow * lineHeight,
				patt = /(\s)*(.|\n)(\.\.\.)?$/;
			$obj.each(function(){
				var $this = $(this);
				$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});

				var height = $this.height();
				if (height <= limitHeight) return;
				var text = $this.text();
				if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
					$this.text(text.substr(0, text.length * maxHeight / height));
				}
				while ($this.height() > limitHeight) {
					$this.text($this.text().replace(patt, '...'));
				}
			});
		},

		/**
		 * 事件派发
		 * @param  {DOM}    elem      触发事件的DOM元素
		 * @param  {string} eventType 事件类型
		 * @param  {object} data      事件携带的参数
		 *                            注意，参数的获取：
		 *                                在原生 js 的事件回调中，直接访问 event.data 获取
		 *                                在 jQuery 的事件回调中，访问 event.originalEvent.data 获取
		 */
		trigger: function(elem, eventType, data) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent(eventType, true, true);
			evt.data = data;
			elem.dispatchEvent(evt);
		},

		/**
		 * 创建事件转发器
		 * @param  {string} events 需要转发的事件列表
		 */
		createRepeater: function(events) {
			$('iframe').each(function() {
				// 这里为已经加载完成的页面注册转发器
				if (this.contentDocument.readyState === 'complete') {
					registerRepeater(this);
				}
			});

			// 同时监听iframe的load事件，在每次重载后重新注册转发器
			$('iframe').on('load', function () {
				registerRepeater(this);
			});

			function registerRepeater(iframe) {
				$(iframe.contentDocument).on(events, function(e) {
					$(iframe).trigger(e);
				});
			}
		},

		/**
		 * json 请求的 AJAX 封装
		 * @param  {String|Object}                url  请求地址，或者是 AJAX 配置对象
		 * @param  {String|Array|Object|Function} data 请求中携带的参数。如果是 Function 则表示请求成功的回调。
		 * @param  {Function}                     func 请求成功回调
		 * @return {jqXHR} 返回 jQuery 的 AJAX 延迟对象
		 */
		ajax: function(url, data, func) {
			var options;

			if ($.isPlainObject(url)) {
				options = url;
			} else {
				options = { url: url };

				if ($.isFunction(data)) {
					options.success = data;
				} else if (data) {
					options.data = data;

					if ($.isFunction(func)) {
						options.success = func;
					}
				}
			}

			options = $.extend({
				type: 'GET',
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8'
			}, options);

			return $.ajax(options);
		},

		extend: function() {
			var options, name, src, copy, copyIsArray,
				target = arguments[0] || {},
				targetType = typeof target,
				toString = Object.prototype.toString,
				i = 1,
				length = arguments.length,
				deep = false;

			// 处理深拷贝
			if (targetType === 'boolean') {
				deep = target;

				// Skip the boolean and the target
				target = arguments[i] || {};
				targetType = typeof target;
				i++;
			}

			// Handle case when target is a string or something (possible in deep copy)
			if (targetType !== 'object' && targetType !== 'function') {
				target = {};
			}

			// 如果没有合并的对象，则表示 target 为合并对象，将 target 合并给当前函数的持有者
			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {

				// Only deal with non-null/undefined values
				if ((options = arguments[i]) != null) {

					// Extend the base object
					for (name in options) {
						src = target[name];
						copy = options[name];

						// 防止死循环
						if (target === copy) {
							continue;
						}

						// 深拷贝对象或者数组
						if (deep && copy &&
							((copyIsArray = toString.call(copy) === '[object Array]') ||
							(toString.call(copy) === '[object Object]'))) {

							if (copyIsArray) {
								copyIsArray = false;
								src = src && (toString.call(src) === '[object Array]') ? src : [];

							} else {
								src = src && (toString.call(src) === '[object Object]') ? src : {};
							}

							target[name] = extend(deep, src, copy);

						} else if (copy !== undefined) { // 仅忽略未定义的值
							target[name] = copy;
						}
					}
				}
			}

			// Return the modified object
			return target;
		}
	}

	return utils;
}));