/**
 * @brief 3D透视效果，基于 jQuery 和 jQuery Transit CSS3 动画扩展插件
 * @author 白俊杰 2014/07/31
 * @param $obj 要实现3D效果元素的 jQuery 对象
 * @param layer 设定元素的层级，取值为整数，数值越大，离观察者越远
 * @param fixX 设定元素旋转固定点的X位置
 * @param fixY 设定元素旋转固定点的Y位置
 * @param shadow 要设定元素是否有投影，布尔值，默认为flase（目前还不完善，请勿使用）
 * @param shadowType 设定元素投影类型，默认值为0表示块阴影，1表示采用Canvas绘制的轮廓阴影
 * @param rangeCoe 要设定元素跟随鼠标旋转幅度的系数，默认值为0.02
 */
function followMouse($obj, layer, fixX, fixY, shadow, shadowType, rangeCoe) {
	var $offsetParent = $obj.offsetParent();
	layer = layer || 0;
	fixX = fixX || $offsetParent.width() / 2;
	fixY = layer || $offsetParent.height() / 2;
	shadow = !!shadow;
	shadowType = shadowType || 0;
	rangeCoe = rangeCoe || 0.02;

	// 为父节点设置透视属性
	if (!$offsetParent.css('perspective')) {
		$offsetParent.css({
			'-webkit-perspective': '1000px',
			'-moz-perspective': '1000px',
			'-ms-perspective': '1000px',
			'transform-style': 'flat'
		});
	}

	// 记录坐标
	// 如果该元素被隐藏，那么先将隐藏的元素显示出来，计算完位置后再隐藏
	var $hide = $();
	var $none;
	while ($obj.is(':hidden')) {
		$none = $obj.parents().addBack().filter(':hidden').first();
		$hide = $hide.add($none.show());
	}
	var left = parseInt($obj.css('margin-left'));
	var right = parseInt($obj.css('margin-right'));
	var top = parseInt($obj.css('margin-top'));
	var bottom = parseInt($obj.css('margin-bottom'));
	// 设置该元素的位置和变换点
	var parentOffsetLeft = $offsetParent.offset().left;
	var parentOffsetTop = $offsetParent.offset().top;
	var curX = $obj.offset().left - parentOffsetLeft;
	var curY = $obj.offset().top - parentOffsetTop;
	var originX = fixX - curX;
	var originY = fixY - curY;
	$obj.css({
		'z-index': layer,
		'transform-origin': originX + 'px ' + originY + 'px'
	});
	$hide.hide();

	if (shadow) {
		if (shadowType==0) {
			$obj.css('box-shadow', '5px 5px 20px 10px rgba(0,0,0,0.5)');
		} else if (shadowType==1) {
			// 使用Canvas元素创建轮廓的投影
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			var img = $obj[0];
			canvas.width = $offsetParent.width();
			canvas.height = $offsetParent.height();
			drawShadow(ctx, img, curX, curY, 50, 50);
			// 将元素替换成Canvas对象
			$obj = $obj.replaceWith(canvas);
		}
	}

	// 主要跟随逻辑
	var mouseX, mouseY, rx, ry, sx, sy, offset;
	if (shadow) offset = layer * 0.01 + 1;
	$offsetParent.mousemove(function(e) {
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
		if (shadow) {
			sx = (fixX - mouseX) * 0.05 * offset;
			sy = (fixY - mouseY) * 0.05 * offset;
			if (shadowType==0) $obj.css('box-shadow', sx+'px '+sy+'px 20px 10px rgba(0,0,0,0.5)');
			else if (shadowType==1) drawShadow(ctx, img, curX, curY, sx, sy);
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
}