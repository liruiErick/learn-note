/*!
 * jQuery Animate v1.8.0 - By CSS3 transition
 * (c) 2014-2017 Junjie.Bai
 * MIT Licensed.
 *
 * https://github.com/baijunjie/jquery.animate
 */

(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        root.bjj = root.bjj || {};
        root.bjj.returnExports = factory(root.jQuery);
    }

}(this, function($) {
    'use strict';

    /**
     * 默认回调
     * this 指向 CustomClass 的实例对象
     * 包含 2 个参数 function(value, oldValue)
     *
     * @param param1 {[type]} [description]
     * @param param2 {[type]} [description]
     */
    var noop = function(value, oldValue) {};

    var defaultOptions = {

    };

    $.fn.customMethod = function(options) {
        var opt = $.extend({}, defaultOptions, options);

        return this;
    }

    /**
     * [CustomClass description]
     * @param options {[type]} [description]
     */
    function CustomClass(options) {
        if (!(this instanceof CustomClass)) {
            return new CustomClass(options);
        }

        this._options = extend({}, defaultOptions, options);
        this._init();
    }

    CustomClass.prototype = Object.create(holder.BaseClass.prototype);

    extend(CustomClass.prototype, {
        constructor: CustomClass,

        _init: function() {
            this._onChange = typeof this._options.onChange === 'function' ? this._options.onChange : null;

            // 获得位移属性
            var moveProp;
            if ($.cssHooks.x) {
                this._moveProp = isVer ? 'y' : 'x';

                if ($.support.transform3d) {
                    this._$wrap.css('z', 0);
                }
            } else {
                this._moveProp = isVer ? 'top' : 'left';

                if (this._$wrap.css('position') === 'static') {
                    this._$wrap.css('position', 'relative');
                }
            }

            this._initProxy();
            this._addEvent();
            this._createApi('destroy');
        },

        _addEvent: function() {

        },

        _removeEvent: function() {

        },

        _createApi: function(api) {
            var _this = this;

            Array.prototype.forEach.call(arguments, function(arg) {
                var privateName, publicName;

                if (isString(arg)) {
                    privateName = publicName = arg;
                } else if (isArray(arg)) {
                    privateName = arg[0];
                    publicName = arg[1];
                }

                _this[publicName] = function() {
                    _this['_' + privateName].apply(_this, arguments);
                    return _this;
                };
            });
        },

        _destroy: function() {
            this._removeEvent();
            destroy(this);
        }
    });

    function createApi(context) {
        var args = Array.prototype.slice.call(arguments, 1);
        Array.prototype.forEach.call(args, function(arg) {
            let privateName, publicName;

            if (isString(arg)) {
                privateName = publicName = arg;
            } else if (isArray(arg)) {
                privateName = arg[0];
                publicName = arg[1];
            }

            if (privateName.indexOf('_')) privateName = '_' + privateName;
            if (!publicName.indexOf('_')) publicName = publicName.substr(1);

            context[publicName].forEach(function() {
                context[privateName].apply(context, arguments);
                return context;
            };
        });
    }

    function destroy(context) {
        // 清除所有属性
        Object.getOwnPropertyNames(context).forEach(function(prop) {
            delete context[prop];
        });

        context.__proto__ = Object.prototype;
    }

    function bind(context) {
        var methods = Array.prototype.slice.call(arguments, 1);
        methods.forEach(function(method) {
            context[method] = context[method].bind(context);
        });
    }

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

    /**
     * 让隐藏元素正确执行程序（IE9及以上浏览器）
     * @param elems  {DOM|Array} DOM元素或者DOM元素组成的数组
     * @param func   {Function}  需要执行的程序函数
     * @param target {Object}    执行程序时函数中 this 的指向
     */
    var defaultDisplayMap = {};
    function hideAction(elems, func, target) {
        if (typeof elems !== 'object') {
            elems = [];
        }

        if (typeof elems.length === 'undefined') {
            elems = [elems];
        }

        var hideElems = [],
            hideElemsDisplay = [];

        for (var i = 0, elem; elem = elems[i++];) {

            while (elem instanceof HTMLElement) {

                var nodeName = elem.nodeName;

                if (!elem.getClientRects().length) {
                    hideElems.push(elem);
                    hideElemsDisplay.push(elem.style.display);

                    var display = defaultDisplayMap[nodeName];
                    if (!display) {
                        var temp = document.createElement(nodeName);
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

        var l = hideElems.length;
        while (l--) {
            hideElems.pop().style.display = hideElemsDisplay.pop();
        }
    }

    // 创建元素
    function createElement(parentNode, className, id, prop) {
        var elem = document.createElement('DIV');

        if (typeof className === 'object') {
            prop = className;
            className = null;
        }

        if (typeof id === 'object') {
            prop = id;
            id = null;
        }

        if (typeof prop === 'object') {
            for (var p in prop) {
                elem.style[p] = prop[p];
            }
        }

        if (className) elem.className = className;
        if (id) elem.id = id;

        parentNode.appendChild(elem);

        return elem;
    }

    // 移除元素
    function removeElement(elem) {
        elem.parentNode && elem.parentNode.removeChild(elem);
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

    // 设置属性
    function attr(elem, prop, value) {
        if (typeof prop === 'object') {
            for (var p in prop) {
                elem[p] = prop[p];
            }
            return elem;
        }

        if (value === undefined) {
            return elem[prop];
        } else {
            elem[prop] = value;
            return elem;
        }
    }

    // 设置样式
    function css(elem, prop, value) {
        if (typeof prop === 'object') {
            for (var p in prop) {
                value = prop[p];
                if (typeof value === 'number') value += 'px';
                elem.style[p] = value;
            }
            return elem;
        }

        if (value === undefined) {
            return window.getComputedStyle(elem)[prop];
        } else {
            if (typeof value === 'number') value += 'px';
            elem.style[prop] = value;
            return elem;
        }
    }

    // 判断对象是否为数组
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }

    // 判断是否为字符串
    function isString(str) {
        return typeof str === 'string';
    }

    // 判断是否为函数
    function isFunction(func) {
        return typeof func === 'function';
    }

    // 判断对象是否为DOM
    function isDOM(dom) {
        return /^\[object HTML.*\]$/.test(Object.prototype.toString.call(dom));
    }

    // 判断对象是否为jQuery对象
    function isJQ(jq) {
        return jq instanceof jQuery;
    }

    return CustomClass;
}));
