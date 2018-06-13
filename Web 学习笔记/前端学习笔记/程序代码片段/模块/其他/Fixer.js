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
        interceptor: '', // 择器或者 DOM 对象，如果指定了拦截者，锁定对象在到达拦截者位置时，会被固定在拦截者旁边。
        observer: '', // 选择器或者 DOM 对象，如果页面高度是动态变化的，那么就需要添加监控的对象，当该对象内容发生变化时，就会重新计算相应的位置数据。
        // 出于性能考虑，应当尽量缩小监控范围。
        // 同时要避免监控锁定对象自身以及它父节点，否则会引起死循环

        fixDirection: 'top', // 锁定方向，表示锁定对象的顶部超出窗口顶部时锁定，还是锁定对象底部超出窗口底部时锁定。
        // 取值为 'top' 或 'bottom'，默认为 'top'。

        fixPosition: '', // 锁定位置，表示锁定对象相对于窗口顶部锁定还是底部锁定。
        // 取值为 'top' 或 'bottom'。
        // 当 fixDirection 为 'top' 时，默认为 'top'。
        // 当 fixDirection 为 'bottom' 时，默认为 'bottom'。

        fixedClass: 'fixed', // 锁定时的类名
        placeholderClass: '' // 占位元素的类名，如果不指定该属性，则不会创建占位元素。
        // 当对象被锁定时，克隆一个占位元素，在锁定对象脱离文档结构时填充原锁定对象的位置。
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
            var options = this._options;

            if (options.interceptor) {
                this._$interceptor = $(options.interceptor);
                if (!this._$interceptor.length) this._$interceptor = null;
            }

            if (options.placeholderClass) {
                var fixerPosition = this._$fixer.css('position');
                if (fixerPosition === 'static' || fixerPosition === 'relative') {
                    this._$placeholder = this._$fixer.clone().addClass(options.placeholderClass).css({'pointer-events': 'none', 'visibility': 'hidden'});
                }
            }

            if (options.observer) {
                this._$observeElements = $(options.observer);
                if (this._$observeElements.length) {
                    this._addObserver();
                }
            }

            this._fixDirIsTop = options.fixDirection !== 'bottom';
            if (!options.fixPosition) options.fixPosition = this._fixDirIsTop ? 'top' : 'bottom';

            if (options.fixPosition === 'top') {
                this._fixPosIsTop = true;
            } else if (options.fixPosition === 'bottom') {
                this._fixPosIsTop = false;
            } else {
                this._fixPosIsTop = this._fixDirIsTop;
            }

            this._posProp = this._fixPosIsTop ? 'top' : 'bottom';

            this._initProxy();
            this._addEvent();
            this.update();
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            var self = this;
            Object.getOwnPropertyNames(this.__proto__).forEach(function(prop) {
                if ($.isFunction(self[prop])) {
                    self[prop] = $.proxy(self, prop);
                }
            });
        },

        _addEvent: function() {
            $win.on('scroll', this._scroll);
        },

        _removeEvent: function() {
            $win.off('scroll', this._scroll);
        },

        _addObserver: function() {
            if (this._observer) return;

            var self = this;
            this._observer = new MutationObserver(function() {
                self.update();
            });

            var options = {
                subtree: true,
                attributes: true
            };

            this._$observeElements.each(function() {
                self._observer.observe(this, options);
            });
        },

        _removeObserver: function() {
            if (!this._observer) return;
            this._observer.disconnect();
            this._observer = null;
        },

        _scroll: function() {
            var fixDirIsTop = this._fixDirIsTop,
                startFixScrollTop = this._startFixScrollTop,
                endFixScrollTop = this._endFixScrollTop,
                scrollTop = $win.scrollTop();

            if (fixDirIsTop && scrollTop <= startFixScrollTop) this._unfix(true);
            else if (!fixDirIsTop && scrollTop >= startFixScrollTop) this._unfix(true);
            else if (endFixScrollTop && fixDirIsTop && scrollTop >= endFixScrollTop) this._unfix(false);
            else if (endFixScrollTop && !fixDirIsTop && scrollTop <= endFixScrollTop) this._unfix(false);
            else this._fix();
        },

        _fix: function() {
            if (!this._unfixed) return;
            this._unfixed = 0;

            var style = { 'position': 'fixed' };
            style['margin-' + this._posProp] = 0;
            style[this._posProp] = this._options.offset;
            this._$fixer.css(style);

            this._$fixer.addClass(this._options.fixedClass);

            if (this._$placeholder) {
                this._$fixer.after(this._$placeholder);
            }
        },

        _unfix: function(reset) {
            var style;

            if (reset) {
                if (this._unfixed === 1) return;
                this._unfixed = 1;

                style = { 'position': '' };
                style['margin-' + this._posProp] = '';
                style[this._posProp] = '';
                this._$fixer.css(style);
            } else {
                if (this._unfixed === -1) return;
                this._unfixed = -1;

                style = { 'position': 'absolute' };
                style['margin-' + this._posProp] = '';
                style[this._posProp] = this._fixerAbsolute;
                this._$fixer.css(style);
            }

            this._$fixer.removeClass(this._options.fixedClass);

            if (this._$placeholder) {
                this._$placeholder.detach();
            }
        },

        update: function() {
            this._unfixed = 1;

            var style = { 'position': '' };
            style['margin-' + this._posProp] = '';
            style[this._posProp] = '';
            this._$fixer.css(style);

            var offset = this._options.offset,
                fixDirIsTop = this._fixDirIsTop,
                fixerTop = this._$fixer.offset().top,
                fixerHeight = this._$fixer.outerHeight(),
                fixerMarginTop = parseFloat(this._$fixer.css('margin-top')),
                fixerMarginBottom = parseFloat(this._$fixer.css('margin-bottom'));

            if (this._fixPosIsTop) {
                this._startFixScrollTop = fixerTop - offset;

                if (this._$interceptor) {
                    if (fixDirIsTop) {
                        this._endFixScrollTop = this._$interceptor.offset().top - fixerHeight - fixerMarginBottom;
                    } else {
                        this._endFixScrollTop = this._$interceptor.offset().top + this._$interceptor.outerHeight() + fixerMarginTop;
                    }

                    var offsetParentTop = this._$fixer.offsetParent().offset().top;
                    this._fixerAbsolute = this._endFixScrollTop - offsetParentTop - fixerMarginTop;
                    this._endFixScrollTop -= offset;
                }
            } else {
                offset -= $win.height();
                this._startFixScrollTop = fixerTop + fixerHeight + offset;

                if (this._$interceptor) {
                    if (fixDirIsTop) {
                        this._endFixScrollTop = this._$interceptor.offset().top - fixerMarginBottom;
                    } else {
                        this._endFixScrollTop = this._$interceptor.offset().top + this._$interceptor.outerHeight() + fixerHeight + fixerMarginTop;
                    }

                    var $offsetParent = this._$fixer.offsetParent();
                    var offsetParentBottom = $offsetParent.offset().top + $offsetParent.outerHeight();
                    this._fixerAbsolute = offsetParentBottom - this._endFixScrollTop - fixerMarginBottom;
                    this._endFixScrollTop += offset;
                }
            }

            this._scroll();
        },

        destroy: function() {
            this._removeEvent();
            this._removeObserver();
            this._$fixer.removeClass(this._options.fixedClass);

            // 清除所有属性
            var self = this;
            Object.getOwnPropertyNames(this).forEach(function(prop) {
                delete self[prop];
            });

            this.__proto__ = Object.prototype;
        }
    });

    // 判断是否为数字
    function isNumber(num) {
        return typeof num === 'number';
    }

    return Fixer;
}));