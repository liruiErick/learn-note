#### 参数

- title:`String` - 不能为空
- message:`String` - 提示消息
- buttons:`Array` - 数组中包含若干个按钮配置对象，配置参数如下：
  - text:`String` - 按钮名称
  - onPress:`Function` - 按钮点击的回调
  - style:`String` - 按钮样式，取值分别如下：
    - default - 默认值，无特殊样式
    - cancel - 按钮加粗，会被移动到最左侧或者是最下方
    - destructive - 按钮显示为红色
- options:`Object` - 选项参数如下：
  - cancelable:`Boolean` - 表示当点击弹出框外围时，是否关闭。（只有 Android 有效）
  - onDismiss:`Function` - 当点击弹出框外围时的回调。（只有 Android 有效）
- type:`String` - 弹出框的类型。取值分别如下：（此参数只有IOS有效，因此未来版本将会移除，官方推荐使用`AlertIOS.prompt()`）
  - default - 默认值，没有输入框
  - plain-text - 包含一个文本输入框
  - secure-text - 包含一个密码输入框
  - login-password - 同时包含文本输入框和密码输入框



#### 例子

```js
Alert.alert(
    options.title,
    options.msg,
    [
        { text: 'Delete', style: 'destructive' },
        { text: 'Cancel', style: 'cancel' },
        { text: T('ok'), onPress: options.callback },
    ],
    { cancelable: false }
);
```

