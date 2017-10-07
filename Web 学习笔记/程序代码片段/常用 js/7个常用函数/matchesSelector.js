// 一个元素有给定匹配的选择器，那么你可以使用 matchesSelector 函数来校验：
function matchesSelector(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}

// 用法
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')