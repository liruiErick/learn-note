(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.bjj = root.bjj || {};
        root.bjj.DragEvent = factory();
    }

}(this, function() {
    'use strict';

    // 判断事件支持
    var is_mobile = !!navigator.userAgent.match(/mobile/i),
        supportTouch = 'ontouchend' in document,
        supportPointer = window.navigator.pointerEnabled,
        supportMSPointer = window.navigator.msPointerEnabled;

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
     * 默认回调
     * this 指向 DragEvent 的实例对象
     * 包含 2 个参数 function(event, data)
     *
     * @param event {Object} 原生事件对象
     * @param data  {Object} [description]
     */
    var noop = function(event, data) {};

    var defaultOptions = {
        obj: null, // {DOM|String} 拖拽事件的绑定对象
        holder: null, // {Object} 事件回调回调的持有者，即this指向的对象。如果未指定，则默认为当前触发拖拽事件的目标对象
        start: noop, // {Function} 拖拽开始事件回调，将包含事件信息的data对象作为参数传入
        // 如果 start 返回值为 false，将会取消之后的移动和结束事件
        move: noop, // {Function} 拖拽中事件回调，将包含事件信息的data对象作为参数传入
        end: noop // {Function} 拖拽结束事件回调，将包含事件信息的data对象作为参数传入
    };

    /**
     * 拖拽事件
     * @param options {Object} 配置参数
     */
    function DragEvent(options) {
        if (!(this instanceof DragEvent)) {
            return new DragEvent(options);
        }

        this._options = extend({}, defaultOptions, options);
        this._init();
    }

    extend(DragEvent.prototype, {
        constructor: DragEvent,

        _init: function() {
            this._eventObj = this._options.obj || document.documentElement;
            this._callbackHolder = this._options.holder;

            this._touchID = -1;
            this._swipeDis = 5; // 判断清扫的距离
            this._swipeTime = 200; // 判断清扫的时间
            this._swipeH = false; // 是否构成水平清扫行为
            this._swipeV = false; // 是否构成垂直清扫行为
            this._prevTime = 0;

            this._data = {
                rect: null, // 拖拽对象的矩形对象
                startX: 0, // 相对于窗口的拖拽起始X坐标
                startY: 0, // 相对于窗口的拖拽起始Y坐标
                startLocalX: 0, // 相对于事件对象的拖拽起始X坐标
                startLocalY: 0, // 相对于事件对象的拖拽起始Y坐标
                x: 0, // 相对于窗口的当前X坐标
                y: 0, // 相对于窗口的当前Y坐标
                localX: 0, // 相对于事件对象的当前X坐标
                localY: 0, // 相对于事件对象的当前Y坐标
                dx: 0, // 从拖拽开始到当前的X轴移动距离差
                dy: 0, // 从拖拽开始到当前的Y轴移动距离差
                absDx: 0, // 从拖拽开始到当前的X轴移动距离差的绝对值
                absDy: 0, // 从拖拽开始到当前的Y轴移动距离差的绝对值
                localDx: 0, // 从拖拽开始到当前相对于事件对象的X轴移动距离差
                localDy: 0, // 从拖拽开始到当前相对于事件对象的Y轴移动距离差
                absLocalDx: 0, // 从拖拽开始到当前相对于事件对象的X轴移动距离差的绝对值
                absLocalDy: 0, // 从拖拽开始到当前相对于事件对象的Y轴移动距离差的绝对值
                stepDx: 0, // 当前较上一步的X轴移动距离差
                stepDy: 0, // 当前较上一步的Y轴移动距离差
                absStepDx: 0, // 当前较上一步的X轴移动距离差的绝对值
                absStepDy: 0, // 当前较上一步的Y轴移动距离差的绝对值
                swipeLeft: false, // 是否构成向左清扫
                swipeRight: false, // 是否构成向右清扫
                swipeTop: false, // 是否构成向上清扫
                swipeBottom: false, // 是否构成向下清扫
                swipe: false, // 是否构成清扫
                startTime: 0, // 开始拖拽时的时间
                dragTime: 0, // 当前较开始拖拽时的时间差
                stepTime: 0 // 当前较上一步的时间差
            };

            this._eventObj = $(this._eventObj)[0];

            this._initProxy();
            this._addEvent();

            return this;
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            var self = this;
            Object.getOwnPropertyNames(this.__proto__).forEach(function(prop) {
                if (isFunction(self[prop])) {
                    self[prop] = proxy(self, prop);
                }
            });
        },

        _addEvent: function() {
            this._eventObj.addEventListener(startEvent, this._startDragHandler, { passive: false });
        },

        _removeEvent: function() {
            this._eventObj.removeEventListener(startEvent, this._startDragHandler);
            this._eventObj.removeEventListener(moveEvent, this._moveDragHandler);
            this._eventObj.removeEventListener(endEvent, this._endDragHandler);
            cancelEvent && this._eventObj.removeEventListener(cancelEvent, this._endDragHandler);
        },

        _startDragHandler: function(e) {
            var touch;
            switch (e.type) {
                case 'mousedown':
                case 'pointerdown':
                case 'MSPointerDown':
                    touch = e;
                    break;
                case 'touchstart':
                    if (this._touchID >= 0) return;
                    touch = e.changedTouches[0];
                    this._touchID = touch.identifier;
                    break;
            }

            // Do something
            var data = this._data,
                eventObjRect = data.rect = this._getEventObjRect();

            data.startX = data.x = touch.clientX;
            data.startY = data.y = touch.clientY;
            data.startLocalX = data.localX = data.x - eventObjRect.left;
            data.startLocalY = data.localY = data.y - eventObjRect.top;

            data.dx = 0;
            data.dy = 0;
            data.absDx = 0;
            data.absDy = 0;
            data.localDx = 0;
            data.localDy = 0;
            data.absLocalDx = 0;
            data.absLocalDy = 0;
            data.stepDx = 0;
            data.stepDy = 0;
            data.absStepDx = 0;
            data.absStepDy = 0;

            data.swipeLeft = false;
            data.swipeRight = false;
            data.swipeTop = false;
            data.swipeBottom = false;
            data.swipe = false;

            this._prevTime = data.startTime = data.dragTime = e.timeStamp;
            data.stepTime = 0;

            var callback = this._options.start;
            if (callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data)) === false) {
                this._touchID = -1;
                return;
            }

            this._eventObj.addEventListener(moveEvent, this._moveDragHandler, { passive: false });
            this._eventObj.addEventListener(endEvent, this._endDragHandler, { passive: false });
            cancelEvent && this._eventObj.addEventListener(cancelEvent, this._endDragHandler, { passive: false });
        },

        _moveDragHandler: function(e) {
            var touch;
            switch (e.type) {
                case 'mousemove':
                case 'pointermove':
                case 'MSPointerMove':
                    touch = e;
                    break;
                case 'touchmove':
                    touch = e.changedTouches[0];
                    if (touch.identifier !== this._touchID) return;
                    break;
            }

            // Do something
            var data = this._data,
                eventObjRect = data.rect = this._getEventObjRect();

            data.stepDx = touch.clientX - data.x;
            data.stepDy = touch.clientY - data.y;
            data.absStepDx = Math.abs(data.stepDx);
            data.absStepDy = Math.abs(data.stepDy);

            data.x = touch.clientX;
            data.y = touch.clientY;
            data.localX = data.x - eventObjRect.left;
            data.localY = data.y - eventObjRect.top;

            data.dx = data.x - data.startX;
            data.dy = data.y - data.startY;
            data.absDx = Math.abs(data.dx);
            data.absDy = Math.abs(data.dy);
            data.localDx = data.localX - data.startLocalX;
            data.localDy = data.localY - data.startLocalY;
            data.absLocalDx = Math.abs(data.absLocalDx);
            data.absLocalDy = Math.abs(data.absLocalDy);

            var curTime = e.timeStamp;
            data.dragTime = curTime - data.startTime;
            data.stepTime = curTime - this._prevTime;
            this._prevTime = curTime;

            // 判断是否符合清扫行为
            this._swipeH = data.absStepDx > this._swipeDis;
            this._swipeV = data.absStepDy > this._swipeDis;

            var callback = this._options.move;
            callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data));
        },

        _endDragHandler: function(e) {
            if (e && e.type) {
                switch (e.type) {
                    case 'touchend':
                    case 'touchcancel':
                        if (e.changedTouches[0].identifier !== this._touchID) return;
                        break;
                }

                // Do something
                var data = this._data;
                if (data.stepTime < this._swipeTime) { // 确认构成清扫
                    if (this._swipeH) { // 水平清扫
                        this._swipeH = false;
                        data.swipe = true;
                        if (data.stepDx < 0) { // 手指左滑
                            data.swipeLeft = true;
                        } else if (data.stepDx > 0) { // 手指右滑
                            data.swipeRight = true;
                        }
                    }
                    if (this._swipeV) { // 垂直清扫
                        this._swipeV = false;
                        data.swipe = true;
                        if (data.stepDy < 0) { // 手指上滑
                            data.swipeTop = true;
                        } else if (data.stepDy > 0) { // 手指下滑
                            data.swipeBottom = true;
                        }
                    }
                }

                if (data.absDx > 15 || data.absDy > 15) e.preventDefault(); // 移动时防止<a>链接被点击
            }

            this._eventObj.removeEventListener(moveEvent, this._moveDragHandler);
            this._eventObj.removeEventListener(endEvent, this._endDragHandler);
            cancelEvent && this._eventObj.removeEventListener(cancelEvent, this._endDragHandler);

            var callback = this._options.end;
            callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data));

            this._touchID = -1;
        },

        _getEventObjRect: function() {
            if (this._eventObj.getBoundingClientRect) {
                return this._eventObj.getBoundingClientRect();
            } else {
                var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    left = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                    bottom = top + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
                    right = left + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

                return {
                    left: left,
                    top: top,
                    bottom: bottom,
                    right: right
                };
            }
        },

        open: function() {
            this._eventObj.addEventListener(startEvent, this._startDragHandler, { passive: false });
            return this;
        },

        close: function() {
            this._eventObj.removeEventListener(startEvent, this._startDragHandler);
            return this;
        },

        stop: function() {
            this._endDragHandler();
            return this;
        },

        remove: function() {
            this.close();
            this.stop();
            return this;
        },

        destroy: function() {
            this._removeEvent();

            // 清除所有属性
            var self = this;
            Object.getOwnPropertyNames(this).forEach(function(prop) {
                delete self[prop];
            });

            this.__proto__ = Object.prototype;
        }
    });

    function extend() {
        var options, name, src, copy, copyIsArray,
            target = arguments[0] || {},
            targetType = typeof target,
            toString = Object.prototype.toString,
            i = 1,
            length = arguments.length,
            deep = false;

        // 处理深拷贝
        if (targetType === 'boolean') {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            targetType = typeof target;
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (targetType !== 'object' && targetType !== 'function') {
            target = {};
        }

        // 如果没有合并的对象，则表示 target 为合并对象，将 target 合并给当前函数的持有者
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // 防止死循环
                    if (target === copy) {
                        continue;
                    }

                    // 深拷贝对象或者数组
                    if (deep && copy &&
                        ((copyIsArray = toString.call(copy) === '[object Array]') ||
                            (toString.call(copy) === '[object Object]'))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            src = src && (toString.call(src) === '[object Array]') ? src : [];

                        } else {
                            src = src && (toString.call(src) === '[object Object]') ? src : {};
                        }

                        target[name] = extend(deep, src, copy);

                    } else if (copy !== undefined) { // 仅忽略未定义的值
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    }

    var guid = 0;
    function proxy(func, target) {
        if (typeof target === 'string') {
            var tmp = func[target];
            target = func;
            func = tmp;
        }

        if (typeof func !== 'function') {
            return undefined;
        }

        var slice = Array.prototype.slice,
            args = slice.call(arguments, 2),
            proxy = function() {
                return func.apply(target || this, args.concat(slice.call(arguments)));
            };

        proxy.guid = func.guid = func.guid || guid++;

        return proxy;
    }

    // 获取元素（IE8及以上浏览器）
    function $(selector, context) {
        if (selector instanceof HTMLElement) {
            return [selector];
        } else if (typeof selector === 'object' && selector.length) {
            return toArray(selector);
        } else if (!selector || typeof selector !== 'string') {
            return [];
        }

        if (typeof context === 'string') {
            context = document.querySelector(context);
        }

        if (!(context instanceof HTMLElement)) {
            context = document;
        }

        return toArray(context.querySelectorAll(selector));
    }

    // 类似数组对象转数组
    function toArray(obj) {
        return Array.prototype.map.call(obj, function(n) { return n });
    }

    // 判断是否为函数
    function isFunction(func) {
        return typeof func === 'function';
    }

    return DragEvent;
}));
