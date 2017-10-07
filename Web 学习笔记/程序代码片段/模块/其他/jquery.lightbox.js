/*!
 * @author baijunjie
 * @version jquery.lightbox v0.2.0
 * @param {object} options 配置选项
 * @return $
 * @exception 灯箱插件
 */

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

	var $layout, $curtain, $box;

	var defaultOptions = {
		elem: null, // 灯箱中显示的元素
		close: '', // 关闭按钮选择器
		onClick: function(){} // 元素被点击后的回调，函数的返回值为要显示在灯箱内的元素内容，该内容的优先级要比elem大
	};

	/**
	 * @brief 灯箱
	 * @param func  元素被点击后的回调，函数的返回值为要显示在灯箱内的元素内容，该内容的优先级要比elem大
	 * @param options  配置参数
	 */
	$.fn.lightbox = function(func, options) {
		if (typeof(func) !== 'function') {
			options = func && typeof(func) === 'object' ? func : options;
			func = null;
		}

		var opt = $.extend({}, defaultOptions, options),
			elem = opt.elem,
			close = opt.close,
			onClick = func || opt.onClick;

		initLayout(close);

		this.click(function(e) {
			var returnValue = onClick.call(this, e);

			if (!returnValue) {
				if (!elem) return;
			} else {
				elem = returnValue;
			}

			$box.append(elem);
			$layout.show();
			$curtain.stop().fadeTo(400, .6);
			$box.stop().animate({
				'opacity': 1,
				'top': 0
			});
		});
	}

	function initLayout(close) {
		if (!$box) {
			$box = $('<div>').css({
				'position': 'relative',
				'top': -50,
				'z-index': 1,
				'opacity': 0,
				'display': 'inline-block',
				'fint-size': '16px',
				'text-align': 'left',
				'vertical-align': 'middle'
			});
		}

		if (!$curtain) {
			$curtain = $('<div>').css({
				'position': 'absolute',
				'left': 0,
				'top': 0,
				'z-index': 0,
				'width': '100%',
				'height': '100%',
				'background-color': '#000',
				'opacity': 0
			});
		}

		if (!$layout) {
			$layout = $('<div>').css({
				'position': 'fixed',
				'left': 0,
				'top': 0,
				'z-index': 2147483647,
				'width': '100%',
				'height': '100%',
				'white-space': 'nowrap',
				'text-align': 'center',
				'fint-size': 0
			})
				.append($curtain)
				.append($box);

			$('<div>').css({
				'display': 'inline-block',
				'height': '100%',
				'vertical-align': 'middle'
			}).appendTo($layout);

			$layout.hide().appendTo('body');

			var hide = function() {
				$curtain.stop().fadeOut();
				$box.stop().animate({
					'opacity': 0,
					'top': -50
				}, function() {
					$layout.hide();
					$box.empty();
				});
			};

			if (close) {
				$layout.on('click', close, hide);
			} else {
				$layout.click(hide);
			}
		}
	}

	return $;
}));
