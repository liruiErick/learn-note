// ajax加载menu文档结构
$("#bottom-nav").load("bottom-nav.html #bottom-nav >", function(data){

	//var is_mobi = !!navigator.userAgent.match(/mobile/i);
	//var eventType = is_mobi ? "touchend" : "click";
	var eventType = "click";
	// 仿微信底部导航
	var $bottomNav = $("#bottom-nav");
	if(!$bottomNav.length) return;

	var $bottomNavLevel2_child = $bottomNav.find(".menu2 dl"),
		$cur_child = null,
		cur_index = -1;
	var offset_top = 10, // 隐藏时弹出子菜单顶部距离主菜单顶部的偏移量
		offset_bottom = 14; // 显示时弹出子菜单底部距离主菜单顶部的偏移量
	$bottomNavLevel2_child.each(function(i, n) { // 首先隐藏所有菜单
		var $n = $(n);
		$n.css({"top": offset_top, "bottom": "auto"});
	});

	// 子菜单间切换
	var $bottomNavLevel1_child = $bottomNav.find(".menu1 li");
	$bottomNavLevel1_child.on(eventType, function() {
		var index = $bottomNavLevel1_child.index(this);
		if ($cur_child) hide($cur_child);
		if (index == cur_index) {
			$cur_child = null;
			cur_index = -1;
			return;
		}
		cur_index = index;
		$cur_child = $bottomNavLevel2_child.eq(cur_index);
		show($cur_child);
	});

	// 点击任意链接菜单后隐藏其它以弹出的子菜单
	$bottomNavLevel2_child.find("a").on(eventType, function() {
		hide($cur_child);
		$cur_child = null;
		cur_index = -1;
	});

	// 点击空白将弹出菜单隐藏
	$(document).on(eventType, function(e) {
		if (!$cur_child) return;
		if (!$.contains($bottomNav[0], e.target)) {
			hide($cur_child);
			$cur_child = null;
			cur_index = -1;
		}
	});

	function show($obj) {
		$obj.stop(true).animate({"top": ($obj.outerHeight() + offset_bottom) * -1}, 200);
	}
	function hide($obj) {
		$obj.stop(true).animate({"top": offset_top}, 200);
	}

});

