// 判断浏览器是否是IE
var is_ie = !!navigator.userAgent.match(/Trident/i);
// 获取IE版本号
var is_lte_IE7 = false,
	ieVersion = navigator.appVersion.match(/MSIE\s?(\d+[\.\d]*)?/),
	ieVersionNum = ieVersion && ieVersion[1] - 0;
if (is_ie && ieVersionNum <= 7) is_lte_IE7 = true;


// 判断浏览器类型
if(navigator.userAgent.indexOf('MSIE')>=0){
	//ie
} else if (navigator.userAgent.indexOf('Firefox')>=0){
	//firefox
} else if (navigator.userAgent.indexOf('Chrome')>=0){
	//chrome
} else if (navigator.userAgent.indexOf('Safari')>=0){
	//safari
} else {
	//this part can be used as opera area
}


// 判断是否为移动设备
var is_mobile = !!navigator.userAgent.match(/mobile/i);

// 判断apple、android、winPhone设备
var is_winPhone = !!navigator.userAgent.match(/Windows Phone/i);
// 由于winPhone设备会将自己伪装成apple、android等多个设备
// 因此必须同时不为winPhone设备，才能判定为是apple、android等设备
var is_apple = !!navigator.userAgent.match(/(iPad|iPod|iPhone)/i) && !is_winPhone;
var is_android = !!navigator.userAgent.match(/android/i) && !is_winPhone;

// 判断苹果IOS系统版本
var ios = navigator.appVersion.match(/OS\s?(\d+[_\d]*)?/),
	iosVersion = (ios && ios[1]) || '0',
	is_gte_IOS7 = parseFloat(iosVersion) >= 7;

// 判断安卓系统版本
var android = navigator.appVersion.match(/android\s?(\d+[\.\d]*)?/i),
	androidVersion = (android && android[1]) || '0',
	is_gte_android4_4 = parseFloat(androidVersion) >= 4.4;

//判断是否为客户端，并同时获取版本号
var client = navigator.appVersion.match(/VRWJClient\s?(\d+[\.\d]*)?/),
	clientVersion = (client && client[1]) || '0';


// 判断是否为手机浏览器
var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) != null;
if(is_mobi && window.location.search.indexOf('mv=fp')<0) {
	// 手机浏览器
}


// 微信安卓UA
mozilla/5.0 (linux; u; android 4.1.2; zh-cn; mi-one plus build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 micromessenger/5.0.1.352
// 微信iPhone UA
mozilla/5.0 (iphone; cpu iphone os 5_1_1 like mac os x) applewebkit/534.46 (khtml, like gecko) mobile/9b206 micromessenger/5.0
// JS判断是否为微信浏览器
var is_weixin = !!navigator.userAgent.match(/MicroMessenger/i);
// JS判断是否为QQ浏览器
var is_QQ = !!navigator.userAgent.match(/QQ/i);


// 判断操作系统
if (navigator.platform.indexOf('Win')!=-1) {
	// Win系统
} else if (navigator.platform.indexOf('Mac')!=-1) {
	// Mac系统
} else if (navigator.platform.indexOf('Linux')!=-1) {
	// Linux系统
} else if (navigator.platform.indexOf('X11')!=-1) {
	// Unix系统
} else {
	// 手机系统
}


// 全方位详细判断访问终端
var browser = {
	versions:function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}(),
	language:(navigator.browserLanguage || navigator.language.toLowerCase())
}
//browser.versions.trident返回真假，真则是IE内核，以此类推browser.versions.webKit是否为谷歌内核
if(browser.versions.trident){
    alert('is IE');
}
if(browser.versions.webKit){
    alert('is webKit');
}