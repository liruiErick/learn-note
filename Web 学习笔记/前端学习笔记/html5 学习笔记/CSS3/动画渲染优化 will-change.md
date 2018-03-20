# 动画渲染优化  will-change

当我们通过某些行为（点击、移动或滚动）触发页面进行大面积绘制的时候，浏览器往往是没有准备的，只能被动使用 CPU 去计算与重绘，由于没有事先准备，应付渲染够呛，于是掉帧、卡顿。

CSS 属性 `will-change` 为 Web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作交给 GPU 来完成，使页面的反应更为快速灵敏。


## 语法

```css
will-change
```

功能: 提前通知浏览器元素将要做什么动画，让浏览器提前准备合适的优化设置

值: `auto` | `<custom-ident>` | `<animateable-feature>`

初始值: `auto`

兼容性: IE13+、chrome49+、safari9.1+、IOS9.3+、Android52+

`auto` 表示没有特别指定哪些属性会变化，浏览器需要自己去猜，然后使用浏览器经常使用的一些常规方法优化

`<custom-ident>` 表示开发者希望在不久后改变指定的属性名或者使之产生动画。比方说 `animation` 的名称，计数器 `counter-reset`、`counter-increment` 定义的名称等等。

`<animateable-feature>` 表示开发者希望在不久后改变可动画的一些特征值，可以是以下值：

- `scroll-position` - 滚动条的位置

- `contents` - 元素中的内容

- `transform`, `opacity` - 变换或者透明度

- `left`、`top`、`margin` 等 - 在移动端，非 `transform`、`opacity` 属性的动画性能都是低下的，所以建议避免使用他们。

上面都是动画常用属性。如果给定的属性是缩写，则所有缩写相关属性变化都会触发。同时不能是以下这些关键字值：

`unset`、`initial`、`inherit`、`will-change`、`auto`、`scroll-position`、`contents`。

就目前而言，使用的基本上都是：

```css
.example {
    will-change: transform;
}
```

或者

```css
.example {
    will-change: transform, opacity;
}
```


## 使用

#### 使用hover

不要像下面这样直接写在默认状态中，因为 will-change 会使元素一直处于准备动画的状态，反而降低了页面性能：

```css
.example {
    will-change: transform;
    transition: transform 0.3s;
}
.example:hover {
    transform: scale(1.5);
}
```

可以让父元素 hover 的时候，声明 `will-change`，这样在元素 hover 之前，浏览器会有足够的时间进行准备

```css
.example-parent:hover .example {
    will-change: transform;
}
.example {
    transition: transform 0.3s;
}
.example:hover {
    transform: scale(1.5);
}
```

#### 使用javascript脚本

```js
var el = document.getElementById('element');

// 当鼠标移动到该元素上时给该元素设置 will-change 属性
el.addEventListener('mouseenter', hintBrowser);

// 当 CSS 动画结束后清除 will-change 属性
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // 填写在CSS动画中发生改变的CSS属性名
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}
```

#### 直接使用

但是，如果某个应用在按下键盘的时候会翻页，比如相册或者幻灯片一类，它的页面很大很复杂，此时在样式表中写上 `will-change` 是合适的。这会使浏览器提前准备好过渡动画，当键盘按下的时候就能即看到灵活轻快的动画

```css
.slide {
    will-change: transform;
}
```


## 注意事项

1、不要将will-change应用到太多元素上：浏览器已经尽力尝试去优化一切可以优化的东西了。有一些更强力的优化，如果与will-change结合在一起的话，有可能会消耗很多机器资源，如果过度使用的话，可能导致页面响应缓慢或者消耗非常多的资源

2、有节制地使用：通常，当元素恢复到初始状态时，浏览器会丢弃掉之前做的优化工作。但是如果直接在样式表中显式声明了will-change属性，则表示目标元素可能会经常变化，浏览器会将优化工作保存得比之前更久。所以最佳实践是当元素变化之前和之后通过脚本来切换will-change的值

3、不要过早应用will-change优化：如果页面在性能方面没什么问题，则不要添加will-change属性来榨取一丁点的速度。will-change的设计初衷是作为最后的优化手段，用来尝试解决现有的性能问题。它不应该被用来预防性能问题。过度使用will-change会导致大量的内存占用，并会导致更复杂的渲染过程，因为浏览器会试图准备可能存在的变化过程。这会导致更严重的性能问题

4、给它足够的工作时间：这个属性是用来让页面开发者告知浏览器哪些属性可能会变化的。然后浏览器可以选择在变化发生前提前去做一些优化工作。所以给浏览器一点时间去真正做这些优化工作是非常重要的。使用时需要尝试去找到一些方法提前一定时间获知元素可能发生的变化，然后为它加上will-change属性