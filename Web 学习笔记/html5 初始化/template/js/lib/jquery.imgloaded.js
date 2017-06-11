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

	$.fn.imgloaded = function(callback) {
		var images = this.filter('img').add(this.find('img'));

		if (!images.length) {
			callback && callback();
			return;
		}

		var unloadedImages = images.filter(function() {
			return !isLoaded(this);
		});

		check(unloadedImages, callback);

		unloadedImages.on('load error', function() {
			unloadedImages = unloadedImages.not(this);
			check(unloadedImages, callback);
		});

		return this;
	}

	function check(arr, cb) {
		if (!arr.length) {
			cb && cb();
			return;
		}
	}

	function isLoaded(img) {
		if (img.complete || img.readyState) {
			return true;
		}
		return false;
	}

	return $;

}));

