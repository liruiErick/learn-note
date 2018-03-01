(function(){
	
var on = function(type, fn, capture) {
	if (window.addEventListener) this.addEventListener(type, fn, capture);
	else if (window.attachEvent) this.attachEvent("on" + type, fn);
};
var off = function(type, fn, capture) {
	if (window.removeEventListener) this.removeEventListener(type, fn, capture);
	else if (window.detachEvent) this.detachEvent("on" + type, fn);
};
if (window.HTMLElement) {
	// 使用原型扩展DOM自定义事件
	window.on = document.on = HTMLElement.prototype.on = on;
	window.off = document.off = HTMLElement.prototype.off = off;
} else {
	// 如果是不支持HTMLElement扩展的浏览器（IE8及以下浏览器）
	// 通过遍历所有元素扩展DOM事件
	var elAll = document.all,
		lenAll = elAll.length;
	for (var i=0; i<lenAll; i++) {
		elAll[i].on = on;
		elAll[i].off = off;
	}
	window.on = document.on = on;
	window.off = document.off = off;
}

})();