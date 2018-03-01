/**
 * @brief 挂挂卡效果
 * @param canvas  画布对象或者选择器字符串
 * @param url  涂层图片的 url，或者涂抹说明文本字符串
 * @param func  涂层刮开的回调函数
 * @param brushWidth  笔刷的粗细，默认为 30
 * @param openArea  判断是否被刮完的比例，取值为 0 ~ 1 之间，0 表示点击即算刮开，1 表示必须完全刮完，默认为 0.7
 * @param vanish  当被判定为已刮开时，是否让涂层全部消失
 */
(function(canvas, url, func, brushWidth, openArea, vanish) {
	brushWidth = brushWidth || 30;
	if (typeof(openArea) == 'undefined') openArea = 0.7;
	var $doc = $(document);
	var $canvas = $(canvas).css({
		//'width': '100%',
		//'height': '100%',
		'user-select': 'none',
		'background-color': 'transparent',
		'cursor': 'pointer'
	});
	var $container = $canvas.parent();
	var isImgUrl = url.match(/(.png|.jpg)/i) != null; //判断url是否为图片路径

	var is_winPhone = navigator.userAgent.match(/Windows Phone/i) != null;
	var is_android = navigator.userAgent.match(/android/i) != null && !is_winPhone;

	var w, h;
	var offsetX, offsetY;
	var imgWidth, imgHeight;
	var ctx = $canvas[0].getContext('2d');
	var mousedown = false;
	var isOpen = false; // 表示是否已经刮开
	var surplusArea; // 保存判定为刮开时剩余的面积

	if (isImgUrl) {
		var img = new Image();
		img.src = url;
		img.onload = function() {
			imgWidth = this.width;
			imgHeight = this.height;
			resize();
		};
	} else {
		resize();
	}

	function resize() {
		offsetX = $canvas.offset().left-$doc.scrollLeft();
		offsetY = $canvas.offset().top-$doc.scrollTop();
		if (isOpen) return;

		w = $container.width();
		h = $container.height();
		surplusArea = w*h*(1-openArea);
		$canvas.attr({
			'width': w,
			'height': h
		}); //当 canvas 的宽高属性被重置的时候，所有的绘图上下文设置都将被重置，绘制出的图像也将被清除

		if (isImgUrl) {
			// 等比例将图片缩放并放置在画布中心位置
			var sx = w / imgWidth;
			var sy = h / imgHeight;
			var scale; //最终缩放比例
			var sw, sh; //缩放后的宽高
			if (sx > sy) scale = sx;
			else scale = sy;
			sw = imgWidth * scale;
			sh = imgHeight * scale;
			ctx.clearRect(0, 0, w, h);
			ctx.drawImage(img, (sw-w)/2/scale, (sh-h)/2/scale, w/scale, h/scale, 0, 0, w, h);
		} else {
			ctx.font = 'bold 20px 黑体';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillStyle = 'gray';
			ctx.fillRect(0, 0, w, h);
			ctx.shadowOffsetY = 1;
			ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
			ctx.fillStyle = '#333';
			ctx.fillText(url, w/2, h/2, w);
		}

		ctx.lineWidth = brushWidth;
		ctx.lineCap = 'round';
		ctx.globalCompositeOperation = 'destination-out';
	}
	if ($container[0] == window) $container.resize(resize);

	$doc.on('vmousedown', eventDown);
	$doc.on('vmouseup', eventUp);
	$doc.on('vmousemove', eventMove);

	var x, y;
	function eventDown(e) {
		mousedown = true;
		ctx.moveTo(e.clientX-offsetX, e.clientY-offsetY);
	}

	function eventUp(e) {
		mousedown = false;
		// 判断刮出的面积是否超过一半
		var data = ctx.getImageData(0,0,w,h).data;
		for (var i = 0, j = 0; i < data.length; i += 4) {
			if (data[i] && data[i+1] && data[i+2] && data[i+3]) j++;
		}
		if (j <= surplusArea) {
			isOpen = true;
			if (func) func();
			$doc.off('vmouseup', eventUp);
			if (vanish) {
				$doc.off('vmousedown', eventDown);
				$doc.off('vmousemove', eventMove);
				$canvas.remove();
			}
		}
    }

	function eventMove(e) {
		e.preventDefault();
		if (mousedown) {
			ctx.lineTo(e.clientX-offsetX, e.clientY-offsetY);
			ctx.stroke();
			if (is_android) { // 部分Android设备初始化canvas后就不再刷新，这里需要强制刷新
				$canvas.width(0).width(w);
			}
		}
	}
})('canvas', '刮开涂层', function(){


});