// 判断IE浏览器是否支持pointer事件
var supportPointer = !!window.navigator.pointerEnabled || !!window.navigator.msPointerEnabled;

// 判断IE浏览器是否支持多点pointer事件
// window.navigator.msMaxTouchPoints 属性可以返回最大支持的指针数
var supportMultiPointer = window.navigator.msMaxTouchPoints > 1;

// 判断浏览器是否支持touch事件
// 注意，某些设备会同时支持触摸和鼠标，因此这些结果不能够用于判断是否禁用click的标准
var supportTouch = 'ontouchend' in document;
var supportTouch = 'createTouch' in document;
var supportTouch = document.implementation.hasFeature('touch-events','3.0');

// 判断浏览器是否支持某个css属性
var supportTextShadow = 'textShdow' in document.documentElement.style;
var supportTransform = 'transform' in document.documentElement.style ||
					'webkitTransform' in document.documentElement.style ||
					'MozTransform' in document.documentElement.style ||
					'OTransform' in document.documentElement.style ||
					'msTransform' in document.documentElement.style;


// 获取浏览器支持的属性前缀，如果不支持该属性则返回undefined
console.log(support('animation'));
function support(prop) {
	var testElem = document.documentElement;
	if (prop in testElem.style) return '';

	var testProp = prop.charAt(0).toUpperCase() + prop.substr(1),
		prefixs = [ 'Webkit', 'Moz', 'ms', 'O' ];

	for (var i = 0, prefix; prefix = prefixs[i++];) {
		if ((prefix + testProp) in testElem.style) {
			return '-' + prefix.toLowerCase() + '-';
		}
	}
}

function getSupportPropertyName(prop) {
	var testElem = document.documentElement;
	if (prop in testElem.style) return prop;

	var testProp = prop.charAt(0).toUpperCase() + prop.substr(1),
		prefixs = [ 'Webkit', 'Moz', 'ms', 'O' ];

	for (var i = 0, l = prefixs.length; i < l; i++) {
		var prefixProp = prefixs[i] + testProp;
		if (prefixProp in testElem.style) {
			return prefixProp;
		}
	}
}