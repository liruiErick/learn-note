## WP_Query 所有参数详细注释

```php
<?php
/**
* WordPress 查询综合参考
* 编译：luetkemj - luetkemj.com
*
* 官方文档: http://codex.wordpress.org/Class_Reference/WP_Query
* 源代码: http://core.trac.wordpress.org/browser/tags/3.5.1/wp-includes/query.php
*/

$args = array(

/**
* 作者参数 - 显示某些作者发表的文章
*/
'author' => '1,2,3,' //(整数) - 作者ID [使用减号 (-) 排除某个作者 ID， 如： 'author' => '-1,-2,-3,']
'author_name' => 'luetkemj', //(字符串) - 使用 'user_nicename' 用户昵称，(不是名称)

/**
* 分类参数 - 显示某个分类里面的文章
*/
'cat' => 5,//(整数) - 分类id
'category_name' => 'staff', 'news', //(字符串) - 分类别名(不是名称)
'category__and' => array( 2, 6 ), //(数组) - 分类id
'category__in' => array( 2, 6 ), //(数组) - 分类id
'category__not_in' => array( 2, 6 ), //(数组) - 分类id

/**
* 标签参数 - 显示含有某些标签的文章
*/
'tag' => 'cooking', //(字符串) - 标签别名
'tag_id' => 5, //(整数) -标签id
'tag__and' => array( 2, 6), //(数组) - 标签id
'tag__in' => array( 2, 6), //(数组) - 标签id
'tag__not_in' => array( 2, 6), //(数组) - 标签id
'tag_slug__and' => array( 'red', 'blue'), //(数组) - 标签别名
'tag_slug__in' => array( 'red', 'blue'), //(数组) - 标签别名

/**
* 自定义分类法参数 - 显示某些自定义分类法里面的文章
* 重要提示: tax_query 使用多维数组
* 这种查询结构允许我们查询多个自定义分类法
*/
'tax_query' => array( //(数组) - 使用自定义分类法查询参数 (3.1及以后版本可用).
  'relation' => 'AND', //(字符串) - 可用的值有 'AND' 或 'OR' 和 SQL 的 JOIN 作用是相同的
  array(
    'taxonomy' => 'color', //(字符串) - 自定义分类法
    'field' => 'slug', //(字符串) - 使用别名还是分类作为查询条件 ('id' 或 'slug')
    'terms' => array( 'red', 'blue' ), //(整数/字符串/数组) - 自定义分类法分类条目
    'include_children' => true, //(布尔值) - 是否包含自分类，默认为真
    'operator' => 'IN' //(字符串) - 测试条件，可用值为 'IN', 'NOT IN', 'AND'.
  ),
  array(
    'taxonomy' => 'actor',
    'field' => 'id',
    'terms' => array( 103, 115, 206 ),
    'include_children' => false,
    'operator' => 'NOT IN'
   )
),

/**
* 文章 & 页面参数- 基于文章或页面参数显示文章
*/
'p' => 1, //(整数) - 文章id
'name' => 'hello-world', //(字符串) - 文章别名
'page_id' => 1, //(整数) - 页面id
'pagename' => 'sample-page', //(字符串) - 页面别名
'pagename' => 'contact_us/canada', //(字符串) - 用斜杠‘/’分割的父页面别名/子页面别名来显示子页面
'post_parent' => 1, //(整数) - 页面id，只返回子页面，只对有子页面的页面有效
'post__in' => array(1,2,3), //(数组) - 需要显示的文章的id
'post__not_in' => array(1,2,3), //(数组) - 需要排除的文章的id
//注意：不能在同一个查询里同时使用 'post__in' 和 'post__not_in'

/**
* 文章类型 & 状态参数 - 显示某些文章类型里面的文章
*/
'post_type' => array( //(字符串/ 数组) - 文章类型，根据文章类型获取文章，默认为'post'
    'post', // - 文章
    'page', // - 页面
    'revision', // - 文章版本
    'attachment', // - 附件，默认 WP_Query 设置了发布状态为 'post_status'=>'published', 但是附件默认为 'post_status'=>'inherit'，所以你需要设置状态为 'inherit' 或'any'.
    'my-post-type', // - 自定义文章类型 (例如：movies)
),
'post_status' => array( //(字符串 / 数组) - 使用文章状态，根据文章状态获取文章，默认为 'publish'
    'publish', // - 已发布的文章或页面
    'pending', // -等待复审的文章
    'draft', // - 处于草稿状态的文章
    'auto-draft', // - 自动保存为草稿的文章
    'future', // - 定时发布的文章
    'private', // - 未登录用户不能查看的私有文章
    'inherit', // - 版本. 具体参考 get_children.
    'trash' // - 回收站中的文章 (2.9和以后的版本可用).
),

//注意：The 'any' 关键字可以用在 post_type 和 post_status 查询，但是不能在数组中使用
'post_type' => 'any', // - 获取所有文章类型里面的文章，除了版本和文章类型参数'exclude_from_search'设置为true的文章类型
'post_status' => 'any', // - 获取处于所有文章状态的文章，除了版本和文章类型参数'exclude_from_search'设置为true的文章类型

/**
* 分页参数
*/
'posts_per_page' => 10, //(整数) - 每页显示的文章数量 (2.1和以后的版本可用)， 使用'posts_per_page'=-1 显示所有文章，如果查询处于订阅源中，WordPress用 'posts_per_rss' 选项覆盖了这里的设置，需要使用这个限制，尝试使用 'post_limits' 过滤器，或使用 'pre_option_posts_per_rss'过滤器返回 -1
'posts_per_archive_page' => 10, //(整数) - n每页显示的文章数量 - 只在存档页面使用，在存档页面和搜索结果页面覆盖了 showposts 和 posts_per_page 参数
'nopaging' => false, //(布尔值) - 在一页显示所有文章或使用分页，默认值为 'false', 使用分页
'paged' => get_query_var('paged'), //(整数) - 页数，分页时显示第几页
//注意：使用 get_query_var('page'); 如果查询在设置为首页的页面模版中工作，查询参数 'page' 拥有文章分页或内容中使用 <!--nextpage--> 快捷代码的分页。

/**
* 偏移参数
*/
'offset' => 3, //(int) - 跳过的文章数量

/**
* 排序 & 排序方式参数 - 对获取的文章进行排序
*/
'order' => 'DESC', //(字符串) - 设置 'order_by' 参数升序或降序排列. 默认为'DESC'.
//Possible Values:
//'ASC' - 升序排列，从小到大 (1, 2, 3; a, b, c).
//'DESC' - 降序排列，从大到小 (3, 2, 1; c, b, a).
'orderby' => 'date', //(字符串) - 排序依据. 默认为 'date'.
//可用的参数有://
//'none' - 不排序 (2.8和以后的版本可用)
//'ID' - 根据ID排序，注意ID是大写的
//'author' - 根据作者排序
//'title' - 根据标题排序
//'date' - 根据发表时间排序
//'modified' - 根据最后修改时间排序
//'parent' - 根据父页面排序
//'rand' - 随机排序
//'comment_count' - 根据评论数量排序 (2.9和以后的版本可用).
//'menu_order' - 根据页面序号排序. 通常在页面中使用 (编辑页面时有一个页面序号的字段) 和附件 ( 插入 / 上传媒体相册对话框中的数字), 但是不能对文章类型 'menu_order' 使用数字值 (默认都为 0).
//'meta_value' - 注意'meta_key=keyname' 必须也出现在查询中. 注意排序是按照字母表顺序进行的。(如：words),但是数字排序可能会有问题 (如：1, 3, 34, 4, 56, 6, etc, 而不是你希望的：1, 3, 4, 6, 34, 56)。
//'meta_value_num' - 根据数字meta值排序 (2.8和以后的版本中可用). 同时需要注意'meta_key=keyname' 也要在查询中声明。这个值和上面说明的 'meta_value' 一样，只不过值允许使用数字排序。
//'title menu_order' - 同时使用 menu_order 和 title 排序 更多信息请参考：http://wordpress.stackexchange.com/questions/2969/order-by-menu-order-and-title
//'post__in' - 使用 post__in 数组中制定的 ID 顺序 (3.5以后的版本中可用).

/**
* 置顶文章参数 - 显示或忽略置顶文章
*/
'ignore_sticky_posts' => false, //(布尔值) - 是否忽略置顶文章，默认为假不忽略. 在返回文章的开头忽略/排除置顶文章,但是置顶文章还是会在自然查询中列出。
//注意：关于置顶文章的更多信息，请参考：http://codex.wordpress.org/Class_Reference/WP_Query#Sticky_Post_Parameters

/**
* 时间参数 - 显示某个时间段内的文章
*/
'year' => 2012, //(int) - 4 个数字的年份 (如：2011)
'monthnum' => 3, //(int) - 月份数字 (从 1 到 12)
'w' => 25, //(int) - 一年中的第几周 (从 0 到 53)， 使用 MySQL WEEK 命令，此模式和"start_of_week" 选项相关
'day' => 17, //(int) - 月中的天数 (从 1 到 31)
'hour' => 13, //(int) - 小时 (从 0 到 23).
'minute' => 19, //(int) - 分钟 (从 0 到 60).
'second' => 30, //(int) - 秒 (从 0 到 60).

/**
* 自定义字段参数 - 显示拥有某个自定义字段的文章
*/
'meta_key' => 'key', //(字符串) - 自定义字段的键
'meta_value' => 'value', //(字符串) - 自定义字段的值
'meta_value_num' => 10, //(数字) - 自定义字段的值
'meta_compare' => '=', //(字符串) - 测试'meta_value'的操作。可用的值有'!=', '>', '>=', '<', or ='. 默认为 '='.
'meta_query' => array( //(数组) - 自定义字段参数 (3.1和以后的版本可用).
array(
    'key' => 'color', //(字符串) - 自定义字段的键
    'value' => 'blue' //(字符串/数组) - 自定义字段的值 (注意：数组的支持仅限于一个比较值： 'IN', 'NOT IN', 'BETWEEN', or 'NOT BETWEEN')
    'type' => 'CHAR', //(字符串) -自定义字段类型，可用的值有：'NUMERIC', 'BINARY', 'CHAR', 'DATE', 'DATETIME', 'DECIMAL', 'SIGNED', 'TIME', 'UNSIGNED'，默认为    'CHAR'
    'compare' => '=' //(字符串) - 测试的操作，可用的值有： '=', '!=', '>', '>=', '<', '<=', 'LIKE', 'NOT LIKE', 'IN', 'NOT IN', 'BETWEEN', 'NOT BETWEEN'. 默认为：'='
),
array(
    'key' => 'price',
    'value' => array( 1,200 ),
    'compare' => 'NOT LIKE'
)

/**
* 权限参数 - 显示已发布文章，如果用户有合适的权限，同样现实私有文章:
*/
'perm' => 'readable' //(字符串) 可用的值有：'readable', 'editable' (可能还有其他可用的值我没有测试)

/**
* 与缓存相关的参数
*/
'no_found_rows' => false, //(布尔值) 默认为假，为了分页，WordPress 在大多数查询中使用 SQL_CALC_FOUND_ROWS 查询， 即使你不需要分页，通过设置这个参数为真，我们告诉了了WordPress不要查询数据总行数，从而降低数据库负载，如果设置了这个参数为真，分页将不工作，更多信息请参考：http://flavio.tordini.org/speed-up-wordpress-get_posts-and-query_posts-functions
'cache_results' => true, //(布尔值) 默认为真
'update_post_term_cache' => true, //(布尔值) 默认为真
'update_post_meta_cache' => true, //(布尔值) 默认为真
//注意：缓存是个好东西，通常不建议设为假，更多信息请参考：http://codex.wordpresorg/Class_Reference/WP_Query#Permission_Parameters

/**
* 搜索参数
*/
's' => $s, //(字符串) - 传递搜索变量到搜索功能，更多信息请参考： http://www.wprecipes.com/how-to-display-the-number-of-results-in-wordpress-search
'exact' => true //(布尔值) - 只匹配完整的titles/posts的信号 - 默认值为假，更多信息请参考：https://gist.github.com/2023628#gistcomment-285118
'sentence' => true //(布尔值) - 进行短语搜索的信号-默认值为假，更多信息请参考：https://gist.github.com/2023628#gistcomment-285118

/**
* 文章字段参数
*/
//关于文章字段参数信息，请参考http://codex.wordpress.org/Class_Reference/WP_Query#Post_Field_Parameters

/**
* 过滤器
*/
//关于过滤器的更多信息，请参考：http://codex.wordpress.org/Class_Reference/WP_Query#Filters

);

$the_query = new WP_Query( $args );

// 循环开始
if ( $the_query->have_posts() ) :
    while ( $the_query->have_posts() ) : $the_query->the_post();
        // 输出内容
    endwhile;
endif;

// 重置文章数据
wp_reset_postdata();

?>
```


## 返回结果实例

```
WP_Query Object
(
    [query] => Array
        (
            [post_type] => bag
            [posts_per_page] => 32
            [post_status] => publish
            [meta_key] => bag_buy_time
            [meta_type] => DATE
            [orderby] => meta_value
            [order] => DESC
            [meta_query] => Array
                (
                    [relation] => AND
                )

        )

    [query_vars] => Array
        (
            [post_type] => bag
            [posts_per_page] => 32
            [post_status] => publish
            [meta_key] => bag_buy_time
            [meta_type] => DATE
            [orderby] => meta_value
            [order] => DESC
            [meta_query] => Array
                (
                    [relation] => AND
                )

            [error] => 
            [m] => 
            [p] => 0
            [post_parent] => 
            [subpost] => 
            [subpost_id] => 
            [attachment] => 
            [attachment_id] => 0
            [name] => 
            [static] => 
            [pagename] => 
            [page_id] => 0
            [second] => 
            [minute] => 
            [hour] => 
            [day] => 0
            [monthnum] => 0
            [year] => 0
            [w] => 0
            [category_name] => 
            [tag] => 
            [cat] => 
            [tag_id] => 
            [author] => 
            [author_name] => 
            [feed] => 
            [tb] => 
            [paged] => 0
            [meta_value] => 
            [preview] => 
            [s] => 
            [sentence] => 
            [title] => 
            [fields] => 
            [menu_order] => 
            [embed] => 
            [category__in] => Array
                (
                )

            [category__not_in] => Array
                (
                )

            [category__and] => Array
                (
                )

            [post__in] => Array
                (
                )

            [post__not_in] => Array
                (
                )

            [post_name__in] => Array
                (
                )

            [tag__in] => Array
                (
                )

            [tag__not_in] => Array
                (
                )

            [tag__and] => Array
                (
                )

            [tag_slug__in] => Array
                (
                )

            [tag_slug__and] => Array
                (
                )

            [post_parent__in] => Array
                (
                )

            [post_parent__not_in] => Array
                (
                )

            [author__in] => Array
                (
                )

            [author__not_in] => Array
                (
                )

            [ignore_sticky_posts] => 
            [suppress_filters] => 
            [cache_results] => 1
            [update_post_term_cache] => 1
            [lazy_load_term_meta] => 1
            [update_post_meta_cache] => 1
            [nopaging] => 
            [comments_per_page] => 50
            [no_found_rows] => 
        )

    [tax_query] => WP_Tax_Query Object
        (
            [queries] => Array
                (
                )

            [relation] => AND
            [table_aliases:protected] => Array
                (
                )

            [queried_terms] => Array
                (
                )

            [primary_table] => wpf8cd45posts
            [primary_id_column] => ID
        )

    [meta_query] => WP_Meta_Query Object
        (
            [queries] => Array
                (
                    [0] => Array
                        (
                            [key] => bag_buy_time
                            [type] => DATE
                        )

                    [relation] => OR
                )

            [relation] => AND
            [meta_table] => wpf8cd45postmeta
            [meta_id_column] => post_id
            [primary_table] => wpf8cd45posts
            [primary_id_column] => ID
            [table_aliases:protected] => Array
                (
                    [0] => wpf8cd45postmeta
                )

            [clauses:protected] => Array
                (
                    [wpf8cd45postmeta] => Array
                        (
                            [key] => bag_buy_time
                            [type] => DATE
                            [compare] => =
                            [alias] => wpf8cd45postmeta
                            [cast] => DATE
                        )

                )

            [has_or_relation:protected] => 
        )

    [date_query] => 
    [request] => SELECT SQL_CALC_FOUND_ROWS  wpf8cd45posts.ID FROM wpf8cd45posts  INNER JOIN wpf8cd45postmeta ON ( wpf8cd45posts.ID = wpf8cd45postmeta.post_id ) WHERE 1=1  AND ( 
  wpf8cd45postmeta.meta_key = 'bag_buy_time'
) AND wpf8cd45posts.post_type = 'bag' AND ((wpf8cd45posts.post_status = 'publish')) GROUP BY wpf8cd45posts.ID ORDER BY CAST(wpf8cd45postmeta.meta_value AS DATE) DESC LIMIT 0, 32
    [posts] => Array
        (
            [0] => WP_Post Object
                (
                    [ID] => 77
                    [post_author] => 1
                    [post_date] => 2018-03-05 13:03:40
                    [post_date_gmt] => 2018-03-05 04:03:40
                    [post_content] => 
                    [post_title] => 【エルメス高価買取実施中】ケリー28 スペシャルオーダー　エプソン　ローズアザレ【2018.2.28】　
                    [post_excerpt] => 
                    [post_status] => publish
                    [comment_status] => closed
                    [ping_status] => closed
                    [post_password] => 
                    [post_name] => %e3%82%b1%e3%83%aa%e3%83%bc28-%e3%82%b9%e3%83%9a%e3%82%b7%e3%83%a3%e3%83%ab%e3%82%aa%e3%83%bc%e3%83%80%e3%83%bc%e3%80%80%e3%82%a8%e3%83%97%e3%82%bd%e3%83%b3%e3%80%80%e3%83%ad%e3%83%bc%e3%82%ba
                    [to_ping] => 
                    [pinged] => 
                    [post_modified] => 2018-03-12 12:02:10
                    [post_modified_gmt] => 2018-03-12 03:02:10
                    [post_content_filtered] => 
                    [post_parent] => 0
                    [guid] => http://asubrand.sakura.ne.jp/xiaoma-test/?post_type=bag&#038;p=77
                    [menu_order] => 0
                    [post_type] => bag
                    [post_mime_type] => 
                    [comment_count] => 0
                    [filter] => raw
                )

            [1] => WP_Post Object
                (
                    [ID] => 29
                    [post_author] => 1
                    [post_date] => 2018-03-05 10:52:34
                    [post_date_gmt] => 2018-03-05 01:52:34
                    [post_content] => 
                    [post_title] => ★バーキン30 エプソン クレ 1,460,000円
                    [post_excerpt] => 
                    [post_status] => publish
                    [comment_status] => closed
                    [ping_status] => closed
                    [post_password] => 
                    [post_name] => birkin-1
                    [to_ping] => 
                    [pinged] => 
                    [post_modified] => 2018-03-12 15:05:00
                    [post_modified_gmt] => 2018-03-12 06:05:00
                    [post_content_filtered] => 
                    [post_parent] => 0
                    [guid] => http://asubrand.sakura.ne.jp/xiaoma-test/?post_type=bag&#038;p=29
                    [menu_order] => 0
                    [post_type] => bag
                    [post_mime_type] => 
                    [comment_count] => 0
                    [filter] => raw
                )

            ...

        )

    [post_count] => 32
    [current_post] => -1
    [in_the_loop] => 
    [post] => WP_Post Object
        (
            [ID] => 77
            [post_author] => 1
            [post_date] => 2018-03-05 13:03:40
            [post_date_gmt] => 2018-03-05 04:03:40
            [post_content] => 
            [post_title] => 【エルメス高価買取実施中】ケリー28 スペシャルオーダー　エプソン　ローズアザレ【2018.2.28】　
            [post_excerpt] => 
            [post_status] => publish
            [comment_status] => closed
            [ping_status] => closed
            [post_password] => 
            [post_name] => %e3%82%b1%e3%83%aa%e3%83%bc28-%e3%82%b9%e3%83%9a%e3%82%b7%e3%83%a3%e3%83%ab%e3%82%aa%e3%83%bc%e3%83%80%e3%83%bc%e3%80%80%e3%82%a8%e3%83%97%e3%82%bd%e3%83%b3%e3%80%80%e3%83%ad%e3%83%bc%e3%82%ba
            [to_ping] => 
            [pinged] => 
            [post_modified] => 2018-03-12 12:02:10
            [post_modified_gmt] => 2018-03-12 03:02:10
            [post_content_filtered] => 
            [post_parent] => 0
            [guid] => http://asubrand.sakura.ne.jp/xiaoma-test/?post_type=bag&#038;p=77
            [menu_order] => 0
            [post_type] => bag
            [post_mime_type] => 
            [comment_count] => 0
            [filter] => raw
        )

    [comment_count] => 0
    [current_comment] => -1
    [found_posts] => 32
    [max_num_pages] => 1
    [max_num_comment_pages] => 0
    [is_single] => 
    [is_preview] => 
    [is_page] => 
    [is_archive] => 1
    [is_date] => 
    [is_year] => 
    [is_month] => 
    [is_day] => 
    [is_time] => 
    [is_author] => 
    [is_category] => 
    [is_tag] => 
    [is_tax] => 
    [is_search] => 
    [is_feed] => 
    [is_comment_feed] => 
    [is_trackback] => 
    [is_home] => 
    [is_404] => 
    [is_embed] => 
    [is_paged] => 
    [is_admin] => 
    [is_attachment] => 
    [is_singular] => 
    [is_robots] => 
    [is_posts_page] => 
    [is_post_type_archive] => 1
    [query_vars_hash:WP_Query:private] => 6e073d1711a061cdfc507962beb3e74b
    [query_vars_changed:WP_Query:private] => 
    [thumbnails_cached] => 
    [stopwords:WP_Query:private] => 
    [compat_fields:WP_Query:private] => Array
        (
            [0] => query_vars_hash
            [1] => query_vars_changed
        )

    [compat_methods:WP_Query:private] => Array
        (
            [0] => init_query_flags
            [1] => parse_tax_query
        )

)
```

