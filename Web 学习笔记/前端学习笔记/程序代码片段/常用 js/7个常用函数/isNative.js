//如果你想知道一个指定函数是否是原生的，或者能不能通过声明来覆盖它。下面这段便于使用的代码能给你答案：
(function() {

	// 用于处理传入参数 value 的内部 `[[Class]]`
	var toString = Object.prototype.toString;

	// 用于解析函数的反编译代码
	var fnToString = Function.prototype.toString;

	// 用于检测宿主构造器 （Safari > 4 ;真的输出特定的数组）
	var reHostCtor = /^[object .+?Constructor]$/;

	// 用一个标准的原生方法作为模板，编译一个正则表达式。
	// 我们选择 'Object#toString' 因为它一般不会被污染。
	var reNative = RegExp('^' +

			// 将 'Object#toString' 强制转为字符串
			String(toString)

			// 转义所有指定的正则表达式字符
			.replace(/[.*+?^${}()|[]/] / g, '$&')

		// 用 '.*?' 替换提及的 'toString' ，以保持模板的通用性。
		// 将 'for ...' 之类的字符替换掉，以兼容 Rhino 等环境，因为这些环境添加了额外的信息，如方法参数数量。
		.replace(/toString|(function).*?(?=()| for .+?(?=])/g, '$1.*?') + '$'
	);

	function isNative(value) {
		var type = typeof value;
		return type == 'function'

		// 用 'Function#toString' （fnToString）绕过了值（value）本身的 'toString' 方法，以免被伪造所欺骗。
		? reNative.test(fnToString.call(value))

		// 回退到宿主对象的检查，因为某些环境（浏览器）将类型数组（typed arrays）之类的东西当作 DOM 方法，此时可能不遵循标准的原生正则表达式。
		: (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
	}

	// 导出函数
	module.exports = isNative;
}());

// 用法
isNative(alert);
// true
isNative(myCustomFunction);
// false

// 这个函数虽不完美，但它能完成任务！
