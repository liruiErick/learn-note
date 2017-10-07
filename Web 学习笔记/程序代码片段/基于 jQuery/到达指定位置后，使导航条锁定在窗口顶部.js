$(function() {

	//判断是否是IE6及以下版本
	var is_lte_IE6 = false,
		version = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		versionNum = version && version[1] - 0,
	if (navigator.appName == 'Microsoft Internet Explorer' && versionNum <= 6) is_lte_IE6 = true;

	var $win = $(window),
		$nav = $('导航条'),
		nav_top = $nav.offset().top, //获取导航条的初始顶部位
		nav_parent_top = $nav.offsetParent().offset().top, //获取导航条最近定位父级的初始顶部位置
		nav_margin = $nav.css('margin'), //获取导航条的margin值
		nav_position = $nav.css('position'), //获取导航条的position值
		fixed = false,
		timerID;

	// 创建一个div在导航条脱离文档结构时填充原导航条的位置
	var $div = $('<div>');
	$div.css({
		'height': $nav.outerHeight(),
		'margin': nav_margin
	});

	$win.scroll(function() {
		var scrollTop = $win.scrollTop();
		if (nav_top < scrollTop && !fixed) {

			fixed = true;
			$nav.after($div);

			if (is_lte_IE6) {
				$nav.css({
					'position': 'absolute',
					'top': nav_parent_top,
					'margin-top': 0
				});
				timerID = setInterval(IE6_slide, 16);
				//或者在导航条样式中设置：*top:expression(eval(document.documentElement.scrollTop-父级定位元素顶部位置));
			} else {
				$nav.css({
					'position': 'fixed',
					'top': 0,
					'margin-top': 0
				});
			}

		} else if (nav_top >= scrollTop && fixed) {

			fixed = false;
			$div.detach();

			if (is_lte_IE6) clearInterval(timerID);
			$nav.css({
				'position': nav_position,
				'margin': nav_margin
			});
		}
	});

	function IE6_slide() {
		$nav.css({
			'top': document.documentElement.scrollTop - nav_parent_top
		});
	}
});