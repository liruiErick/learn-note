window.onload=stageInit;
var canvas, stage, root;
var cjs = createjs;
var W, H;
var keyboard = new bjj.Keyboard();
var mouse = new bjj.Mouse();
	
function stageInit() {
	canvas = document.getElementById("stage");
	canvas.style.backgroundColor = "#ccc";
	onresize();
	//addEventListener("resize",onresize);
	root = new lib.libs();

	stage = new cjs.Stage(canvas);
	stage.addChild(root);
	//stage.update();

	cjs.Ticker.setFPS(lib.properties.fps);
	cjs.Ticker.addEventListener("tick", stage);
	pageInit();
}

function onresize() {
	W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	H = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	canvas.width = W;
	canvas.height = H;
}

function pageInit() {
	function abc(){};
	abc.prototype=new Array();
	abc.prototype.c =123;
	var a = new abc();
	var a2 = new abc();console.log(a2.hasOwnProperty("c"))
	a2.c=456;console.log(a2.hasOwnProperty("c"))
	console.log(a.c)
	var p = new bjj.People();
	p.x = 300;
	p.y = H-50;
	root.addChild(p);
}

