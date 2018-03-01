/**
 * 定义事件 callback 集合
 */
var callbackSet = {
	'changeBefore': [],
	'change': [],
	'changeAfter': []
};

/**
 * 执行指定事件类型的 callback
 * 并将第二个参数及之后参数传递给 callback
 * @param  {String} type 事件类型
 */
function execCallbak(type) {
	var args = Array.prototype.slice.call(arguments, 1);
	callbackSet[type].concat().forEach(function(cb) {
		cb.apply(null, args);
	});
}

/**
 * 注册事件监听
 * @param  {String}             type      事件类型。
 * @param  {Function}           callback  事件监听函数。
 * @return {Function|Undefined}           如果注册成功，则返回一个反注册函数，调用它可以取消监听。
 */
function on(type, callback) {
	if (!callbackSet[type]) return;

	var cbArr = callbackSet[type];

	if (typeof callback === 'function' && cbArr.indexOf(callback) < 0) {
		cbArr.push(callback);
	}

	return function() {
		var index = cbArr.indexOf(callback);
		if (index >= 0) {
			cbArr.splice(index, 1);
		}
	};
}

/**
 * 移除事件监听
 * @param  {String}   type     可选。事件类型。
 *                             如果传入一个 Function，则会被当做事件监听函数来处理。
 * @param  {Function} callback 可选。事件监听函数。
 */
function off(type, callback) {
	var i,
		cbSet,
		typeStr = typeof type;

	if (typeStr === 'undefined') {
		for (i in callbackSet) {
			callbackSet[i].length = 0;
		}
		return;

	} else if (typeStr === 'function') {
		callback = type;
		cbSet = callbackSet;

	} else if (typeStr === 'string') {
		if (callbackSet[type]) {
			cbSet = {};
			cbSet[type] = callbackSet[type];
		} else {
			return;
		}

		if (callback === undefined) {
			cbSet[type].length = 0;
			return;
		}
	} else {
		return;
	}

	var cbArr, index;
	for (i in cbSet) {
		cbArr = cbSet[i];
		index = cbArr.indexOf(callback);
		if (index >= 0) {
			cbArr.splice(index, 1);
		}
	}
}