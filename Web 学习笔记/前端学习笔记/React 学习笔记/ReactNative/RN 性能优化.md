#### VirtualizedList 组件优化

```
initialNumToRender 默认值是 10，导致一开始渲染的列表只到屏幕的一半
另外创建和销毁 ListItem 的性能消耗巨大，因此这里设置为数据长度，阻止列表频繁的创建和销毁子项
实际应用中，极大的提高了列表显示性能
requestAnimationFrame(() => {
    this.setState({
        initialNumToRender: data.length,
    });
});
```





#### 使用 setNativeProps()

对于一些原生列表组件，如 `ScrollView`，如果想在不重新渲染整个列表的情况下，更新它的某个属性值，可以使用 `setNativeProps()`。它几乎支持所有该原生组件 API 中定义的属性。


