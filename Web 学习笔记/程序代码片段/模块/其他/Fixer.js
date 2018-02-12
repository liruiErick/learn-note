(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        root.Fixer = factory(root.jQuery);
    }

}(this, function($) {
    'use strict';

    var $win = $(window);

    var defaultOptions = {
        offset: 0, // 锁定时相对于窗口的偏移量，一般为头部的高度
        container: '', // 选择器或者 DOM 对象，如果指定了容器元素，那么锁定只会保持在容器之内
        fixedClass: 'fixed' // 锁定时的类名
    };

    function Fixer(selector, options) {
        if (!(this instanceof Fixer)) {
            return new Fixer(options);
        }

        this._$fixer = $(selector);

        if (!this._$fixer.length) {
            throw new Error('No fix element was found!');
        }

        if (isNumber(options)) {
            options = { offset: options };
        }

        this._options = $.extend({}, defaultOptions, options);
        this._init();
    }

    $.extend(Fixer.prototype, {
        constructor: Fixer,

        _init: function() {
            this._fixed = false;

            if (this._options.container) {
                this._$container = $(this._options.container);
                if (!this._$container.length) this._$container = null;
            }

            var fixerPosition = this._$fixer.css('position');

            if (fixerPosition === 'static' || fixerPosition === 'relative') {
                // 克隆一个占位元素，在锁定对象脱离文档结构时填充原锁定对象的位置
                this._$placeholder = this._$fixer.clone().css({'pointer-events': 'none', 'visibility': 'hidden'});
            }

            this._initProxy();
            this._scroll();
            this._addEvent();
            this.update();
        },

        _addEvent: function() {
            $win.on('scroll', this._scroll);
        },

        _removeEvent: function() {
            $win.off('scroll', this._scroll);
        },

        _scroll: function() {
            var fixerTop = this._fixerTop,
                maxScrollTop = this._maxScrollTop,
                scrollTop = $win.scrollTop();

            if (this._fixed) {
                if (scrollTop <= fixerTop ||
                    maxScrollTop && scrollTop >= maxScrollTop) {
                    this._unfix();
                }
            } else {
                if (maxScrollTop) {
                    if (scrollTop > fixerTop && scrollTop < maxScrollTop) this._fix();
                } else if (scrollTop > fixerTop) {
                    this._fix();
                }
            }
        },

        _fix: function() {
            this._fixed = true;

            if (this._$placeholder) {
                this._$fixer.after(this._$placeholder);
            }

            this._$fixer.css({
                'margin-top': 0,
                'position': 'fixed',
                'top': this._options.offset
            });

            this._$fixer.addClass(this._options.fixedClass);
        },

        _unfix: function() {
            this._fixed = false;

            if (this._$placeholder) {
                this._$placeholder.detach();
            }

            var maxScrollTop = this._maxScrollTop,
                scrollTop = $win.scrollTop();

            if (maxScrollTop && scrollTop >= maxScrollTop) {
                this._$fixer.css({
                    'margin-top': 0,
                    'position': 'absolute',
                    'top': this._fixerAbsTop
                });
            } else {
                this._$fixer.css({
                    'margin-top': '',
                    'position': '',
                    'top': ''
                });
            }

            this._$fixer.removeClass(this._options.fixedClass);
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            for (var p in this) {
                if (isFunction(this[p])) {
                    this[p] = $.proxy(this, p);
                }
            }
        },

        update: function() {
            if (this._$container) {
                this._maxScrollTop = this._$container.offset().top + this._$container.height() - this._$fixer.outerHeight(true) - this._options.offset;
                this._fixerAbsTop = this._maxScrollTop - this._$fixer.offsetParent().offset().top + this._$fixer.position().top + this._options.offset;
            }

            this._fixerTop = this._$fixer.offset().top - this._options.offset; // 获取锁定对象的初始顶部位
        },

        destroy: function() {
            this._removeEvent();
            this._$fixer.removeClass(this._options.fixedClass);

            // 清除所有属性
            for (var p in this) {
                delete this[p];
            }

            this.__proto__ = Object.prototype;
        }
    });

    // 判断是否为数字
    function isNumber(num) {
        return typeof num === 'number';
    }

    // 判断是否为函数
    function isFunction(func) {
        return typeof func === 'function';
    }

    return Fixer;
}));