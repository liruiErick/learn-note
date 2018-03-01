/**
 * @brief 3D跟随鼠标效果，基于 jQuery 和 jQuery.animate 动画扩展插件
 * @author 白俊杰 2015/09/30
 * @param selector 要实现3D效果元素的DOM元素、选择器或者 jQuery 对象
 * @param shadowType 设定元素投影类型，默认值为0表示没有阴影，1表示块阴影，2表示采用Canvas绘制的轮廓阴影
 * @param layer 设定元素的层级，取值为整数，数值越大，离观察者越远
 * @param fixX 设定元素旋转固定点的X位置
 * @param fixY 设定元素旋转固定点的Y位置
 * @param rangeCoe 要设定元素跟随鼠标旋转幅度的系数，默认值为0.02
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.followMouse3D = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	function hideAction(jq, func, target) {
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
	}

	return function (selector, shadowType, layer, fixX, fixY, rangeCoe) {
		var $obj = $(selector);
		var $parent = $obj.parent();

		layer = layer || 0;
		fixX = fixX || $parent.width() / 2;
		fixY = layer || $parent.height() / 2;
		shadowType = shadowType || 0;
		rangeCoe = rangeCoe || 0.02;

		// 为父节点设置透视属性
		if (!$parent.css('perspective') || $parent.css('perspective') == 'none') {
			$parent.css({
				'perspective': '800px',
				'transform-style': 'flat'
			});
		}

		// 记录坐标
		var left, right, top, bottom,
			parentOffsetLeft, parentOffsetTop,
			curX, curY,
			originX, originY;

		// 如果该元素被隐藏，那么先将隐藏的元素显示出来，计算完位置后再隐藏
		hideAction($obj, function() {
			left = parseInt($obj.css('margin-left'));
			right = parseInt($obj.css('margin-right'));
			top = parseInt($obj.css('margin-top'));
			bottom = parseInt($obj.css('margin-bottom'));
			// 设置该元素的位置和变换点
			parentOffsetLeft = $parent.offset().left;
			parentOffsetTop = $parent.offset().top;
			curX = $obj.offset().left - parentOffsetLeft;
			curY = $obj.offset().top - parentOffsetTop;
			originX = fixX - curX;
			originY = fixY - curY;
		});

		$obj.css({
			'z-index': layer,
			'transform-origin': originX + 'px ' + originY + 'px'
		});

		if (shadowType) {
			if (shadowType == 1) {
				$obj.css('box-shadow', '5px 5px 20px 10px rgba(0,0,0,0.5)');
			} else if (shadowType == 2) {
				// 使用Canvas元素创建轮廓的投影
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var img = $obj[0];
				canvas.width = $parent.width();
				canvas.height = $parent.height();
				drawShadow(ctx, img, curX, curY, 50, 50);
				// 将元素替换成Canvas对象
				$obj = $(canvas).replaceAll($obj);
			}
		}

		// 主要跟随逻辑
		var mouseX, mouseY, rx, ry, sx, sy, offset;
		if (shadowType) offset = layer * 0.01 + 1;

		$(document).mousemove(function(e) {
			if ($obj.is(':hidden')) return;
			// 计算鼠标相对于父级元素的坐标
			mouseX = e.pageX - parentOffsetLeft;
			mouseY = e.pageY - parentOffsetTop;
			// 计算朝向
			ry = (mouseX - fixX) * rangeCoe;
			rx = (fixY - mouseY) * rangeCoe;
			// 和定位方向相反的 margin 会自动失效
			$obj.css({
				'margin-left': left + ry * layer,
				'margin-right': right - ry * layer,
				'margin-top': top - rx * layer,
				'margin-bottom': bottom + rx * layer,
				'rotateX': rx,
				'rotateY': ry
			});
			// 计算投影方向
			if (shadowType) {
				sx = (fixX - mouseX) * 0.05 * offset;
				sy = (fixY - mouseY) * 0.05 * offset;
				if (shadowType == 1) $obj.css('box-shadow', sx+'px '+sy+'px 20px 10px rgba(0,0,0,0.5)');
				else if (shadowType == 2) drawShadow(ctx, img, curX, curY, sx, sy);
			}
		});

		// 使用Canvas绘制阴影
		function drawShadow(ctx, img, x, y, sx, sy) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// 设置阴影。
			ctx.shadowOffsetX = sx;
			ctx.shadowOffsetY = sy;
			ctx.shadowBlur = 10;
			ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
			// 绘制image对象。
			ctx.drawImage(img, x, y);
		}
	};
}));