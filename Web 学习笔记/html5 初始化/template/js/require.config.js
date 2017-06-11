(function() {

var is_lt_IE9 = false,
	ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
	ieVersionNum = ieVersion && ieVersion[1] - 0;
if (navigator.appName == 'Microsoft Internet Explorer' && ieVersionNum < 9) is_lt_IE9 = true;

var jquery = is_lt_IE9 ? 'jquery-1.12.3.min' : 'jquery-3.1.1.min';

function getSelfPath() {
	var js = document.scripts,
		curJs = js[js.length - 1],
		path = curJs.src.substring(0, curJs.src.lastIndexOf('/') + 1);
	return path;
}

require.config({
	baseUrl: getSelfPath(),
	paths: {
		'G': 'G',
		'css': 'lib/css.min',
		'jquery': 'lib/' + jquery,
		//'jquery': 'lib/jquery-3.1.1.min',
		'jquery.animate': 'lib/jquery.animate.min',
		'jquery.mousewheel': 'lib/jquery.mousewheel.min',
		'jquery.jgestures': 'lib/jquery.jgestures.min',
		'jquery.autoAdjust': 'lib/jquery.autoAdjust',
		'jquery.placeholder': 'lib/jquery.placeholder.min',
		'jquery.imgloaded': 'lib/jquery.imgloaded',
		'tools': 'lib/tools',
		'mainLoop': 'lib/mainLoop',
		'popup': 'lib/popup',
		'Lazyload': 'lib/Lazyload.min',
		'lazyLoadFile': 'lib/lazyLoadFile',
		'overscroll': 'lib/overscroll',
		'noclickdelay': 'lib/noclickdelay',
		'mediaQueries': 'lib/mediaQueries',
		'DragEvent': 'lib/DragEvent.min',
		'hammer': 'lib/hammer.min',
		'TabBanner': 'lib/TabBanner.min',
		'TabContent': 'lib/TabContent',
		'Slider': 'lib/Slider.min',
		'fullScreenSlide': 'lib/fullScreenSlide',
		'IScroll': 'lib/iscroll-probe',
		'wx': 'https://res.wx.qq.com/open/js/jweixin-1.0.0',
		'wxShare': 'lib/wxShare',
		'underscore': 'lib/underscore-min',
		'ajaxRequire': 'lib/ajaxRequire',
		'Vue': 'lib/vue.min'
	},
	shim: {
		'jgestures': {
			deps: ['jquery'],
			exports: '$'
		},
		'iscroll': {
			exports: 'IScroll'
		}
	},
	urlArgs: 'debug=' + (+ new Date())
});

})();