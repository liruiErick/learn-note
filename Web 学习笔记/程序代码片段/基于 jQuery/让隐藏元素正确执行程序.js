/**
 * 让隐藏元素正确执行程序（IE9及以上浏览器）
 * @param  {DOM|Array} elems  DOM元素或者DOM元素组成的数组
 * @param  {Function}  func   需要执行的程序函数
 * @param  {Object}    target 执行程序时函数中 this 的指向
 */
var defaultDisplayMap = {};
function hideAction(elems, func, target) {
	if (typeof elems !== 'object') {
		elems = [];
	}

	if (typeof elems.length === 'undefined') {
		elems = [elems];
	}

	var hideElems = [],
		hideElemsDisplay = [];

	for (var i = 0, elem; elem = elems[i++];) {

		while (elem instanceof HTMLElement) {

			var nodeName = elem.nodeName;

			if (!elem.getClientRects().length) {
				hideElems.push(elem);
				hideElemsDisplay.push(elem.style.display);

				var display = defaultDisplayMap[nodeName];
				if (!display) {
					var temp = document.createElement(nodeName);
					document.body.appendChild(temp);
					display = window.getComputedStyle(temp).display;
					temp.parentNode.removeChild(temp);

					if (display === 'none') display = 'block';
					defaultDisplayMap[nodeName] = display;
				}

				elem.style.display = display;
			}

			if (nodeName === 'BODY') break;
			elem = elem.parentNode;
		}
	}

	if (typeof(func) === 'function') func.call(target || this);

	var l = hideElems.length;
	while (l--) {
		hideElems.pop().style.display = hideElemsDisplay.pop();
	}
}

/**
 * @brief 让隐藏元素正确执行程序
 * @param jq 参数可以为一个jQuery对象、包含jQuery对象的数组、包含DOM对象的数组
 * @param func 将所有隐藏元素显示后执行的函数
 * @param target 定义func中this的指向
 */
function hideAction(jq, func, target) {
	var $hide = $();
	$.each(jq, function(i, n){
		var $n = (n instanceof jQuery) ? n : $(n),
			$hidden = $n.parents().addBack().filter(':hidden'),
			$none,
			i = $hidden.length;
		while (i--) {
			if (!$n.is(':hidden')) break;
			$none = $hidden.eq(i);
			if ($none.css('display') === 'none') $hide = $hide.add($none.show());
		}
	});
	if (typeof(func) === 'function') func.call(target || this);
	$hide.hide();
}
