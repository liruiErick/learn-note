import $ from 'utils/$';
import extend from 'utils/extend';
import isArray from 'utils/isArray';
import isString from 'utils/isString';

// 判断事件支持
const is_mobile = !!navigator.userAgent.match(/mobile/i),
    supportTouch = 'ontouchend' in document,
    supportPointer = window.navigator.pointerEnabled,
    supportMSPointer = window.navigator.msPointerEnabled;

let startEvent, moveEvent, endEvent, cancelEvent;

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
 * this 指向 MoveEvent 的实例对象
 * 包含 2 个参数 function(event, data)
 *
 * @param event {Object} 原生事件对象
 * @param data  {Object} 移动信息对象
 */
const noop = function(event, data) {};

const defaultOptions = {
    obj: null, // {DOM|String} 移动事件的绑定对象
    holder: null, // {Object} 事件回调回调的持有者，即this指向的对象。如果未指定，则默认为当前触发移动事件的目标对象
    start: noop, // {Function} 移动开始事件回调，将包含事件信息的data对象作为参数传入
    // 如果 start 返回值为 false，将会取消之后的移动和结束事件
    move: noop, // {Function} 移动中事件回调，将包含事件信息的data对象作为参数传入
    end: noop // {Function} 移动结束事件回调，将包含事件信息的data对象作为参数传入
};

export default class MoveEvent {
    /**
     * 移动事件
     * @param options {Object}     配置参数
     */
    constructor(options) {
        this._options = extend({}, defaultOptions, options);
        this._init();
    }

    _init() {
        this._eventObj = this._options.obj || document.documentElement;
        this._callbackHolder = this._options.holder;

        this._swipeDis = 5; // 判断清扫的距离
        this._swipeTime = 200; // 判断清扫的时间
        this._swipeH = false; // 是否构成水平清扫行为
        this._swipeV = false; // 是否构成垂直清扫行为
        this._prevTime = 0;
        this._touchID = -1;
        this._allowEvent = false; // 表示是否允许处理事件

        this._data = {
            rect: null, // 移动对象的矩形对象

            xStart: 0, // 相对于窗口的移动起始X坐标
            yStart: 0, // 相对于窗口的移动起始Y坐标
            xLocalStart: 0, // 相对于事件对象的移动起始X坐标
            yLocalStart: 0, // 相对于事件对象的移动起始Y坐标

            x: 0, // 相对于窗口的当前X坐标
            y: 0, // 相对于窗口的当前Y坐标
            xLocal: 0, // 相对于事件对象的当前X坐标
            yLocal: 0, // 相对于事件对象的当前Y坐标

            dx: 0, // 从移动开始到当前的X轴移动距离差
            dy: 0, // 从移动开始到当前的Y轴移动距离差
            dxAbs: 0, // 从移动开始到当前的X轴移动距离差的绝对值
            dyAbs: 0, // 从移动开始到当前的Y轴移动距离差的绝对值

            dxLocal: 0, // 从移动开始到当前相对于事件对象的X轴移动距离差
            dyLocal: 0, // 从移动开始到当前相对于事件对象的Y轴移动距离差
            dxLocalAbs: 0, // 从移动开始到当前相对于事件对象的X轴移动距离差的绝对值
            dyLocalAbs: 0, // 从移动开始到当前相对于事件对象的Y轴移动距离差的绝对值

            dxStep: 0, // 当前较上一步的X轴移动距离差
            dyStep: 0, // 当前较上一步的Y轴移动距离差
            dxStepAbs: 0, // 当前较上一步的X轴移动距离差的绝对值
            dyStepAbs: 0, // 当前较上一步的Y轴移动距离差的绝对值

            swipeLeft: false, // 是否构成向左清扫
            swipeRight: false, // 是否构成向右清扫
            swipeTop: false, // 是否构成向上清扫
            swipeBottom: false, // 是否构成向下清扫
            swipe: false, // 是否构成清扫

            startTime: 0, // 开始移动时的时间
            dragTime: 0, // 当前较开始移动时的时间差
            stepTime: 0 // 当前较上一步的时间差
        };

        this._eventObj = $(this._eventObj)[0];

        this._addEvent();
        this._createApi(
            'open',
            'close',
            'stop',
            'remove'
        );
    }

    _addEvent() {
        this._eventObj.addEventListener(startEvent, this._startEventHandle, { passive: false });
        document.addEventListener(moveEvent, this._moveEventHandle, { passive: false });
        document.addEventListener(endEvent, this._endEventHandle, { passive: false });
        cancelEvent && document.addEventListener(cancelEvent, this._endEventHandle, { passive: false });
    }

    _removeEvent() {
        this._eventObj.removeEventListener(startEvent, this._startEventHandle);
        document.removeEventListener(moveEvent, this._moveEventHandle);
        document.removeEventListener(endEvent, this._endEventHandle);
        cancelEvent && document.removeEventListener(cancelEvent, this._endEventHandle);
    }

    _startEventHandle = (e) => {
        let touch;

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
        const data = this._data,
            eventObjRect = data.rect = this._getEventObjRect();

        data.xStart = data.x = touch.clientX;
        data.yStart = data.y = touch.clientY;
        data.xLocalStart = data.xLocal = data.x - eventObjRect.left;
        data.yLocalStart = data.yLocal = data.y - eventObjRect.top;

        data.dx = 0;
        data.dy = 0;
        data.dxAbs = 0;
        data.dyAbs = 0;

        data.dxLocal = 0;
        data.dyLocal = 0;
        data.dxLocalAbs = 0;
        data.dyLocalAbs = 0;

        data.dxStep = 0;
        data.dyStep = 0;
        data.dxStepAbs = 0;
        data.dyStepAbs = 0;

        data.swipeLeft = false;
        data.swipeRight = false;
        data.swipeTop = false;
        data.swipeBottom = false;
        data.swipe = false;

        this._prevTime = data.startTime = data.dragTime = e.timeStamp;
        data.stepTime = 0;

        const callback = this._options.start;
        if (callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data)) === false) {
            this._touchID = -1;
        }

        this._allowEvent = true;
    };

    _moveEventHandle = (e) => {
        if (!this._allowEvent) return;

        let touch;

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
        const data = this._data,
            eventObjRect = data.rect = this._getEventObjRect();

        data.dxStep = touch.clientX - data.x;
        data.dyStep = touch.clientY - data.y;
        data.dxStepAbs = Math.abs(data.dxStep);
        data.dyStepAbs = Math.abs(data.dyStep);

        data.x = touch.clientX;
        data.y = touch.clientY;
        data.xLocal = data.x - eventObjRect.left;
        data.yLocal = data.y - eventObjRect.top;

        data.dx = data.x - data.xStart;
        data.dy = data.y - data.yStart;
        data.dxAbs = Math.abs(data.dx);
        data.dyAbs = Math.abs(data.dy);

        data.dxLocal = data.xLocal - data.xLocalStart;
        data.dyLocal = data.yLocal - data.yLocalStart;
        data.dxLocalAbs = Math.abs(data.dxLocalAbs);
        data.dyLocalAbs = Math.abs(data.dyLocalAbs);

        const curTime = e.timeStamp;
        data.dragTime = curTime - data.startTime;
        data.stepTime = curTime - this._prevTime;
        this._prevTime = curTime;

        // 判断是否符合清扫行为
        this._swipeH = data.dxStepAbs > this._swipeDis;
        this._swipeV = data.dyStepAbs > this._swipeDis;

        const callback = this._options.move;
        callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data));
    };

    _endEventHandle = (e) => {
        if (!this._allowEvent) return;

        const data = this._data;

        if (e && e.type) {
            switch (e.type) {
                case 'touchend':
                case 'touchcancel':
                    if (e.changedTouches[0].identifier !== this._touchID) return;
                    break;
            }

            // Do something
            if (data.stepTime < this._swipeTime) { // 确认构成清扫
                if (this._swipeH) { // 水平清扫
                    this._swipeH = false;
                    data.swipe = true;
                    if (data.dxStep < 0) { // 手指左滑
                        data.swipeLeft = true;
                    } else if (data.dxStep > 0) { // 手指右滑
                        data.swipeRight = true;
                    }
                }
                if (this._swipeV) { // 垂直清扫
                    this._swipeV = false;
                    data.swipe = true;
                    if (data.dyStep < 0) { // 手指上滑
                        data.swipeTop = true;
                    } else if (data.dyStep > 0) { // 手指下滑
                        data.swipeBottom = true;
                    }
                }
            }

            if (data.dxAbs > 15 || data.dyAbs > 15) e.preventDefault(); // 移动时防止<a>链接被点击
        }

        const callback = this._options.end;
        callback && callback.call(this._callbackHolder || this._eventObj, e, extend({}, data));

        this._touchID = -1;
        this._allowEvent = false;
    };

    _getEventObjRect() {
        if (this._eventObj.getBoundingClientRect) {
            return this._eventObj.getBoundingClientRect();
        } else {
            const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                left = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                bottom = top + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
                right = left + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

            return { left, top, bottom, right };
        }
    }

    _open() {
        this._addEvent();
    }

    _close() {
        this._removeEvent();
    }

    _stop() {
        this._endEventHandle();
    }

    _remove() {
        this._close();
        this._stop();
    }

    _createApi(...args) {
        Object.values(args).forEach(arg => {
            let privateName, publicName;

            if (isString(arg)) {
                privateName = publicName = arg;
            } else if (isArray(arg)) {
                privateName = arg[0];
                publicName = arg[1];
            }

            this[publicName] = (...args) => {
                this['_' + privateName].apply(this, args);
                return this;
            };
        });
    }

    destroy = () => {
        this._removeEvent();

        // 清除所有属性
        Object.getOwnPropertyNames(this).forEach(prop => {
            delete self[prop];
        });

        this.__proto__ = Object.prototype;
    };
};

