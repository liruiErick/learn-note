// 确定缩放比例，使图片可以在容器中完全显示
function scaleImg(img) {
	var imgWidth = img.width;
	var imgHeight = img.height;
	var containerWidth = img.parentNode.clientWidth;
	var containerHeight = img.parentNode.clientHeight;

	var sx = containerWidth / imgWidth;
	var sy = containerHeight / imgHeight;
	var scale; //最终缩放比例
	if (sx > sy) scale = sy;
	else scale = sx;

	img.width = imgWidth * scale;
	img.height = imgHeight * scale;
	img.style.marginLeft = (containerWidth - img.width) * 0.5 + 'px';
	img.style.marginTop = (containerHeight - img.height) * 0.5 + 'px';
}
// 确定缩放比例，使图片可以覆盖整个容器
function scaleImg(img) {
	var imgWidth = img.width;
	var imgHeight = img.height;
	var containerWidth = img.parentNode.clientWidth;
	var containerHeight = img.parentNode.clientHeight;

	var sx = containerWidth / imgWidth;
	var sy = containerHeight / imgHeight;
	var scale; //最终缩放比例
	if (sx > sy) scale = sx;
	else scale = sy;

	img.width = imgWidth * scale;
	img.height = imgHeight * scale;
	img.style.marginLeft = (containerWidth - img.width) * 0.5 + 'px';
	img.style.marginTop = (containerHeight - img.height) * 0.5 + 'px';
}

// jQuery版本
// 确定缩放比例，使图片可以在容器中完全显示
function scaleImg($img) {
	var imgWidth = $img.outerWidth();
	var imgHeight = $img.outerHeight();
	var containerWidth = $img.parent().width();
	var containerHeight = $img.parent().height();

	var sx = containerWidth / imgWidth;
	var sy = containerHeight / imgHeight;
	var scale; //最终缩放比例
	if (sx > sy) scale = sy;
	else scale = sx;

	$img.width(imgWidth * scale);
	$img.height(imgHeight * scale);
	$img.css({
		'margin-left': (containerWidth - $img.outerWidth()) * 0.5,
		'margin-top': (containerHeight - $img.outerHeight()) * 0.5
	});
}
// 确定缩放比例，使图片可以覆盖整个容器
function scaleImg($img) {
	var imgWidth = $img.outerWidth();
	var imgHeight = $img.outerHeight();
	var containerWidth = $img.parent().width();
	var containerHeight = $img.parent().height();

	var sx = containerWidth / imgWidth;
	var sy = containerHeight / imgHeight;
	var scale; //最终缩放比例
	if (sx > sy) scale = sx;
	else scale = sy;

	$img.width(imgWidth * scale);
	$img.height(imgHeight * scale);
	$img.css({
		'margin-left': (containerWidth - $img.outerWidth()) * 0.5,
		'margin-top': (containerHeight - $img.outerHeight()) * 0.5
	});
}