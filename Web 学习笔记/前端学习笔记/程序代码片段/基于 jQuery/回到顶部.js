// 回到顶部
require(['jquery.animate'], function($) {
	var $scrolltop = $('#scrolltop');
	if (!$scrolltop.length) return;

	var $win = $(window),
		$doc = $(allowScroll(document.documentElement) ? document.documentElement : document.body),
		winHalfHeight = $win.height() / 2, //窗口显示区域半高
		scrolltopShow = false,
		scrolling = false;

	$win.on('scroll', function() {
		if ($win.scrollTop() > winHalfHeight) {
			if (!scrolltopShow) {
				scrolltopShow = true;
				$scrolltop.stop().animate({ 'opacity': 1 });
			}
		} else {
			if (scrolltopShow) {
				scrolltopShow = false;
				$scrolltop.stop().animate({ 'opacity': 0 });
			}
		}
	});

	$scrolltop.on('click', function() {
		if (!scrolling && $win.scrollTop() != 0) {
			scrolling = true;
			$doc.stop().animate({ scrollTop: 0 }, function() {
				scrolling = false;
			});
		}
	});

	function allowScroll(elem, testHor) {
		var st = elem.scrollTop;
		elem.scrollTop += (st > 0) ? -1 : 1;
		if (elem.scrollTop != st) {
			elem.scrollTop = st;
			return true;
		}

		if (!testHor) return;

		var sl = elem.scrollLeft;
		elem.scrollLeft += (sl > 0) ? -1 : 1;
		if (elem.scrollLeft != sl) {
			elem.scrollLeft = sl;
			return true;
		}
	}
});