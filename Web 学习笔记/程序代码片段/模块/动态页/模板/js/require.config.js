(function() {

var is_lt_IE9 = false,
	ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
	ieVersionNum = ieVersion && ieVersion[1] - 0;
if (navigator.appName == 'Microsoft Internet Explorer' && ieVersionNum < 9) is_lt_IE9 = true;

var jquery = is_lt_IE9 ? 'jquery-1.12.3.min' : 'jquery-3.1.0.min';

function getSelfPath() {
	var js = document.scripts,
		curJs = js[js.length - 1],
		path = curJs.src.substring(0, curJs.src.lastIndexOf('/') + 1);
	return path;
}

require.config({
	baseUrl: getSelfPath() + 'lib',
	paths: {
		'css': 'css.min',
		'jquery': jquery,
		'jquery.animate': 'jquery.animate.min',
		'jquery.mousewheel': 'jquery.mousewheel.min',
		'jquery.jgestures': 'jquery.jgestures.min',
		'jquery.autoAdjust': 'jquery.autoAdjust',
		'jquery.placeholder': 'jquery.placeholder.min',
		'jquery.imgloaded': 'jquery.imgloaded',
		'tools': 'tools',
		'mainLoop': 'mainLoop',
		'warn': 'warn.min',
		'Lazyload': 'Lazyload.min',
		'lazyLoadFile': 'lazyLoadFile',
		'overscroll': 'overscroll',
		'noclickdelay': 'noclickdelay',
		'mediaQueries': 'mediaQueries',
		'DragEvent': 'DragEvent.min',
		'hammer': 'hammer.min',
		'TabBanner': 'TabBanner.min',
		'TabContent': 'TabContent',
		'Slider': 'Slider.min',
		'fullScreenSlide': 'fullScreenSlide',
		'iscroll': 'iscroll.min',
		'wx': 'https://res.wx.qq.com/open/js/jweixin-1.0.0',
		'wxShare': 'wxShare',
		'underscore': 'underscore-min',
		'ajaxRequire': 'ajaxRequire',
		'dynamicPage': 'dynamicPage'
	},
	shim: {
		'jgestures': {
			deps: ['jquery'],
			exports: '$'
		},
		'iscroll': {
			exports: 'IScroll'
		}
	}
});

})();