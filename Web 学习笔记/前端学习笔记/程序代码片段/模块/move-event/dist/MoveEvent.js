/*!
 * MoveEvent
 * @version v1.0.0
 * @author baijunjie
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MoveEvent"] = factory();
	else
		root["MoveEvent"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../utils/toArray.js
// 类似数组对象转数组
/* harmony default export */ var toArray = (function(obj) {
    return Array.prototype.map.call(obj, function(n) { return n });
});
// CONCATENATED MODULE: ../utils/$.js


// 获取元素（IE8及以上浏览器）
/* harmony default export */ var $ = __webpack_exports__["default"] = (function(selector, context) {
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
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 判断是否为字符串
/* harmony default export */ __webpack_exports__["default"] = (function(str) {
    return typeof str === 'string';
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 判断对象是否为数组
/* harmony default export */ __webpack_exports__["default"] = (function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
    let options, name, src, copy, copyIsArray,
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
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _$ = __webpack_require__(0);

var _$2 = _interopRequireDefault(_$);

var _extend = __webpack_require__(3);

var _extend2 = _interopRequireDefault(_extend);

var _isArray = __webpack_require__(2);

var _isArray2 = _interopRequireDefault(_isArray);

var _isString = __webpack_require__(1);

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 判断事件支持
var is_mobile = !!navigator.userAgent.match(/mobile/i),
    supportTouch = 'ontouchend' in document,
    supportPointer = window.navigator.pointerEnabled,
    supportMSPointer = window.navigator.msPointerEnabled;

var startEvent = void 0,
    moveEvent = void 0,
    endEvent = void 0,
    cancelEvent = void 0;

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
var noop = function noop(event, data) {};

var defaultOptions = {
    obj: null, // {DOM|String} 移动事件的绑定对象
    holder: null, // {Object} 事件回调回调的持有者，即this指向的对象。如果未指定，则默认为当前触发移动事件的目标对象
    start: noop, // {Function} 移动开始事件回调，将包含事件信息的data对象作为参数传入
    // 如果 start 返回值为 false，将会取消之后的移动和结束事件
    move: noop, // {Function} 移动中事件回调，将包含事件信息的data对象作为参数传入
    end: noop // {Function} 移动结束事件回调，将包含事件信息的data对象作为参数传入
};

var MoveEvent = function () {
    /**
     * 移动事件
     * @param options {Object}     配置参数
     */
    function MoveEvent(options) {
        var _this = this;

        _classCallCheck(this, MoveEvent);

        this._startEventHandle = function (e) {
            var touch = void 0;

            switch (e.type) {
                case 'mousedown':
                case 'pointerdown':
                case 'MSPointerDown':
                    touch = e;
                    break;
                case 'touchstart':
                    if (_this._touchID >= 0) return;
                    touch = e.changedTouches[0];
                    _this._touchID = touch.identifier;
                    break;
            }

            // Do something
            var data = _this._data,
                eventObjRect = data.rect = _this._getEventObjRect();

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

            _this._prevTime = data.startTime = data.dragTime = e.timeStamp;
            data.stepTime = 0;

            var callback = _this._options.start;
            if (callback && callback.call(_this._callbackHolder || _this._eventObj, e, (0, _extend2.default)({}, data)) === false) {
                _this._touchID = -1;
            }

            _this._allowEvent = true;
        };

        this._moveEventHandle = function (e) {
            if (!_this._allowEvent) return;

            var touch = void 0;

            switch (e.type) {
                case 'mousemove':
                case 'pointermove':
                case 'MSPointerMove':
                    touch = e;
                    break;
                case 'touchmove':
                    touch = e.changedTouches[0];
                    if (touch.identifier !== _this._touchID) return;
                    break;
            }

            // Do something
            var data = _this._data,
                eventObjRect = data.rect = _this._getEventObjRect();

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

            var curTime = e.timeStamp;
            data.dragTime = curTime - data.startTime;
            data.stepTime = curTime - _this._prevTime;
            _this._prevTime = curTime;

            // 判断是否符合清扫行为
            _this._swipeH = data.dxStepAbs > _this._swipeDis;
            _this._swipeV = data.dyStepAbs > _this._swipeDis;

            var callback = _this._options.move;
            callback && callback.call(_this._callbackHolder || _this._eventObj, e, (0, _extend2.default)({}, data));
        };

        this._endEventHandle = function (e) {
            if (!_this._allowEvent) return;

            var data = _this._data;

            if (e && e.type) {
                switch (e.type) {
                    case 'touchend':
                    case 'touchcancel':
                        if (e.changedTouches[0].identifier !== _this._touchID) return;
                        break;
                }

                // Do something
                if (data.stepTime < _this._swipeTime) {
                    // 确认构成清扫
                    if (_this._swipeH) {
                        // 水平清扫
                        _this._swipeH = false;
                        data.swipe = true;
                        if (data.dxStep < 0) {
                            // 手指左滑
                            data.swipeLeft = true;
                        } else if (data.dxStep > 0) {
                            // 手指右滑
                            data.swipeRight = true;
                        }
                    }
                    if (_this._swipeV) {
                        // 垂直清扫
                        _this._swipeV = false;
                        data.swipe = true;
                        if (data.dyStep < 0) {
                            // 手指上滑
                            data.swipeTop = true;
                        } else if (data.dyStep > 0) {
                            // 手指下滑
                            data.swipeBottom = true;
                        }
                    }
                }

                if (data.dxAbs > 15 || data.dyAbs > 15) e.preventDefault(); // 移动时防止<a>链接被点击
            }

            var callback = _this._options.end;
            callback && callback.call(_this._callbackHolder || _this._eventObj, e, (0, _extend2.default)({}, data));

            _this._touchID = -1;
            _this._allowEvent = false;
        };

        this.destroy = function () {
            _this._removeEvent();

            // 清除所有属性
            Object.getOwnPropertyNames(_this).forEach(function (prop) {
                delete self[prop];
            });

            _this.__proto__ = Object.prototype;
        };

        this._options = (0, _extend2.default)({}, defaultOptions, options);
        this._init();
    }

    _createClass(MoveEvent, [{
        key: '_init',
        value: function _init() {
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

            this._eventObj = (0, _$2.default)(this._eventObj)[0];

            this._addEvent();
            this._createApi('open', 'close', 'stop', 'remove');
        }
    }, {
        key: '_addEvent',
        value: function _addEvent() {
            this._eventObj.addEventListener(startEvent, this._startEventHandle, { passive: false });
            document.addEventListener(moveEvent, this._moveEventHandle, { passive: false });
            document.addEventListener(endEvent, this._endEventHandle, { passive: false });
            cancelEvent && document.addEventListener(cancelEvent, this._endEventHandle, { passive: false });
        }
    }, {
        key: '_removeEvent',
        value: function _removeEvent() {
            this._eventObj.removeEventListener(startEvent, this._startEventHandle);
            document.removeEventListener(moveEvent, this._moveEventHandle);
            document.removeEventListener(endEvent, this._endEventHandle);
            cancelEvent && document.removeEventListener(cancelEvent, this._endEventHandle);
        }
    }, {
        key: '_getEventObjRect',
        value: function _getEventObjRect() {
            if (this._eventObj.getBoundingClientRect) {
                return this._eventObj.getBoundingClientRect();
            } else {
                var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    left = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                    bottom = top + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
                    right = left + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);

                return { left: left, top: top, bottom: bottom, right: right };
            }
        }
    }, {
        key: '_open',
        value: function _open() {
            this._addEvent();
        }
    }, {
        key: '_close',
        value: function _close() {
            this._removeEvent();
        }
    }, {
        key: '_stop',
        value: function _stop() {
            this._endEventHandle();
        }
    }, {
        key: '_remove',
        value: function _remove() {
            this._close();
            this._stop();
        }
    }, {
        key: '_createApi',
        value: function _createApi() {
            var _this2 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            Object.values(args).forEach(function (arg) {
                var privateName = void 0,
                    publicName = void 0;

                if ((0, _isString2.default)(arg)) {
                    privateName = publicName = arg;
                } else if ((0, _isArray2.default)(arg)) {
                    privateName = arg[0];
                    publicName = arg[1];
                }

                _this2[publicName] = function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    _this2['_' + privateName].apply(_this2, args);
                    return _this2;
                };
            });
        }
    }]);

    return MoveEvent;
}();

exports.default = MoveEvent;
;
module.exports = exports['default'];

/***/ })
/******/ ]);
});