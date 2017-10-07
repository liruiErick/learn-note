/**
 * 根据name获取对应的元素，如果不存在，则重新创建一个
 * @param  {String}       name    类名或者选择器
 * @param  {jQueryObject} context 查找该元素时所限制的上下文环境，默认为 document
 * @param  {String}       link    如果是一个超链接，则传入链接地址
 * @return {jQueryObject} 返回获取到的 jQuery 对象
 */
function getElementByName(name, context, link) {
	var elem = link ? '<a href="' + link + '">' : '<div>';
	if (!name) return $(elem);

	var $elem = $(name, context);
	if (!$elem.length) {
		$elem = $(elem);
		var arr = name.split(' '),
			n = arr[arr.length - 1];

		if (!n.indexOf('#')) $elem.attr('id', name.substr(1));
		else if (!n.indexOf('.')) $elem.addClass(name.substr(1))
		else $elem.addClass(n);
	}

	return $elem;
}