/**
 * DOM 结构如下
 * <div class="slider">
 *   <ul>
 *     <li></li>
 *     <li></li>
 *   </ul>
 * </div>
 */

import $ from 'jquery';
import MoveEvent from 'move-event';
import hideAction from 'utils/hideAction';
import { isNil, isArray, isNumber, isString } from 'lodash';

const $win = $(window);

/**
 * 默认回调
 * this 指向 Slider 的实例对象
 *
 * @param data  {Object} 焦点元素的信息对象，包含以下属性
 *                       offset 焦点元素的左上角 margin 外边缘到容器左上角 padding 内边缘的距离。
 *                       index  焦点元素的索引
 *                       dom    焦点元素的 DOM 对象
 */
const noop = function(data) {};

const defaultOptions = {
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

export default class Slider {
    constructor(container, options) {
        this._$container = $(container);

        if (!this._$container.length) {
            throw new Error('No container were found！');
        }

        this._options = $.extend({}, defaultOptions, options);
        this._init();
    }

    _init() {
        const opt = this._options;

        this._$wrap = this._$container.find(opt.wrap).css({
            'display': 'inline-block',
            'cursor': '-webkit-grab',
        });

        if (!this._$wrap.length) {
            throw new Error('No child elements inside the slider were found！');
        }

        this._$prevBtn = $(opt.prevBtn);
        this._$nextBtn = $(opt.nextBtn);
        if (!this._$prevBtn.length) this._$prevBtn = null;
        if (!this._$nextBtn.length) this._$nextBtn = null;

        this._posRatio = opt.align === 'end' ? 1 : opt.align === 'center' ? .5 : 0;
        this._directionY = opt.direction === 'y';
        this._sizeApiName = this._directionY ? 'height' : 'width';
        this._startPropName = this._directionY ? 'top' : 'left';

        // 获得位移属性
        if ($.cssHooks.x) {
            this._posProp = this._directionY ? 'y' : 'x';

            if ($.support.transform3d) {
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

        this._createApi(
            'update',
            'prev',
            'next',
            'goto',
            'setActive',
            'run',
            'stop'
        );
    }

    _addEvent() {
        const opt = this._options;

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

        this._moveEvent = new MoveEvent({
            holder: this,
            obj: this._$wrap,
            start: this._startHandle,
            move: this._moveHandle,
            end: this._endHandle
        });
    }

    _removeEvent() {
        const opt = this._options;

        $win.off('resize', this._resizeHandle);
        this._$wrap.off('click', opt.item, this._clickHandle);
        if (this._$prevBtn) this._$prevBtn.off('click', this._prev);
        if (this._$nextBtn) this._$nextBtn.off('click', this._next);

        this._moveEvent && this._moveEvent.destroy();
        this._moveEvent = null;
    }

    _resizeHandle = () => {
        const winWidth = $win.width();
        if (this._winWidth !== winWidth) {
            this._winWidth = winWidth;
            this._resize();
        }
    };

    _update(index) {
        const opt = this._options;

        this._$realItem = this._$wrap.find(opt.item);
        this._realItemCount = this._$realItem.length;
        this._realMaxIndex = this._realItemCount - 1;
        this._curIndex = this._isValidIndex(index, true) ? index : this._getDefaultAlignIndex();

        this._resize();
    }

    _resize = () => {
        if (!$.contains(document, this._$container[0])) return; // 如果容器被移出文档，则不向下执行

        this._wrapStop();

        const opt = this._options;

        this._$realItem.detach();
        this._$wrap.empty().append(this._$realItem);
        this._$item = this._$realItem;

        hideAction(this._$wrap, function() {
            const sizeApiName = this._sizeApiName.substr(0, 1).toUpperCase() + this._sizeApiName.substr(1);
            this._containerSize = this._$container['inner' + sizeApiName]();

            // 根据对齐方向，计算容器 padding 内边缘距离对齐点的偏移量
            this._alignOffset = this._containerSize * this._posRatio + this._options.alignOffset;

            this._itemPos = this._realItemPos = []; // 每个子元素相对于包裹层（滑动层）的位置数组
            this._itemSize = this._realItemSize = []; // 每个子元素的平均宽度或者每个子元素的宽度数组

            const wrapStartPos = this._getStartPos(this._$wrap);
            this._$realItem.each((i, item) => {
                const $item = $(item);
                const itemStartPos = this._getStartPos($item);
                // 这里使用负值
                // 表示每个子元素左上角 margin 外边缘与容器左上角 padding 内边缘对齐时，包裹层（滑动层）的位置
                // 也相当于保存每个子元素距离容器左边缘的位置
                this._realItemPos.push(itemStartPos - wrapStartPos);
                this._realItemSize.push($item['outer' + sizeApiName](true));
            });
        }, this);

        const before = this._realItemPos[0];
        const after = this._realItemPos[this._realMaxIndex] + this._realItemSize[this._realMaxIndex];

        this._itemTotalSize = this._realItemTotalSize = after - before;
        this._maxPos = -before;

        if (opt.loop) {
            // 为了兼容翻页效果，克隆后的大小必须大于三个容器大小
            this._clone(this._containerSize * 2 + this._realItemTotalSize);
            this._itemCount = this._$item.length;
            this._maxIndex = this._itemCount - 1;
            this._minPos = this._containerSize - (this._itemPos[this._maxIndex] + this._itemSize[this._maxIndex]);

            this._loopTotalTime = opt.frameRate * (this._maxPos - this._minPos); // 完成一次卷屏需要的总毫秒数
        } else {
            this._itemCount = this._realItemCount;
            this._maxIndex = this._realMaxIndex;
            this._minPos = this._containerSize - after;

            if (this._posRatio === 0) {
                this._minPos = Math.min(this._minPos, this._maxPos);
            } else if (this._posRatio === 1) {
                this._maxPos = Math.max(this._minPos, this._maxPos);
            } else if (this._minPos > this._maxPos) {
                this._minPos = this._maxPos = (this._minPos - this._maxPos) * .5
            }
        }

        this._inited = true;
        this._slide(this._calcPos(this._getValidIndex(this._curIndex, true)), 0);
    };

    // 迭代克隆，直到总达到能够达到无缝循环的大小
    _clone(targetSize, cloneCount) {
        cloneCount = cloneCount || 0;
        if (this._itemTotalSize < targetSize) {
            this._$item = this._$item.add(this._$realItem.clone().appendTo(this._$wrap));
            this._itemTotalSize += this._realItemTotalSize;
            cloneCount++;
            this._itemPos = this._itemPos.concat(this._realItemPos.map(pos => pos + cloneCount * this._realItemTotalSize));
            this._itemSize = this._itemSize.concat(this._realItemSize);
            this._clone(targetSize, cloneCount);
        }
    }

    _startHandle = (e, data) => {
        this._linkDisabled = false;
        this._moveStartPos = this._directionY ? data.y : data.x;
        this._$wrap.css('cursor', '-webkit-grabbing');
    };

    _moveHandle = (e, data) => {
        const directionY = this._directionY,
            posProp = directionY ? 'y' : 'x';

        if (directionY ? !this._moveVertical : !this._moveHorizontal) {
            if (directionY ? this._moveVertical = data.dxStepAbs <= data.dyStepAbs : this._moveHorizontal = data.dxStepAbs >= data.dyStepAbs) {
                this._wrapStop();
                this._moveWrapStartPos = parseInt(this._$wrap.css(this._posProp));
                // 移动时防止<a>链接被点击到
                this._linkDisabled = true;
            } else {
                // 重置起始点
                this._moveStartPos = data[posProp];
            }
        }

        if (directionY ? !this._moveVertical : !this._moveHorizontal) return;

        e.preventDefault();
        this._moveDistance = data[posProp] - this._moveStartPos;
        this._moveTo(this._getValidPos(this._moveWrapStartPos + this._moveDistance));
    };

    _endHandle = (e, data) => {
        const opt = this._options,
            directionY = this._directionY;

        this._$wrap.css('cursor', '-webkit-grab');

        if (directionY ? !this._moveVertical : !this._moveHorizontal) return;
        this._moveVertical = false;
        this._moveHorizontal = false;

        const swipePrev = directionY ? data.swipeBottom : data.swipeRight;
        const swipeNext = directionY ? data.swipeTop : data.swipeLeft;

        if (swipePrev || swipeNext) {
            // 判断为轻扫动作
            if (swipePrev) this._prev();
            else if (swipeNext) this._next();
        } else {
            // 判断为一般拖动结束
            const moveDirection = this._moveDistance > 0;
            const curIndex = this._calcIndex(this._curPos, moveDirection);

            if (opt.autoAdsorb) {
                this._goto(this._calcAdsorb(curIndex, this._curPos, moveDirection));
            } else {
                this._curIndex = curIndex;
                this._slide(this._curPos);
            }
        }
    };

    _clickHandle = (e) => {
        if (this._linkDisabled) return e.preventDefault();

        const index = this._$item.index(e.currentTarget);
        this._setActive(index);
        this._options.onClick.call(this, {
            index: this._getValidIndex(index, true),
            dom: e.currentTarget
        });
    };

    // 跳转到前一页
    _prev = () => {
        if (this._gotoPrev) return;
        this._gotoPrev = true;
        this._gotoNext = false;

        this._wrapStop();

        const opt = this._options,
            curPos = this._curPos,
            itemPos = this._itemPos,
            itemSize = this._itemSize,
            posRatio = this._posRatio,
            containerSize = this._containerSize;

        let referencePos = -curPos, // 容器左边缘
            prevPos, pos, size, index;

        // 前一页中最后一个元素为当前页中第一个已经显示超过一半的子元素
        // 这里首先找出参考位置右侧的第一个显示超过一半的子元素索引
        for (let i = 0; i <= this._maxIndex; i++) {
            pos = itemPos[i];
            size = itemSize[i];

            // 左边缘或者中心超过参考位置
            if (pos > referencePos || (pos + size * .5) > referencePos) {
                index = i;
                prevPos = -(pos + size) + containerSize;
                // 根据该索引对应子元素的位置以及对齐方式重新计算参考位置
                referencePos = pos + size - containerSize * (1 - posRatio);
                break;
            }
        }

        if (opt.loop && prevPos > this._maxPos) {
            // 前一页位置如果大于最大位置，说明回退的位置超出了范围
            referencePos -= this._adjustByTargetPos(prevPos);
            index = this._maxIndex;
        }

        // 根据对齐方式找出新参考位置右侧的第一个元素
        for (let i = 0; i <= index; i++) {
            pos = itemPos[i];
            size = itemSize[i];

            if (pos + size * posRatio >= referencePos) {
                index = i;
                break;
            }
        }

        if (index === this._curIndex) index--;

        if (!opt.loop) index = this._limitIndex(index);

        this._goto(index, null, () => this._gotoPrev = false);
    };

    // 跳转到下一页
    _next = () => {
        if (this._gotoNext) return;
        this._gotoNext = true;
        this._gotoPrev = false;

        this._wrapStop();

        const opt = this._options,
            curPos = this._curPos,
            itemPos = this._itemPos,
            itemSize = this._itemSize,
            posRatio = this._posRatio,
            containerSize = this._containerSize;

        let referencePos = containerSize - curPos, // 容器右边缘
            nextPos, pos, size, index;

        // 后一页中第一个元素为当前页中最后一个已经显示超过一半的子元素
        // 找出参考位置左侧的第一个显示超过一半的子元素索引
        for (let i = this._maxIndex; i >= 0; i--) {
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

        if (this._options.loop && nextPos < this._minPos) {
            // 下一页位置如果小于最小位置，说明前进的位置超出了范围
            referencePos -= this._adjustByTargetPos(nextPos);
            index = 0;
        }

        // 根据对齐方式找出新参考位置左侧的第一个元素
        for (let i = this._maxIndex; i >= index; i--) {
            pos = itemPos[i];
            size = itemSize[i];

            if (pos + size * posRatio <= referencePos) {
                index = i;
                break;
            }
        }

        if (index === this._curIndex) index++;

        if (!opt.loop) index = this._limitIndex(index);

        this._goto(index, null, () => this._gotoNext = false);
    };

    _moveTo(pos, duration, callback) {
        if (isNumber(duration) && duration > 0) {
            this._$wrap.animate(
                { [this._posProp]: pos },
                duration,
                () => {
                    this._curPos = pos;
                    callback && callback.call(this);
                }
            );
        } else {
            this._$wrap.css({
                [this._posProp]: pos
            });
            this._curPos = pos;
            callback && callback.call(this);
        }
    }

    _goto(index, duration, callback) {
        this._curIndex = this._getValidIndex(index);
        this._slide(this._calcPos(this._curIndex), duration, callback);
    }

    _slide(pos, duration, callback) {
        this._wrapStop();

        const opt = this._options;

        let targetPos;

        if (opt.loop) {
            // 在循环模式下，如果目标位置与原始目标位置不同，则需要做位置补差
            targetPos = pos + this._adjustByTargetPos(pos);
        } else {
            targetPos = this._limitPos(pos);
        }

        const realIndex = this._getValidIndex(this._curIndex, true),
            realItem = this._$realItem[realIndex],
            itemOffset = this._itemPos[this._curIndex] + targetPos;

        opt.onSlide.call(this, {
            offset: itemOffset,
            index: realIndex,
            dom: realItem
        });

        this._moveTo(
            targetPos,
            this._curPos === targetPos ? 0 : isNumber(duration) ? duration : opt.duration,
            () => {
                callback && callback.call(this);
                this._updateBtn();

                opt.onMoveEnd.call(this, {
                    offset: itemOffset,
                    index: realIndex,
                    dom: realItem
                });

                this._isRun && this._rollStart();
            }
        );
    }

    // 刷新前后按钮的隐藏与显示
    _updateBtn() {
        if (this._options.loop) return;

        const btnDisableClass = this._options.btnDisableClass;

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
        } else { // 如果没有可滑动的距离
            if (this._$prevBtn) this._$prevBtn.addClass(btnDisableClass);
            if (this._$nextBtn) this._$nextBtn.addClass(btnDisableClass);
        }
    }

    // 设置指定索引对应的子元素为焦点
    _setActive(index) {
        const activeClass = this._options.activeClass;
        this._$item.removeClass(activeClass);

        if (index >= 0) {
            index = this._getValidIndex(index, true);
            this._$item.each((i, item) => {
                if (i % this._realItemCount === index) {
                    $(item).addClass(activeClass);
                }
            });
        }
    }

    // 获取元素左上角 margin 外边缘相对于窗口的位置
    _getStartPos($elem) {
        return $elem[0].getBoundingClientRect()[this._startPropName] - parseFloat($elem.css('margin-' + this._startPropName))
    }

    // 根据索引计算包裹层（滑动层）的位置
    _calcPos(index) {
        return this._alignOffset - (this._itemPos[index] + this._itemSize[index] * this._posRatio);
    }

    // 根据包裹层（滑动层）位置计算最接近对齐点的索引
    // direction 为正数表示向结束位置移动，为负数表示向起始位置移动
    _calcIndex(curPos, direction) {
        const itemPos = this._itemPos, itemSize = this._itemSize;
        const curPosOffset = this._alignOffset - curPos; // 计算包裹层（滑动层）左上角到对齐点的偏移量
        let before, prevAfter, halfInterval;

        // 遍历所有子元素的位置，找出最接近对齐点子元素
        for (let i = 0, l = this._itemCount; i < l; i++) {
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
    _calcAdsorb(curIndex, curPos, direction) {
        const curPosOffset = this._alignOffset - curPos; // 计算包裹层（滑动层）左上角到对齐点的偏移量
        const nextRatio = direction ? 1 - this._options.nextRatio : this._options.nextRatio;
        const referencePos = this._itemPos[curIndex] + this._itemSize[curIndex] * nextRatio;
        const posRatio = this._posRatio;

        if (direction) {
            curIndex = referencePos >= curPosOffset ? // 向右拉时超过参考线
                curIndex - (posRatio !== 0 ? 1 : 0) :
                curIndex + (posRatio !== 0 ? 0 : 1);
        } else if (!direction) {
            curIndex = referencePos <= curPosOffset ? // 向左拉时超过参考线
                curIndex + (posRatio !== 1 ? 1 : 0) :
                curIndex - (posRatio !== 1 ? 0 : 1);
        }

        return this._options.loop ? this._getValidIndex(curIndex) : this._limitIndex(curIndex);
    }

    // 获取默认靠近对齐点的子元素索引
    _getDefaultAlignIndex() {
        return this._posRatio === 1 ? this._realMaxIndex : this._posRatio === .5 ? Math.round(this._realMaxIndex * .5) : 0;
    }

    // 判断是否为一个有效的索引
    _isValidIndex(index, real) {
        const maxIndex = real ? this._realMaxIndex : this._maxIndex;
        return isNumber(index) && index >= 0 && index <= maxIndex;
    }

    // 获取有效的索引
    _getValidIndex(index, real) {
        const itemCount = real ? this._realItemCount : this._itemCount;
        return (index % itemCount + itemCount) % itemCount;
    }

    // 限制索引，防止其超出范围
    _limitIndex(index, real) {
        const maxIndex = real ? this._realMaxIndex : this._maxIndex;
        return Math.max(0, Math.min(maxIndex, index));
    }

    // 限制位置，防止其超出范围
    _limitPos(curPos) {
        return Math.max(this._minPos, Math.min(this._maxPos, curPos));
    }

    // 判断当前位置是否超出范围，并返回合理的值
    _getValidPos(curPos) {
        const minPos = this._minPos;
        const maxPos = this._maxPos;

        if (this._options.loop) {
            const itemTotalSize = this._realItemTotalSize;
            if (curPos < minPos) curPos = minPos + itemTotalSize + (curPos - minPos) % itemTotalSize;
            else if (curPos > maxPos) curPos = maxPos - itemTotalSize + (curPos - maxPos) % itemTotalSize;
        } else {
            // 超出限制后减速滑动
            if (curPos < minPos) curPos = minPos + (curPos - minPos) * 0.3;
            else if (curPos > maxPos) curPos = maxPos + (curPos - maxPos) * 0.3;
        }

        return curPos;
    }

    // 根据目标位置，调整当前位置，并返回调整的差值
    _adjustByTargetPos(targetPos) {
        const difference = this._getValidPos(targetPos) - targetPos;

        if (difference) {
            this._moveTo(this._curPos + difference);
            this._curIndex = this._calcIndex(this._curPos, targetPos - this._curPos > 0);
        }

        return difference;
    }

    // 获取当前位置
    _getCurPos() {
        return parseFloat(this._$wrap.css(this._posProp));
    }

    // 根据当前位置，获取到达最大位置的剩余时间
    _getRemainTime() {
        return (this._curPos - this._minPos) / (this._maxPos - this._minPos) * this._loopTotalTime;
    }

    // 开始滚动
    _rollStart() {
        if (!this._options.loop || !this._inited || !this._isRun || this._isRoll) return;
        this._isRoll = true;

        if (this._curPos <= this._minPos) {
            this._moveTo(this._curPos + this._realItemTotalSize);
        }

        this._$wrap.animate(
            { [this._posProp]: this._minPos },
            this._getRemainTime(),
            'linear',
            () => {
                this._wrapStop();
                this._rollStart();
            }
        );
    }

    _wrapStop() {
        this._isRoll = false;
        this._gotoPrev = false;
        this._gotoNext = false;
        this._$wrap.stop();
        this._curPos = this._getCurPos();
    }

    _run() {
        if (!this._options.loop || this._isRun) return;
        this._isRun = true;
        this._rollStart();
    }

    _stop() {
        if (!this._isRun) return;
        this._isRun = false;
        this._wrapStop();
    }

    _createApi = (...args) => {
        Object.values(args).forEach(arg => {
            let privateName, publicName;

            if (isString(arg)) {
                privateName = publicName = arg;
            } else if (isArray(arg)) {
                privateName = arg[0];
                publicName = arg[1];
            }

            this[publicName] = (...args) => {
                this['_' + privateName].apply(this, args);
                return this;
            };
        });
    };

    destroy = () => {
        this._$wrap.css({
            'display': '',
            'cursor': '',
        });

        this._removeEvent();

        // 清除所有属性
        Object.getOwnPropertyNames(this).forEach(prop => {
            delete self[prop];
        });

        this.__proto__ = Object.prototype;
    };
};

