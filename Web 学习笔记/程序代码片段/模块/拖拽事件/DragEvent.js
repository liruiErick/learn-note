(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.DragEvent = factory(root.jQuery);
	}

}(this, function($) {
	'use strict'

	// 判断事件支持
	var is_mobile = !!navigator.userAgent.match(/mobile/i),
		supportTouch = 'ontouchend' in document,
		supportPointer = !!window.navigator.pointerEnabled,
		supportMSPointer = !!window.navigator.msPointerEnabled;

	var startEvent, moveEvent, endEvent, cancelEvent;
	if (is_mobile) {
		// 移动设备优先使用Touch事件，因为最新的winPhone8.1已经开始支持Touch事件
		if (supportTouch) {
			startEvent = 'touchstart';
			moveEvent = 'touchmove';
			endEvent = 'touchend';
			cancelEvent = 'touchcancel';
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


	/**
	 * @brief 拖拽事件封装
	 * @option_param {DOM | string} obj 拖拽事件的绑定对象
	 * @option_param {object} holder 事件回调回调的持有者，即this指向的对象。如果未指定，则默认为当前触发拖拽事件的目标对象
	 * @option_param {function} start 拖拽开始事件回调，将包含事件信息的data对象作为参数传入
	 * - 如果 start 返回值为 false，将会取消之后的移动和结束事件
	 * @option_param {function} move 拖拽中事件回调，将包含事件信息的data对象作为参数传入
	 * @option_param {function} end 拖拽结束事件回调，将包含事件信息的data对象作为参数传入
	 */
	function DragEvent() {
		this._init.apply(this, arguments);
	}

	DragEvent.startEvent = startEvent;
	DragEvent.moveEvent = moveEvent;
	DragEvent.endEvent = endEvent;
	DragEvent.cancelEvent = cancelEvent;
	DragEvent.nameSpace = 1; //拖拽事件的命名空间

	var p = DragEvent.prototype;

	p.constructor = DragEvent;

	p._init = function(option) {
		this.eventObj = option.obj || document.documentElement;
		this.callbackHolder = option.holder;
		this.startCallback = option.start;
		this.moveCallback = option.move;
		this.endCallback = option.end;

		this.startEvent = DragEvent.startEvent + '.' + DragEvent.nameSpace;
		this.moveEvent = DragEvent.moveEvent + '.' + DragEvent.nameSpace;
		this.endEvent = DragEvent.endEvent + '.' + DragEvent.nameSpace;
		if (cancelEvent) this.endEvent += ' ' + DragEvent.cancelEvent + '.' + DragEvent.nameSpace;
		DragEvent.nameSpace ++;

		this.touchID = -1;
		this.swipeDis = 5; //判断清扫的距离
		this.swipeTime = 200; //判断清扫的时间
		this.swipeH = false; //是否构成水平清扫行为
		this.swipeV = false; //是否构成垂直清扫行为
		this.prevTime = 0;

		this.data = {
			startX: 0, //相对于窗口的拖拽起始X坐标
			startY: 0, //相对于窗口的拖拽起始Y坐标
			startLocalX: 0, //相对于事件对象的拖拽起始X坐标
			startLocalY: 0, //相对于事件对象的拖拽起始Y坐标
			x: 0, //相对于窗口的当前X坐标
			y: 0, //相对于窗口的当前Y坐标
			localX: 0, //相对于事件对象的当前X坐标
			localY: 0, //相对于事件对象的当前Y坐标
			dx: 0, //从拖拽开始到当前的X轴移动距离差
			dy: 0, //从拖拽开始到当前的Y轴移动距离差
			absDx: 0, //从拖拽开始到当前的X轴移动距离差的绝对值
			absDy: 0, //从拖拽开始到当前的Y轴移动距离差的绝对值
			stepDx: 0, //当前较上一步的X轴移动距离差
			stepDy: 0, //当前较上一步的Y轴移动距离差
			absStepDx: 0, //当前较上一步的X轴移动距离差的绝对值
			absStepDy: 0, //当前较上一步的Y轴移动距离差的绝对值
			swipeLeft: false, //是否构成向左清扫
			swipeRight: false, //是否构成向右清扫
			swipeTop: false, //是否构成向上清扫
			swipeBottom: false, //是否构成向下清扫
			swipe: false, //是否构成清扫
			startTime: 0, //开始拖拽时的时间
			stepTime: 0 //当前较上一步的时间差
		};

		this._startDragHandler = $.proxy(this, '_startDragHandler');
		this._moveDragHandler = $.proxy(this, '_moveDragHandler');
		this._endDragHandler = $.proxy(this, '_endDragHandler');

		this.$doc = $(document);
		this.$eventObj = $(this.eventObj);
		this.eventObj = this.$eventObj[0];
		this.$eventObj.on(this.startEvent, this._startDragHandler);

		this.eventTarget = null; //用于记录当前的事件目标
	};

	p._startDragHandler = function(e) {
		var touch;
		switch (e.type) {
			case 'mousedown':
			case 'pointerdown':
			case 'MSPointerDown':
				touch = e;
				break;
			case 'touchstart':
				if (this.touchID >= 0) return;
				touch = e.originalEvent.changedTouches[0];
				this.touchID = touch.identifier;
				break;
		}

		// Do something
		var data = this.data;
		data.dx = 0;
		data.dy = 0;
		data.absDx = 0;
		data.absDy = 0;
		data.stepDx = 0;
		data.stepDy = 0;
		data.absStepDx = 0;
		data.absStepDy = 0;

		data.swipeLeft = false;
		data.swipeRight = false;
		data.swipeTop = false;
		data.swipeBottom = false;
		data.swipe = false;

		data.startX = data.x = touch.clientX;
		data.startY = data.y = touch.clientY;
		data.stepTime = 0;
		data.startTime = this.prevTime = e.timeStamp;

		var eventObjRect = this._getEventObjRect();
		data.startLocalX = data.localX = data.x - eventObjRect.left;
		data.startLocalY = data.localY = data.y - eventObjRect.top;

		this.eventTarget = e.currentTarget;

		if (this.startCallback && this.startCallback.call(this.callbackHolder || this.eventTarget, e, $.extend({}, data)) === false) {
			this.touchID = -1;
			return;
		}

		this.$doc
			.on(this.moveEvent, this._moveDragHandler)
			.on(this.endEvent, this._endDragHandler);
	};

	p._moveDragHandler = function(e) {
		var touch;
		switch (e.type) {
			case 'mousemove':
			case 'pointermove':
			case 'MSPointerMove':
				touch = e;
				break;
			case 'touchmove':
				touch = e.originalEvent.changedTouches[0];
				if (touch.identifier != this.touchID) return;
				break;
		}

		// Do something
		var data = this.data;
		data.dx = touch.clientX - data.startX;
		data.dy = touch.clientY - data.startY;
		data.absDx = Math.abs(data.dx);
		data.absDy = Math.abs(data.dy);
		data.stepDx = touch.clientX - data.x;
		data.stepDy = touch.clientY - data.y;
		data.absStepDx = Math.abs(data.stepDx);
		data.absStepDy = Math.abs(data.stepDy);
		data.x = touch.clientX;
		data.y = touch.clientY;

		var eventObjRect = this._getEventObjRect();
		data.localX = data.x - eventObjRect.left;
		data.localY = data.y - eventObjRect.top;

		var curTime = e.timeStamp;
		data.stepTime = curTime - this.prevTime;
		this.prevTime = curTime;

		// 判断是否符合清扫行为
		if (data.absStepDx > this.swipeDis) this.swipeH = true;
		else this.swipeH = false;
		if (data.absStepDy > this.swipeDis) this.swipeV = true;
		else this.swipeV = false;

		if (this.moveCallback) this.moveCallback.call(this.callbackHolder || this.eventTarget, e, $.extend({}, data));
	};

	p._endDragHandler = function(e) {
		if (e && e.type) {
			switch (e.type) {
				case 'touchend':
				case 'touchcancel':
					if (e.originalEvent.changedTouches[0].identifier != this.touchID) return;
					break;
			}

			// Do something
			var data = this.data;
			if (data.stepTime < this.swipeTime) { // 确认构成清扫
				if (this.swipeH) { //水平清扫
					this.swipeH = false;
					data.swipe = true;
					if (data.stepDx < 0) { //手指左滑
						data.swipeLeft = true;
					} else if (data.stepDx > 0) { //手指右滑
						data.swipeRight = true;
					}
				}
				if (this.swipeV) { //垂直清扫
					this.swipeV = false;
					data.swipe = true;
					if (data.stepDy < 0) { //手指上滑
						data.swipeTop = true;
					} else if (data.stepDy > 0) { //手指下滑
						data.swipeBottom = true;
					}
				}
			}

			if (data.absDx > 15 || data.absDy > 15) e.preventDefault(); //移动时防止<a>链接被点击
		}

		this.$doc
			.off(this.moveEvent, this._moveDragHandler)
			.off(this.endEvent, this._endDragHandler);

		if (this.endCallback) this.endCallback.call(this.callbackHolder || this.eventTarget, e, $.extend({}, data));

		this.touchID = -1;
		this.eventTarget = null;
	};

	p._getEventObjRect = function() {
		return this.eventObj.getBoundingClientRect ?
			this.eventObj.getBoundingClientRect() :
			{ left: document.documentElement.scrollLeft || document.body.scrollLeft, top: document.documentElement.scrollTop || document.body.scrollTop };
	};

	p.open = function() {
		this.$eventObj.on(this.startEvent, this._startDragHandler);
		return this;
	};

	p.close = function() {
		this.$eventObj.off(this.startEvent, this._startDragHandler);
		return this;
	};

	p.stop = function() {
		this._endDragHandler();
		return this;
	};

	p.remove = function() {
		this.close();
		this.stop();
		return this;
	};

	return DragEvent;
}));
