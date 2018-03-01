#### 获取组件的target

组件的`target`属性是一个数字，是组件的唯一标识，通常组件触发的事件对象上包含这个属性。那么在事件以外，可以通过如下方法获取：

```js
import { findNodeHandle } from 'react-native';
...
findNodeHandle(this.refs[refName]); //=> 703
```



#### keyboard事件

```js
import { Keyboard } from 'react-native';
...
  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardWillHideListener.remove();
  }
```

支持的全部事件：

- `keyboardWillShow` 
- `keyboardDidShow`
- `keyboardWillHide`
- `keyboardDidHide`
- `keyboardWillChangeFrame`
- `keyboardDidChangeFrame`

**坑**

> 多行输入框获取焦点事件有一定延迟，会在 `keyboardWillShow` 事件之后才触发获取焦点事件，也是由于这个原因，在单行输入框通过键盘上的`下一项`按钮切换到多行输入框的时候会先触发`keyboardWillHide`和`keyboardDidHide`再触发`keyboardWillShow`和`keyboardDidShow`。
>
> 如果把`android:windowSoftInputMode`设置为`adjustResize`或是`adjustNothing`，则在Android上只有`keyboardDidShow`和`keyboardDidHide`事件有效。

**手动关闭键盘**

```js
Keyboard.dismiss();
// or
import dismissKeyboard from 'dismissKeyboard';
dismissKeyboard();
```



#### 让目标元素滚动到键盘上方

通常用来解决键盘遮挡住输入框的问题，最好在 `keyboardDidShow` 事件回调中执行

```js
this.refs.scrollView.scrollResponderScrollNativeHandleToKeyboard(
  this._curFocusTarget, // 目标元素的 targetID
  100, // 相对于键盘的偏移量
  true // 设置为true，则当计算的滚动值变为负数时，将其设置为0
);
```

在多行输入框中，需要在输入框的 `onContentSizeChange` 事件中也执行该方法