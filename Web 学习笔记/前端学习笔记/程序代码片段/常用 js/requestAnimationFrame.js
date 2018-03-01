/**
 * 相当一部分的浏览器的显示频率是16.7ms
 * 这也是为何setTimeout的定时器值推荐最小使用16.7ms的原因（16.7 = 1000 / 60, 即每秒60帧）
 * 而requestAnimationFrame就是为了这个而出现的
 * 所做的事情很简单，跟着浏览器的绘制走
 * 如果浏览设备绘制间隔是16.7ms，那我就这个间隔绘制
 * 如果浏览设备绘制间隔是10ms, 我就10ms绘制
 * 这样就不会存在过度绘制的问题，动画不会掉帧
 * 很可惜，只有 IE10+ 浏览器才支持，IOS 6+ 开始支持，Android 直到 4.2 都还未支持
 */

/**
 * Request Animation Frame Polyfill.
 * @author Tino Zijdel
 * @author Paul Irish
 * @see https://gist.github.com/paulirish/1579671
 */

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());

// 不修改全局对象
(function() {
	var requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		vendors = ['ms', 'moz', 'webkit', 'o'],
		lastTime = 0;
	for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
		requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!requestAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var currTime = new Date().getTime(),
				timeToCall = Math.max(0, 16 - (currTime - lastTime)),
				id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if (!cancelAnimationFrame) {
		cancelAnimationFrame = function(id) {
			window.clearTimeout(id);
		};
	}
}());


// 实际上当浏览器不支持 requestAnimationFrame 时，所做的兼容代码并不完美
// 因为计时器是基于 lastTime 来计算时间的，但是如果同时设置多个计时器，会导致它们公用一个 lastTime
// 因此，如果计时器可能会被多次调用的情况下，那么干脆放弃这种理想化的兼容

(function() {
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback) {
			return window.setTimeout(callback, 16);
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());

// 不修改全局对象
(function() {
	var requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {
		requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!requestAnimationFrame) {
		requestAnimationFrame = function(callback) {
			return window.setTimeout(callback, 16);
		};
	}

	if (!cancelAnimationFrame) {
		cancelAnimationFrame = function(id) {
			window.clearTimeout(id);
		};
	}
}());


/* requestAnimationFrame API */

var timerID = window.requestAnimationFrame(loop);

function loop(time) {
	console.log(time);
	timerID = window.requestAnimationFrame(loop);
};

window.cancelAnimationFrame(timerID);
