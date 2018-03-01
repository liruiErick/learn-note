//首先要对HTMLElement进行类型检查
//因为即使在支持HTMLElement的浏览器中，类型却是有差别的
//在Chrome,Opera中HTMLElement的类型为function，此时就不能用它来判断了
var isDOM = (typeof HTMLElement === 'object') ?
	function(obj) {
		return obj instanceof HTMLElement;
	} :
	function(obj) {
		return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
	}

// 判断对象是否为DOM
function isDOM(dom) {
	return /^\[object HTML.*\]$/.test(Object.prototype.toString.call(dom));
}

// 判断对象是否为jQuery对象
function isJQ(jq) {
	return jq instanceof jQuery;
}

// 判断是否为字符串
function isString(str) {
    return typeof str === 'string';
}

// 判断是否为函数
function isFunction(func) {
    return typeof func === 'function';
}

// 判断一个对象是否为数组
function isArray(arr) {
	return Object.prototype.toString.call(arr) === '[object Array]';
}

// 判断一个对象是否为日期对象
function isDate(date) {
	return Object.prototype.toString.call(date) === '[object Date]';
}

// 判断对象是否为普通对象
function isObject(obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}

// 判断对象是否为数字
function isNumber(num) {
	var type = typeof num;
	return type === 'number' || (type === 'string' && !isNaN(num - parseFloat(num)));
}

// 判断一个对象是否为空
function isEmptyObject(obj) {
	for (var key in obj) return false;
	return true;
}

// 类似数组对象转数组
function toArray(obj) {
    return Array.prototype.map.call(obj, function(n) { return n });
}




