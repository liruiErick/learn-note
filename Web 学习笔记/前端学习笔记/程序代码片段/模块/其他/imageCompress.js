/**
 * imageCompress v1.0.0
 *
 * @brief  图片压缩
 * @source {string} 原图的地址
 * @callback {function} 压缩后的回调，将压缩后图像的DataURL作为参数传入，this指向源图片对象。如果发生错误，将传入null
 * @outputOption {object} 输出选项
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.imageCompress = factory();
	}

}(this, function() {
	'use strict';

	var defaultOutputOption = {
		size: [100, 100], // 输出图像的宽和高组成的数组。默认值为[100,100]
		type: 'image/png', // 指定输出图片的类型，可选 'jpg' 和 'png' 两种种类型，默认为 'png'
		fill: 'cover' // 可选'cover'、'contain'和'none'，默认为cover
	}

	function imageCompress(source, callback, outputOption) {
		if (typeof callback !== 'function') {
			console.warn('缺少回调方法');
			return;
		}
		if (!source) {
			console.warn('图片源为空');
			callback(null);
			return;
		}

		var outputSize = outputOption.size || defaultOutputOption.size,
			outputType = outputOption.type || defaultOutputOption.type,
			outputFill = outputOption.fill || defaultOutputOption.fill;

		if (!isArray(outputSize)) {
			outputSize = [100, 100];
		}

		var outputWidth = Math.max(outputSize[0], 0),
			outputHeight = Math.max(outputSize[1], 0);

		outputType = outputType || 'image/png';

		if (outputType === 'jpg') {
			outputType = 'image/jpeg';
		} else if (outputType === 'png') {
			outputType = 'image/png';
		}

		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			img = new Image();

		canvas.width = outputWidth;
		canvas.height = outputHeight;

		img.onload = function() {
			var imgWidth = img.width,
				imgHeight = img.height,
				offsetX = 0,
				offsetY = 0;

			if (outputFill === 'cover' || outputFill === 'contain') {
				var sx = outputWidth / imgWidth,
					sy = outputHeight / imgHeight,
					scale; //最终缩放比例

				if (outputFill === 'cover') {
					if (sx > sy) scale = sx;
					else scale = sy;
				} else if (outputFill === 'contain') {
					if (sx > sy) scale = sy;
					else scale = sx;
				}

				imgWidth *= scale;
				imgHeight *= scale;
				offsetX = outputWidth * .5 - imgWidth * .5;
				offsetY = outputHeight * .5 - imgHeight * .5;
			} else {
				imgWidth = outputWidth;
				imgHeight = outputHeight;
			}

			ctx.drawImage(img, offsetX, offsetY, imgWidth, imgHeight);

			var dataURL = canvas.toDataURL(outputType, 1);
			callback.call(img, dataURL);
		}

		img.onerror = function(e) {
			console.warn('图片加载失败');
			callback(null);
		};

		img.src = source;

		// 判断一个对象是否为数组
		function isArray(obj) {
			return Object.prototype.toString.call(obj) === '[object Array]';
		}
	}

	return imageCompress;
}));
