# 自定义Title

### 手动生成 Title

通用 Title 代码

```php
<?php if (is_home()) {
    bloginfo('name'); echo '｜'; bloginfo('description');
} elseif (is_category()) {
    single_cat_title(); echo '｜'; bloginfo('name');
} elseif (is_single() || is_page()) {
    single_post_title(); echo '｜'; bloginfo('name');
} elseif (is_search()) {
    echo 'Search results'; echo '｜'; bloginfo('name');
} elseif (is_404()) {
    echo 'Page not found!';
} else {
    wp_title('',true);
} ?>
```



### 自动生成 Title

启用 WordPress 的 `title-tag`，这样 WordPress 会自动在 `<head>` 中添加 `<title>`

```php
add_action('after_setup_theme', function() {
    add_theme_support( 'title-tag' );
});
```

通过 `document_title_parts` Hook 修改 Title，回调中 `$title` 参数是一个对象。

```php
add_filter('document_title_parts', function($title) {
    if ( is_home() && isset( $title['tagline'] ) ) unset( $title['tagline'] );
    return $title;
});
```

`$title` 对象的结构如下：

```
Array
(
    [title] => バッグ·鞄買取実績
    [page] => 第5页
    [site] =>
)
```

通过 `pre_get_document_title` Hook 修改 Title，回调中 `$title` 参数是一个字符串。

```php
add_filter('pre_get_document_title', function($title) {
    if (is_home()) {
        return get_bloginfo('name').'｜'.get_bloginfo('description');
    } elseif (is_category()) {
        return single_cat_title('', false).'｜'.get_bloginfo('name');
    } elseif (is_single() || is_page()) {
        return single_post_title('', false).'｜'.get_bloginfo('name');
    } elseif (is_search()) {
        return 'Search results'.'｜'.get_bloginfo('name');
    } elseif (is_404()) {
        return 'Page not found!';
    }
    return $title;
});
```

