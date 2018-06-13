<?php
// 参考地址
// https://codex.wordpress.org/zh-cn:Class_Reference/wpdb

// 在同一张表中（例如：wp_postmeta），查询 'key2' 字段值为 'value2' 的 post 的 key1 字段的值的集合，并且去重
$sql = "
    SELECT DISTINCT key1.meta_value
    FROM $wpdb->postmeta key1, $wpdb->postmeta key2
    WHERE key1.post_id = key2.post_id
        and key1.meta_key = %s
        and key2.meta_key = %s
        and key2.meta_value = %s
    ORDER BY key1.meta_value ASC
";

// 防止SQL查询注入攻击
$sql = $wpdb->prepare($sql, 'key1', 'key2', 'value2');

// 查询出结果后，获取唯一的一列 meta_value 的数组
$results = $wpdb->get_col($sql);
?>