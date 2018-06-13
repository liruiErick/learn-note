/*!
 * Slider
 * @version v1.0.0
 * @author baijunjie
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("move-event"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["move-event", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory(require("move-event"), require("jquery"));
	else
		root["Slider"] = factory(root["MoveEvent"], root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    getRawTag = __webpack_require__(9),
    objectToString = __webpack_require__(8);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 让隐藏元素正确执行程序（IE9及以上浏览器）
 * @param elems  {DOM|Array} DOM元素或者DOM元素组成的数组
 * @param func   {Function}  需要执行的程序函数
 * @param target {Object}    执行程序时函数中 this 的指向
 */
const defaultDisplayMap = {};
/* harmony default export */ __webpack_exports__["default"] = (function(elems, func, target) {
    if (typeof elems !== 'object') {
        elems = [];
    }

    if (typeof elems.length === 'undefined') {
        elems = [elems];
    }

    const hideElems = [],
        hideElemsDisplay = [];

    for (let i = 0, elem; elem = elems[i++];) {

        while (elem instanceof HTMLElement) {

            const nodeName = elem.nodeName;

            if (!elem.getClientRects().length) {
                hideElems.push(elem);
                hideElemsDisplay.push(elem.style.display);

                let display = defaultDisplayMap[nodeName];
                if (!display) {
                    const temp = document.createElement(nodeName);
                    document.body.appendChild(temp);
                    display = window.getComputedStyle(temp).display;
                    temp.parentNode.removeChild(temp);

                    if (display === 'none') display = 'block';
                    defaultDisplayMap[nodeName] = display;
                }

                elem.style.display = display;
            }

            if (nodeName === 'BODY') break;
            elem = elem.parentNode;
        }
    }

    if (typeof(func) === 'function') func.call(target || this);

    let l = hideElems.length;
    while (l--) {
        hideElems.pop().style.display = hideElemsDisplay.pop();
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(11);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(3),
    isArray = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isString2 = __webpack_require__(13);

var _isString3 = _interopRequireDefault(_isString2);

var _isNumber2 = __webpack_require__(7);

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isArray2 = __webpack_require__(1);

var _isArray3 = _interopRequireDefault(_isArray2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DOM 结构如下
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * <div class="slider">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   <ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     <li></li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *     <li></li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   </ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _jquery = __webpack_require__(6);

var _jquery2 = _interopRequireDefault(_jquery);

var _moveEvent = __webpack_require__(5);

var _moveEvent2 = _interopRequireDefault(_moveEvent);

var _hideAction = __webpack_require__(4);

var _hideAction2 = _interopRequireDefault(_hideAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $win = (0, _jquery2.default)(window);

/**
 * 默认回调
 * this 指向 Slider 的实例对象
 *
 * @param data  {Object} 焦点元素的信息对象，包含以下属性
 *                       offset 焦点元素的左上角 margin 外边缘到容器左上角 padding 内边缘的距离。
 *                       index  焦点元素的索引
 *                       dom    焦点元素的 DOM 对象
 */
var noop = function noop(data) {};

var defaultOptions = {
    wrap: '>:first', // 滑动层元素的选择器
    item: '>', // 相对于滑动层，其子元素的选择器

    prevBtn: null, // 前一页按钮
    nextBtn: null, // 后一页按钮
    btnDisableClass: 'disabled', // 前后按钮禁用类名

    loop: false, // 是否无线循环。如果为 true，将具备卷屏动画的能力
    frameRate: 40, // 卷屏动画的帧频率

    direction: 'x', // 排列方向，默认为水平方向。'y'表示垂直方向
    align: 'start', // 子元素的对齐方式，默认对齐起始位置。'center'表示对齐中线，'end'表示对齐结束位置
    alignOffset: 0, // 基于目前对齐方式的对齐点偏移量
    autoAdsorb: false, // 是否开启自动吸附，如果为 true，则每次拖动结束后，距离对起点最近的子元素会自动吸附到对齐点
    nextRatio: .5, // 是否划过下一个的比较系数

    activeClass: 'active', // 当前焦点的焦点类名
    initIndex: -1, // 初始化时的索引。默认为 -1，表示将根据对齐方式来确定初始化索引
    duration: 400, // 拖拽结束后，滑动动画的持续时间

    onClick: noop, // 子元素单击后的回调函数
    onSlide: noop, // 子元素定位滑动开始前的回调函数
    onMoveEnd: noop // 移动结束后的回调函数
};

var Slider = function () {
    function Slider(container, options) {
        var _this = this;

        _classCallCheck(this, Slider);

        this._resizeHandle = function () {
            var winWidth = $win.width();
            if (_this._winWidth !== winWidth) {
                _this._winWidth = winWidth;
                _this._resize();
            }
        };

        this._resize = function () {
            if (!_jquery2.default.contains(document, _this._$container[0])) return; // 如果容器被移出文档，则不向下执行

            _this._wrapStop();

            var opt = _this._options;

            _this._$realItem.detach();
            _this._$wrap.empty().append(_this._$realItem);
            _this._$item = _this._$realItem;

            (0, _hideAction2.default)(_this._$wrap, function () {
                var _this2 = this;

                var sizeApiName = this._sizeApiName.substr(0, 1).toUpperCase() + this._sizeApiName.substr(1);
                this._containerSize = this._$container['inner' + sizeApiName]();

                // 根据对齐方向，计算容器 padding 内边缘距离对齐点的偏移量
                this._alignOffset = this._containerSize * this._posRatio + this._options.alignOffset;

                this._itemPos = this._realItemPos = []; // 每个子元素相对于包裹层（滑动层）的位置数组
                this._itemSize = this._realItemSize = []; // 每个子元素的平均宽度或者每个子元素的宽度数组

                var wrapStartPos = this._getStartPos(this._$wrap);
                this._$realItem.each(function (i, item) {
                    var $item = (0, _jquery2.default)(item);
                    var itemStartPos = _this2._getStartPos($item);
                    // 这里使用负值
                    // 表示每个子元素左上角 margin 外边缘与容器左上角 padding 内边缘对齐时，包裹层（滑动层）的位置
                    // 也相当于保存每个子元素距离容器左边缘的位置
                    _this2._realItemPos.push(itemStartPos - wrapStartPos);
                    _this2._realItemSize.push($item['outer' + sizeApiName](true));
                });
            }, _this);

            var before = _this._realItemPos[0];
            var after = _this._realItemPos[_this._realMaxIndex] + _this._realItemSize[_this._realMaxIndex];

            _this._itemTotalSize = _this._realItemTotalSize = after - before;
            _this._maxPos = -before;

            if (opt.loop) {
                // 为了兼容翻页效果，克隆后的大小必须大于三个容器大小
                _this._clone(_this._containerSize * 2 + _this._realItemTotalSize);
                _this._itemCount = _this._$item.length;
                _this._maxIndex = _this._itemCount - 1;
                _this._minPos = _this._containerSize - (_this._itemPos[_this._maxIndex] + _this._itemSize[_this._maxIndex]);

                _this._loopTotalTime = opt.frameRate * (_this._maxPos - _this._minPos); // 完成一次卷屏需要的总毫秒数
            } else {
                _this._itemCount = _this._realItemCount;
                _this._maxIndex = _this._realMaxIndex;
                _this._minPos = _this._containerSize - after;

                if (_this._posRatio === 0) {
                    _this._minPos = Math.min(_this._minPos, _this._maxPos);
                } else if (_this._posRatio === 1) {
                    _this._maxPos = Math.max(_this._minPos, _this._maxPos);
                } else if (_this._minPos > _this._maxPos) {
                    _this._minPos = _this._maxPos = (_this._minPos - _this._maxPos) * .5;
                }
            }

            _this._inited = true;
            _this._slide(_this._calcPos(_this._getValidIndex(_this._curIndex, true)), 0);
        };

        this._startHandle = function (e, data) {
            _this._linkDisabled = false;
            _this._moveStartPos = _this._directionY ? data.y : data.x;
            _this._$wrap.css('cursor', '-webkit-grabbing');
        };

        this._moveHandle = function (e, data) {
            var directionY = _this._directionY,
                posProp = directionY ? 'y' : 'x';

            if (directionY ? !_this._moveVertical : !_this._moveHorizontal) {
                if (directionY ? _this._moveVertical = data.dxStepAbs <= data.dyStepAbs : _this._moveHorizontal = data.dxStepAbs >= data.dyStepAbs) {
                    _this._wrapStop();
                    _this._moveWrapStartPos = parseInt(_this._$wrap.css(_this._posProp));
                    // 移动时防止<a>链接被点击到
                    _this._linkDisabled = true;
                } else {
                    // 重置起始点
                    _this._moveStartPos = data[posProp];
                }
            }

            if (directionY ? !_this._moveVertical : !_this._moveHorizontal) return;

            e.preventDefault();
            _this._moveDistance = data[posProp] - _this._moveStartPos;
            _this._moveTo(_this._getValidPos(_this._moveWrapStartPos + _this._moveDistance));
        };

        this._endHandle = function (e, data) {
            var opt = _this._options,
                directionY = _this._directionY;

            _this._$wrap.css('cursor', '-webkit-grab');

            if (directionY ? !_this._moveVertical : !_this._moveHorizontal) return;
            _this._moveVertical = false;
            _this._moveHorizontal = false;

            var swipePrev = directionY ? data.swipeBottom : data.swipeRight;
            var swipeNext = directionY ? data.swipeTop : data.swipeLeft;

            if (swipePrev || swipeNext) {
                // 判断为轻扫动作
                if (swipePrev) _this._prev();else if (swipeNext) _this._next();
            } else {
                // 判断为一般拖动结束
                var moveDirection = _this._moveDistance > 0;
                var curIndex = _this._calcIndex(_this._curPos, moveDirection);

                if (opt.autoAdsorb) {
                    _this._goto(_this._calcAdsorb(curIndex, _this._curPos, moveDirection));
                } else {
                    _this._curIndex = curIndex;
                    _this._slide(_this._curPos);
                }
            }
        };

        this._clickHandle = function (e) {
            if (_this._linkDisabled) return e.preventDefault();

            var index = _this._$item.index(e.currentTarget);
            _this._setActive(index);
            _this._options.onClick.call(_this, {
                index: _this._getValidIndex(index, true),
                dom: e.currentTarget
            });
        };

        this._prev = function () {
            if (_this._gotoPrev) return;
            _this._gotoPrev = true;
            _this._gotoNext = false;

            _this._wrapStop();

            var opt = _this._options,
                curPos = _this._curPos,
                itemPos = _this._itemPos,
                itemSize = _this._itemSize,
                posRatio = _this._posRatio,
                containerSize = _this._containerSize;

            var referencePos = -curPos,
                // 容器左边缘
            prevPos = void 0,
                pos = void 0,
                size = void 0,
                index = void 0;

            // 前一页中最后一个元素为当前页中第一个已经显示超过一半的子元素
            // 这里首先找出参考位置右侧的第一个显示超过一半的子元素索引
            for (var i = 0; i <= _this._maxIndex; i++) {
                pos = itemPos[i];
                size = itemSize[i];

                // 左边缘或者中心超过参考位置
                if (pos > referencePos || pos + size * .5 > referencePos) {
                    index = i;
                    prevPos = -(pos + size) + containerSize;
                    // 根据该索引对应子元素的位置以及对齐方式重新计算参考位置
                    referencePos = pos + size - containerSize * (1 - posRatio);
                    break;
                }
            }

            if (opt.loop && prevPos > _this._maxPos) {
                // 前一页位置如果大于最大位置，说明回退的位置超出了范围
                referencePos -= _this._adjustByTargetPos(prevPos);
                index = _this._maxIndex;
            }

            // 根据对齐方式找出新参考位置右侧的第一个元素
            for (var _i = 0; _i <= index; _i++) {
                pos = itemPos[_i];
                size = itemSize[_i];

                if (pos + size * posRatio >= referencePos) {
                    index = _i;
                    break;
                }
            }

            if (index === _this._curIndex) index--;

            if (!opt.loop) index = _this._limitIndex(index);

            _this._goto(index, null, function () {
                return _this._gotoPrev = false;
            });
        };

        this._next = function () {
            if (_this._gotoNext) return;
            _this._gotoNext = true;
            _this._gotoPrev = false;

            _this._wrapStop();

            var opt = _this._options,
                curPos = _this._curPos,
                itemPos = _this._itemPos,
                itemSize = _this._itemSize,
                posRatio = _this._posRatio,
                containerSize = _this._containerSize;

            var referencePos = containerSize - curPos,
                // 容器右边缘
            nextPos = void 0,
                pos = void 0,
                size = void 0,
                index = void 0;

            // 后一页中第一个元素为当前页中最后一个已经显示超过一半的子元素
            // 找出参考位置左侧的第一个显示超过一半的子元素索引
            for (var i = _this._maxIndex; i >= 0; i--) {
                pos = itemPos[i];
                size = itemSize[i];

                if (pos + size < referencePos || pos + size * .5 < referencePos) {
                    index = i;
                    // 获取下一页的位置
                    nextPos = -pos;
                    // 根据该索引对应子元素的位置以及对齐方式重新计算参考位置
                    referencePos = pos + containerSize * posRatio;
                    break;
                }
            }

            if (_this._options.loop && nextPos < _this._minPos) {
                // 下一页位置如果小于最小位置，说明前进的位置超出了范围
                referencePos -= _this._adjustByTargetPos(nextPos);
                index = 0;
            }

            // 根据对齐方式找出新参考位置左侧的第一个元素
            for (var _i2 = _this._maxIndex; _i2 >= index; _i2--) {
                pos = itemPos[_i2];
                size = itemSize[_i2];

                if (pos + size * posRatio <= referencePos) {
                    index = _i2;
                    break;
                }
            }

            if (index === _this._curIndex) index++;

            if (!opt.loop) index = _this._limitIndex(index);

            _this._goto(index, null, function () {
                return _this._gotoNext = false;
            });
        };

        this._createApi = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            Object.values(args).forEach(function (arg) {
                var privateName = void 0,
                    publicName = void 0;

                if ((0, _isString3.default)(arg)) {
                    privateName = publicName = arg;
                } else if ((0, _isArray3.default)(arg)) {
                    privateName = arg[0];
                    publicName = arg[1];
                }

                _this[publicName] = function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    _this['_' + privateName].apply(_this, args);
                    return _this;
                };
            });
        };

        this.destroy = function () {
            _this._$wrap.css({
                'display': '',
                'cursor': ''
            });

            _this._removeEvent();

            // 清除所有属性
            Object.getOwnPropertyNames(_this).forEach(function (prop) {
                delete self[prop];
            });

            _this.__proto__ = Object.prototype;
        };

        this._$container = (0, _jquery2.default)(container);

        if (!this._$container.length) {
            throw new Error('No container were found！');
        }

        this._options = _jquery2.default.extend({}, defaultOptions, options);
        this._init();
    }

    _createClass(Slider, [{
        key: '_init',
        value: function _init() {
            var opt = this._options;

            this._$wrap = this._$container.find(opt.wrap).css({
                'display': 'inline-block',
                'cursor': '-webkit-grab'
            });

            if (!this._$wrap.length) {
                throw new Error('No child elements inside the slider were found！');
            }

            this._$prevBtn = (0, _jquery2.default)(opt.prevBtn);
            this._$nextBtn = (0, _jquery2.default)(opt.nextBtn);
            if (!this._$prevBtn.length) this._$prevBtn = null;
            if (!this._$nextBtn.length) this._$nextBtn = null;

            this._posRatio = opt.align === 'end' ? 1 : opt.align === 'center' ? .5 : 0;
            this._directionY = opt.direction === 'y';
            this._sizeApiName = this._directionY ? 'height' : 'width';
            this._startPropName = this._directionY ? 'top' : 'left';

            // 获得位移属性
            if (_jquery2.default.cssHooks.x) {
                this._posProp = this._directionY ? 'y' : 'x';

                if (_jquery2.default.support.transform3d) {
                    this._$wrap.css('z', 0);
                }
            } else {
                this._posProp = this._directionY ? 'top' : 'left';

                if (this._$wrap.css('position') === 'static') {
                    this._$wrap.css('position', 'relative');
                }
            }

            this._inited = false; // 是否初始化完成
            this._isRun = false; // 是否开启了卷屏滚动
            this._isRoll = false; // 是否正在卷屏滚动
            this._gotoPrev = true; // 是否正在跳转前一页
            this._gotoNext = false; // 是否正在跳转下一页
            this._linkDisabled = false; // 是否禁用链接跳转
            this._curPos = 0; // 当前位置
            this._winWidth = $win.width();

            this._addEvent();
            this._update(opt.initIndex);

            this._createApi('update', 'prev', 'next', 'goto', 'setActive', 'run', 'stop');
        }
    }, {
        key: '_addEvent',
        value: function _addEvent() {
            var opt = this._options;

            $win.on('resize', this._resizeHandle);
            this._$wrap.on('click', opt.item, this._clickHandle);
            if (this._$prevBtn) this._$prevBtn.on('click', this._prev);
            if (this._$nextBtn) this._$nextBtn.on('click', this._next);

            // 拖拽事件
            this._moveWrapStartPos = 0;
            this._moveHorizontal = false;
            this._moveVertical = false;
            this._moveStartPos = 0;
            this._moveDistance = 0;

            this._moveEvent = new _moveEvent2.default({
                holder: this,
                obj: this._$wrap,
                start: this._startHandle,
                move: this._moveHandle,
                end: this._endHandle
            });
        }
    }, {
        key: '_removeEvent',
        value: function _removeEvent() {
            var opt = this._options;

            $win.off('resize', this._resizeHandle);
            this._$wrap.off('click', opt.item, this._clickHandle);
            if (this._$prevBtn) this._$prevBtn.off('click', this._prev);
            if (this._$nextBtn) this._$nextBtn.off('click', this._next);

            this._moveEvent && this._moveEvent.destroy();
            this._moveEvent = null;
        }
    }, {
        key: '_update',
        value: function _update(index) {
            var opt = this._options;

            this._$realItem = this._$wrap.find(opt.item);
            this._realItemCount = this._$realItem.length;
            this._realMaxIndex = this._realItemCount - 1;
            this._curIndex = this._isValidIndex(index, true) ? index : this._getDefaultAlignIndex();

            this._resize();
        }
    }, {
        key: '_clone',


        // 迭代克隆，直到总达到能够达到无缝循环的大小
        value: function _clone(targetSize, cloneCount) {
            var _this3 = this;

            cloneCount = cloneCount || 0;
            if (this._itemTotalSize < targetSize) {
                this._$item = this._$item.add(this._$realItem.clone().appendTo(this._$wrap));
                this._itemTotalSize += this._realItemTotalSize;
                cloneCount++;
                this._itemPos = this._itemPos.concat(this._realItemPos.map(function (pos) {
                    return pos + cloneCount * _this3._realItemTotalSize;
                }));
                this._itemSize = this._itemSize.concat(this._realItemSize);
                this._clone(targetSize, cloneCount);
            }
        }

        // 跳转到前一页


        // 跳转到下一页

    }, {
        key: '_moveTo',
        value: function _moveTo(pos, duration, callback) {
            var _this4 = this;

            if ((0, _isNumber3.default)(duration) && duration > 0) {
                this._$wrap.animate(_defineProperty({}, this._posProp, pos), duration, function () {
                    _this4._curPos = pos;
                    callback && callback.call(_this4);
                });
            } else {
                this._$wrap.css(_defineProperty({}, this._posProp, pos));
                this._curPos = pos;
                callback && callback.call(this);
            }
        }
    }, {
        key: '_goto',
        value: function _goto(index, duration, callback) {
            this._curIndex = this._getValidIndex(index);
            this._slide(this._calcPos(this._curIndex), duration, callback);
        }
    }, {
        key: '_slide',
        value: function _slide(pos, duration, callback) {
            var _this5 = this;

            this._wrapStop();

            var opt = this._options;

            var targetPos = void 0;

            if (opt.loop) {
                // 在循环模式下，如果目标位置与原始目标位置不同，则需要做位置补差
                targetPos = pos + this._adjustByTargetPos(pos);
            } else {
                targetPos = this._limitPos(pos);
            }

            var realIndex = this._getValidIndex(this._curIndex, true),
                realItem = this._$realItem[realIndex],
                itemOffset = this._itemPos[this._curIndex] + targetPos;

            opt.onSlide.call(this, {
                offset: itemOffset,
                index: realIndex,
                dom: realItem
            });

            this._moveTo(targetPos, this._curPos === targetPos ? 0 : (0, _isNumber3.default)(duration) ? duration : opt.duration, function () {
                callback && callback.call(_this5);
                _this5._updateBtn();

                opt.onMoveEnd.call(_this5, {
                    offset: itemOffset,
                    index: realIndex,
                    dom: realItem
                });

                _this5._isRun && _this5._rollStart();
            });
        }

        // 刷新前后按钮的隐藏与显示

    }, {
        key: '_updateBtn',
        value: function _updateBtn() {
            if (this._options.loop) return;

            var btnDisableClass = this._options.btnDisableClass;

            if (this._minPos < this._maxPos) {
                if (this._$prevBtn) {
                    if (this._curPos >= this._maxPos) {
                        this._$prevBtn.addClass(btnDisableClass);
                    } else {
                        this._$prevBtn.removeClass(btnDisableClass);
                    }
                }

                if (this._$nextBtn) {
                    if (this._curPos <= this._minPos) {
                        this._$nextBtn.addClass(btnDisableClass);
                    } else {
                        this._$nextBtn.removeClass(btnDisableClass);
                    }
                }
            } else {
                // 如果没有可滑动的距离
                if (this._$prevBtn) this._$prevBtn.addClass(btnDisableClass);
                if (this._$nextBtn) this._$nextBtn.addClass(btnDisableClass);
            }
        }

        // 设置指定索引对应的子元素为焦点

    }, {
        key: '_setActive',
        value: function _setActive(index) {
            var _this6 = this;

            var activeClass = this._options.activeClass;
            this._$item.removeClass(activeClass);

            if (index >= 0) {
                index = this._getValidIndex(index, true);
                this._$item.each(function (i, item) {
                    if (i % _this6._realItemCount === index) {
                        (0, _jquery2.default)(item).addClass(activeClass);
                    }
                });
            }
        }

        // 获取元素左上角 margin 外边缘相对于窗口的位置

    }, {
        key: '_getStartPos',
        value: function _getStartPos($elem) {
            return $elem[0].getBoundingClientRect()[this._startPropName] - parseFloat($elem.css('margin-' + this._startPropName));
        }

        // 根据索引计算包裹层（滑动层）的位置

    }, {
        key: '_calcPos',
        value: function _calcPos(index) {
            return this._alignOffset - (this._itemPos[index] + this._itemSize[index] * this._posRatio);
        }

        // 根据包裹层（滑动层）位置计算最接近对齐点的索引
        // direction 为正数表示向结束位置移动，为负数表示向起始位置移动

    }, {
        key: '_calcIndex',
        value: function _calcIndex(curPos, direction) {
            var itemPos = this._itemPos,
                itemSize = this._itemSize;
            var curPosOffset = this._alignOffset - curPos; // 计算包裹层（滑动层）左上角到对齐点的偏移量
            var before = void 0,
                prevAfter = void 0,
                halfInterval = void 0;

            // 遍历所有子元素的位置，找出最接近对齐点子元素
            for (var i = 0, l = this._itemCount; i < l; i++) {
                before = itemPos[i];

                if (before >= curPosOffset) {
                    if (i === 0) {
                        return 0;
                    } else {
                        prevAfter = itemPos[i - 1] + itemSize[i - 1];
                        halfInterval = prevAfter + (before - prevAfter) * .5;

                        if (halfInterval > curPosOffset) {
                            return i - 1;
                        } else if (halfInterval < curPosOffset) {
                            return i;
                        } else {
                            return direction ? i : i - 1;
                        }
                    }
                }
            }

            return this._maxIndex;
        }

        // 根据当前索引判断自动吸附到对齐点的索引
        // direction 为正数表示向结束位置移动，为负数表示向起始位置移动

    }, {
        key: '_calcAdsorb',
        value: function _calcAdsorb(curIndex, curPos, direction) {
            var curPosOffset = this._alignOffset - curPos; // 计算包裹层（滑动层）左上角到对齐点的偏移量
            var nextRatio = direction ? 1 - this._options.nextRatio : this._options.nextRatio;
            var referencePos = this._itemPos[curIndex] + this._itemSize[curIndex] * nextRatio;
            var posRatio = this._posRatio;

            if (direction) {
                curIndex = referencePos >= curPosOffset ? // 向右拉时超过参考线
                curIndex - (posRatio !== 0 ? 1 : 0) : curIndex + (posRatio !== 0 ? 0 : 1);
            } else if (!direction) {
                curIndex = referencePos <= curPosOffset ? // 向左拉时超过参考线
                curIndex + (posRatio !== 1 ? 1 : 0) : curIndex - (posRatio !== 1 ? 0 : 1);
            }

            return this._options.loop ? this._getValidIndex(curIndex) : this._limitIndex(curIndex);
        }

        // 获取默认靠近对齐点的子元素索引

    }, {
        key: '_getDefaultAlignIndex',
        value: function _getDefaultAlignIndex() {
            return this._posRatio === 1 ? this._realMaxIndex : this._posRatio === .5 ? Math.round(this._realMaxIndex * .5) : 0;
        }

        // 判断是否为一个有效的索引

    }, {
        key: '_isValidIndex',
        value: function _isValidIndex(index, real) {
            var maxIndex = real ? this._realMaxIndex : this._maxIndex;
            return (0, _isNumber3.default)(index) && index >= 0 && index <= maxIndex;
        }

        // 获取有效的索引

    }, {
        key: '_getValidIndex',
        value: function _getValidIndex(index, real) {
            var itemCount = real ? this._realItemCount : this._itemCount;
            return (index % itemCount + itemCount) % itemCount;
        }

        // 限制索引，防止其超出范围

    }, {
        key: '_limitIndex',
        value: function _limitIndex(index, real) {
            var maxIndex = real ? this._realMaxIndex : this._maxIndex;
            return Math.max(0, Math.min(maxIndex, index));
        }

        // 限制位置，防止其超出范围

    }, {
        key: '_limitPos',
        value: function _limitPos(curPos) {
            return Math.max(this._minPos, Math.min(this._maxPos, curPos));
        }

        // 判断当前位置是否超出范围，并返回合理的值

    }, {
        key: '_getValidPos',
        value: function _getValidPos(curPos) {
            var minPos = this._minPos;
            var maxPos = this._maxPos;

            if (this._options.loop) {
                var itemTotalSize = this._realItemTotalSize;
                if (curPos < minPos) curPos = minPos + itemTotalSize + (curPos - minPos) % itemTotalSize;else if (curPos > maxPos) curPos = maxPos - itemTotalSize + (curPos - maxPos) % itemTotalSize;
            } else {
                // 超出限制后减速滑动
                if (curPos < minPos) curPos = minPos + (curPos - minPos) * 0.3;else if (curPos > maxPos) curPos = maxPos + (curPos - maxPos) * 0.3;
            }

            return curPos;
        }

        // 根据目标位置，调整当前位置，并返回调整的差值

    }, {
        key: '_adjustByTargetPos',
        value: function _adjustByTargetPos(targetPos) {
            var difference = this._getValidPos(targetPos) - targetPos;

            if (difference) {
                this._moveTo(this._curPos + difference);
                this._curIndex = this._calcIndex(this._curPos, targetPos - this._curPos > 0);
            }

            return difference;
        }

        // 获取当前位置

    }, {
        key: '_getCurPos',
        value: function _getCurPos() {
            return parseFloat(this._$wrap.css(this._posProp));
        }

        // 根据当前位置，获取到达最大位置的剩余时间

    }, {
        key: '_getRemainTime',
        value: function _getRemainTime() {
            return (this._curPos - this._minPos) / (this._maxPos - this._minPos) * this._loopTotalTime;
        }

        // 开始滚动

    }, {
        key: '_rollStart',
        value: function _rollStart() {
            var _this7 = this;

            if (!this._options.loop || !this._inited || !this._isRun || this._isRoll) return;
            this._isRoll = true;

            if (this._curPos <= this._minPos) {
                this._moveTo(this._curPos + this._realItemTotalSize);
            }

            this._$wrap.animate(_defineProperty({}, this._posProp, this._minPos), this._getRemainTime(), 'linear', function () {
                _this7._wrapStop();
                _this7._rollStart();
            });
        }
    }, {
        key: '_wrapStop',
        value: function _wrapStop() {
            this._isRoll = false;
            this._gotoPrev = false;
            this._gotoNext = false;
            this._$wrap.stop();
            this._curPos = this._getCurPos();
        }
    }, {
        key: '_run',
        value: function _run() {
            if (!this._options.loop || this._isRun) return;
            this._isRun = true;
            this._rollStart();
        }
    }, {
        key: '_stop',
        value: function _stop() {
            if (!this._isRun) return;
            this._isRun = false;
            this._wrapStop();
        }
    }]);

    return Slider;
}();

exports.default = Slider;
;
module.exports = exports['default'];

/***/ })
/******/ ]);
});