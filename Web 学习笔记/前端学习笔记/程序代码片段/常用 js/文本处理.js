// 把这三个方法加入String对象的内置方法中去
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
}
String.prototype.ltrim = function() {
	return this.replace(/(^\s*)/g, '');
}
String.prototype.rtrim = function() {
	return this.replace(/(\s*$)/g, '');
}
// 写成函数可以这样：
function trim(str) { //删除左右两端的空格　　
	return str.replace(/(^\s*)|(\s*$)/g, '');
}
function ltrim(str) { //删除左边的空格　　
	return str.replace(/(^\s*)/g, '');
}
function rtrim(str) { //删除右边的空格
	return str.replace(/(\s*$)/g, '');
}

// 将字符串替换为 <br/>
function textWrapToHtml(text) {
    return typeof text === 'string' ? text.replace(/\n|\r/g, '<br/>') : '';
}