$(function(){

	var $header = $('#header');
	var $body = $(allowScroll(document.documentElement) ? document.documentElement : document.body);
	var slideEasing = 'easeInOutExpo'; //'swing'

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

	// 导航栏锚点跳转缓动。锚点的 href 必须以 “#” 开头，且为需要跳转到元素的 id 名或者 name 名
	/*var headerH = $header.height() || 0; //锁定头部
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var scrollTop = $target.offset().top - headerH;
				$body.stop().animate({scrollTop: scrollTop}, 1000, slideEasing);
				return false;
			}
		}
	});*/
	// 导航栏锚点跳转缓动。简单写法，仅支持 id 名
	var headerH = $header.height() || 0; //锁定头部
	$('a[href^="#"]').click(function(){
		var $target = $(this.getAttribute('href'));
		if ($target.length) {
			var scrollTop = $target.offset().top - headerH;
			$body.stop().animate({scrollTop: scrollTop}, 1000, slideEasing);
			return false;
		}
	});



	var $win = $(window);
	var $doc = $(document);
	// 获取锚点导航栏的<a>连接
	var $nav_item = $header.find('a');
	// 每个导航对应的锚点
	var $pages = $('#page1, #page2, #page3, #page4, #page5');

	// 获取右侧锚点导航栏
	var $right_nav = $('#right-nav');
	// 根据窗口位置，设置导航栏透明度
	$right_nav.css('opacity',$win.scrollTop()/1500);
	// 页面初始化时跳至指定区域
	// 要求window.location.search为一个页面区块的id名
	//if (window.location.search) $body.stop().animate({scrollTop: $('#' + window.location.search.substr(1)).offset().top - headerH}, 0);

	// 整屏滚动
	var animating = false;
	var $section = $('#page1, #page2, #page3, #page4, #page5, #page6, #page9, #page8, #page7, #page10, #footer');
	var max_index = $section.length - 1;
	var cur_index = 0;
	var is_mobile = !!navigator.userAgent.match(/mobile/i); //判断是否为移动设备
	var roll = function(e) {
		var offset = $section.eq(cur_index).offset().top - headerH;
		if (e && e.type === 'resize') {
			$body.stop().animate({scrollTop: offset}, 0);
			return;
		}
		if (animating) return;
		animating = true;
		$body.stop().animate({scrollTop: offset}, 1000, slideEasing, function() {
			animating = false;
		});
	};
	$win.resize(roll);

	if (is_mobile) {
		var startX, startY, startTime,
			endX, endY, endTime,
			dis = 5, //判断清扫的距离
			swipeTime = 200; //判断清扫的时间
		$doc.on('touchmove', function(e) {
			e.preventDefault();
		});
		$doc.on('touchstart', function(e) {
			if (animating) return;
			startX = e.originalEvent.changedTouches[0].clientX;
			startY = e.originalEvent.changedTouches[0].clientY;
			startTime = e.timeStamp;
		});
		$doc.on('touchend', function(e) {
			if (animating) return;
			endX = e.originalEvent.changedTouches[0].clientX;
			endY = e.originalEvent.changedTouches[0].clientY;
			endTime = e.timeStamp;
			var timeIn = endTime - startTime < swipeTime,
				dx = endX-startX,
				dy = endY-startY,
				h = Math.abs(dx),
				v = Math.abs(dy);
			if (timeIn && h>v && h>dis) { //水平清扫
				if (dx < 0) { //手指左滑，页面向右显示

				} else if (dx > 0) { //手指右滑，页面向左显示

				}
			} else if (timeIn && h<v && v>dis) { //垂直清扫
				if (dy < 0) { //手指上滑，页面向下显示
					cur_index = Math.min(++cur_index, max_index);
					roll();
				} else if (dy > 0) { //手指下滑，页面向上显示
					cur_index = Math.max(--cur_index, 0);
					roll();
				}
			}
			if (dx!=0 || dy!=0) e.preventDefault(); //移动时防止<a>链接被点击
		});
	} else {
		$doc.on('mousewheel', function(e) {
			var inScroll = false; //表示是否处于滚动容器中
			var target = e.target;
			while (target) {
				if (target.tagName === 'HTML') break;
				else if (isScroll(target).y) {
					inScroll = true;
					break;
				}
				target = target.parentNode;
			}
			if (animating) {
				e.preventDefault();
				return;
			}
			var detail = e.deltaY;
			if (detail > 0) { //鼠标滚轮向上滚动，页面向上显示
				if (inScroll && target.scrollTop > 0) return; //如果事件对象有滚动条，且不在顶端，则停止页面滚动
				e.preventDefault();
				cur_index = Math.max(--cur_index, 0);
				roll();
			} else if (detail < 0) { //鼠标滚轮向下滚动，页面向下显示
				if (inScroll && target.scrollTop < target.scrollHeight - target.clientHeight) return; //如果事件对象有滚动条，且不在底端，则停止页面滚动
				e.preventDefault();
				cur_index = Math.min(++cur_index, max_index);
				roll();
			}
		});
	}


	var topOffset = 0; //设置可能的顶部的偏斜
	var winHeight; //窗口显示区域高度
	var winTop; //窗口顶部相对于文档位置
	var winBottom; //窗口底部相对于文档位置
	$win.scroll(scroll);
	scroll();
	function scroll() {
		winHeight = $win.height();
		winTop = $win.scrollTop();
		winBottom = winTop + winHeight;
		winTop = winTop + topOffset + (winHeight - topOffset) * 0.5;

		// 导航栏置顶时渐隐
		if ($right_nav && $right_nav.length) {
			if(winTop <= 1500) $right_nav.css('opacity', winTop/1500);
			else $right_nav.css('opacity', 1);
		}

		// 判断当前滑到到哪个区块
		$section.each(function(i, n){
			var $n = $(n);
			var top = $n.offset().top
			var bottom = top + $n.outerHeight();
			// 当页面顶部进入窗口高度的一半时，将该页面算作当前页面。
			if (i === $section.length-1 && winBottom >= bottom) cur_index = i; // 如果当前区块是最后一个，那么当区块底部与窗口底部平齐时，将该区块算作当前区块。
			else if (winTop >= top && winTop < bottom) cur_index = i; // 当页面顶部进入窗口高度的一半时，将该页面算作当前页面。
		});

		// 滑动到对应页面时，切换对应导航项的样式
		// 由于某些区块在头部导航中并没有对应的导航，因此要重新判断
		$pages.each(function(i, n){
			var $n = $(n);
			var top = $n.offset().top;
			var bottom = top + $n.outerHeight();
			if (i === $section.length-1 && winBottom >= bottom) {
				// 如果当前区块是最后一个，那么当区块底部与窗口底部平齐时，将该区块算作当前区块。
				$nav_item.removeClass('active');
				$nav_item.eq(i).addClass('active');
			} else if (winTop >= top && winTop < bottom) $nav_item.eq(i).addClass('active');
			else $nav_item.eq(i).removeClass('active');
		});
	}
});


// 判断元素是否含有滚动条
function isScroll(el) {
	var overflow_x = $(el).css('overflow-x'),
		overflow_y = $(el).css('overflow-y');
	return {
		x: !!((el.offsetWidth < el.scrollWidth) && (overflow_x === 'auto' || overflow_x === 'scroll')),
		y: !!((el.offsetHeight < el.scrollHeight) && (overflow_y === 'auto' || overflow_y === 'scroll'))
	};
}
