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
(lib.libs = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


// symbols:
(lib.TerIcon = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AiMCNQg7g6AAhTQAAhRA7g7QA7g7BRAAQBTAAA6A7QA7A7AABRQAABTg7A6Qg6A7hTAAQhRAAg7g7g");
	this.shape.setTransform(0.1,-1.4,0.176,0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8B62D").s().p("AhnAVQgnhBAAhPIEeAAIiQD3QhAgmgnhBg");
	this.shape_1.setTransform(-2.4,0.8,0.176,0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8B62D").s().p("AiOhoQBDgmBLAAQBLAABEAnIiPD2g");
	this.shape_2.setTransform(0.1,-3.9,0.176,0.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8B62D").s().p("AiOBpICOj3ICPD2QhDAnhMAAQhLAAhDgmg");
	this.shape_3.setTransform(0.1,1.1,0.176,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B62D").s().p("AiNh6IEbAAQAABOgnBBQgmBAhBAmg");
	this.shape_4.setTransform(2.6,0.7,0.176,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8B62D").s().p("AiNB8ICNj3QBBAnAmBBQAnBBAABOg");
	this.shape_5.setTransform(2.6,-3.6,0.176,0.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8B62D").s().p("AiOB8QAAhOAnhCQAnhBBAgmICQD3g");
	this.shape_6.setTransform(-2.4,-3.6,0.176,0.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231916").s().p("AnRGRQACj+CBjXQB9jTDTh5IHQMhg");
	this.shape_7.setTransform(-8.1,-8.5,0.176,0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231916").s().p("AnUFWIHUsqIHVMqQjZB/j8AAQj7AAjZh/g");
	this.shape_8.setTransform(0.1,6.8,0.176,0.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231916").s().p("AnQGRIHPshQDSB5B+DTQCBDXABD+g");
	this.shape_9.setTransform(8.3,-8.5,0.176,0.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8B62D").s().p("AmOOyQi4hOiOiPQiPiOhOi4QhQi/AAjQQAAjPBQi/QBOi4CPiOQCOiPC4hOQC/hQDPAAQDQAAC/BQQC4BOCOCPQCPCOBOC4QBQC/AADPQAADQhQC/QhOC4iPCOQiOCPi4BOQi/BQjQAAQjPAAi/hQg");
	this.shape_10.setTransform(0.1,-1.5,0.176,0.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231916").s().p("AgYAtQgLgHgFgEIgCgCQgHgGAAgDIABg9IAUgUQAcAEAdgEIAUAUIABA9QgCAKgsAXIgEADIgYgOg");
	this.shape_11.setTransform(0,0,4.202,4.202);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.2,-25,42.4,50);


(lib.Leg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{police_1:0,police_2:1,police_3:2,police_4:3,terrorist_1:4,terrorist_2:5,terrorist_3:6,terrorist_4:7,hostage_1:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 小腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("AgNAqQgOglgFguQA3ANAKBGg");
	this.shape.setTransform(-2.2,38.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00357F").s().p("AgVCvIABggIA0ABIgBAdQgWACgVAAIgJAAgAgXBfIgKkHQAKgEAQgCQANgBAOACIAOENg");
	this.shape_1.setTransform(0.3,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAaBGQgKhGg4gNQgCgbgGgeQAWADAWABQAZAAAbgCIgDCLg");
	this.shape_2.setTransform(-1.4,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0B0B0C").s().p("AgVBJIADiLQATgCAVgEQgMBTgKA+g");
	this.shape_3.setTransform(5.4,35.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00154C").s().p("AAuAYIgOAAIg0gBIgZAAQgQAAAAgMIABgWQAAgNAQABIAVAAIA5ABIAMAAQAQAAAAAMIAAAXQgBALgOAAIgBAAg");
	this.shape_4.setTransform(0.3,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002866").s().p("Ag+CrQglg+AIh3QAFhZA4hGIAKEHIgWAAQgPAAgBAMIAAAYQAAANAPAAIAaAAIgBAfQgWAAgWgDgAAjCQIANAAQAQAAAAgMIABgYQAAgMgQgBIgNAAIgNkMIAVAVQArApAFBrIAAAEIABAMQADBCgUBYQgUAEgWACg");
	this.shape_5.setTransform(0,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#204C00").s().p("AgVCvIABggIA0ABIgBAdQgWACgVAAIgJAAgAgXBfIgKkHQAKgEAQgCQANgBAOACIAOENg");
	this.shape_6.setTransform(0.3,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001900").s().p("AAuAYIgOAAIg0gBIgZAAQgQAAAAgMIABgWQAAgNAQABIAVAAIA5ABIAMAAQAQAAAAAMIAAAXQgBALgOAAIgBAAg");
	this.shape_7.setTransform(0.3,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#143300").s().p("Ag+CrQglg+AIh3QAFhZA4hGIAKEHIgWAAQgPAAgBAMIAAAYQAAANAPAAIAaAAIgBAfQgWAAgWgDgAAjCQIANAAQAQAAAAgMIABgYQAAgMgQgBIgNAAIgNkMIAVAVQArApAFBrIAAAEIABAMQADBCgUBYQgUAEgWACg");
	this.shape_8.setTransform(0,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#41414C").s().p("AgVCvIABggIA0ABIgBAdQgWACgVAAIgJAAgAgXBfIgKkHQAKgEAQgCQANgBAOACIAOENg");
	this.shape_9.setTransform(0.3,11.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161619").s().p("AAuAYIgOAAIg0gBIgZAAQgQAAAAgMIABgWQAAgNAQABIAVAAIA5ABIAMAAQAQAAAAAMIAAAXQgBALgOAAIgBAAg");
	this.shape_10.setTransform(0.3,23.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#28292E").s().p("Ag+CrQglg+AIh3QAFhZA4hGIAKEHIgWAAQgPAAgBAMIAAAYQAAANAPAAIAaAAIgBAfQgWAAgWgDgAAjCQIANAAQAQAAAAgMIABgYQAAgMgQgBIgNAAIgNkMIAVAVQArApAFBrIAAAEIABAMQADBCgUBYQgUAEgWACg");
	this.shape_11.setTransform(0,11.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#191919").s().p("AgZD0QgOglgGgwQA4ANAKBIgAgJBqIABggIA0ABIgBAdQgWACgVAAIgJAAgAgLAaIgKkHQAKgEAOgCQAPgBAOACIAOENg");
	this.shape_12.setTransform(-0.9,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXBtIADiLQAVgCAVgEQgMBTgNA+gAAog6IgNAAIg1gBIgZAAQgQAAAAgNIABgYQAAgMAQAAIAWAAIA4ABIANAAQAPABAAAMIAAAYQgBAMgOAAIgBAAg");
	this.shape_13.setTransform(0.8,31.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0B0B0C").s().p("Ag+CrQglg+AIh3QAFhZA4hGIAKEHIgWAAQgPAAgBAMIAAAYQAAANAPAAIAaAAIgBAfQgWAAgWgDgAAjCQIANAAQAQAAAAgMIABgYQAAgMgQgBIgNAAIgNkMIAVAVQArApAFBrIAAAEIABAMQADBCgUBYQgUAEgWACg");
	this.shape_14.setTransform(0,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#191919").s().p("AgNAqQgOglgFguQACABABAAQABABAAAAQAAAAgBAAQAAgBgCgBQA2ANAKBGg");
	this.shape_15.setTransform(-2.2,38.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#663D00").s().p("AgUDJIgNmMQAKgEAQgCQANgBAOACIAOENIgECFg");
	this.shape_16.setTransform(0.3,13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAXAqQgKhGg3gNIgBgBIAlABIAyABIgCBTg");
	this.shape_17.setTransform(-1.1,38.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0B0B0C").s().p("AgQAqIABhTIAgABIAAAEIgPBOg");
	this.shape_18.setTransform(4.9,38.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C2B00").s().p("Ag1DIIABAAIADACIgEgCgABDDJIgiAAIAEiFIgNkNIAVAVQArAqAEBrIABAFIABAMQACBBgDBdQgIAwgHAEIgJAFgAg1DIIgHgEQgQgLgLg0QgLg0AHh2QAGhaA4hFIANGMg");
	this.shape_19.setTransform(-0.1,14);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#663D00").s().p("AgVCvIABggIA0ABIgBAdQgWACgVAAIgJAAgAgXBfIgKkHQAKgEAQgCQANgBAOACIAOENg");
	this.shape_20.setTransform(0.3,11.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVBJIADiLQATgCAVgEQgMBTgKA+g");
	this.shape_21.setTransform(5.4,35.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#331E00").s().p("AAuAYIgOAAIg0gBIgZAAQgQAAAAgMIABgWQAAgNAQABIAVAAIA5ABIAMAAQAQAAAAAMIAAAXQgBALgOAAIgBAAg");
	this.shape_22.setTransform(0.3,23.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C2B00").s().p("Ag+CrQglg+AIh3QAFhZA4hGIAKEHIgWAAQgPAAgBAMIAAAYQAAANAPAAIAaAAIgBAfQgWAAgWgDgAAjCQIANAAQAQAAAAgMIABgYQAAgMgQgBIgNAAIgNkMIAVAVQArApAFBrIAAAEIABAMQADBCgUBYQgUAEgWACg");
	this.shape_23.setTransform(0,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABTBZIgdAAIgKgBIgbAAIgKgBIgWAAIgMAAIgdgBIgKAAIgTgCIAigKIAAAAIB7AOIAFAAIANACgAATA1IhVgHIBlgYIAzAHIACAfgAhUgEIAfgGIBlAHIhfANIgqAHIAFgVgAAwgfIhbgEIBogWQAHAMAFAPgAgrhZIBQAAIAEAEIAIAIIhMALIghAFQAIgOAJgOg");
	this.shape_24.setTransform(0.3,4.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AgdDhQAuhegBjFIAJAAIABEjQgOAIgMAAQgPAAgOgIgAAaDhQAmh1gLitIAJAAIAUEcQgOAMgRAAQgMAAgNgGgAhPDYQA2hgAHi7IAMAAIgXEkQgJADgJAAQgRAAgPgMgAAaDhgABSDbQAXhHgOjUIAIAAIAAADIAAAEIATEKQgOAKgOAAIgIAAgABSDbgAh1DNQAjhBAZjQIAJAAIgfEcIgKABQgVAAgHgMgAhWhiIAAgDIAdgHIBVAIIhCATIgFACIgiAJIgKADIABgfgAAsiEIhSgMIBfgPIAhACQADAPACASgAhDi4IAggHIBbAEIhkAVIgfAHIAIgZgAgSjdIBLgLQAGAHAFAIg");
	this.shape_25.setTransform(-0.6,20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AAjgvIAbABQALCtgmB1gAABgvIAZAAQAADGgtBdgABIguIAdABQAODUgYBHgAgmgwIAdAAQgHC8g2BggAhOgqIAAgFIALgDIATABQgZDRgiBAgABfguIgFgBIh7gNIAAAAIAEgBIBCgUIBGAHIAAACIAAAFIABAMIAAAKgAhHh2IAqgGIBSAMIhlAYIgcAGQABgSAEgSgABCiLIhlgHIBlgVIAZABQAFANADAQgAgqjFIAigFIBVAFIADAEIhpAWIghAHQAHgRAJgQgAgYjhIAJgMQAKgEANgCQAQgBAOACIARARg");
	this.shape_26.setTransform(-1.5,18.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.1,1,1).p("AhGgGICNAN");
	this.shape_27.setTransform(2.2,12.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#191919").s().p("AgzBlQgHh2AEhjQADhiA1hFQAJgEAQgBQAPgCAPADIgFIPIhlAyQAEhFgGh4g");
	this.shape_28.setTransform(-3.4,22.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AghkHIAVAVQApAqAEBqIABAGIAAAqQABAjgEB1QgEB2AKAFQAKAGgcAHIg5AWg");
	this.shape_29.setTransform(5.8,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_2},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_2},{t:this.shape_20},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-6.3,18.9,49);


(lib.Leg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 大腿
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00357F").s().p("Ah8CvIgBgDQA5AVBEgGQAagTgGgoQApAHApANQgKAegLAWQgNAVgeAPQgeAJgYAAQhGAAgmhGgAAZBQIAOlEQA4AoAaBWQAMCDgTBdQgsgRgtgJg");
	this.shape.setTransform(1.4,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00154C").s().p("AhEAWIgJg7QBNABBMAQQAGAmgaATIgeABQgyAAgsgQg");
	this.shape_1.setTransform(-4.3,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002866").s().p("AglhkQAlgyA7gMIgWFEQgqgDgrAEQgZjbAkgsg");
	this.shape_2.setTransform(-7.7,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah5CjIgDgaQCEgHB1AtIgGAYQh0geh8gGgAgZCDIATlHQAPgCASAAQAJADAIAGIgRFIQgbgGgZgCg");
	this.shape_3.setTransform(0,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161619").s().p("AAhC3QhMgQhNgBIgCgJQB9AGB0AeIgEAKQgpgNgpgHgAh9CDIgBgHQAsgEAsADIAWlEIAJgBIgSFHQAZACAbAGIARlIIAIAGIgOFEQAtAJAsARIgCAIQh1gtiFAHg");
	this.shape_4.setTransform(0.1,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAhC3QhMgQhNgBIgCgJQB9AGB0AeIgEAKQgpgNgpgHgAh9CDIgBgHQAsgEAsADIAWlEIAJgBIgSFHQAZACAbAGIARlIIAIAGIgOFEQAtAJAsARIgCAIQh1gtiFAHg");
	this.shape_5.setTransform(0.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ah5CjIgDgaQCEgHB1AtIgGAYQh0geh8gGgAgZCDIATlHQAPgCASAAQAJADAIAGIgRFIQgbgGgZgCg");
	this.shape_6.setTransform(0,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#143300").s().p("AglhkQAlgyA7gMIgWFEQgqgDgrAEQgZjbAkgsg");
	this.shape_7.setTransform(-7.7,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001900").s().p("AhEAWIgJg7QBNABBMAQQAGAmgaATIgeABQgyAAgsgQg");
	this.shape_8.setTransform(-4.3,32.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#204C00").s().p("Ah8CvIgBgDQA5AVBEgGQAagTgGgoQApAHApANQgKAegLAWQgNAVgeAPQgeAJgYAAQhGAAgmhGgAAZBQIAOlEQA4AoAaBWQAMCDgTBdQgsgRgtgJg");
	this.shape_9.setTransform(1.4,17.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#28292E").s().p("AglhkQAlgyA7gMIgWFEQgqgDgrAEQgZjbAkgsg");
	this.shape_10.setTransform(-7.7,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161619").s().p("AhEAWIgJg7QBNABBMAQQAGAmgaATIgeABQgyAAgsgQg");
	this.shape_11.setTransform(-4.3,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#41414C").s().p("Ah8CvIgBgDQA5AVBEgGQAagTgGgoQApAHApANQgKAegLAWQgNAVgeAPQgeAJgYAAQhGAAgmhGgAAZBQIAOlEQA4AoAaBWQAMCDgTBdQgsgRgtgJg");
	this.shape_12.setTransform(1.4,17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161619").s().p("AhaBbQgChVAHhrQBIEHBfkRIAJDJQg3AWgsAAQgtAAglgVgAgOAGQgDgDAAgDQAAgEADgDQADgEAFAAQAEAAACAEQADADAAAEQAAADgDADQgCADgEAAQgFAAgDgDg");
	this.shape_13.setTransform(0.1,24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhiBqIgCgCIgBgDQgBhcAIh4QAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAQBQgXBhAQIAEACIABADQAHB5ADBhIgBAEIgCABQg8AZgwAAQgyAAgngYgAhaBiQBKArBrgsIgJjJQhfERhIkHQgHBrACBVgAgOAAQgDABAAAEQAAAFADADQADADAFAAQAEAAACgDQADgDAAgFQAAgEgDgBQgCgEgEAAQgFAAgDAEg");
	this.shape_14.setTransform(0.1,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#161619").s().p("AglA2QgfgJgXgbQgMgNgJgPIgBgDIAVAGQAaAHAdAAQAZACAYgCQAFgDAFgFQAOgSgEgfQAaAEAbAHIAdAJQgKAegLAUQgJAOgQALQgIAGgKAFQgTAGgRACIgSABQgRAAgQgEg");
	this.shape_15.setTransform(0.2,36.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0B0B0C").s().p("AgkDeQgdgCgbgHIgVgHIgIg9IAbABQAdACAdADQAhAEAfAGIAEABQAEAfgOATQgEAFgGAEIgdABIgTAAgABeCBQgcgJgdgGIAOlEQAZASATAbQAUAcANAlIAFAQQADAfABAcQACAlgCAiQgCAzgJArIgggLgAiGAaQgDglAAggQAAgtAGgdQAFgdALgNQAHgKAIgJQAigiAxgJIgWFEQgdgCgcAAIgfACQgEgpgDgkg");
	this.shape_16.setTransform(0.2,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("ABZDAQgdgHgegFQgfgGgigEIg6gGIgcgBIgDgaIAegBQAeAAAdACQAjADAiAHQAfAGAdAKIAfALIgGAYIgegHgAgZCDIATlHQAPgCASAAQAJADAIAGIgRFIQgbgGgZgCg");
	this.shape_17.setTransform(0,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABWDCQgagGgbgFIgEgBQgfgGghgEQgdgEgdgBIgbgBIgCgJIAcABIA7AGQAiAEAfAGQAdAFAdAHIAfAHIgEAKIgdgJgABeCeQgegKgfgGQghgHgjgDQgegCgeAAIgeABIgBgHIAfgCQAcgBAdACIAWlEIAJgBIgSFHQAZACAbAGIARlIIAIAGIgOFEQAdAGAcAJIAgALIgCAIIgfgLg");
	this.shape_18.setTransform(0.1,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#663D00").s().p("Ah8CvIgBgDQA5AVBEgGQAagTgGgoQApAHApANQgKAegLAWQgNAVgeAPQgeAJgYAAQhGAAgmhGgAAZBQIAOlEQA4AoAaBWQAMCDgTBdQgsgRgtgJg");
	this.shape_19.setTransform(1.4,17.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#331E00").s().p("AhEAWIgJg7QBNABBMAQQAGAmgaATIgeABQgyAAgsgQg");
	this.shape_20.setTransform(-4.3,32.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C2B00").s().p("AglhkQAlgyA7gMIgWFEQgqgDgrAEQgZjbAkgsg");
	this.shape_21.setTransform(-7.7,8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgeD3IAkgTIAKneIAIHzQgNACgLAAQgPAAgPgEgABVDUIgUm8IA6HRIAVhbIgGj/IAbELQgKA7ggAUQgkARg7gCIgEABgAiFDmIBHgPIAonKIgIHqIgHAAQg4AAgogRgAiFDmQgjggAEg3IAYAAIBMl2IhFHNIAAAAg");
	this.shape_22.setTransform(-0.3,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CCCCCC").s().p("AAiD8IgHnzIgKHeIgkATIgBAAIAInqIgnHKIhHAPIBFnNIhMF2IgZAAIAjkMIACgNIABgDQAFghALgOQAUgbAbgQQATgLAWgGIAKgCIAIgBIAVgCIAOgBQAJAEAIAFIAJAGIAJAHQAxAoAYBPIAGD/IgWBbIg5nRIAUG8Ig9Alg");
	this.shape_23.setTransform(-1.4,16.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#191919").s().p("AgtDcQgTglgCgPIgDgdQgBgMABgIIAAgXIADh6QADhtAFhEQAaghA6gMIAKgBQARgDASAAIgaH5IgKAAQg/AAgRghg");
	this.shape_24.setTransform(-4.4,16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Agfj8QAKAEAIAFIAfAZQAeAVAJBKQgFB7gIA6IgNBRQgEAUgEAOIgKAbQgFAOgHAKQgFAKgOAJQgPAJgXABg");
	this.shape_25.setTransform(6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_5},{t:this.shape_6},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_3},{t:this.shape_4},{t:this.shape_19},{t:this.shape_20},{t:this.shape_21}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-8.5,27.7,50.7);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// 护目镜
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CECECE").s().p("AgNARQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIgEgRIAAgEQABgFAFAAIAVgEIABgBQAFAAACAFIAAACIAEASQABAGgFADIgCAAIgVAEIgBABQgEAAgBgDgAgIgLQgIABACAIIACAJQABAJAHgCIAEAAIgEgagAAFgOIgFABIADAaIADgBIAEAAQAHgCgBgIIgCgJIgBgCQgCgFgFAAIgBAAg");
	this.shape.setTransform(-2.4,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABBA0IAPg/IANApIABAEIAEAMQgRAGgOAAIgCAAgAAdAoIAchXIAMgEIAHAZIgUBOQgRgCgKgKgAhQACQAWgDAWgDQAHAIAFALQgqgEgfAYQAFgQAMgRgAAPAPQgKgnArgTIgaBMQgFgIgCgKg");
	this.shape_1.setTransform(10.5,-22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAEAyIAUhOIABAEIAEALIgPA/IgKAAgAgcAfIAahMIAHgEIgaBXQgEgDgDgEg");
	this.shape_2.setTransform(15.7,-21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AA0A5QgdgJgIgdQgFgWAOgZQAOgUAogLQABADgBAFIgMAEIgJAEQgrAUAKAmQACALAFAHQADAFAEADQAKAJARACIAJABQAOAAATgGQAFADABADQgTAHgSAAQgNAAgLgDgAgHAvQgBgQgHgPQgFgLgHgJIAigFQgCALAEAQQAEAUANAMQgQgCgRgBgAhiAnIgEgTIAAgDIAEgHIAbgHQgMAQgFAQIgDAMIgLABQAFgCgBgHgAhpAXIABACIACALQABAIgHABIgEABQACgLAFgMg");
	this.shape_3.setTransform(9.6,-22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AAwAxQgMgMgFgUQgEgQADgLQAHgnA4gPQAGABACADQgoALgPAUQgOAZAGAWQAHAdAdAJQAdAIAggMQABAEgGAEQgTAFgQAAQgeAAgRgQgAiFAbIARgGIAAAEIADAUQABABAAAAQAAABAAAAQAAABABAAQAAABAAAAIgYADgAhuAoIgCgLQgBgIAHgCIAFAAIAFAbIgFABIgCAAQgFAAgCgHgAhBAiQAfgXAoAEQAGAPABAQQgdglg0AlIADgMgAhhASIAGgBQAHgBACAGQgGAMgBALIgDAAgAhWAMIALgDIgFAHQgBgEgFAAg");
	this.shape_4.setTransform(7.4,-21.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhPgHIAAgDIAAAAQAAgIADgHIB8BWQgGAFgHADIgCACgAg4g4IAKgOIB+BaIgJANg");
	this.shape_5.setTransform(15.1,-22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgZBHIglgbQgTgNgEgYIgBgHIBwBOIgMADIgJABQgPAAgPgLgAhSgSIAAgBIAHgMIANgSIB+BZIgNATIgIAJIAAAAIgBAAgAg1g+IAOgTIB+BaIgNASg");
	this.shape_6.setTransform(15.7,-23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgeBOIgmgbQgWgQgEgbIAAAAQgBgHAAgFIAAgBQABgKAEgJIAIgOIAjgxQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgNATIgKANIgMASIgHAMIgBABQgDAHAAAIIAAAAIAAADIABAHQAEAXASAOIAmAbQASAOAVgEIAMgDIADgCQAGgDAGgFIABAAIAAAAIAIgJIAOgTIAJgNIANgSQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgkAyIgJAKIAAAAQgIAHgIADQgJAEgJACIgLABQgSAAgRgNg");
	this.shape_7.setTransform(15.6,-22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAABIAAgBIAAAAIAAgBIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_8.setTransform(24.5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAABIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_9.setTransform(25,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_10.setTransform(24.4,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBABIAAABIAAgBg");
	this.shape_11.setTransform(24.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAABIAAgBIAAAAIABgBIAAABIAAAAIgBACIAAAAIAAgBg");
	this.shape_12.setTransform(25.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_13.setTransform(24.4,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAgBIABABIAAABIgBACIAAAAIAAgBg");
	this.shape_14.setTransform(25.5,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_15.setTransform(25,-0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBABIAAABIAAgBg");
	this.shape_16.setTransform(24.5,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAgBIABACIAAAAIgBABIAAABIAAgBg");
	this.shape_17.setTransform(25.7,-1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_18.setTransform(25.3,-1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBABIAAABIAAgBg");
	this.shape_19.setTransform(24.8,-1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAACIAAgCIAAgBIAAgBIABACIAAAAIgBACIAAABIAAgBg");
	this.shape_20.setTransform(25.8,-2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_21.setTransform(25.2,-2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_22.setTransform(25.7,-3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_23.setTransform(25.5,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_24.setTransform(25.8,-0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_25.setTransform(26,-1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_26.setTransform(26.2,-1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_27.setTransform(26.3,-3.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_28.setTransform(26.3,-2.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIABAAIAAABIAAAAIgBACIAAAAIAAgBg");
	this.shape_29.setTransform(25.3,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAAACIAAgCIAAgBIAAgBIABACIAAAAIgBACIAAABIAAgBg");
	this.shape_30.setTransform(24.9,1.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAgBIABABIAAABIgBACIAAABIAAgCg");
	this.shape_31.setTransform(24.4,2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAgBIABACIAAAAIgBABIAAABIAAgBg");
	this.shape_32.setTransform(24.1,1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAABIAAgBIAAAAIAAgBIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_33.setTransform(23.9,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBABIAAABIAAgBg");
	this.shape_34.setTransform(23.9,0.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_35.setTransform(24,-0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAgBg");
	this.shape_36.setTransform(24.2,-1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABABIAAAAIgBABIAAABIAAgBg");
	this.shape_37.setTransform(24.5,-2.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAAAIgBACIAAAAIAAAAg");
	this.shape_38.setTransform(24.9,-3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAAAIABAAIAAABIgBABIAAACIAAgCg");
	this.shape_39.setTransform(25.9,-3.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIAAgBIABACIAAAAIgBACIAAABIAAgCg");
	this.shape_40.setTransform(25.4,-3.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#161619").s().p("AgEBrIAEgBIAMAYQgJAEgHABgAgfCCIAOgYIADABIAAAcQgJgBgIgEgAA0BTQAAgagSgTQgSgTgZAAQgVAAgQANIgsgiIABgBQAEgwALguQAPggAVgFIAZASQgDAAgEABQgNAFgGAVQgGAWAFAZQAFAZANAPIABABQAKAJALgCIABAAQAOgGAFgTQAEgNgBgOQASAWAGAYQACAXAlAUIgBABQgFABgGAHQgJALgFARQgFARADANQABAHADAEIABACQgQAAgMADQARgRAAgagAAGBlIABgBIACgCIAYAOIgHAIIgGAFgAguB4IgGgIIAYgNIABABIABACIgNAXIgHgFgABIB4IgDgCQgEgCgBgJQgCgMAEgOQAEgPAHgJQAGgIAGABIABAAQAHACgCALIgCANIgCAJIgBACIAAACIAAABIgFAPIgDAHIAAABIgBABQgDAGgFAAIgBAAgAANBaIABgDIAbAAQAAAJgEAIgAg9BXIAbAAIABAEIgYANQgDgIgBgJgAhbBAQgEgKABgSIAaAXQgEALAAANQAAAKADAIQgSgagEgLgAAOBNIgBgDIAXgOQAEAIABAJgAg9BNQABgJAEgIIAXAOIAAADgAAHBBIgCgBIAOgYIAHAGIAGAGIgYAOIgBgBgAgzA0IAFgGIAIgGIANAXIgCACIgBABgAgEA6IAAgbQAHAAAIAEIgMAYIgDgBgAgeAjQAIgEAIAAIAAAbIgDABg");
	this.shape_41.setTransform(17,-9.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCCCCC").s().p("AgVAHIgBgUIAFgCIAFAAIAHACQAFABAHgDQAHgEAEgFQAEAJABALQAAAGgGAEQgDAEgKACIgLADQgHAEgBAGQgEgIgCgKg");
	this.shape_42.setTransform(16,-14.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAHgBQgBgLgEgKQgFgPgMgOQAIgBAHAKQAKAMAEAWIACALQAAABAAABQAAABAAAAQAAABAAgBQAAAAAAgBIAAAEQAAAJgDALQgFATgIAEIgBAAQALgdgDgYg");
	this.shape_43.setTransform(17.6,-15.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AAGA1QgGgCgGgHQgFgHgEgJIAAAAQABgGAGgEIAMgEQAJgCAEgDQAFgFABgFQADAYgOAdIgEABIgCAAgAgFgLIgHgCIgFAAIgFACQAAgJACgIQAFgSALgFIAEAAQALAOAGAPQgDAFgHAEQgFADgCAAIgFgBg");
	this.shape_44.setTransform(16,-15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAKB9IgHgIIgBgCIAAABIgNgUQgOgUgFgMQgFgMABgVIABgCIiAhuQgBgMAEgQICBBlQAEgwALgsIAAgBQAPglAYgEIACABIAkAcIgCgCIAIAHQAMAPAFAZIACAJIACAEQAVAYAGAdIAAAAQAGATATAMQATANgCAAIgBAAQAFADgBAKIgEATIACgOQACgLgHgBIgBgBQgGAAgGAIQgHAJgEAOQgEAPACALQABAJAEADIADABQAFACAEgIIAAACQgEAJgFABIgBAAIgMACIgSADIgHABQgBgBgLAHQgKAHgZABIgBAAQgXAAgSgSgAA7BpIAAAbQAJAAAJgEIgOgYIgEABgAAgCAQAIAEAJAAIAAgbIgDgBgABjAjQASATAAAaQAAAagRASQANgEAPAAIgBgBQgDgEgBgIQgDgNAFgRQAFgRAJgLQAGgGAFgCIABAAQglgVgCgWQgFgZgTgWQABAPgEAMQgFAWgOADIgDABQgLACgKgKIgBgBQgNgOgFgZQgFgaAGgVQAGgWANgEQAEgCADAAIgZgSQgVAFgNAhQgLAtgEAwIgBABIAqAiQAQgMAVAAQAbAAASASgABIBiIgBAAIAOAZIAGgGIAHgHIgYgOIgCACgAALBuIAGAHIAHAGIANgYIgBgBIgBgCgABOBYIAYAOQAEgIAAgKIgbAAIgBAEgAAGBmIAYgOIgBgEIgbAAQABAKADAIgAgaA+QAFAKARAbQgDgJAAgKQAAgMAEgLIgagYQgBATAEAKgABOBHIABAEIAbAAQgBgJgEgIgAACBLIAcAAIAAgEIgXgNQgEAIgBAJgABGA9IACABIABABIAYgNIgGgHIgHgGgAARArIgFAGIAXAOIABgBIACgBIgNgYIgIAGgAA7A4IADAAIAOgYQgIgDgJgBgAAhAgIANAYIADAAIAAgcQgIABgIADgAA1huIgEABQgLAEgFATQgCAIAAAJIABAWQACAKAEAJIAAAAQAEAJAFAGQAHAIAHABIACAAIAEAAIABgBQALgEAFgSQADgMAAgJIAAgDQAAABAAAAQAAAAAAAAQgBAAAAgBQAAgBAAgCIgBgNQgFgVgKgNQgIgJgIAAIgBAAg");
	this.shape_45.setTransform(10.5,-9.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AAAAUIAdgdIAAAGIgBAFIgTATgAgYAPIgEgBIAYgiIALACIgcAig");
	this.shape_46.setTransform(14.6,-11.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AAQAXIgDgBIATgTIgCAKQgCAKgJAAIgDAAgAgRARIAbgiIANACQAHABADAGIgdAdgAgfACIADgPQACgLAMADIAOACIgZAiQgIgEACgJg");
	this.shape_47.setTransform(14.2,-11.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AA6AcIgngGIgFgCQgKgEACgMIhKgVIgKgLIBbAJQAEgFAKACIAnAHQAIABAEAFQACAEgBAFIgDAQQgCANgMAAIgEgBgAAMgKIgDAPQgBAIAIAEIAEACIADAAIAXAEIAJACIADAAQAMACACgLIACgLIABgFIAAgGQgCgFgIgBIgMgDIgNgCIgNgCIgFAAQgIAAgCAJg");
	this.shape_48.setTransform(10,-12);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#980000").s().p("Ah2A/QAIgDAIgJQAOgQAAgbIgCgVIAAgBQgRgggHgDQgHgEgMAAQgHAAgGACQAQgLAQAAQAKAAAJAFQAIAFACAIIADgEIAFgCQAFAAAEAHIgBAAQgCADAAAFQBogLBmAFQAEAHABAKQhqgHhoAMQgDgKACgFIgIgEIgLAYIAGALIANgCQgCgFACgJIABAAQBqADBrAIIAEAIQhsgFhuABQgBAEABACIAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgHgCIABABQABACAAAKQAAAYgEAGQgGALgdAIg");
	this.shape_49.setTransform(3.9,-17.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC0000").s().p("AhzA1QAAgKgDgbQAAgQAegOIAAABIACAVQAAAbgOAPQgIAKgIADgAhFACIAAAAQgBgCABgEQBugBBsAFIgBAJgAhYgOIALgYIAIAEQgCAEADALIgBAAQgCAJACAFIgNACgAhEgTQBogNBqAIQAFAJgCAHQhrgIhqgDgAh1gRQgGgDgCgEIgIgMQgFgIgKgEIAFgDQAFgCAHgBQAMABAHAEQAHACARAhIgRABQgGAAgGgEgAhDgrIABAAIDCgSQAHAKACAKQhmgFhoALQAAgFACgDg");
	this.shape_50.setTransform(3.7,-17);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AhbByIAFgBIgEhhIAvB7IgXgGIgZAXgAhsg1IBcgdICLglQAFACgHATIiHAlIhOAaIgOAEQgCgJAAgNgAh6h7IACgLICngTQAOgBAbgBQANAAAEAKIjjAWICHAMIiIAIQgCgQADgEg");
	this.shape_51.setTransform(7.4,-12.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhbAfIBOgaIAdAAIhrAvgAh4gXIgCgMICIgIIBkgHIAJgBIiLAlg");
	this.shape_52.setTransform(7.4,-19.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AhqgIIAOgEIABATIABAhIAEBhIgFAAIgUAEgAh0gxIgFgTIBpAKIhcAdQgFgJgDgLgAB5hLQABASgSARIhZACIgdABgAh6hjIDjgXQAIAEAKAXIgJAAIhkAHgAhGh+QA3gRA1ADQA2ADgEAGQgbAAgOACIinATIAAAAQgFAAA3gQg");
	this.shape_53.setTransform(7.4,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[]},1).wait(3));

	// 头
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#907665").s().p("AgUANQATgkAQALQAAAJAGAIQgNALgNAAQgIAAgHgDg");
	this.shape_54.setTransform(16.1,-10.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#161619").s().p("AAVBCIgLgFIgBgBIAAABQg4gigIgpQgSgJgDgQQAWgCAZgEQAJgKAEgLQATAYATAHQAXAIAUgQQACALAKAPQgBAHgEAAQgIAAgCAFQgMATADABQAEAFgEAIIgDAHQgFAHgCALQgDAOgQAAIgDgBg");
	this.shape_55.setTransform(11.7,-5.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0066CC").s().p("AgOAPQgHgBgCgEQgCgFABgFQACgEAOgGQAMgFAJABQAJACACAFQADAFgDAEQgDAFgPAEQgLAEgHAAIgCAAg");
	this.shape_56.setTransform(5.4,-22.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00154C").s().p("AgxAQQACgNALgGQAUABARgEQATgDARgHQAGAQAIAFQgcAMgoAAQgPAAgRgBg");
	this.shape_57.setTransform(16,-15.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOACIgDgBIgCgBIAAAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAIABAAIABAAIAIgBIACAAIAAAAIADgBIgBACQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAABIAAAAIgEAAIgKgBgAALAAIgBgBIAGABIAAAAIAEAAIgDAAIgCABIgGABQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAg");
	this.shape_58.setTransform(14.2,-12.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AA5BGQhSgQhHhAIgEgXIAJABQAKADAMABIAFAAQATAAAWgCQADAQASAJQAGApA6AiIgFAAgABOg7IgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIACgDIgDABIgBAAIgCAAIgIABIgBAAIgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIAAABIgBAAIgBAAIgBgBIABgCQABgCAEgBIACAAIABAAIAIgBIACAAIAHgBIAFAAIAJACIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAACQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgBAAQgCACgDAAIgEgBg");
	this.shape_59.setTransform(6.4,-6.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5F4F43").s().p("AgqgGIACgHIACgCQACgEAEgBQADgBAFABQApADAagFQgJAJAAAKQgSgKgSAkQgSgHgWgWgAAAgJIAEABQADAAACgBIAAAAIAFgCIADAAIADgCIAAAAIABAAIABgBIAAgBIgBgBIgFgBIAAAAIgKgBIgEAAIgFAAIgCAAIgJABIgBAAIgBABQgEAAgCADIAAABIAAABIACAAIAAAAIADABIADABQAGABAIgBg");
	this.shape_60.setTransform(14.2,-11.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#004799").s().p("AgbBNIgFAAQgMgBgKgCIgJgCQgjgHAFgDQAAAAABAAQAAgBABAAQAAAAABgBQAAgBAAAAQASAFASADQAEguAag3QARgeAZgHQAggMAYARQAaAegHArQgMgHgNgRQgVgNgdAJQgXAHgLANQgPAagBAtIAGAAQAmADAsgIQAOgPAEgNQgeg5g5AhIAHgNQAigRAaALQAYAZADAQQgEABgCAEIgBACIgCAHQgEAKgJAKQgZAFgWACQgPABgQAAIgIAAgAASg9QgOAFgCAGQgCAGACAEQACAFAIAAQAHABAPgEQAOgEADgFQAEgGgDgFQgDgGgJgBIgDgBQgHAAgMAFg");
	this.shape_61.setTransform(2.7,-16.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00357F").s().p("Ag1BXQABgtAOgcQALgNAZgFQAbgJAVANQgOAAAAAJQgagJgiAQIgHAOQgKAbgDAeIgFAAgAhwBMQADgFAAgJIADgnQAShuBzABQBOAAAHBsQgTAEgUgBIgBgBQAGgrgZgeQgZgRgeAMQgbAHgQAeQgbA3gEAuQgSgDgSgFg");
	this.shape_62.setTransform(4.9,-18.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#002866").s().p("AhNBcQACgeAKgbQA8gjAbA7QgDANgOAPQggAGgfAAIgTgBgAAmA5QgFgBgDABQgDgQgZgbQAAgLAPAAQANASAMAIIACABQgLAJgDAMQBBAGAlgQQACACADABQgLAIgTADQgRADgWAAIgegBgAiEACQAEgsAbgUQAbgVApgHQAmgGArAOQAsAOAQA2QAFASAGANQgSAHgSADQgIhshMAAQh0gBgTBuIAEgag");
	this.shape_63.setTransform(7.8,-19.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#907665").s().p("AgUAIQASgZAQAKQAAAHAHALQgHgDgiAAg");
	this.shape_64.setTransform(16.2,-10.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5F4F43").s().p("AgsAFQAAgKAGgEIAFgFIADAAQADgBAFABQAoADAagFIABAAQgIAJgBAIQgSgJgSAZQgsAAAAgMgAACgDIAEABQADAAACgCIABAAIAFgBIACgBIAEgBIAAAAIABAAIABgBIAAgBIgBgBIgFgBIgBAAIgJgCIgFAAIgFABIgCAAIgIABIgBAAIgCAAQgEABgBACIgBACIABABIABAAIABAAIACAAIADABQAHABAHAAg");
	this.shape_65.setTransform(14,-11.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#161619").s().p("AA8CMIgLgFIgCgBIAAAAQg3ghgIgsQgRgIgEgOIAAgCIgBAAIAAgWQAAgIgFgKQgMgOgCgBQgIgCgGAAQgJAAgHAGQgHAHAAALQAAAEADAJIAGAOQADAEAAACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIgCgBIgJgBQgYgoACgoQABgoAOgSQAOgRAUgJQAVgIAcAAQAaAAAWAIQAXAHATAXQATAXANAqIABAAIAAAAIgBAdQgaAEgqgDQgFgBgEABIgCABIgFAEQgGADAAAMQgBAMAvAAQAjAAAHADQABALAKAPQgBAGgDABQgJAAgBAEIgDAGIgHAOIAAAAIgBABIABAAIABACIAAAAIAAAAQADAFgDAHIgEAIIAAAAQgFAHgCAKQgCAOgQAAIgDAAg");
	this.shape_66.setTransform(7.8,-12.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AA4CQQhSgQhHhCIgEgXIgJgdQgGgSgDgVQgDgWAJgcQAIgcAhgTQAggTAoADQAlACAVANQAUAMANARQANARAIAYQAJAXgBAHIAAAAQgOgqgTgXQgTgWgWgIQgWgIgbAAQgcAAgUAIQgVAJgOASQgNARgCAoQgBAmAXArIAJABIADABQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQABgCgDgEIgGgOQgDgJAAgFQAAgKAHgHQAGgGAJAAQAHAAAIADQACABALALQAGANAAAHIAAAWIAAAAIABACQAEAPAQAIQAGArA6AiIgFAAgABNANIgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIACgDIgDABIgBAAIgCAAIgIABIgBAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAAAIgBABIgBgBIgBgBIABgBQABgCAEgBIACAAIABAAIAIgBIACAAIAHgBIAFAAIAJACIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgBAAQgCACgDAAIgEgBg");
	this.shape_67.setTransform(6.5,-13.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2A7F00").s().p("AgOAPQgHgBgCgEQgCgFABgFQACgEAOgGQAMgFAJABQAJACACAFQADAFgDAEQgDAFgPAEQgLAEgHAAIgCAAg");
	this.shape_68.setTransform(5.4,-22.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#001900").s().p("AgxAQQACgNALgGQAUABARgEQATgDARgHQAGAQAIAFQgcAMgoAAQgPAAgRgBg");
	this.shape_69.setTransform(16,-15.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#286600").s().p("AgbBNIgFAAQgMgBgKgCIgJgCQgjgHAFgDQAAAAABAAQAAgBABAAQAAAAABgBQAAgBAAAAQASAFASADQAEguAag3QARgeAZgHQAggMAYARQAaAegHArQgMgHgNgRQgVgNgdAJQgXAHgLANQgPAagBAtIAGAAQAmADAsgIQAOgPAEgNQgeg5g5AhIAHgNQAigRAaALQAYAZADAQQgEABgCAEIgBACIgCAHQgEAKgJAKQgZAFgWACQgPABgQAAIgIAAgAASg9QgOAFgCAGQgCAGACAEQACAFAIAAQAHABAPgEQAOgEADgFQAEgGgDgFQgDgGgJgBIgDgBQgHAAgMAFg");
	this.shape_70.setTransform(2.7,-16.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#204C00").s().p("Ag1BXQABgtAOgcQALgNAZgFQAbgJAVANQgOAAAAAJQgagJgiAQIgHAOQgKAbgDAeIgFAAgAhwBMQADgFAAgJIADgnQAShuBzABQBOAAAHBsQgTAEgUgBIgBgBQAGgrgZgeQgZgRgeAMQgbAHgQAeQgbA3gEAuQgSgDgSgFg");
	this.shape_71.setTransform(4.9,-18.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#143300").s().p("AhNBcQACgeAKgbQA8gjAbA7QgDANgOAPQggAGgfAAIgTgBgAAmA5QgFgBgDABQgDgQgZgbQAAgLAPAAQANASAMAIIACABQgLAJgDAMQBBAGAlgQQACACADABQgLAIgTADQgRADgWAAIgegBgAiEACQAEgsAbgUQAbgVApgHQAmgGArAOQAsAOAQA2QAFASAGANQgSAHgSADQgIhshMAAQh0gBgTBuIAEgag");
	this.shape_72.setTransform(7.8,-19.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#907665").s().p("AgUAgIADgBIABAAIABABIABAAIABgBQAGgCAPACIABAAQAEAEgEAIIgDAHIAAABQgWgKgEgJgAgUgUQATgmAQALQAAAJAHAKQgOALgNAAQgHAAgIgDg");
	this.shape_73.setTransform(16.1,-6.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5F4F43").s().p("AgEAtQAAgFAFgDIAQgHIAQABIgHAOQgVgBgFADIAAABIAAABIgDABIgBgFgAgmghQgDgDABgEIABgCQACgEAEgBQADgBAFABQAoADAagEIABgBQgIAJgBAKQgSgKgRAmQgTgHgRgYgAAAgkIADABQADAAACgBIAAAAIAGgCIACAAIADgCIABAAIABAAIABgBIAAgBIgBgBIgGgBIAAAAIgKgBIgEAAIgFAAIgCAAIgJABIAAAAIgCABQgEAAgCADIAAABIABABIABAAIABAAIACABIADABQAHABAIgBg");
	this.shape_74.setTransform(14.3,-8.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#161619").s().p("AA8CMIgLgFIgCgBIAAAAQg3ghgIgsQgRgIgEgOIAAgCIgBAAIAAgWQAAgIgFgKQgMgOgCgBQgIgCgGAAQgJAAgHAGQgHAHAAALQAAAEADAJIAGAOQADAEAAACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIgCgBIgJgBQgYgoACgoQABgoAOgSQAOgRAUgJQAVgIAcAAQAaAAAWAIQAXAHATAXQATAXANAqIABAAIAAAAIgBAdQgaAEgqgDQgFgBgEABQgDABgCAEIgCABQAAADACADQARAYATAHQAXAIAVgQQABALAKAPQgBAGgDABQgJAAgBAEIgDAGIgQgBIgRAHQgGADAAAFIABAFQAEAJAYAJQgFAHgCAKQgCAOgQAAIgDAAg");
	this.shape_75.setTransform(7.8,-12.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AA4CQQhSgQhHhCIgEgXIgJgdQgGgSgDgVQgDgWAJgcQAIgcAhgTQAggTAoADQAlACAVANQAUAMANARQANARAIAYQAJAXgBAHIAAAAQgOgqgTgXQgTgWgWgIQgWgIgbAAQgcAAgUAIQgVAJgOASQgNARgCAoQgBAmAXArIAJABIADABQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQABgCgDgEIgGgOQgDgJAAgFQAAgKAHgHQAGgGAJAAQAHAAAIADQACABALALQAGANAAAHIAAAWIAAAAIABACQAEAPAQAIQAGArA6AiIgFAAgABPBkIgBgBIgBAAIAAgBIABgBQAFgDAVACIAAAAIAAAAIABAAIABACIgBAAIAAABIgBAAQgRgCgGACIgBABIgBAAIAAAAgABNANIgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIACgDIgDABIgBAAIgCAAIgIABIgBAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAAAIgBABIgBgBIgBgBIABgBQABgCAEgBIACAAIABAAIAIgBIACAAIAHgBIAFAAIAJACIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgBAAQgCACgDAAIgEgBg");
	this.shape_76.setTransform(6.5,-13.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5F4F43").s().p("AA6BeIgLgFIgCgBIAAAAQgJgUAOggQAKABAPgQIAagEIgCADIgDAGIgIAOQgVgBgFADIAAABIAAABIAAAAIABABIABAAIABgBQAGgCASABIAAAAQAEAFgDAHIgEAIIAAAAQgFAHgCAKQgDAOgPAAIgDAAgAApBYQhLgOhCg4IAGgdIAJABIACABQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgCgDgEIgGgOQgDgJAAgGQAAgLAHgHQAHgGAJAAQAGAAAIACQACABAMAOQAFAMAAAIIAAAFIAAAAQAcBMA5AoIgEAAgAAcAAIgugWQgHgSAHgkQAEgPAXgCIAPAYIAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIBBAMIgRASIgBABQgIAHgHAMQgKALgLAAQgEAAgFgBgAA9gpIAFABQADAAACgBIAAAAIAFgCIACAAIAEgCIAAAAIABAAIABgBIAAgBIgBgBIgFgBIAAAAIgKgBIgEAAIgIAAIgBAAIgJABIgBAAIgBABQgEABgCACIAAABIAAABIABAAIABAAIADABIADABQAGABAJgBg");
	this.shape_77.setTransform(8,-8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#907665").s().p("AhMgEIAWAEIAwAXQAOAHAOgSQAHgMAIgFIABgBIARgSIAFABIADAAQgDAGgBAHQAAAIAHAJQABALAKAPQgBAHgEABIgHABIgaADQgPAQgKAAQgOAfAJAUQg5gogchMgABCgeQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBIhEgMQgBgBAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIgPgZQgGgXAMgUIBMAPIADAJQAJAXgBAGIAAABIAAAAIAAAAIgBAdIABgBIgBACIgBgCg");
	this.shape_78.setTransform(11.7,-10.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AA4B7IgBgBIAAgBIAAAAIABgBQAFgDAVABIAAAAIAAABIABgBIAAACIAAABIAAAAIgBAAQgSgBgFACIgCAAIAAABIgBAAgAh3BUIgEi6IAYgUIA4ADQAKgBALAAIAUACIB+AGIglBFIhOgPQgKATAEAYQgXACgEANQgIAkAIASIgWgGIAAAAIAAgFQAAgIgGgMQgLgOgCgBQgIgCgHAAQgJAAgGAGQgHAHAAALQAAAGADAJIAGANQACAFAAABQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAIgDgBIgJgBIgFAfIgNgMgAA3AjIgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIACgDIgDAAIgBAAIgCAAIgIABIgBAAIgBABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIAAAAIgBAAIgBAAIgBgBIAAgBQACgDAEAAIACgBIAAAAIAJgBIACAAIAHAAIAFAAIAJABIABAAIAFABIABABIAAABIgBABIgBAAIgBAAIgEgBIAAAAIgGgBIABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAIAAABQgCABgDAAIgEgBgABaAdIgGgBIhBgMQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIBHANQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAIABADIAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBABIgCAAIgBAAg");
	this.shape_79.setTransform(8.7,-15.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5F4F43").s().p("ABLBXQgSgCgPgFIgHgDIgHgBIAKgKIAGgHQAMgLAEgCIAagBIADAAIgBACQgVgCgFAEIAAABIAAAAIAAABIABAAIABAAIABAAQAGgCASABIAAAAQAEAFgDAHIgEAHIAAABQgFAGgCALIAAAAIgEAAgAhkAZIAGgdIAJABIACABQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBgDgFIgGgOQgDgJAAgFQAAgMAHgGQAHgHAJAAQAGABAIACQACABAMANQAFANAAAHIAAAFIgBAEQgBAQgDAFQgCAFAAAIQAAASACAHQAEAOANAMIAIAJQgqgTgmgggABKAdIABgBIAagEIgCADIgDAFQgGgEgQABgAAcAFIgxgXQgEgPAHgkQAEgQAXgBIAPAYIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAIBBAMIgRASIgBABQgIAHgHAMQgKALgLAAQgEAAgFgDgAA9giIAFABQADAAACgCIAAAAIAFgBIACgBIAEgBIAAAAIABAAIABgBIAAgBIgBgBIgFgBIAAAAIgKgCIgEAAIgIABIgBAAIgJABIgBAAIgBABQgEAAgCADIAAABIAAABIABAAIABAAIADAAIADABQAGABAJAAg");
	this.shape_80.setTransform(8,-8.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#907665").s().p("AgvBcQgLgKgGgMQgGgNAAgKQAAgGADgGQADgGAAgLIABgIIAzAZQAOAHAOgSQAHgMAIgHIABgBIARgQIAFABIADAAQgDAGgBAFQAAAIAHALQABALAKAPQgBAGgEABIgHABIgaAEIgBABIgCAAQgcACgKAOIgKANQgIAJgCAFQgOgFgFgEgAA8gTQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIhEgNQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgPgYQgGgYAMgTIBMAPIADAIQAJAYgBAGIAAAAIAAABIAAAAIgBAcIABAAIgBACIgBgDg");
	this.shape_81.setTransform(12.3,-11.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAlCOQgPgHgLgCQgOgCgIgHIgDgFIgIgIQgNgMgEgOQgCgHAAgSQAAgJACgFQACgGACgQIABgEIAAgFQAAgHgGgLQgLgNgCgBQgIgDgHAAQgJAAgGAGQgHAHAAAKQAAAFADAJIAGAOQADAFgBABQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIgDgBIgJgBIgFAfIgNgMQgBiXANgeQAEgOAWgGQAUgFASACIAOAAIAZACQA0AKATATQARAVADAYIhOgOQgMATAGAXQgXACgEAQQgIAhAFAQIgBAIQAAALgDAHQgDAGAAAFQAAALAGAMQAGANAKAJQADAFAPAEQACgEAIgKIAKgNQAMgOAcgBIABAAQARgBAGAEQADABAAADQAAAIgKABIgEAAIgZABQgFACgLALIgHAHIgJAKIAHABIAGADQAQAEASADIAEAAQAHACAAAGQAAAJgUAAQgXAAgMgGgABFBfIgBAAIgBgBIAAAAIABgBQAFgEAVACIAAAAIAAAAIABAAIABACIgBABIAAAAIgBAAQgRgCgGADIgBAAIgBAAIAAAAgABDAIIgBgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIACgCIgDAAIgBAAIgCAAIgIABIgBAAIgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIAAABIgBAAIgBAAIgBgBIABgCQABgCAEgBIACAAIABAAIAIAAIACAAIAHAAIAFAAIAJAAIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAACQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgBAAQgCACgDAAIgEgBgABmACIgFgBIhCgKQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAIBHANQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIABADIAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgBABIgCAAIgBAAg");
	this.shape_82.setTransform(7.5,-13.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5F4F43").s().p("AAqBTIgLgDIgFgCIAEgMQAKAAABgCIAIgGQAHgGAEgCIAagBIADAAIgBACQgVgCgFAEIAAABIAAAAIAAABIABAAIABAAIABAAQAGgCASABIAAAAQAEAFgDAHIgDAFIAAgBQgBgDgRAJQgMAIgKAAIgFgBgAhkAdIAGgdIAJAAIACAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAgBgDgFIgGgOQgDgJAAgFQAAgMAHgHQAHgGAJAAQAGAAAIADQACABAMANQAFANAAAHIAAAFIgBAEQgBAOgDAGQgCAFADAcIAFAfQgggQgdgZgABKAhIABgBIAagEIgCADIgDAFQgGgEgQABgAAcAJIgxgXQgEgPAHgkQAEgQAXgCIAPAZIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAABABQAAAAABAAIBBAMIgRARIgBABQgIAIgHALQgKAMgLAAQgEAAgFgDgAA9geIAFABQADAAACgCIAAAAIAFgBIACgBIAEgBIAAAAIABAAIABgBIAAgBIgBgBIgFgBIAAAAIgKgCIgEAAIgIABIgBAAIgJABIgBAAIgBAAQgEABgCACIAAACIAAABIABAAIABAAIADAAIADABQAGABAJAAg");
	this.shape_83.setTransform(8,-9.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#907665").s().p("AgUBkIgKgDQgNgFgCgMQgCgMgIgKQgIgLgDgDQgDgDACgHQABgGAAgIIABgMIAzAZQAOAIANgSQAIgMAIgHIABgBIARgQIAFABIADAAQgDAGgBAGQAAAHAHAKQABAMAKAOQgBAHgEABIgHABIgaAEIgBABIgQAAQgOABgHAIIgKAMQgBADAGAJIgFAMgAA6gUQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIhEgNQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgPgYQgGgYAMgTIBMAOIADAJQAJAYgBAGIAAAAIAAABIAAAAIgBAcIABAAIgCACIAAgDg");
	this.shape_84.setTransform(12.5,-11.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAZDFIgCgBIgHgCIgHgDQgHgEgBgEIgEgXIgMgtQgIgagKgcIgFggQgDgbACgDQACgHACgPIABgEIAAgFQAAgIgGgMQgLgOgCgBQgIgCgHAAQgJAAgGAGQgHAHAAALQAAAGADAJIAGAOQADAEgBACQAAAAAAAAQAAABABAAQAAAAAAABQAAAAABAAIgDgBIgJgBIgFAdIgNgMQgBiWANgfQAPgQARgEQAQgFAQADIAOgBIAZADQA0AJATATQARAWADAYIhOgPQgMATAGAYQgXACgEAPQgIAkAFAQIgBALQAAAIgCAFQgBAGADADQADADAIALQAFALADALQACAMANAFIAKAEIADABIAGACIALADQALADAQgJQAQgKACAEIAAABIgBACIAAAAIgCADQgDAEgBAGIAAAGQACAHAAAyQgBA6gWgBQgXAAgHABIgFAAIgFgBgAAfAsIAKgMQAIgIAPAAIAPgBQARAAAGADQADACAAADQAAAIgKAAIgEAAIgZABQgFACgGAGIgIAHQgCABgKAAQgGgJACgDgABFAuIgBgBIgBAAIAAgBIABgBQAFgDAVABIAAAAIAAABIABAAIABACIgBAAIAAAAIgBAAQgRgBgGACIgBABIgBAAIAAAAgABDgoIgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAIACgDIgDAAIgBAAIgCAAIgIABIgBAAIgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAIgBAAIgBAAIgBgBIABgBQABgDAEAAIACgBIABAAIAIgBIACAAIAHAAIAFAAIAJABIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAADQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABIgBAAQgCABgDAAIgEgBgABmguIgFgBIhCgMQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBIAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIBHANQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABIABACIAAABQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBABIgCAAIgBAAg");
	this.shape_85.setTransform(7.5,-8.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAAAwIAAgBIgBAAIAAgBIABgBQADgDAVABIAAAAIAAABIABAAIABACIgBAAIAAAAIgBAAQgRgBgGACIgBABIAAAAIAAAAgAgBgmIgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAIACgDIgDAAIgBAAIgCAAIgIABIgBAAIgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAAAIgBAAIgBAAIgBgBIABgBQABgCAEgBIACgBIABAAIAIgBIACAAIAGAAIAEAAIAJABIABAAIAFABIABABIAAABIgBABIgBAAIAAAAIgFgBIAAAAIgFgBIAAADQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgBAAQgCABgDAAIgCgBg");
	this.shape_86.setTransform(14.5,-8.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5F4F43").s().p("AA/BeIgLgFIgCgBIAAAAQgIgQAJgaIAEABQACAAAEgDQADgEAJAAIAXgCQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgVgBgFADIgBABIAAABIABAAIABABIABAAIABgBQAGgCARABIABAAQAEAFgEAHIgDAIIAAAAQgFAHgCAKQgDAOgPAAIgDAAgAAtBYQhKgOglgfQgkgfABgJQABgHgFgSQAGAHAKAEIAJABIACABQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAABAAQAAgCgDgEIgGgOQgDgJAAgGQAAgLAHgHQAGgGAJAAQAHAAAIACQACABALAOQAGAMAAAIIAAAFIAAAAQAcBMA5AoIgFAAgABYAUIASgDIgDADIgCAEQgDgDgKgBgAAhAAIgugXIgDgBQgDgMADgXIADgRQAEgPAXgCIAOAWQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAEABACIABABIAFABIAHABIAHAAIAAAAQATACASAFIALADIADABIgTASIgBABQgIAHgHAMQgKALgLAAQgEAAgFgBgABCgpIAFABQACAAACgBIABAAIAFgCIACAAIAEgCIAAAAIABAAIABgBIAAgBIgBgBIgFgBIgBAAIgJgBIgEAAIgIAAIgBAAIgJABIgBAAIgCABQgEABgBACIAAABIAAABIABAAIABAAIACABIAEABQAGABAJgBg");
	this.shape_87.setTransform(7.6,-8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AA6BmQgDgBgCgDIgBgFQAAgOAdgDIAPAAQAJAAAEAEQACACAAAEQAAAFgIADIgXACQgJAAgDAEQgEADgCAAIgEgBgAhJAsIgJgBQgKgFgFgGIgEgGIgLhRQgIgwATABQALATBuAWQAGgEgFAcQgWACgFAPIgCARQgEAVADAMIADABIAAABIgWgGIAAAAIAAgFQAAgIgFgMQgMgMgCgBQgIgCgGAAQgJAAgHAGQgHAHAAAJQAAAGADAJIAGAOQADAEAAACQAAAAAAAAQAAABAAAAQAAAAABABQAAAAAAAAIgCgBgABvAHIgCAAIgEgBIgCgBIgLgDQgSgDgTgCIAAAAIgIAAIgGgBIgGgBIAAgBQgCgCAAgEQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAEgCAKgBQAOgBAUAHIABAAIAFACIAGACIAFADQANAFABAAIAAAAIABACIAAAAIAAAAIAAABIgCADIgCABg");
	this.shape_88.setTransform(6.8,-13.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#907665").s().p("AgoAZIAXAGIgBgBIAuAYQARAHANgRQAIgNAHgHIABgBIATgSIAEABIACABQgDAFAAAHQgBAJAHAKQACALAKAPQgBAHgFABIgHABIgRACIgOABQgeADAAAOIACAFQABADADABQgIAZAHARQg4gpgdhOgABnABIgBgBIAAAAQgBgBgNgFIgFgCIgGgDIgFgCIgBAAQgUgHgOACQgKABgEACIgNgXQAEgcgGAEQhugWgLgSQAcgaARgGQASgGAMgCQAMgBAKABIATACQAdAGAdATQAdAYAKAaQACADACAOQABAOAAAHIAAAAIAAAAIAAABIgBAaIABAAIgCABg");
	this.shape_89.setTransform(8,-13.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.1,1,1).p("AAAAAQAAAAAAAAIAAAA");
	this.shape_90.setTransform(20.9,-14);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#161619").s().p("AAWBGIgLgFIgCgBIAAAAQg3ghgJgqQgRgIgEgQQAUgHAOgNIATgOQAaAfATAHQAXAIAVgQQABALAKAPQgBAGgDABQgJAAgCAEQgMAUADABQAEAFgEAHIgDAIQgFAGgCALQgDAOgPAAIgDAAg");
	this.shape_91.setTransform(11.7,-5.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AA5BGQhSgQhHhAIgEgTIAQABIAPAAIAOAAQAKAAAWgCQADAQASAJQAGApA6AiIgFAAgABOg7IgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIABgDIgDABIAAAAIgCAAIgIABIgBAAIgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIAAABIgBAAIgBAAIgBgBIAAgCQACgCAEgBIACAAIAAAAIAJgBIACAAIAHgBIAEAAIAKACIAAAAIAGABIABABIAAABIgBABIgBAAIgBAAIgEgBIAAAAIgGgBIABACQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIAAAAQgCACgDAAIgEgBg");
	this.shape_92.setTransform(6.4,-6.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5F4F43").s().p("AgugLIAKgFIAFgCIAHgCIAYgCIAvgCQgKANAAAKQgTgKgSAkQgSgHgcgdgAADgHIAEABQADAAACgBIAAAAIAFgCIACAAIAEgCIAAAAIABAAIABgBIAAgBIgBgBIgFgBIAAAAIgKgBIgEAAIgGAAIgBAAIgJABIgBAAIgBABQgEAAgCADIAAABIAAABIABAAIABAAIADABIADABQAGABAHgBg");
	this.shape_93.setTransform(13.9,-11.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7F5F3F").s().p("AhhBZIgQgBQgagCABgCIAEgGQAMAFAVABIAHAAIAXAAIANAAQAJAAAHgBQALgDAKgGIAPgLIAKgKIABgBQAIgHATgEIAVgCQAegCAvADIABAAIABAAIAHABIgdAAIgvACIgbACIgGACIgFACIgLAFIgQAOQgOANgUAGQgWACgKAAIgOAAIgEABIgLgBgAhtBIIgEAAQgNgBgIgDIgBAAIAAgBIAAgMIAAgGIAwAIIABAAIAOAAQARgBAOgDIAKgDIAJgEQATgHgRAQIgBABIgBABQgKAJgTAFIggACIgGAAIgBAAIgTgBgAhLArIAAAAQgRgDgIgEIgKgFIgKAAIgPAFIAAgLIAAgLIAQgCQANgBAPADIAFAAQAkAGALAFIAEACQAFADgEAEIgBAAIgGAEIgFACIgGABIAAAAQgHADgIAAIgIgBgABEATIABAAIABgBQAbgEARgHIACgBIAEgCIACAJIACAHIABACIgaAEIgJABIgKABIgOAAQgaAAAcgJgAAQAXIgBgCQgCgDABgGIADgLIAEgFQAFgGAIgHQAZgUAogHIAAABIABABIACAGIABABIAFAMIADAHIgJABQgTACgNAGQgLAHgHANIgBABQgFAHgPAEIgCABIgFABQgFAAgDgEgAgUAHIgNgEQgWgDghgFQgQgCgPABIgNABIABgHIAAgBIABgCIANgBIBHgDIABAAQAVgBANgFQALgGAMAIQABACgDAFIgJAKQgDAKgKACIgGABIgCAAgAg1ghIgJgBQgQgEANgIQAJgFAcgEIAAAAQAYgJASgIIARgJQAdAGAKgEIAJAIIAIAIIABACQgPAFghACIgBAAIgPAGQgHACgJgCQgGgCgRAHIgBABIAAAAIgOAJQgFACgGAAQgGAAgGgCgAh8gnQAIgTAOgMIADgCIACgBQAPgGAPgDQAUgFAWgBIADgBIAEAAQASABAFAEQAHACgdAKIgjAIQgXAGgNAEQgNADgHAEQgEADgDACQgFAGgCAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_94.setTransform(7.7,-18.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B28854").s().p("AhEBbIgYAAQAKgEABgHIAggCQATgFALgJQAOADANgIIgBABIgLAKIgPALQgJAGgLADQgHABgJAAIgNAAgAhTBAIgCgDQgFgDgGAAIAAAAIAAgFQAAgFgCgFQAIAEARADIABAAIgBADQAAAGAEAFIgLAAIgDAAgAAiAhIAAgBQAPgEAFgHIAAgBQAEgCAFABIAGABQAFAFgDABIAAAAQgjALAvgCIAKgBIAJgBQAMAMATACQgvgEgfADIgUACQALgKgMgFgAggAiQACgIAAgJIAAgHIAMAEIAJgBIACAGQADAHADADQABADgBACQgEADgIABIgJACIgKABQAFgEgFgDgAiEATIABgIIACgLIANAAQABAGAKACIAQAFQAFADAAACQgBAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABQgPgDgNABIgQACIAAgCgABxALQgLgLABgEIACgEIAJgBIABADQAFAQgCADIgBABIgEgDgAAVAAIgEgGIgEgDQADgFgBgCQgMgIgMAGQgMAFgVABIgEgCIgGgEQgDgEgGgCIACgDIAJABQAMAFALgFIAOgJQANgFAIAEQAKAEASAWQgHAHgFAEIgDgBgAh+gQIACgIIADgIQAAAHAJgKQACgCAFgDQgFAEAAAGQAAAHAIAEIgHAEQgDADgCADIgNABIABgIgAhCgqQgIgFgKAAIgBAAQANgEAXgGQABADADACQAGAEAJAAIAEAAIABAAQgcAEgJAFIgEgDgAAJhNQgHgGgJAAIgIABIgEAAIgDABQgCgDgEgCIgDgBIABAAIAPgCIADAAQAMgCAMABQACAMAUAEIgRAJQgCgHgGgFgAhChPQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgPADgPAGQALgIARgFg");
	this.shape_95.setTransform(7.4,-18.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#645F3F").s().p("AhmBbQgWgBgMgEIAAgLIAAAAQAJADAMABIAFAAIAUABIAFAAQgBAHgKAEIgGAAgAgXBAIABgBIABgBQARgPgUAGIgIAEIgLADQgOADgQABQgEgFAAgGIAAgDQANACAKgDIABgBIAFgBIAFgCIAHgEIAAAAIAKgBIAJgCQAIgBADgDQAEgCgDgDQgDgDgDgHIgDgFQALgDADgLIAJgJIAEADIADAGIAEABIgEAHIgDALQgBAGACADIABACQAFAGAHgDIADgBIAAABQALAGgKAJQgTAEgJAHQgIAGgKAAIgIgBgAhYBAIgxgIIAAgKIAAgDIAQgFIAJAAIAKAFQACAFAAAFIgBAFIABAAQAGAAAFADIACADIgBAAIAAAAgACDAvIgCAAIAAAAQgTgCgNgMIAagEQAFAMAKAHIgHgBgAgpAgQgLgFgjgFIgFgBQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAQAAgCgFgCIgQgGQgKgCgBgGQAPAAAQAAQAgAFAXAFIAAAHQAAAKgDAHIgEgCgABBAUIgGgBQgFgBgEACQAHgPALgFQAOgGATgCIgCAFQgBADAKALIAEADQgRAHgbAEIgBABQACgBgEgFgABvgGIACAGIAFALIgEACQACgDgFgQgAhxgPIAGgEQgHgEAAgHQAAgFAFgEQAHgFANgCIABAAQAKgBAIAFIAEAEQgNAHAQAEIgCADQAFACAEAEIAFAEIAEADIgBAAIhGACQABgDAEgDgAAEgkQgIgEgNAFIAAAAIABgBQARgHAGACQAJACAGgCIAPgGIABAAQAigCAOgFIAEAEIAHANQgoAHgZAVQgSgXgKgEgAgegwIAAAAIgEAAQgJAAgGgEQgDgCgBgDIAigHQAegLgHgCQgFgEgSAAIAIgBQALAAAFAFQAGAFABAHQgRAIgYAJgAAdhKQgTgEgCgMIADAAIACAAQASACAPAFIABAAQAMAEAKAHQgEACgHAAQgLAAgSgEgAhGhPQAPgFAUgDIADABQAEACABADQgVABgUAFQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_96.setTransform(7.8,-18.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#004799").s().p("AhJBNIgFAAQgMgBgLgCIgJgCQgjgHAFgDQABAAAAAAQABgBAAAAQABAAAAgBQAAgBABAAQARAFASADQAFguAag3QAQgeAbgHQAfgMAYARQAZAegGArQgMgHgNgRQgWgNgbAJQgYAHgMANQgOAagBAtIAFAAQAoADArgIQANgPAEgNIACADIgCACIgCAHQgDAKgKAKQgWAFgWACQgSABgPAAIgIAAgAgbg9QgOAFgCAGQgBAGACAEQACAFAHAAQAIABAOgEQANgEADgFQADgGgDgFQgCgGgHgBIgDgBQgIAAgMAFgAArAjQgFgBgEABIABgGQBBAGAlgQQACACACABQgKAIgUADQgQADgXAAIgdgBg");
	this.shape_97.setTransform(7.3,-16.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#990000").s().p("AgOADIgDgBQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAIAAAAQAAAAAGgCIAFgBIAeACIAAABIAAAAQAAAAgEABIgCAAIgLACIgEAAIgEABIgKgBg");
	this.shape_98.setTransform(14.2,-12.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAvBHQhSgQhHhAIgEgWIAJABQALADAMAAIAEAAQAUABAWgCQADAQARAJQAJApA3AhIgFAAgAAZg3IACgHIACgCQACgEADAAQADgBAFABQArADAagGQgIAKgBAKQgSgLgTAmQgTgHgVgYgAA0hBQgGACAAABIAAABQAAAAAAAAQAAABABAAQAAAAABAAQABABAAAAIAEABQAGABAJAAIAFAAIAKgCIACgBQAEgBABgCIAAAAIgBgBIgggCIgFABg");
	this.shape_99.setTransform(7.4,-6.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#0066CC").s().p("AAoAzQgdg5g6AhIAHgOQAlgRAXAKQAZAbADAQQgEABgCADIgCgCgAgUgVQgHgBgCgEQgCgFABgFQACgGAOgGQAOgFAHABQAJACADAFQACAFgDAGQgDAFgOAEQgLAEgIAAIgCAAg");
	this.shape_100.setTransform(6,-18.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#002866").s().p("AhEBcQACgeAKgbQA6gjAdA7QgDANgOAPQggAGgfAAIgTgBgAALAOQAAgLAPAAQANASAMAIIACABQgLAJgDAMIAAAGQgDgQgZgbgAh7ACQAEgsAbgUQAbgVApgHQAmgGArAOQAsAOAQA2QAFASAGANQgSAHgSADQgIhshOAAQhygBgTBuIAEgag");
	this.shape_101.setTransform(6.9,-19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_58},{t:this.shape_64}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_69},{t:this.shape_68},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_58},{t:this.shape_64}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_58},{t:this.shape_73}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_58}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_58}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_58}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_58}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_58},{t:this.shape_91},{t:this.shape_54},{t:this.shape_90}]},1).to({state:[{t:this.shape_101},{t:this.shape_62},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_57},{t:this.shape_55},{t:this.shape_54}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-28.4,28.4,29.9);


(lib.Hand4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#907665").s().p("AAHAPQgGgEgHABIACgEIgDgEQgFgGgIgFIgLgDIAYgSQAIgBAGADQAGAEAAAKIgNAOIAOABQAQAAACAGIgGAUQgJgKgKgEg");
	this.shape.setTransform(17.1,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161619").s().p("AALAIIAKgFQANAOgCASQgTABgTAFQALgQAGgRgAhEAAQACgHATgKIAdgFIAHALIAggdQAIAFAFAIIgdAeQgjAGgVAPQgFgOgMgKgAAvgKIADgGQAKAEAJAKIAAABIAAABIAAAAIgLAHQgDgNgIgEg");
	this.shape_1.setTransform(12.8,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhTA1QgSghAGgUQAHgLARgCIAigFQAIgUAagJQARgEAOAGIAUgPIABgBIALAEIgiAdIgHgLIgbAFQgTAJgCAJQAMALAFALQATgNAlgFIAdggIADAEIgCAEQAJgBAGADIgDAGQAIAEADAQQgLAIgPASQACgSgNgNIgKAGQgGAPgNAPQgWAFgVAHIgYASQgRAJgMAAQgLAAgHgJg");
	this.shape_2.setTransform(8.9,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E6457").s().p("AAOAFIAdgeIADAEIgCAEQAJgBAHADIADAGIAFASQgMAKgPASQgTABgVAFQANgQAAgWgAghgcQATgEAOAGIASgPIABgBIALAEIggAdIgHgLIgcAFQgUAJgJAGQAHgTAagJg");
	this.shape_3.setTransform(11.9,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#907665").s().p("AhLARQAKgHATgJIAdgDIAHAJIAggbIgLgEIAYgSQAKgBAGADQAGAEAAAKIgNARIAOABQAQAAACAGIgGASIAAABIAAAAIAAABIgLAJIgEgUIgEgGQgGgBgJAAIACgDIgDgEIgdAeQgjAFgVAPQgFgNgUgNg");
	this.shape_4.setTransform(12.7,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#665147").s().p("Ag4AgQgSggAGgTQAHgOAQgCIAjgEQASANAEANQAWgPAkgGQABAXgNANQgWAEgYAIIgWASQgQAIgMAAQgMAAgGgIg");
	this.shape_5.setTransform(6.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-11,21.2,14.3);


(lib.Hand3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#907665").s().p("AgOAnQAfgngVgmIAGAAIACABQAHABACAKQAAAFgFAEIgCABIgCAAQAIABACAIQABAGgFADIAAAAIgGAAIADADQAHAEgGALQgHADgEAAIADAEQAEAFgEAEIAAAAIAAABQgFACgFAAIgEAAg");
	this.shape.setTransform(18.7,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161619").s().p("AAjAfIAAAAQAGgPACgPQAAgPgGgRIAOgBIAAABQAXAjghApIgBABIgSAFQAIgKAFgKgAg4AeIgDgcQALAIANATIABgdQADgDAqADIANAAQABASgHANQgpABgMgDQgDAPgHAHQgIgKgDgLgAg4gEQABgNAIgJQAKgOAWgHIAOgDQABAIAHAHIANAEQgzgCgcAjIADgGg");
	this.shape_1.setTransform(13,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAoQAIgHADgPQALADAsAAQAGgNAAgRIgNgCQgsgCgEADIAAAcQgMgSgLgHIADAbQADALAGAJIgQABQhGABgBgQIgCgmQgBgYBEABIAWgCQgHAJgCANIgDAIQAbglA0ACIARAAQAGASAAAQQgBAOgGAOIgBABQgEAKgIAJIgIACQgLABgNAAIgFAAQgPAAgSgDgAAAAoIAAAAg");
	this.shape_2.setTransform(8.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#907665").s().p("AgLAWIABAAQAGgPABgNQAAgRgGgRIAMgBIABABIAIAAIABAAQAIABACAKQAAAFgGAEIgBACIgDAAQAJAAACAJQABAFgFAEIgBAAIgFAAIADACQAHAFgHAKQgHAEgFAAIAFAEQADAFgEADIgBABIABAAQgJAEgEgCIgBABIgSAFQAIgKAEgKg");
	this.shape_3.setTransform(17.7,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6457").s().p("AglAxQgHgJgEgLIgCgdIACgGQACgNAHgJQAKgOAXgHIAMgCQABAIAJAGIANAEIARAAQAFASAAAPQgBAPgGAOIgBABQgEAKgIAJIgIACQgKABgNAAIgDAAQgQAAgSgDg");
	this.shape_4.setTransform(12.1,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#665147").s().p("AgqAYIgCgmQgBgYBCABIAWgCQgHAJgCANIgDAIIADAbQADALAIAJIgSABIgIABQg8AAgBgQg");
	this.shape_5.setTransform(3.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-6.4,21,10.6);


(lib.Hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#907665").s().p("AgmAoIgBgBIAAgBIAAAAIAAgCQABgDAHgBIAGABIAFACQAHADACAHQABAGgGACIAAAAIAAAAIgDAAQgMAAgHgNgAgTAhIgFgCIgFgEQgGgHAAgDIAAgBIAAgBIACgCIAMgDIACAAIAGABQAJABAEAFIAAABQAFAGgHAIQgFACgFAAIgHgBgAgNAIIgFAAIgCAAQgIgBgDgFIAAgBIAAAAIABgDIAAAAIACgCQAQgIAKAAIAAAAIABABQAGAAADAIQABAEgFAFIAAAAIgRADgAgRgUQgHgBgIgDIgCgBQgDgFAAgFQAAgJAJgIQALAPARAKIgHAFQgDACgFAAIgCAAgAAQgWIgBAAIgFgBIgCAAQgIgCAAgGIAAAAIAAgBIAAgEIAAgBIACgBQARgGAKABIAAAAIABAAQAIABACAJQABAGgGAEIgBABIgMAAIgGAAg");
	this.shape.setTransform(18.5,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161619").s().p("AgkAhQgEgMgBgJQALAKAQAIIgEAXIgGABQgJgKgDgLgAgogBQABgNAGgJQAJgQAWgIQARgGAbABIAAAAIAAAAQgIAIAAAJQgtAGgeAiIABgGg");
	this.shape_1.setTransform(11.2,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhIAmQgEgWgCgSQgDgVBGgMIATgDQgGAJgBANIgBAIQAegjAvgHQgBAGAEAFIAAAAIgBAAIgRALQgEASgNALQgNANgFABQgQgIgLgIQABAHAEAMQADALAJAKIgOAFQgdAHgTAAQgYAAgDgNg");
	this.shape_2.setTransform(6.9,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#907665").s().p("AgBAoIgBgBIAAgBIAAAAIAAgCQABgDAFgBIAGABIAFACQAHADACAHQABAGgGACIAAAAIAAAAIgDABQgMAAgFgOgAAQAhIgFgCIgFgEQgGgHAAgDIAAgBIAAgBIACgCIAMgDIACAAIAGABQAJABAFAFIAAABQAGAGgJAIQgFACgFAAIgHgBgAhLgBQAAgNAGgKQAKgPAWgIQASgGAZAAIAAABIABAAQALAPARAKIgHAFQgEACgGAAQgHgBgIgDIgCgBQgBgFAAgFQguAGgeApQAAgMABgBgAAWAIIgFAAIgCAAQgIgBgDgFIAAgBIAAAAIABgDIAAAAIACgCQAQgIAKAAIAAAAIABABQAIAAADAIQABAEgFAFIAAAAIgTADgAA1gWIgBAAIgFgBIgCAAQgIgCgCgGIAAAAIAAgBIACgEIAAgBIACgBQARgGAKABIAAAAIABAAQAIABACAJQABAGgGAEIgBABIgMABIgGgBg");
	this.shape_3.setTransform(14.8,-3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6457").s().p("AgmAPQAegpAsgGQAAAFADAGIAAAAIgBAAIgRALQgDAPgNAOQgMANgEABQgQgIgLgKg");
	this.shape_4.setTransform(11,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#665147").s().p("AguAhQgEgWgCgTQgDgVBEgMIAVgDQgGAKgBANQgBADAAAMQALAHAQAJIgEAXIgGAAIgOAFQgdAHgSAAQgZAAgDgMg");
	this.shape_5.setTransform(4.3,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-8.5,23.6,12);


(lib.Hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#665147").s().p("AgNAcIABgGQACAEAGABIADAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAABgBIAAABgAgPAFIABAAIAEAAIAXACQgKAAgOAGQAAgBAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIgBACIgCgLgAgVgTIAegIIgPAHIgBABIAAABIgBAEIAAAAIAAABQAEAFAHABIABAAIAFAAIABAAIAMgCIgXAJQgLgIgJgLg");
	this.shape.setTransform(18.7,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#907665").s().p("AghAwQgCgDgCgEIgBgCIABAAIgBgBIABgBQABgDAHgBIAGABIAEAEIABAAQAGADABAHQABAGgGABIgBAAIAAAAIgBAAQgJAAgGgHgAgFAlIgFgDIgEgEQgFgHAAgEIgBgBIABAAIACgCQAEgBAFAAIADgBIACAAIAEABQAJACAFAGIgBAAQAFAHgJAHIgIACQgDAAgEgCgAAIAEQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAgBgBAAIgCAAQgEgBgDgCIgCgCIAAgBIABgDIABgCQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAOgGAJAAIACAAIAAABQAJAAACAJQABAFgGADIAAAAIgTACgAgHgRIgBAAIgDAAQgHgBgHgFIgBAAQgEgGABgFQABgJAJgHIAFAHQAIALAJAIIACABQgDADgDACIgDABgAAQgeIgFAAIgCgBQgIAAgCgGIAAAAIAAgBIABgEIAAgBIAAgBIAQgHQAFgDAEAAIABAAIAAAAQAIAAAFAIQABAFgFAGIgBABQgDAAgCACIgMACg");
	this.shape_1.setTransform(18,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhTAdQgDgVABgWQABgZBEABIAUgBQgGAIgBAOIgCAHQAfggAvgCQgBAEAEAGIgBABIgBgBIgSAJQgEAQgQAKQgNALgJADQgLgJgIgJQAAAIACAMQADALAGAKIgNAEQgVADgPAAQgmAAgCgQgAAGAmIAIgXQAugHAaAPIgCAFIgBgBIgEgDIgGgBQgHABgBADIgBABIABAAIgBABIABABQACAFACACQgOAEgSAAQgPAAgQgDg");
	this.shape_2.setTransform(7.6,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#161619").s().p("AgwAeQgCgNAAgJQAKAKALAKIgIAXQgIgLgDgKgAgdAcQAJgEANgKQAOgNAEgNIASgJIABAAIABAAIABAAQAHAFAHABIADAAIABALIgBADIAAABIACAAIAAAGIgCALQgFAAgEABIgCACIgBAAIABABQAAAEAFAHIgCAEQgagQgsAIgAgdAcIAAAAgAgwgFQABgNAIgIQAKgPAWgHQASgEAbADIAAAAIAAABQgJAHgBAJQgtACghAfIACgGg");
	this.shape_3.setTransform(12.1,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E6457").s().p("AghAoIAJgXQgLgJgKgNQAhgjAtgCQgBAEAEAGIgBABIgBgBIgSAJQgEAQgPAKQgMALgJADQAsgHAaAPIgCAFIgBgBIgEgDIgGgBQgIABAAADIgBABIABAAIgBABIABABQABAFADACQgPAEgPAAQgPAAgRgDg");
	this.shape_4.setTransform(11.6,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#907665").s().p("AABAwQgBgDgBgEIgBgCIAAAAIgBgBIABgBQABgDAFgBIAHABIAEAEIAAAAQAGADACAHQAAAGgGABIAAAAIAAAAIgCAAQgJAAgFgHgAAcAlIgEgDIgFgEQgFgHABgEIgBgBIABAAIACgCQAEgBAEAAIADgBIADAAIAFABQAJACAFAGIAAAAQAFAHgJAHIgJACQgFAAgEgCgAArAEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIgDAAQgGgBgCgCIgCgCIAAgBIABgDIABgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAQgGAKAAIACAAIgBABQAJAAACAJQACAFgGADIgBAAIgSACgAhIgHQACgNAHgIQALgPAWgHQATgEAZADIAAAAIABABIAEAHQAJALALAIIABABQgDADgEACIgDABIgEAAIAAAAIgDAAQgHgBgIgFIgBAAQgEgGACgFQguACggAhIABgIgAAzgeIgFAAIgBgBQgJAAgDgGIgBAAIABgBIABgEIAAgBIABgBIAQgHQAFgDAFAAIAAAAIABAAQAIAAAEAIQACAFgFAGIgBABQgDAAgDACIgMACg");
	this.shape_5.setTransform(14.4,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#665147").s().p("AhqAmQgDgVABgWQAAgZBEABIAWgBQgHAIgCAOIgBAIQAJAPAMAJIgJAXIgOAEQgVADgQAAQglAAgCgQgAgHAYQAHgDAMgLQAQgKAFgQIASgJIABABIAAgBIABABQAIAEAHABIADABIAAgBIAEABIAZACQgKAAgQAFQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgBACIgBAEIAAAAIACACQACACAGACIADAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAIABABIgRAAIgCAKQgEAAgEACIgCABIgBABIABABQgBAEAFAGIgBAEQgbgPgrAHgAgHAYIAAAAgABAgtIAggIIgQAHIgBACIAAAAIgBAFIgBAAIABABQADAFAJABIABAAIAFAAIABAAIAMgCIgZAIQgLgHgJgMg");
	this.shape_6.setTransform(9.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-7.1,23.1,11.2);


(lib.Foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 脚
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191919").s().p("AgFAHQBFAZBFgEQAlAXADAUIioADQgPgaAFgpgAirBEQgDgcAkhFQAMgYAogUIAHAAQAAATgEAfQgRA5ANAoQgwAAgkgGg");
	this.shape.setTransform(6.7,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgrBKQgNgoASg5QAEgfgBgTIADAAQAFASALAcIAGAQQAXALAZAHQgGApASAag");
	this.shape_1.setTransform(2.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AisA/QAkAGAwAAIBdAAICngDQABAHgCAFIlSABQgEgIgBgIgAgFACQgZgGgZgMIgGgQQgLgcgFgSIAFAAQAoAUAQAVQBIAxBNALIgRABQg9AAg8gWg");
	this.shape_2.setTransform(6.8,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#191919").s().p("AirAfQgDgWAVgsQAVALApACQAxABAlgHQBFAYBFgDQAlAUADAVIkEACQgwAAgkgFg");
	this.shape_3.setTransform(6.7,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AisArQAkAFAwABIEEgDQABAHgCAFIlSAAQgEgHgBgIgAgFgQQgYghANgIQBIAyBNAKIgRAAQg9AAg8gTg");
	this.shape_4.setTransform(6.8,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgLArQgogBgWgMIAPgeQANgXAngUIANAAQAoAUAQAVQgNAHAYAgQgfAHgoAAIgOgBg");
	this.shape_5.setTransform(-1.3,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-4.1,34.6,15.9);


(lib.CtIcon = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABYCSIhKhdQgPgYgRgJQgVgKgYAAIgiAAIAACIIhuAAIAAkjIDkAAQBEgBAhAIQAgAHASASQAQAQAAAYQAAAVgMAOQgOAQgaALQgPAHghAEIgsAMQAUAFA5AhIAmAfIAxBBgAhhgKIBUAAIAogFQAVgDAOgNQAQgOAAgUQAAgcgZgOQgTgLgtAAIhWAAg");
	this.shape.setTransform(9,14.8,0.084,0.083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ABFCnIhPhnQgOgUgNgFQgQgIgUAAIgNAAIAACIIiXAAIAAlNID4AAQBEAAAmAIQAlAJAXAWQAVAWAAAgQABAcgSAUQgSAVgdAKQgRAHgkAGQAbAGANAGQAJAFAOANQAOALAIAKIBIBhgAhWgeIA/AAQAMAAAagFQAOgBAKgJQAJgIAAgMQAAgQgPgJQgOgIgnAAIhCAAg");
	this.shape_1.setTransform(9.1,14.8,0.084,0.083);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai3CSIAAkjIFnAAIAAAeIj5AAIAABfIDoAAIAAAZIjoAAIAABqIEBAAIAAAjg");
	this.shape_2.setTransform(4.7,14.8,0.084,0.083);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjLCnIAAlNIGQAAIAABIIj5AAIAAA1IDnAAIAABDIjnAAIAABBIEAAAIAABMg");
	this.shape_3.setTransform(4.7,14.8,0.084,0.083);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ai4CSIAAkjIDjAAQBMAAAjAWQAfAVAAAnQAAAogjAXQgnAXhVAAIhkAAIAAB7gAhKgDIA5AAQAvAAAXgOQAbgPAAgcQgBgagXgRQgUgPgvAAIg/AAg");
	this.shape_4.setTransform(0.6,14.8,0.084,0.083);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AjNCnIAAlNID4AAQBRAAApAbQApAbAAAxQgBAzgsAbQgrAchcAAIhPAAIAAB8gAg1gXIAkAAQAqAAARgKQARgLABgQQAAgPgQgMQgQgLgnAAIgqAAg");
	this.shape_5.setTransform(0.6,14.8,0.084,0.083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag+CTQgngEgagJQgagJgUgRQgSgPgIgQQgMgbAAgVIAAixIBtAAIAAC1QAAAnAfAVQAbATAsAAQAsAAAbgSQAfgWAAgnIAAi1IBuAAIAACxQAAAZgMAWQgLAWgYAQQgbASgaAIQgnAKg9AAg");
	this.shape_6.setTransform(-3.9,14.8,0.084,0.083);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AhACnQgqgDgcgLQgdgKgWgTQgXgSgKgUQgNghAAgYIAAjGICWAAIAADLQAAAcAWAPQAWAPAlAAQAmAAAWgPQAWgQAAgbIAAjLICWAAIAADGQAAAegNAaQgNAbgeAUQgcATggAIQgqALg+AAQgkAAgogDg");
	this.shape_7.setTransform(-3.9,14.8,0.084,0.083);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AidB8QgagSgMgeIBlgFQAJAVAKAKQAeAaAxAAQAmAAAWgNQAbgRAAgZQAAgYgagQQgUgNg/gKQhfgMgmgYQghgTAAgcQAAgSAQgSQATgTAmgLQApgNBGAAQBaAAAsAWQAXAMAOAbIhjAEQgKgUgRgKQgXgNgiAAQggAAgSALQgXANAAAXQAAATAUAMQANAJAtAHQBdAOAqAOQAlALARATQAOARAAATQAAAYgVAWQgWAYgpAMQgrANhEAAQh0AAgqgdg");
	this.shape_8.setTransform(-8.3,14.8,0.084,0.083);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AikCMQgwgggHg0ICPgFQAEAXAPANQAXAVApAAQAgAAASgKQASgMAAgOQAAgNgRgJQgRgLg6gKQhigOgrgYQgqgaAAgmQAAgaAVgYQAXgWArgOQAsgMBJAAQBfgBAvAYQAxAXAKA1IiOAFQgGgWgSgKQgSgKgdAAQgcgBgMAIQgOAIAAALQAAAHALAHQAKAGApAHQBkAPAnAPQAqAPATATQAUAXAAAbQAAAggaAbQgZAbgvAPQgvANhGAAQh6ABgvghg");
	this.shape_9.setTransform(-8.3,14.8,0.084,0.083);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("A0lDQIAAmfMApLAAAIAAGfg");
	this.shape_10.setTransform(0.3,14.7,0.084,0.083);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("A1ND4IAAnvMAqbAAAIAAHvg");
	this.shape_11.setTransform(0.3,14.7,0.084,0.083);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkjA5IADgIQAjADAUgPQAVgPATgrIBKiwQAKgVgEgKQgFgKgQgMIADgHIGnC1IgBBjIgPgGQgqg9gvgoQgvgohAgbIgagKIg0B/IAdAOQA8AXAqADQApADAagTIAOAGIgzB4IgPgGQgDgigegbQgegcg9gYIgfgLIgfBJQgPAjANAXQAMAXAsATQA0AWBCABQBDABBMgVIALAIIhdBYg");
	this.shape_12.setTransform(11.4,-14.1,0.084,0.083);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABnDBQg/gCg/gQQhEgPgzgaQg0gZgigiQglglgPglQgPgkAIgjQAIghAbgbQAcgbAtgQQAygTBEgBQBCAABIAQQA8AOA1AYQA4AXAtAgIhHBaIgOgEQgChFgagjQgZgkg9gNQhIgSg3AjQg4AigSBMQgPBCAkA0QAkA0BGARQA8ANArgSQAsgSAggzIAPACIAQBgQgtAHgwAAIgggBg");
	this.shape_13.setTransform(7.1,-15.5,0.084,0.083);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiTCgIABgIQAhgHAQgVQAPgWAGhDIARioQACgYgGgHQgGgIgUgHIABgIIDsAYIAAAGQgUAEgIAHQgIAFgDAZIgQCoQgHBEALAXQAKAXAhAOIgBAIg");
	this.shape_14.setTransform(2.9,-16.3,0.084,0.083);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkQCsQAggLANgXQANgXgCgwIgGi9QAAgYgIgHQgIgHgUgEIAAgHICngDIBJgFIAAAIQgTAFgHAIQgIAIABAXIAGDOQABAmAUAQQAUAPArgBQAygBA6gbQA6gcA3gxIAOACIgtB3In1AQg");
	this.shape_15.setTransform(-0.8,-16.4,0.084,0.083);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhUDAQg+gCgvgOQg0gQgfgdQgggdgIgnQgIgpASgkQARgmAsgkQAngfA1gYQA0gWBBgOQBBgNA4ABQA3AAAzAOQA4ARAfAbQAeAcAJApQAGAcgIAdQgJAbgWAbQgnAwg/AiQhBAjhPAPQg3ANg6AAIgJAAgAggiiQhGAPgbAuQgaAvARBRQARBTAqAiQAqAhBFgOQBHgPAbgvQAagwgRhRQgRhSgqghQgegXgsAAQgRAAgVAEg");
	this.shape_16.setTransform(-6.2,-15.8,0.084,0.083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AioDuQAcgWADgaQAFgZgag/Ig/idQgIgWgKgEQgJgEgVACIgCgHIDthcQCPg4BGgGQBHgEASAtQAQAog4AyQg4AyhvAsQgMAGgXAHIgmALIAMAgQAYBAAUAQQAVARAjgDIACAIIkLBqgAgnifIgiAOIA1CFIAYgHQAMgDAJgEQAvgTAUgeQAUgegNghQgNgigigFIgOgBQgfAAguATg");
	this.shape_17.setTransform(-11.8,-14,0.084,0.083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AFFBGQnzgyn0BkQksAykSB9QjIBLiWBLIiwoLQLWkTLthLQIlgyIlBkQFGAyEsBkQDIBLCWBLIiWILQpxlFqjgyg");
	this.shape_18.setTransform(-0.1,-14.8,0.084,0.083);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("A9AiDQLukxLuhIQJYg5I+BfQGaBDFjCJQCyBEBgA3Ii6KVQpulOqRhKQoLg7oLBtQl2BOlQCaQinBNhdA9g");
	this.shape_19.setTransform(-0.2,-14.6,0.084,0.083);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgDCBQgBgCAAgEQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABgBQAAAAAAAAQAEAAABACIAAAFIAAAGQgBACgEAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgAAdB9QgBgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBIADgEQAEgCACACQAEACAAAEIAAAFQgCACgEAAIgCABIgCgBgAgiB9IgCgCQAAgBgBAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAgEACgCQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAQAFAAACAEIAAAEQAAADgFACIgCABIgEgBgAA8BwQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgCgCACgEQgBgCAFgCIAEAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQACAEAAAEQAAAAgBAAQAAAAgBABQAAAAgBAAQgBABAAAAIgDABIgDgBgAhBBwIgCgCIAAgIQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAIAGAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQACAEgCACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAIgCABIgEgBgABTBbQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIADgGQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQAAAAABABQAAAAAAABIACAGQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBgAhaBbQgFgCABgCQgBgCAFgEIACgCQAEAAACACIACAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEAAgABnBEQgBgCAAgEQgCgCACgEIADAAQADgCAEACQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAGQgCAEgCAAIgHAAgAhtBEQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAgBAAgBQgCgCAAgEQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQABAAABAAQAAAAACABIAFAAIAAAGQAAAEgDACIgHAAgAB2AlQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIAAgGQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIADAGQgBAAAAABQgBABAAAAQAAABAAAAQgBABAAAAIgDABIgDgBgAh5AlQgFgCAAgCIAAgGQACgCAEAAIAFAAIAEAEQAAAEgCACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgCABIgCgBgAB2AEQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgDACgCIAGAAIAFAAQABACABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBABQAAAAgBAAIgGgCgAiAAEQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgDABgCIAFAAIADAAQAFACAAADQAAAEgFAAQAAAAAAABQAAAAAAAAQgBAAgBABQAAAAgBAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAgAB0gaQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgIQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIAGAAQAAAAABABQAAABAAAAQAAABABAAQAAABABAAQgBAEgCAEIgCAAIgDABIgDgBgAh4gaIgGAAIAAgIQAAgCAFgCIAEAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQACAEAAAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBgABpg3QgDAAAAgEQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBABgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCAEAAIAEAEIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgEABIgDgBgAhtg3IgEgEIACgGQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAFAAACACQADACAAACIAAAEQgCAEgDAAIgEABIgBgBgABThSQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgEADAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAABQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAgBQgBAAAAgBgAhahSQgFgCABgCQgBgEAFAAIACgCQAEAAACACQACAAAAAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgEAAgAA8hlQgFAAABgEQgCgCACgEQACAAACgCQACAAAEACQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAAEgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDACQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBgAg/hlQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAgBIAAgGQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAEgCACAAIAEACQACAEgCACQAAABAAABQAAABAAAAQAAABgBAAQAAAAgBAAIgDACIgDgCgAAdhvIgDgEQgCgCACgEIADgCQABgDADAAIAGAFIAAAEQAAAEgEACIgGAAgAgihvQgCgCAAgEQAAgBgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAEAAACADIAFACIAAAGQgCAEgFAAIgEAAgAgDh1IgBgEQAAgFABgCQAAAAABgBQAAAAAAAAQABgBABAAQAAAAAAAAQAEAAABACIAAAHIAAAEQgBACgEAAQAAAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_20.setTransform(0,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC9900").s().p("AgziCIBXhZIAQG3g");
	this.shape_21.setTransform(14.4,3.3,0.084,0.083);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC9900").s().p("AikghIFJgSIjeBmg");
	this.shape_22.setTransform(16.1,1.8,0.084,0.083);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC9900").s().p("AioAyID2hmIBbBpg");
	this.shape_23.setTransform(13.3,1.1,0.084,0.083);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC9900").s().p("AgzjYIBnFDIhnBug");
	this.shape_24.setTransform(15.1,-0.3,0.084,0.083);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC00").s().p("AhTBVIj7hZID4hpIBalHIBoFFIDjBcIjgBmIhcFig");
	this.shape_25.setTransform(14.6,1.5,0.084,0.083);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9900").s().p("AgziCIBXhZIAQG3g");
	this.shape_26.setTransform(-15.1,3.3,0.084,0.083);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC9900").s().p("AikghIFJgSIjeBmg");
	this.shape_27.setTransform(-13.4,1.8,0.084,0.083);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9900").s().p("AioAyID2hmIBbBpg");
	this.shape_28.setTransform(-16.2,1.1,0.084,0.083);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC9900").s().p("AgzjYIBnFDIhnBug");
	this.shape_29.setTransform(-14.3,-0.3,0.084,0.083);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC00").s().p("AhUBVIj6hZID4hpIBZlHIBpFFIDjBcIjgBmIhcFig");
	this.shape_30.setTransform(-14.8,1.5,0.084,0.083);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],74.3,12.3,-102.7,-11.5).s().p("ApMj5ISZGbIlfBYg");
	this.shape_31.setTransform(-4.9,-1.5,0.079,0.079);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-6.6,-44.4,6.9,45.7).s().p("AFxnlIgGFVIrcJ2g");
	this.shape_32.setTransform(-3.2,3.7,0.079,0.079);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-8.4,-55.6,8.6,57).s().p("AlknrIFVBdIF0N6g");
	this.shape_33.setTransform(2.6,3.7,0.079,0.079);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-43.5,1.3,82.2,-2.5).s().p("Al2hzIPBhRIyWGJg");
	this.shape_34.setTransform(4.4,-1.7,0.079,0.079);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-1.1,57.2,15.3,-142.3).s().p("AhtE3IDburIgFTpg");
	this.shape_35.setTransform(-1.1,-5.2,0.079,0.079);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC00").s().p("AgEHFIq4JXIFytHIsSnZIOSBaIDQt8IDEN/IOThMIsZHNIFkNNg");
	this.shape_36.setTransform(-0.2,-1.4,0.084,0.083);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],67.2,-29.2,-89.3,56.8).s().p("AJVi2IjnEVIvCBYg");
	this.shape_37.setTransform(-4.8,1,0.079,0.079);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-40.6,-30.7,23.9,33.7).s().p("AhYpiIDCEXIjTOug");
	this.shape_38.setTransform(0.6,4.4,0.079,0.079);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-38.8,-32.4,41.7,48.2).s().p("ApDh2IFKiAIM9Htg");
	this.shape_39.setTransform(4.5,0.5,0.079,0.079);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],-35.4,28.6,63.4,-49.2).s().p("AlqCBILWp8IrFP3g");
	this.shape_40.setTransform(2.6,-4.4,0.079,0.079);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#B89534","#D7B429","#F5D10F","#FFFFFF"],[0,0.298,0.541,1],23.3,51.3,-81.9,-118.9).s().p("AAJF8Il8t3ILnP3g");
	this.shape_41.setTransform(-3.1,-4.4,0.079,0.079);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC00").s().p("AjKCmIuSBUIMVnTIlqtKIKxJcIKzpcIlrNKIMVHTIuThUIjKN/g");
	this.shape_42.setTransform(-0.2,0.2,0.084,0.083);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AnEQxQjRhZiiihQiiiihYjRQhcjYAAjsQAAjrBcjZQBYjQCiiiQCiihDRhYQDZhcDrAAQDsAADZBcQDRBYCiChQCiCiBYDQQBcDZAADrQAADshcDYQhYDRiiCiQiiChjRBZQjZBbjsAAQjsAAjYhbg");
	this.shape_43.setTransform(-0.1,-0.5,0.084,0.083);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CCCCCC").s().p("AnqSKQjjhgivivQivivhgjiQhjjqAAkAQAAj/BjjqQBgjiCviwQCvivDjhfQDrhkD/AAQEAAADrBkQDjBfCvCvQCvCwBgDiQBjDqAAD/QAAEAhjDqQhgDiivCvQivCvjjBgQjrBjkAABQj/gBjrhjg");
	this.shape_44.setTransform(-0.1,-0.5,0.084,0.083);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AoQTjQj1hmi8i9Qi9i8hnj0Qhqj8gBkUQABkUBqj7QBnj1C9i7QC8i9D1hnQD8hrEUAAQEUAAD9BrQD0BnC8C9QC9C7BoD1QBrD7AAEUQAAEUhrD8QhoD0i9C8Qi8C9j0BmQj9BrkUAAQkUAAj8hrg");
	this.shape_45.setTransform(-0.1,-0.5,0.084,0.083);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("EgGCAlHQh9gyjhhMQjIgxh9gyQjIgyjIh+Ql3jgivlGQivksAAmPQAAktBkmPQBLjgB9ldIAyh9QBLiwAAjIQAAj6hkkTQhLjIiWjHII/o/QI/D5JxAZQHAAZHChKQGphlF3ivIJxI/Qh9DigyETQgyDHAADJQAADIAyCvQAZCWAyB8QAyBlBkFdQBkGoAZFdIAABkQAADigyCvQhLDIhkCWQiWDIjIB9QjhCVj6AyQmQBMksCVQj6B9ivB+QjGiXjIhKg");
	this.shape_46.setTransform(0,-0.3,0.084,0.083);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CCCCCC").s().p("EgGJAljQh+g1jpg+QjKg2hzgrQjDhKjRh9Ql+jki7k7Qi8k7AAmeQAAlABwmFQBAjbCQlrIAuh0QBEixAAjDQAAj7hukPQhSjIiHjHIJbp5QI+D+JjAqQHVAfHNhfQDygyDohSQCug/CchLIKgJXQiCDvg6EIQgtDNAADPQAADDAlCzQAfCYAxBmQA1BwBUFiQBpGuAcFeQAGA9AAA4QAADQg+DCQg+DCh3CmQiTDOjWCHQjXCIkMA5QmLBUk3CWQjzB1izCXQjLihjOhYg");
	this.shape_47.setTransform(0,-0.2,0.084,0.083);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("EgG0Ao0Qh9hLj6gyQjIhLh9gyQjhhLjhh9QtSn0AAu2QAAleB9mOQAyj6CWl3IAyhkQAyiWAAiWQAAkTiWksQhkjIh9ivIM5tSQI/ETJYAyQHZAyHChkQEsgyETh9QCvgyCWhkIOEM5QivDhhLETQgyDhAADhQAACvAZCWQAZB9AyBLQAyCWBkF3QBkHAAZFeQAZBLAAAyQAAD6hLDhQhLDhiWDIQiWDhj6CWQj6CvksAyQnbBklFDIQjhB9iWCWQjfjIjhhkg");
	this.shape_48.setTransform(0,-0.2,0.084,0.083);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("EgGCAp9QiPhPjOg4IizgxQhtgehYgfQj0hVkCiaQupowA3wiQATluCMmzQAwiVBGi1IBmkBQCJlkjsnRQhJiRhmiLIhYhtIN+usQIyEfJYA7QHeAwHihkQFZhIE3iJQCchFBXg3IPTNpQkoGjgNH3QgFC1AhCpQAZCDAlBNQBECQBbGFQBqG7AfFpQAYEahJERQhKETilDmQiqDuj4ChQkGCrlGBFQovB4lpEAQi0CAhFBnQjbjQjFhpg");
	this.shape_49.setTransform(0,0,0.084,0.083);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9,-25,41.8,50);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 避弹衣
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161619").s().p("AglBZQAHgSgPigQBuC9goi2QAeA9gOBVQgKAag5AAIgLgBg");
	this.shape.setTransform(16,-30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28292E").s().p("AgBAIIgDgHIgBgGQACgEACgBQABAAAAAAQAAAAAAABQAAAAAAAAQABABABAAIADAIQACACgBAEQgBAEgCAAIgBABQgBAAgBgBQAAAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape_1.setTransform(17.9,-33.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoguQAkgJAiAQQAUBZgRAAQgSAAg3hggAAWACQgDAAgBAEIAAAIIAEAIQACACADAAQACgBABgEQABgDgBgEIgEgIQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_2.setTransform(15.5,-34.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhNBmIALg1IAAAAIACgKQAGgZAHgTIAAAAIADgJIABgBQAIgZAJgSIAAgBIAEgHQANgXANgJIAAgBQADgDAFgBIAAAAQAFgCAGAAQAVABAOAVIAAABIAGAMIAAAAQAHAQAEAYIAAAAIACAJIAAAAIAEAiIAAABIAAALIABAZIAAAIIAAAKIAAAhQgwAFgpAAQgjAAgfgEg");
	this.shape_3.setTransform(1.7,-32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161619").s().p("AhaB5IgFgCIgDgFIAAgFQAGgjAHgeIAAAAIACgKIAAAAQAHgaAHgTIgBAAIAEgLIAAABQAJgbAJgTIABAAIAEgJQAQgbARgLQAGgFAFgDIABAAQAJgEAKABQAfABAUAfIAAAAIAHAPIAAABQAIARAEAaIAAAAIACAJIABABIAEAkIAAABIAAAKIAAAAIABAbIAAAIIAAAKIAAABIgBApQAAAEgDADQgDADgEAAIAAAAQg2AGgsAAQgrAAglgFgAhNBmQBEAJBXgKIABghIAAgKIAAgIIgBgZIAAgLIAAgBIgEgiIAAAAIgCgJIAAAAQgEgYgHgQIAAAAIgGgMIgBgBQgNgVgVgBQgGAAgFACIgBAAQgEABgEADIAAABQgNAJgNAXIgDAHIAAABQgKASgIAZIAAABIgDAJIAAAAQgHATgGAZIgDAKIAAAAIgLA1g");
	this.shape_4.setTransform(1.6,-32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWBvQAJhvgrhwQA+ASATAaQAdBPADBeQgUAIgdAAQgNAAgRgCg");
	this.shape_5.setTransform(13,-31.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#161619").s().p("AAUhAQgUgag9gSIAAAAQA/AAAfAkQAuCigbATQgDhegdhPg");
	this.shape_6.setTransform(13.5,-32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161619").s().p("AisBkQgIgcATgZIADgDICAAHIgFAJQhFgLghAKQghAKgCAfIB5AIIAAAHQhLgIgZAKQgaAJgDAgQgLgYATgigAiOgHIB8ANIgBAGQhPgNgaAIQgaALgJAWQgDgdAUgSgAh2g7QAFgfAbgRQAXgnAjgLQB+AwBXBYIAAACQh+hphagNQglAEgSAaQBBAEBNAgQhfgZgjAFQgkAFgIAbIB9ATIgFAEQhSgPgfAMQgaALgFAVQgDgaAbgag");
	this.shape_7.setTransform(-1.8,-37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ai3CPQADggAagKQAZgJBLAHIgJA1IgdABQgqAAgxgKgAivBUQACgeAhgLQAhgKBFALIgQAxgAihAcIgBgBIAAgDQAJgWAbgIQAagLBOAPIgLAlgAiRgXQAFgUAagMQAfgMBTAQIgVArgAA1hWQhNgghBgFQASgaAlgDQBaAMB+BqIACASQg+gshFgagAh5hLQAJgbAjgFQAjgFBfAaIgxAegAA1hWIAAAAg");
	this.shape_8.setTransform(-1.5,-35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhYBvQAGgjAHgeIACgKQAGgZAHgTIAEgKQAIgaAKgTIAEgIQAOgZAQgLQAEgEAFgCQAHgDAIABQAaABARAaIAHAOQAHARAFAZIACAJIAEAkIAAALIABAaIAAAIIAAAKIgBAqIgBAAQg1AGgsAAQgqAAgkgFg");
	this.shape_9.setTransform(1.6,-32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AB7CdIABgmIBCAJQADAKgEAJIhCAKgAhYCcQhEgMgigJQgMgbAWgeIBtAPQgIAdgHAiIgCAAgAB9BtIAAgGIgBgbIBEAOQAGAOgEAPgAiyBFQgHgfAXgcIBsAZQgIAWgHAagAB8BBIgDgkIBFAXQAKAOgIANgAB4AUQgDgUgFgRIBIAbQAMAOgGARgAifAAQgCgeAagXIBoAiQgKATgKAZgABsgdQgUg3gsgBQgTgBgRAOIhlgtQAHgjAmgEIAIADQBsAtBiBNIAIAGQAJALgBAOgAiDg9QAEgmAbgKIBkAsQgOANgNAZg");
	this.shape_10.setTransform(-0.7,-37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhEClIgRgDIgEgBQhFgLgigKIABgKQAiAKBEALIACABQAHgiAIgeIhtgOIADgKIBtAOQAGgaAIgWIhsgYIAEgIIBsAWQAJgYAKgUIhogiIAEgHIBoAiQANgZAPgOIhlgsIAHgHIBlAsQARgNAUABQArABAVA2IBJAfIACAIIhIgaQAFARADATIBGAWIAAAKIhFgWIAEAjIBDAPIAAALIhDgPIAAAbIAAAGIBFAKIgDAJIhCgJIgCAnIAAAAIBCgKIgCAJQggAHggAEIgBAAIgMABQg0AGguAAQgqAAglgFgAAchEQgHACgEAEQgRAKgMAaIgEAIQgJASgJAYIgEAKQgHAVgGAaIgCAKQgHAdgGAjQBJALBmgMIABAAIABgpIAAgKIAAgJIgBgaIAAgLIgEglIgCgKQgEgWgIgRIgHgOQgRgbgZgBIgDAAQgHAAgFADgAClgkQhihMhsgtIgIgEIAPgIQBtAtBhBMIABATIgIgHg");
	this.shape_11.setTransform(-0.6,-36.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161619").s().p("AgrBSQAGhJgKhoQBiEEgFkJQAKCIgcA1QgMAMgQAAQgRAAgagTgAASAPQgDgDAAgEQAAgEADgDQADgBAEAAQAEAAADABQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_12.setTransform(13.6,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Agug7QBEgOAZAJQADCFgZAAQgXAAgwiAgAATAlQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_13.setTransform(13.5,-10.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#161619").s().p("AhPBLQAChWAVhZQAgEBBekBQAQBbgLBaQgsAUgjAAQgqAAghgagAgNAIQgDgDAAgEQAAgCADgDQADgDAEAAQAEAAACADQACADAAACQAAAEgCADQgCADgEAAQgEAAgDgDg");
	this.shape_14.setTransform(-0.2,-6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag/g7QA/gQBAAQQgwB/gfAAQggAAgQh/gAgTAiQgDADAAAEQAAAEADADQADADAEAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_15.setTransform(0.4,-10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#161619").s().p("AAAAJQgDAAgDgDQgDgEABgCQAAgEADgCQAEgDABABQAEAAADADQADADgBACQAAAEgDADQgDACgDAAIAAAAg");
	this.shape_16.setTransform(-16.6,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#161619").s().p("Ag3BNQgYhSAYhbQACEEB5j6QgXCXACAWQgcAKgVAAQggAAgVgUg");
	this.shape_17.setTransform(-14.5,-8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag9g+QBBgRA6AbQg9B5gdAAQggAAgBiDg");
	this.shape_18.setTransform(-13.9,-11.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAxApQggAOgegQQgiAKgcgSQgeAKgagUQghAKgQgPQAAghAMgQQAMgQAZAAIAABGQACgeASgOQATgQARgBIAABHQAFgkANgMQAQgPAegCIgCBJQADgjALgNQAQgSAlgEIgFBEQAFgfATgRQASgTAcgCIgFBGQAIgkAOgQQAOgRAfAEQABAkgLAfQgQAMgpgOQgNAMgSAAQgPAAgTgJg");
	this.shape_19.setTransform(-1.2,-7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#161619").s().p("AgHgYQAYgJAqAMQAVgKArAJQAggKAfAPQgfgEgOARQgPAPgHAlIAEhGQgcACgSATQgSAQgGAgIAGhEQglAEgQARQgMAOgCAigAhGgeQAggJAfAPQgeACgPAPQgOAKgFAmgAh+gnQgaAAgMAQQgLAQgBAhQgRggAQgoQAegEAVALQAcgDAcAMQgSAAgTARQgRANgCAeg");
	this.shape_20.setTransform(-1.6,-8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA1ApQggAOgegQQgiAKgcgSQgeAKgagUQggAKgRgPQABghALgQQAMgQAZAAIAABGQADgeARgOQATgQARgBIAABHQAFgkANgMQAQgPAegCIgCBJQADgjALgNQAQgSAlgEIgFBEQAGgfASgRQASgTAcgCIgFBGQAIgkAOgQQAPgRAUACQAHAjgPAkQgIAKgpgOQgNAMgSAAQgPAAgTgJg");
	this.shape_21.setTransform(-1.6,-7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#161619").s().p("AgCgYQAYgJAqAMQAWgKAqAJQAhgKATANQgUgCgOARQgPAPgHAlIAEhGQgbACgTATQgSAQgFAgIAFhEQglAEgQARQgMAOgCAigAhBgeQAhgJAeAPQgdACgQAPQgOAKgFAmgAh5gnQgaAAgLAQQgMAQgBAhQgQggAPgoQAegEAVALQAcgDAcAMQgRAAgUARQgRANgCAeg");
	this.shape_22.setTransform(-2.1,-8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// 身体
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00154C").s().p("AgHBBIAGiPQAHgEAJgDQAxAEAqgTQAPAAAPADIAUCVIgVAgIgkgTIgqAkgAiLBKIgKgEQgHAAABgHIAFgqQACgGAGgBIAEACQAxANA4AAQAHABgBAHIgFAqQgBAHgHgBIgZABQgkAAgmgMgAiIgJIgIgDQgHgBABgHIAFgqQABgGAIABIAFABQAwANA3AAQAHABgBAGIgFAqQgBAFgHgBQgNACgNAAQglAAgmgLg");
	this.shape_23.setTransform(0.6,-9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004799").s().p("AiIDqIgBgvQAzAQAvgFQAHABABgHIAFgqQACgHgIgBQg3AAgxgNIABgbQA0ARAxgGQAHABABgHIAGgqQABgGgHgBQg3AAgxgNQADgdAGglIAZh5QAYg9AhgyIAQgCQBPgKAsAgQAtAfgHDYQgQgDgPAAQgpATgygEQgJADgHAEIgFCRIgDBQQhCgCg+gWg");
	this.shape_24.setTransform(0.5,-21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AilEsQgJgTAFgRQAcAOAdAJQA9AWBAACQAvABAygJQAZgFAhgJQACANgLAPQhMAThGAAQheAAhUgkgABLEnQgDgDgBgFQAAgFACgDQABgEADAAQADgBADADQADADAAAFQABAFgCADQgCAEgDABQgDAAgCgDgACgEXQgDgDAAgEQgBgGACgDQABgEADgBQAEAAACAEQADADAAAEQABAFgCAEQgCADgDABQgCAAgDgDgAgJkWQACgIAFgEQACgDAFgBQAFgCAHAAIACABQBJAqBFBTQhMhGhegmgAAqk6QAugEAfgOIAIgDQALA1AeBKQgjg0hbg2g");
	this.shape_25.setTransform(-1.9,-26.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00357F").s().p("AAFE8IADhQIBBAkIAqgkIAlATIAVggIAJBAIgWAHQghAJgaAFQgsAIgrAAIgJAAgABFEYQgDAAgCAEQgBADAAAFQAAAFADADQADADADAAQACgBADgEQACgDgBgFQAAgFgDgDQgDgDgCAAIgBABgACaEHQgEABgBAEQgCADABAGQAAAEADADQADADADAAQADgBACgDQACgEgBgFQgBgEgCgDQgDgEgDAAIAAAAgAiyENIgDgCQgLiMAFhWIABgHIAKg3IADgJQAGgfAJgcIAEgKQAKgeANgZIAEgIQAOgbARgVIAHgIQAUgXAZgQIAJgGIAFgDIAMgHQBfAmBLBGQhEhThKgqIgCgBIAQgYIAJAGQBbA2AjA0IABABIADAFIAEAGQAHAMADANIADAKIAAADIgFAnQAHAvABA8IAFA1IABAKIABAcQgGBAgLBLIgUiXQAHjYgtgfQgsgghPAKIgQACQghAygYA9IgZB3QgGAngDAdIgFgBQgHgBgBAGIgGAqQgBAHAHABIAIADIgBAbIgEgCQgHABgBAGIgGAqQgBAHAIAAIAKAEIABAvQgcgJgdgOg");
	this.shape_26.setTransform(-1,-26.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00357F").s().p("AAFE8IADhQIBBAkIAqgkIAlATIAVggIgUiXQAHjYgtgfQgsgghPAKIgQACQghAygYA9IgZB3QgGAngDAdIgFgBQgHgBgBAGIgGAqQgBAHAHABIAIADIgBAbIgEgCQgHABgBAGIgGAqQgBAHAIAAIAKAEIABAvQgcgJgdgOIgDgCQgLiMAFhWIABgHIAKg3IADgJQAGgfAJgcIAEgKQAKgeANgZIAEgIQAOgbARgVIAHgIQAUgXAZgQIAJgGIAFgDIAMgHQBfAmBLBGQhEhThKgqIgCgBIAQgYIAJAGQBbA2AjA0IABABIADAFIAEAGQAHAMADANIADAKIAAADIgFAnQAHAvABA8IAFA1IABAKIABAcQgGBAgLBLIAJBAIgWAHQghAJgaAFQgsAIgrAAIgJAAgABFEYQgDAAgCAEQgBADAAAFQAAAFADADQADADADAAQACgBADgEQACgDgBgFQAAgFgDgDQgDgDgCAAIgBABgACaEHQgEABgBAEQgCADABAGQAAAEADADQADADADAAQADgBACgDQACgEgBgFQgBgEgCgDQgDgEgDAAIAAAAg");
	this.shape_27.setTransform(-1,-26.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#001900").s().p("AgHBBIAGiPQAHgEAJgDQAxAEAqgTQAPAAAPADIAUCVIgVAgIgkgTIgqAkgAiLBKIgKgEQgHAAABgHIAFgqQACgGAGgBIAEACQAxANA4AAQAHABgBAHIgFAqQgBAHgHgBIgZABQgkAAgmgMgAiIgJIgIgDQgHgBABgHIAFgqQABgGAIABIAFABQAwANA3AAQAHABgBAGIgFAqQgBAFgHgBQgNACgNAAQglAAgmgLg");
	this.shape_28.setTransform(0.6,-9.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#204C00").s().p("AiIDqIgBgvQAzAQAvgFQAHABABgHIAFgqQACgHgIgBQg3AAgxgNIABgbQA0ARAxgGQAHABABgHIAGgqQABgGgHgBQg3AAgxgNQADgdAGglIAZh5QAYg9AhgyIAQgCQBPgKAsAgQAtAfgHDYQgQgDgPAAQgpATgygEQgJADgHAEIgFCRIgDBQQhCgCg+gWg");
	this.shape_29.setTransform(0.5,-21.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#143300").s().p("AAFE8IADhQIBBAkIAqgkIAlATIAVggIAJBAIgWAHQghAJgaAFQgsAIgrAAIgJAAgABFEYQgDAAgCAEQgBADAAAFQAAAFADADQADADADAAQACgBADgEQACgDgBgFQAAgFgDgDQgDgDgCAAIgBABgACaEHQgEABgBAEQgCADABAGQAAAEADADQADADADAAQADgBACgDQACgEgBgFQgBgEgCgDQgDgEgDAAIAAAAgAiyENIgDgCQgLiMAFhWIABgHIAKg3IADgJQAGgfAJgcIAEgKQAKgeANgZIAEgIQAOgbARgVIAHgIQAUgXAZgQIAJgGIAFgDIAMgHQBfAmBLBGQhEhThKgqIgCgBIAQgYIAJAGQBbA2AjA0IABABIADAFIAEAGQAHAMADANIADAKIAAADIgFAnQAHAvABA8IAFA1IABAKIABAcQgGBAgLBLIgUiXQAHjYgtgfQgsgghPAKIgQACQghAygYA9IgZB3QgGAngDAdIgFgBQgHgBgBAGIgGAqQgBAHAHABIAIADIgBAbIgEgCQgHABgBAGIgGAqQgBAHAIAAIAKAEIABAvQgcgJgdgOg");
	this.shape_30.setTransform(-1,-26.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#161619").s().p("AgHBBIAGiPQAHgEAJgDQAxAEAqgTQAPAAAPADIAUCVIgVAgIgkgTIgqAkgAiLBKIgKgEQgHAAABgHIAFgqQACgGAGgBIAEACQAxANA4AAQAHABgBAHIgFAqQgBAHgHgBIgZABQgkAAgmgMgAiIgJIgIgDQgHgBABgHIAFgqQABgGAIABIAFABQAwANA3AAQAHABgBAGIgFAqQgBAFgHgBQgNACgNAAQglAAgmgLg");
	this.shape_31.setTransform(0.6,-9.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#41414C").s().p("AiIDqIgBgvQAzAQAvgFQAHABABgHIAFgqQACgHgIgBQg3AAgxgNIABgbQA0ARAxgGQAHABABgHIAGgqQABgGgHgBQg3AAgxgNQADgdAGglIAZh5QAYg9AhgyIAQgCQBPgKAsAgQAtAfgHDYQgQgDgPAAQgpATgygEQgJADgHAEIgFCRIgDBQQhCgCg+gWg");
	this.shape_32.setTransform(0.5,-21.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#28292E").s().p("AAFE8IADhQIBBAkIAqgkIAlATIAVggIgUiXQAHjYgtgfQgsgghPAKIgQACQghAygYA9IgZB3QgGAngDAdIgFgBQgHgBgBAGIgGAqQgBAHAHABIAIADIgBAbIgEgCQgHABgBAGIgGAqQgBAHAIAAIAKAEIABAvQgcgJgdgOIgDgCQgLiMAFhWIABgHIAKg3IADgJQAGgfAJgcIAEgKQAKgeANgZIAEgIQAOgbARgVIAHgIQAUgXAZgQIAJgGIAFgDIAMgHQBfAmBLBGQhEhThKgqIgCgBIAQgYIAJAGQBbA2AjA0IABABIADAFIAEAGQAHAMADANIADAKIAAADIgFAnQAHAvABA8IAFA1IABAKIABAcQgGBAgLBLIAJBAIgWAHQghAJgaAFQgsAIgrAAIgJAAgABFEYQgDAAgCAEQgBADAAAFQAAAFADADQADADADAAQACgBADgEQACgDgBgFQAAgFgDgDQgDgDgCAAIgBABgACaEHQgEABgBAEQgCADABAGQAAAEADADQADADADAAQADgBACgDQACgEgBgFQgBgEgCgDQgDgEgDAAIAAAAg");
	this.shape_33.setTransform(-1,-26.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgYECQhCgCg9gWIgCgvIABg6IACgbIAFg5QADgdAGglIAZh5QAXg9AigyIAQgCQBPgKAwAhQAQALAKAbQAsDCgJBHIADgTIABgDIgJA7QgNBagCApIgBAAIAAgDQghAJgZAFQgtAIgoAAIgKAAg");
	this.shape_34.setTransform(2,-21.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0B0B0C").s().p("AizEZQAChCgFhTIgFhXIAKg2IADgKQAGgeAJgcIAEgKQAKgeANgaIAEgHQAOgbARgWIAHgHQAUgYAZgPIAJgGIAFgDIAMgIQBfAnBLBFQhEhThKgqIgCAAIAQgYIAJAFQBbA2AjA1IABAAIADAGIAEAGQAHAMADAMIADAKIAAAEIgFAnQAHAuABA7IAFA3IABARQAAAHgEAcIgBAMIgDATQAIhHgrjCQgKgcgQgKQgxghhPAKIgQACQghAygYA8IgZB4QgGAmgDAeIgFA4IgBAbIgBA7IABAvQgcgJgdgOg");
	this.shape_35.setTransform(-0.9,-28);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AijEsQgJgTAFgRQAcAOAdAJQA9AWBAACQAvABAygJQAZgFAhgJIAAADQAAAMgJANQhNAThGAAQheAAhTgkgAgHkWQACgIAFgEQACgDAFgBQAFgCAHAAIACABQBJAqBFBTQhMhGhegmgAAsk6QAugEAfgOIAIgDQALA1AeBKQgjg0hbg2g");
	this.shape_36.setTransform(-2.1,-26.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#001900").s().p("AidESIgEgeQAIAOAkAGQA9ANA7ACQA9ACAmgDQAmgDAXgNQgMAggEgCQg7AHg2AAQhmAAhZgZgAgMkYQADgIAFgEQADgDAEgBQAFgCAGAAIADABQBJAqBEBTQhLhGhfgmg");
	this.shape_37.setTransform(-1.6,-26.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#204C00").s().p("AgeD8Qg8gCg9gNQABgCAAgYIABg6IABgbIAAgyIgBhdQAAg0AVg8QAVg8ASgUQASgVAigQQAigRA2AhQA5AhAMAQIASABQAIARABAPQAHAvgCAlQgCAmgJAVQgJATgCAUIgEBcQgCBJADAbIABAJIAAAAQgWANgmADQgXACgfAAIgsgBg");
	this.shape_38.setTransform(1.8,-23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5F4F43").s().p("Ag+gpQAvgEAdgOIAIgDQAKA1AeBIQgig0hag0g");
	this.shape_39.setTransform(8.7,-53.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#143300").s().p("AiqERQgIgvACgyQACgxABgtQAAgsACgaIADgjIAGgfIAFgXQALgdAMgaIAEgIQAPgaARgWIAGgHQAVgYAYgQIAJgFIAGgEIAMgHQBeAmBMBGQhFhThJgqIgCAAIAPgZIAKAGQBbA2AjA0IAAABIAEAFIADAHQAHAMAEAMIACAKIABADIgFAnQgCgPgHgQIgSgCQgNgQg4ghQg4ggggAQQgiAQgSAVQgTAUgVA8QgVA9ABAxIAABfIABAyIgCAbIgBA6QABAYgCACQgkgGgIgOg");
	this.shape_40.setTransform(-0.8,-29.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AidESIgEgeQAIAOAkAGQA9ANA7ACQA9ACAmgDQAmgDAXgNQgMAggEgCQg7AHg2AAQhmAAhZgZgAgMkYQADgIAFgEQADgDAEgBQAFgCAGAAIADABQBJAqBEBTQhLhGhfgmg");
	this.shape_41.setTransform(-1.6,-26.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgdD7Qg9gCg9gMQABgDAAgXIABg7IABgbIAAgyIgBhcQAAg0AVg8QAVg9ASgUQATgUAigQQAigRBAAoQBDAnAXDuIgCANIgOBIQgMA7ADAcIABAIIAAAAQgWANgmADQgXACgfAAIgrgBg");
	this.shape_42.setTransform(1.8,-23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#161619").s().p("AixERQgIgvgBgdIgChFQgCgnADhIQAChGAKgXQAJgXAFgGIALgXQAGgPAPgVQAPgVAKgMQALgNAWgOIAagQIAGgEIAMgHQBeAmBMBGQhFhThJgqIgBAAIAOgZIAKAGQBbA2AjA0IAAABIAEAFIADAHQAHAMAEAMIACAKIABADIgFAnQAcBNgFAvQgEAygHAOIgHAPQgYjuhCgnQhCgoggAQQgjAQgSAVQgSAUgVA8QgWA9ABAxIAABfIABAyIgCAbIgBA6QABAYgCACQgkgGgIgOg");
	this.shape_43.setTransform(-0.1,-29.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("AAAAAIAAAA");
	this.shape_44.setTransform(17.2,-32.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CCCCCC").s().p("Ai3AWQANg3AFgRIAUA0QCtAjCRg+IALBHQg2AFg4AAQh+AAiDgdg");
	this.shape_45.setTransform(-2.3,5.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(17.2,-32.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#331E00").s().p("AhLEwIAIi7IAcgdQAmgFAngLQAogLANADIAACUIAJA/IgWAHQghAJgZAFQgrAIgqAAIgKAAgAA/h9IAAgBIgbgvQgJgOgGgGQhEhHg0gVQACgHAFgEQAEgEAFgBQAFgCAIAAIA5ApQAuAiBDCiIAAAAIAAABQgGApgCAkg");
	this.shape_47.setTransform(7.1,-25.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4C2B00").s().p("AhxEQIgBgwIABg6IABgbIAFg4QgiA5gIB2IgVgKIgDgCQgLiMAFhVIABgIIAKg2IADgKQAGgfAJgcIAEgKQAKgdANgaIAEgIQAOgaARgWIAHgHQAUgYAZgQIAJgFIAFgEIAMgHQAzAVBGBHQAGAGAIAOIAbAvIAAAAIAdCKQgBAbAAAZQgMgDgoALQgpAKgnAGIgcAdIgHC7QhAgCg+gVgAAAjaQgIABgNAIQgcAsgYA8QgDBVAqAqQAsAQA1gMQA9gZACh/QgRg3gsgjQgTgDgUAAQgOAAgMABg");
	this.shape_48.setTransform(-1.8,-24.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AifE5IgVg2IAWAKQAHh2Aig6IgEA5IgCAbIgBA6IACAvQA9AWBAACQAvABAygJQAZgFAhgJQhdAqhpAAQg6AAg9gNgAgsAhQgqgqADhVQAYg9AcgrQAOgIAHgBQAhgEAhAGQArAjASA3QgDB+g9AaQgYAFgWAAQgaAAgZgJgAC0g/IgBgOIABANQhDiigwgiIg6gqIAPgXIAJAGQBcA2AiA0IABABIAEAFIADAGQAHAMADANIADAKIAAADIADBlg");
	this.shape_49.setTransform(-0.8,-25.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7F7F7F").s().p("AimEwIgPgCIAEhCIAtlOQAciBBXhPQARAHAOAJQhJBSgdBlIgrFdIgEBBIgfgDgAAFEbIAGiJIByAXIAwg0IAABKIAJA/IgNAEIgJADQghAJgZAFQgtAIgqAAIgKAAg");
	this.shape_50.setTransform(-1.1,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AifEnIAFhBIArldQAdhkBLhSQAcARAaAgQAaAhgfgJQgfgJBkBZIAnCCQgBAYABAZQgUACglAJQglAIgmAGIgaAdIgCAxIgGCKQAtABAygJQAZgFAhgJIAJgDIAJAtIgKABQhTAJhPAAQhIAAhGgHgABbCKQgDgDABgDQgBgEADgDQADgCAEAAQADAAACACQAEADAAAEQAAADgEADQgCADgDAAQgEAAgDgDgACfhiIAAgFIABAHg");
	this.shape_51.setTransform(1.3,-22.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#191919").s().p("AgHAQIAHgSQgPgMAEgMIAGgFQgCAPAUAJIgIADIgFAkIgHgQg");
	this.shape_52.setTransform(14.8,-41.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgIALIAHgkIAFgDQgUgJACgPIAOgPIAGAJIACAIQADAMgHAKIAKBSIABANIgXg4g");
	this.shape_53.setTransform(15.6,-39.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B2B2B2").s().p("AAyA9IAMgLQgEAMAPAMIgHAUIgQghgAhIhGIAPgXIAJAGIANAHIgQAaIgVgQg");
	this.shape_54.setTransform(7.3,-49.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AhFDgIACgyIAcgdQAmgFAjgJQAlgIAUgCIAABKIgwA0gAAgDXQgCADAAADQAAAEACACQADADAEAAQADAAADgDQADgCAAgEQAAgDgDgDQgDgDgDAAQgEAAgDADgAA1g6QhjhZAfAJQAdAIgYggQgZgggfgSQgPgJgSgHQACgHAFgEQAEgEAFgBQAFgCAIAAIAVAPIAkAaQAcAVAlBHIAQAgIAHAQIAZA4IAAAAIAAABQgGAogCAlg");
	this.shape_55.setTransform(7.1,-31.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AirFIIAEgcIAfADQCTAPCcgRIAEAWQgBAFACACQhVAJhRAAQhaAAhXgLgABDkeIglgaIAQgaQBRAyAlAwIAIAJIgCACIgDACIAAAAIgQAPIgGAFIgMAMQglhGgdgVg");
	this.shape_56.setTransform(-1,-23.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5F4F43").s().p("AgzgiIgNgHQAvgEAcgNIAIgEQALA1AjBHQglgvhPgxg");
	this.shape_57.setTransform(8.9,-53.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_27},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_25},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_25},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_43},{t:this.shape_39},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_49},{t:this.shape_39},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_46},{t:this.shape_50},{t:this.shape_44}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-60,40.9,67.3);


(lib.Arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 小胳膊
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000A33").s().p("AgHAMQgGgDAAgBIgBgBIgCgOIAAgBIAAgEIAAgEQAAACAHADQAHAEATABIAAAXQgRgCgHgDg");
	this.shape.setTransform(-4.4,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AABAoQgPgFgNgKQABgqAOgXQAUgEAUADQgSAcgBAcQgBAOADAOIgKgDg");
	this.shape_1.setTransform(-9.2,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AggAvIgBgBIgIgBQgQgHgFgPQAOAKAQAGIALADQgEgOABgOQACgdASgbQgUgEgXAFQAHgJASAAQAWgCATAHQAKADALAGIAWAOQAFAqgUAXIgRAFIgOACIgQABQgPAAgRgEgAAPAqQAOgBANgEQARgegHgZQgJgJgLgFQgaAbAJAvg");
	this.shape_2.setTransform(-5.8,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AAAglQAJAFAJAJQAHAZgRAfQgLADgOACQgJgvAagcgAgDAPIgCAEIgBAEQAAAAAAABQABAAAAABQAAAAABABQABAAAAAAIADAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIgCgDIgCgBIgBAAgAABgSQgBABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIABADQABABAAAAQABAAABAAQAAAAABAAQAAAAABgBIADgCQAAgBAAAAQAAgBABAAQAAgBAAgBQgBAAAAgBIgDgDIgDgBIgBAAg");
	this.shape_3.setTransform(-2.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002866").s().p("AgMCFIgBgZQALABAbgHIACgBQAMgDAKgGIAAABIAEgCIAAAAIgBAbQgfAPgfAAIgCAAgAgpBoQgGgEgBgBIgBgXQgHhEgNhKQAKAMAoABIAGChQgVAAgHgEgAAShSQAOgYAkgaQAEAYgLAbIAAAAQgLACgKAAQgMAAgKgDg");
	this.shape_4.setTransform(-1.3,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004799").s().p("AgjCUIgGihIAPAAIAPgBQALgBARgGQAJgCALgGIgGB2QgBAOABALIAAARIgEACIAAgBQgKAGgMADIgCABQgXAHgMAAIgDgBgAAHhNQgDgcANgrQASASAHAcIAAAAQgOAPgPAHIgFADIgBAAg");
	this.shape_5.setTransform(0.9,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhEBcQgHgSgCgSIACAFQAPAOAegDIAGACIAGAfQgogBgKgMgAATBMQASAGAZgFIgCAMQgLAGgJACQgRAGgNABQAAgOAJgOgAgYBKIABgEIASgEIgHggIAPgFQAUgXgFgqIgUgOIAJgWQgWgQgoACQAIgKANgGQATgEAPADQAOADANAIIgUAUIAGAFQALAIAIANQAAAZgRBIIAPgJIAAgBIABAAIAFgDQAPgHAOgPIAAAAQgHgagSgSIAIgYIAFgMQAHAMAGAQQAFAMADAOIAEAOIgFAEIgCAEQgTAWg5AwIgTgIgAgNARQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBIABgEIACgDQADgBACACIACADQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgDABIgBAAgAgIgQIgDgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABIADADQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAIgDADIgCAAIgDAAg");
	this.shape_6.setTransform(-1.4,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161619").s().p("AgRBEIASAIQA6gwATgWIAAAMIgBACQgkAagOAYQgKAOAAAOIgPABIgNAAgAgWBCQgfADgOgOIgDgFQgEgMgDgOIAIACIABABQAZAGAZgDIANgCIAFAgIgQAEIgBAEIgFgCgAAog0QgIgNgMgIIgGgFIAUgUIAKAIQAJAIAHAMIgEAMIgJAYQgNApADAcIABABIgQAJQAShIAAgZgAgQhBQgUgHgWACQAEgMAHgKQAngCAWAQIgKAWQgJgGgLgDg");
	this.shape_7.setTransform(-2.1,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001900").s().p("AgHAMQgGgDAAgBIgBgBIgCgOIAAgBIAAgEIAAgEQAAACAHADQAHAEATABIAAAXQgRgCgHgDg");
	this.shape_8.setTransform(-4.4,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#143300").s().p("AgMCFIgBgZQALABAbgHIACgBQAMgDAKgGIAAABIAEgCIAAAAIgBAbQgfAPgfAAIgCAAgAgpBoQgGgEgBgBIgBgXQgHhEgNhKQAKAMAoABIAGChQgVAAgHgEgAAShSQAOgYAkgaQAEAYgLAbIAAAAQgLACgKAAQgMAAgKgDg");
	this.shape_9.setTransform(-1.3,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#204C00").s().p("AgjCUIgGihIAPAAIAPgBQALgBARgGQAJgCALgGIgGB2QgBAOABALIAAARIgEACIAAgBQgKAGgMADIgCABQgXAHgMAAIgDgBgAAHhNQgDgcANgrQASASAHAcIAAAAQgOAPgPAHIgFADIgBAAg");
	this.shape_10.setTransform(0.9,13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#28292E").s().p("AgMCFIgBgZQALABAbgHIACgBQAMgDAKgGIAAABIAEgCIAAAAIgBAbQgfAPgfAAIgCAAgAgpBoQgGgEgBgBIgBgXQgHhEgNhKQAKAMAoABIAGChQgVAAgHgEgAAShSQAOgYAkgaQAEAYgLAbIAAAAQgLACgKAAQgMAAgKgDg");
	this.shape_11.setTransform(-1.3,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#41414C").s().p("AgjCUIgGihIAPAAIAPgBQALgBARgGQAJgCALgGIgGB2QgBAOABALIAAARIgEACIAAgBQgKAGgMADIgCABQgXAHgMAAIgDgBgAAHhNQgDgcANgrQASASAHAcIAAAAQgOAPgPAHIgFADIgBAAg");
	this.shape_12.setTransform(0.9,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#161619").s().p("AgeC9QgGgDAAgBIgBgCIgCgQIAAgBIAAgEIAAgDQAAABAHAEQAHAEAVAAIAAAZQgTgCgHgCgAgRgYIASAIQA6gwATgWIAAAMIgBACQgkAagOAYQgKAOAAAMIgPABIgNAAgAgWgaQgfADgOgOIgDgFQgEgMgDgOIAIACIABABQAZAGAZgDIANgCIAFAgIgQAEIgBAEIgFgCgAAoiSQgIgNgMgIIgGgFIAUgUIAKAIQAJAIAHAMIgEAMIgJAYQgNArADAcIABABIgQAJQAShKAAgZgAgQifQgUgHgWACQAEgMAHgKQAngCAWAQIgKAWQgJgGgLgDg");
	this.shape_13.setTransform(-2.1,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5F4F43").s().p("AADCiQgEgDgBgCIgBgXQgHhEgNhJQgGgPgCgOIgIg3QgHg0AZgXQAVgCAUAHQAKAEALAFQgYAVADBmQgXhrgTALQgUAMADAPQAcA4AdAOIACgBIAFAhIAGCjQgVgBgHgEg");
	this.shape_14.setTransform(-5.9,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#907665").s().p("AgFCTIgGihIgFgjQAWgzATgGQATgHAiAGIAAAMQg1AMgGAQQAZAdAZgEIgCAMIgGB1QgBAOABALIAAARIgEACIAAAAQgKAFgMADIgCABQgZAHgKAAIgDAAgAhNh2QgDgPAUgMQATgMAZBsIgBABQgfgPgdg3gAgQgxIAAAAg");
	this.shape_15.setTransform(-2.1,13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#725B50").s().p("AgKAnQAGgQAzgMQADAagMAaIAAABIgGABQgVAAgVgagAgZhAQASAHAHAFQAJAEAIAIQAZATAFAVQgigEgRAEQgSAGgZAzQgDhkAZgVg");
	this.shape_16.setTransform(1,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRDHQgTgCgHgCQgHgDABgBIgBgCIgCgQIAAgBIAAgEIgBgDQABABAHAEQAGAEAVAAQAMABAagHIADgBQALgDAKgGIAAABIAEgCIABAAIgCAbQgfAPgfAAIgCAAgAAjh5QgJgHgJgFQgJgFgQgGQgLgGgKgDQgUgHgXACQAFgMAGgKQAJgKANgGQASgEASADQAMADAMAIIAKAIQAIAIAIAMQAHAMAGAQQAGAMADAOIADAQIgEAEIgDAEQgFgWgZgTg");
	this.shape_17.setTransform(-0.8,10.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#143300").s().p("AgYC0QgGgDgBgCIgBgXQgHhEgJhIIgEgaQgDghAAgcQABgbAFgTQAGgSASgUQATgUAHgEQAJgEAuAPQgxAMgLAlQgOAmACBPIASC/QgTgBgHgEg");
	this.shape_18.setTransform(-3,9.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#001900").s().p("AgOAVQgUgCgGgDQgHgDAAgBIAAgBIgCgOIAAgBIAAgEIgBgEQABACAGADQAHAEAVABQALABAbgIIACgBQAMgDAKgFIAAAAIADgCIABAAIgBAaQgfAPgfAAIgCAAg");
	this.shape_19.setTransform(-1,28.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#204C00").s().p("AgiCzIgUi/QgDhOAOgmQANgmAvgMQAGANAHAMQAHALAGAQQAGAMADAPIAEAQIgOA0IgDAUIAAABIgBAKIgHB3QgBAOABALIAAARIgDACIgBAAQgKAFgLADIgDABQgXAHgMAAIgCAAg");
	this.shape_20.setTransform(0.9,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AhKCoQAhhnAFh4IABgZQACgPACgLIABgEQAGgTATgTQAQgUAJgEQAJgEAuAPQgxALgNAmQgNAmACBNIATClIgiAFIgTABQgVAAgVgGg");
	this.shape_21.setTransform(-4.9,8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AgOARQgVgBgHgEQgGgDgBgCIgCgLIAlgFIBBgHIAAAQIgDABIAAAAQgKAFgMADIgCABQgYAHgLAAIgDAAg");
	this.shape_22.setTransform(-1.1,26.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAVQgUgCgGgDQgHgDAAgBIAAgBIgCgOIAAgBIAAgEIgBgEQABACAGADQAHAEAVABQALABAbgIIACgBQAMgDAKgFIAAAAIADgCIABAAIgBAaQgfAPgfAAIgCAAg");
	this.shape_23.setTransform(-1,28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag2AAQgDhNAOgmQANglAvgMQAGANAHAMQAHALAGAQQAGAMADAPIAEAQIgOA0IgDASIAAABIgBAMIgHB3QgBAOABALIhBAHg");
	this.shape_24.setTransform(0.9,8.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7F7F7F").s().p("AgFC4QgMAAgMgCIgDAAIABgBQgbgKABgLQgBhqAGh4IABgZQABgPADgLIABgEQAFgSATgUQASgUAHgEQAJgEAuAPQgwAMgMAlQgOAmADBPQgCBeASBhIgIgBg");
	this.shape_25.setTransform(-3.2,9.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AgOAVQgTgCgHgDQgGgDAAgBIgBgBIgCgOIAAgBIgCgBQANACAMAAIAKABIALgBIASgEIANgDQALgDAKgFIABAAIADgCIABAAIgCAaQgfAPgfAAIgCAAg");
	this.shape_26.setTransform(-1.1,28.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("Ag2gMQgDhOAOgmQANgmAvgMQAGANAHAMQAHALAGARQAGALADAPIAEAQIgOA0IgDAUIAAABIgBAKIgHB3QgBAOABAMIAAARIgDACIgBgBQgKAGgLADIgLADIgUAEIgLAAQgUhgAChfg");
	this.shape_27.setTransform(0.9,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_7},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-9.4,18.6,40);


(lib.枪4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#333333"],[0,1],-0.2,1,0.2,-1).s().p("AAXAOQgMgEgcgDQgUgGAAgIIAHgIIBAAMQAFAIgCAGQgBAFgGAAIgHgCg");
	this.shape.setTransform(-25.1,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#333333"],[0,1],-2.4,-1.4,2.4,1.4).s().p("AgsAlIA5hJIAOAAQANABAFAMQgQAlgYAXg");
	this.shape_1.setTransform(-23.7,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#666666"],[0,1],5.9,32.1,-10.2,32.1).s().p("AAuArIgxAAIgnAAQgCgWgZgGIgLAAIAAg2IAAgDIAIAAIAIADQgLAPAUAYIAZAAIBaAAIAAAHIAAAXIAVANg");
	this.shape_2.setTransform(-16.1,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#333333","#999999"],[0,1],-4.4,-38.5,4.6,-38.5).s().p("AgsAIIAAgPIBZAAIAAAGIguAAQgJABgCAIg");
	this.shape_3.setTransform(-30.7,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#333333","#666666"],[0,1],-8.7,-39.9,8.4,-39.9).s().p("AhRggICjAAIAAAHIAAAPQgEgJgGgDIg7AAIgLAFQgHAFgJAGIgLAHIAAAMIgCAAQgSADgPAKIgFAFIgQACg");
	this.shape_4.setTransform(-48.2,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#333333","#999999"],[0,1],-5.5,-44.9,5.9,-44.9).s().p("Ag1ALIAAgLIAMgIQAIgGAJgFIALgFIA5AAQAGADAEAJIAAAKIg+AAIgQAFQgJAFgIAHIgMAJg");
	this.shape_5.setTransform(-45.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#999999"],[0,1],-4.6,1.4,-4.6,-1.7).s().p("AA7AQIAAgDIjRAAIAAgcIAEAAIAvAAIAGAAICYAAIAAADIBcAAIAAAcg");
	this.shape_6.setTransform(-41.2,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#333333","#666666"],[0,1],-5.1,0,5.2,0).s().p("AgyArIAAgIIAHgDIANgCIAEgBIAAhRIARAAIAABPIAEgBIA0gIIAEAAIAAARQgxAFg0ANg");
	this.shape_7.setTransform(-3.5,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#999999"],[0,1],-40.7,1.5,-40.7,-2.3).s().p("AAZAOIAAgDIAAgVIAAgDIA+AAIAAAbgAA4AIIAXAAIAAgFIgXAAgAA4gCIAXAAIAAgFIgXAAgAhWAIIAAgPIAjAAIAAAPg");
	this.shape_8.setTransform(48.8,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#333333","#999999"],[0,1],-31.9,1.2,-31.9,-1.2).s().p("AAcALIAAgDIAAgPIAAgDIBOAAIAAAVgAg6ALIAAgVIA1AAIAAADIAAAPIAAADgAhpALIAAgSIAAgDIAiAAIABAFIAAAQg");
	this.shape_9.setTransform(40.7,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#333333","#999999"],[0,1],-0.7,-35.3,0.7,-35.3).s().p("AgFAaIAAgyQADgBADADIAFAGIAAAhQgEAIgFABIgCAAg");
	this.shape_10.setTransform(28.2,-4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#333333","#999999"],[0,1],-32.6,0.9,-32.6,-0.8).s().p("Ah3AIQgEgIABgHICvAAIAjAAIAjAAIAAAPg");
	this.shape_11.setTransform(-9.6,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#333333","#999999"],[0,1],-23.2,1.3,-23.2,-4.8).s().p("AgBAMIAAgXIADAAIAAAXg");
	this.shape_12.setTransform(6.2,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#333333","#666666"],[0,1],-9.6,-39.8,10.4,-39.8).s().p("AAPAPIgUgNIAAgVIAWAAIAAgJIgGAAIAAgQIgLAAIAAAQIgFAAIAAgJIhrABQgFgFgEgGIDzAAIAAAIIgMAAIgFAAIAAANIAFAAIAMAAIgQAUIAAAJIAAAfIg2AIIAAhJIgEgFIgQAAIgFAFIAABNIgMACg");
	this.shape_13.setTransform(-9.4,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#999999"],[0,1],26.5,-4.6,26.5,4.2).s().p("AhRAdIAAgFIgWAAIAHgFIAWAAIAJgEIgKgKIggAAIAAgLIAAgDIAsAAIAKgMIAAgHICNAJQAQADAEAQIAAAaIgDgCIgFAAIAAgWQgEgMgRABIh5gEQgKAEgCAJIAAAZIAAAEg");
	this.shape_14.setTransform(-8.2,-11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#333333","#666666"],[0,1],-13.1,0,13.1,0).s().p("AhxAhQgTgYAKgNIgIgDIAAgSIAEgHIAKAAQACAMAKgHIAQACIAHAAIAWAAIAAAFIAaAAIAOAAIAAgEIAAgBIADAAIAAABIAAAEIALAAIAAgEIAAgBIAEAAIAAABIAAAEIAJAAIAAgEIAAgBIACAAIAAABIAAAEIAMAAIAAgEIAAgBIADAAIAAABIAAAEIALAAIAAgEIAAgBIADAAIAAABIAAAEIAMAAIAAgEIAAgBIACAAIAAABIAAAEIAMAAIAAgEIAAgBIADAAIAAABIAAAEIALAAIAAgEIAAgBIADAAIAAABIAAAEIALAAIAAgEIAAgBIADAAIAAABIAAAEIALAAIAAgEIAAgBIADAAIAAABIAAAEIAMAAIAAgEIAAgBIAFAAIADACIABABIAAARIAAADIgjAAIgFgIIgbAAIgDAIIivAAQgBAIADAIQAEAFAFAFQAGAFAJAEg");
	this.shape_15.setTransform(-10.3,-6.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("ABCAjIAQgUIAAAKIAAAKIgQAKgABSAPIgLAAIAAgOIALAAIAAAOgAA+gpIAAgDIALAAIAAADgAAvgpIAAgDIAMAAIAAADgAAigpIAAgDIALAAIAAADgAATgpIAAgDIALAAIAAADgAAFgpIAAgDIAMAAIAAADgAgHgpIAAgDIAJAAIAAADgAgWgpIAAgDIAMAAIAAADgAgkgpIAAgDIALAAIAAADgAgygpIAAgDIALAAIAAADgAhAgpIAAgDIALAAIAAADgAhRgpIAAgDIANAAIAAADg");
	this.shape_16.setTransform(-5.5,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AnLAIQgBgPADgPIAEgPIAACMIgGABgAghBnIgQAAQgIgWAGgXIAzAAQgSAFgBATQgBAMAFAGIAAABQgCAAgDgDQgDgDgDgLQgDgLACgLQgPAGgBAMQgBANAOAHIAEABIALAAIAgAAIADgBQAHgJgCgMQgCgSgXgDIAiAAIAAAhIgHADIAAAJgAmJBbIAAgFIALgJQAJgHAJgFIAQgIIBAAAIAAABQAAAJgGAAIg3AAQgKAEgJAGQgKAGgIAIIgGAGQgFgCAAgEgAAvAKIAEgEIAABTIgEAAgABDAGIAEAEIAABMIgEAAgAhkA6QgHgRgUABIgIAAIgBgEIAAgIIAJAAIALAAQAYAHADAVgAHFAfIgFgRIAAgCIAAgQIgBgFQgBgFgDAAIgXAAQgFAAgBAFIgBADIAAASIAAADIgEAQIgQAAIgDgIQAHgBAEgIIAAghIgFgGIAvg8QARgCAAAWIAAA4IAAAVIAAATgAGZgdIAAAFIAqAAIAAgRQgIgBgDgHIAAgKIgKAAgAF/AfIAAgDIAAgZIAAgZIAAgJIAAgFIAFAAIAAAJIAAAyIAAAIgAFyAfIAAgDIAAgZIAAgZIAAgJIAAgFIAFAAIAAAFIAAAJIAAAZIAAAZIAAADgAFlAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAFYAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAFLAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAE+AfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAExAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAElAfIAAgDIAAgZIAAgZIAAgJIAAgFIAFAAIAAAFIAAAJIAAAZIAAAZIAAADgAEYAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAELAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAD+AfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgADxAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgADkAfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgADYAfIAAgDIAAgZIAAgZIAAgJIAAgFIAFAAIAAAFIAAAJIAAAZIAAAZIAAADgADLAfIAAgDIAAgZIAAgZIAAgJIAAgFIAFAAIAAAFIAAAJIAAAZIAAAZIAAADgAC+AfIAAgDIAAgZIAAgZIAAgJIAAgFIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgACxAfIAAgIIAAgXIAAgbIAAgJIAGAAIAAAFIAAAJIAAAZIAAAZIAAADgAiLAeIgCgHIgFAAIAAgIIAAgGIAAgcIAAgFIAKAAIAAA2gACNAaIAAgKIAAgNIAAgGIAAgSIAAgDIAHAAIAAAygAkcAaIilAAIAAgUIDTAAIAAADIAAARgAAMAWIAAgIIhZAAQgJgEgGgFIBoAAIAAAJIAGAAIAAgOIAMAAIAAAOIAGAAIAAAIgAB8AQIAAgNIAFAAIAAANgABHgVIADgIIAbAAIAFAIgAmOgXIgCgJIgsAAIAAAJIgFAAIAAgOIAzAAQAGADABALgAhOgsIgQgCIAAgEQAFgTAIgHIAGAAIAAANIAgAAIAKAKIgJAEIgWAAIgHAFgAhLhPIAAgMQADgNAQACIAjAEIAAAHIgKAMgAg+heQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEACQAAAAABgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEABg");
	this.shape_17.setTransform(-11.4,-4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#333333","#999999"],[0,1],-34,3.1,-34,-3).s().p("ABcAeIAAgYIAHAAIAAAYgABPAeIAAgYIAHAAIAAAYgABDAeIAAgYIAHAAIAAAYgAA1AeIAAgYIAIAAIAAAYgAApAeIAAgYIAHAAIAAAYgAAcAeIAAgYIAHAAIAAAYgAAPAeIAAgYIAHAAIAAAYgAADAeIAAgYIAGAAIAAAYgAgJAeIAAgYIAHAAIAAAYgAgVAeIAAgYIAHAAIAAAYgAgjAeIAAgYIAIAAIAAAYgAgvAeIAAgYIAHAAIAAAYgAg8AeIAAgYIAHAAIAAAYgAhJAeIAAgYIAIAAIAAAYgAhVAeIAAgYIAGAAIAAAYgAhjAeIAAgYIAIAAIAAAYgABcgUIAAgJIAHAAIAAAJgABPgUIAAgJIAHAAIAAAJgABDgUIAAgJIAHAAIAAAJgAA1gUIAAgJIAIAAIAAAJgAApgUIAAgJIAHAAIAAAJgAAcgUIAAgJIAHAAIAAAJgAAPgUIAAgJIAHAAIAAAJgAADgUIAAgJIAGAAIAAAJgAgJgUIAAgJIAHAAIAAAJgAgVgUIAAgJIAHAAIAAAJgAgjgUIAAgJIAIAAIAAAJgAgvgUIAAgJIAHAAIAAAJgAg8gUIAAgJIAHAAIAAAJgAhJgUIAAgJIAIAAIAAAJgAhVgUIAAgJIAGAAIAAAJgAhjgUIAAgJIAIAAIAAAJg");
	this.shape_18.setTransform(17,-4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#333333","#999999"],[0,1],-1.2,-35.4,1.4,-35.4).s().p("AgLAiIAAgIIAAgxIAAgLQAPgBAGAIIACADIAAAYIAAAXQgCAMgNAAIgIgBg");
	this.shape_19.setTransform(4.7,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AiEBfIA0AAQAYgYAQgmQgFgNgOgBIgNAAIALgOQgBgHgCgGIALAAIAmAAQgHAUAJAWIAOAAIgBAFQgggDgCASQAIAFgEAMIgMAAQgLANgMAXgAmihqIAFAAIAAAPIAAAeIAAAUIAABBIAAAHIgFADgAj5giIAAgHIAvAAIAAAHgAhkgkIAAg4IAJAAIAAA4gAGbg/IAAgcIAHAAIAAAcgAGOg/IAAgcIAHAAIAAAcgAGCg/IAAgcIAHAAIAAAcgAF0g/IAAgcIAIAAIAAAcgAFog/IAAgcIAHAAIAAAcgAFbg/IAAgcIAHAAIAAAcgAFOg/IAAgcIAHAAIAAAcgAFCg/IAAgcIAGAAIAAAcgAE0g/IAAgcIAHAAIAAAcgAEog/IAAgcIAHAAIAAAcgAEag/IAAgcIAIAAIAAAcgAEOg/IAAgcIAHAAIAAAcgAEBg/IAAgcIAHAAIAAAcgAD0g/IAAgcIAIAAIAAAcgADog/IAAgcIAGAAIAAAcgADag/IAAgcIAIAAIAAAcgADQhFIAAgYIgBgDIAGAAIAAAbg");
	this.shape_20.setTransform(-14.9,2.3);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.4,-15,115,30);


(lib.枪3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7F4A0A").s().p("Al/BYIgChzIADgCQAEA3gBBAQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAAAAAgBgAh9g0IADgBIADA1IgDABQgEgaABgbgAD0gIQA7gHBMAAIACgSIgDg4IAGAAQAEARgEAPQAEAXgEAVIgFABQgsAEhDAAIgYAAgAFKg6QACgEAHgBQAWAAAFAGgAEPg8QACgEAFgBQAYAAABAGg");
	this.shape.setTransform(-13.7,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8F14").s().p("AlyBFQA/gTA+gbIAYgDQAigEAzgVQAFgRgIgQQgNgFgNADIAhgJQgBAbAFAaIhdAeIgFAAQhHAYhFAcQgMgGAIgLgADtgEIgFgBIgXAAQApgXB4ACQADgBABgCIgBASQhNgBg7AIIAAAAgAFNgxQgJgBgBgFIAkABQgEAFgQAAIgGAAgAERgyQgFgCgDgEIAAAAIAgAAQgCAGgOAAIgIAAgAD2hMIAAgIQBSABArAKg");
	this.shape_1.setTransform(-13,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkCgQQADgMAKAAIgBARIAAA0QgDADgCADQACg/gJAAgAD5gqIADAFIADAHIACAJQACAHAAAHIgGAAIAAAHIAAAJIgBAGIgBAFIgDADQAFgegEgjgAgTgVIAAgFIAvAAIAAAFgAjwgjQgBgLAUAAID5AAIAAAFIj8AAQgLAAABAGg");
	this.shape_2.setTransform(0.3,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjpBBIAAgBIAAgeQADACAEAAQALABAFgHIAAAgQgHAFgHAAQgEAAgFgCgADjAjIAAgRIBNAAQgBAIACAFIhGAAQAAAHAHAGIgBAAQgKAAgEgJgAl+AkIgDg1IAFgEQAIAAgCA/IAAABgAkfAoIgBgBIAAABQgFgBgDgJIAZAAQgDAHgFACIgGABIgCAAgAlwAkIAAgzQAIgGAIAGIAAAzgAhBAaIgEAAIAAgaIALAAIAAAagAFBAPIAAgEIAnAAIAAAEgACAAPIABgEIBaAAIAAgGIhZAAIAAgHIBdAAIAAAHIAnAAIAAAGIAqAAIAAAEgAF5AIIgRAAIgnAAIgPAAIgBgDIgBgHIBPAAIADAHIAAADgAitAFIAAgHIBiAAIADAHgAk3gOIAAgQIAoAAIBYAAIApAAIAAAFIAAALgAFxgPIAAgPIgQAAQgFADABAMIgGAAQABgaAOgEQgLgJAHgMIAUAAIAAAzgACHgZIgCgJIAzAAIAAAJgAgPgZIAAgbIAHAAIAAAJIAAASgAi3gjIAAgFIBbAAIAAAFgAlvgjIAEgFIAGAAIBWAAIAAAFg");
	this.shape_3.setTransform(12.6,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE6B0F").s().p("Al9gbQAlgPBvgCIAOAIQAfgBAegFQAOgDANAFQAIAQgGARQgzAVghAEIgYADQg+AbhAAUQgHALAMAFIgPAGIgFABQABg/gEg3gADMgHIAAgZIAAgaIAAgDIArABIAHAAIAAgSIB9AEQgsgLhRgBIAAgEIB+ADIACA4QgCADgCABQh5gCgoAWgAFUg9QgHAAgCAFQABAEAJABQAVABAFgFQgFgGgTAAIgDAAgAEXg/QgFABgBAEIAAAAQADAFAFABQAVACADgIQgBgFgVAAIgEAAg");
	this.shape_4.setTransform(-13.8,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ai7ArIAAgMIBlAAQAAAGgDAGgAhSAaIAAgaIALAAIAAAagAFxAWIgCgJIAQAAIAAAJgADRAWIAAgJIAkAAIAwAAIgCABQgBADAAAFgAibgEIgqAAIAAgGIBbAAIAAAGgAlEgEIg6AAIAAgDIACgDIBfAAIAAAGgACqgJIAAgHIAAgBIAnAAQAEAFADADgAjFgOIhYAAIhVAAQgBgGALAAID+AAIAAAGgAhYgeIAAgGIAOAAIgFAGgAhsgeIgFgHIAAgGIAHAHIAIAAIAAAGg");
	this.shape_5.setTransform(14,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Aj8BHIgzAAQgKgBgEgJIAAghIgcAAQgDAFgHABIgKAAIAAg0QgIgFgJAFIABgRIAAADIA5AAIAAAPICpAAIAAgLIAxAAIAAgEIAAgGIAAgEIAAgGIAAgFIAAgCIAJAAIAAgDIAAgGIAAgCIAKgFIgBAHIAAAGIAAADIAFAAIAEgDIAFgGIACgCIAoAAIAEAMIAAAaIgrgBIAAADIgLAAIAAAaIAAAXIiLAAIgCAFQgGAHgKgBQgEAAgDgCIAAAdIAAACQAAAEgFAEIgBAAgAk5A9QADAGAIABIAyAAQADgDAAgDIAAgfIgEgDIgfAAIgZAAIgEAAgAi7ADIAAAMIBjAAQADgGgBgGIgCgHIhjAAgAkuAlIABABQAGAAACgBQACAVANADQgRAAgHgYgAg/AfQgLAAgEgIIAHAAIANAAIAXAAQgSAJgJAAIgBgBgAEkAeIAAgBQgCgFABgIIAAgDIAAgFIAAgFIgqAAIgnAAIAAgHIhdAAIAAgJIAGAAIBRAAQAEgJgGgEIgfAAIAAgCIAAgJIAuAAQALAPASAJIgkAAIAAAJIBQAAIACAHIABACIAOAAIAAADIAAAFIAAAKIAGAAIgFAHgAFbAZIAAgMIAAgFIAAgDIARAAIAAAHQARAGgRAHgABsgXQAEgPgEgRIAFAGQAEAjgFAeQAAABgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQAEgTgEgXgAF0ADIgDgHIAOAAIAAAHgAEigEQAAgFACgDIABgBIACgEIAjAAIAFAAIAUAAIAGAAIAFAAIABAEIACAJgAkcggIAAgGIAAgEIBYAAIAAAEIAAAGgAB3glIgDgHIA3AAIAAAHg");
	this.shape_6.setTransform(13.9,-5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BE6B0F").s().p("AgxA7QgDgGADgIQAfhEAFgVIgMgVIAeAAQAJgCADgGIAiAAIAAAeIgHACQggAkgRBKQgIAFgIAAQgOAAgOgPg");
	this.shape_7.setTransform(-23,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7F4A0A").s().p("Ag0A3QgDgHADgKQAlhNgDgGQgGgKgGgDIACgGIAAAAQACgEAEgDIAMAUQgFAWgfBEQgDAIADAGQAWAWAWgMQARhKAggkIAHgDIAAAMQgfAOgXBbQgIAFgKAAQgRAAgRgRg");
	this.shape_8.setTransform(-23.3,5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.3,-12.6,104.6,24.9);


(lib.枪2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AkvB9QAcgyAZgZIALgbQAfAFALAcQgNASAKAMIgPAEQgMAPgIAaIADAKIgDAAQgdAAgngQgAgJBUQgHgCgEgIIgCgCIAAgBIgEgJIgDgJIgFgLIAAgBIgBAAIAAAAIhWAPIgBAAIgDgHIBmgSIAAADIAAAFIgGABIAMAeQAEAHAFACIAqAAQAIgIABgJIgBgMIACAAIAUAAQAEgMAAgMIANAAIAAAgIgRAAQgHABgFADQgEADgCAEQgDAHgHAHIgBABgAERA6IAAggIAKAAIAAAggAD9A6IAAggIAKAAIAAAggADpA6IAAggIAKAAIAAAggADWA6IAAggIAKAAIAAAggADCA6IAAggIAKAAIAAAggACuA6IAAggIAKAAIAAAggACaA6IAAggIAKAAIAAAggACHA6IAAggIAJAAIAAAggABzA6IAAggIAKAAIAAAggABfA6IAAggIAKAAIAAAggAntA2IAAhGIAOAAIAAAJIApAAIAAgJIBFAAIAAAKIAHAAIAHAAIAAgKIAaAAIAAAhIgbAAIgHAAIgHAAIgOAAIgmAcIgLgSIgzAVIAAAGgAEpAzIABgeIAFAAICtAAQAAAQgGAOgAh1ASIgRgDIgVAAIgMAAIgJAAIhAABQgEgLgKgIIgCAAIAAgiQAGANASABIBhAAIAAAaIASAFIAAglIBZAAQALACAEAHQgQAJAAAMIAAAZIhYARQADgMgDgNgAAqgBIgWgKIAAgJIAAgIIgIAAIACgEIAAgUIAAgGIC8AAIAOAAQAEAFACAGQACAGAAAHIgIAAIgzAAQgvgEgWgMIhMAAIAAAWIDCAAQgMAPgwACIg4AAQgDAHgOABIAAACgAkbgdIAAgCIAAgVIAMAAIAAAXgAntgfIAAgVIDNAAIAAAVgAFWgjIAAgBIAAgDIgBAAIAAgKIAXAAIAAALIAAADgAGxgkIAAgCIAAgLIA9AAQAAAHgCAGgAgcglIAAgCIAAgFIhrAAIAAAFIhYAAQgPAAgGgNIDrAAIAAAPgADxgwIAZAAQAAAGAFADIgiABgAEdgnIAAgKIg/AAIAAgZIAAgHQArg8AFAEQAFgCAGALIAABDIAEAAIAAAMIAzAAIAAAGIgBAAQgDAAgCACIgBACgADthBIgBACIABABIACABIAZAAIACgBIAAgBIAAgCIgCgBIgZAAIgCABgADmhRIAAAGIAtAAIAAgTIAAgTIgOAAIgHAAgAC7g+IAAgGIANAAIAAAGgACqg+IAAgGIANAAIAAAGgACZg+IAAgGIAOAAIAAAGgACIg+IAAgGIAOAAIAAAGgAB3g+IAAgGIAOAAIAAAGgABmg+IAAgGIAOAAIAAAGgABWg+IAAgGIANAAIAAAGgABFg+IAAgGIANAAIAAAGgAA0g+IAAgGIANAAIAAAGgAAjg+IAAgGIANAAIAAAGgAARg+IAAgGIAPAAIAAAGgAj3hDIgFgBIgEgDIgDgDIAAgRIAMAAIADADIADAAIAHAFIAUAAIAAAJIgVAAIgKAHIgCAAgACZhNIAAgHIgBgBIANAAIACAIgACIhNIAAgHIAAgBIAOAAIAAABIAAAHgAB9hNIAAgIIAJAAIgBABIAAAHgABFhNIAAgHIAAgCIAIAAIAFAAIAAAJgAA0hNIAAgHIAAgCIAOAAIgBACIAAAHgAAjhNIAAgHIAAgCIAOAAIgBACIAAAHgAARhNIAAgJIAPAAIAAACIAAAHgABjhaIAAgFIBnAAIAAAFgAjbhhIAAgJIAZAAIAAAJgAh+hoIAAgKIgaAAIAAgGIgNAAIgIAKIgJgFIAMgKIATAAIAAgPIA8AAIAAAcIAgAAIAAgXIAYAAIAGADQgIAIgPACIAAALIgJAHg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("ADWBZQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAIACAAIAABGgADBBZQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADAAIAABGgACtBZQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADAAIAABGgACZBZQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADAAIAABGgACGBZQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIACAAIAABGgAByBZQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIACAAIAABGgABfBZQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAIACAAIAABGgABKBZQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAgDIAAggIgJAAIAAgaIAJAAIAAgEQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADAAIAABGgAA3BZQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIACAAIAABGgAAjBZQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgDIAAggIgKAAIAAgaIAKAAIAAgEQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIACAAIAABGgAAQBZQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAgDIAAg+QAAAAAAAAQAAgBABAAQAAAAAAAAQABgBABAAIACAAIAABGgAgcBKIgBAAQgDgEgFgEIglAAIgKAAIgEgHIgCAAIgCgQIBTAAQADAfgUAAgAjDBFIAGgCIBYgQQAFABABADIhmATIACgFgAgCAzQgBgJgDgJIgWgLIAlAAIAAAdgAjPAcIAAgcIAAgFIhfAAQgYgHACgfIAFABIACAAIC2AAIAFgKQAMAGABAGIAkAAIAAANIjrAAQAGANAPAAIBYAAIBrAAIAAABIAAAJIhZAAIAAAlgAhcAWIACgJIAEgDIAZAAIAYAMgAlXALIAAgPIAAgXIAAgSQADgEAJgBIADAEIAAAhIAAAhIgBAAQgMAAgCgJgADiAUIgFgJIBHAAIABAAQAHADAAAGgABSALQAwgBAMgNIACgFIAAgBIAIAAQAAgHgCgHQgCgFgEgFQABgIgBgJIAGAAIAAAaIA/AAIAAAJIAAAGQgJgBgFgEQgFgEAAgFIgZAAIgEAJIgCAFIAHAAIAAABQADALAMAIgAhRgNIAAgOIAZAAIAAAUIgCAEIAIAAIAAAGIgIABQgBADgOgBIgCABIgGAAgAEkgYIAAgLIBFAAIAAALgAEIgYIAAgIIAFAAIAAAIgAlogbIAAgPIAFAAIAAAPgAg4ghIAAgRQABgKACgBIAAAJIAAAJIAAAFIAPAAIAAgFIAAgJIAAgIIAAgBIADAAIAAABIAAAIIAAAJIAAAFIANAAIAAgFIAAgJIAAgIIABgBIACAAIABAAIAAABIAAAIIAAAJIAAAFIANAAIAAgFIAAgJIAAgIIABgBIACAAIABAAIAAABIAAAIIAAAJIAAAFIALAAIAAgFIAAgJIAAgJIgFAAQgBgJADgFQAFALAPgBIBnAAIAAAHIgKAGIgFAAIAAAJIAAAFIANAAIAAgFIAAgJIAEAAIAAARIgBABIgBABgABigrIAAAFIANAAIAAgFIAAgJIgNAAgABRg8IAAAIIAAAJIAAAFIAOAAIAAgFIAAgJIgCgIIgNAAIABAAgABAg8IAAAIIAAAJIAAAFIAOAAIAAgFIAAgJIAAgIIAAAAIgOAAIAAAAgAAvgrIAAAFIAOAAIAAgFIAAgJIAAgIIABAAIgJAAIAAAIIgGAAgAAegrIAAAFIAOAAIAAgFIAAgJIgOAAgAAOgrIAAAFIANAAIAAgFIAAgJIgNAAgAC9hYIAOAAIAAATIgCAAQgMAAAAgTg");
	this.shape_1.setTransform(7.2,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQBPIAKAAQgBASAGAKQgLgDgEgZgABvBgIAAghIAAgcIAAgCQAOgCADgHIA5AAIBmAAIAkAAIAGAJIgBAZIgBAfIgEAEIAAg7QAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgDAAIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDAAIgDAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDAAIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgDAAIgCAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCAAIgDAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgDAAIgDAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDAAIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAIgDAAIgCAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgCAAIgDAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgDAAIgDAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAADIgKAAIAAgDQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIgDAAIgCAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIAAA+gAinBdQgLgcgegEIgCgIIBBAAQgKAGgBAMQACAMALAEIAwAAIAEAGIAAAAgABKBXQAUgBgDgfIAAgHIgcgNIgYgNIgYAAIgFAEIgCAJIAAAUIACARIgEAAIAAgEQgCgDgEgCIAAgZQAAgOAQgIQgFgIgLgBIAAgHIATAAIAAATIAGAAIACgBQAOABABgCIAJgBIAAAIIAVALIAWALQADAJABAIQAAAMgEAMgAiJA1IAMAAQgOAPAHAPQgLgGAGgYgAhcBBQgBgHgLgFIARACQADANgDAMIgGABQACgHgBgJgAlNBAIAAgJIAHAAIAAAJgAlMAdIAAgKIgHAAIhFAAIgpAAIgOAAIAAgPIDNAAIAAAPIgoAAIgbAAIAAAKgAjJAMQgSgBgHgLIAAgiIAEADQgBAfAXAGIBfAAIAAAGgAkCAEIAAgTIAGAAIAAATgAEQABIgHAAIACgCIAiAAQAFABAJABgAGKgBIAAgLIBGAAIAAALgAhpgBIAAgGIBpAAIAAAGgAFygEQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIAAgGIAFAAIAAAKIgBgCgAgPgbQgBgHgMgGIAFgKIAYAAIAHgGIAAgLIgRAAIAAAHIgIAAIgNgHIAIgHIAaAAIALgCIAAAlIAEAAIAAAMgAmZgiIAAgJIguAAIAAAJIgHAAIAAgQIA6AAIAAAQgADmgoIgHAAIAJgFIACAAIAAAFgABtg+QABgDADgCQAFAIAMABIgBAGIgBAAQgOAAgFgKgAi+g6IgBAAIAAgMIABgBIAcAAIABABIAAAMIgBAAgAi9g8IAaAAIAAgJIgaAAgAjChOIAAgTIAOgJIAWAEIAAAOIATAAIgNAKg");
	this.shape_2.setTransform(-3,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AEgBrIAAhFIADAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIAAA7IAAAGQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAgAEMBrIAAhFIACAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAgAD4BrIAAhFIADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgADkBrIAAhFIADAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAgADQBrIAAhFIADAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAaIAAAhIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgAC8BrIAAhFIADAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAaIAAAhIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAgACpBrIAAhFIACAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAgACVBrIAAhFIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAgACBBrIAAhFIADAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAABABIAAADIAAAaIAAAhIAAADQgBABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAgABtBrIAAhFIAEAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAAADIAAAaIAAAhIAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAgABaBrIAAhFIACAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAADIAAAaIAAAhIAAADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAgBAAgAlyBGIAAgJIAHAAIAAAJgAEvBAIgFAAIAAgZIBKAAIBiAAQAGAMAAANgAgUA9IAAgUIA1AAIAcANIAAAHgAlxAjIAAgKIAHAAIAAAKgAElAeIgkAAQgMgJgDgNIAAgBIArAAIAsAAIAAABIABACIABABIAEABQADAAACgCIACgEIAWAAIAAAYgAAUAOIAAgVIBMAAQAWALAvADIAzAAIAAABIgCAGgAGxgGIAAgLIAAgDIA7AAQACAGAAAIgAFVgGIAAgHIAAgJIAXAAIAAAFIAAALgAEdgGIAAgMIAwAAQACAAABAFIAAAHgAgJgJIAAgMIAAgMIAAgHQAQgBAHAKIAAAQIAAAGgAkbgJIAAgPIAAgDIAMAAIAAASgAntgJIAAgTIABAAIAHAAIAuAAIAFAAICSAAIAAAEIAAAPgADKgPIABgBIABgBIAAgRIAAgFIAKAAIACAIQABAIgBAIgAj1gYIAKgGIAVAAIAAgKIgUAAIgHgFIALgbIAGAAIAqAAIAJAGIgJAKIAAAEIAEAKIBrAAIAKgTIAOAHIgCAAIgEAKIgFAKIgFAKgAjdhAIAAAMIABAAIAbAAIACAAIAAgMIgCgBIgbAAIgBABgAC7gZIAAgJIAFAAIAIAAIAAAJgACqgZIAAgJIANAAIAAAJgACZgZIAAgJIAOAAIAAAJgACIgZIAAgJIAOAAIAAAJgAB3gZIAAgJIAGAAIAIAAIAAAJgABmgZIAAgJIAOAAIAAAJgABWgZIAAgJIANAAIAAAJgABFgZIAAgJIANAAIAAAJgAA0gZIAAgJIANAAIAAAJgAAjgZIAAgJIANAAIAAAJgAARgZIAAgJIAPAAIAAAJgABjg0QgMgBgEgIIAAgJIAWAAIAFAIIBVAAQAHADAAAFIAAACgAg0hEIAAgLQAPgCAIgIIAdAAIAAAFIgEAAIAAAOIgKAAIgKACgAhbhFIAAgcIAAgIIAKAAIAAAHIAuAAIAAAGIgYAAIAAAXgAiqhSIgSAAIAAgOIAFgEIANAAIAHgHIAMAAIAAAKIAAAPg");
	this.shape_3.setTransform(0,-3.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.4,-14.6,98.9,29.3);


(lib.枪1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AAKABIACAAIABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAIAAABIgJABgAgNAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIABgDIAHAFIgDABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAgMgFIADgBQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBABg");
	this.shape.setTransform(-9.5,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AgIAgIAAgBIABAAIADACIAAABIgCABQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAgBAAgAArACIABgCIAGAEIgBACIgCABQABgGgFABgAAEADQABgFgFABIAAgCIAAAAIAHADIAAACIgDABgAguggIABgBIAIgBIgFAGIgHAAg");
	this.shape_1.setTransform(-4.2,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhSBNIAJAAIACAGIgMADgAhBALIABgBIABABIABACIAAABgAhdgMIgGgHIAbAAIgMAHgAgMgSIACgBIADABIACADIgBACgAg4gXIABgBIACAAIABAAIADACIABACIgBACgAiTgeIAHglQAEgDAEgFIgIAtgABygvQAAgEgBgFIAjAAIAAAJgAhahHQAFACAAAEIgBAIIgFAAgAgqg6IAAgHIABAAIAAAAIADAHIAAAAgAg0g6IAAgHIAEAAIAAAHgAg+g6IAAgHIAEAAIAAAHgAhIg6IAAgHIAEAAIAAAHgAhSg6IAAgHIADAAIAAAHgAiEhLIABgCIADAAIAQAAIAOAAQAKgCAAgFIAvAAIAAAEIAAABIgrAAIgFAEIgBAAg");
	this.shape_2.setTransform(1.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiEBYIgBAAQgGgZANgZQAHgQAEgPIACgbQABgEAFgBIARAAIADALIADAAIgEgLIABAAIAEAGIAGAGIAJAAIAMgGIAAAEIgBAAIgKACIAOABIgFAiIgHA3IgBAIIgBADQgQABgQAAIghgBgAgyANIAAgBIAAgBQABAAAAAAQABABAAAAQAAAAAAABQAAABAAABIgCgCgAgiALIgJgFIgEgEQgBgEABgFQAEgGAFgCIAAACQgFADgBAEQgBAEABACQADAGAIAFgAACgNIgBgDIAAAAQAFgBgBAFIgDgBgAglgPQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIABgBQAGgBgBAHgAijgUQAFgIAYgFIABgCIAIgcIABgEIAAgBIgHAlIAHAAIADAAIAEAAIAHAAIADAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIAGAAIAEAAIADAAIAcAAIADgDIAYAAIAAADIBjAAIAAgDIAbAAIgBACIgMAAIAAAEIhyAAIimAAIgDACQgQgBgIAJIAAgCgAhbgwIAHgBIgBACIgDADIgEACQgCAAADgGgAhthCIABAAIAAgBIAHAHIgBABgAgahCIgGAAIgEAAIgGAAIgEAAIgGAAIgEAAIgGAAIgEAAIgDAAQAAgEgEgBIABgFIAEgDIArAAIAAANgAAchFIAEgGICEAAIAAAGgAhvhOIAAgKIAHAAQAIABACAGIgCADgACPhSQALgIADAIg");
	this.shape_3.setTransform(0,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ag1ARIgOgBIAKgCIABAAIASAAQgFACgEAGQgBAEABAHIAEADIAAAJQgDAEgGACIgGACgAgyAqIAAABIAAABIACABIACgBIAAAAIABgBIgBgCIgCgBIgBABIgBAAIAAABgAihALQgBABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAIgIAQAAIADgCICmAAIAAADQgPAEgDANIgFAAIgFAAIgCAAQAAgFgHgEIgTAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAAAABIgJAAIACAAIADgCIAAgCIABgCIgBgCIgDgCIgBAAIgCAAIgwAAIgBAAIgCAAIgRAAQgFABgBADIgCAdQgEgkgqAKgAACAKIgBACIAAABIABADIADABIACgBIABgBIABgCIgCgDIgCgBIgDABgAgRgRIgDgHIgBgCIAzAAIBjAAQABAFAAAEgAgZgjIAAAAIAAgOIAAgBIA4AAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIBoAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIAAgDIADAAIAOAAIACAAIAFAFIAAADIiEAAIgEAGIgDADg");
	this.shape_4.setTransform(0,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiQBdQgEAAABgMQAhADAggDIAAgDIAMgDIAEAIQADAIgMACgAhRBGIAIg3IAFgCIAAAUQgFAdABAIgAgmACQgPgEAAgSIAAgCIgSAAIAAgEIgbAAIgEgGIAwAAIgCABIAAABIgBACIAAABQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABAAQAAAAABABQAAAAABAAQAAAAABAAIAAAAIABAAIgCAAIAJAAQgBARAJAFQAAAAABAAQAAABAAAAQAAAAgBAAQAAABgBAAIgBAAgAhmgVIgDgLIABAAIAEALgAAOggIAAgDIByAAIAAADgAgrgmIAFgZIgEAAIgEAZIgHAAIAFgZIgEAAIgEAZIgHAAIAFgZIgEAAIgEAZIgGAAIAEgZIgEAAIgEAZIgGAAIAEgZIgEAAIAAABIgEAYIgGAAIAEgZIgDAAIgBAHIAAAAIgBADIgDAPIgGAAIACgPIAAgBIABgCIAEgFIABAAQAAgBAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgUgNQgJgCgEAIQgBAEABADIABACQACACAEACIABABIARAAIgDAEQgEAKAHgGIgCANIgGAAIADgRIAAgBIgEAAIgDASIgGAAIADgUIgDAAIgEAUIgGAAIADgVIgDAAIgEAVIgDAAIAIgtIAqAAIABAAIgBAFIgBANIAFAAIABgIIADAAIAAAHIADAAIAAgHIAHAAIAAAHIADAAIAAgHIAHAAIAAAHIADAAIAAgHIAHAAIAAAHIADAAIAAgHIAHAAIAAAHIADAAIAAAAIgCgGIAyAAIgCADIAHAGIgzAAIAAACIgEAXgABzgpIAAgNIAiAAQgFAEgCAJgAAShVQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAIBrAAIABgCIABAAIAAADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAgAhwhVIACgDIAPAAQAFgBADgDQgBAFgJACg");
	this.shape_5.setTransform(1.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("Ag8AlQAGgDADgDIAAgJIAJAGIABAAIAiAAQAAAAABgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAgSIAEAAIAAAXQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIgpAAQgQAAAFAWQgCACgDABgAAXgPIAAgCIgXAAIgCACIgeAAIAEgXIADAHICTAAIAAANIAAADgAgngPIAFgZIADAAIgEAZgAgxgPIAFgZIADAAIgEAZgAg7gPIAFgZIADAAIgEAZgAhFgPIAFgZIADAAIgEAZgAhPgPIAFgYIAAgBIAEAAIgFAZgAhZgPIADgPIACgCIAAAAIABgIIADAAIgFAZgAhjgPIADgNIADgDIABABIgDAPgAhtgPIAEgSIADABIAAABIgDAQgAh2gPIADgUIAEABIgEATgAiBgPIAEgVIAEAAIgEAVgAiagpQgCgJAFgBQAGAFAMgBIgIAcQgDgNgKgJgAhxgkIgCgBQgDgBgCgDIgBgBQgBgDABgFQAEgHAIABIAUAOIgBAAIgCAAIgEAFIAAABgAh0gyIAAAAIgBABIgBADQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIADgBIABgBIABgCQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDABgAB5goIhjAAIgGgGIABgDIADgEICIAAIAAANg");
	this.shape_6.setTransform(0.8,-2.2);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.5,-9.5,33,19);


(lib.火光 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFCC00","rgba(255,204,0,0)"],[0,1],0,0,0,0,0,45).s().p("Ak8A4QiFgYAAggQAAggCFgXQCDgYC5AAQC6AACDAYQCFAXAAAgQAAAgiFAYQiDAYi6AAQi5AAiDgYg");
	this.shape.setTransform(0,0,1,1,0,0,0,-45,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8,90,16);


(lib.grenade = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AAbBJQASgtgXg5IADgFQAWA3gPA0gAAQgtIgKgSQAFANgKACIgUAAQABgHAFgFQAFgEAFgCIADAEQABgCAFABIAFABQAHAMAFALIgCAFIgFgLgAgfgwQACgOgIgKIAhAAIAAACQgHADgEAEQgHAHgBAIg");
	this.shape.setTransform(1.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgRASQgIgIAAgKIAAAAIABgCQABgJAGgGQAFgFAGgCIAGgBIABAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAIgBAAIgEABQgGACgEAEQgFAFgBAHIgBACIAAAAQAAAJAHAGQAGAHAIAAQAJAAAGgHIAEgFIACgFIABgFQAAgIgHgGIgEgEIgIgCIAAgEIAFABQAGABAEAFQAIAIAAAJQAAAFgDAFIgCAFIgDADQgIAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(1.3,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAADIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIAAAAIABACIAAACIgBABg");
	this.shape_2.setTransform(1.5,-7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgEARIAAgCIAUAAQAKgDgFgMIAKARgAgSARIACgCIAIAAIAAACgAAaAAIgFAAQgFAAgDAAIgDgBIAGgBIACAAIgCACIACAAIABgBIAIABIABAAIgCAAgAAUgGIgCgCIgCAAIACACIgCAAIgHABIAAgDIgfAAQgDgCgCAEQgFgEAFgFQAVgEAXAEQAEAFADAGIgEgCg");
	this.shape_3.setTransform(-0.4,-7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E7E62").s().p("AALA5IAGgSIAJAAIgCAGIAAABIgHALgAgGA5IgDgSIATAAIgDASgAgRA5IgGgLIAAAAIgCgHIAJAAIAGASgAATAeIADgPIAPAAIgFAPgAgKAeIgCgPIAZAAIgCAPgAggAeIgEgPIAPAAIADAPgAAXAGIABgOIARAAIgCAOgAgNAGIgBgOIAcAAIAAAOgAgmAGIgBgOIAQAAIAAAOgAAYgRIgBgQIAOAAIADAQgAgOgRIACgQIAZAAIABAQgAgngRIADgQIAPAAIgCAQgAAUgrIgDgOIAKAAIABAAIAGAOgAgLgrIACgOIATAAIACAOgAghgrIAGgOIAKAAIgDAOg");
	this.shape_4.setTransform(-0.3,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4826").s().p("AASBCIAGgLIAAgBIACgGIgJAAIgGASIgEAAIADgSIgTAAIADASIgEAAIgGgSIgIAAIACAHIAAAAIAGALIgEAAIgKgSIADAAIgEgJIANAAIgDgPIgPAAIgCgJIAQAAIgBgPIgQAAIAAgIIAQAAIACgQIgPAAIAEgKIgGAAIAHgMIABgCIADAAIgFAOIAMAAIADgOIgKAAIACgDIACgEIABgDIADgIIAnAAIAEAIIABADIACAHIgJAAIADAOIANAAIgFgOIACAAIABACIAHAMIgFAAIAEAKIAFAAIAAABIACAOIAAABIgFAAIABAIIAFAAIAAAAQAAAHgCAIIgFAAIACgPIgRAAIgBAPIAQAAIgCAJIAFAAIAAABQgDAHgEAHIgDAAIAFgPIgPAAIgDAPIANAAIgEAJIADAAIgKASgAgKAnIAWAAIABgPIgZAAIACAPgAgNAPIAbAAIAAgPIgbAAIAAAPgAAYgIIAQAAIgCgQIgPAAIABAQgAgNgIIAbAAIgBgQIgZAAIgBAQgAgLgiIAXAAIgCgOIgTAAIgCAOgAgiAnQgEgHgDgHIAAgBIAFAAIAFAPgAAnAPgAgrAPQgCgIAAgHIAAAAIAGAAIABAPgAgsgIIAAgBIACgOIAAgBIAGAAIgDAQgAgkgYg");
	this.shape_5.setTransform(-0.4,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6C71B").s().p("AgTAEIAFgHIAdAAIAFAHg");
	this.shape_6.setTransform(-0.3,-5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-8.8,10,17.7);


(lib.dagger = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#666666","#CCCCCC"],[0,1],0.6,-8.5,-0.3,-8.5).s().p("AgFAGIAEgKIABgBIAAAAQAGADAAACQAAAEgJACg");
	this.shape.setTransform(-8.1,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#CCCCCC"],[0,1],1,-8.2,-0.2,-8.2).s().p("AACAGQgHgFAAgGIALAAIgDALg");
	this.shape_1.setTransform(-20.3,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AA1AGIADgLIABAAIgDALgAAyAGIADgLIACAAIgEALgAAwAGIADgLIABAAIgDALgAAtAGIADgLIACAAIgEALgAAqAGIAEgLIABAAIgDALgAAoAGIADgLIABAAIgDALgAAlAGIAEgLIABAAIgDALgAAjAGIADgLIABAAIgDALgAAgAGIAEgLIABAAIgDALgAAeAGIADgLIABAAIgDALgAAbAGIAEgLIABAAIgDALgAAZAGIADgLIABAAIgDALgAAWAGIAEgLIABAAIgDALgAAUAGIADgLIABAAIgDALgAARAGIAEgLIABAAIgDALgAAPAGIADgLIABAAIgDALgAAMAGIAEgLIABAAIgDALgAAKAGIADgLIABAAIgDALgAAHAGIAEgLIABAAIgDALgAAFAGIADgLIABAAIgDALgAACAGIADgLIACAAIgEALgAAAAGIADgLIABAAIgDALgAgBAGIABgLIACAAIgCALgAgDAGIADgLIAAAAIgCALgAgGAGIADgLIACAAIgEALgAgIAGIADgLIABAAIgDALgAgLAGIADgLIACAAIgEALgAgOAGIAEgLIABAAIgDALgAgQAGIADgLIACAAIgEALgAgTAGIAEgLIABAAIgDALgAgVAGIADgLIABAAIgDALgAgYAGIADgLIACAAIgEALgAgaAGIADgLIABAAIgDALgAgdAGIADgLIACAAIgEALgAgfAGIADgLIABAAIgDALgAgiAGIADgLIACAAIgEALgAgkAGIADgLIABAAIgDALgAgnAGIADgLIACAAIgEALgAgpAGIADgLIABAAIgDALgAgsAGIADgLIACAAIgEALgAguAGIADgLIABAAIgDALgAgxAGIADgLIACAAIgEALgAgzAGIADgLIABAAIgDALgAg2AGIADgLIACAAIgEALgAg4AGIADgLIABAAIgDALg");
	this.shape_2.setTransform(-14.1,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#999999","#CCCCCC"],[0,1],12.5,0,-12.6,0).s().p("Ah6AaIAAgwIARAAQACAAACgDIAGAAQAAAIAKAFIABAAIAAAAIACAAIABAAIABAAIACAAIABAAIABAAIABAAIACAAIABAAIABAAIACAAIABAAIABAAIABAAIABAAIACAAIABAAIABAAIACAAIABAAIABAAIABAAIABAAIACAAIABAAIABAAIACAAIABAAIABAAIABAAIABAAIACAAIABAAIACAAIABAAIABAAIABAAIABAAIABAAIACAAIACAAIABAAIABAAIABAAIABAAIABAAIACAAIABAAIACAAIAAAAIACAAIABAAIABAAIACAAIABAAIACAAIAAAAIABAAIACAAIABAAIACAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIACAAIABAAIACAAIABAAIABAAIABAAIABAAIABAAIACAAIACAAIABAAIABAAIABAAIABAAIABAAIACAAQALgDAAgEIBVAOQghALgsACIiKAAQgCAJACAJgAAzgIQgCACAAADQAAAAABABQAAABAAAAQAAABABAAQAAAAAAAAQACACADAAIAJAAQADAAACgCQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgDgCgCQgCgCgDAAIgJAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBABg");
	this.shape_3.setTransform(-11.3,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgCA6QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAgBAAAAIAAggIAAgrIAAggQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIACgBIAEABIABAEIAAAeIAAAvIAAAeIgBAEIgEABIgCgBg");
	this.shape_4.setTransform(-24.2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#999999","#333333"],[0,1],18.6,4.5,18.6,-2.4).s().p("Ag9AWIABgBQAFgEAAgGIAAgVQAAgGgFgEIgBgBIB6AAIAAArg");
	this.shape_5.setTransform(-30.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#999999","#000000"],[0,1],0,0,0,0,0,4.3).s().p("AgLAZQgGAAgFgEQgEgEAAgGIAAgVQAAgGAEgEQAFgEAGAAIAWAAQAGAAAFADIABABQAEAEAAAGIAAAVQAAAGgEAEIgBABQgFADgGAAgAgPgOQgDADAAAFIAAAOQAAAEADADQADADAFAAIAPAAQAEAAADgDIABAAQADgDAAgEIAAgOQAAgFgDgDIgBAAQgDgDgEAAIgPAAQgFAAgDADg");
	this.shape_6.setTransform(-39.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#666666","#999999"],[0,1],12.8,-13.6,-3.3,-13.6).s().p("Ah1ARQgDgCgEAAQgCgJACgHICKAAQAsgCAhgNIAjABQgqAfg5ABg");
	this.shape_7.setTransform(-8.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("Ah5AcIgBgCICQAAQA5gBAqgfIACAAQgqAhg7ABgABWgHIhVgOQAAgDgFgDIB9AVgAgMgOIADgMIACAAIgEAMgAgOgOIADgMIABAAIgDAMgAgRgOIAEgMIAAAAIgCAMgAgUgOIAEgMIABAAIgEAMgAgWgOIADgMIABAAIgDAMgAgYgOIACgMIACAAIgDAMgAgbgOIADgMIACAAIgEAMgAgegOIADgMIACAAIgEAMgAgggOIADgMIABAAIgDAMgAgigOIADgMIABAAIgDAMgAgmgOIAEgMIACAAIgEAMgAgogOIADgMIABAAIgDAMgAgqgOIADgMIABAAIgDAMgAgtgOIAEgMIABAAIgDAMgAgwgOIAEgMIACAAIgEAMgAgxgOIACgMIABAAIgDAMgAg0gOIADgMIABAAIgDAMgAg3gOIAEgMIABAAIgEAMgAg6gOIAEgMIACAAIgEAMgAg8gOIADgMIABAAIgCAMgAg/gOIAEgMIABAAIgDAMgAhBgOIAEgMIABAAIgEAMgAhDgOIADgMIABAAIgDAMgAhGgOIADgMIABAAIgCAMgAhJgOIAEgMIABAAIgEAMgAhLgOIADgMIACAAIgEAMgAhNgOIACgMIACAAIgDAMgAhQgOIAEgMIAAAAIgDAMgAhTgOIAEgMIABAAIgEAMgAhVgOIADgMIABAAIgDAMgAhYgOIADgMIACAAIgDAMgAhagOIADgMIABAAIgDAMgAhdgOIADgMIACAAIgEAMgAhfgOIADgMIABAAIgDAMgAhigOIAEgMIABAAIgDAMgAhkgOIADgMIABAAIgDAMgAhngOIADgMIACAAIgEAMgAhpgOIADgMIABAAIgDAMgAhsgOIAEgMIABAAIgDAMgAhugOIADgMIABAAIgDAMgAhxgOIADgMIACAAIgEAMgAhzgOIADgMIABAAIgDAMgAh2gOIAEgMIABAAIgEAMgAh5gOIAEgMIABAAIgDAMg");
	this.shape_8.setTransform(-7.6,0);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.1,-5.9,46.9,12);


(lib.弹夹4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgcBCIAMgBQgeg+gGhDIADAAQAHBEAdA9IAPgBQgZhAgHhCIADgBQAHBCAZBAIAZgDQgXg3gJhKIADAAQAKBLAXA2QANgCAFgDIABAFQgZAHg1ADg");
	this.shape.setTransform(0.5,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#666666"],[0,1],-4.2,-0.3,4.3,0.3).s().p("AgngDIBLgHQAFABABAMIgVACIgEABIgXACIgDAAIgUACIgDABIgIAAQgDgMAEgCg");
	this.shape_1.setTransform(-1.6,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#333333","#666666"],[0,1],50.4,-10.2,51.2,0.6).s().p("Ag4g8IAJgBQAGBDAeA+IgMABQgXg6gKhHgAgsg9IATgCQAHBCAZBAIgPABQgdg9gHhEgAgWhAIAXgCQALBKAXA3IgZADQgZhCgHhAgAAGhCIAVgCQAHA+AXBAQgFADgNACQgXg2gKhLg");
	this.shape_2.setTransform(0,0.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-7.9,11.7,15.9);


(lib.弹夹3 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAfBhQhbhPgWhyIAAgKIBOAAIAAAKQAOBTA/A3IAKAJQgTAUgVAkIgMgKgAAgBeIAGgLQhThKgVhpIgKAAQATBwBZBOgAAoBRIAGgJQhPhHgUhhIgIAAQAUBnBRBKgAAvBFIAFgHQhIg/gShfIgKAAQASBgBNBFgAA3A8IAGgHQhFg8gQhZIgJAAQAQBdBIA/gABAAyIAGgGQhBg5gOhTIgLAAQAQBXBEA7g");
	this.shape.setTransform(-0.5,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAmByQAVgkATgVIAKAIQgVAZgTAhIgKgJgAhRhZIAKAAQAVBoBTBLIgGALQhZhOgThwgAhChZIAIAAQAUBhBPBHIgGAJQhRhKgUhngAg1hZIAKAAQASBdBIBBIgFAHQhNhFgShggAgmhZIAJAAQAQBYBFA9IgGAHQhIhBgQhbgAgZhZIALAAQAOBTBBA5IgGAGQhEg7gQhXgAhXhjIAAgIQBHgcAHAcIAAAIg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.8,-12.3,17.7,24.6);


(lib.弹夹2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgsgCQgGgZgDgdIAHgCIAAABQAAAbAFAcQAGAlAQAnQgQgkgJgogAgngCQgFgcAAgbIAAgBIAIgCIAAABQAAAdAGAcQAHAmAPAjIgJACQgPgmgHglgAgcgCQgFgcgBgdIAAgCIASgDIAAABQABAgAFAdQAHAjANAjIgPADQgQgkgHglgAgHgCQgGgegBgfIAAgBIAXgEIAAABQABAiAGAfQAHAhAOAcIgYAIQgNgigHgjgAAnA7IAAAAQgOgdgGggQgHgfAAgjIAAgBIAUgEIgBAIIAAAEIAAAIIAAAEIAAABQAAAWAFAYQAGAZAMAeIgOAGg");
	this.shape.setTransform(0,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgVBOQgQgkgJgqQgHgZgCgcIgBgJIBbgQIAAAJIgCAJQgBAbAHAhQAGAZAMAfIAAAAIgBABIAAAAQgeAPgvAHgAg1g2QADAeAGAYQAJAoAQAkQgQgmgGgmQgFgbAAgcIAAgBgAgsg4IAAABQAAAcAFAbQAHAmAPAlIAJgBQgPgkgHgmQgGgbAAgeIAAgBgAgig6IAAABQABAeAFAbQAHAmAQAjIAPgDQgNgigHgkQgFgdgBgfIAAgBgAgOg+IAAABQABAgAGAdQAHAjANAiIAYgHQgOgdgHghQgGgfgBgiIAAgBgAAMhDIAAABQAAAjAHAfQAGAgAOAdIAAAAIABAAIAOgGQgMgegGgZQgFgYAAgWIAAgBIAAgDIAAgJIAAgEIABgHg");
	this.shape_1.setTransform(0,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-7.9,11.5,16);


(lib.弹夹1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AghAtIAAgHIACAAIA4AAIACAAIAAAHgAgQAdQgCgEAFgDIAoAAIgBAIgAgOAQQgCgFAEgCIAoAAIgBAHgAgMACQgDgCAFgDIAoAAIgBAFgAgLgJQgCgFAEgDIAoAAIgBAIgAgJgXQgDgFAFgCIAoAAIgBAHgAgHgkQgDgFAEgDIAoAAIgBAIg");
	this.shape.setTransform(0,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AggAzIAKhYQAwgaAHAaIAAAHIgoAAQgEACACAFIApAAIgBAGIgnAAQgFADACAFIApAAIAAAGIgoAAQgFACADADIApAAIgBAGIgoAAQgFADADAFIAqAAIgCAGIgnAAQgFADADAEIApAAIgBAGIgoAAQgEADACAFIApAAIgBAIg");
	this.shape_1.setTransform(0.1,-0.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.5,7,11);


(lib.point = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AgSATIAAglIAlAAIAAAlg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.ParentHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.head = new lib.Head();

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:7.8,regY:-10.1,x:7.9,y:-10},0).wait(1).to({x:8,y:-9.9},0).wait(1).to({x:8.1,y:-9.8},0).wait(1).to({x:8.2,y:-9.7},0).wait(1).to({x:8.3,y:-9.6},0).wait(1).to({x:8.4,y:-9.5},0).wait(1).to({x:8.5,y:-9.4},0).wait(1).to({x:8.6,y:-9.3},0).wait(1).to({x:8.7,y:-9.2},0).wait(1).to({x:8.8,y:-9.1},0).wait(1).to({x:8.7,y:-9.2},0).wait(1).to({x:8.6,y:-9.3},0).wait(1).to({x:8.5,y:-9.4},0).wait(1).to({x:8.4,y:-9.5},0).wait(1).to({x:8.3,y:-9.6},0).wait(1).to({x:8.2,y:-9.7},0).wait(1).to({x:8.1,y:-9.8},0).wait(1).to({x:8,y:-9.9},0).wait(1).to({x:7.9,y:-10},0).wait(1).to({x:7.8,y:-10.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,-28.4,29.4,30.9);


(lib.ParentBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.body = new lib.Body();

	this.timeline.addTween(cjs.Tween.get(this.body).wait(1).to({regX:-0.4,regY:-24.6,scaleX:1,x:-0.3,y:-24.6},0).wait(1).to({scaleX:1.01,x:-0.2},0).wait(1).to({scaleX:1.01,x:-0.1},0).wait(1).to({scaleX:1.02,x:0},0).wait(1).to({scaleX:1.03,x:0.1},0).wait(1).to({scaleX:1.03,x:0.2},0).wait(1).to({scaleX:1.04,x:0.3},0).wait(1).to({scaleX:1.04,x:0.4},0).wait(1).to({scaleX:1.05,x:0.5},0).wait(1).to({scaleX:1.05,x:0.6},0).wait(1).to({scaleX:1.05,x:0.5},0).wait(1).to({scaleX:1.04,x:0.4},0).wait(1).to({scaleX:1.04,x:0.3},0).wait(1).to({scaleX:1.03,x:0.2},0).wait(1).to({scaleX:1.03,x:0.1},0).wait(1).to({scaleX:1.02,x:0},0).wait(1).to({scaleX:1.01,x:-0.1},0).wait(1).to({scaleX:1.01,x:-0.2},0).wait(1).to({scaleX:1,x:-0.3},0).wait(1).to({scaleX:1,x:-0.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-60,43,67.3);


(lib.Leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,standAdvance:22,standAdvance2:25,ad1:31,ad2:40,standRetreat:44,standRetreat2:47,re2:53,re1:62,squat:66,squatGo:88,jump:105,jump2:124,landing:143,weak:158});

	// timeline functions:
	this.frame_21 = function() {
		this.gotoAndPlay("stand");
	}
	this.frame_43 = function() {
		/* gotoAndPlay("standAdvance2");*/
	}
	this.frame_65 = function() {
		this.gotoAndPlay("standRetreat2");
	}
	this.frame_87 = function() {
		this.gotoAndPlay("squat");
	}
	this.frame_104 = function() {
		this.gotoAndPlay("squatGo");
	}
	this.frame_142 = function() {
		this.gotoAndPlay("jump2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(21).call(this.frame_21).wait(22).call(this.frame_43).wait(22).call(this.frame_65).wait(22).call(this.frame_87).wait(17).call(this.frame_104).wait(38).call(this.frame_142).wait(29));

	// 标尺
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgtAAIBbAA");
	this.shape.setTransform(0,-30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(171));

	// 右腿
	this.ikNode_719 = new lib.Leg1();
	this.ikNode_719.setTransform(0.1,0.1,0.999,0.998,-4);

	this.ikNode_796 = new lib.Leg2();
	this.ikNode_796.setTransform(2.2,34.8,0.998,0.999,0,22.2,22.3);

	this.ikNode_797 = new lib.Foot();
	this.ikNode_797.setTransform(-12.4,73.7,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.2,y:34.8,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.998,rotation:-4,scaleX:0.999}}]}).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:34.9,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.2,y:0.2,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:34.9,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.3,y:0.3,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.4,y:0.4,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.5,y:0.5,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35.1,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.6,y:0.6,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.2,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.7,y:0.7,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.2,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.8,y:0.8,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.5,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.3,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.9,y:0.9,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.5,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:1.9,y:35.4,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:1,y:1,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.5,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:1.9,y:35.5,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:1.1,y:1.1,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.5,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:1.9,y:35.4,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:1,y:1,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.5,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.3,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.9,y:0.9,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.2,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.8,y:0.8,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2,y:35.2,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.7,y:0.7,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35.1,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.6,y:0.6,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.6,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.5,y:0.5,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:35,skewX:22.3,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.4,y:0.4,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:34.9,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.3,y:0.3,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:34.9,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.2,y:0.2,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.2,y:34.8,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.2,y:34.8,skewX:22.2,scaleX:0.998,rotation:0,skewY:22.3}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.998,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.2,y:34.8,skewX:0,scaleX:0.999,rotation:22.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:67.9,rotation:20.4,x:-16.6}},{t:this.ikNode_796,p:{x:7.3,y:34.1,skewX:0,scaleX:0.999,rotation:37,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-12.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:59.3,rotation:40.7,x:-19.5}},{t:this.ikNode_796,p:{x:12.3,y:32.6,skewX:0,scaleX:0.999,rotation:51.6,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-21.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:48.2,rotation:61.1,x:-20.4}},{t:this.ikNode_796,p:{x:17,y:30.4,skewX:0,scaleX:0.999,rotation:66.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-29.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:54.8,rotation:48.9,x:-7}},{t:this.ikNode_796,p:{x:23,y:26.1,skewX:0,scaleX:0.999,rotation:48,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-42,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:57.3,rotation:36.8,x:8.5}},{t:this.ikNode_796,p:{x:27.9,y:20.7,skewX:0,scaleX:0.999,rotation:29.7,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-54.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:55.2,rotation:24.6,x:24.8}},{t:this.ikNode_796,p:{x:31.6,y:14.3,skewX:0,scaleX:0.999,rotation:11.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-66.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:59.9,rotation:9.5,x:30.3}},{t:this.ikNode_796,p:{x:29.4,y:18.5,skewX:0,scaleX:0.999,rotation:0.6,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-58.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.8,rotation:-5.7,x:35.2}},{t:this.ikNode_796,p:{x:26.7,y:22.3,skewX:0,scaleX:0.999,rotation:-10.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-50.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.8,rotation:-20.8,x:39.3}},{t:this.ikNode_796,p:{x:23.4,y:25.8,skewX:0,scaleX:0.999,rotation:-20.9,skewY:0}},{t:this.ikNode_719,p:{x:0.2,y:0.1,scaleY:0.999,rotation:-43.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:69.4,rotation:-13.8,x:27.5}},{t:this.ikNode_796,p:{x:19.3,y:28.9,skewX:0,scaleX:0.999,rotation:-9.6,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-34.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:72.7,rotation:-6.8,x:14.9}},{t:this.ikNode_796,p:{x:14.8,y:31.5,skewX:0,scaleX:0.999,rotation:1.7,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-26.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0.2,x:2}},{t:this.ikNode_796,p:{x:10,y:33.3,skewX:0,scaleX:0.999,rotation:13,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-17.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:72.5,rotation:7.8,x:-10}},{t:this.ikNode_796,p:{x:5.4,y:34.4,skewX:0,scaleX:0.999,rotation:23.8,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-9.8,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:69.4,rotation:15.4,x:-21.6}},{t:this.ikNode_796,p:{x:0.7,y:34.7,skewX:0,scaleX:0.999,rotation:34.6,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-1.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.3,rotation:22.9,x:-32.4}},{t:this.ikNode_796,p:{x:-4,y:34.5,skewX:0,scaleX:0.999,rotation:45.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:5.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:55.7,rotation:48.8,x:-42}},{t:this.ikNode_796,p:{x:-7,y:34,skewX:0,scaleX:0.999,rotation:59.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:10.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:45.5,rotation:74.7,x:-49.3}},{t:this.ikNode_796,p:{x:-10,y:33.2,skewX:0,scaleX:0.999,rotation:74.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:16,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:34.2,rotation:100.6,x:-53.9}},{t:this.ikNode_796,p:{x:-12.9,y:32.1,skewX:0,scaleX:0.999,rotation:89,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:21,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:42,rotation:87.4,x:-43.3}},{t:this.ikNode_796,p:{x:-2.8,y:34.6,skewX:0,scaleX:0.999,rotation:81.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:4.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:46.6,rotation:74.3,x:-32}},{t:this.ikNode_796,p:{x:7.3,y:33.9,skewX:0,scaleX:0.999,rotation:73.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-12.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:48.2,rotation:61.1,x:-20.4}},{t:this.ikNode_796,p:{x:17,y:30.4,skewX:0,scaleX:0.999,rotation:66.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-29.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.2,y:34.7,skewX:0,scaleX:0.999,rotation:22.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:74.2,rotation:0.1,x:-7.5}},{t:this.ikNode_796,p:{x:4.8,y:34.4,skewX:0,scaleX:0.999,rotation:19.1,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-8.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:74.2,rotation:0.2,x:-2.6}},{t:this.ikNode_796,p:{x:7.4,y:33.8,skewX:0,scaleX:0.999,rotation:15.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-12.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.9,rotation:0.3,x:2.3}},{t:this.ikNode_796,p:{x:9.9,y:33.1,skewX:0,scaleX:0.999,rotation:12.6,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.999,rotation:-17.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:72.9,rotation:-6.4,x:15.3}},{t:this.ikNode_796,p:{x:14.6,y:31.3,skewX:0,scaleX:0.999,rotation:0.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-25.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:69.4,rotation:-13,x:28}},{t:this.ikNode_796,p:{x:18.9,y:28.9,skewX:0,scaleX:0.999,rotation:-10.7,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-33.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.6,rotation:-19.7,x:40}},{t:this.ikNode_796,p:{x:22.8,y:25.9,skewX:0,scaleX:0.999,rotation:-22.4,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-42.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.7,rotation:-5,x:35.8}},{t:this.ikNode_796,p:{x:26.3,y:22.4,skewX:0,scaleX:0.999,rotation:-11.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-50.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:59.9,rotation:9.7,x:30.7}},{t:this.ikNode_796,p:{x:29.1,y:18.4,skewX:0,scaleX:0.999,rotation:-0.1,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-58.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:55.1,rotation:24.4,x:25}},{t:this.ikNode_796,p:{x:31.4,y:14.1,skewX:0,scaleX:0.999,rotation:11,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-66.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:57.1,rotation:37,x:8.9}},{t:this.ikNode_796,p:{x:27.9,y:20.3,skewX:0,scaleX:0.999,rotation:29.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-54.7,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:54.6,rotation:49.5,x:-6.5}},{t:this.ikNode_796,p:{x:23,y:25.6,skewX:0,scaleX:0.999,rotation:47.6,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-42.8,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:48,rotation:62.1,x:-19.9}},{t:this.ikNode_796,p:{x:17.3,y:29.8,skewX:0,scaleX:0.999,rotation:65.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-31,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:46.6,rotation:75.2,x:-31.5}},{t:this.ikNode_796,p:{x:7.7,y:33.5,skewX:0,scaleX:0.999,rotation:73.6,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-13.8,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:42,rotation:88.2,x:-43.2}},{t:this.ikNode_796,p:{x:-2.6,y:34.3,skewX:0,scaleX:0.999,rotation:81.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:3.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:34.2,rotation:101.3,x:-53.9}},{t:this.ikNode_796,p:{x:-12.6,y:31.9,skewX:0,scaleX:0.999,rotation:89.1,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:20.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:45.4,rotation:75.3,x:-49.3}},{t:this.ikNode_796,p:{x:-9.9,y:32.9,skewX:0,scaleX:0.999,rotation:74.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:15.8,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:55.5,rotation:49.4,x:-42.1}},{t:this.ikNode_796,p:{x:-7.1,y:33.6,skewX:0,scaleX:0.999,rotation:59.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:11.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.1,rotation:23.4,x:-32.7}},{t:this.ikNode_796,p:{x:-4.4,y:34.1,skewX:0,scaleX:0.999,rotation:45.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:6.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:69.4,rotation:15.7,x:-21.7}},{t:this.ikNode_796,p:{x:0.4,y:34.4,skewX:0,scaleX:0.999,rotation:34.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-1.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:72.6,rotation:8,x:-10}},{t:this.ikNode_796,p:{x:5.3,y:34.1,skewX:0,scaleX:0.999,rotation:23.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-9.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.9,rotation:0.3,x:2.2}},{t:this.ikNode_796,p:{x:9.9,y:33.1,skewX:0,scaleX:0.999,rotation:12.6,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-17.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.7,y:28.7,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.8,y:28.7,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.2,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.8,y:28.8,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.3,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.9,y:28.9,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.3,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20,y:28.9,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.5,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20,y:29,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.6,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.1,y:29.1,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.7,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.2,y:29.1,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.8,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.2,y:29.2,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.8,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.3,y:29.3,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.9,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.4,y:29.4,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:1.1,y:0.2,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.3,y:29.3,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.9,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.2,y:29.2,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.8,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.1,y:29.1,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.8,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20.1,y:29.1,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.7,y:0.1,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:20,y:29,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.6,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:19.9,y:28.9,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.5,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:19.9,y:28.9,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.3,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:19.8,y:28.8,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.3,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:19.7,y:28.7,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.2,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.6,y:28.6,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.6,y:28.6,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21.1}},{t:this.ikNode_796,p:{x:19.7,y:28.7,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:23.6,rotation:58.4,x:-19.9}},{t:this.ikNode_796,p:{x:21.4,y:27.4,skewX:0,scaleX:0.999,rotation:97,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-38.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:25.8,rotation:44.1,x:-18.4}},{t:this.ikNode_796,p:{x:23,y:26.1,skewX:0,scaleX:0.999,rotation:92.1,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-42,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:27.9,rotation:29.8,x:-16.8}},{t:this.ikNode_796,p:{x:24.5,y:24.6,skewX:0,scaleX:0.999,rotation:87.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-45.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:30,rotation:15.5,x:-14.9}},{t:this.ikNode_796,p:{x:25.9,y:23.1,skewX:0,scaleX:0.999,rotation:82.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-48.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:35.2,rotation:11.6,x:-7.3}},{t:this.ikNode_796,p:{x:30,y:17.4,skewX:0,scaleX:0.999,rotation:66.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-60.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:38.3,rotation:7.7,x:1.9}},{t:this.ikNode_796,p:{x:32.9,y:10.9,skewX:0,scaleX:0.999,rotation:50.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-72.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:38.9,rotation:3.7,x:12.1}},{t:this.ikNode_796,p:{x:34.4,y:4,skewX:0,scaleX:0.999,rotation:34.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-84,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:36.5,rotation:-0.2,x:22.6}},{t:this.ikNode_796,p:{x:34.5,y:-2.9,skewX:0,scaleX:0.999,rotation:18.6,skewY:0}},{t:this.ikNode_719,p:{x:0,y:-0.1,scaleY:0.999,rotation:-95.7,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:37.8,rotation:-0.1,x:16.5}},{t:this.ikNode_796,p:{x:34.6,y:0.7,skewX:0,scaleX:0.999,rotation:27.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-89.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:38.1,rotation:-0.1,x:10.6}},{t:this.ikNode_796,p:{x:34.4,y:4.3,skewX:0,scaleX:0.999,rotation:37,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-83.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:37.5,rotation:-0.1,x:4.8}},{t:this.ikNode_796,p:{x:33.7,y:8,skewX:0,scaleX:0.999,rotation:46.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-77.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:36,rotation:0,x:-0.5}},{t:this.ikNode_796,p:{x:32.7,y:11.5,skewX:0,scaleX:0.999,rotation:55.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:-0.1,scaleY:0.999,rotation:-71.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:33.9,rotation:18.1,x:-7}},{t:this.ikNode_796,p:{x:30.5,y:16.5,skewX:0,scaleX:0.999,rotation:67,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-62.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:30.5,rotation:36.3,x:-12.8}},{t:this.ikNode_796,p:{x:27.6,y:21.1,skewX:0,scaleX:0.999,rotation:78.7,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-53.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:26.2,rotation:54.5,x:-17.5}},{t:this.ikNode_796,p:{x:23.9,y:25.1,skewX:0,scaleX:0.999,rotation:90.3,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.999,rotation:-44.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:21.2,rotation:72.7,x:-21}},{t:this.ikNode_796,p:{x:19.6,y:28.6,skewX:0,scaleX:0.999,rotation:102,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0,scaleY:0.999,rotation:-35.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:67.7,rotation:11.3,x:15.4}},{t:this.ikNode_796,p:{x:22.4,y:26.7,skewX:0,scaleX:0.999,rotation:11.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-40.5,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:66.3,rotation:17.3,x:12.3}},{t:this.ikNode_796,p:{x:23,y:26.2,skewX:0,scaleX:0.999,rotation:16.7,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-41.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.5,rotation:23.2,x:9.2}},{t:this.ikNode_796,p:{x:23.7,y:25.5,skewX:0,scaleX:0.999,rotation:22.1,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-43.4,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.2,rotation:29.2,x:6.2}},{t:this.ikNode_796,p:{x:24.3,y:24.9,skewX:0,scaleX:0.999,rotation:27.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-44.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:59.8,rotation:35.1,x:3.4}},{t:this.ikNode_796,p:{x:25,y:24.3,skewX:0,scaleX:0.999,rotation:32.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-46.3,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:56.8,rotation:41.1,x:0.7}},{t:this.ikNode_796,p:{x:25.6,y:23.6,skewX:0,scaleX:0.999,rotation:38.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-47.8,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:53.7,rotation:47,x:-1.7}},{t:this.ikNode_796,p:{x:26.1,y:23,skewX:0,scaleX:0.999,rotation:43.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-49.2,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:50.2,rotation:53,x:-3.9}},{t:this.ikNode_796,p:{x:26.7,y:22.3,skewX:0,scaleX:0.999,rotation:49.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-50.7,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:46.5,rotation:58.9,x:-5.8}},{t:this.ikNode_796,p:{x:27.3,y:21.6,skewX:0,scaleX:0.999,rotation:54.6,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.998,rotation:-52.2,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:42.5,rotation:64.9,x:-7.5}},{t:this.ikNode_796,p:{x:27.7,y:20.9,skewX:0,scaleX:0.999,rotation:60.1,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.998,rotation:-53.6,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:45.2,rotation:61.1,x:-8.9}},{t:this.ikNode_796,p:{x:26.1,y:23.1,skewX:0,scaleX:0.999,rotation:59.1,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.998,rotation:-49.1,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:47.8,rotation:57.3,x:-10.4}},{t:this.ikNode_796,p:{x:24.2,y:25,skewX:0,scaleX:0.999,rotation:58.2,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.998,rotation:-44.6,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:50.2,rotation:53.5,x:-12.1}},{t:this.ikNode_796,p:{x:22.1,y:26.8,skewX:0,scaleX:0.999,rotation:57.2,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.998,rotation:-40,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:52.4,rotation:49.6,x:-13.8}},{t:this.ikNode_796,p:{x:19.9,y:28.5,skewX:0,scaleX:0.999,rotation:56.3,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.998,rotation:-35.5,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:54.5,rotation:45.8,x:-15.7}},{t:this.ikNode_796,p:{x:17.6,y:30,skewX:0,scaleX:0.999,rotation:55.3,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-31,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:56.3,rotation:42,x:-17.8}},{t:this.ikNode_796,p:{x:15.2,y:31.3,skewX:0,scaleX:0.999,rotation:54.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.998,rotation:-26.4,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:57.9,rotation:38.2,x:-19.8}},{t:this.ikNode_796,p:{x:12.7,y:32.4,skewX:0,scaleX:0.999,rotation:53.4,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-21.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:59.4,rotation:34.4,x:-22}},{t:this.ikNode_796,p:{x:10.1,y:33.4,skewX:0,scaleX:0.999,rotation:52.5,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-17.4,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:60.6,rotation:30.6,x:-24.1}},{t:this.ikNode_796,p:{x:7.4,y:34,skewX:0,scaleX:0.999,rotation:51.5,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-12.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:60.6,rotation:30.6,x:-24.1}},{t:this.ikNode_796,p:{x:7.4,y:34,skewX:0,scaleX:0.999,rotation:51.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.998,rotation:-12.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:61.2,rotation:29.9,x:-22.6}},{t:this.ikNode_796,p:{x:8.3,y:33.8,skewX:0,scaleX:0.999,rotation:50,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-14.3,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:61.8,rotation:29.2,x:-20.9}},{t:this.ikNode_796,p:{x:9.2,y:33.5,skewX:0,scaleX:0.999,rotation:48.5,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-15.8,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.4,rotation:28.5,x:-19.3}},{t:this.ikNode_796,p:{x:10,y:33.4,skewX:0,scaleX:0.999,rotation:46.9,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-17.3,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.9,rotation:27.9,x:-17.8}},{t:this.ikNode_796,p:{x:10.9,y:33,skewX:0,scaleX:0.999,rotation:45.4,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-18.7,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.3,rotation:27.2,x:-16.1}},{t:this.ikNode_796,p:{x:11.8,y:32.7,skewX:0,scaleX:0.999,rotation:43.8,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-20.2,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.8,rotation:26.5,x:-14.4}},{t:this.ikNode_796,p:{x:12.5,y:32.5,skewX:0,scaleX:0.999,rotation:42.3,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-21.7,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.1,rotation:25.8,x:-12.7}},{t:this.ikNode_796,p:{x:13.3,y:32.1,skewX:0,scaleX:0.999,rotation:40.7,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-23.1,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.5,rotation:25.1,x:-11.1}},{t:this.ikNode_796,p:{x:14.2,y:31.8,skewX:0,scaleX:0.999,rotation:39.2,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-24.6,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.7,rotation:24.5,x:-9.3}},{t:this.ikNode_796,p:{x:15,y:31.3,skewX:0,scaleX:0.999,rotation:37.7,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0,scaleY:0.998,rotation:-26.1,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.5,rotation:25.1,x:-11.1}},{t:this.ikNode_796,p:{x:14.2,y:31.8,skewX:0,scaleX:0.999,rotation:39.2,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-24.6,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:64.1,rotation:25.8,x:-12.7}},{t:this.ikNode_796,p:{x:13.3,y:32.1,skewX:0,scaleX:0.999,rotation:40.7,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-23.1,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.8,rotation:26.5,x:-14.4}},{t:this.ikNode_796,p:{x:12.5,y:32.5,skewX:0,scaleX:0.999,rotation:42.3,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-21.7,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:63.3,rotation:27.2,x:-16.1}},{t:this.ikNode_796,p:{x:11.8,y:32.7,skewX:0,scaleX:0.999,rotation:43.8,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-20.2,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.9,rotation:27.9,x:-17.8}},{t:this.ikNode_796,p:{x:10.9,y:33,skewX:0,scaleX:0.999,rotation:45.4,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-18.7,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:62.4,rotation:28.5,x:-19.3}},{t:this.ikNode_796,p:{x:10,y:33.4,skewX:0,scaleX:0.999,rotation:46.9,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-17.3,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:61.8,rotation:29.2,x:-20.9}},{t:this.ikNode_796,p:{x:9.2,y:33.5,skewX:0,scaleX:0.999,rotation:48.5,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-15.8,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:61.2,rotation:29.9,x:-22.6}},{t:this.ikNode_796,p:{x:8.3,y:33.8,skewX:0,scaleX:0.999,rotation:50,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-14.3,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:60.6,rotation:30.6,x:-24.1}},{t:this.ikNode_796,p:{x:7.4,y:34,skewX:0,scaleX:0.999,rotation:51.5,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0,scaleY:0.998,rotation:-12.9,scaleX:0.998}}]},1).to({state:[{t:this.ikNode_797,p:{y:58.4,rotation:33.5,x:-25.9}},{t:this.ikNode_796,p:{x:7.8,y:34,skewX:0,scaleX:0.999,rotation:55.7,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-13.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:52.3,rotation:42.1,x:-27.6}},{t:this.ikNode_796,p:{x:9.5,y:33.5,skewX:0,scaleX:0.999,rotation:64.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-16.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:45.7,rotation:50.8,x:-28.4}},{t:this.ikNode_796,p:{x:11.2,y:33,skewX:0,scaleX:0.999,rotation:73.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-19.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:38.7,rotation:59.4,x:-28.2}},{t:this.ikNode_796,p:{x:12.9,y:32.5,skewX:0,scaleX:0.999,rotation:82.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-22.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:32.2,rotation:68,x:-27.1}},{t:this.ikNode_796,p:{x:14.4,y:31.8,skewX:0,scaleX:0.999,rotation:91,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-24.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:25.5,rotation:76.5,x:-25.2}},{t:this.ikNode_796,p:{x:15.9,y:31.1,skewX:0,scaleX:0.999,rotation:99.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-27.6,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:18.9,rotation:85.1,x:-22.6}},{t:this.ikNode_796,p:{x:17.3,y:30.3,skewX:0,scaleX:0.999,rotation:107.4,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-30.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:22.4,rotation:80.3,x:-24}},{t:this.ikNode_796,p:{x:16.7,y:30.6,skewX:0,scaleX:0.999,rotation:103,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-29.2,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:25.9,rotation:75.5,x:-25.1}},{t:this.ikNode_796,p:{x:16.1,y:30.9,skewX:0,scaleX:0.999,rotation:98.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-28,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:29.4,rotation:70.7,x:-26}},{t:this.ikNode_796,p:{x:15.4,y:31.2,skewX:0,scaleX:0.999,rotation:94.1,skewY:0}},{t:this.ikNode_719,p:{x:-0.1,y:0.1,scaleY:0.999,rotation:-26.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:33.6,rotation:65,x:-26.7}},{t:this.ikNode_796,p:{x:14.7,y:31.6,skewX:0,scaleX:0.999,rotation:88.9,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-25.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:37.7,rotation:59.4,x:-27.3}},{t:this.ikNode_796,p:{x:13.8,y:32,skewX:0,scaleX:0.999,rotation:83.7,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-23.9,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:41.8,rotation:53.7,x:-27.3}},{t:this.ikNode_796,p:{x:13,y:32.4,skewX:0,scaleX:0.999,rotation:78.5,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-22.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:48.4,rotation:41.5,x:-27.2}},{t:this.ikNode_796,p:{x:11.3,y:33,skewX:0,scaleX:0.999,rotation:69.8,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-19.5,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:54.6,rotation:29.2,x:-26.2}},{t:this.ikNode_796,p:{x:9.5,y:33.5,skewX:0,scaleX:0.999,rotation:61.2,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-16.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:60.1,rotation:16.9,x:-24.4}},{t:this.ikNode_796,p:{x:7.8,y:33.9,skewX:0,scaleX:0.999,rotation:52.6,skewY:0}},{t:this.ikNode_719,p:{x:0,y:0.1,scaleY:0.999,rotation:-13.4,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:65.8,rotation:11.3,x:-21.2}},{t:this.ikNode_796,p:{x:5.9,y:34.3,skewX:0,scaleX:0.999,rotation:42.5,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-10.3,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:70.3,rotation:5.7,x:-17.1}},{t:this.ikNode_796,p:{x:4,y:34.6,skewX:0,scaleX:0.999,rotation:32.4,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-7.1,scaleX:0.999}}]},1).to({state:[{t:this.ikNode_797,p:{y:73.7,rotation:0,x:-12.4}},{t:this.ikNode_796,p:{x:2.1,y:34.7,skewX:0,scaleX:0.999,rotation:22.3,skewY:0}},{t:this.ikNode_719,p:{x:0.1,y:0.1,scaleY:0.999,rotation:-4,scaleX:0.999}}]},1).wait(1));

	// 左腿
	this.ikNode_719_1 = new lib.Leg1();
	this.ikNode_719_1.setTransform(0.1,0.1,0.999,0.999,-22.5);

	this.ikNode_799 = new lib.Leg2();
	this.ikNode_799.setTransform(13,32.1,0.999,0.999,0.3);

	this.ikNode_800 = new lib.Foot();
	this.ikNode_800.setTransform(13.9,73.7,0.999,0.999,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]}).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.2,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.2,y:0.2,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.3,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.3,y:0.3,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.4,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.3,y:0.3,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.5,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.5,y:0.5,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.6,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.6,y:0.6,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.7,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.7,y:0.7,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.4,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.8,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.8,y:0.8,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.4,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.9,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.8,y:0.8,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.3,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.9,y:0.9,rotation:-22.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.3,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:1.1,y:1.1,rotation:-22.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.3,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.9,y:0.9,rotation:-22.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.4,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.9,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.8,y:0.8,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.4,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.8,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.8,y:0.8,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.7,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.7,y:0.7,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.6,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.6,y:0.6,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.5,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.5,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.4,y:0.4,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.4,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.3,y:0.3,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.3,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.3,y:0.3,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.6,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.2,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.2,y:0.2,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:74,rotation:0.1,x:10,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.5,rotation:4.3,x:12}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-20.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:74.1,rotation:-0.2,x:6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.9,rotation:8.2,x:10.9}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-18.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.9,rotation:-0.4,x:2.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.2,rotation:12.2,x:9.7}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:72.8,rotation:7.3,x:-9.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.3,rotation:23.1,x:5.2}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.6,rotation:15,x:-21.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.6,rotation:33.9,x:0.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-1.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:64.5,rotation:22.7,x:-32.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.3,rotation:44.8,x:-4.2}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:6.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:55.8,rotation:48.6,x:-42.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.9,rotation:59.5,x:-7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:11.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:45.6,rotation:74.5,x:-49.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.2,rotation:74.2,x:-9.9}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:16.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:34.2,rotation:100.4,x:-53.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.2,rotation:88.9,x:-12.5}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.1,rotation:21,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:42,rotation:87.5,x:-43.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.4,rotation:81.1,x:-2.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:46.7,rotation:74.6,x:-31.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.7,rotation:73.4,x:7.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-13,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:48.1,rotation:61.7,x:-20.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:30.1,rotation:65.6,x:17}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-30,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:54.8,rotation:49.5,x:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25.9,rotation:47.2,x:22.8}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-42,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:57.3,rotation:37.4,x:8.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:20.6,rotation:28.7,x:27.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-53.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:55.1,rotation:25.2,x:25,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:14.3,rotation:10.3,x:31.3}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-65.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:59.7,rotation:9.9,x:30.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:18.3,rotation:-0.1,x:29.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-58.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:62.7,rotation:-5.5,x:35.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:21.8,rotation:-10.6,x:26.4}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.2,rotation:-50.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:63.9,rotation:-20.8,x:39.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25,rotation:-21,x:23.3}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.2,rotation:-43,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.4,rotation:-14,x:27.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:28.5,rotation:-9.9,x:19.2}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.2,rotation:-34.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:72.9,rotation:-7.2,x:15,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:31.3,rotation:1.1,x:14.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-25.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.9,rotation:-0.4,x:2.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.2,rotation:12.2,x:9.7}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.2,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:70.4,rotation:20.7,x:-0.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:31.5,rotation:22.1,x:14.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-25.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:61.5,rotation:41.2,x:-12.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:30.9,rotation:43.9,x:15.8}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-27.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:48.2,rotation:61.6,x:-20.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:30.1,rotation:65.7,x:17.2}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-30.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:46.6,rotation:74.8,x:-31.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.8,rotation:73.5,x:7.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-13.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:41.9,rotation:88,x:-43.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.6,rotation:81.3,x:-2.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:3.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:34,rotation:101.3,x:-54.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.3,rotation:89.1,x:-12.6}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.1,rotation:21,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:45.2,rotation:75,x:-49.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.2,rotation:74.7,x:-9.6}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.1,rotation:16,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:55.5,rotation:48.8,x:-42.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.1,rotation:60.3,x:-6.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:10.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:64,rotation:22.6,x:-32.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.5,rotation:45.9,x:-3.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:5.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.3,rotation:15.3,x:-21.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.7,rotation:34.8,x:1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-1.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:72.5,rotation:8,x:-10.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:34.3,rotation:23.8,x:5.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-9.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.7,x:2.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:33.1,rotation:12.7,x:10.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-17.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:72.6,rotation:-6.2,x:15.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:31.3,rotation:1.1,x:15.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-26,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.3,rotation:-13.2,x:27.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:28.8,rotation:-10.4,x:19.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-34.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:63.6,rotation:-20.1,x:39.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25.6,rotation:-22,x:23.3}},{t:this.ikNode_719_1,p:{x:-0.1,y:0.1,rotation:-42.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:62.6,rotation:-5.1,x:35.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:22.2,rotation:-11.3,x:26.6}},{t:this.ikNode_719_1,p:{x:0,y:0.2,rotation:-50.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:59.8,rotation:9.9,x:30.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:18.4,rotation:-0.5,x:29.3}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-58.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:55.2,rotation:24.9,x:25,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:14.2,rotation:10.2,x:31.5}},{t:this.ikNode_719_1,p:{x:0.1,y:0.2,rotation:-65.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:57.3,rotation:37.1,x:8.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:20.5,rotation:28.7,x:28}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-54,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:54.7,rotation:49.3,x:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25.9,rotation:47.2,x:23.1}},{t:this.ikNode_719_1,p:{x:0,y:0.2,rotation:-42.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:48.2,rotation:61.6,x:-20.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:30.1,rotation:65.7,x:17.2}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-30.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.7,rotation:18.1,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.5,rotation:18.1,x:34.5}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.4,rotation:18.1,x:34.5}},{t:this.ikNode_719_1,p:{x:0.2,y:0.2,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.3,rotation:18.1,x:34.6}},{t:this.ikNode_719_1,p:{x:0.3,y:0.3,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.2,rotation:18.1,x:34.7}},{t:this.ikNode_719_1,p:{x:0.3,y:0.4,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.1,rotation:18.1,x:34.7}},{t:this.ikNode_719_1,p:{x:0.4,y:0.4,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3,rotation:18.1,x:34.8}},{t:this.ikNode_719_1,p:{x:0.5,y:0.5,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.9,rotation:18.1,x:34.9}},{t:this.ikNode_719_1,p:{x:0.5,y:0.6,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.8,rotation:18.1,x:34.9}},{t:this.ikNode_719_1,p:{x:0.6,y:0.6,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.7,rotation:18.1,x:35}},{t:this.ikNode_719_1,p:{x:0.7,y:0.7,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.5,rotation:18.1,x:35.1}},{t:this.ikNode_719_1,p:{x:0.8,y:0.8,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.7,rotation:18.1,x:35}},{t:this.ikNode_719_1,p:{x:0.7,y:0.7,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.8,rotation:18.1,x:34.9}},{t:this.ikNode_719_1,p:{x:0.6,y:0.6,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-2.9,rotation:18.1,x:34.9}},{t:this.ikNode_719_1,p:{x:0.5,y:0.6,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3,rotation:18.1,x:34.8}},{t:this.ikNode_719_1,p:{x:0.5,y:0.5,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.1,rotation:18.1,x:34.8}},{t:this.ikNode_719_1,p:{x:0.4,y:0.4,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.2,rotation:18.1,x:34.7}},{t:this.ikNode_719_1,p:{x:0.3,y:0.4,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.4,rotation:18.1,x:34.6}},{t:this.ikNode_719_1,p:{x:0.2,y:0.3,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.5,rotation:18.1,x:34.6}},{t:this.ikNode_719_1,p:{x:0.2,y:0.2,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.6,rotation:18.1,x:34.5}},{t:this.ikNode_719_1,p:{x:0.1,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.7,rotation:18.1,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.1,rotation:0.2,x:22.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.7,rotation:18.1,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.7,rotation:18.1,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:37.6,rotation:0.1,x:16.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:0.1,rotation:27.3,x:34.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-90.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:38.1,rotation:0,x:10.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:4,rotation:36.4,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-84,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:37.6,rotation:-0.1,x:4.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:7.7,rotation:45.6,x:33.8}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-77.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.3,rotation:-0.1,x:-0.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:11.4,rotation:54.8,x:32.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-71.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:34.3,rotation:18.5,x:-7.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:16.9,rotation:66.8,x:30.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-61.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:31,rotation:37.2,x:-13.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:21.9,rotation:78.9,x:27}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-51.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:26.7,rotation:55.8,x:-18.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:26.3,rotation:91,x:22.7}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-41.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:21.5,rotation:74.5,x:-22.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:29.8,rotation:103.1,x:17.9}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-31.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:23.9,rotation:59.8,x:-21.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:28.3,rotation:97.8,x:20.1}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-35.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:26.1,rotation:45.1,x:-19.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:26.8,rotation:92.5,x:22.1}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-39.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:28.2,rotation:30.4,x:-17.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25,rotation:87.3,x:24}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-44.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:30.2,rotation:15.7,x:-15.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:23.2,rotation:82,x:25.8}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-48.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:35.2,rotation:11.8,x:-7.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:17.3,rotation:66,x:30.1}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-60.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:38.2,rotation:8,x:1.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:10.7,rotation:50,x:33}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-72.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:38.6,rotation:4.1,x:12.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:3.5,rotation:34.1,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-84.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.2,rotation:0.2,x:22.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-3.7,rotation:18.1,x:34.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-96.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:53.8,rotation:66.6,x:-30.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:34,rotation:63.2,x:6.3}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-11,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:52.1,rotation:65.8,x:-26.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:33.1,rotation:64.4,x:10}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-17.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:49.9,rotation:65,x:-23.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:31.8,rotation:65.7,x:13.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-23.8,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:47.4,rotation:64.2,x:-20.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:30.1,rotation:66.9,x:17.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-30.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:44.5,rotation:63.3,x:-17.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:28,rotation:68.2,x:20.3}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-36.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:41.2,rotation:62.5,x:-15.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:25.6,rotation:69.5,x:23.2}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-42.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:37.6,rotation:61.7,x:-12.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:22.8,rotation:70.7,x:25.9}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-49.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:33.7,rotation:60.9,x:-10.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:19.8,rotation:72,x:28.3}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-55.7,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:29.6,rotation:60,x:-8.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:16.6,rotation:73.2,x:30.3}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-62,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:25.2,rotation:59.2,x:-7.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:13.1,rotation:74.5,x:32}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-68.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.7,rotation:55.3,x:-5.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:14.1,rotation:64.8,x:31.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-66.7,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:39.6,rotation:51.4,x:-2.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:15,rotation:55.1,x:31.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-65,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:45.8,rotation:47.5,x:2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:16,rotation:45.4,x:30.7}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-63.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:51.1,rotation:43.7,x:7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:16.8,rotation:35.7,x:30.2}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-61.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:55.4,rotation:39.8,x:12.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:17.7,rotation:26,x:29.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-59.8,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:58.7,rotation:35.9,x:18.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:18.6,rotation:16.3,x:29.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-58.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:60.7,rotation:32,x:25,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:19.5,rotation:6.6,x:28.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-56.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:61.5,rotation:28.1,x:31.3,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:20.3,rotation:-3.2,x:27.9}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-54.6,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:61.2,rotation:24.2,x:37.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:21.1,rotation:-12.9,x:27.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-52.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:61.2,rotation:24.2,x:37.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:21.1,rotation:-12.9,x:27.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-52.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:62.6,rotation:23.3,x:35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:22,rotation:-10.2,x:26.6}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-51,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:63.8,rotation:22.3,x:32.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:22.9,rotation:-7.5,x:25.8}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-49,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:64.9,rotation:21.4,x:29.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:23.8,rotation:-4.9,x:25}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-47.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:65.9,rotation:20.4,x:26.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:24.6,rotation:-2.2,x:24.2}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-45.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:66.8,rotation:19.4,x:24.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:25.4,rotation:0.5,x:23.4}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-43.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:67.5,rotation:18.5,x:21.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:26.2,rotation:3.1,x:22.5}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-41.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:68.2,rotation:17.5,x:18.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:26.9,rotation:5.8,x:21.6}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-39.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:68.7,rotation:16.6,x:15.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:27.7,rotation:8.5,x:20.7}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-37.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.1,rotation:15.6,x:12.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:28.3,rotation:11.1,x:19.7}},{t:this.ikNode_719_1,p:{x:-0.1,y:0,rotation:-35.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:68.7,rotation:16.6,x:15.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:27.7,rotation:8.5,x:20.7}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-37.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:68.2,rotation:17.5,x:18.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:26.9,rotation:5.8,x:21.6}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-39.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:67.5,rotation:18.5,x:21.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:26.2,rotation:3.1,x:22.5}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-41.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:66.8,rotation:19.4,x:24.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:25.4,rotation:0.5,x:23.4}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-43.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:65.9,rotation:20.4,x:26.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:24.6,rotation:-2.2,x:24.2}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-45.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:64.9,rotation:21.4,x:29.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:23.8,rotation:-4.9,x:25}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-47.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:63.8,rotation:22.3,x:32.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:22.9,rotation:-7.5,x:25.8}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-49,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:62.6,rotation:23.3,x:35,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:22,rotation:-10.2,x:26.6}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-51,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:61.2,rotation:24.2,x:37.6,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_799,p:{y:21.1,rotation:-12.9,x:27.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-52.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_800,p:{y:70.4,rotation:0.1,x:13.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:29.1,rotation:8.9,x:18.8}},{t:this.ikNode_719_1,p:{x:0.1,y:0,rotation:-33.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:66.1,rotation:0.1,x:21.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:24.5,rotation:5.7,x:24.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-45.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:60.7,rotation:0.1,x:28.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:19,rotation:2.6,x:29}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-57.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:54.3,rotation:0,x:33.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:12.6,rotation:-0.6,x:32.2}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-69.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:47.2,rotation:0,x:38,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:5.7,rotation:-3.7,x:34.1}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-81.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:39.7,rotation:0,x:40.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-1.5,rotation:-6.8,x:34.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-93,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:32.2,rotation:-0.1,x:41.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-8.5,rotation:-10,x:33.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-104.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:36.4,rotation:0,x:42,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-4.4,rotation:-9.1,x:34.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-98.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:40.6,rotation:0,x:41.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:-0.4,rotation:-8.3,x:34.6}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-91.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:44.9,rotation:0,x:41,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:3.8,rotation:-7.4,x:34.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-84.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:49.1,rotation:0.1,x:39.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:7.9,rotation:-6.6,x:33.7}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-77.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:53.2,rotation:0.1,x:37.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:11.8,rotation:-5.7,x:32.6}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-70.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:57,rotation:0.1,x:35.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:15.6,rotation:-4.8,x:30.9}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-63.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:60.6,rotation:0.1,x:32.8,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:19.2,rotation:-4,x:28.9}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-56.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:64,rotation:0.2,x:29.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:22.5,rotation:-3.1,x:26.4}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-50,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:67,rotation:0.2,x:26.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:25.5,rotation:-2.3,x:23.5}},{t:this.ikNode_719_1,p:{x:0,y:0.1,rotation:-43.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:69.7,rotation:0.2,x:22.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:28.1,rotation:-1.4,x:20.3}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-36.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:71.9,rotation:0.3,x:18.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:30.3,rotation:-0.6,x:16.7}},{t:this.ikNode_719_1,p:{x:0,y:0,rotation:-29.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.ikNode_800,p:{y:73.7,rotation:0.3,x:13.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_799,p:{y:32.1,rotation:0.3,x:13}},{t:this.ikNode_719_1,p:{x:0.1,y:0,rotation:-22.5,scaleX:0.999,scaleY:0.999}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-31,60.9,116.5);


(lib.Arm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"police_1":0,"police_2":1,"police_3":2,"police_4":3,"terrorist_1":4,"terrorist_2":5,"terrorist_3":6,"terrorist_4":7,"hostage_1":8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// 标志
	this.instance = new lib.CtIcon("synched",0);
	this.instance.setTransform(-1.4,8.3,0.24,0.239,0,0,0,-0.2,0);

	this.instance_1 = new lib.TerIcon("synched",0);
	this.instance_1.setTransform(-1.4,8.9,0.235,0.234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[]},4).wait(1));

	// 大胳膊
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(5.7,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000A33").s().p("AgUAaQATgmAVgVIABAZIAAABQgUANgSAcIgDgIg");
	this.shape_1.setTransform(-9.4,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004799").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_2.setTransform(-0.1,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002866").s().p("AgrChQgGgGgPgrQgTg1ACg2IgJhJQATgcAVgPIAGD4IACAaQgBgBAAgBQgBgBAAAAQAAAAAAAAQAAAAABABgABMhhQgQgSgPgJQgcgRgaAHQgUAFgVARIgCgZQAjgfAsAIQAzATANAtIgBALIAAAGIgOgSg");
	this.shape_3.setTransform(-2.1,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001900").s().p("AgUAaQATgmAVgVIABAZIAAABQgUANgSAcIgDgIg");
	this.shape_4.setTransform(-9.4,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#204C00").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_5.setTransform(-0.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#143300").s().p("AgrChQgGgGgPgrQgTg1ACg2IgJhJQATgcAVgPIAGD4IACAaQgBgBAAgBQgBgBAAAAQAAAAAAAAQAAAAABABgABMhhQgQgSgPgJQgcgRgaAHQgUAFgVARIgCgZQAjgfAsAIQAzATANAtIgBALIAAAGIgOgSg");
	this.shape_6.setTransform(-2.1,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#161619").s().p("AgUAaQATgmAVgVIABAZIAAABQgUANgSAcIgDgIg");
	this.shape_7.setTransform(-9.4,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#41414C").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_8.setTransform(-0.1,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#28292E").s().p("AgrChQgGgGgPgrQgTg1ACg2IgJhJQATgcAVgPIAGD4IACAaQgBgBAAgBQgBgBAAAAQAAAAAAAAQAAAAABABgABMhhQgQgSgPgJQgcgRgaAHQgUAFgVARIgCgZQAjgfAsAIQAzATANAtIgBALIAAAGIgOgSg");
	this.shape_9.setTransform(-2.1,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAaQATgmAVgVIABAZIAAABQgUANgSAcIgDgIg");
	this.shape_10.setTransform(-9.4,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#28292E").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_11.setTransform(-0.1,12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#161619").s().p("AgrChQgGgGgPgrQgTg1ACg2IgJhJQATgcAVgPIAGD4IACAaQgBgBAAgBQgBgBAAAAQAAAAAAAAQAAAAABABgABMhhQgQgSgPgJQgcgRgaAHQgUAFgVARIgCgZQAjgfAsAIQAzATANAtIgBALIAAAGIgOgSg");
	this.shape_12.setTransform(-2.1,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#001900").s().p("AgXAaQATgmAVgVIAHApQgSAGgaAUIgDgIg");
	this.shape_13.setTransform(-9.1,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#204C00").s().p("AgYCTQgSgFgGgFIgHgFIgBghQgDh3gIh1QAjgJAMgBIAcgBQASAAARAIQARAHAIAKIgEAlIABABIAAACIgDAtIAAAjQAAATgFBFQgNAfgNAMQgNAMgNAFQgGAEgJAAQgHAAgHgCg");
	this.shape_14.setTransform(0.2,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#143300").s().p("AgiCoIAAgBIgIgKQgHgJgPgqQgTg1ACg1IgJhKQAbgUATgGIgIgrQAjgfAsAIQAzATANAtIgBALIAAAGQgIgKgRgIQgRgIgSAAIgdABQgKABgjAJQAHBzADB6IABAgg");
	this.shape_15.setTransform(-2.1,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgMALQAJgXAVgVIACAZIAAABQgUANgSAcIgBAAQgBAAAIgXg");
	this.shape_16.setTransform(-9.3,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_17.setTransform(-0.1,12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AgrChQgGgGgPgrQgSg1ABg2IgJhJQAUgcAUgPIAGD4IADAaQgBgBgBgBQAAgBAAAAQgBAAABAAQAAAAAAABgABNhhQgQgSgQgJQgbgRgbAHQgUAFgVARIgBgZQAjgfAsAIQAzATAMA4IAAAGIgOgSg");
	this.shape_18.setTransform(-2.1,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgMALQAJgXAVgVIACAZIAAABQgUANgSAcIgBAAQgBAAAIgXg");
	this.shape_19.setTransform(-9.3,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AgVCjQgSgFgGgFIgIgHIgEgDIgEgHIAAgBIgDgaIgGj4IAAgBQAVgRAUgFQAdgGAZAQQAQAKAQARIAOASIgEAlIABABIAAACIgDAtIAAAhQAAAVgFBFQgNAfgNAMQgNAMgNAFQgIAEgHAAQgHAAgHgCg");
	this.shape_20.setTransform(-0.1,12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7F7F7F").s().p("AgrChQgGgGgPgrQgSg1ABg2IgJhJQAUgcAUgPIAGD4IADAaQgBgBgBgBQAAgBAAAAQgBAAABAAQAAAAAAABgABNhhQgQgSgQgJQgbgRgbAHQgUAFgVARIgBgZQAjgfAsAIQAzATAMA4IAAAGIgOgSg");
	this.shape_21.setTransform(-2.1,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape},{t:this.shape_10}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-6.9,18.7,35.6);


(lib.Arm = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.Arm2();
	this.instance.setTransform(14,17.4,0.998,0.998,-124.8);

	this.instance_1 = new lib.Arm1();
	this.instance_1.setTransform(-0.1,0.1,0.998,0.998,-40.4,0,0,-0.1,0.8);

	this.instance_2 = new lib.Hand1();
	this.instance_2.setTransform(34.1,4.8,0.998,0.998,-35.1);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.6,68.2,46.4);


(lib.weapon6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loading:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58));

	// 火光
	this.instance = new lib.火光("synched",0);
	this.instance.setTransform(90,-13.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.89,scaleY:1.63,x:80},0).wait(1).to({scaleX:0.78,scaleY:2.25},0).to({_off:true},1).wait(54));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(42,-13.8);

	this.point1 = new lib.point();
	this.point1.setTransform(102,-13.8);

	this.point = new lib.point();
	this.point.setTransform(0,-13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(58));

	// 手
	this.instance_1 = new lib.Arm2();
	this.instance_1.setTransform(-8.9,7.5,1,1,-110.3);

	this.instance_2 = new lib.Hand2();
	this.instance_2.setTransform(23.3,-3.1,1,1,0,0,0,10.7,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(58));

	// 武器
	this.instance_3 = new lib.枪4("synched",0);
	this.instance_3.setTransform(46.3,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(58));

	// 弹夹
	this.instance_4 = new lib.弹夹4("synched",0);
	this.instance_4.setTransform(44.3,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({rotation:94.8,y:90},5).to({_off:true},1).wait(5).to({_off:false,rotation:39.8,x:27.8,y:38},0).wait(1).to({rotation:33.8,x:33.8,y:32.2},0).wait(1).to({rotation:22.9,x:38.3,y:25.5},0).wait(1).to({rotation:10.9,x:41.5,y:18.5},0).wait(1).to({rotation:2.7,x:43.3,y:10.7},0).wait(1).to({rotation:0,x:44.3,y:1.5},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-24.4,124.1,46.5);


(lib.weapon5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58));

	// 火光
	this.instance = new lib.火光("synched",0);
	this.instance.setTransform(91,-0.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.89,scaleY:1.63,x:81},0).wait(1).to({scaleX:0.78,scaleY:2.25,x:86},0).to({_off:true},1).wait(54));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(42,-0.7);

	this.point1 = new lib.point();
	this.point1.setTransform(104,-0.7);

	this.point = new lib.point();
	this.point.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(58));

	// 手
	this.instance_1 = new lib.Arm2();
	this.instance_1.setTransform(-9.2,19,1,1,-110);

	this.instance_2 = new lib.Hand2();
	this.instance_2.setTransform(23.3,8.5,1,1,0,0,0,10.7,-2.5);

	this.instance_3 = new lib.Arm1();
	this.instance_3.setTransform(-7.6,10.9,1,1,17.5,0,0,-2.3,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(58));

	// 武器
	this.instance_4 = new lib.枪3("synched",0);
	this.instance_4.setTransform(49.1,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58));

	// 弹夹
	this.instance_5 = new lib.弹夹3("synched",0);
	this.instance_5.setTransform(49.3,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({startPosition:0},0).to({rotation:90,y:100.6},5).to({_off:true},1).wait(5).to({_off:false,rotation:30,x:24.7,y:35.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:23.8,x:30.4,y:33.3},0).wait(1).to({rotation:17.8,x:36.4,y:30.1},0).wait(1).to({rotation:11.8,x:41.7,y:25.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:46.4,y:20.1},0).wait(1).to({rotation:0,x:49.3,y:12.3},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-9,127.8,42.6);


(lib.weapon4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(58));

	// 火光
	this.instance = new lib.火光("synched",0);
	this.instance.setTransform(91,-15.3);

	this.instance_1 = new lib.火光("synched",0);
	this.instance_1.setTransform(91,-15.3,1,1,30);

	this.instance_2 = new lib.火光("synched",0);
	this.instance_2.setTransform(91,-15.3,1,1,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{rotation:-30,x:91}},{t:this.instance_1,p:{rotation:30,x:91}},{t:this.instance}]},1).to({state:[{t:this.instance_2,p:{rotation:80,x:101}},{t:this.instance_1,p:{rotation:-80,x:101}},{t:this.instance}]},1).to({state:[]},1).wait(54));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(42,-15.3);

	this.point1 = new lib.point();
	this.point1.setTransform(102,-15.3);

	this.point = new lib.point();
	this.point.setTransform(0,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(58));

	// 手
	this.instance_3 = new lib.Arm2();
	this.instance_3.setTransform(-8.9,7.5,1,1,-110.3);

	this.instance_4 = new lib.Hand2();
	this.instance_4.setTransform(23.3,-3.1,1,1,0,0,0,10.7,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(58));

	// 武器
	this.instance_5 = new lib.枪2("synched",0);
	this.instance_5.setTransform(50.5,-10.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(58));

	// 弹夹
	this.instance_6 = new lib.弹夹2("synched",0);
	this.instance_6.setTransform(43.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({startPosition:0},0).to({rotation:90,y:89.3},5).to({_off:true},1).wait(5).to({_off:false,rotation:30,x:23.7,y:37.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:23.8,x:30.7,y:31.9},0).wait(1).to({rotation:17.8,x:36.7,y:25.6},0).wait(1).to({rotation:11.8,x:40.7,y:17.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:42.7,y:9.5},0).wait(1).to({rotation:0,x:43.9,y:1.1},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25.3,124.1,47.5);


(lib.weapon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// 火光
	this.instance = new lib.火光("synched",0);
	this.instance.setTransform(75.9,-26.5,0.444,1,-10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({scaleX:0.56},0).wait(1).to({scaleX:0.67},0).to({_off:true},1).wait(23));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(66,-18.7);

	this.point1 = new lib.point();
	this.point1.setTransform(85,-18.7);

	this.point = new lib.point();
	this.point.setTransform(0,-18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(27));

	// 手
	this.instance_1 = new lib.Arm2();
	this.instance_1.setTransform(19.7,-2.1,0.999,0.999,-102.6);

	this.instance_2 = new lib.Arm1();
	this.instance_2.setTransform(-2.6,-4.2,1,1,-83.9);

	this.instance_3 = new lib.Hand2();
	this.instance_3.setTransform(54.4,-8.9,1,1,0,0,0,10.7,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regX:10.7,regY:-2.5,rotation:0,x:54.4,y:-8.9}},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_3,p:{regX:0,regY:0,rotation:-13.7,x:43.7,y:-5.7}},{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3,p:{regX:10.7,regY:-2.5,rotation:0,x:54.4,y:-8.9}},{t:this.instance_2},{t:this.instance_1}]},3).wait(23));

	// 武器
	this.instance_4 = new lib.枪1("synched",0);
	this.instance_4.setTransform(66.4,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-13.7,x:64.5,y:-16.5},0).wait(3).to({rotation:0,x:66.4,y:-11.9},0).wait(3).to({startPosition:0},0).to({rotation:11.7,x:67.5,y:-10.7},4).wait(9).to({startPosition:0},0).to({rotation:0,x:66.4,y:-11.9},4).wait(3));

	// 弹夹
	this.instance_5 = new lib.弹夹1("synched",0);
	this.instance_5.setTransform(57.1,-7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-13.7,x:56.5,y:-9.8},0).wait(3).to({rotation:0,x:57.1,y:-7.3},0).wait(3).to({y:-7.4},0).to({y:89.3},7).wait(1).to({x:25.6,y:40.3},0).wait(1).to({x:34.1,y:34.6},0).wait(1).to({x:42.4,y:27.8},0).wait(1).to({x:48.4,y:19.3},0).wait(1).to({x:53.2,y:8.7},0).wait(1).to({x:57.1,y:-7.4},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.7,-21.4,97.8,33.2);


(lib.weapon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(33,-9.2);

	this.point1 = new lib.point();
	this.point1.setTransform(60.6,-9.2);

	this.point = new lib.point();
	this.point.setTransform(0,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(41));

	// 手
	this.instance = new lib.Arm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({rotation:65},6).wait(3).to({rotation:0},6).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.6,76.4,46.4);


(lib.weapon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(33,1.8);

	this.point1 = new lib.point();
	this.point1.setTransform(71.4,1.8);

	this.point = new lib.point();
	this.point.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(27));

	// 手
	this.instance = new lib.Arm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({rotation:65},4).wait(5).to({rotation:0},4).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.6,87.1,46.4);


(lib.hostageArm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 瞄准点
	this.point0 = new lib.point();
	this.point0.setTransform(20,0);

	this.point1 = new lib.point();
	this.point1.setTransform(40,0);

	this.point = new lib.point();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.point},{t:this.point1},{t:this.point0}]}).wait(1));

	// 手
	this.instance = new lib.Arm();
	this.instance.setTransform(0,0,1,1,38.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-7.9,58,44.1);


(lib.hostageArm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 骨架
	this.ikNode_701 = new lib.Arm2();
	this.ikNode_701.setTransform(-10.1,20.5,0.997,0.997,-60.5);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.998,0.998,26.2);

	this.ikNode_703 = new lib.Hand3();
	this.ikNode_703.setTransform(9.9,33.2,0.987,0.987,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_703,p:{rotation:29.6,x:9.9,y:33.2}},{t:this.ikNode_688,p:{rotation:26.2}},{t:this.ikNode_701,p:{rotation:-60.5,x:-10.1,y:20.5}}]}).to({state:[{t:this.ikNode_703,p:{rotation:29.3,x:10,y:33.2}},{t:this.ikNode_688,p:{rotation:25.8}},{t:this.ikNode_701,p:{rotation:-60.8,x:-9.9,y:20.6}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:29,x:10.2,y:33.1}},{t:this.ikNode_688,p:{rotation:25.4}},{t:this.ikNode_701,p:{rotation:-61,x:-9.8,y:20.6}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.7,x:10.4,y:33.1}},{t:this.ikNode_688,p:{rotation:25}},{t:this.ikNode_701,p:{rotation:-61.3,x:-9.7,y:20.7}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.5,x:10.6,y:33}},{t:this.ikNode_688,p:{rotation:24.6}},{t:this.ikNode_701,p:{rotation:-61.6,x:-9.6,y:20.7}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.2,x:10.9,y:33}},{t:this.ikNode_688,p:{rotation:24.3}},{t:this.ikNode_701,p:{rotation:-61.9,x:-9.4,y:20.8}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.9,x:11.1,y:33}},{t:this.ikNode_688,p:{rotation:23.9}},{t:this.ikNode_701,p:{rotation:-62.2,x:-9.3,y:20.9}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.6,x:11.2,y:33}},{t:this.ikNode_688,p:{rotation:23.5}},{t:this.ikNode_701,p:{rotation:-62.5,x:-9.1,y:21}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.3,x:11.5,y:32.9}},{t:this.ikNode_688,p:{rotation:23.1}},{t:this.ikNode_701,p:{rotation:-62.8,x:-9,y:21}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27,x:11.7,y:32.8}},{t:this.ikNode_688,p:{rotation:22.7}},{t:this.ikNode_701,p:{rotation:-63.1,x:-8.8,y:21.1}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:26.7,x:11.8,y:32.7}},{t:this.ikNode_688,p:{rotation:22.3}},{t:this.ikNode_701,p:{rotation:-63.3,x:-8.6,y:21.1}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27,x:11.7,y:32.8}},{t:this.ikNode_688,p:{rotation:22.7}},{t:this.ikNode_701,p:{rotation:-63.1,x:-8.8,y:21.1}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.3,x:11.5,y:32.9}},{t:this.ikNode_688,p:{rotation:23.1}},{t:this.ikNode_701,p:{rotation:-62.8,x:-9,y:21}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.6,x:11.2,y:32.9}},{t:this.ikNode_688,p:{rotation:23.5}},{t:this.ikNode_701,p:{rotation:-62.5,x:-9.1,y:21}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:27.9,x:11.1,y:32.9}},{t:this.ikNode_688,p:{rotation:23.9}},{t:this.ikNode_701,p:{rotation:-62.2,x:-9.3,y:20.8}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.2,x:10.9,y:33}},{t:this.ikNode_688,p:{rotation:24.3}},{t:this.ikNode_701,p:{rotation:-61.9,x:-9.4,y:20.8}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.5,x:10.6,y:33}},{t:this.ikNode_688,p:{rotation:24.6}},{t:this.ikNode_701,p:{rotation:-61.6,x:-9.5,y:20.7}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:28.7,x:10.4,y:33}},{t:this.ikNode_688,p:{rotation:25}},{t:this.ikNode_701,p:{rotation:-61.3,x:-9.7,y:20.6}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:29,x:10.2,y:33.1}},{t:this.ikNode_688,p:{rotation:25.4}},{t:this.ikNode_701,p:{rotation:-61,x:-9.8,y:20.6}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:29.3,x:10,y:33.1}},{t:this.ikNode_688,p:{rotation:25.8}},{t:this.ikNode_701,p:{rotation:-60.8,x:-9.9,y:20.6}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:29.6,x:9.9,y:33.2}},{t:this.ikNode_688,p:{rotation:26.2}},{t:this.ikNode_701,p:{rotation:-60.5,x:-10.1,y:20.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-11.3,54.5,57.9);


(lib.arm6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":29,"2":45,"3":57});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(55));

	// 骨架
	this.ikNode_808 = new lib.Arm2();
	this.ikNode_808.setTransform(21.6,8.3,0.998,0.998,-124.8);

	this.ikNode_807 = new lib.Arm1();
	this.ikNode_807.setTransform(0,0,0.998,0.998,-69);

	this.ikNode_809 = new lib.Hand4();
	this.ikNode_809.setTransform(41.9,-4.7,0.999,0.999,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_809,p:{rotation:1.6,x:41.9,y:-4.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-69}},{t:this.ikNode_808,p:{rotation:-124.8,y:8.3,x:21.6}}]}).to({state:[{t:this.ikNode_809,p:{rotation:1.5,x:41.8,y:-4.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-68.6}},{t:this.ikNode_808,p:{rotation:-125,y:8.4,x:21.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.4,x:41.7,y:-4.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-68.2}},{t:this.ikNode_808,p:{rotation:-125.3,y:8.6,x:21.5}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.4,x:41.5,y:-4.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67.8}},{t:this.ikNode_808,p:{rotation:-125.5,y:8.7,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.3,x:41.4,y:-4.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67.4}},{t:this.ikNode_808,p:{rotation:-125.7,y:8.9,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.2,x:41.2,y:-4.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67}},{t:this.ikNode_808,p:{rotation:-126,y:9.1,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.2,x:41.2,y:-4.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.6}},{t:this.ikNode_808,p:{rotation:-126.2,y:9.2,x:21.3}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.1,x:41,y:-4.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.2}},{t:this.ikNode_808,p:{rotation:-126.5,y:9.4,x:21.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.1,x:40.9,y:-4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-65.8}},{t:this.ikNode_808,p:{rotation:-126.7,y:9.5,x:21.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1,x:40.8,y:-4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-65.4}},{t:this.ikNode_808,p:{rotation:-127,y:9.7,x:21.1}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:0.9,x:40.7,y:-4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-65}},{t:this.ikNode_808,p:{rotation:-127.2,y:9.8,x:21.1}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1,x:40.8,y:-4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-65.4}},{t:this.ikNode_808,p:{rotation:-127,y:9.7,x:21.1}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.1,x:40.9,y:-4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-65.8}},{t:this.ikNode_808,p:{rotation:-126.7,y:9.5,x:21.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.1,x:41,y:-4.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.2}},{t:this.ikNode_808,p:{rotation:-126.5,y:9.4,x:21.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.2,x:41.2,y:-4.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.6}},{t:this.ikNode_808,p:{rotation:-126.2,y:9.2,x:21.3}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.2,x:41.2,y:-4.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67}},{t:this.ikNode_808,p:{rotation:-126,y:9.1,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.3,x:41.4,y:-4.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67.4}},{t:this.ikNode_808,p:{rotation:-125.7,y:8.9,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.4,x:41.5,y:-4.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67.8}},{t:this.ikNode_808,p:{rotation:-125.5,y:8.7,x:21.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.4,x:41.7,y:-4.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-68.2}},{t:this.ikNode_808,p:{rotation:-125.3,y:8.6,x:21.5}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.5,x:41.8,y:-4.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-68.6}},{t:this.ikNode_808,p:{rotation:-125,y:8.4,x:21.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-5.8,x:39,y:-1.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-57}},{t:this.ikNode_808,p:{rotation:-127.8,y:12.7,x:19.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-13.2,x:35.1,y:1.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-45}},{t:this.ikNode_808,p:{rotation:-130.9,y:16.4,x:16.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-14.2,x:33.4,y:2.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-39.9}},{t:this.ikNode_808,p:{rotation:-131.7,y:17.8,x:14.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-15.2,x:31.4,y:3.4,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:-34.8}},{t:this.ikNode_808,p:{rotation:-132.6,y:19,x:13.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-16.2,x:29.4,y:4.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-29.7}},{t:this.ikNode_808,p:{rotation:-133.4,y:20.1,x:11.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-17.3,x:27.4,y:4.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-24.6}},{t:this.ikNode_808,p:{rotation:-134.2,y:21.1,x:9.5}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-18.3,x:25.2,y:5.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:-19.5}},{t:this.ikNode_808,p:{rotation:-135,y:21.9,x:7.7}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-16.6,x:28.7,y:4.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-28}},{t:this.ikNode_808,p:{rotation:-133.7,y:20.5,x:10.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-14.9,x:32,y:3.1,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:-36.5}},{t:this.ikNode_808,p:{rotation:-132.3,y:18.6,x:13.7}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-13.2,x:35.1,y:1.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-45}},{t:this.ikNode_808,p:{rotation:-130.9,y:16.4,x:16.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:0.2,x:34.4,y:9.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-32.5}},{t:this.ikNode_808,p:{rotation:-115.7,y:19.6,x:12.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:13.6,x:31.7,y:18.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-19.9}},{t:this.ikNode_808,p:{rotation:-100.5,y:21.8,x:7.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:27,x:26.8,y:25.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-7.4}},{t:this.ikNode_808,p:{rotation:-85.3,y:23,x:2.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:40.3,x:20.2,y:31.9,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:5.2}},{t:this.ikNode_808,p:{rotation:-70.1,y:23.1,x:-2.1}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:53.7,x:12.1,y:36.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:17.7}},{t:this.ikNode_808,p:{rotation:-54.9,y:22,x:-7.1}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:45.9,x:10.4,y:32.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:27}},{t:this.ikNode_808,p:{rotation:-62.7,y:20.5,x:-10.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:38.1,x:8.6,y:27.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:36.3}},{t:this.ikNode_808,p:{rotation:-70.5,y:18.5,x:-13.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:30.3,x:6.8,y:21.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:45.7}},{t:this.ikNode_808,p:{rotation:-78.3,y:16,x:-16.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:38.1,x:8.6,y:27.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:36.3}},{t:this.ikNode_808,p:{rotation:-70.5,y:18.5,x:-13.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:45.9,x:10.4,y:32.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:27}},{t:this.ikNode_808,p:{rotation:-62.7,y:20.5,x:-10.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:53.7,x:12.1,y:36.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:17.7}},{t:this.ikNode_808,p:{rotation:-54.9,y:22,x:-7.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:46.2,x:18,y:33,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:9.3}},{t:this.ikNode_808,p:{rotation:-66.9,y:22.8,x:-3.9}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:38.6,x:23.1,y:28.5,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:0.8}},{t:this.ikNode_808,p:{rotation:-78.9,y:23.1,x:-0.5}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:31.1,x:27,y:23.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-7.6}},{t:this.ikNode_808,p:{rotation:-90.9,y:22.9,x:2.9}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:23.5,x:29.8,y:17.5,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-16}},{t:this.ikNode_808,p:{rotation:-102.9,y:22.2,x:6.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:16,x:31.6,y:11.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-24.5}},{t:this.ikNode_808,p:{rotation:-114.9,y:21.1,x:9.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:12.2,x:31.9,y:11.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-25.6}},{t:this.ikNode_808,p:{rotation:-115.6,y:20.9,x:9.7}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:8.4,x:32.2,y:10.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-26.8}},{t:this.ikNode_808,p:{rotation:-116.3,y:20.6,x:10.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:4.6,x:32.5,y:10,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-27.9}},{t:this.ikNode_808,p:{rotation:-117.1,y:20.5,x:10.6}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:8.4,x:32.2,y:10.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-26.8}},{t:this.ikNode_808,p:{rotation:-116.3,y:20.6,x:10.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:12.2,x:31.9,y:11.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-25.6}},{t:this.ikNode_808,p:{rotation:-115.6,y:20.9,x:9.7}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:16,x:31.6,y:11.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-24.5}},{t:this.ikNode_808,p:{rotation:-114.9,y:21.1,x:9.4}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:3.6,x:35.3,y:6.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-38.6}},{t:this.ikNode_808,p:{rotation:-120.9,y:18.2,x:14.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-8.8,x:38,y:0.2,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:-52.7}},{t:this.ikNode_808,p:{rotation:-126.9,y:14.1,x:18.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-28.2,x:37.1,y:-5.9,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-61.1}},{t:this.ikNode_808,p:{rotation:-137.1,y:11.3,x:20}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-35.3,x:34.7,y:-5.1,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-55.3}},{t:this.ikNode_808,p:{rotation:-141.2,y:13.3,x:18.7}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-42.4,x:31.8,y:-4.4,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-49.6}},{t:this.ikNode_808,p:{rotation:-145.4,y:15,x:17.3}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-49.5,x:28.8,y:-3.7,scaleX:0.998,scaleY:0.998}},{t:this.ikNode_807,p:{rotation:-43.8}},{t:this.ikNode_808,p:{rotation:-149.6,y:16.8,x:15.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-56.5,x:25.4,y:-3.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-38.1}},{t:this.ikNode_808,p:{rotation:-153.7,y:18.2,x:14}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-56.5,x:25.4,y:-3.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-38.1}},{t:this.ikNode_808,p:{rotation:-153.7,y:18.2,x:14}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-56.5,x:25.4,y:-3.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-38.1}},{t:this.ikNode_808,p:{rotation:-153.7,y:18.2,x:14}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-56.5,x:25.4,y:-3.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-38.1}},{t:this.ikNode_808,p:{rotation:-153.7,y:18.2,x:14}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-44.8,x:30.8,y:-4.2,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-47.7}},{t:this.ikNode_808,p:{rotation:-146.8,y:15.7,x:16.8}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-33,x:35.5,y:-5.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-57.2}},{t:this.ikNode_808,p:{rotation:-139.8,y:12.6,x:19.2}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-21.2,x:39.4,y:-6.6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-66.8}},{t:this.ikNode_808,p:{rotation:-132.9,y:9.2,x:21}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-13.6,x:40.2,y:-6,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-67.6}},{t:this.ikNode_808,p:{rotation:-130.2,y:8.9,x:21.3}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:-6,x:41.1,y:-5.3,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-68.3}},{t:this.ikNode_808,p:{rotation:-127.5,y:8.6,x:21.5}}]},1).to({state:[{t:this.ikNode_809,p:{rotation:1.6,x:41.9,y:-4.7,scaleX:0.999,scaleY:0.999}},{t:this.ikNode_807,p:{rotation:-69}},{t:this.ikNode_808,p:{rotation:-124.8,y:8.3,x:21.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-15.7,73.2,39.3);


(lib.arm5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":29,"2":45,"3":57});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(55));

	// 骨架
	this.ikNode_690 = new lib.Arm2();
	this.ikNode_690.setTransform(16.8,16.1,0.999,0.999,-110.1);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.999,0.999,-46.2);

	this.ikNode_693 = new lib.Hand4();
	this.ikNode_693.setTransform(39.6,8.6,1,1,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_693,p:{x:39.6,rotation:-1.6,y:8.6}},{t:this.ikNode_688,p:{rotation:-46.2}},{t:this.ikNode_690,p:{rotation:-110.1,x:16.8,y:16.1}}]}).to({state:[{t:this.ikNode_693,p:{x:39.5,rotation:-1.6,y:8.6}},{t:this.ikNode_688,p:{rotation:-45.9}},{t:this.ikNode_690,p:{rotation:-110.2,x:16.6,y:16.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-1.7,y:8.7}},{t:this.ikNode_688,p:{rotation:-45.6}},{t:this.ikNode_690,p:{rotation:-110.3,x:16.6,y:16.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.3,rotation:-1.8,y:8.8}},{t:this.ikNode_688,p:{rotation:-45.3}},{t:this.ikNode_690,p:{rotation:-110.4,x:16.4,y:16.4}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.2,rotation:-1.9,y:8.9}},{t:this.ikNode_688,p:{rotation:-44.9}},{t:this.ikNode_690,p:{rotation:-110.4,x:16.3,y:16.4}}]},1).to({state:[{t:this.ikNode_693,p:{x:39,rotation:-2,y:8.9}},{t:this.ikNode_688,p:{rotation:-44.6}},{t:this.ikNode_690,p:{rotation:-110.5,x:16.2,y:16.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.9,rotation:-2,y:8.9}},{t:this.ikNode_688,p:{rotation:-44.3}},{t:this.ikNode_690,p:{rotation:-110.6,x:16.1,y:16.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.9,rotation:-2.1,y:9}},{t:this.ikNode_688,p:{rotation:-44}},{t:this.ikNode_690,p:{rotation:-110.7,x:16,y:16.7}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.8,rotation:-2.2,y:9}},{t:this.ikNode_688,p:{rotation:-43.6}},{t:this.ikNode_690,p:{rotation:-110.8,x:15.9,y:16.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.6,rotation:-2.3,y:9.1}},{t:this.ikNode_688,p:{rotation:-43.3}},{t:this.ikNode_690,p:{rotation:-110.8,x:15.8,y:16.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.5,rotation:-2.4,y:9.1}},{t:this.ikNode_688,p:{rotation:-43}},{t:this.ikNode_690,p:{rotation:-110.9,x:15.8,y:17}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.6,rotation:-2.3,y:9.1}},{t:this.ikNode_688,p:{rotation:-43.3}},{t:this.ikNode_690,p:{rotation:-110.8,x:15.8,y:16.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.8,rotation:-2.2,y:9}},{t:this.ikNode_688,p:{rotation:-43.6}},{t:this.ikNode_690,p:{rotation:-110.8,x:15.9,y:16.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.9,rotation:-2.1,y:9}},{t:this.ikNode_688,p:{rotation:-44}},{t:this.ikNode_690,p:{rotation:-110.7,x:16,y:16.7}}]},1).to({state:[{t:this.ikNode_693,p:{x:38.9,rotation:-2,y:8.9}},{t:this.ikNode_688,p:{rotation:-44.3}},{t:this.ikNode_690,p:{rotation:-110.6,x:16.1,y:16.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:39,rotation:-2,y:8.9}},{t:this.ikNode_688,p:{rotation:-44.6}},{t:this.ikNode_690,p:{rotation:-110.5,x:16.2,y:16.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.2,rotation:-1.9,y:8.8}},{t:this.ikNode_688,p:{rotation:-44.9}},{t:this.ikNode_690,p:{rotation:-110.4,x:16.3,y:16.4}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.3,rotation:-1.8,y:8.8}},{t:this.ikNode_688,p:{rotation:-45.2}},{t:this.ikNode_690,p:{rotation:-110.4,x:16.4,y:16.4}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.3,rotation:-1.7,y:8.7}},{t:this.ikNode_688,p:{rotation:-45.6}},{t:this.ikNode_690,p:{rotation:-110.3,x:16.6,y:16.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.5,rotation:-1.6,y:8.6}},{t:this.ikNode_688,p:{rotation:-45.9}},{t:this.ikNode_690,p:{rotation:-110.2,x:16.6,y:16.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.6,rotation:-1.6,y:8.5}},{t:this.ikNode_688,p:{rotation:-46.2}},{t:this.ikNode_690,p:{rotation:-110.1,x:16.8,y:16.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.6,rotation:-1.6,y:8.5}},{t:this.ikNode_688,p:{rotation:-46.2}},{t:this.ikNode_690,p:{rotation:-110.1,x:16.8,y:16.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:37.4,rotation:-3.9,y:9.3}},{t:this.ikNode_688,p:{rotation:-40.1}},{t:this.ikNode_690,p:{rotation:-112.5,x:14.9,y:17.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:35.1,rotation:-6.3,y:9.8}},{t:this.ikNode_688,p:{rotation:-34}},{t:this.ikNode_690,p:{rotation:-114.9,x:12.9,y:19.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:32.5,rotation:-8.7,y:10.2}},{t:this.ikNode_688,p:{rotation:-28}},{t:this.ikNode_690,p:{rotation:-117.3,x:10.8,y:20.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:29.8,rotation:-11.1,y:10.4}},{t:this.ikNode_688,p:{rotation:-21.9}},{t:this.ikNode_690,p:{rotation:-119.7,x:8.6,y:21.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:27,rotation:-13.5,y:10.2}},{t:this.ikNode_688,p:{rotation:-15.8}},{t:this.ikNode_690,p:{rotation:-122.1,x:6.3,y:22.4}}]},1).to({state:[{t:this.ikNode_693,p:{x:30.3,rotation:-11.6,y:9.9}},{t:this.ikNode_688,p:{rotation:-23.3}},{t:this.ikNode_690,p:{rotation:-120.2,x:9.2,y:21.3}}]},1).to({state:[{t:this.ikNode_693,p:{x:33.4,rotation:-9.7,y:9.2}},{t:this.ikNode_688,p:{rotation:-30.8}},{t:this.ikNode_690,p:{rotation:-118.2,x:11.8,y:19.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:36.2,rotation:-7.8,y:8.2}},{t:this.ikNode_688,p:{rotation:-38.4}},{t:this.ikNode_690,p:{rotation:-116.3,x:14.3,y:18.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:34,rotation:4.5,y:15.6}},{t:this.ikNode_688,p:{rotation:-27.1}},{t:this.ikNode_690,p:{rotation:-104,x:10.5,y:20.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:30.4,rotation:16.8,y:22.3}},{t:this.ikNode_688,p:{rotation:-15.9}},{t:this.ikNode_690,p:{rotation:-91.7,x:6.2,y:22.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:25.3,rotation:29.1,y:28.2}},{t:this.ikNode_688,p:{rotation:-4.7}},{t:this.ikNode_690,p:{rotation:-79.4,x:1.8,y:23}}]},1).to({state:[{t:this.ikNode_693,p:{x:19.2,rotation:41.4,y:33}},{t:this.ikNode_688,p:{rotation:6.5}},{t:this.ikNode_690,p:{rotation:-67.2,x:-2.7,y:23}}]},1).to({state:[{t:this.ikNode_693,p:{x:12.1,rotation:53.7,y:36.5}},{t:this.ikNode_688,p:{rotation:17.7}},{t:this.ikNode_690,p:{rotation:-54.9,x:-7.1,y:22}}]},1).to({state:[{t:this.ikNode_693,p:{x:10.4,rotation:45.9,y:32.3}},{t:this.ikNode_688,p:{rotation:27}},{t:this.ikNode_690,p:{rotation:-62.7,x:-10.6,y:20.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:8.6,rotation:38.1,y:27.3}},{t:this.ikNode_688,p:{rotation:36.3}},{t:this.ikNode_690,p:{rotation:-70.5,x:-13.8,y:18.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:6.8,rotation:30.3,y:21.6}},{t:this.ikNode_688,p:{rotation:45.7}},{t:this.ikNode_690,p:{rotation:-78.3,x:-16.6,y:16}}]},1).to({state:[{t:this.ikNode_693,p:{x:8.6,rotation:38.1,y:27.3}},{t:this.ikNode_688,p:{rotation:36.3}},{t:this.ikNode_690,p:{rotation:-70.5,x:-13.8,y:18.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:10.4,rotation:45.9,y:32.3}},{t:this.ikNode_688,p:{rotation:27}},{t:this.ikNode_690,p:{rotation:-62.7,x:-10.6,y:20.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:12.1,rotation:53.7,y:36.4}},{t:this.ikNode_688,p:{rotation:17.7}},{t:this.ikNode_690,p:{rotation:-54.9,x:-7.2,y:21.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:18.3,rotation:48.2,y:35.6}},{t:this.ikNode_688,p:{rotation:5.2}},{t:this.ikNode_690,p:{rotation:-60.4,x:-2.2,y:23}}]},1).to({state:[{t:this.ikNode_693,p:{x:24.5,rotation:42.7,y:33.5}},{t:this.ikNode_688,p:{rotation:-7.3}},{t:this.ikNode_690,p:{rotation:-65.8,x:2.8,y:23}}]},1).to({state:[{t:this.ikNode_693,p:{x:30.3,rotation:37.2,y:30.2}},{t:this.ikNode_688,p:{rotation:-19.9}},{t:this.ikNode_690,p:{rotation:-71.3,x:7.7,y:21.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:35.6,rotation:31.7,y:25.8}},{t:this.ikNode_688,p:{rotation:-32.4}},{t:this.ikNode_690,p:{rotation:-76.8,x:12.2,y:19.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:40,rotation:26.2,y:20.4}},{t:this.ikNode_688,p:{rotation:-44.9}},{t:this.ikNode_690,p:{rotation:-82.3,x:16.1,y:16.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.8,rotation:25,y:20.1}},{t:this.ikNode_688,p:{rotation:-44.2}},{t:this.ikNode_690,p:{rotation:-83.5,x:15.9,y:16.7}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.7,rotation:23.8,y:19.8}},{t:this.ikNode_688,p:{rotation:-43.4}},{t:this.ikNode_690,p:{rotation:-84.8,x:15.7,y:16.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.6,rotation:22.6,y:19.4}},{t:this.ikNode_688,p:{rotation:-42.7}},{t:this.ikNode_690,p:{rotation:-86,x:15.5,y:17.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.7,rotation:23.8,y:19.8}},{t:this.ikNode_688,p:{rotation:-43.4}},{t:this.ikNode_690,p:{rotation:-84.8,x:15.7,y:16.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.8,rotation:25,y:20.1}},{t:this.ikNode_688,p:{rotation:-44.2}},{t:this.ikNode_690,p:{rotation:-83.5,x:15.9,y:16.7}}]},1).to({state:[{t:this.ikNode_693,p:{x:40,rotation:26.2,y:20.4}},{t:this.ikNode_688,p:{rotation:-44.9}},{t:this.ikNode_690,p:{rotation:-82.3,x:16.2,y:16.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:40.8,rotation:14.2,y:14.9}},{t:this.ikNode_688,p:{rotation:-46.8}},{t:this.ikNode_690,p:{rotation:-94.4,x:16.7,y:15.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:40.6,rotation:2.2,y:9.3}},{t:this.ikNode_688,p:{rotation:-48.7}},{t:this.ikNode_690,p:{rotation:-106.4,x:17.1,y:15.3}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-9.8,y:3.9}},{t:this.ikNode_688,p:{rotation:-50.7}},{t:this.ikNode_690,p:{rotation:-118.4,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-9.8,y:3.9}},{t:this.ikNode_688,p:{rotation:-50.7}},{t:this.ikNode_690,p:{rotation:-118.4,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-9.8,y:3.9}},{t:this.ikNode_688,p:{rotation:-50.7}},{t:this.ikNode_690,p:{rotation:-118.4,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-9.8,y:3.9}},{t:this.ikNode_688,p:{rotation:-50.7}},{t:this.ikNode_690,p:{rotation:-118.4,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:36.1,rotation:-12.8,y:5.6}},{t:this.ikNode_688,p:{rotation:-41.1}},{t:this.ikNode_690,p:{rotation:-121.3,x:15,y:17.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:32.4,rotation:-15.7,y:6.8}},{t:this.ikNode_688,p:{rotation:-31.5}},{t:this.ikNode_690,p:{rotation:-124.3,x:11.8,y:19.7}}]},1).to({state:[{t:this.ikNode_693,p:{x:28.2,rotation:-18.6,y:7.4}},{t:this.ikNode_688,p:{rotation:-22}},{t:this.ikNode_690,p:{rotation:-127.2,x:8.4,y:21.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:23.8,rotation:-21.6,y:7.6}},{t:this.ikNode_688,p:{rotation:-12.4}},{t:this.ikNode_690,p:{rotation:-130.1,x:4.7,y:22.6}}]},1).to({state:[{t:this.ikNode_693,p:{x:19.1,rotation:-24.5,y:7}},{t:this.ikNode_688,p:{rotation:-2.8}},{t:this.ikNode_690,p:{rotation:-133.1,x:0.9,y:23.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:19.1,rotation:-24.5,y:7.1}},{t:this.ikNode_688,p:{rotation:-2.8}},{t:this.ikNode_690,p:{rotation:-133.1,x:0.9,y:23.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:19.1,rotation:-24.5,y:7.1}},{t:this.ikNode_688,p:{rotation:-2.8}},{t:this.ikNode_690,p:{rotation:-133.1,x:0.9,y:23.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:19.1,rotation:-24.5,y:7.1}},{t:this.ikNode_688,p:{rotation:-2.8}},{t:this.ikNode_690,p:{rotation:-133.1,x:0.9,y:23.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:26.8,rotation:-19.6,y:7.5}},{t:this.ikNode_688,p:{rotation:-18.7}},{t:this.ikNode_690,p:{rotation:-128.2,x:7.2,y:21.9}}]},1).to({state:[{t:this.ikNode_693,p:{x:33.6,rotation:-14.8,y:6.4}},{t:this.ikNode_688,p:{rotation:-34.6}},{t:this.ikNode_690,p:{rotation:-123.3,x:12.9,y:19.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.4,rotation:-9.9,y:3.9}},{t:this.ikNode_688,p:{rotation:-50.5}},{t:this.ikNode_690,p:{rotation:-118.5,x:17.6,y:14.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:36.6,rotation:-12.1,y:5.5}},{t:this.ikNode_688,p:{rotation:-42.2}},{t:this.ikNode_690,p:{rotation:-120.6,x:15.3,y:17.1}}]},1).to({state:[{t:this.ikNode_693,p:{x:33.6,rotation:-14.3,y:6.8}},{t:this.ikNode_688,p:{rotation:-33.9}},{t:this.ikNode_690,p:{rotation:-122.8,x:12.8,y:19.2}}]},1).to({state:[{t:this.ikNode_693,p:{x:30.1,rotation:-16.4,y:7.6}},{t:this.ikNode_688,p:{rotation:-25.6}},{t:this.ikNode_690,p:{rotation:-125,x:9.8,y:20.8}}]},1).to({state:[{t:this.ikNode_693,p:{x:33.6,rotation:-11.5,y:8.2}},{t:this.ikNode_688,p:{rotation:-32.5}},{t:this.ikNode_690,p:{rotation:-120,x:12.2,y:19.5}}]},1).to({state:[{t:this.ikNode_693,p:{x:36.8,rotation:-6.5,y:8.5}},{t:this.ikNode_688,p:{rotation:-39.3}},{t:this.ikNode_690,p:{rotation:-115.1,x:14.6,y:18}}]},1).to({state:[{t:this.ikNode_693,p:{x:39.6,rotation:-1.6,y:8.5}},{t:this.ikNode_688,p:{rotation:-46.2}},{t:this.ikNode_690,p:{rotation:-110.1,x:16.8,y:16.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-9.9,73.1,40.6);


(lib.arm4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":29,"2":45,"3":57});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(55));

	// 骨架
	this.ikNode_695 = new lib.Arm2();
	this.ikNode_695.setTransform(18.6,13.8,0.999,0.999,-118.6);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.999,0.999,-53.5);

	this.ikNode_696 = new lib.Hand4();
	this.ikNode_696.setTransform(40.1,2.9,0.999,0.999,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_696,p:{rotation:-1.8,x:40.1,y:2.9}},{t:this.ikNode_688,p:{rotation:-53.5}},{t:this.ikNode_695,p:{rotation:-118.6,x:18.6,y:13.8}}]}).to({state:[{t:this.ikNode_696,p:{rotation:-2,x:40,y:3}},{t:this.ikNode_688,p:{rotation:-53.1}},{t:this.ikNode_695,p:{rotation:-118.8,x:18.5,y:13.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.1,x:39.8,y:3}},{t:this.ikNode_688,p:{rotation:-52.8}},{t:this.ikNode_695,p:{rotation:-118.9,x:18.3,y:14}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.2,x:39.7,y:3.1}},{t:this.ikNode_688,p:{rotation:-52.4}},{t:this.ikNode_695,p:{rotation:-119,x:18.3,y:14}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.4,x:39.6,y:3.1}},{t:this.ikNode_688,p:{rotation:-52.1}},{t:this.ikNode_695,p:{rotation:-119.2,x:18.2,y:14.2}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.5,x:39.5,y:3.2}},{t:this.ikNode_688,p:{rotation:-51.7}},{t:this.ikNode_695,p:{rotation:-119.3,x:18.1,y:14.3}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.6,x:39.4,y:3.2}},{t:this.ikNode_688,p:{rotation:-51.3}},{t:this.ikNode_695,p:{rotation:-119.5,x:18,y:14.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.8,x:39.3,y:3.3}},{t:this.ikNode_688,p:{rotation:-51}},{t:this.ikNode_695,p:{rotation:-119.6,x:17.9,y:14.5}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.9,x:39.2,y:3.4}},{t:this.ikNode_688,p:{rotation:-50.6}},{t:this.ikNode_695,p:{rotation:-119.7,x:17.8,y:14.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-3.1,x:39,y:3.4}},{t:this.ikNode_688,p:{rotation:-50.3}},{t:this.ikNode_695,p:{rotation:-119.9,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-3.2,x:38.9,y:3.5}},{t:this.ikNode_688,p:{rotation:-49.9}},{t:this.ikNode_695,p:{rotation:-120,x:17.6,y:14.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-3.1,x:39,y:3.4}},{t:this.ikNode_688,p:{rotation:-50.3}},{t:this.ikNode_695,p:{rotation:-119.9,x:17.7,y:14.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.9,x:39.2,y:3.4}},{t:this.ikNode_688,p:{rotation:-50.6}},{t:this.ikNode_695,p:{rotation:-119.7,x:17.8,y:14.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.8,x:39.3,y:3.3}},{t:this.ikNode_688,p:{rotation:-51}},{t:this.ikNode_695,p:{rotation:-119.6,x:17.9,y:14.5}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.6,x:39.4,y:3.2}},{t:this.ikNode_688,p:{rotation:-51.3}},{t:this.ikNode_695,p:{rotation:-119.5,x:18,y:14.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.5,x:39.5,y:3.1}},{t:this.ikNode_688,p:{rotation:-51.7}},{t:this.ikNode_695,p:{rotation:-119.3,x:18.1,y:14.3}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.4,x:39.6,y:3.1}},{t:this.ikNode_688,p:{rotation:-52.1}},{t:this.ikNode_695,p:{rotation:-119.2,x:18.2,y:14.2}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.2,x:39.7,y:3}},{t:this.ikNode_688,p:{rotation:-52.4}},{t:this.ikNode_695,p:{rotation:-119,x:18.3,y:14}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2.1,x:39.8,y:3}},{t:this.ikNode_688,p:{rotation:-52.8}},{t:this.ikNode_695,p:{rotation:-118.9,x:18.3,y:14}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-2,x:39.9,y:2.9}},{t:this.ikNode_688,p:{rotation:-53.1}},{t:this.ikNode_695,p:{rotation:-118.8,x:18.5,y:13.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-1.8,x:40.1,y:2.9}},{t:this.ikNode_688,p:{rotation:-53.5}},{t:this.ikNode_695,p:{rotation:-118.6,x:18.6,y:13.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-1.8,x:40.1,y:2.9}},{t:this.ikNode_688,p:{rotation:-53.5}},{t:this.ikNode_695,p:{rotation:-118.6,x:18.6,y:13.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-4.8,x:37.2,y:4.4}},{t:this.ikNode_688,p:{rotation:-44.8}},{t:this.ikNode_695,p:{rotation:-121.6,x:16.2,y:16.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-7.8,x:33.9,y:5.6}},{t:this.ikNode_688,p:{rotation:-36.1}},{t:this.ikNode_695,p:{rotation:-124.6,x:13.6,y:18.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-10.8,x:30.1,y:6.4}},{t:this.ikNode_688,p:{rotation:-27.4}},{t:this.ikNode_695,p:{rotation:-127.6,x:10.6,y:20.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-13.7,x:26.2,y:6.8}},{t:this.ikNode_688,p:{rotation:-18.6}},{t:this.ikNode_695,p:{rotation:-130.5,x:7.3,y:21.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-16.7,x:21.9,y:6.7}},{t:this.ikNode_688,p:{rotation:-9.9}},{t:this.ikNode_695,p:{rotation:-133.5,x:4,y:22.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-11.8,x:28.8,y:6.5}},{t:this.ikNode_688,p:{rotation:-24.3}},{t:this.ikNode_695,p:{rotation:-128.6,x:9.4,y:21}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-6.9,x:34.8,y:5.3}},{t:this.ikNode_688,p:{rotation:-38.7}},{t:this.ikNode_695,p:{rotation:-123.7,x:14.3,y:17.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-1.9,x:39.9,y:3}},{t:this.ikNode_688,p:{rotation:-53}},{t:this.ikNode_695,p:{rotation:-118.7,x:18.3,y:13.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:10.5,x:37.7,y:12}},{t:this.ikNode_688,p:{rotation:-38.6}},{t:this.ikNode_695,p:{rotation:-106.3,x:14.3,y:17.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:23,x:33.5,y:20.2}},{t:this.ikNode_688,p:{rotation:-24.2}},{t:this.ikNode_695,p:{rotation:-93.8,x:9.4,y:20.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:35.5,x:27.6,y:27.1}},{t:this.ikNode_688,p:{rotation:-9.9}},{t:this.ikNode_695,p:{rotation:-81.3,x:3.9,y:22.5}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:48,x:20.3,y:32.3}},{t:this.ikNode_688,p:{rotation:4.5}},{t:this.ikNode_695,p:{rotation:-68.8,x:-1.7,y:22.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:60.5,x:12.2,y:35.6}},{t:this.ikNode_688,p:{rotation:18.9}},{t:this.ikNode_695,p:{rotation:-56.3,x:-7.2,y:21.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:53,x:10.3,y:31.5}},{t:this.ikNode_688,p:{rotation:28.7}},{t:this.ikNode_695,p:{rotation:-63.8,x:-10.8,y:20.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:45.5,x:8.4,y:26.5}},{t:this.ikNode_688,p:{rotation:38.4}},{t:this.ikNode_695,p:{rotation:-71.3,x:-14.1,y:17.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:38,x:6.4,y:20.8}},{t:this.ikNode_688,p:{rotation:48.1}},{t:this.ikNode_695,p:{rotation:-78.8,x:-16.8,y:15.2}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:45.5,x:8.4,y:26.5}},{t:this.ikNode_688,p:{rotation:38.4}},{t:this.ikNode_695,p:{rotation:-71.3,x:-14.1,y:17.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:53,x:10.3,y:31.5}},{t:this.ikNode_688,p:{rotation:28.7}},{t:this.ikNode_695,p:{rotation:-63.8,x:-10.8,y:20.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:60.5,x:12.2,y:35.7}},{t:this.ikNode_688,p:{rotation:18.9}},{t:this.ikNode_695,p:{rotation:-56.3,x:-7.2,y:21.6}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:50.1,x:17.6,y:32.8}},{t:this.ikNode_688,p:{rotation:10.5}},{t:this.ikNode_695,p:{rotation:-66.7,x:-4.1,y:22.5}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:39.8,x:22.5,y:29.1}},{t:this.ikNode_688,p:{rotation:2.2}},{t:this.ikNode_695,p:{rotation:-77,x:-0.8,y:22.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:29.5,x:26.5,y:24.6}},{t:this.ikNode_688,p:{rotation:-6.2}},{t:this.ikNode_695,p:{rotation:-87.3,x:2.6,y:22.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:19.2,x:29.8,y:19.7}},{t:this.ikNode_688,p:{rotation:-14.6}},{t:this.ikNode_695,p:{rotation:-97.6,x:5.8,y:22.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:8.8,x:32.1,y:14.4}},{t:this.ikNode_688,p:{rotation:-23}},{t:this.ikNode_695,p:{rotation:-108,x:9.1,y:21.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:6.4,x:32.3,y:13.3}},{t:this.ikNode_688,p:{rotation:-24.1}},{t:this.ikNode_695,p:{rotation:-110.4,x:9.4,y:20.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:4,x:32.2,y:12.1}},{t:this.ikNode_688,p:{rotation:-25.1}},{t:this.ikNode_695,p:{rotation:-112.8,x:9.7,y:20.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:1.6,x:32.2,y:11.1}},{t:this.ikNode_688,p:{rotation:-26.2}},{t:this.ikNode_695,p:{rotation:-115.2,x:10.1,y:20.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:4,x:32.2,y:12.1}},{t:this.ikNode_688,p:{rotation:-25.1}},{t:this.ikNode_695,p:{rotation:-112.8,x:9.7,y:20.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:6.4,x:32.3,y:13.3}},{t:this.ikNode_688,p:{rotation:-24.1}},{t:this.ikNode_695,p:{rotation:-110.4,x:9.4,y:20.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:8.8,x:32.1,y:14.3}},{t:this.ikNode_688,p:{rotation:-23}},{t:this.ikNode_695,p:{rotation:-108,x:9.1,y:21}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:0.8,x:34.9,y:9}},{t:this.ikNode_688,p:{rotation:-34.3}},{t:this.ikNode_695,p:{rotation:-116,x:13.1,y:18.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-7.3,x:36.7,y:3.2}},{t:this.ikNode_688,p:{rotation:-45.6}},{t:this.ikNode_695,p:{rotation:-124.1,x:16.4,y:16}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.4,x:37.6,y:-3}},{t:this.ikNode_688,p:{rotation:-56.9}},{t:this.ikNode_695,p:{rotation:-132.2,x:19.3,y:12.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.4,x:37.5,y:-3.1}},{t:this.ikNode_688,p:{rotation:-56.9}},{t:this.ikNode_695,p:{rotation:-132.2,x:19.3,y:12.3}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.4,x:37.5,y:-3.1}},{t:this.ikNode_688,p:{rotation:-56.9}},{t:this.ikNode_695,p:{rotation:-132.2,x:19.3,y:12.3}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.4,x:37.5,y:-3.1}},{t:this.ikNode_688,p:{rotation:-56.9}},{t:this.ikNode_695,p:{rotation:-132.2,x:19.3,y:12.3}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-19.8,x:34.4,y:-1.8}},{t:this.ikNode_688,p:{rotation:-48.9}},{t:this.ikNode_695,p:{rotation:-136.6,x:17.3,y:15}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-24.2,x:30.8,y:-0.8}},{t:this.ikNode_688,p:{rotation:-41}},{t:this.ikNode_695,p:{rotation:-141,x:15.1,y:17.2}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-28.6,x:26.8,y:-0.1}},{t:this.ikNode_688,p:{rotation:-33}},{t:this.ikNode_695,p:{rotation:-145.4,x:12.6,y:19.2}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-33,x:22.5,y:0.4}},{t:this.ikNode_688,p:{rotation:-25.1}},{t:this.ikNode_695,p:{rotation:-149.8,x:9.7,y:20.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-37.4,x:17.9,y:0.6}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_695,p:{rotation:-154.2,x:6.8,y:21.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-37.4,x:17.9,y:0.6}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_695,p:{rotation:-154.2,x:6.8,y:21.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-37.4,x:17.9,y:0.6}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_695,p:{rotation:-154.2,x:6.8,y:21.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-37.4,x:17.9,y:0.6}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_695,p:{rotation:-154.2,x:6.8,y:21.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-30.2,x:25.3,y:0.1}},{t:this.ikNode_688,p:{rotation:-30.1}},{t:this.ikNode_695,p:{rotation:-147,x:11.5,y:19.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-22.9,x:31.8,y:-1.1}},{t:this.ikNode_688,p:{rotation:-43}},{t:this.ikNode_695,p:{rotation:-139.7,x:15.7,y:16.7}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.7,x:37.3,y:-2.8}},{t:this.ikNode_688,p:{rotation:-56}},{t:this.ikNode_695,p:{rotation:-132.5,x:19,y:12.8}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-17.9,x:37.8,y:-5.3}},{t:this.ikNode_688,p:{rotation:-61.3}},{t:this.ikNode_695,p:{rotation:-134.7,x:20.1,y:10.9}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-20.1,x:38.1,y:-8}},{t:this.ikNode_688,p:{rotation:-66.6}},{t:this.ikNode_695,p:{rotation:-136.9,x:21,y:9.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-22.3,x:38.2,y:-10.7}},{t:this.ikNode_688,p:{rotation:-72}},{t:this.ikNode_695,p:{rotation:-139.1,x:21.8,y:7.1}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-15.5,x:39.3,y:-6.2}},{t:this.ikNode_688,p:{rotation:-65.8}},{t:this.ikNode_695,p:{rotation:-132.3,x:21,y:9.4}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-8.7,x:40,y:-1.6}},{t:this.ikNode_688,p:{rotation:-59.7}},{t:this.ikNode_695,p:{rotation:-125.5,x:19.9,y:11.6}}]},1).to({state:[{t:this.ikNode_696,p:{rotation:-1.8,x:40.1,y:2.9}},{t:this.ikNode_688,p:{rotation:-53.5}},{t:this.ikNode_695,p:{rotation:-118.6,x:18.6,y:13.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-9.8,73,38.7);


(lib.arm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":22,"2":37});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(24));

	// 骨架
	this.ikNode_698 = new lib.Arm2();
	this.ikNode_698.setTransform(19.3,12.8,0.999,0.999,-113);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.999,0.999,-56.3);

	this.ikNode_699 = new lib.Hand4();
	this.ikNode_699.setTransform(41.7,4.2,1,1,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_699,p:{rotation:-4.5,x:41.7,y:4.2}},{t:this.ikNode_688,p:{rotation:-56.3}},{t:this.ikNode_698,p:{rotation:-113,x:19.3,y:12.8}}]}).to({state:[{t:this.ikNode_699,p:{rotation:-4.7,x:41.6,y:4.3}},{t:this.ikNode_688,p:{rotation:-55.9}},{t:this.ikNode_698,p:{rotation:-113.2,x:19.2,y:13}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.8,x:41.4,y:4.4}},{t:this.ikNode_688,p:{rotation:-55.5}},{t:this.ikNode_698,p:{rotation:-113.4,x:19.1,y:13.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5,x:41.4,y:4.4}},{t:this.ikNode_688,p:{rotation:-55}},{t:this.ikNode_698,p:{rotation:-113.6,x:19,y:13.2}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.2,x:41.3,y:4.5}},{t:this.ikNode_688,p:{rotation:-54.6}},{t:this.ikNode_698,p:{rotation:-113.8,x:18.9,y:13.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.4,x:41.1,y:4.5}},{t:this.ikNode_688,p:{rotation:-54.2}},{t:this.ikNode_698,p:{rotation:-113.9,x:18.8,y:13.5}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.6,x:41,y:4.6}},{t:this.ikNode_688,p:{rotation:-53.8}},{t:this.ikNode_698,p:{rotation:-114.1,x:18.7,y:13.6}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.7,x:40.8,y:4.7}},{t:this.ikNode_688,p:{rotation:-53.4}},{t:this.ikNode_698,p:{rotation:-114.3,x:18.6,y:13.7}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.9,x:40.8,y:4.7}},{t:this.ikNode_688,p:{rotation:-53}},{t:this.ikNode_698,p:{rotation:-114.5,x:18.5,y:13.8}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-6.1,x:40.6,y:4.8}},{t:this.ikNode_688,p:{rotation:-52.6}},{t:this.ikNode_698,p:{rotation:-114.7,x:18.4,y:13.9}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-6.3,x:40.5,y:4.8}},{t:this.ikNode_688,p:{rotation:-52.2}},{t:this.ikNode_698,p:{rotation:-114.8,x:18.3,y:14}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-6.1,x:40.6,y:4.8}},{t:this.ikNode_688,p:{rotation:-52.6}},{t:this.ikNode_698,p:{rotation:-114.7,x:18.4,y:13.9}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.9,x:40.7,y:4.7}},{t:this.ikNode_688,p:{rotation:-53}},{t:this.ikNode_698,p:{rotation:-114.5,x:18.5,y:13.8}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.7,x:40.8,y:4.7}},{t:this.ikNode_688,p:{rotation:-53.4}},{t:this.ikNode_698,p:{rotation:-114.3,x:18.6,y:13.7}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.6,x:41,y:4.6}},{t:this.ikNode_688,p:{rotation:-53.8}},{t:this.ikNode_698,p:{rotation:-114.1,x:18.7,y:13.5}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.4,x:41.1,y:4.5}},{t:this.ikNode_688,p:{rotation:-54.2}},{t:this.ikNode_698,p:{rotation:-113.9,x:18.8,y:13.5}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.2,x:41.2,y:4.5}},{t:this.ikNode_688,p:{rotation:-54.6}},{t:this.ikNode_698,p:{rotation:-113.8,x:18.9,y:13.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5,x:41.4,y:4.4}},{t:this.ikNode_688,p:{rotation:-55}},{t:this.ikNode_698,p:{rotation:-113.6,x:19,y:13.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.8,x:41.4,y:4.3}},{t:this.ikNode_688,p:{rotation:-55.5}},{t:this.ikNode_698,p:{rotation:-113.4,x:19.1,y:13}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.7,x:41.5,y:4.3}},{t:this.ikNode_688,p:{rotation:-55.9}},{t:this.ikNode_698,p:{rotation:-113.2,x:19.2,y:12.9}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.5,x:41.7,y:4.2}},{t:this.ikNode_688,p:{rotation:-56.3}},{t:this.ikNode_698,p:{rotation:-113.1,x:19.3,y:12.8}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.5,x:41.7,y:4.2}},{t:this.ikNode_688,p:{rotation:-56.3}},{t:this.ikNode_698,p:{rotation:-113.1,x:19.3,y:12.8}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.5,x:41.6,y:4.2}},{t:this.ikNode_688,p:{rotation:-56.3}},{t:this.ikNode_698,p:{rotation:-113.1,x:19.3,y:12.7}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:10.3,x:38.3,y:15.5}},{t:this.ikNode_688,p:{rotation:-38.3}},{t:this.ikNode_698,p:{rotation:-98.3,x:14.4,y:18}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:25.1,x:31.8,y:25.2}},{t:this.ikNode_688,p:{rotation:-20.4}},{t:this.ikNode_698,p:{rotation:-83.5,x:8.2,y:21.6}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:39.9,x:23.1,y:32.6}},{t:this.ikNode_688,p:{rotation:-2.5}},{t:this.ikNode_698,p:{rotation:-68.7,x:1.1,y:23.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:54.7,x:12.8,y:37.1}},{t:this.ikNode_688,p:{rotation:15.5}},{t:this.ikNode_698,p:{rotation:-53.9,x:-5.9,y:22.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:46.2,x:11.3,y:32.9}},{t:this.ikNode_688,p:{rotation:24.5}},{t:this.ikNode_698,p:{rotation:-62.4,x:-9.4,y:21.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:37.7,x:9.7,y:28}},{t:this.ikNode_688,p:{rotation:33.5}},{t:this.ikNode_698,p:{rotation:-70.9,x:-12.5,y:19.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:29.2,x:7.8,y:22.4}},{t:this.ikNode_688,p:{rotation:42.5}},{t:this.ikNode_698,p:{rotation:-79.4,x:-15.5,y:17}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:37.7,x:9.7,y:28}},{t:this.ikNode_688,p:{rotation:33.5}},{t:this.ikNode_698,p:{rotation:-70.9,x:-12.5,y:19.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:46.2,x:11.3,y:32.9}},{t:this.ikNode_688,p:{rotation:24.5}},{t:this.ikNode_698,p:{rotation:-62.4,x:-9.4,y:21.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:54.7,x:12.8,y:37.1}},{t:this.ikNode_688,p:{rotation:15.5}},{t:this.ikNode_698,p:{rotation:-53.9,x:-5.9,y:22.4}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:42.9,x:21.1,y:33.8}},{t:this.ikNode_688,p:{rotation:1.1}},{t:this.ikNode_698,p:{rotation:-65.7,x:-0.2,y:23.1}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:31.1,x:28.6,y:28.4}},{t:this.ikNode_688,p:{rotation:-13.3}},{t:this.ikNode_698,p:{rotation:-77.5,x:5.5,y:22.4}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:19.2,x:34.8,y:21.5}},{t:this.ikNode_688,p:{rotation:-27.7}},{t:this.ikNode_698,p:{rotation:-89.3,x:10.9,y:20.4}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:7.4,x:39.2,y:13.2}},{t:this.ikNode_688,p:{rotation:-42.1}},{t:this.ikNode_698,p:{rotation:-101.1,x:15.6,y:17}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.4,x:41.8,y:4.1}},{t:this.ikNode_688,p:{rotation:-56.5}},{t:this.ikNode_698,p:{rotation:-112.9,x:19.4,y:12.7}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5,x:41.9,y:3.5}},{t:this.ikNode_688,p:{rotation:-57.6}},{t:this.ikNode_698,p:{rotation:-113.5,x:19.6,y:12.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.6,x:42.1,y:2.8}},{t:this.ikNode_688,p:{rotation:-58.8}},{t:this.ikNode_698,p:{rotation:-114.2,x:19.9,y:11.8}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-6.2,x:42.1,y:2.2}},{t:this.ikNode_688,p:{rotation:-60}},{t:this.ikNode_698,p:{rotation:-114.8,x:20.1,y:11.5}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5.6,x:42,y:2.9}},{t:this.ikNode_688,p:{rotation:-58.7}},{t:this.ikNode_698,p:{rotation:-114.2,x:19.8,y:11.9}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-5,x:41.9,y:3.5}},{t:this.ikNode_688,p:{rotation:-57.5}},{t:this.ikNode_698,p:{rotation:-113.6,x:19.6,y:12.3}}]},1).to({state:[{t:this.ikNode_699,p:{rotation:-4.5,x:41.7,y:4.2}},{t:this.ikNode_688,p:{rotation:-56.3}},{t:this.ikNode_698,p:{rotation:-113.1,x:19.3,y:12.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-9.7,74.5,37.4);


(lib.arm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":27,"2":45});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(41));

	// 骨架
	this.ikNode_701 = new lib.Arm2();
	this.ikNode_701.setTransform(2.4,22.9,0.997,0.997,-131.7);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.998,0.998,-6);

	this.ikNode_703 = new lib.Hand3();
	this.ikNode_703.setTransform(20.7,7.9,0.987,0.987,-41.6);

	this.ikNode_709 = new lib.grenade();
	this.ikNode_709.setTransform(31.6,-2.8,0.999,0.999,-27.2,0,0,0.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-27.2,x:31.6,y:-2.8}},{t:this.ikNode_703,p:{rotation:-41.6,x:20.7,y:7.9,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-6}},{t:this.ikNode_701,p:{rotation:-131.7,x:2.4,y:22.9,scaleX:0.997,scaleY:0.997}}]}).to({state:[{t:this.ikNode_709,p:{regX:0.3,regY:2.1,rotation:-26.3,x:32.2,y:-2.5}},{t:this.ikNode_703,p:{rotation:-40.7,x:21.3,y:8.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-6.9}},{t:this.ikNode_701,p:{rotation:-130.8,x:2.7,y:22.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-25.5,x:33.1,y:-2}},{t:this.ikNode_703,p:{rotation:-39.9,x:21.8,y:8.4,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-7.8}},{t:this.ikNode_701,p:{rotation:-130,x:3,y:22.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.3,regY:2.2,rotation:-24.6,x:33.6,y:-1.6}},{t:this.ikNode_703,p:{rotation:-39,x:22.5,y:8.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-8.6}},{t:this.ikNode_701,p:{rotation:-129.1,x:3.4,y:22.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-23.8,x:34.5,y:-1.3}},{t:this.ikNode_703,p:{rotation:-38.2,x:23,y:8.8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-9.5}},{t:this.ikNode_701,p:{rotation:-128.3,x:3.7,y:22.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.1,rotation:-22.9,x:35.1,y:-1}},{t:this.ikNode_703,p:{rotation:-37.3,x:23.6,y:9.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-10.4}},{t:this.ikNode_701,p:{rotation:-127.4,x:4.1,y:22.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-22.1,x:35.9,y:-0.6}},{t:this.ikNode_703,p:{rotation:-36.5,x:24.1,y:9.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-11.2}},{t:this.ikNode_701,p:{rotation:-126.6,x:4.4,y:22.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-21.2,x:36.6,y:-0.3}},{t:this.ikNode_703,p:{rotation:-35.6,x:24.7,y:9.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-12.1}},{t:this.ikNode_701,p:{rotation:-125.7,x:4.8,y:22.6,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-20.4,x:37.2,y:0.1}},{t:this.ikNode_703,p:{rotation:-34.8,x:25.1,y:9.7,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-13}},{t:this.ikNode_701,p:{rotation:-124.9,x:5.1,y:22.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-19.5,x:38,y:0.5}},{t:this.ikNode_703,p:{rotation:-33.9,x:25.7,y:9.9,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-13.8}},{t:this.ikNode_701,p:{rotation:-124.1,x:5.4,y:22.4,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.3,rotation:-18.7,x:38.7,y:1}},{t:this.ikNode_703,p:{rotation:-33.1,x:26.3,y:10.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-14.7}},{t:this.ikNode_701,p:{rotation:-123.2,x:5.7,y:22.4,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-19.5,x:38,y:0.5}},{t:this.ikNode_703,p:{rotation:-33.9,x:25.7,y:9.9,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-13.8}},{t:this.ikNode_701,p:{rotation:-124.1,x:5.4,y:22.4,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-20.4,x:37.3,y:0.1}},{t:this.ikNode_703,p:{rotation:-34.8,x:25.1,y:9.7,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-13}},{t:this.ikNode_701,p:{rotation:-124.9,x:5.1,y:22.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-21.2,x:36.6,y:-0.3}},{t:this.ikNode_703,p:{rotation:-35.6,x:24.7,y:9.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-12.1}},{t:this.ikNode_701,p:{rotation:-125.7,x:4.8,y:22.6,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-22.1,x:35.9,y:-0.7}},{t:this.ikNode_703,p:{rotation:-36.5,x:24.1,y:9.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-11.2}},{t:this.ikNode_701,p:{rotation:-126.6,x:4.4,y:22.6,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.1,rotation:-22.9,x:35.1,y:-1.1}},{t:this.ikNode_703,p:{rotation:-37.3,x:23.6,y:9.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-10.4}},{t:this.ikNode_701,p:{rotation:-127.4,x:4.1,y:22.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-23.8,x:34.5,y:-1.3}},{t:this.ikNode_703,p:{rotation:-38.2,x:23,y:8.8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-9.5}},{t:this.ikNode_701,p:{rotation:-128.3,x:3.7,y:22.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.3,regY:2.2,rotation:-24.6,x:33.6,y:-1.7}},{t:this.ikNode_703,p:{rotation:-39,x:22.5,y:8.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-8.6}},{t:this.ikNode_701,p:{rotation:-129.1,x:3.4,y:22.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-25.5,x:33.1,y:-2.1}},{t:this.ikNode_703,p:{rotation:-39.9,x:21.8,y:8.3,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-7.8}},{t:this.ikNode_701,p:{rotation:-130,x:3.1,y:22.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.3,regY:2.1,rotation:-26.3,x:32.2,y:-2.6}},{t:this.ikNode_703,p:{rotation:-40.7,x:21.3,y:8.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-6.9}},{t:this.ikNode_701,p:{rotation:-130.8,x:2.7,y:22.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-27.2,x:31.5,y:-2.9}},{t:this.ikNode_703,p:{rotation:-41.6,x:20.7,y:7.8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-6}},{t:this.ikNode_701,p:{rotation:-131.7,x:2.4,y:23,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-27.2,x:31.5,y:-2.9}},{t:this.ikNode_703,p:{rotation:-41.6,x:20.7,y:7.9,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-6}},{t:this.ikNode_701,p:{rotation:-131.7,x:2.3,y:22.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-23.9,x:36.7,y:-1.8}},{t:this.ikNode_703,p:{rotation:-38.3,x:25.4,y:8.3,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-15.7}},{t:this.ikNode_701,p:{rotation:-128.4,x:6.2,y:22.2,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-20.6,x:41.7,y:-1.5}},{t:this.ikNode_703,p:{rotation:-34.9,x:29.8,y:8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-25.4}},{t:this.ikNode_701,p:{rotation:-125.1,x:9.9,y:20.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-17.3,x:46.3,y:-1.6}},{t:this.ikNode_703,p:{rotation:-31.6,x:33.9,y:7.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-35.1}},{t:this.ikNode_701,p:{rotation:-121.8,x:13.3,y:18.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-17.3,x:46.3,y:-1.6}},{t:this.ikNode_703,p:{rotation:-31.6,x:33.9,y:7.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-35.1}},{t:this.ikNode_701,p:{rotation:-121.8,x:13.3,y:18.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-17.3,x:46.3,y:-1.6}},{t:this.ikNode_703,p:{rotation:-31.6,x:33.9,y:7.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-35.1}},{t:this.ikNode_701,p:{rotation:-121.8,x:13.3,y:18.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-17.3,x:46.3,y:-1.6}},{t:this.ikNode_703,p:{rotation:-31.6,x:34,y:7.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-35.1}},{t:this.ikNode_701,p:{rotation:-121.8,x:13.3,y:18.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-8.6,x:48.7,y:3.8}},{t:this.ikNode_703,p:{rotation:-22.9,x:35.1,y:10.7,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-34}},{t:this.ikNode_701,p:{rotation:-113.1,x:12.9,y:19.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:0.1,x:50.3,y:9.7}},{t:this.ikNode_703,p:{rotation:-14.2,x:35.7,y:14.3,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-32.9}},{t:this.ikNode_701,p:{rotation:-104.4,x:12.5,y:19.4,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:8.9,x:50.9,y:15.8}},{t:this.ikNode_703,p:{rotation:-5.5,x:35.9,y:18.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-31.8}},{t:this.ikNode_701,p:{rotation:-95.6,x:12,y:19.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:8.9,x:50.9,y:15.8}},{t:this.ikNode_703,p:{rotation:-5.5,x:35.9,y:18.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-31.8}},{t:this.ikNode_701,p:{rotation:-95.6,x:12,y:19.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:8.9,x:50.9,y:15.8}},{t:this.ikNode_703,p:{rotation:-5.5,x:35.9,y:18.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-31.8}},{t:this.ikNode_701,p:{rotation:-95.6,x:12,y:19.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:8.9,x:50.9,y:15.8}},{t:this.ikNode_703,p:{rotation:-5.5,x:35.9,y:18.2,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-31.8}},{t:this.ikNode_701,p:{rotation:-95.6,x:12,y:19.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-22.4,x:49.6,y:-9.5}},{t:this.ikNode_703,p:{rotation:-36.8,x:38,y:0.4,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-53}},{t:this.ikNode_701,p:{rotation:-126.9,x:18.3,y:13.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.1,rotation:-53.6,x:36.6,y:-29.9}},{t:this.ikNode_703,p:{rotation:-68.1,x:31.8,y:-15.4,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-74.2}},{t:this.ikNode_701,p:{rotation:-158.1,x:22.2,y:6.3,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.3,rotation:-84.9,x:16.6,y:-40.6}},{t:this.ikNode_703,p:{rotation:-99.4,x:19.9,y:-25.7,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-95.4}},{t:this.ikNode_701,p:{rotation:170.6,x:23,y:-2.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.1,rotation:-116.1,x:-4.9,y:-39.9}},{t:this.ikNode_703,p:{rotation:-130.6,x:5.9,y:-28.8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-116.6}},{t:this.ikNode_701,p:{rotation:139.4,x:20.7,y:-10.3,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-147.4,x:-21.5,y:-29.2}},{t:this.ikNode_703,p:{rotation:-161.9,x:-6.7,y:-25.1,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-137.8}},{t:this.ikNode_701,p:{rotation:108.1,x:15.5,y:-17.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-120.2,x:-10.9,y:-43.7}},{t:this.ikNode_703,p:{rotation:-134.8,x:0.5,y:-33.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-134.3}},{t:this.ikNode_701,p:{rotation:135.2,x:16.6,y:-16.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-93.1,x:5.7,y:-52.2}},{t:this.ikNode_703,p:{rotation:-107.6,x:11.2,y:-37.8,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-130.7}},{t:this.ikNode_701,p:{rotation:162.4,x:17.6,y:-15,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-66,x:24.9,y:-52.4}},{t:this.ikNode_703,p:{rotation:-80.5,x:23.3,y:-37,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-127.2}},{t:this.ikNode_701,p:{rotation:-170.5,x:18.6,y:-13.8,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:-44,x:41.8,y:-42.1}},{t:this.ikNode_703,p:{rotation:-58.4,x:34.5,y:-28.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-112.7}},{t:this.ikNode_701,p:{rotation:-148.5,x:21.4,y:-8.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.3,regY:2.2,rotation:-22,x:54.2,y:-26.4}},{t:this.ikNode_703,p:{rotation:-36.4,x:42.5,y:-16.5,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-98.3}},{t:this.ikNode_701,p:{rotation:-126.5,x:22.9,y:-3.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_709,p:{regX:0.4,regY:2.2,rotation:0,x:60.7,y:-7.1}},{t:this.ikNode_703,p:{rotation:-14.3,x:46.1,y:-2.3,scaleX:0.987,scaleY:0.987}},{t:this.ikNode_688,p:{rotation:-83.9}},{t:this.ikNode_701,p:{rotation:-104.5,x:22.9,y:2.7,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:-14.3,x:46.2,y:-2.4,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:-83.8}},{t:this.ikNode_701,p:{rotation:-104.5,x:22.9,y:2.7,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:22,x:36.7,y:27.3,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:-40.8}},{t:this.ikNode_701,p:{rotation:-68.2,x:14.9,y:17.6,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:58.3,x:10.7,y:43.8,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:2.2}},{t:this.ikNode_701,p:{rotation:-31.8,x:-1.2,y:23,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:94.5,x:-19.2,y:39.8,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:45.3}},{t:this.ikNode_701,p:{rotation:4.5,x:-16.5,y:16,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:75.9,x:-13.4,y:37,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:52.9}},{t:this.ikNode_701,p:{rotation:-14.2,x:-18.4,y:13.6,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:57.2,x:-7.8,y:31.6,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:60.5}},{t:this.ikNode_701,p:{rotation:-32.9,x:-20,y:11.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:38.6,x:-3.2,y:23.8,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:68.1}},{t:this.ikNode_701,p:{rotation:-51.6,x:-21.2,y:8.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:41.2,x:-1.9,y:28.7,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:56.8}},{t:this.ikNode_701,p:{rotation:-49,x:-19.2,y:12.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:43.8,x:0,y:33,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:45.5}},{t:this.ikNode_701,p:{rotation:-46.3,x:-16.4,y:15.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:46.4,x:2.6,y:36.6,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:34.2}},{t:this.ikNode_701,p:{rotation:-43.7,x:-12.8,y:18.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:43.8,x:0,y:33,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:45.5}},{t:this.ikNode_701,p:{rotation:-46.3,x:-16.3,y:15.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:41.2,x:-1.9,y:28.6,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:56.8}},{t:this.ikNode_701,p:{rotation:-49,x:-19.2,y:12.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:38.6,x:-3.2,y:23.7,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:68.1}},{t:this.ikNode_701,p:{rotation:-51.6,x:-21.2,y:8.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:12.3,x:7.2,y:22.4,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:43}},{t:this.ikNode_701,p:{rotation:-77.9,x:-15.7,y:16.6,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:-14.1,x:16.1,y:16.7,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:17.8}},{t:this.ikNode_701,p:{rotation:-104.2,x:-7.1,y:21.7,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.ikNode_703,p:{rotation:-40.4,x:21.3,y:7.9,scaleX:0.992,scaleY:0.992}},{t:this.ikNode_688,p:{rotation:-7.3}},{t:this.ikNode_701,p:{rotation:-130.6,x:2.7,y:22.8,scaleX:0.998,scaleY:0.998}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-14.7,50.6,52.8);


(lib.arm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loading":21,"1":26,"2":30,"3":35,"4":39});

	// timeline functions:
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(27));

	// 骨架
	this.ikNode_711 = new lib.Arm2();
	this.ikNode_711.setTransform(7.3,21.9,0.998,0.998,-149.2);

	this.ikNode_688 = new lib.Arm1();
	this.ikNode_688.setTransform(0,0,0.998,0.998,-18.9);

	this.ikNode_712 = new lib.Hand3();
	this.ikNode_712.setTransform(20.4,2,0.984,0.984,-59.2);

	this.dagger = new lib.dagger();
	this.dagger.setTransform(27.6,-11.2,0.999,0.999,31.7,0,0,-29.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dagger,p:{rotation:31.7,x:27.6,y:-11.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-59.2,x:20.4,y:2}},{t:this.ikNode_688,p:{rotation:-18.9}},{t:this.ikNode_711,p:{rotation:-149.2,x:7.3,y:21.9}}]}).to({state:[{t:this.dagger,p:{rotation:32.5,x:27.8,y:-10.9,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-58.4,x:20.5,y:2.2}},{t:this.ikNode_688,p:{rotation:-18.4}},{t:this.ikNode_711,p:{rotation:-148.4,x:7.1,y:21.9}}]},1).to({state:[{t:this.dagger,p:{rotation:33.3,x:28.2,y:-10.6,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-57.6,x:20.7,y:2.5}},{t:this.ikNode_688,p:{rotation:-18}},{t:this.ikNode_711,p:{rotation:-147.6,x:7,y:21.9}}]},1).to({state:[{t:this.dagger,p:{rotation:34.1,x:28.4,y:-10.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-56.8,x:20.7,y:2.7}},{t:this.ikNode_688,p:{rotation:-17.6}},{t:this.ikNode_711,p:{rotation:-146.8,x:6.8,y:22}}]},1).to({state:[{t:this.dagger,p:{rotation:34.9,x:28.6,y:-9.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-56,x:20.7,y:3}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_711,p:{rotation:-146.1,x:6.6,y:22}}]},1).to({state:[{t:this.dagger,p:{rotation:35.7,x:28.9,y:-9.5,regX:-29.6}},{t:this.ikNode_712,p:{rotation:-55.2,x:20.8,y:3.2}},{t:this.ikNode_688,p:{rotation:-16.7}},{t:this.ikNode_711,p:{rotation:-145.3,x:6.5,y:22.1}}]},1).to({state:[{t:this.dagger,p:{rotation:36.5,x:29.2,y:-9.1,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-54.4,x:21,y:3.4}},{t:this.ikNode_688,p:{rotation:-16.3}},{t:this.ikNode_711,p:{rotation:-144.5,x:6.3,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:37.2,x:29.5,y:-8.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-53.6,x:21,y:3.7}},{t:this.ikNode_688,p:{rotation:-15.8}},{t:this.ikNode_711,p:{rotation:-143.7,x:6.1,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:38,x:29.8,y:-8.4,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-52.8,x:21.1,y:3.9}},{t:this.ikNode_688,p:{rotation:-15.4}},{t:this.ikNode_711,p:{rotation:-142.9,x:6,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:38.8,x:30.1,y:-8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-52,x:21.2,y:4.2}},{t:this.ikNode_688,p:{rotation:-15}},{t:this.ikNode_711,p:{rotation:-142.1,x:5.8,y:22.3}}]},1).to({state:[{t:this.dagger,p:{rotation:39.6,x:30.4,y:-7.7,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-51.2,x:21.4,y:4.5}},{t:this.ikNode_688,p:{rotation:-14.5}},{t:this.ikNode_711,p:{rotation:-141.3,x:5.7,y:22.4}}]},1).to({state:[{t:this.dagger,p:{rotation:38.8,x:30.1,y:-8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-52,x:21.2,y:4.2}},{t:this.ikNode_688,p:{rotation:-15}},{t:this.ikNode_711,p:{rotation:-142.1,x:5.8,y:22.3}}]},1).to({state:[{t:this.dagger,p:{rotation:38,x:29.8,y:-8.4,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-52.8,x:21.1,y:3.9}},{t:this.ikNode_688,p:{rotation:-15.4}},{t:this.ikNode_711,p:{rotation:-142.9,x:6,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:37.2,x:29.5,y:-8.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-53.6,x:21,y:3.7}},{t:this.ikNode_688,p:{rotation:-15.8}},{t:this.ikNode_711,p:{rotation:-143.7,x:6.2,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:36.5,x:29.3,y:-9.1,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-54.4,x:21,y:3.4}},{t:this.ikNode_688,p:{rotation:-16.3}},{t:this.ikNode_711,p:{rotation:-144.5,x:6.3,y:22.2}}]},1).to({state:[{t:this.dagger,p:{rotation:35.7,x:28.9,y:-9.5,regX:-29.6}},{t:this.ikNode_712,p:{rotation:-55.2,x:20.8,y:3.2}},{t:this.ikNode_688,p:{rotation:-16.7}},{t:this.ikNode_711,p:{rotation:-145.3,x:6.5,y:22.1}}]},1).to({state:[{t:this.dagger,p:{rotation:34.9,x:28.7,y:-9.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-56,x:20.7,y:2.9}},{t:this.ikNode_688,p:{rotation:-17.1}},{t:this.ikNode_711,p:{rotation:-146.1,x:6.7,y:22}}]},1).to({state:[{t:this.dagger,p:{rotation:34.1,x:28.5,y:-10.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-56.8,x:20.7,y:2.6}},{t:this.ikNode_688,p:{rotation:-17.6}},{t:this.ikNode_711,p:{rotation:-146.8,x:6.8,y:22}}]},1).to({state:[{t:this.dagger,p:{rotation:33.3,x:28.2,y:-10.6,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-57.6,x:20.6,y:2.4}},{t:this.ikNode_688,p:{rotation:-18}},{t:this.ikNode_711,p:{rotation:-147.6,x:7,y:21.9}}]},1).to({state:[{t:this.dagger,p:{rotation:32.5,x:27.9,y:-10.9,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-58.4,x:20.5,y:2.2}},{t:this.ikNode_688,p:{rotation:-18.4}},{t:this.ikNode_711,p:{rotation:-148.4,x:7.2,y:21.9}}]},1).to({state:[{t:this.dagger,p:{rotation:31.7,x:27.6,y:-11.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-59.2,x:20.3,y:1.9}},{t:this.ikNode_688,p:{rotation:-18.9}},{t:this.ikNode_711,p:{rotation:-149.2,x:7.3,y:21.8}}]},1).to({state:[{t:this.dagger,p:{rotation:31.7,x:27.6,y:-11.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-59.2,x:20.3,y:1.9}},{t:this.ikNode_688,p:{rotation:-18.9}},{t:this.ikNode_711,p:{rotation:-149.2,x:7.4,y:21.8}}]},1).to({state:[{t:this.dagger,p:{rotation:15,x:24,y:-19.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-75.9,x:20.8,y:-4.5}},{t:this.ikNode_688,p:{rotation:-38.1}},{t:this.ikNode_711,p:{rotation:-165.9,x:14.1,y:18.2}}]},1).to({state:[{t:this.dagger,p:{rotation:-1.7,x:17.9,y:-26.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-92.5,x:19.2,y:-11.2}},{t:this.ikNode_688,p:{rotation:-57.3}},{t:this.ikNode_711,p:{rotation:177.4,x:19.3,y:12.6}}]},1).to({state:[{t:this.dagger,p:{rotation:-18.4,x:9.9,y:-31.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-109.2,x:15.5,y:-17.2}},{t:this.ikNode_688,p:{rotation:-76.4}},{t:this.ikNode_711,p:{rotation:160.7,x:22.3,y:5.5}}]},1).to({state:[{t:this.dagger,p:{rotation:-35.1,x:0.5,y:-33.8,regX:-29.4}},{t:this.ikNode_712,p:{rotation:-125.9,x:9.7,y:-22}},{t:this.ikNode_688,p:{rotation:-95.6}},{t:this.ikNode_711,p:{rotation:144,x:23,y:-2.1}}]},1).to({state:[{t:this.dagger,p:{rotation:-51.8,x:-9.8,y:-33.4,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-142.6,x:2.6,y:-24.8}},{t:this.ikNode_688,p:{rotation:-114.8}},{t:this.ikNode_711,p:{rotation:127.3,x:20.9,y:-9.5}}]},1).to({state:[{t:this.dagger,p:{rotation:-24.5,x:5.3,y:-42.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-115.4,x:12.4,y:-29.5}},{t:this.ikNode_688,p:{rotation:-109.7}},{t:this.ikNode_711,p:{rotation:154.5,x:21.7,y:-7.5}}]},1).to({state:[{t:this.dagger,p:{rotation:2.7,x:23.7,y:-44.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-88.1,x:24,y:-29.4}},{t:this.ikNode_688,p:{rotation:-104.5}},{t:this.ikNode_711,p:{rotation:-178.3,x:22.3,y:-5.5}}]},1).to({state:[{t:this.dagger,p:{rotation:29.9,x:41.7,y:-37.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-60.9,x:35.1,y:-23.9}},{t:this.ikNode_688,p:{rotation:-99.3}},{t:this.ikNode_711,p:{rotation:-151,x:22.7,y:-3.5}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.2,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.3,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:22.9,y:-1.3}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.3,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.3,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:23,y:-1.3}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.3,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.3,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:23,y:-1.3}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.3,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.3,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:23,y:-1.2}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.3,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.3,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:23.1,y:-1.2}}]},1).to({state:[{t:this.dagger,p:{rotation:57.1,x:55.3,y:-22.8,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-33.6,x:43.2,y:-13.9}},{t:this.ikNode_688,p:{rotation:-94.2}},{t:this.ikNode_711,p:{rotation:-123.8,x:23.1,y:-1.2}}]},1).to({state:[{t:this.dagger,p:{rotation:71.5,x:56.6,y:-1.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-19.3,x:42.7,y:4.4}},{t:this.ikNode_688,p:{rotation:-60.7}},{t:this.ikNode_711,p:{rotation:-109.5,x:20,y:11.6}}]},1).to({state:[{t:this.dagger,p:{rotation:85.9,x:49,y:17.5,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-4.9,x:34.1,y:19.4}},{t:this.ikNode_688,p:{rotation:-27.3}},{t:this.ikNode_711,p:{rotation:-95.1,x:10.3,y:20.6}}]},1).to({state:[{t:this.dagger,p:{rotation:100.2,x:35.5,y:29.4,regX:-29.5}},{t:this.ikNode_712,p:{rotation:9.4,x:20.7,y:27.6}},{t:this.ikNode_688,p:{rotation:6.2}},{t:this.ikNode_711,p:{rotation:-80.7,x:-2.7,y:22.9}}]},1).to({state:[{t:this.dagger,p:{rotation:114.6,x:20.6,y:33.5,regX:-29.5}},{t:this.ikNode_712,p:{rotation:23.8,x:6.6,y:28}},{t:this.ikNode_688,p:{rotation:39.6}},{t:this.ikNode_711,p:{rotation:-66.3,x:-14.9,y:17.6}}]},1).to({state:[{t:this.dagger,p:{rotation:114.6,x:20.6,y:33.5,regX:-29.5}},{t:this.ikNode_712,p:{rotation:23.8,x:6.6,y:28}},{t:this.ikNode_688,p:{rotation:39.6}},{t:this.ikNode_711,p:{rotation:-66.3,x:-14.9,y:17.7}}]},1).to({state:[{t:this.dagger,p:{rotation:114.6,x:20.6,y:33.6,regX:-29.5}},{t:this.ikNode_712,p:{rotation:23.8,x:6.6,y:28}},{t:this.ikNode_688,p:{rotation:39.6}},{t:this.ikNode_711,p:{rotation:-66.3,x:-14.9,y:17.7}}]},1).to({state:[{t:this.dagger,p:{rotation:114.6,x:20.7,y:33.6,regX:-29.5}},{t:this.ikNode_712,p:{rotation:23.8,x:6.6,y:28}},{t:this.ikNode_688,p:{rotation:39.6}},{t:this.ikNode_711,p:{rotation:-66.3,x:-14.9,y:17.7}}]},1).to({state:[{t:this.dagger,p:{rotation:93.9,x:28.9,y:23.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:3.1,x:13.8,y:23}},{t:this.ikNode_688,p:{rotation:25}},{t:this.ikNode_711,p:{rotation:-87,x:-9.9,y:20.9}}]},1).to({state:[{t:this.dagger,p:{rotation:73.2,x:32.7,y:11.2,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-17.7,x:18.6,y:16.3}},{t:this.ikNode_688,p:{rotation:10.4}},{t:this.ikNode_711,p:{rotation:-107.8,x:-4.2,y:22.7}}]},1).to({state:[{t:this.dagger,p:{rotation:52.5,x:32.3,y:-0.7,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-38.4,x:20.8,y:8.9}},{t:this.ikNode_688,p:{rotation:-4.3}},{t:this.ikNode_711,p:{rotation:-128.5,x:1.6,y:23}}]},1).to({state:[{t:this.dagger,p:{rotation:31.7,x:27.7,y:-11.3,regX:-29.5}},{t:this.ikNode_712,p:{rotation:-59.2,x:20.4,y:2}},{t:this.ikNode_688,p:{rotation:-18.9}},{t:this.ikNode_711,p:{rotation:-149.2,x:7.4,y:21.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-23,73.1,59.2);


(lib.parentWeapon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{empty:0,dagger:1,grenade:2,deagle:3,aug:4,ak47:5,m4a1:6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// weapon
	this.weapon = new lib.hostageArm2();
	this.weapon.setTransform(10,20.1,1,1,0,0,0,10,20.1);

	this.weapon_1 = new lib.weapon1();
	this.weapon_1.setTransform(29.8,9.5,1,1,0,0,0,29.8,9.5);

	this.weapon_2 = new lib.weapon2();

	this.weapon_3 = new lib.weapon3();

	this.weapon_4 = new lib.weapon4();

	this.weapon_5 = new lib.weapon5();

	this.weapon_6 = new lib.weapon6();
	this.weapon_6.setTransform(42,-1.7,1,1,0,0,0,42,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.weapon}]}).to({state:[{t:this.weapon_1}]},1).to({state:[{t:this.weapon_2}]},1).to({state:[{t:this.weapon_3}]},1).to({state:[{t:this.weapon_4}]},1).to({state:[{t:this.weapon_5}]},1).to({state:[{t:this.weapon_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-7.9,58,44.1);


(lib.rootWeapon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 武器
	this.parentWeapon = new lib.parentWeapon();
	this.parentWeapon.setTransform(43.7,23.2,1,1,0,0,0,43.7,23.2);

	this.timeline.addTween(cjs.Tween.get(this.parentWeapon).wait(1).to({regX:72.6,regY:2,x:72.5,y:2.1},0).wait(1).to({x:72.4,y:2.2},0).wait(1).to({x:72.3,y:2.3},0).wait(1).to({x:72.2,y:2.4},0).wait(1).to({x:72.1,y:2.5},0).wait(1).to({x:72,y:2.6},0).wait(1).to({x:71.9,y:2.7},0).wait(1).to({x:71.8,y:2.8},0).wait(1).to({x:71.7,y:2.9},0).wait(1).to({x:71.6,y:3},0).wait(1).to({x:71.7,y:2.9},0).wait(1).to({x:71.8,y:2.8},0).wait(1).to({x:71.9,y:2.7},0).wait(1).to({x:72,y:2.6},0).wait(1).to({x:72.1,y:2.5},0).wait(1).to({x:72.2,y:2.4},0).wait(1).to({x:72.3,y:2.3},0).wait(1).to({x:72.4,y:2.2},0).wait(1).to({x:72.5,y:2.1},0).wait(1).to({x:72.6,y:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-7.9,58.7,44.1);


(lib.wholeBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"empty":0,"dagger":1,"grenade":2,"deagle":3,"aug":4,"ak47":5,"m4a1":6});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// arm
	this.arm = new lib.hostageArm1();
	this.arm.setTransform(3,17.6,1,1,0,0,0,3,17.6);

	this.arm_1 = new lib.arm1();
	this.arm_1.setTransform(27.9,5.9,1,1,0,0,0,27.9,5.9);

	this.arm_2 = new lib.arm2();
	this.arm_2.setTransform(13.2,11.7,1,1,0,0,0,13.2,11.7);

	this.arm_3 = new lib.arm3();

	this.arm_4 = new lib.arm4();

	this.arm_5 = new lib.arm5();
	this.arm_5.setTransform(26.1,6.3,1,1,0,0,0,26.1,6.3);

	this.arm_6 = new lib.arm6();
	this.arm_6.setTransform(23.5,10.4,1,1,0,0,0,23.5,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arm}]}).to({state:[{t:this.arm_1}]},1).to({state:[{t:this.arm_2}]},1).to({state:[{t:this.arm_3}]},1).to({state:[{t:this.arm_4}]},1).to({state:[{t:this.arm_5}]},1).to({state:[{t:this.arm_6}]},1).wait(1));

	// head
	this.parentHead = new lib.ParentHead();
	this.parentHead.setTransform(0,-14);

	this.timeline.addTween(cjs.Tween.get(this.parentHead).wait(7));

	// body
	this.parentBody = new lib.ParentBody();
	this.parentBody.setTransform(-5,37);

	this.timeline.addTween(cjs.Tween.get(this.parentBody).wait(7));

	// leg
	this.leg = new lib.Leg();
	this.leg.setTransform(-1,37,1,1,0,0,0,8,0);

	this.timeline.addTween(cjs.Tween.get(this.leg).wait(7));

	// weapon
	this.rootWeapon = new lib.rootWeapon();

	this.timeline.addTween(cjs.Tween.get(this.rootWeapon).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-42.4,78.2,165);


(lib.People = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{dead:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 全身
	this.wholeBody = new lib.wholeBody();
	this.wholeBody.setTransform(6,-121);

	this.rightArm2 = new lib.Arm2();
	this.rightArm2.setTransform(13.4,-99.1,0.998,0.998,-149.2);

	this.rightArm1 = new lib.Arm1();
	this.rightArm1.setTransform(6,-121,0.998,0.998,-18.9);

	this.rightArm3 = new lib.Hand3();
	this.rightArm3.setTransform(26.4,-119,0.998,0.998,-59.2);

	this.head = new lib.Head();
	this.head.setTransform(6,-135);

	this.body = new lib.Body();
	this.body.setTransform(1,-84);

	this.rightLeg1 = new lib.Leg1();
	this.rightLeg1.setTransform(-2.9,-83.9,0.999,0.999,-4);

	this.rightLeg2 = new lib.Leg2();
	this.rightLeg2.setTransform(-0.8,-49.2,0.999,0.999,22.3);

	this.rightLeg3 = new lib.Foot();
	this.rightLeg3.setTransform(-15.4,-10.3,0.999,0.999);

	this.leftLeg1 = new lib.Leg1();
	this.leftLeg1.setTransform(-2.9,-83.9,0.999,0.999,-22.5);

	this.leftLeg2 = new lib.Leg2();
	this.leftLeg2.setTransform(10,-51.9,0.999,0.999,0.3);

	this.leftLeg3 = new lib.Foot();
	this.leftLeg3.setTransform(10.9,-10.3,0.999,0.999,0.3);

	this.leftArm2 = new lib.Arm2();
	this.leftArm2.setTransform(20.5,-103,0.998,0.998,-124.8);

	this.leftArm3 = new lib.Hand1();
	this.leftArm3.setTransform(40.6,-115.6,0.998,0.998,-35.1);

	this.leftArm1 = new lib.Arm1();
	this.leftArm1.setTransform(6.4,-120.3,0.998,0.998,-40.4,0,0,-0.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wholeBody}]}).to({state:[{t:this.leftArm1},{t:this.leftArm3},{t:this.leftArm2},{t:this.leftLeg3},{t:this.leftLeg2},{t:this.leftLeg1},{t:this.rightLeg3},{t:this.rightLeg2},{t:this.rightLeg1},{t:this.body},{t:this.head},{t:this.rightArm3},{t:this.rightArm1},{t:this.rightArm2}]},1).wait(1));

	// 碰撞区域
	this.area = new lib.point();
	this.area.setTransform(0,-75,12.5,37.5);

	this.timeline.addTween(cjs.Tween.get(this.area).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-163.4,78.2,165);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;