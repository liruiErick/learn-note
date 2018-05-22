/**
 * 将参数对象拼装进 url
 * @param  {String} url    需要拼装的 url
 * @param  {Object} params 参数对象
 * @return {String}        返回拼装好的新 url
 */
function composeUrl(url, params) {
	if (typeof params !== 'object') return url;

	var paramArr = [];
	for (var key in params) {
		paramArr.push({
			'key': key,
			'value': typeof params[key] === 'object' ? JSON.stringify(params[key]) : params[key]
		});
	}

	// 根据 key 进行排序
	paramArr.sort(function(a, b) {
		var av = a['key'],
			bv = b['key'];
		return av.localeCompare(bv);
	});

	var paramStr = '';
	for (var i = 0, p; p = paramArr[i++];) {
		paramStr += '&' + p['key'] + '=' + p['value'];
	}

	if (url.indexOf('?') >= 0) {
		var lastChar = url.charAt(url.length - 1);
		if (lastChar === '&' || lastChar === '?') paramStr = paramStr.substr(1);
	} else {
		paramStr = '?' + paramStr.substr(1);
	}

	return url + paramStr;
}


// 获取url中的参数
function getUrlParam(key) {
	var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)'); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}


// 把URL参数解析为一个对象
function parseQueryString(url) {
	var obj = {};
	var a = url.split('?');
	if(a.length == 1) return obj;
	var b = a[1].split('&');
	for(var i = 0, l = b.length; i < l; i++) {
		var c = b[i].split('=');
		obj[c[0]] = c[1];
	}
	return obj;
}


// 获取url中的域名
// num表示域名的段位，如
// 1 对应获取的是1段域名 => sina.com
// 2 对应获取的是2段域名 => sina.com.cn
function getDomain(url, num) {
	num = typeof(num) !== 'number' ? 1 : num < 0 ? 1 : num;
	var regExpStr = '[http|https]:\\/\\/([^\\/\\.]*\\.)*([^\\/\\.]+';
	for (var i = 0; i < num; i++) {
		regExpStr += '\\.[^\\/\\.]+';
	}
	regExpStr += ')\\/?';
	var regExp = new RegExp(regExpStr, 'i');
	var domain = url.match(regExp);
	return domain[2];
}

// 基于getDomain的js防盗用
var domain = '\htt\p\:\/\/\w\w\w.vr\w\an\j\i\a.\cn';
if (getDomain(window['\l\o\c\at\i\on']['\hr\ef'], 1) !== getDomain(domain, 1)) {
	window['\l\o\c\at\i\on']['\hr\ef'] = domain;
}


// 判断 href 是否为无效值
function isVoid(href) {
	return !href || href.indexOf('#') === 0 || href.indexOf('javascript:') === 0;
}

// 判断是否为绝对路径
function isAbsPath(href) {
	return href && (href.indexOf('http') === 0 || href.indexOf('file:') === 0 || href.indexOf('data:') === 0);
}

// 获取当前的域名
// http://www.baidu.com
function getCurHostname() {
	return location.protocol + '//' + location.host;
}

// 获取url中的域名
// http://www.baidu.com/
function getHostname(url) {
	var result = /https?:\/\/[^\/]+\/?/.exec(url)
	return result ? result[0].replace(/\/+$/, '') + '/' : null;
}

// 获取不包含 # ? 部分的 url
function getUrl(href) {
	return href ? href.replace(/[#?].*$/, '') : location.protocol + '//' + location.host + location.pathname;
}

// 获取路径
// http://www.baidu.com/page/index.html  =>  http://www.baidu.com/page/
function getDir(href) {
	return href.replace(/[^\/]*$/, '');
}

// 获取相对路径
// href = 'http://www.baidu.com/page/content/index.html';
// dir  = 'http://www.baidu.com/page/';
//      =>  'content/index.html'
function getRelPath(href, dir) {
	return href.replace(dir, '');
}

// 合并路径
// path     = 'http://www.baidu.com/page/content/';
//
// filePath = '../map/baidumap.html';
//          =>  'http://www.baidu.com/page/map/baidumap.html';
//
// filePath = './map/baidumap.html';
//          =>  'http://www.baidu.com/page/content/map/baidumap.html';
//
// filePath = '/map/baidumap.html';
//          =>  'http://www.baidu.com/map/baidumap.html';
function combinePath(path, filePath) {
	path = path.replace(/\/+$/, '') + '/';

	if (!filePath.indexOf('../')) {
		var replaced = false;
		filePath = filePath.replace('../', function() {
			replaced = true;
			path = path.replace(/[^\/]*\/?$/, '');
			return '';
		});
		if (replaced) return combinePath(path, filePath);
	} else if (!filePath.indexOf('./')) {
		filePath = filePath.replace('./', '');
	} else if (!filePath.indexOf('/')) {
		path = getCurHostname();
	}

	return path + filePath;
}


// 获取当前js文件的路径
// 当加载该js文件时会立即执行其中的语句，而执行此语句时所获取到的js文件数目-1正好就是该js文件，因为页面后面的js文件还没有加载。
function getSelfPath() {
	var js = document.scripts,
		curJs = js[js.length - 1];
	return curJs.src.substring(0, curJs.src.lastIndexOf('/') + 1);
}


// 将所有资源的路径转化成绝对路径
function convertAbsPath($dom, href) {
	var $doms = $dom.filter('[href],[src]').add($dom.find('[href],[src]')),
		curDir = getDir(href);

	$doms.each(function(i, n) {
		var href = n.getAttribute('href'),
			src = n.getAttribute('src');

		if (!isVoid(href) && !isAbsPath(href)) {
			n.href = getAbsPath(curDir, href);
		}
		if (!isVoid(src) && !isAbsPath(src)) {
			n.src = getAbsPath(curDir, src);
		}
	});
}