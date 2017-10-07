(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	//判断是否是IE6及以下版本
	var is_lte_IE6 = false,
		version = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		versionNum = version && version[1] - 0;
	if (navigator.appName === 'Microsoft Internet Explorer' && versionNum <= 6) is_lte_IE6 = true;

	var $win = $(window);

	$.fn.fixer = function(offset) {
		offset = offset || 0;

		var $fixer = this,
			$parent = $fixer.parent(),
			fixer_top = $fixer.offset().top - offset, //获取锁定对象的初始顶部位
			fixer_position = $fixer.css('position'), //获取锁定对象的position值
			fixed = false,
			timerID;

		if (fixer_position === 'static' || fixer_position === 'relative') {
			$parent = $fixer.parent();
			if ($parent.css('position') === 'static') {
				$parent.css('position', 'relative');
			}

			// 克隆一个占位元素，在锁定对象脱离文档结构时填充原锁定对象的位置
			var $placeholder = $fixer.clone().css({'pointer-events': 'none', 'visibility': 'hidden'});
		} else {
			$parent = $fixer.offsetParent();
		}

		var fixer_parent_top = $parent.offset().top; //获取锁定对象父级的初始顶部位置

		scroll();
		$win.scroll(scroll);

		function scroll() {
			var scrollTop = $win.scrollTop();

			if (!fixed && fixer_top < scrollTop) {

				fixed = true;

				$fixer.css({
					'margin-top': 0,
					'z-index': 2147483647
				});

				if ($placeholder) {
					$fixer.after($placeholder);
				}

				if (is_lte_IE6) {
					$fixer.css({
						'position': 'absolute',
						'top': fixer_parent_top + offset
					});
					timerID = setInterval(IE6_slide, 16);
					//或者在锁定对象样式中设置：*top:expression(eval(document.documentElement.scrollTop-父级定位元素顶部位置));
				} else {
					$fixer.css({
						'position': 'fixed',
						'top': offset
					});
				}

			} else if (fixed && fixer_top >= scrollTop) {

				fixed = false;

				if ($placeholder) {
					$placeholder.detach();
				}

				if (is_lte_IE6) {
					clearInterval(timerID);
				}

				$fixer.css({
					'margin-top': '',
					'z-index': '',
					'position': '',
					'top': '',
				});
			}
		}

		function IE6_slide() {
			$fixer.css({
				'top': document.documentElement.scrollTop - fixer_parent_top
			});
		}
	}

	return $;
}));