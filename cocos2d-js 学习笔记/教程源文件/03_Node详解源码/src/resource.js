var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",

	node64_png : "res/node_64.png",
	node128_png : "res/node_128.png",
	node152_png : "res/node_152.png",
	node256_png : "res/node_256.png",
	node512_png : "res/node_512.png"

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}