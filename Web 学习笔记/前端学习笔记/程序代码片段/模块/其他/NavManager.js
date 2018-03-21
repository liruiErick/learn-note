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
     * @param {Number} index    区块在区块列表中的索引
     * @param {jQuery} $section 区块的 jQuery 对象
     * @param {jQuery} $anchor  区块的对应锚点的 jQuery 对象。如果没有对应的锚点链接，则为 null
     */
    var noop = function(index, $section, $anchor) {},

        defaultOptions = {
            offset: 0, // 屏幕滑动的偏移量，一般为头部的高度
            nav: '', // 导航项的选择器或 jQuery 对象。每个导航通过链接通过 href="#id" 的形式来指定对应的区块
            // 如果有多个导航，比如同时有顶部导航和右侧导航，那么每个导航项的选择器以英文“,”隔开，或者将他们放入数组。
            section: '', // 页面上每个区块的选择器或 jQuery 对象。

            navActiveClass: 'active', // 导航项焦点类名
            enterPosition: 'middle', // 判断区块进入屏幕时相对于屏幕的位置，取值分别为 'top'、'middle'、'bottom'
            enterPositionOffset: 0, // 为进入位置指定一个偏移量
            duration: 600, // 区块间滑动的持续时间
            easing: '', // 区块间滑动的 jQuery 缓动函数

            // this 指向当前 NavManager 实例
            onEnter: noop, // 进入区块时的回调
            onLeave: noop, // 离开区块时的回调
            onStart: noop, // 滑动开始时的回调
            onEnd: noop // 滑动结束后的回调
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
            var opt = this._options;

            if (isArray(opt.nav)) {
                this._$nav = $($.map(opt.nav, function(n) { return $(n)[0]; }));
            } else {
                this._$nav = $(opt.nav);
            }

            if (isArray(opt.section)) {
                this._$section = $($.map(opt.section, function(n) { return $(n)[0]; }));
            } else {
                this._$section = $(opt.section);
            }

            this._sections = $.map(this._$section, function(n) { return $(n); });

            this._offset = opt.offset;
            this._navActiveClass = opt.navActiveClass;
            this._enterPosition = opt.enterPosition;
            this._enterPositionOffset = opt.enterPositionOffset;
            this._duration = opt.duration;
            this._easing = opt.easing;

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
            this._$nav.on('click', this._onClickNav);
            this._$win.on('resize', this._resize);
            this._$win.on('scroll', this._scroll);
        },

        _removeEvent: function() {
            this._$nav.off('click', this._onClickNav);
            this._$win.off('resize', this._resize);
            this._$win.off('scroll', this._scroll);
        },

        _onClickNav: function(e) {
            var href = e.currentTarget.getAttribute('href');
            if (!href.match(/^#[^#]/)) return;
            var $target = $(href);
            if ($target.length) {
                this._setScrollTop($target, this._duration);
                return false;
            }
        },

        _setScrollTop: function($target, duration) {
            var self = this;
            var scrollTop = $target.offset().top - this._offset,
                targetIndex = this._$section.index($target);

            if (this._$win.scrollTop() === scrollTop) return;

            self._animating = true;
            var $anchor = this._getAnchor($target);

            try {
                this._onStart(targetIndex, $target, $anchor);
            } catch(err) {
                throw err;
            }

            this._$doc.stop().animate({
                scrollTop: scrollTop
            }, duration, this._easing, function() {
                self._animating = false;

                try {
                    self._onEnd(targetIndex, $target, $anchor);
                } catch(err) {
                    throw err;
                }
            });
        },

        _scroll: function() {
            var self = this,
                winTop = this._$win.scrollTop(),
                winBottom = winTop + this._winHeight,
                reference,
                curSectionIndex,
                $curSection;

            switch(this._enterPosition) {
                case 'top':
                    reference = winTop + this._offset;
                    break;
                case 'middle':
                    reference = winTop + this._offset + (this._winHeight - this._offset) * 0.5;
                    break;
                case 'bottom':
                    reference = winBottom;
                    break;
            }

            reference += this._enterPositionOffset;

            // 判断当前滑到到哪个区块
            $.each(this._sections, function(i, $section) {
                var top = $section.offset().top,
                    bottom = top + $section.outerHeight(true);
                // 当页面顶部进入窗口高度的一半时，将该页面算作当前页面。
                // 如果当前区块是最后一个，那么当区块底部与窗口底部平齐时，将该区块算作当前区块。
                if ((i === self._maxIndex && winBottom >= bottom)
                    || (reference >= top && reference < bottom)) {
                    curSectionIndex = i;
                    $curSection = $section;
                }
            });

            if (!$curSection) return;

            var $anchor = self._getAnchor($curSection);
            self._$nav.removeClass(self._navActiveClass);
            if ($anchor) $anchor.addClass(self._navActiveClass);

            if (this._curIndex >= 0) {
                try {
                    self._onLeave(this._curIndex, this._sections[this._curIndex], $anchor);
                } catch(err) {
                    throw err;
                }
            }

            try {
                self._onEnter(curSectionIndex, self._sections[curSectionIndex], $anchor);
            } catch(err) {
                throw err;
            }

            this._curIndex = curSectionIndex;
        },

        _getAnchor: function($section) {
            var id = $section.attr('id');
            if (id) return this._$nav.filter('[href="#' + id + '"]');
            return null;
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
        if (elem.scrollTop !== st) {
            elem.scrollTop = st;
            return true;
        }

        if (!testHor) return;

        var sl = elem.scrollLeft;
        elem.scrollLeft += (sl > 0) ? -1 : 1;
        if (elem.scrollLeft !== sl) {
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

    return NavManager;
}));
