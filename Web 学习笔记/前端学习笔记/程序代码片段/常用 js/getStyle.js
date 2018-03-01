/**
 * @brief 获取元素的最终的样式（如果某个样式值为百分比或者关键字，当元素display不为none时，则获取到的是计算后的像素值）
 * @param elem 要计算样式的元素，dom对象或字符串（id号）
 * @param pro 要获取的样式属性，这个字符串是骆驼型的，如marginLeft而不是margin-left
 */
function getStyle(elem, pro) {
	elem = ('string' === typeof elem) ? document.getElementById(elem) : elem;
	if (!elem) return null;
	if (elem.style[pro]) { //内联
		return elem.style[pro];
	} else if (elem.currentStyle) { //IE
		return elem.currentStyle[pro];
	} else if (window.getComputedStyle) { //W3C标准
		var s = window.getComputedStyle(elem, null);
		return s[pro];
	} else if (document.defaultView && document.defaultView.getComputedStyle) { //FF,CHROME等
		pro = pro.replace(/([A-Z])/g, '-$1'); //如marginLeft转为margin-Left
		pro = pro.toLowerCase(); //再转为小写margin-left
		var s = document.defaultView.getComputedStyle(elem, '');
		return s && s.getPropertyValue(pro);
	} else return null;
}