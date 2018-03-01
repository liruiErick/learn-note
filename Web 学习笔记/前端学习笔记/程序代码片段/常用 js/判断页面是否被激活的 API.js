/**
 * document.hidden
 * 返回一个布尔值，表示当前页面是否被隐藏（切换到了别的标签页），或者是被最小化。（各浏览器可能需要添加私有前缀）
 * document.visibilityState
 * 返回'visible'、'hidden'或者'prerender'，表示当前页是否为可见状态，其中'prerender'表示页面在重新生成，对用户不可见。（各浏览器可能需要添加私有前缀）
 */

// 各种浏览器兼容
var hidden, state, visibilityChange;
if (typeof document.hidden !== 'undefined') {
	state = 'visibilityState';
	hidden = 'hidden';
	visibilityChange = 'visibilitychange';
} else if (typeof document.mozHidden !== 'undefined') {
	state = 'mozVisibilityState';
	hidden = 'mozHidden';
	visibilityChange = 'mozvisibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
	state = 'msVisibilityState';
	hidden = 'msHidden';
	visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
	state = 'webkitVisibilityState';
	hidden = 'webkitHidden';
	visibilityChange = 'webkitvisibilitychange';
}

// 添加监听器，在title里显示状态变化
document.addEventListener(visibilityChange, function() {
	document.title = document[state];
}, false);

// 初始化
document.title = document[state];



// 以下事件可以达到同样的效果
window.addEventListener('blur', function() {
	document.title = '离开';
}, false);

window.addEventListener('focus', function() {
	document.title = '回来';
}, false);

