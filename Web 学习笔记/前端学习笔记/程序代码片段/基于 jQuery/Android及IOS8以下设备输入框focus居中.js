// 非IOS输入框focus居中
// 同时隐藏fixed元素
focusCenter('#body', '#footer');
function focusCenter(container, fixElement) {
	var is_mobile = !!navigator.userAgent.match(/mobile/i);
	var is_apple = !!navigator.userAgent.match(/(iPad|iPod|iPhone)/i) && !navigator.userAgent.match(/Windows Phone/i);
	var iosVersion = navigator.appVersion.match(/OS (\d+_\d)/);
	var iosVersionNum = iosVersion && parseInt(iosVersion[1]);
	var is_gte_IOS8 = is_apple && iosVersionNum >= 8;
	if (!is_mobile || is_gte_IOS8) return;

	container = container || 'body';
	var selector = 'textarea'
				+ ',select'
				+ ',input[type="text"]'
				+ ',input[type="password"]'
				+ ',input[type="datetime"]'
				+ ',input[type="datetime-local"]'
				+ ',input[type="date"]'
				+ ',input[type="month"]'
				+ ',input[type="time"]'
				+ ',input[type="week"]'
				+ ',input[type="number"]'
				+ ',input[type="email"]'
				+ ',input[type="url"]'
				+ ',input[type="search"]'
				+ ',input[type="tel"]'
				+ ',input[type="color"]';

	var $container = $(container);
	var $fixElement = $(fixElement);
	var $win = $(window);
	var $focus = null;

	$container.on('focus', selector, function() {
		$focus = $(this);
	})
	$container.on('blur', selector, function() {
		if ($focus && $focus[0] == this) $focus = null;
	});

	// 由于 screen.width/height 并不一定等于屏幕的物理宽高
	// 因此使用初始化时的宽度比来计算一个缩放比率（因为高度可能包含工具栏，因此不用高度计算）
	// 这个缩放比率用于将 screen.height 还原回实际的屏幕物理高度
	var scaleRatio = $win.width() / screen.width;
	var heightRatio = .6; // 高度比率，用于判断当前高度是否为键盘呼出状态

	$win.resize(function() {
		var winH = $win.height();
		var minH = screen.height * scaleRatio * heightRatio; // 计算最小高度
		if (winH < minH) {
			// 调整容器大小，并隐藏fixed元素
			$container.css({
				'position': 'fixed',
				'left': '0',
				'right': '0',
				'top': '0',
				'bottom': '0',
				'width': 'auto',
				'height': 'auto',
			});
			$fixElement.hide();

			if (!$focus) return;
			// 居中输入框
			var distanceTop = Math.max(0, $container.height() - $focus.height()) / 2;
			var offsetTop = $focus.offset().top - $container.offset().top + $container.scrollTop();
			$container.stop().animate({scrollTop: offsetTop - distanceTop});
		} else {
			// 还原容器大小，并显示fixed元素
			$container.css({
				'position': '',
				'left': '',
				'right': '',
				'top': '',
				'bottom': '',
				'width': '',
				'height': '',
			});
			$fixElement.show();

			$focus && $focus.blur(); // Android设备可以先关闭键盘，但不释放焦点，因此这里手动释放焦点
		}
	});

}