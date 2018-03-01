$(function(){

	var startX = 0, startY = 0,
		startTime = 0,
		touchId = -1,
		hold = false,
		dis = 5, //判断清扫的距离
		swipeTime = 200, //判断清扫的时间

		is_mobile = !!navigator.userAgent.match(/mobile/i),
		supportTouch = 'ontouchend' in document,
		supportPointer = !!window.navigator.pointerEnabled,
		supportMSPointer = !!window.navigator.msPointerEnabled,
		startEvent, moveEvent, endEvent;

	if (is_mobile) {
		// 移动设备优先使用Touch事件，因为最新的winPhone8.1已经开始支持Touch事件
		if (supportTouch) {
			startEvent = 'touchstart';
			moveEvent = 'touchmove';
			endEvent = 'touchend';
		} else if (supportPointer) {
			startEvent = 'pointerdown';
			moveEvent = 'pointermove';
			endEvent = 'pointerup';
		} else if (supportMSPointer) {
			startEvent = 'MSPointerDown';
			moveEvent = 'MSPointerMove';
			endEvent = 'MSPointerUp';
		} else {
			startEvent = 'mousedown';
			moveEvent = 'mousemove';
			endEvent = 'mouseup';
		}
	} else {
		startEvent = 'mousedown';
		moveEvent = 'mousemove';
		endEvent = 'mouseup';
	}

	$container.on(startEvent, function(e) {
		hold = true;
		var touch;
		switch (e.type) {
			case 'mousedown':
			case 'pointerdown':
			case 'MSPointerDown':
				touch = e;
				break;
			case 'touchstart':
				if (touchId >= 0) return;
				touch = e.originalEvent.changedTouches[0];
				touchId = touch.identifier;
				break;
		}

		// Do something
		startX = touch.clientX;
		startY = touch.clientY;
		startTime = e.timeStamp;
	});
	$container.on(moveEvent, function(e) {
		if (!hold) return;
		var touch;
		switch (e.type) {
			case 'mousemove':
			case 'pointermove':
			case 'MSPointerMove':
				touch = e;
				break;
			case 'touchmove':
				touch = e.originalEvent.changedTouches[0];
				if (touch.identifier != touchId) return;
				break;
		}

		// Do something
		e.preventDefault();
		var curX = touch.clientX,
			curY = touch.clientY,
			dx = curX - startX,
			dy = curY - startY;

	});
	$container.on(endEvent, function(e) {
		hold = false;
		var touch;
		switch (e.type) {
			case 'mouseup':
			case 'pointerup':
			case 'MSPointerUp':
				touch = e;
				break;
			case 'touchend':
				touch = e.originalEvent.changedTouches[0];
				if (touch.identifier != touchId) return;
				touchId = -1;
				break;
		}

		// Do something
		var endX = touch.clientX,
			endY = touch.clientY,
			endTime = e.timeStamp;
			timeIn = endTime - startTime < swipeTime,
			dx = endX - startX,
			dy = endY - startY,
			h = Math.abs(dx),
			v = Math.abs(dy);

		if (timeIn && h>v && h>dis) { //水平清扫
			if (dx < 0) { //手指左滑

			} else if (dx > 0) { //手指右滑

			}
		} else if (timeIn && h<v && v>dis) { //垂直清扫
			if (dy < 0) { //手指上滑

			} else if (dy > 0) { //手指下滑

			}
		}

		if (dx!=0 || dy!=0) e.preventDefault(); //移动时防止<a>链接被点击
	});

});