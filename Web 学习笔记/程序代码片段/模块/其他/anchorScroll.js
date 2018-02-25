(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate', 'DragEvent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.anchorScroll = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var $win = $(window),
		$doc = $(allowScroll(document.documentElement) ? document.documentElement : document.body);

	var defaultOptions = {
        	anchor: 'a[href^="#"]', // 被应用滑动效果的锚点选择器或者 jQuery 对象，默认为所有锚点链接
            offset: 0, // 屏幕滑动的偏移量，一般为头部的高度
            duration: 600, // 区块间滑动的持续时间
            easing: '' // 区块间滑动的 jQuery 缓动函数
        };

	function allowScroll(elem, testHor) {
		var st = elem.scrollTop;
		elem.scrollTop += (st > 0) ? -1 : 1;
		if (elem.scrollTop !== st) {
			elem.scrollTop = st;
			return true;
		}

		if (!testHor) return;

		var sl = elem.scrollLeft;
		elem.scrollLeft += (sl > 0) ? -1 : 1;
		if (elem.scrollLeft !== sl) {
			elem.scrollLeft = sl;
			return true;
		}
	}

	return function(options) {
		if (typeof options === 'number') {
            options = { offset: options };
		}

		var opt = $.extend({}, defaultOptions, options);

		var animating = false;

		function setScrollTop($target, duration) {
			var scrollTop = $target.offset().top - opt.offset;
			if ($win.scrollTop() === scrollTop) return;

			animating = true;
			$doc.stop().animate({
				scrollTop: scrollTop
			}, duration, opt.easing, function() {
				animating = false;
			});
		}

		// 导航栏锚点跳转缓动。简单写法，仅支持 id 名
		$(opt.anchor).on('click', function() {
			var href = this.getAttribute('href');
            if (!href.match(/^#[^#]/)) return;
			var $target = $(href);
			if ($target.length) {
				setScrollTop($target, opt.duration);
				return false;
			}
		});

		// 页面初始化时跳至指定区域
		// 要求window.location.search为一个页面区块的id名
		var hash = window.location.hash;
		if (hash && hash.match(/^#[^#]/)) {
			var $targetSection = $(hash);
			if ($targetSection.length) {
				setScrollTop($targetSection, 0);
			}
		}
	};
}));