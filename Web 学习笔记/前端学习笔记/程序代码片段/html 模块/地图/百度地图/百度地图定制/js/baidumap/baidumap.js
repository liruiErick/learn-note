$(function(){
	
	// 地图对象
	var $allmap = $("#allmap").css("width","806px");
	// 右侧菜单栏
	var $right_btn = $("#map .right-btn");
	// 检索结果容器
	var $result = $("#map .right-btn .result").hide();
	// 检索结果标题
	var $result_title = $("#map .right-btn .result .top .title");
	// 检索结果页面
	var $result_content = $('#result');
	// 地图检索菜单收起与显示
	var show=true;
	$("#map .right-btn .arrow").click(function(){
		if (show)
		{
			show=false;
			$right_btn.finish().animate({"right":-200+"px"});
			$allmap.finish().animate({"width":"998px"});
		}
		else
		{
			show=true;
			$right_btn.finish().animate({"right":0+"px"});
			$allmap.finish().animate({"width":"806px"});
		}
	});
	


	// 百度地图
	// 本楼盘信息
	var first_info = {
		name : "西岸国际花园",  // 楼盘名称
		price : 6000,  // 楼盘平均价格
		x: 109.021499, // 楼盘坐标点
		y: 34.315241, // 楼盘坐标点
		img_url : "img/map/baidu.jpg",
		address : "西安市凤城十路与文景路交界处，海荣集团108室", // 楼盘地址
		telephone : "(010)59928888", // 楼盘电话
		this_url : "###", //本楼盘url
		lpxq_url : "###", //楼盘动态
		yzlt_url : "###", //业主论坛
		gdxq_url : "###" //更多详情
	
	}
	// 周边楼盘信息
	var round_info = [
		first_info
		,$.extend({},first_info,{name:"世纪荣成",x:109.011200,y:34.315241})
		,$.extend({},first_info,{name:"紫薇花园",x:109.001599,y:34.315000})
		,$.extend({},first_info,{name:"长乐小区",x:109.004499,y:34.307641})
		,$.extend({},first_info,{name:"中铁·缤纷新城",x:109.001300,y:34.305241})
	]
	
	// 本楼盘信息
	var info = round_info[0]; // 本楼盘信息
	var city = "西安";
	var mapsize = 15; // 地图初始比例尺级别
	var container = document.getElementById('allmap');
	var mapOptions = {minZoom:12, maxZoom:19}; // 设置缩放范围
	var map = new BMap.Map(container,mapOptions); // 创建地图实例
	info.position = new BMap.Point(info.x,info.y);
	map.centerAndZoom(info.position, mapsize); // 设置地图中心店以及缩放比例
	map.addControl(new BMap.NavigationControl()); // 添加平移缩放控件
	map.addControl(new BMap.ScaleControl({type:BMAP_NAVIGATION_CONTROL_SMALL})); // 添加比例尺控件
	map.enableScrollWheelZoom(); // 启用滚轮缩放
	map.setCurrentCity(city); //设置当前城市
	map.clearHotspots(); //
	
	var markerManager = []; // 用于保存本楼盘以及周边楼盘的标注
	
	//创建本楼盘和所有周边楼盘标注
	for (var i = 0; i<round_info.length; i++) {
		createMarker(round_info[i],i-1);
	}
	//创建楼盘函数，i表示周边楼盘的，用于确定前10楼盘的显示字母
	function createMarker(info,i) {
		var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
					   '<img src="'+info.img_url+'" alt="'+info.name+'" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
					   '均价：<span style="font-size:20px;color:red;font-weight:bold;">'+info.price+' </span><span style="color:#666;">元/平方米</span><br/>'+
					   '地址：<span style="color:#666;">'+info.address+'</span><br/>'+
					   '电话：<span style="color:#666;">'+info.telephone+'</span><br/>'+
					   '<div>'+
					   '<a style="margin-left:25px;" href="'+info.lpxq_url+'">楼盘动态</a>'+
					   '<a style="margin-left:40px;" href="'+info.gdxq_url+'">更多详情</a>'+
					   '</div></div>';
	
		//创建检索信息窗口对象
		var searchInfoWindow = null;
		searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
				title  : '<a href="'+info.this_url+'">'+info.name+'</a>',      //标题
				width  : 300,             //宽度
				height : 110,              //高度
				offset : new BMap.Size(0, 32), //源代码中水平偏移无效
				panel  : "result",         //检索结果面板
				enableAutoPan : true,     //自动平移
				enableSendToPhone : false, //是否启动发送到手机功能
				searchTypes   :[
					BMAPLIB_TAB_TO_HERE,  //到这里去
					BMAPLIB_TAB_FROM_HERE, //从这里出发
					BMAPLIB_TAB_SEARCH   //周边检索
				]
			});

		searchInfoWindow.name = info.name; //保存该搜索框对应的名称，在自定义搜索结果面板时会用到
		
		var name_htm;
		var marker_offset;
		if (i==-1){
			name_htm = '<div class="name-overlay"><div class="right-name">'+info.name+'<span> | 均价'+info.price+'元/平方米</span></div></div>'
			marker_offset = new BMap.Size(-10, -32);
		} else {
			if (i>9){
				name_htm = '<div title="'+info.name+'" class="other-overlay2"></div>'
				marker_offset = new BMap.Size(-7.5, -15);
			} else {
				name_htm = '<div title="'+info.name+'" class="other-overlay" style="background-position:-'+i*21+'px 0;"></div>'
				marker_offset = new BMap.Size(-10, -32);
			}
			
		}
		info.position = new BMap.Point(info.x,info.y);
		var marker = new BMapLib.RichMarker(name_htm, info.position,
			{"anchor" : marker_offset,"enableDragging" : false}); //创建自定义marker对象
		map.addOverlay(marker); //在地图中添加marker
		//marker.enableDragging(); //marker可拖拽
		
		marker.infoWindow = searchInfoWindow; //保存信息窗口对象的引用
		marker.$marker = $(marker._container); //获取覆盖物的dom对象所封装的jquery对象
		markerManager.push(marker); //如果不是主楼盘标注，则加入标注管理数组
		
		if (i==-1){
			marker.addEventListener("click", function(e){
				searchInfoWindow.open(marker.getPosition());
				marker.$marker.addClass("active"); // 信息窗口打开后，该覆盖物为激活状态
			});
			searchInfoWindow.addEventListener("close", function(e) {
				marker.$marker.removeClass("active");
			});
		} else {
			marker.i = i;
			marker.z_index = marker.$marker.css('z-index');
			marker.open_window = false;
			marker.addEventListener("mouseover", function(e){
				marker.$marker.css('z-index',0);
				if (marker.i>9) marker.$marker.find('.other-overlay').addClass('active');
				else marker.$marker.find('.other-overlay').css('background-position',-marker.i*21+'px -34px');
			});
			marker.addEventListener("mouseout", function(e){
				marker.$marker.css('z-index',this.z_index);
				if (!marker.open_window) {
					if (marker.i>9) marker.$marker.find('.other-overlay').removeClass('active');
					else marker.$marker.find('.other-overlay').css('background-position',-marker.i*21+'px 0');
				}
			});
			marker.addEventListener("click", function(e){
				marker.open_window = true;
				searchInfoWindow.open(marker.getPosition());
				if (marker.i>9) marker.$marker.find('.other-overlay').addClass('active');
				else marker.$marker.find('.other-overlay').css('background-position',-marker.i*21+'px -34px');
			});
			searchInfoWindow.addEventListener("close", function(e) {
				marker.open_window = false;
				if (marker.i>9) marker.$marker.find('.other-overlay').removeClass('active');
				else marker.$marker.find('.other-overlay').css('background-position',-marker.i*21+'px 0');
			});
		}
	}
	// 隐藏除本项目外的其他标注
	function markerHide() {
		$.each(markerManager,function(i,n){
			if (i==0) return;
			n.hide();
		});
	}
	// 显示除本项目外的其他标注
	function markerShow() {
		$.each(markerManager,function(i,n){
			if (i==0) return;
			n.show();
		});
	}
	// 关闭所有标注的信息窗口
	function closeInfoWindow() {
		$.each(markerManager,function(i,n){
			n.infoWindow.close();
		});
	}
	
	// 创建周边楼盘结果页面
	var $housesResult = createHousesResult(round_info, markerManager);
	function createHousesResult (infoArr, markerArr) {
		var $dl = $("<dl class='round_info'></dl>");
		for (var i = 0;i<infoArr.length;i++)
		{
			var info = infoArr[i];
			$dl.append("<dt>"+
				"<a href='javascript:void(0);' title='"+info.name+"'>"+
				"<span class='left'>"+info.name+"</span>"+
				"<span class='right'>均价：<em>"+info.price+"</em>元/平米</span>"+
				"</a>"+
				"</dt>");
			
		}
		var $dt = $dl.children("dt");
		$dt.click(function(){
			var $this = $(this);
			markerArr[$this.index()].infoWindow.open(markerArr[$this.index()].getPosition());
			$dt.removeClass("active");
			$this.addClass("active");
		});
		return $dl;
	}
	// 移除周边楼盘结果
	function addHousesResult() {
		$result_content.append($housesResult);
	}
	// 移除周边楼盘结果
	function removeHousesResult() {
		$housesResult.detach();
	}
	
	
	
	// 创建搜索结果面板
	createResult();
	function createResult() {
		var panel = document.getElementById('result');
		panel.innerHTML = "";
		map.panel = panel;
		//供地址选择页用的提示文字
		var address = document.createElement('div');
		address.style.cssText = "display:none;background:#FD9;height:30px;line-height:30px;text-align:center;font-size:12px;color:#994C00;";
		panel.appendChild(address);
		map.panel.address = address;
		//供地址检索面板用
		var localSearch = document.createElement('div');
		panel.appendChild(localSearch);
		map.panel.localSearch = localSearch;
	}
	// 创建周边搜索
	var localSearch = createLocalSearch();
	function createLocalSearch() {
		var firstMarkerWindow = markerManager[0].infoWindow;
		firstMarkerWindow.localSearch = new BMap.LocalSearch(map, {
        	renderOptions: {map:map, panel:map.panel.localSearch}
		});
		/////////////////////  自定义周边结果页面  //////////////////////////////
		firstMarkerWindow.localSearch.setResultsHtmlSetCallback(function(container){
			var $container = $(container);
			$container.find(">div:last>a").remove();
			$container.find(">div:first li").find(">div>div:first").css("height","auto").children("a").remove().end().parent().find("span").css({"display":"block","word-break":"break-all","overflow":"hidden"});
			
		});
		return markerManager[0].infoWindow.localSearch;
	}
	// 周边搜索
	var isRoundSearch; //判断是否是周边搜索
	function mapSearch(content){
		isRoundSearch = true;
		$result_title.text("周边"+content);
		localSearch.searchNearby(content,info.position,1000);
	}
	
	$("#map .right-btn ul li").click(function(){
		$result.show();
		closeInfoWindow();
		markerHide();
		switch ($(this).index())
		{
			case 0:
				markerShow();
				addHousesResult();
				$result_title.text("周边楼盘");
				break;
			case 1:
				mapSearch('交通');
				break;
			case 2:
				mapSearch('银行');
				break;
			case 3:
				mapSearch('超市');
				break;
			case 4:
				mapSearch('餐饮');
				break;
			case 5:
				mapSearch('学校');
				break;
			case 6:
				mapSearch('公园');
				break;
			case 7:
				mapSearch('医院');
				break;
			case 8:
				mapSearch('娱乐');
				break;
		}
	});
	
	// 检索结果面板返回按钮
	$back = $("#map .right-btn .result .top .back");
	$back.click(function(){
		$result.hide();
		removeHousesResult();
		markerShow();
		closeInfoWindow();
		createBackEvent();
		localSearch.clearResults();
		map.panTo(info.position); //地图移动回项目位置
	});
	
	// 广播返回事件
	function createBackEvent() {
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent("back",true);
		document.dispatchEvent(evt);
	}
	
	// 监听搜索结束事件
	$(window).on("searchFinish",function(){
		if (!isRoundSearch) $result_title.text("详细信息");
		isRoundSearch = false;
		// 清除周边楼盘结果页信息
		removeHousesResult();
		// 清除其余标注
		markerHide();
		$result.show();
	});
});