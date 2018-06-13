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

    var $win = $(window);
    var $doc = $(allowScroll(document.documentElement) ? document.documentElement : document.body);

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

            if ($.isArray(opt.nav)) {
                this._$nav = $($.map(opt.nav, function(n) { return $(n)[0]; }));
            } else {
                this._$nav = $(opt.nav);
            }

            if ($.isArray(opt.section)) {
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

            this._resize();
            this._scroll();
            this._addEvent();
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            var _this = this;
            Object.getOwnPropertyNames(this.__proto__).forEach(function(prop) {
                if ($.isFunction(_this[prop])) {
                    _this[prop] = $.proxy(_this, prop);
                }
            });
        },

        _addEvent: function() {
            this._$nav.on('click', this._onClickNav);
            $win.on('resize', this._resize);
            $win.on('scroll', this._scroll);
        },

        _removeEvent: function() {
            this._$nav.off('click', this._onClickNav);
            $win.off('resize', this._resize);
            $win.off('scroll', this._scroll);
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
            if (this._animating) return;
            this._animating = true;

            var _this = this;
            var scrollTop = $target.offset().top - this._offset,
                targetIndex = this._$section.index($target);

            if ($win.scrollTop() === scrollTop) return;

            var $anchor = this._getAnchor($target);
            this._onStart(targetIndex, $target, $anchor);

            $doc.stop().animate({
                scrollTop: scrollTop
            }, duration, this._easing, function() {
                _this._animating = false;
                _this._onEnd(targetIndex, $target, $anchor);
            });
        },

        _scroll: function() {
            var winTop = $win.scrollTop(),
                winBottom = winTop + this._winHeight,
                reference,
                curSectionIndex,
                $curSection;

            // 如果窗口底部与文档底部平齐，将最后一个区块算作当前区块。
            if (winBottom > this._bodyHeight) {
                curSectionIndex = this._maxIndex;
                $curSection = this._sections[curSectionIndex];
            } else {
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
                // 由于区块间可能存在包含关系，并且区块数组是以文档结构由外向内的顺序
                // 因此需要先判断子区块是否进入，也就是倒叙判断
                var l = this._sections.length;
                while(l--) {
                    var $section = this._sections[l],
                        top = $section.offset().top,
                        bottom = top + $section.outerHeight(true);

                    if (reference >= top && reference < bottom) {
                        curSectionIndex = l;
                        $curSection = $section;
                        break;
                    }
                }
            }

            if (this._curIndex === curSectionIndex || !$curSection) return;

            var $anchor = this._getAnchor($curSection);
            this._$nav.removeClass(this._navActiveClass);
            if ($anchor) $anchor.addClass(this._navActiveClass);

            if (this._curIndex >= 0) {
                this._onLeave(this._curIndex, this._sections[this._curIndex], $anchor);
            }

            this._onEnter(curSectionIndex, this._sections[curSectionIndex], $anchor);
            this._curIndex = curSectionIndex;
        },

        _getAnchor: function($section) {
            var id = $section.attr('id');
            if (id) return this._$nav.filter('[href="#' + id + '"]');
            return null;
        },

        _resize: function() {
            this._winHeight = $win.height();
            this._bodyHeight = document.body.scrollHeight;
        },

        destroy: function() {
            this._removeEvent();

            // 清除所有属性
            var _this = this;
            Object.getOwnPropertyNames(this).forEach(function(prop) {
                delete _this[prop];
            });

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

    return NavManager;
}));
