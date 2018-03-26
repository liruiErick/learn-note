## 获取页面的 Post 对象

```php
<?php
get_post(); // 获取当前页面的 Post 对象
get_post($post_id); // 获取指定 ID 的 Post 对象
get_page_by_path('shop-ginza'); // 获取指定路径对应的 Post 对象
?>
```



## Post 数据结构

```

WP_Post Object (
    [ID] => 33
    [post_author] => 1
    [post_date] => 2018-03-15 23:48:27
    [post_date_gmt] => 2018-03-15 15:48:27
    [post_content] => 
    [post_title] => 联系我们
    [post_excerpt] => 
    [post_status] => publish
    [comment_status] => closed
    [ping_status] => closed
    [post_password] => 
    [post_name] => contact
    [to_ping] => 
    [pinged] => 
    [post_modified] => 2018-03-17 11:39:00
    [post_modified_gmt] => 2018-03-17 03:39:00
    [post_content_filtered] => 
    [post_parent] => 0
    [guid] => http://localhost/test/wordpress/?page_id=33
    [menu_order] => 0
    [post_type] => page
    [post_mime_type] => 
    [comment_count] => 0
    [filter] => raw
)
```

