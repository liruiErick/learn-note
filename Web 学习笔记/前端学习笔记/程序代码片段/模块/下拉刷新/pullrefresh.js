/*!
 * @author baijunjie
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate', 'DragEvent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.pullrefresh = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	'use strict';

	var defaultOptions = {
		container: 'body',
		pullElem: '', // 同时被拉动的元素选择器
		statusText: {
			pulling: '下拉可以刷新',
			loosen: '松开立即刷新',
			loading: '努力刷新中>_<...',
			done: '刷新完成^_^',
			fail: '刷新失败T_T'
		},
		refresh: function() {} // 开始刷新的回调
	};

	return function(options) {
		var opt = $.extend({}, defaultOptions, options);

		var pullingText = opt.statusText.pulling,
			loosenText = opt.statusText.loosen,
			loadingText = opt.statusText.loading,
			doneText = opt.statusText.done,
			failText = opt.statusText.fail,

			posY = 0,
			pulling = false, // 是否在下拉中
			reloadflag = false; // 是否可以刷新

		var $pullrefresh = $('<div>').css({
			'white-space': 'nowrap',
			'position': 'absolute',
			'height': 30,
			'top': -30,
			'left': '50%',
			'x': '-50%'
		});

		var $pullrefreshWrap = $('<div>').css({
			'position': 'relative',
			'overflow': 'visible'
		}).append($pullrefresh);

		var $pullrefreshIcon = $('<span class="refresh-icon"></span>'),
			$pullrefreshText = $('<span class="refresh-text"></span>');

		$pullrefresh.append($pullrefreshIcon).append($pullrefreshText);

		var $container = $(opt.container);
		$container.prepend($pullrefreshWrap);

		var $moveElem = $pullrefreshWrap.add($(opt.pullElem)).css({
			'y': 0,
			'z': 0
		});

		function retraction(delay) {
			delay = delay || 0;
			$moveElem.delay(delay).animate({
				'y': 0
			}, function() {
				if (pulling) return;
				$pullrefresh.hide();
			});
		}

		var dragEvent = new DragEvent({
			obj: $container,
			move: function(e, data) {
				if (data.dy < 0 && !pulling) return;

				if (!pulling) {
					var scrollTop = $container.scrollTop();
					if (scrollTop <= 0) {
						pulling = true;
						$moveElem.stop().stop();
						$pullrefresh.show();
						$pullrefreshIcon.addClass('arrow-icon');
						$pullrefreshText.text(pullingText);
						posY = data.y - parseFloat($moveElem.css('y')) * 2;
					} else {
						return;
					}
				}

				if (pulling) {
					var pullheight = data.y - posY,
						pullHalfHeight = pullheight / 2;

					if (pullheight >= 0 && pullheight < 150) {
						$moveElem.css({
							'y': pullHalfHeight
						});
						if (reloadflag) {
							reloadflag = false;
							$pullrefreshIcon.css('rotate', 0);
							$pullrefreshText.text(pullingText);
						}
					} else if (pullheight >= 150) {
						$moveElem.css({
							'y': pullHalfHeight
						});
						if (!reloadflag) {
							reloadflag = true;
							$pullrefreshIcon.css('rotate', 180);
							$pullrefreshText.text(loosenText);
						}
					} else {
						$moveElem.css({
							'y': 0
						});
					}
				}
				e.preventDefault();
			},
			end: function(e, data) {
				posY = 0;
				if (pulling) {
					pulling = false;
					if (reloadflag) {
						reloadflag = false;
						$pullrefreshIcon.removeClass('arrow-icon');
						$pullrefreshIcon.addClass('loading-icon');
						$pullrefreshIcon.css('rotate', 0);
						$pullrefreshText.text(loadingText);
						$moveElem.stop().animate({
							'y': 75
						});
						opt.refresh();
					} else {
						retraction();
					}
				}
			}
		});

		return {
			done: function() {
				if (pulling) return;
				$pullrefreshIcon.removeClass('loading-icon');
				$pullrefreshText.text(doneText);
				retraction(600);
			},

			fail: function() {
				if (pulling) return;
				$pullrefreshIcon.removeClass('loading-icon');
				$pullrefreshText.text(failText);
				retraction(600);
			}
		}
	}

}));