window.bjj = window.bjj || {};

(function(){

var Keyboard = function(element) {
	// 一个2维数组，用于储存各个键盘码所对应的执行函数
	this._keydown = new Array();
	this._keyup = new Array();
	
	this._keydownBind = this._onKeydown.bind(this);
	this._keyupBind = this._onKeyup.bind(this);
	this.obj = element || window;
	this.obj.on('keydown', this._keydownBind);
	this.obj.on('keyup', this._keyupBind);
};

var p = Keyboard.prototype;

p._log = function(output) {
	window.console&&console.log(output);
};

p._onKeydown = function(e) {
	this._log(String.fromCharCode(e.keyCode)+" 键按下");
	var keyBoardFunc = this._keydown[e.keyCode];
	var func;
	for (var i in keyBoardFunc) {
		func = keyBoardFunc[i];
		if (typeof(func) == "function") func(e);
	}
};

p._onKeyup = function (e) {
	this._log(String.fromCharCode(e.keyCode)+" 键弹起");
	var keyBoardFunc = this._keyup[e.keyCode];
	var func;
	for (var i in keyBoardFunc) {
		func = keyBoardFunc[i];
		if (typeof(func) == "function") func(e);
	}
};

/**
 * @brief 添加按键执行函数
 * @param key 一个按键字符 
 * @param action 按键动作，分别为按下down和弹起up
 * @param func 对应按键动作的函数
 * @return 返回对应按键动作的函数id，以便将来的移除操作
 */
p.addFunc = function(key, action, func) {
	var i = key.toUpperCase().charCodeAt(); //将按键字符转换成按键码
	var keyBoard;
	if (action == "d" || action == "down") keyBoard = this._keydown;
	else if (action == "u" || action == "up") keyBoard = this._keyup;
	else return;
	
	keyBoard[i] = keyBoard[i] || [];
	var keyBoardFunc = keyBoard[i];
	if (typeof(func) == "function") {
		var len = keyBoardFunc.length;
		keyBoardFunc[len] = func;
		return len;
	}
};

/**
 * @brief 移除按键执行函数
 * @param key 一个按键字符 
 * @param action 按键动作，分别为按下down和弹起up
 * @param index 对应按键动作的函数的id
 */
p.removeFunc = function(key, action, index) {
	var i = key.toUpperCase().charCodeAt(); //将按键字符转换成按键码
	var keyBoard;
	if (action == "d" || action == "down") keyBoard = this._keydown;
	else if (action == "u" || action == "up") keyBoard = this._keyup;
	else return;
	
	keyBoard[i] = keyBoard[i] || [];
	var keyBoardFunc = keyBoard[i];
	if (keyBoardFunc[index]) {
		keyBoardFunc[index] = null;
	}
};

p.delete = function() {
	this.obj.off('keydown', this._keydownBind);
	this.obj.off('keyup', this._keyupBind);
};

bjj.Keyboard = Keyboard;
})();