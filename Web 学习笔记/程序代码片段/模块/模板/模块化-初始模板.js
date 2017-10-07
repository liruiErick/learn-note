/*!
 * jQuery Animate v1.8.0 - By CSS3 transition
 * (c) 2014-2016 BaiJunjie
 * MIT Licensed.
 *
 * https://github.com/baijunjie/jquery.animate
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.returnExports = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';



	return $;
}));




// 根据设备加载
// 注意这种写法不适用 r.js
(function(root, factory) {
	'use strict';

	var is_mobile = !!navigator.userAgent.match(/mobile/i);

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('DragEvent'));
	} else if (typeof define === 'function' && define.amd) {
		if (is_mobile) {
			define(['jquery', 'DragEvent'], factory);
		} else {
			define(['jquery'], factory);
		}
	} else {
		root.bjj = root.bjj || {};
		root.bjj.returnExports = factory(root.jQuery, root.bjj.DragEvent);
	}

}(this, function($, DragEvent) {
	'use strict';



	return $;
}));