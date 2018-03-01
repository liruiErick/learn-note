// 我们都知道能通过选择器（通过 document.querySelectorAll ）获取一个 NodeList ，并可为每个元素设置样式
// 但有什么更高效的方法为选择器设置样式呢（例如你可以在样式表里完成）：

var sheet = (function() {
	// 创建 <style> 标签
	var style = document.createElement('style');

	// 如果你需要指定媒介类型，则可以在此添加一个 media (和/或 media query)
	// style.setAttribute('media', 'screen')
	// style.setAttribute('media', 'only screen and (max-width : 1024px)')

	// WebKit hack :(
	style.appendChild(document.createTextNode(''));

	// 将 <style> 元素添加到页面
	document.head.appendChild(style);

	return style.sheet;
})();

// 用法
sheet.insertRule('header { float: left; opacity: 0.8; }', 1);

// 这对于一个动态且重度依赖 AJAX 的网站来说是特别有用的。
// 如果你为一个选择器设置样式，那么你就不需要为每个匹配到的元素都设置样式（现在或将来）。