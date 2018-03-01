(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(["jquery.animate", "DragEvent"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery.animate"), require("DragEvent"));
	} else {
		root.bjj = root.bjj || {};
		root.bjj.fullScreenSlide = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	"use strict";

	var $win = $(window),
		$doc = $(allowScroll(document.documentElement) ? document.documentElement : document.body);

	function allowScroll(elem, testHor) {
		var st = elem.scrollTop;
		elem.scrollTop += (st > 0) ? -1 : 1;
		if (elem.scrollTop != st) {
			elem.scrollTop = st;
			return true;
		}

		if (!testHor) return;

		var sl = elem.scrollLeft;
		elem.scrollLeft += (sl > 0) ? -1 : 1;
		if (elem.scrollLeft != sl) {
			elem.scrollLeft = sl;
			return true;
		}
	}

	var is_mobile = !!navigator.userAgent.match(/mobile/i);

	function fullScreenSlide(option) {

		var opt = {
			offset: 0, // 屏幕滑动的偏移量，一般为头部的高度
			nav: "", // 导航项的选择器。如果有多个导航，比如同时有顶部导航和右侧导航，那么每个导航项的选择器以“,”隔开
			navActiveClass: "active", // 导航项焦点类名
			easing: "easeInOutExpo", // 区块间滑动的缓动函数
			anchor: "", // 每个导航对应的区块选择器，每个区块选择器以“,”隔开
			section: "", // 页面上每个区块的选择器，每个区块选择器以“,”隔开
			onEnter: function(i){}, // 进入区块时的回调，this为当前将要进入的区块，并将当前进入的区块在所有区块中的索引作为参数传入
			onLeave: function(i){}, // 离开区块时的回调，this为当前将要离开的区块，并将当前离开的区块在所有区块中的索引作为参数传入
			onStart: function(i){}, // 滑动开始时的回调，this为当前将要滑动到的目标区块，并将当前区块在所有区块中的索引作为参数传入
			onEnd: function(i){} // 滑动结束后的回调，this为当前区块，并将当前区块在所有区块中的索引作为参数传入
		};

		$.extend(opt, option);

		var nav = opt.nav.split(","),
			has_nav_item = false,
			$anchor = $(opt.anchor),
			$section = $(opt.section),
			sections = $.map($section.toArray(), function(n) { return $(n); }),
			offset = opt.offset,
			easing = opt.easing,
			navActiveClass = opt.navActiveClass,
			onEnter = opt.onEnter,
			onLeave = opt.onLeave,
			onStart = opt.onStart,
			onEnd = opt.onEnd,
			animating = false, // 是否正在滚屏动画
			max_index = $section.length - 1,
			cur_index = -1;

		$.map(nav, function(n) {
			var $nav_item = $(n);
			if (!has_nav_item) has_nav_item = !!$nav_item.length;
			return $nav_item;
		});

		function setScrollTop($target, duration) {
			var scrollTop = $target.offset().top - offset,
				targetIndex = $section.index($target);

			if ($win.scrollTop() === scrollTop) return;

			animating = true;
			onStart.call($target[0], targetIndex);
			$doc.stop().animate({
				scrollTop: scrollTop
			}, duration, easing, function() {
				animating = false;
				onEnd.call($target[0], targetIndex);
			});
		}

		// 导航栏锚点跳转缓动。简单写法，仅支持 id 名
		$('a[href^="#"]').click(function() {
			var href = this.getAttribute("href");
			if (href.indexOf("##") >= 0) return;
			var $target = $(href);
			if ($target.length) {
				setScrollTop($target, 1000);
				return false;
			}
		});

		// 页面初始化时跳至指定区域
		// 要求window.location.search为一个页面区块的id名
		var hash = window.location.hash;
		if (hash && hash.indexOf("##") < 0) {
			var $targetSection = $(hash);
			if ($targetSection.length) {
				setScrollTop($targetSection, 0);
			}
		}

		$win.resize(roll);

		function roll(e) {
			var $target;
			if (typeof e === "object" && e.type === "resize") {
				$target = sections[cur_index];
				setScrollTop($target, 0);
				return;
			}

			if (e < 0) return;
			$target = sections[e];
			if (!$target.length) return;
			if (animating) return;
			setScrollTop($target, 1000);
		}

		if (is_mobile) {
			new DragEvent({
				end: function(e, data) {
					if (animating) return;

					if (data.swipeTop) { //手指上滑，页面向下显示
						roll(Math.min(cur_index + 1, max_index));
					} else if (data.swipeBottom) { //手指下滑，页面向上显示
						roll(Math.max(cur_index - 1, 0));
					}
				}
			});
		} else {
			addmousewheel(document, function(e) {
				var inScroll = false, //表示是否处于滚动容器中
					target = e.target;
				while (target) {
					if (target.tagName === "HTML") break;
					else if (isScroll(target).y) {
						inScroll = true;
						break;
					}
					target = target.parentNode;
				}
				if (animating) {
					e.preventDefault ? e.preventDefault() : e.returnValue = false; //阻止浏览器默认滚动行为
					return;
				}

				var detail;
				if ('deltaY' in e) {
					detail = -e.deltaY / Math.abs(e.deltaY);
				} else if ('wheelDeltaY' in e) {
					detail = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
				} else if ('wheelDelta' in e) {
					detail = e.wheelDelta / Math.abs(e.wheelDelta);
				} else if ('detail' in e) {
					detail = -e.detail / Math.abs(e.detail);
				} else {
					return;
				}

				if (detail > 0) { //鼠标滚轮向上滚动，页面向上显示
					if (inScroll && target.scrollTop > 0) return; //如果事件对象有滚动条，且不在顶端，则停止页面滚动
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
					roll(Math.max(cur_index - 1, 0));
				} else if (detail < 0) { //鼠标滚轮向下滚动，页面向下显示
					if (inScroll && target.scrollTop < target.scrollHeight - target.clientHeight) return; //如果事件对象有滚动条，且不在底端，则停止页面滚动
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
					roll(Math.min(cur_index + 1, max_index));
				}
			});
		}

		var winHeight, //窗口显示区域高度
			winTop, //窗口顶部相对于文档位置
			winBottom; //窗口底部相对于文档位置
		$win.scroll(scroll);
		scroll();

		function scroll() {
			winHeight = $win.height();
			winTop = $win.scrollTop();
			winBottom = winTop + winHeight;
			var winHalfTop = winTop + offset + (winHeight - offset) * 0.5;

			// 判断当前滑到到哪个区块
			$.each(sections, function(i, $n) {
				var top = $n.offset().top,
					bottom = top + $n.outerHeight();
				// 当页面顶部进入窗口高度的一半时，将该页面算作当前页面。
				// 如果当前区块是最后一个，那么当区块底部与窗口底部平齐时，将该区块算作当前区块。
				if ((i === max_index && winBottom >= bottom)
				|| (winHalfTop >= top && winHalfTop < bottom)) {
					if (cur_index !== i) {
						if (cur_index >= 0) onLeave.call(sections[cur_index][0], cur_index);
						onEnter.call(sections[i][0], i);
						cur_index = i;

						if (has_nav_item && $anchor.is($n)) {
							var index = $anchor.index($n);
							$.each(nav, function(i, $nav_item) {
								$nav_item.removeClass(navActiveClass);
								$nav_item.eq(index).addClass(navActiveClass);
							});
						}
					}

					// 由于最后一个区块可能是网页的脚步，而网页的脚步未必是全屏的
					// 因此，如果是倒数第二个区块满足以上条件，也要再去检查最后一个区块，而不是跳出循环
					if (i !== max_index - 1) {
						return false;
					}
				}
			});
		}
	}

	function addmousewheel(element, callback) {
		if (navigator.userAgent.indexOf("Firefox") >= 0) {
			element.addEventListener('DOMMouseScroll', callback, false);
		} else {
			if (element.addEventListener) {
				element.addEventListener('mousewheel', callback, false);
			} else if (element.attachEvent) {
				element.attachEvent('onmousewheel', callback);
			}
		}
	}

	// 判断元素是否含有滚动条
	function isScroll(el) {
		var overflow_x = $(el).css("overflow-x"),
			overflow_y = $(el).css("overflow-y");
		return {
			x: !!((el.offsetWidth < el.scrollWidth) && (overflow_x === "auto" || overflow_x === "scroll")),
			y: !!((el.offsetHeight < el.scrollHeight) && (overflow_y === "auto" || overflow_y === "scroll"))
		};
	}

	return fullScreenSlide;

}));