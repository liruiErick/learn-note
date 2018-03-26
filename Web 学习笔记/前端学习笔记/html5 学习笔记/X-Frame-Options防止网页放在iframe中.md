# X-Frame-Options 防止网页放在 iframe 中

在使用 iframe 引用 google 地图时，发现地图并没有出现，在控制台中看到如下错误：

```
Refused to display 'https://www.google.com/maps/embed/v1/place%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20?key=AIzaSyDzbDu9GlLGw0EBT6NOfEDZgtY4ot2BlnI%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&location=46.414382,10.013988%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20&output=embed' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
```



## X-Frame-Options是什么？

X-Frame-Options是一个 HTTP 标头（header），用来告诉浏览器这个网页是否可以放在 iFrame 内。例如：

```
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
X-Frame-Options: ALLOW-FROM http://xxx.com/
```

第一个例子告诉浏览器不要（DENY）把这个网页放在iFrame内，通常的目的就是要帮助用户对抗点击劫持。

第二个例子告诉浏览器只有当架设 iFrame 的网站与发出 X-Frame-Options 的网站相同，才能显示发出 X-Frame-Options 网页的内容。

第三个例子告诉浏览器这个网页只能放在 `http://xxx.com/` 网页架设的 iFrame 内。

不指定 X-Frame-Options 的网页等同表示它可以放在任何 iFrame 内。

X-Frame-Options 可以保障你的网页不会被放在恶意网站设定的 iFrame 内，令用户成为点击劫持的受害人。

另外查了最新的资料，还可以直接通过 Meta 标签来设置，不需要放在http头部请求中了。

```html
<meta http-equiv="X-Frame-Options" content="deny">
```

两个参数：（作用与上面一致）

1. SAMEORIGIN
2. DENY