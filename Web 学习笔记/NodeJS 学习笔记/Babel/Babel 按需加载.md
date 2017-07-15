## Babel 按需加载

#### 一般情况下引入UI框架

全部引入

```js
// Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

// Mint UI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);
```

按需引入

```js
// Element UI
import Button from 'element-ui/lib/button'
import 'element-ui/lib/theme-default/button.css';
Vue.component(Button.name, Button)

// Mint UI
import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';
Vue.component(Button.name, Button);

// Antd UI
import Button from 'antd/lib/button';
import 'antd/lib/button/style';
```

#### 按需加载

可以看出，上面两种引入方法都要单独引入相应的 CSS 文件。这很不方便，尤其当你使用按需引入的方法引入多个组件时。为了避免这个问题，Vue 项目可以使用 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) 插件，React 项目可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件。

安装

```shell
$ npm i babel-plugin-component -D
$ npm i babel-plugin-import -D
or
$ yarn add babel-plugin-component -D
$ yarn add babel-plugin-import -D
```

然后在 .babelrc 中配置它：

```
{
  "plugins": [
    ["component", [
      { "libraryName": "mint-ui", "style": true }
      { "libraryName": "element-ui", "styleLibraryName": "theme-default" }
    ]]
    ["import", [
      { "libraryName": "antd", "style": true }
    ]]
  ]
}
```

#### 引入简化

全部引入

```js
// Element UI
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// Mint UI
import MintUI from 'mint-ui';
Vue.use(MintUI);
```

按需引入

```js
// Element UI
import { Button } from 'element-ui'
Vue.component(Button.name, Button)

// Mint UI
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

// Antd UI
import { Button } from 'antd';
```

#### 解读

其实插件一共做了两件事：

- 将结构导入转换为直接导入
- 自动引入相应的 CSS 文件

例如：

```js
import { Button } from 'antd'; // 实际上，结构导入仍然会加载全部库文件
```

转换为

```js
var Button = require('antd/lib/button'); // 只有直接导入才会被按需加载
require('antd/lib/button/style');
```

