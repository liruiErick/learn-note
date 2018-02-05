PHP代码不能在.css文件中运行，但是可以使用内联样式，例如：

```html
<div style="background-image: url("<?php //url ?>");">
```

要么

```html
<style>
  .class-name {
    background-image: url("<?php //url ?>");
  }
</style>
```

上面的内容在处理动态图像路径的自定义字段时非常有用。

如果图像位于主题目录中，则不需要PHP，假设图像文件夹直接位于主题文件夹下`/theme-name/images`，并且样式表为`/theme-name/style.css`，则可以将背景图像添加到css文件中，如下所示：

```css
.class-name {
  background-image: url("images/file.jpg");
}
```
