// 移除字符串中的js代码
function removescript(s) {
	if(s.indexOf('<script') == -1) return s;
	var p = /<script[^\>]*?>[^\x00]*?<\/script>/ig;
	return s.replace(p, '');
}

// ### getArg(str)
// 获取字符串表达式中括号内的参数数组
//
//    'cubic-bezier(0,0,1,1)' => [0,0,1,1]
//
function getArg(str) {
	var s = str.match(/\(.*\)$/);
	if (s) {
		var args = s[0].slice(1, -1).split(',');
		for (var i = 0, l = args.length; i < l; i++) {
			var arg = parseFloat(args[i]);
			args[i] = isNaN(arg) ? undefined : arg;
		}
		return args;
	}
	return null;
}


// 计算DOM元素的全局坐标
function getElementPosition(e) {
	var x = 0, y = 0;
	while (e) {
		x += e.offsetLeft;
		y += e.offsetTop;
		e = e.offsetParent;
	}
	return { x: x, y: y };
}


// 获取窗口的大小
function getViewPortSize(w) {
	var w = w || window;
	if (w.innerWidth != null)
		return { w: w.innerWidth, h: w.innerHeight };
	var d = w.document;
	if (document.compatMode == 'CSS1Compat')
		return { w: d.documentElement.clientWidth, h: d.documentElement.clientHeight };
	return { w: d.body.clientWidth, h: d.body.clientHeight };
}


// 获取窗口的滚动偏移量
function getScrollOffsets(w) {
	var w = w || window;
	if (w.pageXoffset != null) {
		return { x: w.pageXoffset, y: w.pageYoffset };
	}
	var d = w.document;
	if (document.compatMode == 'CSS1Compat')
		return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
	return { x: d.body.scrollLeft, y: d.body.scrollTop };
}


// 简短的attr
// 这个方法不仅可以设置标准的属性,还可以设置任意属性,兼容好
function attr(elem, name, value) {
	var ret;
	if (value) {
		if (/msie [6-7]\.0/i.test(navigator.userAgent)) {
			ret = elem.getAttributeNode(name);
			if (!ret) { //ie6 7不合法的属性设置捕鸟,通过这里可以设置
				ret = document.createAttribute(name);
				elem.setAttributeNode(ret);
			}
			ret.nodeValue = value + '';
		} else {
			elem.setAttribute(name, value);
		}
		return elem;
	} else { //ie6 7有得属性获取不鸟
		ret = elem.getAttribute(name);
		fixIe = elem.getAttributeNode(name).nodeValue;
		ret = ret ? ret : fixIe ? fixIe : undefined;
		return ret;
	}
}


// getElementsByClassName
function getElementsByClassName(cls, context) {
	var root = context || document;
	return document.querySelectorAll ? root.querySelectorAll('.' + cls) : root.getElementsByClassName ?
		root.getElementsByClassName(cls) : help('*', cls, context);
}
function help(tagName, cls, context) {
	var root = context || document,
		ret = [],
		rcls = new RegExp('^|\\s+'+cls+'\\s+|$'),
		elems = root.getElementsByTagName(tagName || '*');
	for(var i = 0, l = elems.length; i < l; i++) {
		if (rcls.test(elem[i].className)) {
			ret.push(elems[i]);
		}
	}
	return ret;
}


// 添加到收藏
function addToFavorite(url, title) {
	var url = url || self.location;
	var title = title || document.title;
	if(document.all) {
		try {
			window.external.addFavorite(url, title);
		} catch (e1) {
			try {
				window.external.addToFavoritesBar(url, title);
			} catch (e2) {
				alert('您的浏览器不支持此操作，请您手工加入。')
			}
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, '');
	} else if (window.opera && window.print) {
		var mbm = document.createElement('a');
		mbm.setAttribute('rel', 'sidebar');
		mbm.setAttribute('href', url);
		mbm.setAttribute('title', title);
		mbm.click();
	} else {
		alert('您的浏览器不支持此操作，请您手工加入。')
	}
}
