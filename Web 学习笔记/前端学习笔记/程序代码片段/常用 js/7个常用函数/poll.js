// 如果事件不存在时，你就不能插入一个事件以判断所需的状态，那么就需要每隔一段时间去检查状态是否达到你的要求。
function poll(fn, callback, errback, timeout, interval) {
	var endTime = Number(new Date()) + (timeout || 2000);
	interval = interval || 100;

	(function p() {

		// 如果条件满足，则执行！
		if (fn()) {
			callback();
		}

		// 如果条件不满足，但并未超时，再来一次
		else if (Number(new Date()) < endTime) {
			setTimeout(p, interval);
		}

		// 不匹配且时间消耗过长，则拒绝！
		else {
			errback(new Error('timed out for ' + fn + ': ' + arguments));
		}
	})();
}

// 用法：确保元素可见
poll(
	function() {
		return document.getElementById('lightbox').offsetWidth > 0;
	},
	function() {
		// 执行，成功的回调函数
	},
	function() {
		// 错误，失败的回调函数
	}
);
