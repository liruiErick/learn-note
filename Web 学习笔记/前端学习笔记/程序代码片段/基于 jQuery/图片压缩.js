function compressImg(sourceImgObj, quality, outputFormat){
	quality = quality || .8;
	var mimeType = outputFormat || 'image/jpeg';

	var drawWidth = sourceImgObj.naturalWidth,
		drawHeight = sourceImgObj.naturalHeight;
	// IOS 设备上 canvas 宽或高如果大于 1024，就有可能导致应用崩溃闪退
	// 因此这里需要缩放
	var maxSide = Math.max(drawWidth, drawHeight);
	if (maxSide > 1024) {
		var minSide = Math.min(drawWidth, drawHeight);
		minSide = minSide / maxSide * 1024;
		maxSide = 1024;
		if (drawWidth > drawHeight) {
			drawWidth = maxSide;
			drawHeight = minSide;
		} else {
			drawWidth = minSide;
			drawHeight = maxSide;
		}
	}

	var cvs = document.createElement('canvas');
	var ctx = cvs.getContext('2d');
	cvs.width = drawWidth;
	cvs.height = drawHeight;

	ctx.drawImage(sourceImgObj, 0, 0, drawWidth, drawHeight);
	var newImageData = cvs.toDataURL(mimeType, quality);
	return newImageData;
}