/*!
 * @author baijunjie
 */

(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(require('jquery.animate'), require('DragEvent'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery.animate', 'DragEvent'], factory);
    } else {
        root.bjj = root.bjj || {};
        root.bjj.PullLoad = factory(root.jQuery, root.bjj.DragEvent);
    }

}(this, function($, DragEvent) {
    'use strict';

    var $win = $(window),
        noop = function() {};

    var defaultOptions = {
        disableRefresh: false, // 禁用下拉刷新功能。
        disableLoad: false, // 禁用上拉加载功能。
        container: 'body', // 下拉刷新的容器，默认为 body。
        textClass: 'pull-load__text', // 下拉刷新的文本容器的 class
        iconClass: 'pull-load__icon', // 下拉刷新的图标容器的 class
        status: { // 下拉刷新的状态配置对象
            pulling: {
                text: '下拉可以刷新',
                icon: 'pull-load__pulling'
            },
            loosen: {
                text: '松开立即刷新',
                icon: 'pull-load__loosen'
            },
            loading: {
                text: '努力加载中 >_<...',
                icon: 'pull-load__loading'
            },
            done: {
                text: '刷新完成 ^_^',
                icon: 'pull-load__done'
            },
            fail: {
                text: '刷新失败 T_T',
                icon: 'pull-load__fail'
            }
        },
        refresh: noop, // 下拉刷新回调

        loadContainer: 'body', // 上拉加载的容器，默认为 body。
        loadOffset: 0, // 计算上拉加载位置的偏移量
        load: noop // 上拉加载回调
    };

    /**
     * 下拉刷新上拉加载
     * @param options {Object} 配置参数
     */
    function PullLoad(options) {
        if (!(this instanceof PullLoad)) {
            return new PullLoad(options);
        }

        this._options = extend(true, {}, defaultOptions, options);
        this._init();
    }

    extend(PullLoad.prototype, {
        constructor: PullLoad,

        _init: function() {
            this._posY = 0;
            this._status = ''; // 标记下拉刷新时的状态

            this._winHeight = 0;
            this._loadExecuted = false;

            this._initProxy();
            this._createElem();

            if (!this._options.disableLoad) {
                this._resize();
                this._scroll();
            }

            this._addEvent();

            return this;
        },

        // 确保无论函数持有者是谁，调用都不会出错
        _initProxy: function() {
            for (var p in this) {
                if ($.isFunction(this[p])) {
                    this[p] = $.proxy(this, p);
                }
            }
        },

        _createElem: function() {
            if (!this._options.disableRefresh) {
                this._$container = $(this._options.container);

                var $pullLoadInner = $('<div>').css({
                    'white-space': 'nowrap',
                    'position': 'absolute',
                    'height': 30,
                    'top': -30,
                    'left': '50%',
                    'x': '-50%'
                });

                this._$pullLoad = $('<div>').css({
                    'position': 'relative',
                    'overflow': 'visible'
                }).append($pullLoadInner);

                this._$pullLoadIcon = $('<span class="' + this._options.iconClass + '"></span>');
                this._$pullLoadText = $('<span class="' + this._options.textClass + '"></span>');

                $pullLoadInner
                    .append(this._$pullLoadIcon)
                    .append(this._$pullLoadText);

                this._$container.prepend(this._$pullLoad);

                this._$moveElem = this._$pullLoad.add(
                    this._$pullLoad
                        .nextAll()
                        .filter(function(i, elem) {
                            var pos = $(elem).css('position');
                            return pos === 'relative' || pos === 'static';
                        })
                        .css({
                            'y': 0,
                            'z': 0
                        })
                );
            }

            if (!this._options.disableLoad) {
                this._loadContainer = $(this._options.loadContainer)[0];
            }
        },

        _addEvent: function() {
            if (!this._options.disableRefresh) {
                this._dragEvent = new DragEvent({
                    obj: this._$container,
                    move: this._dragMove,
                    end: this._dragEnd
                });
            }

            if (!this._options.disableLoad) {
                $win.on('resize', this._resize);
                $win.on('scroll', this._scroll);
            }
        },

        _removeEvent: function() {
            if (!this._options.disableLoad) {
                $win.off('resize', this._resize);
                $win.off('scroll', this._scroll);
            }

            this._dragEvent && this._dragEvent.destroy();
            this._dragEvent = null;
        },

        _dragMove: function(e, data) {
            var dy = data.localDy;
            if (dy < 0 && !this._status) return;

            if (!this._status) {
                var scrollTop = this._$container.scrollTop() || $win.scrollTop();
                if (scrollTop > 0) return;
                this._status = 'pulling';
                this._$moveElem.stop().stop();
                this._$pullLoad.show();
                this._$pullLoadIcon.addClass(this._options.status.pulling.icon);
                this._$pullLoadText.text(this._options.status.pulling.text);
                this._posY = parseFloat(this._$moveElem.css('y'));
            }

            if (this._status === 'pulling' || this._status === 'loosen') {
                e.preventDefault();

                var pullHalfHeight = dy / 2 + this._posY;

                if (dy >= 0 && dy < 150) {
                    this._$moveElem.css('y', pullHalfHeight);

                    if (this._status !== 'pulling') {
                        this._status = 'pulling';
                        this._$pullLoadIcon
                            .removeClass(this._options.status.loosen.icon)
                            .addClass(this._options.status.pulling.icon);
                        this._$pullLoadText.text(this._options.status.pulling.text);
                    }
                } else if (dy >= 150) {
                    this._$moveElem.css('y', pullHalfHeight);

                    if (this._status !== 'loosen') {
                        this._status = 'loosen';
                        this._$pullLoadIcon
                            .removeClass(this._options.status.pulling.icon)
                            .addClass(this._options.status.loosen.icon);
                        this._$pullLoadText.text(this._options.status.loosen.text);
                    }
                } else {
                    this._$moveElem.css('y', 0);
                }
            }
        },

        _dragEnd: function() {
            if (!this._status) return;

            if (this._status === 'loosen') {
                this._status = 'loading';
                this._$pullLoadIcon
                    .removeClass(this._options.status.loosen.icon)
                    .addClass(this._options.status.loading.icon);
                this._$pullLoadText.text(this._options.status.loading.text);
                this._$moveElem.stop().animate({ 'y': 75 });

                // 将 callback 中执行的错误报出，而非在 callback 的调用行报出错误
                try {
                    this._options.refresh && this._options.refresh.call(this);
                } catch(err) {
                    throw err;
                }
            } else {
                this._retraction();
            }
        },

        _retraction: function(delay) {
            delay = delay || 0;
            var self = this;
            this._$moveElem.delay(delay).animate({ 'y': 0 }, function() {
                if (self._status === 'pulling') self._$pullLoadIcon.removeClass(self._options.status.pulling.icon);
                if (self._status === 'done') self._$pullLoadIcon.removeClass(self._options.status.done.icon);
                if (self._status === 'fail') self._$pullLoadIcon.removeClass(self._options.status.fail.icon);
                self._$pullLoad.hide();
                self._status = '';
            });
        },

        _resize: function() {
            this._winHeight = $win.height() + this._options.loadOffset;
        },

        _scroll: function() {
            var rect = this._loadContainer.getBoundingClientRect();

            if (!this._loadExecuted && rect.bottom <= this._winHeight) {
                this._loadExecuted = true;

                try {
                    this._options.load && this._options.load.call(this);
                } catch(err) {
                    throw err;
                }
            } else if (this._loadExecuted && rect.bottom > this._winHeight) {
                this._loadExecuted = false;
            }
        },

        destroy: function() {
            this._removeEvent();

            // 清除所有属性
            for (var p in Object.getOwnPropertyNames(this)) {
                delete this[p];
            }

            this.__proto__ = Object.prototype;
        },

        done: function() {
            if (this._status !== 'loading') return;
            this._status = 'done';
            this._$pullLoadIcon
                .removeClass(this._options.status.loading.icon)
                .addClass(this._options.status.done.icon);
            this._$pullLoadText.text(this._options.status.done.text);
            this._retraction(600);
        },

        fail: function() {
            if (this._status !== 'loading') return;
            this._status = 'fail';
            this._$pullLoadIcon
                .removeClass(this._options.status.loading.icon)
                .addClass(this._options.status.fail.icon);
            this._$pullLoadText.text(this._options.status.fail.text);
            this._retraction(600);
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

    return PullLoad;
}));