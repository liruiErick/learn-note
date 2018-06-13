## 删除头部 wp_head() 多余代码

如果你有查看过你的WordPress博客的“查看源代码”的话，你会发现头部的html代码非常多，而且是密密麻麻，有些像meta name="generator"的代码其实是没有什么用处的。如何清理他们？下面就来说说这个问题，文章来源于某篇翻译的国外文章，原文转载译文：头部的冗余代码非常之多，也一度不知道这些代码是有什么作用、怎么来的和怎么删除。现整理相关内容如下：

### 一、完整的wordpress头部清理代码

```php
<?php
// 移除顶部多余信息
remove_action('wp_head', 'rsd_link'); // 移除 head 中的 rel="EditURI"
remove_action('wp_head', 'wlwmanifest_link'); // 移除 head 中的 rel="wlwmanifest"

remove_action('wp_head', 'index_rel_link'); // 当前文章的索引
remove_action('wp_head', 'start_post_rel_link'); // 开始篇 
remove_action('wp_head', 'parent_post_rel_link'); // 父篇
remove_action('wp_head', 'adjacent_posts_rel_link'); // 上、下篇
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head'); // rel=pre

remove_action('wp_head', 'feed_links', 2); // 文章和评论 feed 
remove_action('wp_head', 'feed_links_extra', 3);// 额外的 feed，例如 category, tag 页

// <link rel='https://api.w.org/' href='http://localhost/test/wordpress/index.php/wp-json/' />
remove_action('wp_head','rest_output_link_wp_head');

// <script type='text/javascript' src='http://localhost/test/wordpress/wp-includes/js/wp-embed.min.js?ver=4.9.4'></script>
remove_action('wp_head','wp_oembed_add_host_js');

remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action('wp_head', 'wp_generator'); // WordPress 版本信息
remove_action('wp_head', 'wp_shortlink_wp_head'); // rel=shortlink
remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
?>
```

把这段代码插入到主题的functions.php文件下，可以清除WordPress头部大量冗余信息。如有必要，可以看看这些代码的具体意义，以免删除某些你想保留的功能。

### 二、wp_head 函数

`wp_head()`  是 WordPress 的一个非常重要的函数，基本上所有的主题在 `header.php` 这个文件里都会使用到这个函数，而且很多插件为了在 header 上加点东西也会用到 `wp_head()`，比如 SEO 的相关插件。但是在 `wp_head()` 出现的这个位置，会增加很多并不常用的代码。可以通过 `remove_action()` 移除这些代码。

### 三、remove_action 函数

> 函数原型： remove_action( $tag, $function_to_add, $priority );

该函数移除一个附属于指定动作 hook 的函数。该方法可用来移除附属于特定动作 hook 的默认函数，并可能用其它函数取而代之。参见 `remove_filter()`, `add_action()` and `add_filter()`。

重要： 添加 hook 时的 `$function_to_remove`  和 `$priority` 参数要能够相匹配，这样才可以移除 hook。该原则也适用于过滤器和动作。移除失败时不进行警告提示。

> 参数
> $tag（字符串）（必需）将要被删除的函数所连接到的动作hook。默认值：None
> $function_to_remove（回调）（必需） 将要被删除函数的名称默认值：None
> $priority（整数）（可选）函数优先级（在函数最初连接时定义）默认值：10
> 返回值（布尔值）函数是否被移除。
> Ttue 函数被成功移除
> False 函数未被移除

### 四、移除 WordPress 版本

在 head 区域，可以看到如下代码：

```html
<meta name="generator" content="WordPress 3.3.2" />
```

这是隐性显示的 WordPress 版本信息，默认添加。可以被黑客利用，攻击特定版本的 WordPress 漏洞。清除代码：

```php
remove_action('wp_head', 'wp_generator');
```

### 五、移除离线编辑器开放接口

WordPress 自动添加两行离线编辑器的开放接口

```html
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://example.com/xmlrpc.php?rsd" /> 
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://example.com/wp-includes/wlwmanifest.xml" />
```

其中 RSD 是一个广义的接口，wlwmanifest 是针对微软 Live Writer 编辑器的。如果你不需要离线编辑，可移除之。即便你需要使用离线编辑器，大部分时候也不需要这两行代码。Live Writer 自己知道它们。保留这两行代码可能会留有安全隐患。清除代码：

```php
remove_action('wp_head', 'rsd_link'); 
remove_action('wp_head', 'wlwmanifest_link');
```

### 六、移除前后文、第一篇文章、主页  meta 信息

WordPress 把前后文、第一篇文章和主页链接全放在 meta 中。我认为于 SEO 帮助不大，反使得头部信息巨大。移除代码：

```php
remove_action('wp_head', 'index_rel_link'); // 当前文章的索引
remove_action('wp_head', 'start_post_rel_link'); // 开始篇 
remove_action('wp_head', 'parent_post_rel_link'); // 父篇
remove_action('wp_head', 'adjacent_posts_rel_link'); // 上、下篇
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head'); // rel=pre
```

### 七、移除 Canonical 标记

09年2月份，Google，Yahoo 及 Microsoft 三大搜索引擎联合推出了一个旨在减少重复内容困扰的方法，这对于广大站长来说不啻是个好事情，不用再担心因为网站上有重复的内容而影响到网站页面的权重了。

造成重复内容的原因有很多，最常见的便是多个url地址指向了同一个页面，比如：WordPress平台下的一篇日志页面，包括了文章及评论内容。每个评论 都可以有个固定的链接地址，，如果有多个评论的话，则每条评论的链接都类似于上述格式，只是 commentID 号有所不同，这些链接其实都是指向同一篇文 章的。蜘蛛来爬时，便会依次爬行一遍，这篇文章下如有10条评论，则爬了10次相同的页面文章，相当于做了多次重复的工作，严重影响了抓取的效率，及耗费了带宽。

重复内容造成的结果必然是蜘蛛不愿意来爬，不同的url指向同一个页面，也会影响到该页面的权重。通过 canonical 标签，能有效的避免这类问题。

> 需要注意两点：
> 允许指向不同的子域名，不允许指向其他域名
> canonical 属性可以被传递
> 即 A 页面声明 B 为权威链接，B 声明 C 为权威网页，那么 C 就是 A 和 B 共同的首选权威版本

如果你的 WP 版本在 2.9 之前，需要通过插件（上面已经提到）或者手工 Hack 主题的 `header.php` 文件来使得博客支持。

```html
<link rel="canonical" href="<?php get_permalink()?>" />
```

在 WordPress 2.9 发布之后，WordPress 已经默认支持这一标签了，我们无需做任何动作，主题就支持这一标签。这对于文章固定链接的更改很有帮助，可以增加对搜索引擎的友好度。但是如果你觉得这个标签对你无用，也可以移除之：

```php
remove_action('wp_head', 'rel_canonical');
```

### 八、移除feed

HTML 中通过来指定博客 feed。可以被浏览器检测到，然后被读者订阅。

如果你不想添加 feed，或者想使用烧制的 feed（如 FeedSky 或者 Feedburner 烧制的 feed），可以移除之。

```php
remove_action('wp_head', 'feed_links', 2); // 文章和评论 feed 
remove_action('wp_head', 'feed_links_extra', 3); // 分类等 feed
```

如果用的烧制的 feed，然后还可以再手动添加 feed 地址。