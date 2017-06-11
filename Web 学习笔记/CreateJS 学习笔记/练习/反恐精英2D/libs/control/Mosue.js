window.bjj = window.bjj || {};

(function(){

var Mouse = function(element) {
	// 鼠标事件监听函数的队列数组
	this._downFunc = new Array();
	this._upFunc =  new Array();
	this._moveFunc =  new Array();
	
	// 如果注册事件时直接用 bind 方法的返回值（函数），那么该事件将无法被移除。必须保留 bind 方法返回值（函数）的引用
	this._mosuedownBind = this._onMousedown.bind(this);
	this._mosueupBind = this._onMouseup.bind(this);
	this._mosuemoveBind = this._onMousemove.bind(this);
	this.obj = element || window;
	this.obj.on('mousedown', this._mosuedownBind);
	this.obj.on('mouseup', this._mosueupBind);
	this.obj.on('mousemove', this._mosuemoveBind);
};

var p = Mouse.prototype;

p._log = function(output) {
	window.console&&console.log(output);
};

p._onMousedown = function(e) {
	this._log("鼠标-按下");
	var func;
	for (var i in this._downFunc) {
		func = this._downFunc[i];
		if (typeof(func) == "function") func(e);
	}
};

p._onMouseup = function(e) {
	this._log("鼠标-弹起");
	var func;
	for (var i in this._upFunc) {
		func = this._upFunc[i];
		if (typeof(func) == "function") func(e);
	}
};

p._onMousemove = function(e) {
	//this._log("鼠标-移动");
	var func;
	for (var i in this._moveFunc) {
		func = this._moveFunc[i];
		if (typeof(func) == "function") func(e);
	}
};

/**
 * @brief 添加鼠标按键执行函数
 * @param action 鼠标按键动作，分别为按下down、弹起up和移动move
 * @param func 对应鼠标按键动作的函数
 * @return 返回对应鼠标按键动作的函数id，以便将来的移除操作
 */
p.addFunc = function(action, func) {
	var mouseFunc;
	if (action == "d" || action == "down") mouseFunc = this._downFunc;
	else if (action == "u" || action == "up") mouseFunc = this._upFunc;
	else if (action == "m" || action == "move") mouseFunc = this._moveFunc;
	else return;
	
	if (typeof(func) == "function") {
		var len = mouseFunc.length;
		mouseFunc[len] = func;
		return len;
	} 
};

/**
 * @brief 移除鼠标按键执行函数
 * @param action 鼠标按键动作，分别为按下down、弹起up和移动move
 * @param index 对应鼠标鼠标按下执行函数的id
 */
p.removeFunc = function(action,index) {
	var mouseFunc;
	if (action == "d" || action == "down") mouseFunc = this._downFunc;
	else if (action == "u" || action == "up") mouseFunc = this._upFunc;
	else if (action == "m" || action == "move") mouseFunc = this._moveFunc;
	else return;
	
	if (mouseFunc[index]) {
		mouseFunc[index] = null;
	} 
};

p.delete = function() {
	this.obj.off('mousedown', this._mosuedownBind);
	this.obj.off('mouseup', this._mosueupBind);
	this.obj.off('mousemove', this._mosuemoveBind);
};


bjj.Mouse = Mouse;
})();