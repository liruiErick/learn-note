# 安装 Vue 语法高亮

使用 sublime 的包管理器安转 Vue Syntax Highlight 插件

安装好以后可以看到以下目录已经生成：

/Users/baijunjie/Library/Application\ Support/Sublime\ Text\ 3/Cache/Vue\ Syntax\ Highlight

在文件夹中会有两个语言文件：

vue.tmLanguage.*



# 创建文件模板

使用 sublime 的包管理器安转 SublimeTmpl 插件

安装好后使用 sublime 依次打开：

`Preferences` ->`Browse Packages` -> `SublimeTmpl` -> `templates`

可以看到里面是默认的模板文件，根据这里的模板在以下目录创建用户自定义模板 `vue.tmpl`

`Preferences` ->`Browse Packages` -> `User` ->  `SublimeTmpl` -> `templates`

模板创建好后，使用 sublime 依次打开：

`Preferences` -> `Package Settings` -> `SublimeTmpl` -> `Settings - Menu`

在 `caption` 为 `New File (SublimeTmpl)` 的 `children` 数组中添加如下类型键值对：

```
{
    "caption": "Vue",
    "command": "sublime_tmpl",
    "args": {
      	"type": "vue"
    }
},
```

这样，就可以在 `File` -> `New File(SublimeTmpl)` 选项中添加创建 Vue 文件了。

但是这时创建的 Vue 文件没有默认的 `.vue` 扩展名，也没有语法高亮。因此还需要最后一步。

使用 sublime 依次打开：

`Preferences` -> `Package Settings` -> `SublimeTmpl` -> `Settings - Default`

按照这里面的格式，在 `Settings - User` 中添加：

```
"vue": {
	"syntax": "Packages/Vue Syntax Highlight/vue.tmLanguage",
	"extension": "vue"
}
```

这里的 `syntax` 就是模板所需要的语言文件，这里将路径指向之前安装的 Vue 语法高亮插件中的语言文件路径即可。

Ok 大功告成！



