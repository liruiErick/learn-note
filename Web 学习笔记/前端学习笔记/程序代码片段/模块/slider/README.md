# Slider

#### 创建一个 Slider 对象

```js
var slider = new Slider('#slider', {
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
});
```

默认回调

```js
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
```

#### API

```js
// 切换到前一页
slider.prev();

// 切换到下一页
slider.next();

// 刷新，并停留在索引对应的子元素上
slider.update(2);

// 设置指定项目为焦点
slider.setActive(2);

// 跳转到指定索引对应的子元素。
slider.goto(2, 400, callback);

// 开始卷屏(options.loop 必须为 true)
slider.run();

// 停止卷屏(options.loop 必须为 true)
slider.stop();

// 销毁 Slider 对象
slider.destroy();
```

