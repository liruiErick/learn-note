window.onload=stageInit;
var canvas, stage, root;
var cjs = createjs;
var W, H;
function stageInit() {
	canvas = document.getElementById("stage");
	canvas.style.backgroundColor = "#FFFFFF";
	onresize();
	addEventListener("resize",onresize);
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
	//init
}

