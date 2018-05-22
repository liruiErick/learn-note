# 关于 Post meta

WordPress 中所有的插件保存的自定义数据都储存在数据控中的 `wp_postmeta` 表中，如果需要使用代码获取这些数据，则首先要确定数据在表中的 `meta_key` 字段的值是什么，然后使用 `get_post_meta()` 函数来获取对应 `meta_value` 的值。

使用方法：

```php
get_post_meta( $post_id, $key, $single );
```

`$post_id` - 表示当前页面的 Post Id。

`$key` - (可选) 表示数据在 `wp_postmeta` 表中的 `meta_key` 字段的值。如果为空，则返回所有与该 Post 有关的  `meta_key` 字段值与 `meta_value` 字段值组成的对象。

`$single` - (可选) 如果是 true，则函数返回的是 `meta_value` 的值，否则返回一个数组。

例如：

```php
// 获取 All in One SEO Pack 插件定义的 title
get_post_meta( get_post()->ID, '_aioseop_title', true );
```



