$(function(){

	// 图片预览
	photoPreview($("#imgBox"));

});

function photoPreview($imgContainer,photos){
	var closeBtnBase64 = 'data:image/png;base64,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';
	var leftBtnBase64 = 'data:image/png;base64,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';
	var rightBtnBase64 = 'data:image/png;base64,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';

	// 图片预览(不兼容IE6)
	var is_lt_IE9=false;
	var version = navigator.appVersion;
	var versionNum = parseInt(version.substr(version.indexOf("MSIE")+5,4));
	if (navigator.appName=="Microsoft Internet Explorer"&&versionNum<=9) is_lt_IE9=true;

	var value1, value2;
	if (is_lt_IE9) {
		value1="";
		value2="progid:DXImageTransform.Microsoft.gradient(startColorstr=#cc000000,endColorstr=#cc000000)";
	} else {
		value1="rgba(0,0,0,0.8)";
		value2="";
	}

	var $win = $(window); //jsp下$win.height()可能会出现bug，获取到的是文档高度
	var containerWidth = "90%"; //图片容器宽度
	var containerHeight = "90%"; //图片容器高度
	var maxContainerWidth = "800px"; //图片容器最大宽度
	var maxContainerHeight = "600px"; //图片容器最大高度
	var bottomH = 50; //底部高度
	var curIndex = 0; //当前图片号
	var imgCount = 0; //全部图片数量
	var isInit = false; //是否已经初始化

	// 创建背景
	var $bg = $("<div id='previewBox'>");
	$bg.css({
		"position": "fixed",
		"top": 0,
		"left": 0,
		"background":value1,
		"filter":value2,
		"z-index": 9999,
		"user-select": "none",
		"width": "100%",
		"height": "100%",
		"text-align": "center",

		"display": "-webkit-box",
		"display": "-moz-box",
		"display": "-ms-flexbox",
		"display": "-webkit-flex",
		"display": "flex",

		"-webkit-box-pack": "center",
		"-moz-box-pack": "center",
		"-ms-flex-pack": "center",
		"-webkit-justify-content": "center",
		"justify-content": "center",

		"-webkit-box-align": "center",
		"-moz-box-align": "center",
		"-ms-flex-align": "center",
		"-webkit-align-items": "center",
		"align-items": "center",

		"-webkit-align-content": "center",
		"align-content": "center",
		"-ms-flex-line-pack": "center"
	}).hide().appendTo("body");

	// 创建容器
	var $container = $("<div>");
	$container.css({
		"position": "relative",
		"display": "inline-block",
		"width": containerWidth,
		"height": containerHeight,
		"max-width": maxContainerWidth,
		"max-height": maxContainerHeight,
		"border-radius": "4px",
		"overflow": "hidden",
		"vertical-align": "middle"
	}).appendTo($bg);
	// 创建垂直对齐元素
	$("<div>").css({
		"display": "inline-block",
		"width": 0,
		"height": "100%",
		"overflow": "hidden",
		"vertical-align": "middle"
	}).appendTo($bg);

	// 创建图片容器
	var $photoContainer = $("<div>");
	$photoContainer.css({
		"position": "absolute",
		"left": 0,
		"right": 0,
		"top": 0,
		"bottom": bottomH,
		"border": "8px solid #fff",
		"background": "#000",
		"overflow":"hidden"
	}).appendTo($container);

	// 创建图片列表容器
	var $ul= $("<ul>").css({
		"height": "100%",
		"margin":0,
		"padding":0
	}).appendTo($photoContainer);

	// 创建底部
	var $bottom = $("<div>");
	$bottom.css({
		"position": "absolute",
		"left": 0,
		"right": 0,
		"bottom": 0,
		"height": bottomH,
		"line-height": bottomH + "px",
		"background": "#666",
		"color": "#fff",
		"padding-left": "16px",
		"text-align": "left"
	}).appendTo($container);
	var $num = $("<span>");
	$num.text("images："+(curIndex+1)+"/"+imgCount);
	$bottom.append($num);

	var $closeBtn = $('<img src='+closeBtnBase64+' />');
	$closeBtn.css({
		"position":"absolute",
		"right": "16px",
		"top": "50%",
		"margin-top": "-15px",
		"cursor":"pointer"
	});
	$bottom.append($closeBtn);
	$closeBtn.on("click", function(){
		$bg.hide();
		//$ul.empty();
	});


	if (is_lt_IE9) {
		value1=0.2;
		value2=0.7;
	} else {
		value1=1;
		value2=1;
	}

	// 创建左右按钮
	var $leftBtn = $("<div>");
	$leftBtn.css({
		"width": "40px",
		"height": "100%",
		"background":"#000",
		"position": "absolute",
		"top": "0",
		"left": "0",
		"cursor":"pointer",
		"opacity":0.2
	}).appendTo($photoContainer);
	var $leftImg = $('<img src='+leftBtnBase64+' />');
	$leftImg.css({
		"position": "absolute",
		"top": "50%",
		"left": "50%",
		"margin-left": "-10px",
		"margin-top": "-22px",
		"opacity":value1
	}).appendTo($leftBtn);
	$leftBtn.hover(function(){$leftBtn.css({"opacity":0.7});$leftImg.css({"opacity":value2})},
					function(){$leftBtn.css({"opacity":0.2});$leftImg.css({"opacity":value1})});

	var $rightBtn = $("<div>");
	$rightBtn.css({
		"width": "40px",
		"height": "100%",
		"background":"#000",
		"position": "absolute",
		"top": "0",
		"right": "0",
		"cursor":"pointer",
		"opacity":0.2
	}).appendTo($photoContainer);
	var $rightImg = $('<img src='+rightBtnBase64+' />');
	$rightImg.css({
		"position": "absolute",
		"top": "50%",
		"right": "50%",
		"margin-right": "-10px",
		"margin-top": "-22px",
		"opacity":value1
	}).appendTo($rightBtn);
	$rightBtn.hover(function(){$rightBtn.css({"opacity":0.7});$rightImg.css({"opacity":value2})},
					function(){$rightBtn.css({"opacity":0.2});$rightImg.css({"opacity":value1})});




	// 照片单击事件
	var $imgBtn = $imgContainer.find("img").css("cursor","pointer");
	var images = []; //图片数组
	var titles = []; //标题数组

	var tabBanner = new bjj.TabBanner($photoContainer, {
		prevBtn: $leftBtn,
		nextBtn: $rightBtn,
		interval: 0,
		loop: false,
		onResize: function() {
			scaleImg($ul.find("img"));
		},
		onTab: function(curIndex){ //每张图片完全展现后的回调函数，并将当前索引作为参数传入
			$num.text("images："+(curIndex+1)+"/"+imgCount+"　　"+titles[curIndex]);
		}
	});
	$imgBtn.on("click", function() {
		if (!isInit) {
			// 加载并显示照片
			if (photos) {
				$.each(photos, function(i, n) {
					images.push($("<img title="+n.title+" src="+n.url+">")[0]);
					titles.push(n.title);
				});
			} else {
				images = $imgBtn.clone().toArray();
				$imgBtn.each(function(i, n) {
					titles.push($(n).closest($imgContainer.children()).attr("title"));
				});
			}
			loadImg(images);
		}
		if (photos) curIndex = 0;
		else curIndex = $(this).closest($imgContainer.children()).index();

		tabBanner.gotoItem(curIndex, 0);

		$bg.fadeIn();
	});

	function loadImg(images) {
		isInit = true;
		imgCount = images.length;
		$ul.width(imgCount * 100 + "%");

		$.each(images,function(i,n) {
			var $li = $("<li>").css({
				"float": "left",
				"background": "#000",
				"width": 100 / imgCount + "%",
				"height": "100%",
				"margin":0,
				"padding":0,
				"overflow":"hidden"
			});
			$li.append(n);
			$li.appendTo($ul);
		});

		tabBanner.update();
	}

	// 确定缩放比例，并将图片显示在中央
	function scaleImg($img) {
		hideAction($photoContainer, function() {
			var photoContainerW = $photoContainer.width();
			var photoContainerH = $photoContainer.height();

			$img.each(function(i,img){
				if (img.loaded) sacle(img);
				else {
					img.onload = function(){
						img.loaded = true;
						sacle(img);
					}
				}
			});

			function sacle(img) {
				var $this = $(img);
				var imgW = img.width;
				var imgH = img.height;
				var sX = photoContainerW / imgW;
				var sY = photoContainerH / imgH;
				//重新布局
				if (sX > sY) {
					$this.width(imgW*sY);
					$this.height(imgH*sY);
				} else {
					$this.width(imgW*sX);
					$this.height(imgH*sX);
				}
				$this.css({
					"display": "block",
					"margin-left": photoContainerW * 0.5 - $this.width() * 0.5,
					"margin-top": photoContainerH * 0.5 - $this.height() * 0.5
				});
			}
		});
	}

	function hideAction(jq, func, target) {
		var $hide = $();
		$.each(jq, function(i, n){
			var $n = (n instanceof jQuery) ? n : $(n),
				$hidden = $n.parents().addBack().filter(":hidden"),
				$none,
				i = $hidden.length;
			while (i--) {
				if (!$n.is(":hidden")) break;
				$none = $hidden.eq(i);
				if ($none.css("display") === "none") $hide = $hide.add($none.show());
			}
		});
		if (typeof(func) === "function") func.call(target || this);
		$hide.hide();
	}
}