/*!
 * NavManager (基于 jQuery)
 * (c) 2014-2017 Junjie.Bai
 */

(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        root.NavManager = factory(root.jQuery);
    }

}(this, function($) {
    'use strict';

        /**
         * 默认回调
         * this 指向 NavManager 的实例对象
         * @param {Number} index   区块在区块列表中的索引
         * @param {DOM}    section 区块的DOM对象
         */
    var noop = function(index, section) {},

        defaultOptions = {
            offset: 0, // 屏幕滑动的偏移量，一般为头部的高度
            nav: '', // 导航项的选择器或 jQuery 对象。
                    // 如果有多个导航，比如同时有顶部导航和右侧导航，那么每个导航项的选择器以英文“,”隔开，或者将他们放入数组。
            section: '', // 页面上每个区块的选择器或 jQuery 对象。
                        // 每个区块选择器以英文“,”隔开，或者将他们放入数组。
            anchor: '', // 每个导航对应的区选择器或 jQuery 对象。
                        // 每个区块选择器以英文“,”隔开，或者将他们放入数组。
                        // 如果不指定，则默认与 section 相同。

            navActiveClass: 'active', // 导航项焦点类名
            duration: 600, // 区块间滑动的持续时间
            easing: '', // 区块间滑动的 jQuery 缓动函数

            // this 指向当前 NavManager 实例
            onEnter: noop, // 进入区块时的回调，并将当前区块的索引以及DOM对象作为参数传入
            onLeave: noop, // 离开区块时的回调，并将当前离开区块的索引以及DOM对象作为参数传入
            onStart: noop, // 滑动开始时的回调，并将当前区块的索引以及DOM对象作为参数传入
            onEnd: noop // 滑动结束后的回调，并将当前区块的索引以及DOM对象作为参数传入
        };

    /**
     * 导航管理
     * @param {Object} options 配置对象
     */
    function NavManager(options) {
        if (!(this instanceof NavManager)) {
            return new NavManager(options);
        }

        this._options = $.extend({}, defaultOptions, options);
        this._init();
    }

    $.extend(NavManager.prototype, {
        constructor: NavManager,

        _init: function() {
            var self = this,
                opt = this._options;

            // 处理配置信息
            if (isString(opt.nav)) {
                this._navArr = opt.nav.split(',');
            } else if (!isArray(opt.nav)) {
                this._navArr = [opt.nav];
            }

            this._navArr = $.map(this._navArr, function(n) {
                var $navs = $(n);
                if (!self._hasNavItem) self._hasNavItem = !!$navs.length;
                return $navs;
            });

            if (isArray(opt.section)) {
                this._$section = $($.map(opt.section, function(n) { return $(n)[0]; }));
            } else {
                this._$section = $(opt.section);
            }

            this._sections = $.map(this._$section, function(n) { return $(n); })

            if (!opt.anchor) {
                this._$anchor = this._$section;
            } else if (isArray(opt.anchor)) {
                this._$anchor = $($.map(opt.anchor, function(n) { return $(n)[0]; }));
            } else {
                this._$anchor = $(opt.anchor);
            }

            this._offset = opt.offset;
            this._duration = opt.duration;
            this._easing = opt.easing;
            this._navActiveClass = opt.navActiveClass;

            this._onEnter = opt.onEnter;
            this._onLeave = opt.onLeave;
            this._onStart = opt.onStart;
            this._onEnd = opt.onEnd;

            this._animating = false; // 是否正在滚屏动画
            this._maxIndex = this._$section.length - 1;
            this._curIndex = -1;

            this._initProxy();

            this._$win = $(window);
            this._$doc = $(allowScroll(document.documentElement) ? document.documentElement : document.body);

            this._resize();
            this._scroll();
            this._addEvent();
        },

        _addEvent: function() {
            var self = this;
            $.each(this._navArr, function(i, $navs) {
                $navs.on('click', self._onClickNav);
            });

            this._$win.on('resize', this._resize);
            this._$win.on('scroll', this._scroll);
        },

        _removeEvent: function() {
            var self = this;
            $.each(this._navArr, function(i, $navs) {
                $navs.off('click', self._onClickNav);
            });

            this._$win.off('resize', this._resize);
            this._$win.off('scroll', this._scroll);
        },

        _onClickNav: function(e) {
            var index = -1;
            $.each(this._navArr, function(i, $navs) {
                index = $navs.index(e.currentTarget);
                if (index >= 0) return false;
            });

            if (index >= 0) {
                this._setScrollTop(this._$anchor.eq(index), this._duration);
                return false;
            }
        },

        _setScrollTop: function($target, duration) {
            var self = this;
            var scrollTop = $target.offset().top - this._offset,
                targetIndex = this._$section.index($target);

            if (this._$win.scrollTop() === scrollTop) return;

            this._animating = true;

            try {
                this._onStart(targetIndex, $target[0]);
            } catch(err) {
                throw err;
            }

            this._$doc.stop().animate({
                scrollTop: scrollTop
            }, duration, this._easing, function() {
                self._animating = false;

                try {
                    self._onEnd(targetIndex, $target[0]);
                } catch(err) {
                    throw err;
                }
            });
        },

        _scroll: function() {
            var self = this,
                winTop = this._$win.scrollTop(),
                winBottom = winTop + this._winHeight,
                winHalfTop = winTop + this._offset + (this._winHeight - this._offset) * 0.5;

            // 判断当前滑到到哪个区块
            $.each(this._sections, function(i, $section) {
                var top = $section.offset().top,
                    bottom = top + $section.outerHeight();
                // 当页面顶部进入窗口高度的一半时，将该页面算作当前页面。
                // 如果当前区块是最后一个，那么当区块底部与窗口底部平齐时，将该区块算作当前区块。
                if ((i === self._maxIndex && winBottom >= bottom)
                || (winHalfTop >= top && winHalfTop < bottom)) {

                    if (self._curIndex !== i) {

                        if (self._hasNavItem && self._$anchor.is($section)) {
                            var index = self._$anchor.index($section);
                            $.each(self._navArr, function(i, $navs) {
                                $navs.removeClass(self._navActiveClass);
                                $navs.eq(index).addClass(self._navActiveClass);
                            });
                        }

                        if (self._curIndex >= 0) {
                            try {
                                self._onLeave(self._curIndex, self._sections[self._curIndex][0]);
                            } catch(err) {
                                throw err;
                            }
                        }

                        try {
                            self._onEnter(i, self._sections[i][0]);
                        } catch(err) {
                            throw err;
                        }

                        self._curIndex = i;
                    }

                    // 由于最后一个区块可能是网页的脚步，而网页的脚步未必是全屏的
                    // 因此，如果是倒数第二个区块满足以上条件，也要再去检查最后一个区块，而不是跳出循环
                    if (i !== self._maxIndex - 1) {
                        return false;
                    }
                }
            });
        },

        _resize: function() {
            this._winHeight = this._$win.height();
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            for (var p in this) {
                if (isFunction(this[p])) {
                    this[p] = $.proxy(this, p);
                }
            }
        },

        destroy: function() {
            this._removeEvent();

            // 清除所有属性
            for (var p in this) {
                delete this[p];
            }

            this.__proto__ = Object.prototype;
        }
    });

    function allowScroll(elem, testHor) {
        var st = elem.scrollTop;
        elem.scrollTop += (st > 0) ? -1 : 1;
        if (elem.scrollTop != st) {
            elem.scrollTop = st;
            return true;
        }

        if (!testHor) return;

        var sl = elem.scrollLeft;
        elem.scrollLeft += (sl > 0) ? -1 : 1;
        if (elem.scrollLeft != sl) {
            elem.scrollLeft = sl;
            return true;
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

    // 判断对象是否为jQuery对象
    function isJQ(jq) {
        return jq instanceof jQuery;
    }

    return NavManager;
}));
