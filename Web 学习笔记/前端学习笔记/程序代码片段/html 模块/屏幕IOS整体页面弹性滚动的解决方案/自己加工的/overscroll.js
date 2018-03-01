/**
 * @brief 在IOS设备下屏蔽页面整体滑动到边缘时的弹性效果，同时使元素scroll区域滑动更加平滑，且附带弹性效果。
 * @param el 容器元素的dom对象或选择器字符串，同时也接受一个所有要应用该效果的元素所组成的数组
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.overscroll = factory();
	}

}(this, function() {
	'use strict';

	// 屏蔽页面的 touchmove 事件
	document.ontouchmove = function(event){
		if(!event._isScroller) event.preventDefault();
	};

	function overscroll(el) {
		if (isArray(el)) {
			for (var i in el) {
				overscroll(el[i]);
			}
			return;
		} else if (typeof el === 'string') {
			el = document.querySelectorAll(el);
			if (el.length) {
				for (var i = 0; i < el.length; i++) {
					overscroll(el[i]);
				}
			}
			return;
		}

		el.style.overflow = 'auto';
		el.style.webkitOverflowScrolling = 'touch';
		el.addEventListener('touchstart', function() {
			var top = el.scrollTop,
				totalScroll = el.scrollHeight,
				currentScroll = top + el.offsetHeight;
			if (top === 0) {
				el.scrollTop = 1;
			} else if (currentScroll === totalScroll) {
				el.scrollTop = top - 1;
			}
		});

		el.addEventListener('touchmove', function(evt) {
			var isscroll = isScroll(el);
			if (isscroll.y) evt._isScroller = true;
		});
	}

	// 判断一个对象是否为数组
	function isArray(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	// 判断元素是否含有滚动条
	function isScroll(el) {
		var overflow_x = getStyle(el, 'overflow-x'),
			overflow_y = getStyle(el, 'overflow-y');
		return {
			x: !!((el.offsetWidth < el.scrollWidth) && (overflow_x == 'auto' || overflow_x == 'scroll')),
			y: !!((el.offsetHeight < el.scrollHeight) && (overflow_y == 'auto' || overflow_y == 'scroll'))
		};
	}

	// 获取元素样式
	function getStyle(elem, pro) {
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
	}

	return overscroll;
}));
