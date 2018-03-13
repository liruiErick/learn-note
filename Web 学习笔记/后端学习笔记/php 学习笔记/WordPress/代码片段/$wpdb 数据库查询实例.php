<?php
// 在用一张表中（例如： wp_postmeta），查询 key1 字段值相等的同一个 post_id 的 key2 字段的值，并且去重
$sql = '
SELECT DISTINCT key2.meta_value
FROM wp_postmeta as key1, wp_postmeta as key2
WHERE key1.post_id=key2.post_id
    and key1.meta_key='bag_model'
    and key1.meta_value='birkin'
    and key2.meta_key='bag_size'
';
$results = $wpdb->get_results($sql);
?>