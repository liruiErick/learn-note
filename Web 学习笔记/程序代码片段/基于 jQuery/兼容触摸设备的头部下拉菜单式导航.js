/*
html 格式如下：
<li>
	<a href="#page3">关于我们</a>
	<dl>
		<dt><a href="#page3" onClick="gotoTarget(this)">公司简介</a></dt>
		<dt><a href="#page3" onClick="gotoTarget(this)">企业文化</a></dt>
		<dt><a href="#page3" onClick="gotoTarget(this)">企业战略</a></dt>
		<dt><a href="#page3" onClick="gotoTarget(this)">公司架构</a></dt>
		<dt><a href="#page3" onClick="gotoTarget(this)">投资洽谈</a></dt>
	</dl>
</li>
*/
// 导航到指定锚点，并切换到对应项
function gotoTarget(self) {
	var $self = $(self);
	$($self.attr('href')).find('a').eq($self.parents('dt').index()).trigger('click');
}

// 兼容触摸设备的头部下拉菜单式导航
var is_mobile = !!navigator.userAgent.match(/mobile/i); //判断是否为移动设备
var $nav_item = $('#header ul li');
if (is_mobile) {
	var $curActive = $();
	$nav_item = $nav_item.has('dl').attr('href', 'javascript:void(0);');
	$nav_item.on('click', function(){
		var $this = $(this);
		if ($this.has($curActive).length > 0) return;
		$curActive.stop().slideUp(200);
		$curActive = $this.children('dl');
		$curActive.stop().slideDown(200);
	});
	$(document).on('click', function(e){
		if ($(e.target).parents().addBack().is($nav_item)) return;
		$curActive.stop().slideUp(200);
		$curActive = $();
	});
	$nav_item.find('dl a').on('click', function(){
		$curActive.stop().slideUp(200);
		$curActive = $();
		gotoTarget(this);
	});
} else {
	$nav_item.mouseenter(function(e) {
		$(this).children('dl').stop().slideDown(200);
	});
	$nav_item.mouseleave(function(e) {
		$(this).children('dl').stop().slideUp(200);
	});
}