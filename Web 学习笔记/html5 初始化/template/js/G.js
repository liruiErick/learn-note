(function(root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.G = factory();
	}

}(this, function() {
	'use strict';

	var G = {};

	G.host = 'http://localhost/'; //本地环境

	// 设备信息
	G.device = {};
	G.device.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	G.device.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	G.device.is_mobile = !!navigator.userAgent.match(/mobile/i);
	// 判断apple、android、winPhone设备
	G.device.is_winPhone = !!navigator.userAgent.match(/Windows Phone/i);
	// 由于winPhone设备会将自己伪装成apple、android等多个设备
	// 因此必须同时不为winPhone设备，才能判定为是apple、android等设备
	G.device.is_apple = !!navigator.userAgent.match(/(iPad|iPod|iPhone)/i) && !G.device.is_winPhone;
	G.device.is_android = !!navigator.userAgent.match(/android/i) && !G.device.is_winPhone;

	return G;
}));