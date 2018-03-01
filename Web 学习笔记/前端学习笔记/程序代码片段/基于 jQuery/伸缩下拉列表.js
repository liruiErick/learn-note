$(function(){

	var $list = $('列表容器');
	var $line = $list.find('li'); //获取单行
	var li_count = $list.find('li').length; //获取行数
	var show_count = 3; //默认显示3行
	var line_height=$line.outerHeight(true);

	var $show_btn=$('伸缩按钮');
	var show;
	btnShow(); //初始化显示
	$show_btn.click(function(){
		if (show) btnHide();
		else btnShow();
	});

	function btnShow(){
		show=true;
		$list.finish().animate({'height':line_height*li_count+'px'}); //全部展开
		$show_btn.css('展开按钮背景图片');
		$show_btn.text('收缩');
	}
	function btnHide(){
		show=false;
		$list.finish().animate({'height':line_height*show_count+'px'}); //恢复默认显示行数
		$show_btn.css('收缩按钮背景图片');
		$show_btn.text('显示更多分类');
	}

});