(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory();
	} else if (typeof define === 'function' && define.amd) {
		define(factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.mediaQueries = factory();
	}

}(this, function() {
	'use strict';

	function mediaQueries(option) {
		var minWidth = option.rule[0],
			maxWidth = option.rule[1],
			meetInitCb = option.meetInit || function(){},
			unmeetInitCb = option.unmeetInit || function(){},
			meetCb = option.meet || function(){},
			unmeetCb = option.unmeet || function(){},
			init = true;

		if (window.matchMedia) {
			var rule = minWidth ? '(min-width: ' + minWidth + 'px)' : '';
			if (minWidth && maxWidth) rule += ' and ';
			rule += maxWidth ? '(max-width: ' + maxWidth + 'px)' : '';
			var mq = window.matchMedia(rule),
				handleMediaQueries = function() {
					if (mq.matches) { // 满足规则
						if (init) {
							init = false;
							meetInitCb();
						}
						meetCb();
					} else { // 不满足规则
						if (init) {
							init = false;
							unmeetInitCb();
						}
						unmeetCb();
					}
				};
			mq.addListener(handleMediaQueries);
			handleMediaQueries();
		} else {
			var meet = undefined,
				resize = function() {
					var winWidth = window.innerWidth
						|| document.documentElement.clientWidth
						|| document.body.clientWidth;
					if (meet === undefined || meet === false) {
						if ((winWidth && maxWidth && winWidth >= minWidth && winWidth <= maxWidth)
						|| (winWidth && !maxWidth && winWidth >= minWidth)
						|| (!winWidth && maxWidth && winWidth <= maxWidth)) {
							meet = true;
							if (init) {
								init = false;
								meetInitCb();
							}
							meetCb();
						}
					}
					if (meet === undefined || meet === true) {
						if ((winWidth && winWidth < minWidth)
						|| (maxWidth && winWidth > maxWidth)) {
							meet = false;
							if (init) {
								init = false;
								unmeetInitCb();
							}
							unmeetCb();
						}
					}
				};

			if (window.addEventListener) {
				window.addEventListener('resize', resize, false);
			} else if (window.attachEvent) {
				window.attachEvent('onresize', resize);
			} else {
				window.onresize = resize;
			}

			resize();
		}
	}

	return mediaQueries;

}));