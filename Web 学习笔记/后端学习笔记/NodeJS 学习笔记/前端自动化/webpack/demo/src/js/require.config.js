require.config({
	paths: {
		"css": "lib/css.min",
		"jquery": "lib/jquery-1.12.3.min",
		"animate": "lib/jquery.animate.min",
		"tools": "lib/tools",
		"mainLoop": "lib/mainLoop",
		"warn": "lib/warn.min",
		"lazyload": "lib/jquery.lazyload.min",
		"lazyLoadFile": "lib/lazyLoadFile",
		"overscroll": "lib/overscroll",
		"noclickdelay": "lib/noclickdelay",
		"mediaQueries": "lib/mediaQueries",
		"DragEvent": "lib/DragEvent.min",
		"hammer": "lib/hammer.min",
		"jgestures": "lib/jquery.jgestures.min",
		"TabBanner": "lib/TabBanner.min",
		"TabContent": "lib/TabContent",
		"Slider": "lib/Slider.min",
		"fullScreenSlide": "lib/fullScreenSlide",
		"autoAdjust": "lib/jquery.autoAdjust",
		"placeholder": "lib/jquery.placeholder.min",
		"iscroll": "lib/iscroll.min",
		"wx": "lib/jweixin-1.0.0",
		"wxShare": "lib/wxShare",
		"Pjax": "lib/Pjax.min",
		"raty": "lib/jquery.raty",
		"autocomplete": "lib/jquery.autocomplete.min",
		"pullrefresh": "lib/pullrefresh",
		"lightbox": "lib/jquery.lightbox"
	},
	shim: {
		"jgestures": {
			deps: ["jquery"],
			exports: "$"
		},
		"iscroll": {
			exports: "IScroll"
		}
	}
});