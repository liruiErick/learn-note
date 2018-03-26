/**
 * banner 滑动图片（兼容PC和触摸设备）
 * 注意，如果图片容器为全屏自适应，会出现一个bug:
 * 也就是在 window 系统下，如果设置了 js 动态改变了页面的尺寸，使滚动条出现或消失时，导致整个页面尺寸变化，从而使图片容器尺寸受到影响，但是这种变化并不会触发浏览器窗口的 resize 事件，也就会造成图片滑动式存在一个滚动条的偏差
 * 目前该为采用百分比来改变左边距，很好的解决了这个 bug
 */

/*
// banner 结构如下
<div id="banner">
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

// 初始化
var tabBanner = new TabBanner($("#banner"), {
    tabBtnWrap: ".point", //自定义切换按钮容器
    prevBtn: ".prevBtn", //上一个按钮
    nextBtn: ".nextBtn" //下一个按钮
});

// 切换到前一个
tabBanner.prevTab();

// 切换到下一个
tabBanner.nextTab();

// 刷新，并停留在指定项上
tabBanner.update(1);

// 跳转到指定项目上
tabBanner.gotoItem(2);

// 销毁 TabBanner 对象
tabBanner.destroy();

*/

(function(root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof exports === 'object') {
        module.exports = factory(require('jquery'), require('DragEvent'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery', 'DragEvent'], factory);
    } else {
        root.bjj = root.bjj || {};
        root.bjj.TabBanner = factory(root.jQuery, root.bjj.DragEvent);
    }

}(this, function($, DragEvent) {
    'use strict';

    var is_lte_IE8 = false,
        version = navigator.appVersion.match(/MSIE (\d+\.\d)/),
        versionNum = version && version[1] - 0;
    if (navigator.appName === 'Microsoft Internet Explorer' && versionNum <= 8) is_lte_IE8 = true;

    var is_mobile = !!navigator.userAgent.match(/mobile/i), //判断是否为移动设备

        $win = $(window),

        //默认配置
        defaultOptions = {
            neglectSelector: '.ie7_anon', //图片容器需要排除掉的子元素选择器，默认为IE9.js兼容伪元素时为容器内添加的元素类名 '.ie7_anon'
            itemActiveClass: 'active', //项目焦点类

            prevBtn: null, //上一个按钮
            nextBtn: null, //下一个按钮
            btnDisableClass: 'disabled', //前后按钮禁用类名

            defaultTabBtn: { // 默认切换按钮配置
                size: 10,
                color: '#666',
                activeColor: '#ccc',
                style: {}, // 切换按钮样式
                wrapStyle: {}, // 切换按钮容器样式
            },
            tabBtnWrap: null, //自定义切换按钮容器
            tabBtnActiveClass: 'active', //自定义切换按钮焦点类名
            tabBtnActiveEvent: 'mouseenter', // 切换按钮事件，默认为 'mouseenter'。也可以为 'click'
            hideTabBtn: false, //是否隐藏点按钮

            initIndex: 0, //初始化时的索引，默认为0
            interval: 5000, //每张图轮动的时间间隔，默认为5000毫秒。如果设置为0，则不自动轮播
            duration: 400, //切换动画的持续时间

            mouseStopTab: false, //鼠标放在banner上时，是否停止切换，默认为否
            loop: true, //是否循环切换，默认为是

            effect: 'slide', //默认效果为'slide'，还可以选择'fade'效果
            isVer: false, //排列方向，默认为水平方向。如果值为true则表示垂直方向。只有effect为'slide'时才有效

            onResize: function(){}, //窗口大小调整后的回调函数
            onEnter: function(){}, //每个banner进入前的回调函数，并将该banner的索引以及jQuery对象作为参数传入。this指向当前banner的DOM对象
            onLeave: function(){}, //每个banner离开后的回调函数，并将该banner的索引以及jQuery对象作为参数传入。this指向当前banner的DOM对象
            onTab: function(){}, //每个banner进入后的回调函数，并将该banner的索引以及jQuery对象作为参数传入。this指向当前banner的DOM对象
            onClick: function(){} //每个banner单击后的回调函数，并将该banner的索引以及jQuery对象作为参数传入。this指向当前banner的DOM对象
        };

    function TabBanner() {
        this._init.apply(this, arguments);
    }

    var p = TabBanner.prototype;

    p._init = function(container, options) {
        // 读取配置数据
        var opt = $.extend(true, {}, defaultOptions, options);

        this.$container = $(container).css({'overflow': 'hidden', 'user-select': 'none'});
        if (this.$container.css('position') === 'static') {
            this.$container.css('position', 'relative');
        }

        this.$wrap = this.$container
            .children()
            .first()
            .css({
                'position': 'absolute',
                'left': 0,
                'right': 0,
                'top': 0,
                'bottom': 0
            });

        this.neglectSelector = opt.neglectSelector;
        this.itemActiveClass = opt.itemActiveClass;

        this.$prevBtn = $(opt.prevBtn);
        this.$nextBtn = $(opt.nextBtn);
        this.hasPrevBtn = !!this.$prevBtn.length;
        this.hasNextBtn = !!this.$nextBtn.length;
        this.btnDisableClass = opt.btnDisableClass;

        this.interval = opt.interval;
        this.duration = opt.duration;
        this.noTimer = this.interval <= 0;

        this.mouseStopTab = opt.mouseStopTab;
        this.loop = opt.loop;

        this.effect = opt.effect;
        this.isVer = opt.isVer;

        this.onResize = opt.onResize;
        this.onEnter = opt.onEnter;
        this.onLeave = opt.onLeave;
        this.onTab = opt.onTab;
        this.onClick = opt.onClick;

        this.$tabBtnWrap = $(opt.tabBtnWrap);
        this.hideTabBtn = opt.hideTabBtn;
        this.isCustomBtn = !!this.$tabBtnWrap.length;
        this.tabBtnActiveEvent = opt.tabBtnActiveEvent;

        if (this.isCustomBtn) {
            this.tabBtnActiveClass = opt.tabBtnActiveClass;
        } else {
            this.defaultTabBtn = opt.defaultTabBtn;
        }

        if (this.hasPrevBtn) {
            this.$prevBtn.css({
                'user-select': 'none',
                'cursor': 'pointer'
            });
        }
        if (this.hasNextBtn) {
            this.$nextBtn.css({
                'user-select': 'none',
                'cursor': 'pointer'
            });
        }

        // 获得切换属性
        if (this.effect === 'slide') {
            if ($.cssHooks.x) {
                this.useTransform = true;
                if (this.isVer) this.tabAttr = 'y';
                else this.tabAttr = 'x';

                if ($.support.transform3d) {
                    this.$wrap.css('z', 0);
                }
            } else {
                if (this.isVer) this.tabAttr = 'top';
                else this.tabAttr = 'left';
            }

            this.sizeApi = this.isVer ? 'height' : 'width';
        }


        // 生成回调代理
        this.prevTab = $.proxy(this, 'prevTab');
        this.nextTab = $.proxy(this, 'nextTab');
        this._btnTabItem = $.proxy(this, '_btnTabItem');
        this._resize = $.proxy(this, '_resize');
        this._onClick = $.proxy(this, '_onClick');
        this._onTab = $.proxy(this, '_onTab');

        // 初始化计时器
        if (!this.noTimer) {
            this._setTimer = $.proxy(this, '_setTimer');
            this._clearTimer = $.proxy(this, '_clearTimer');

            // 为对象添加鼠标移入移出函数，来设置计时器的启停
            if (is_mobile) {
                this._addHover = function($obj) {
                    $obj.on('touchstart', this._clearTimer);
                    $obj.on('touchend', this._setTimer);
                };
                this._removeHover = function($obj) {
                    $obj.off('touchstart', this._clearTimer);
                    $obj.off('touchend', this._setTimer);
                };
            } else {
                this._addHover = function($obj) {
                    $obj.on('mouseenter', this._clearTimer);
                    $obj.on('mouseleave', this._setTimer);
                };
                this._removeHover = function($obj) {
                    $obj.off('mouseenter', this._clearTimer);
                    $obj.off('mouseleave', this._setTimer);
                };
            }
        }

        this.update(opt.initIndex);
        this._addEvent();
    };

    p._addEvent = function() {
        if (is_mobile) {
            $win.on('resize', this._resize);
            this.$tabBtn.on('touchend', this._btnTabItem);

            if (this.hasPrevBtn) {
                this.$prevBtn.on('touchend', this.prevTab);
            }
            if (this.hasNextBtn) {
                this.$nextBtn.on('touchend', this.nextTab);
            }

            if (this.effect === 'slide') {
                // 拖拽事件
                this.startPos = 0;
                this.curPos = 0;
                this.horizontal = false;
                this.vertical = false;
                this.startX = 0;
                this.startY = 0;
                this.r = 0.5; //声明一个比较是否划过下一张的比较系数

                this.dragEvent = new DragEvent({
                    obj: this.$wrap,
                    holder: this,
                    start: this._touchstartHandler,
                    move: this._touchmoveHandler,
                    end: this._touchendHandler
                });
            }

        } else {
            $win.on('resize', this.onResize);
            this.$tabBtn.on(this.tabBtnActiveEvent, this._btnTabItem);

            if (this.hasPrevBtn) {
                this.$prevBtn.on('click', this.prevTab);
            }
            if (this.hasNextBtn) {
                this.$nextBtn.on('click', this.nextTab);
            }
        }

        this.$wrap.on('click', '>', this._onClick);

        if (!this.noTimer) {
            this._addHover(this.$tabBtn);

            // 为图片容器加入悬停事件
            if (this.mouseStopTab) {
                this._addHover(this.$container);
            }

            if (this.hasPrevBtn) {
                this._addHover(this.$prevBtn);
            }
            if (this.hasNextBtn) {
                this._addHover(this.$nextBtn);
            }
        }
    };

    p._removeEvent = function() {
        if (is_mobile) {
            $win.off('resize', this._resize);
            this.$tabBtn.off('touchend', this._btnTabItem);

            if (this.hasPrevBtn) {
                this.$prevBtn.off('touchend', this.prevTab);
            }
            if (this.hasNextBtn) {
                this.$nextBtn.off('touchend', this.nextTab);
            }

            this.dragEvent && this.dragEvent.remove();
        } else {
            $win.off('resize', this.onResize);
            this.$tabBtn.off(this.tabBtnActiveEvent, this._btnTabItem);

            if (this.hasPrevBtn) {
                this.$prevBtn.off('click', this.prevTab);
            }
            if (this.hasNextBtn) {
                this.$nextBtn.off('click', this.nextTab);
            }
        }

        this.$wrap.off('click', '>', this._onClick);

        if (!this.noTimer) {
            this._removeHover(this.$tabBtn);

            // 为图片容器加入悬停事件
            if (this.mouseStopTab) {
                this._removeHover(this.$container);
            }

            if (this.hasPrevBtn) {
                this._removeHover(this.$prevBtn);
            }
            if (this.hasNextBtn) {
                this._removeHover(this.$nextBtn);
            }
        }
    };

    p._setTimer = function() {
        if (this.timerId) this._clearTimer();
        this.timerId = setTimeout(this.nextTab, this.interval);
    };

    p._clearTimer = function() {
        clearTimeout(this.timerId);
        this.timerId = null;
    };

    p._onClick = function(e) {
        this.onClick.call(e.currentTarget, this.curIndex);
    };

    p._touchstartHandler = function(e, data) {
        this.startX = data.x;
        this.startY = data.y;
    };

    p._touchmoveHandler = function(e, data) {
        var dx = data.x - this.startX,
            dy = data.y - this.startY;

        if (!this.horizontal && !this.vertical) {
            var absDx = Math.abs(dx),
                absDy = Math.abs(dy);
            if (this.isVer) {
                if (absDx <= absDy) {
                    this.vertical = true;
                    if (!this.noTimer) this._clearTimer();
                    this.$wrap.stop();
                    this.startPos = parseInt(this.$wrap.css(this.tabAttr));
                } else {
                    this.horizontal = true;
                    // 重置起始点
                    this.startX = data.x;
                    this.startY = data.y;
                }
            } else {
                if (absDx >= absDy) {
                    this.horizontal = true;
                    if (!this.noTimer) this._clearTimer();
                    this.$wrap.stop();
                    this.startPos = parseInt(this.$wrap.css(this.tabAttr));
                } else {
                    this.vertical = true;
                    // 重置起始点
                    this.startX = data.x;
                    this.startY = data.y;
                }
            }

        }

        if ((!this.isVer && !this.horizontal) || (this.isVer && !this.vertical)) return;
        e.preventDefault();

        if (this.isVer) this.curPos = this._outOfRange(this.startPos + dy);
        else this.curPos = this._outOfRange(this.startPos + dx);

        if (this.loop) {
            while (this.curPos > this.minOffset) {
                this._prevRepair();
                this.startPos -= this.distance;
                this.curPos = this.startPos + dx;
            }
            while (this.curPos < this.maxOffset) {
                this._nextRepair();
                this.startPos += this.distance;
                this.curPos = this.startPos + dx;
            }
        }

        this._gotoPos(this.curPos);
    };

    p._touchendHandler = function(e, data) {
        if (!this.vertical && !this.horizontal) this.onClick(this.curIndex);

        if (this.isVer) {
            this.horizontal = false;
            if (!this.vertical) return;
            this.vertical = false;
        } else {
            this.vertical = false;
            if (!this.horizontal) return;
            this.horizontal = false;
        }

        var m = this.curPos / -this.distance, //计算倍数
            realIndex;

        if (this.isVer) {
            realIndex = data.stepDy < 0 ? Math.ceil(m-this.r) : Math.floor(m+this.r);

            if (data.swipeTop && m > realIndex) { //手指上滑，页面向下显示
                realIndex++;
            } else if (data.swipeBottom && m < realIndex) { //手指下滑，页面向上显示
                realIndex--;
            }
        } else {
            realIndex = data.stepDx < 0 ? Math.ceil(m-this.r) : Math.floor(m+this.r);

            if (data.swipeLeft && m > realIndex) { //手指左滑，页面向右显示
                realIndex++;
            } else if (data.swipeRight > 0 && m < realIndex) { //手指右滑，页面向左显示
                realIndex--;
            }
        }

        if (this.loop) this.curIndex = this._getCurIndex(realIndex);
        this.realIndex = this._limitIndex(realIndex);
        if (!this.loop) this.curIndex = this.realIndex;

        this._tabBtn();
        this._tab();

        return false; //水平移动时防止<a>链接被点击到
    };

    p._resize = function() {
        if (!$.contains(document, this.$container[0])) return; //如果容器被移出文档，则不向下执行

        if (this.effect === 'slide') {
            if (is_mobile) {
                hideAction(this.$container, function() {
                    this.distance = this.$container[this.sizeApi]();
                    this.maxOffset = -this.distance * this.maxIndex;
                }, this);

            } else if (this.useTransform) { // 非移动设备下，一次滑动的百分比距离
                this.distance = 100 / this.itemCount;
            } else {
                this.distance = 100;
            }
        }

        this._tabBtn();
        this._tab(0);
        if (this.onResize) this.onResize();
    };

    p._btnTabItem = function(e) {
        var i = this.$tabBtn.index(e.currentTarget);
        if (i == this.curIndex) return;

        if (this.effect === 'slide') {
            var targetIndex = this._getRealIndex(i),
                di;
            if (i > this.curIndex && targetIndex < this.realIndex) {
                di = targetIndex + 1;
                while (di--) this._nextRepair();
                this.realIndex = this.maxIndex;
            } else if (i < this.curIndex && targetIndex > this.realIndex) {
                di = this.itemCount - targetIndex;
                while (di--) this._prevRepair();
                this.realIndex = 0;
            } else {
                this.realIndex = targetIndex;
            }
        }

        this.curIndex = i;

        this._tabBtn();
        this._tab();
    };

    p._getRealIndex = function(index) {
        var i = index - this.curIndex + this.realIndex;
        return (i % this.itemCount + this.itemCount) % this.itemCount;
    };

    p._getCurIndex = function(index) {
        var i = index - this.realIndex + this.curIndex;
        return (i % this.itemCount + this.itemCount) % this.itemCount;
    };

    p._prevRepair = function() { // 向左侧自动填补，并位移
        var $children = this.$wrap.children(':not('+this.neglectSelector+')');
        $children.last().insertBefore($children.first());
        this.realIndex++;
        var value = '-=' + this.distance;
        if (!is_mobile) value += '%';
        this._gotoPos(value);
    };

    p._nextRepair = function() { // 向右侧自动填补，并位移
        var $children = this.$wrap.children(':not('+this.neglectSelector+')');
        $children.first().insertAfter($children.last());
        this.realIndex--;
        var value = '+=' + this.distance;
        if (!is_mobile) value += '%';
        this._gotoPos(value);
    };

    p._tabBtn = function() { // 按钮焦点切换
        if (this.isCustomBtn) {
            this.$tabBtn.removeClass(this.tabBtnActiveClass);
            this.$tabBtn.eq(this.curIndex).addClass(this.tabBtnActiveClass);
        } else {
            this.$tabBtn.css('background',this.btnDefaultColor);
            this.$tabBtn.eq(this.curIndex).css('background',this.btnActiveColor);
        }
    };

    p._gotoPos = function(curPos) {
        var prop = {};
        prop[this.tabAttr] = curPos;
        this.$wrap.stop().animate(prop, 0); //由于 css 方法不支持递增百分比，因此改为 animate 方法
    };

    p._tab = function(duration) {
        if (!this.noTimer) this._clearTimer();

        if (typeof duration !== 'number') duration = this.duration;
        this.$prevItem = this.$curItem.removeClass(this.itemActiveClass);
        this.prevIndex = this.$item.index(this.$prevItem);

        this.$curItem = this.$item.eq(this.curIndex).addClass(this.itemActiveClass);

        this.onEnter.call(this.$curItem[0], this.curIndex, this.$curItem);

        if (this.effect === 'slide') {
            var prop = {};
            prop[this.tabAttr] = -this.distance * this.realIndex;
            if (!is_mobile) prop[this.tabAttr] += '%';

            this.$wrap.stop().animate(prop, duration, this._onTab);
        } else if (this.effect === 'fade') {
            this.prevIndex >= 0 && this.$prevItem.fadeOut(duration);
            this.$curItem.fadeIn(duration, this._onTab);
        }
    };

    p._onTab = function() {
        if (!this.loop) {
            if (this.hasPrevBtn) {
                if (this.curIndex == 0) this.$prevBtn.addClass(this.btnDisableClass);
                else this.$prevBtn.removeClass(this.btnDisableClass);
            }
            if (this.hasNextBtn) {
                if (this.curIndex == this.maxIndex) this.$nextBtn.addClass(this.btnDisableClass);
                else this.$nextBtn.removeClass(this.btnDisableClass);
            }
        }
        this.prevIndex >= 0 && this.onLeave.call(this.$prevItem[0], this.prevIndex, this.$prevItem);
        this.onTab.call(this.$curItem[0], this.curIndex, this.$curItem);

        if (!this.noTimer) this._setTimer();
    };

    // 限制index，防止其超出范围
    p._limitIndex = function(realIndex) {
        return Math.max(0, Math.min(this.maxIndex, realIndex));
    };

    p._outOfRange = function(curPos) { //判断当前位置是否超出范围，并返回合理的值
        // 超出限制后减速滑动
        if (curPos > this.minOffset) curPos *= 0.3;
        if (curPos < this.maxOffset) curPos = (curPos - this.maxOffset) * 0.3 + this.maxOffset;
        return curPos;
    };

    p._createTabBtn = function() {
        var $tabBtn = this.$tabBtnWrap.children().removeClass(this.tabBtnActiveClass),
            tabCount = $tabBtn.length,
            l = this.itemCount - tabCount;

        $tabBtn = $tabBtn.eq(0);

        if (this.isCustomBtn) {
            while (l-- > 0) {
                this.$tabBtnWrap.append(tabCount ? $tabBtn.clone() : '<div>');
            }
        } else {
            this.btnDefaultColor = this.defaultTabBtn.color;
            this.btnActiveColor = this.defaultTabBtn.activeColor;

            var btnSize = this.defaultTabBtn.size,
                wrapStyle = this.defaultTabBtn.wrapStyle,
                btnStyle = this.defaultTabBtn.style,
                tabBtnWrapSize = btnSize*2*this.itemCount,
                thicknessProp,
                centerProp,
                posProp;

            if (this.isVer) {
                thicknessProp = 'width';
                centerProp = 'top';
                posProp = 'right';
            } else {
                thicknessProp = 'height';
                centerProp = 'left';
                posProp = 'bottom';
            }

            var style = {};
            style['position'] = 'absolute';
            style[thicknessProp] = btnSize*2;
            style[posProp] = btnSize;
            style[centerProp] = '50%';
            style['margin-' + centerProp] = -tabBtnWrapSize/2;
            style[this.sizeApi] = tabBtnWrapSize;

            // 创建按钮容器
            this.$tabBtnWrap = $('<div>');
            this.$tabBtnWrap
                .css(style)
                .css(wrapStyle);

            while (l--) {
                $('<div>')
                    .css({
                        'float': 'left',
                        'width': btnSize,
                        'height': btnSize,
                        'margin': (btnSize/2)+'px',
                        'background': this.btnDefaultColor,
                        'border-radius': '50%',
                        '-webkit-box-shadow': '1px 1px 1px rgba(0,0,0,0.3)',
                        'box-shadow': '1px 1px 1px rgba(0,0,0,0.3)'})
                    .css(btnStyle)
                    .appendTo(this.$tabBtnWrap);
            }

            this.$wrap.after(this.$tabBtnWrap);
        }

        this.$tabBtn = this.$tabBtnWrap.children().css('cursor', 'pointer');

        if (this.hideTabBtn) {
            this.$tabBtnWrap.hide();
        }
    };

    p.update = function(index) {
        this.$item = this.$wrap.children(':not('+this.neglectSelector+')');
        this.$curItem = $();
        this.itemCount = this.$item.length;

        if (this.itemCount === 1) {
            this.loop = false;
        }

        if (this.effect === 'slide') {
            // 设置图片自适应
            this.$item.css({
                width: '100%',
                height: '100%'
            });
            if (!this.isVer) {
                this.$item.css('float', 'left');
            }
            this.$wrap.css(this.sizeApi, 100 * this.itemCount + '%');
            this.$item.css(this.sizeApi, 100 / this.itemCount + '%');

        } else if (this.effect === 'fade') {
            this.$wrap.css({
                width: '100%',
                height: '100%'
            });

            this.$item.css({
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }).hide();
        }

        this.minOffset = 0;
        this.maxIndex = this.itemCount - 1;
        this.prevIndex = -1;
        this.curIndex = (typeof(index) === 'number' && index > 0 && index < this.itemCount) ? index : 0;
        this.realIndex = this.curIndex;

        // 创建切换按钮
        this._createTabBtn();

        // 如果浏览器版本为IE8及以下浏览器，则异步执行resize
        if (is_lte_IE8) window.setTimeout(this._resize,0);
        else this._resize();
    };

    p.nextTab = function(e) {
        this.curIndex++;
        this.realIndex++;

        if (this.loop) {
            if (this.curIndex > this.maxIndex) this.curIndex = 0;
            if (this.effect === 'slide') {
                if (this.realIndex > this.maxIndex) this._nextRepair();
            }
        } else {
            if (this.curIndex > this.maxIndex) {
                this.curIndex = this.realIndex = this.maxIndex;
                if (e) return; //如果是事件驱动的，则在这里返回
            }
        }

        this._tabBtn();
        this._tab();
    };

    p.prevTab = function(e) {
        this.curIndex--;
        this.realIndex--;
        if (this.loop && this.effect === 'slide') {
            if (this.curIndex < 0) this.curIndex = this.maxIndex;
            if (this.effect === 'slide') {
                if (this.realIndex < 0) this._prevRepair();
            }
        } else {
            if (this.curIndex < 0) {
                this.curIndex = this.realIndex = 0;
                if (e) return; //如果是事件驱动的，则在这里返回
            }
        }

        this._tabBtn();
        this._tab();
    };

    p.gotoItem = function(i, duration) { // 直接跳转至该索引对应的项目
        if (this.curIndex === i) return;
        this.realIndex = this._getRealIndex(i);
        this.curIndex = i;
        this._tabBtn();
        this._tab(duration);
    };

    p.destroy = function() {
        this._removeEvent();
        this._clearTimer();
        this.$container = null;
        this.$wrap = null;
        this.$item = null;
        this.$prevItem = null;
        this.$curItem = null;
        this.$tabBtnWrap = null;
        this.$tabBtn = null;
        this.$prevBtn = null;
        this.$nextBtn = null;
    };

    function hideAction(jq, func, target) {
        var $hide = $();
        $.each(jq, function(i, n){
            var $n = (n instanceof jQuery) ? n : $(n),
                $hidden = $n.parents().addBack().filter(':hidden'),
                $none,
                i = $hidden.length;
            while (i--) {
                if (!$n.is(':hidden')) break;
                $none = $hidden.eq(i);
                if ($none.css('display') === 'none') $hide = $hide.add($none.show());
            }
        });
        if (typeof(func) === 'function') func.call(target || this);
        $hide.hide();
    }

    return TabBanner;

}));
