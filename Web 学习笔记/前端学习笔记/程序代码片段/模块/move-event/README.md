# 移动事件

#### 创建移动事件

```js
var moveEvent = new MoveEvent({
    obj: this._$wrap, // 移动事件的绑定对象
    holder: this, // 事件回调回调moveEvent的持有者，即this指向的对象。如果未指定，则默认为当前触发移动事件的目标对象
    start: this._moveStartHandler, // 移动开始事件回调，将包含事件信息的data对象作为第二个参数传入
    move: this._movingHandler, // 移动中事件回调，将包含事件信息的data对象作为第二个参数传入
    end: this._moveEndHandler // 移动结束事件回调，将包含事件信息的data对象作为第二个参数传入
});
```

注意，如果 `start` 返回值为 `false`，将会取消之后的移动和结束事件

```
// 事件回调中有两个参数
// 第一个是原生 event 事件对象
// 第二个是 data 事件数据对象
// data 属性值包括：
rect: null, // 移动对象的矩形对象

xStart: 0, // 相对于窗口的移动起始X坐标
yStart: 0, // 相对于窗口的移动起始Y坐标
xLocalStart: 0, // 相对于事件对象的移动起始X坐标
yLocalStart: 0, // 相对于事件对象的移动起始Y坐标

x: 0, // 相对于窗口的当前X坐标
y: 0, // 相对于窗口的当前Y坐标
xLocal: 0, // 相对于事件对象的当前X坐标
yLocal: 0, // 相对于事件对象的当前Y坐标

dx: 0, // 从移动开始到当前的X轴移动距离差
dy: 0, // 从移动开始到当前的Y轴移动距离差
dxAbs: 0, // 从移动开始到当前的X轴移动距离差的绝对值
dyAbs: 0, // 从移动开始到当前的Y轴移动距离差的绝对值

dxLocal: 0, // 从移动开始到当前相对于事件对象的X轴移动距离差
dyLocal: 0, // 从移动开始到当前相对于事件对象的Y轴移动距离差
dxLocalAbs: 0, // 从移动开始到当前相对于事件对象的X轴移动距离差的绝对值
dyLocalAbs: 0, // 从移动开始到当前相对于事件对象的Y轴移动距离差的绝对值

dxStep: 0, // 当前较上一步的X轴移动距离差
dyStep: 0, // 当前较上一步的Y轴移动距离差
dxStepAbs: 0, // 当前较上一步的X轴移动距离差的绝对值
dyStepAbs: 0, // 当前较上一步的Y轴移动距离差的绝对值

swipeLeft: false, // 是否构成向左清扫
swipeRight: false, // 是否构成向右清扫
swipeTop: false, // 是否构成向上清扫
swipeBottom: false, // 是否构成向下清扫
swipe: false, // 是否构成清扫

startTime: 0, // 开始移动时的时间
dragTime: 0, // 当前较开始移动时的时间差
stepTime: 0 // 当前较上一步的时间差
```

#### API

```js
moveEvent.open(); // 打开移动事件，即重新注册开始移动的事件监听

moveEvent.close(); // 关闭移动事件，即移除开始移动的事件监听（但本次移动进行中的事件仍可继续）

moveEvent.stop(); // 停止移动事件，即移除正在移动与移动结束的事件监听（但仍然可以进行下一次移动）

moveEvent.remove(); // 移除移动事件，即关闭并停止移动事件
```





