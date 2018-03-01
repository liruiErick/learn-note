require(['jquery'], function($) {
	var $nav = $('#header .nav');
	if (!$nav.length) return;

	var $item = $nav.find('li');
	var $active_item = $item.filter('.active');

	$item.mouseenter(function(event) {
		$item.removeClass('active');
		$(this).addClass('active');
	});

	$nav.mouseleave(function(event) {
		$item.removeClass('active');
		$active_item.addClass('active');
	});

});