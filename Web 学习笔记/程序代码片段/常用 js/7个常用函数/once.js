// 有时候，你想让一个给定的功能只发生一次，类似于 onload 事件。下面的代码提供了你所说的功能：
function once(fn, context) {
	var result;

	return function() {
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}
		return result;
	};
}

// 用法
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce();
// 'Fired!'
canOnlyFireOnce();
// 没有执行指定函数