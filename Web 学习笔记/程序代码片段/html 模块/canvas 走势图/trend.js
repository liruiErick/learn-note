(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.main = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


// symbols:
(lib.Loading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("loading", "13px 'Arial'", "#333333");
	this.text.lineHeight = 15;
	this.text.lineWidth = 56;
	this.text.setTransform(87.7,5.1);

	this.text_1 = new cjs.Text("数据读取中", "13px 'Arial'", "#333333");
	this.text_1.lineHeight = 15;
	this.text_1.setTransform(15.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text,p:{text:"loading"}}]}).to({state:[{t:this.text_1},{t:this.text,p:{text:"loading."}}]},10).to({state:[{t:this.text_1},{t:this.text,p:{text:"loading.."}}]},10).to({state:[{t:this.text_1},{t:this.text,p:{text:"loading..."}}]},10).wait(10));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AMgCWI4/AAIAAkrIY/AAg");
	this.shape.setTransform(80,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D6D6").s().p("AsfCVIAAkqIY/AAIAAEqg");
	this.shape_1.setTransform(80,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,162,32);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;