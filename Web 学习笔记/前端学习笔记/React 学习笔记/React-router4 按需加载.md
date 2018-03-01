### 安装依赖模块

主要原理是使用了一个webpack的加载器 [bundle-loader](https://github.com/webpack-contrib/bundle-loader) 来处理我们需要进行分割的模块

```shell
$ npm install bundle-loader --save
```

### 创建垫片文件

创建 `lazyComponent.js`

```jsx
import React from 'react'

class Bundle extends React.Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        })
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}

export default (component) => (props) => (
    <Bundle load={component}>
        {(Component) => <Component {...props}/>}
    </Bundle>
)
```

### 在路由配置对象中使用

通过垫片文件导出的 `lazyComponent` 函数，创建一个异步加载组件。

```js
import lazyComponent from './lazyComponent';

const Home = {
    path: '/',
    component: lazyComponent(require('bundle-loader?lazy!@/views/Home'))
};
```

### 原理猜想

`require('bundle-loader?lazy!@/views/Home')` 返回一个函数，也就是垫片文件中的 Bundle 组件的 `props.load` ，这个函数接收一个 `callback` 作为参数，会将异步加载完成的组件作为参数传入，然后通过 `this.setState` 将加载到的组件赋值给 `this.state.mod` ，最后通过  Bundle 组件的 `render()` 函数将加载完成的组件渲染出来。