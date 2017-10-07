$(function(){

	var $btn = $('a链接选择器'),
		currentUrl = document.location.href,
		linkUrl;
	$btn.each(function(i,n){
		linkUrl = n.getAttribute('href');
		if (currentUrl.indexOf(linkUrl) != -1) $(n).addClass('active');
	});

});