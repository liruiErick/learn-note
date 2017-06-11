
window.addEventListener("load",stageInit);
var canvas, stage, root;
var cjs;
function stageInit() {
	canvas = document.getElementById("canvas");
	canvas.width = 550;
	canvas.height = 400;
	canvas.style.backgroundColor = "#FFFFFF";
	root = new lib.libs();
	
	cjs = createjs;
	stage = new cjs.Stage(canvas);
	stage.addChild(root);
	stage.update();
	
	cjs.Ticker.setFPS(lib.properties.fps);
	cjs.Ticker.addEventListener("tick", stage);
	pageInit();
}
function pageInit(){
	
	var yuan = new lib.yuan1();
	yuan.x=200;
	yuan.y=100;
	//console.log(yuan.shape.cursor="url('arrow64.png')");
	//console.log(yuan.shape._hasMouseEventListener());
	stage.enableMouseOver();
	//yuan.gotoAndStop(20);
	root.addChild(yuan);
	console.log(yuan.getBounds())
	var shape = new cjs.Shape();
	shape.graphics.beginFill('#FF0000');
	shape.graphics.rect(0,0,100,100);
	shape.graphics.endFill();
	shape.x=200;
	shape.y=300;
	root.addChild(shape);
	stage.update();
	//yuan.actionsEnabled =false;
	//yuan.y1.autoReset =false;
	//yuan.stop();
	//stage.enableMouseOver();
	/*stage.on("click", handleMouseDown, null, false, {count:3},true);
	function handleMouseDown(event,abc) {
		event.remove();
		var hit = yuan.hitTest(event.stageX, event.stageY);
		console.log(hit,yuan.globalToLocal(event.stageX, event.stageY));
	}*/
	//stage.addEventListener("click", onClick);
	//stage.addEventListener("dblclick", ondblClick);
	stage.addEventListener("tick", onTick);
	//stage.addEventListener("pressup", onUp);
	//yuan.addEventListener("rollout", onDown);
	//stage.update("hello");
	//stage.addEventListener("drawend", onmouseenter);
	//stage.addEventListener("drawstart", onmouseleave);
	yuan.addEventListener("mousedown", handleMouseDown);
	function handleMouseDown(event) {console.log(event.nativeEvent);
		console.log("鼠标坐标: "+stage.mouseX,stage.mouseY);
		point = yuan.globalToLocal(stage.mouseX,stage.mouseY);
    	console.log("是否相交: "+yuan.hitTest(point.x, point.y));
	}
	function onTick(event){
		//console.log(cjs.Ticker.getMeasuredTickTime());
	}
	
	function onClick(e){
	/*console.log(cjs.Ticker.hasEventListener("tick"));
	cjs.Ticker.reset();
	console.log(cjs.Ticker.hasEventListener("tick"));
	cjs.Ticker.addEventListener("tick", stage);
	cjs.Ticker.init();
	console.log(cjs.Ticker.hasEventListener("tick"));*/
	
	};
	function ondblClick(e){
	};
	
	function onUp(e){
		console.log("tickstart："+e.params[0]);
	};
	
	function onMove(e){
		console.log("tickend："+e.params[0]);
	};
	
	function onmouseenter(e){
		//console.log("drawend："+e.target);
	};
	
	function onmouseleave(e){
		//console.log("drawstart："+e.target);
	};
	

}

