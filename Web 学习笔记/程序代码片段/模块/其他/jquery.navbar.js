/*!
 * @author baijunjie
 * @version jquery.navbar v0.1.0
 * @param {object} options 配置选项
 * @return $
 * @exception 导航焦点时的彩色条
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

	var defaultOptions = {
		color: '#9ED15B', // 颜色
		thickness: '4px', // 厚度
		isVer: false, // 是否垂直
		isBefore: false, // 是否在前
		initIndex: 0, // 初始对应项的索引
		durtion: 400, // 移动动画的时长
		easing: '', // 缓动效果
		returnClass: 'active' // 彩条hover结束后，回归的目标元素必须具备的类名
	};

	$.fn.navbar = function(options) {
		var opt = $.extend({}, defaultOptions, options),
			self = this;

		var color = opt.color,
			thickness = opt.thickness,
			isVer = opt.isVer,
			isBefore = opt.isBefore,
			initIndex = opt.initIndex,
			durtion = opt.durtion,
			easing = opt.easing,
			returnClass = opt.returnClass;

		if (self.css('position') === 'static') {
			self.css('position', 'relative');
		}

		var $bar = $('<div>').css({
			'background-color': color,
			'position': 'absolute'
		});

		if (isVer) {
			$bar.width(thickness);
			if (isBefore) {
				$bar.css({
					'left': 0,
					'top': 0
				});
			} else {
				$bar.css({
					'right': 0,
					'top': 0
				});
			}
		} else {
			$bar.height(thickness);
			if (isBefore) {
				$bar.css({
					'left': 0,
					'top': 0
				});
			} else {
				$bar.css({
					'left': 0,
					'bottom': 0
				});
			}
		}

		var $children = self.children();
		$bar.appendTo(self);

		update();

		$children.mouseenter(function() {
			var $target = $(this),
				i = $children.index($target);
			gotoItem(i);
		});

		self.mouseleave(update);

		function gotoItem(i) {
			var $target = $children.eq(i);
			if (!$target.length) return;

			var parentOffset = self.offset(),
				offset = $target.offset(),
				style = {};

			if (isVer) {
				style['height'] = $target.height();
				style['top'] = offset.top - parentOffset.top;
			} else {
				style['width'] = $target.width();
				style['left'] = offset.left - parentOffset.left;
			}

			$bar
				.stop()
				.animate(style, durtion, easing);
		}

		function update() {
			var $target = $children.filter('.' + returnClass);
			if (!$target.length) {
				$target = $children.find('.' + returnClass).parents().filter($children);
			}
			if (!$target.length) {
				$target = $children.eq(initIndex);
			}
			var i = $children.index($target);
			gotoItem(i);
		}

		self.navbarGotoItem = gotoItem;
		self.navbarUpdate = update;
	};

	return $;
}));
