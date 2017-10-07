// 组按钮筛选，过滤掉禁用的按钮
var $group_btn = $('#group_btn >:not([class="disabled"],[disabled])');
tabBtn($group_btn);

// 组按钮切换
function tabBtn($btn, index, func) {
	index = index || 0; //默认显示的索引号
	var $btn = $(btn),
		$curBtn = $btn.filter('.active').removeClass('active'),
		curIndex;

	// IE6-7 在使用 IE9.js 做兼容时，会生成一些元素用于模拟伪元素，如果当前焦点内含有伪元素，那么生成后的模拟伪元素无法根据样式改变，因此需要延时添加焦点类
	var is_lte_IE7 = false,
		ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		ieVersionNum = ieVersion && ieVersion[1] - 0;
	if (navigator.appName == 'Microsoft Internet Explorer' && ieVersionNum <= 7) is_lte_IE7 = true;

	if (is_lte_IE7) window.setTimeout(init, 0);
	else init();

	function init() {
		if (!$curBtn.length) $curBtn = $btn.eq(index);
		curIndex = $btn.index($curBtn);
		tab(curIndex);
	}

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click';

	$btn.on(clickEventType, function(e) {
		e.preventDefault();
		if (this === $curBtn[0]) return;
		tab($btn.index(this));
	});

	function tab(index) {
		if (typeof func === 'function') {
			var returnValue = func.call($curBtn, index);
			if (returnValue === false) { // 如果回调返回值为false，则不切换
				return returnValue;
			} else if (typeof returnValue === 'object' && returnValue.done) { // 如果返回值是一个延迟对象，则在允许时切换
				returnValue.done(function() {
					setCurBtn(index);
				});
				return returnValue;
			}
		}
		setCurBtn(index);
	}

	function setCurBtn(index) {
		curIndex = index;
		$curBtn.removeClass('active');
		$curBtn = $btn.eq(curIndex).addClass('active');
	}

	return tab;
}

// 导航切换内容
function tabNav($btn, $content, index, speed, func) {
	index = index || 0; //默认显示的索引号
	speed = speed || 0;
	var $btn = $(btn),
		$content = $(content),
		$curBtn = $btn.filter('.active').removeClass('active'),
		curIndex,
		$curContent;
	$content.hide();

	// IE6-7 在使用 IE9.js 做兼容时，会生成一些元素用于模拟伪元素，如果当前焦点内含有伪元素，那么生成后的模拟伪元素无法根据样式改变，因此需要延时添加焦点类
	var is_lte_IE7 = false,
		ieVersion = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		ieVersionNum = ieVersion && ieVersion[1] - 0;
	if (navigator.appName == 'Microsoft Internet Explorer' && ieVersionNum <= 7) is_lte_IE7 = true;

	if (is_lte_IE7) window.setTimeout(init, 0);
	else init();

	function init() {
		if (!$curBtn.length) $curBtn = $btn.eq(index);
		$curContent = $content.eq(curIndex).show();
		curIndex = $btn.index($curBtn);
		tab(curIndex);
	}

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click';

	$btn.on(clickEventType, function(e) {
		e.preventDefault();
		if (this === $curBtn[0]) return;
		tab($btn.index(this));
	});

	function tab(index) {
		if (typeof func === 'function') {
			var returnValue = func.call($curBtn, index);
			if (returnValue === false) { // 如果回调返回值为false，则不切换
				return returnValue;
			} else if (typeof returnValue === 'object' && returnValue.done) { // 如果返回值是一个延迟对象，则在允许时切换
				returnValue.done(function() {
					setCurBtn(index);
					setCurContent(index);
				});
				return returnValue;
			}
		}
		setCurBtn(index);
		setCurContent(index);
	}

	function setCurBtn(index) {
		curIndex = index;
		$curBtn.removeClass('active');
		$curBtn = $btn.eq(curIndex).addClass('active');
	}

	function setCurContent(index) {
		if ($curContent) {
			$curContent.stop().fadeOut(speed, function() {
				$curContent = $content.eq(index);
				$curContent.fadeIn(speed);
			});
		} else {
			$curContent = $content.eq(index).show();
		}
	}

	return tab;
}


