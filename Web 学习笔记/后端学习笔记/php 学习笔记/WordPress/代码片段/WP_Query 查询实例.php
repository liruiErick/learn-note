<?php
// 根据 key value 查询
$args = array(
    'post_type'      => 'bag',
    'posts_per_page' => '10',
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
    'posts_per_page' => '10',
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
