# 使用方法

#### style使用内连方式

```js
style={{flex:1,borderColor:'red'}}
```

#### style包裹使用

```js
style={[styles.style1,styles.style2]}
```

#### 同时包裹样式和内连

```js
style={[styles.style1,{flex:1,borderWidth:1}]}
```

#### StyleSheet 提供了一种类似 CSS 样式表的抽象

创建一个样式表：

```js
var styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
```

使用一个样式表：

```html
<View style={styles.container}>
  <Text style={[styles.title, this.props.isActive && styles.activeTitle]} />
</View>
```

采用StyleSheet样式表的优点如下：

**从代码质量角度来分析:**

- 从render渲染方法中移除了styles样式相关代码，这样可以使代码更加容易阅读
- 通过对不同样式命名，正好也是对render方法中的组件的一种标志
- 这样的写法做到了业务和样式的分离，为后面分层开发打下了基础

**从性能角度来分析:** 

- 通过StyleSheet，我们可以通过标志的样式ID来引用，而不是每次都要创建一个新的Style对象 
- 该允许样式通过桥接在原生代码和JavaScript中传递一次，后面全部通过该id进行引用(不过现在该功能还没有实现)

# 可用样式属性

#### 边框宽度

```js
borderBottomWidth // 底部边框宽度
borderLeftWidth   // 左边边框宽度
borderRightWidth  // 右边边框宽度
borderTopWidth    // 顶部边框宽度
borderWidth       // 所有边框宽度
```

#### 边框颜色

```js
borderBottomColor
borderLeftColor
borderRightColor
borderTopColor
borderColor
```

#### 边框圆角

```js
borderTopLeftRadius
borderTopRightRadius
borderBottomLeftRadius
borderBottomRightRadius
borderRadius
```

#### 外边距

```js
marginBottom
marginLeft
marginRight
marginTop
marginVertical
marginHorizontal
margin
```

#### 内边距

```js
paddingBottom
paddingLeft
paddingRight
paddingTop
paddingVertical
paddingHorizontal
padding
```

#### 背景色

```js
backgroundColor
```

#### 宽高

```js
width 
minWidth
maxWidth
height
minHeight
maxHeight
```

#### 定位

```js
position // enum('absolute','relative')
top
right
bottom
left
zIndex
```

在 React Native 中 `absolute` 定位的元素永远相对于父级定位，即父级不需要设置 `relative`。

#### 字体相关属性(Text)

```js
color // 字体颜色
fontFamily // 字体族
fontSize // 字体大小
fontStyle // 字体样式，正常，倾斜等，值为 enum('normal', 'italic')
fontWeight // 字体粗细，值为 enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
letterSpacing // 字符间隔
lineHeight // 行高，只能设置具体像素值
textAlign // 字体对齐方式，值为 enum("auto", 'left', 'right', 'center', 'justify')
textDecorationLine // 貌似没效果，字体修饰，上划线，下划线，删除线，无修饰，值为enum("none", 'underline', 'line-through', 'underline line-through')
textDecorationStyle // enum("solid", 'double', 'dotted', 'dashed') 貌似没效果，修饰的线的类型
textDecorationColor // 貌似没效果，修饰的线的颜色
writingDirection // enum("auto", 'ltr', 'rtl')
```

#### 显示属性

```js
resizeMode // enum('cover', 'contain', 'stretch')
overflow // enum('visible', 'hidden') 超出部分是否显示，hidden为隐藏
tintColor // 着色，rgb字符串类型
opacity // 透明度
```

#### 图像变换

```js
transform?: [{matrix: array}, {perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}] 
```

#### Flex布局相关

```js
flexDirection
flexWrap
justifyContent
alignItems
flex
alignSelf
```

`flexDirection` 属性定义了父视图中的子元素沿横轴或侧轴方片的排列方式。

> flexDirection enum('row',  'column', 'row-reverse', 'column-reverse')

- row: 从左向右依次排列
- row-reverse: 从右向左依次排列
- column(default): 默认的排列方式，从上向下排列
- column-reverse: 从下向上排列

`flexWrap` 属性定义了子元素在父视图内是否允许多行排列，默认为nowrap。

> flexWrap enum('wrap',  'nowrap')

- nowrap flex的元素只排列在一行上，可能导致溢出。
- wrap flex的元素在一行排列不下时，就进行多行排列。

`justifyContent` 设置子元素与排列方向同方向的对齐方式，默认为flex-start。

> justifyContent enum('flex-start',  'flex-end',  'center',  'space-between',  'space-around')

- flex-start(default): 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
- flex-end: 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
- center: 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- space-between: 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
- space-around: 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

`alignItems` 设置子元素与排列方向垂直方向的对齐方式，默认为stretch。

> alignItems enum('flex-start',  'flex-end',  'center',  'stretch')

- flex-start: 元素向侧轴起点对齐。
- flex-end: 元素向侧轴终点对齐。
- center: 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
- stretch: 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。

**子视图属性**

`flex`  表示父容器分配给自己的占位比，默认为0。

`alignSelf` 表示自己相对于父容器的对齐方式。

> alignSelf enum('auto',  'flex-start',  'flex-end',  'center',  'stretch')

- auto(default): 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。
- stretch: 元素被拉伸以适应容器。
- center: 元素位于容器的中心。
- flex-start: 元素位于容器的开头。
- flex-end: 元素位于容器的结尾。

#### 阴影

```js
shadowColor
shadowOffset
shadowOpacity
shadowRadius
elevation // 安卓专用
```

在 Android 原生开发中，Android SDK 为了给视图增加阴影而为我们提供了 `elevation` 属性，顾名思义就是 “仰角”。通过为视图增加 “仰角” 方式来提供阴影，仰角越大，阴影越大。(然而并不能控制阴影的 offset......)

React Native 也沿袭了这个属性，在绝大多数情况下可以使用 elevation 为视图增加阴影。