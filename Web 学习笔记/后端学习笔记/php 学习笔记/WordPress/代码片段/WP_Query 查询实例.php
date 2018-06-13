<?php
// 根据分类名称查询（不能够用于自定义分类 taxonomy）
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'category_name'  => 'bag-birkin' // 分类 slug，查询多个用英文“,”隔开
    // 'category__in'  => array('121', '122') // 查询包含多个分类 id 的 post
);
$query = new WP_Query($args);
$posts = $query->posts;
?>


<?php
// 根据自定义分类名称查询（用于自定义分类 taxonomy）
$args = array(
    'post_type'      => 'post',
    'posts_per_page' => -1,
    'post_status'    => 'publish',

    // key 为注册的自定义分类 taxonomy 类型
    // value 分类 slug，查询多个用英文“,”隔开
    'buy-record-category'  => 'bag'

    // 上面的方法虽然可以使用，但在 v3.1 版本中已不被推荐
    // 推荐使用 'tax_query' 参数来查询
    'tax_query' => array(
        array(
            'taxonomy' => 'buy-record-category',
            'field' => 'slug',
            'terms' => 'bag'
        )
    )
);
$query = new WP_Query($args);
$posts = $query->posts;
?>


<?php
// 根据自定义的 key value 查询
$args = array(
    'post_type'      => 'bag',
    'posts_per_page' => 10,
    'post_status'    => 'publish',
    'meta_key'       => 'bag_size',
    'meta_value'     => '25cm',
);
$query = new WP_Query($args);
$posts = $query->posts;
?>


<?php
// 根据时间范围查找，并按指定值由大到小排序
$args = array(
    'post_type'      => 'bag',
    'posts_per_page' => 10,
    'post_status'    => 'publish',
    'meta_key'       => 'bag_price',
    'orderby'        => 'meta_value_num',
    'order'          => 'DESC',
    'meta_query' => array(
        array(
            'key'     => 'bag_buy_time',
            'value'   => array(date('Y-m-d', strtotime("-1 week")), date('Y-m-d')), // 过去一周
            'type'    => 'DATE',
            'compare' => 'BETWEEN',
        ),
    ),
);
$query = new WP_Query($args);
$posts = $query->posts;
?>

<?php
// 根据页面使用的模板类型查询，并按日期排序
$args = array(
    'post_type'      => 'page',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
    'meta_key'       => '_wp_page_template',
    'meta_value'     => 'views/shop-detail/index.php',
    'orderby'        => 'date',
    'order'          => 'DESC'
);
$query = new WP_Query($args);
$posts = $query->posts;
?>
