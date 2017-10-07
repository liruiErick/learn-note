// 加入鼠标滚轮事件
addmousewheel(document, function(e) {
	e.preventDefault ? e.preventDefault() : e.returnValue = false; //阻止浏览器默认滚动行为

	var inScroll = false, //表示是否处于滚动容器中
		target = e.target;
	while (target) {
		if (target.tagName === 'HTML') break;
		else if (isScroll(target).y) {
			inScroll = true;
			break;
		}
		target = target.parentNode;
	}

	var detail;
	if ( 'deltaY' in e ) {
		detail = -e.deltaY / Math.abs(e.deltaY);
	} else if ('wheelDeltaY' in e) {
		detail = e.wheelDeltaY / Math.abs(e.wheelDeltaY);
	} else if('wheelDelta' in e) {
		detail = e.wheelDelta / Math.abs(e.wheelDelta);
	} else if ('detail' in e) {
		detail = -e.detail / Math.abs(e.detail);
	} else {
		return;
	}

	if (detail > 0) {
		//向上滚动
	} else if (detail < 0) {
		//向下滚动
	}
});

function addmousewheel(element, callback) {
	if (navigator.userAgent.indexOf('Firefox') >= 0) {
		element.addEventListener('DOMMouseScroll', callback, false);
	} else {
		if(element.addEventListener){
			element.addEventListener('mousewheel', callback, false);
		} else if(element.attachEvent){
			element.attachEvent('onmousewheel', callback);
		}
	}
}

// 移除鼠标滚轮事件
function removemousewheel(element, callback) {
	if (navigator.userAgent.indexOf('Firefox') >= 0) {
		element.removeEventListener('DOMMouseScroll', callback, false);
	} else {
		if(element.removeEventListener){
			element.removeEventListener('mousewheel', callback, false);
		} else if(element.detachEvent){
			element.detachEvent('onmousewheel', callback);
		}
	}
}


// 判断元素是否含有滚动条
function isScroll(el) {
	var overflow_x = getStyle(el, 'overflow-x'),
		overflow_y = getStyle(el, 'overflow-y');
	return {
		x: !!((el.offsetWidth < el.scrollWidth) && (overflow_x === 'auto' || overflow_x === 'scroll')),
		y: !!((el.offsetHeight < el.scrollHeight) && (overflow_y === 'auto' || overflow_y === 'scroll'))
	};
}

/*function isScroll(el) {
	// test targets
	var elems = el ? [el] : [document.documentElement, document.body];
	var scrollX = false, scrollY = false;
	for (var i = 0; i < elems.length; i++) {
		var o = elems[i];
		// test horizontal
		var sl = o.scrollLeft;
		o.scrollLeft += (sl > 0) ? -1 : 1;
		o.scrollLeft !== sl && (scrollX = scrollX || true);
		o.scrollLeft = sl;
		// test vertical
		var st = o.scrollTop;
		o.scrollTop += (st > 0) ? -1 : 1;
		o.scrollTop !== st && (scrollY = scrollY || true);
		o.scrollTop = st;
	}
	// ret
	return {
		x: scrollX,
		y: scrollY
	};
}*/

// 获取元素样式
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