<?php

// 移除 url 中的参数
if (!function_exists('bjj_remove_url_params')) {
    function bjj_remove_url_params($url) {
        return preg_replace('/[#?].*$/', '', $url);
    }
}

// 获取 google map 链接（使用地址）
if (!function_exists('bjj_get_google_map_link')) {
    function bjj_get_google_map_link($address) {
        return 'https://maps.google.com/maps/place/'.$address;
    }
}

// 获取 google map 链接（使用经纬度）
if (!function_exists('bjj_get_google_map_link')) {
    function bjj_get_google_map_link($lat, $lng) {
        return 'https://maps.google.de/maps?q='.$lat.','.$lng.'&z=15';
    }
}

// 查询指定的自定义字段的不同值的集合
// 例如：
// 查询所有 bag_model == birkin 的 post，将他们的 bag_size 的不同值组成的数组返回
// bjj_find_field_value_set('bag_size', 'bag_model', 'birkin');
if (!function_exists('bjj_find_field_value_set')) {
    function bjj_find_field_value_set($key1, $key2 = '', $value2 = '') {
        global $wpdb;
        $sql = "
            SELECT DISTINCT key1.meta_value
            FROM $wpdb->postmeta key1
        ";

        $key2_exist = !empty($key2) && !empty($value2);

        if ($key2_exist) {
            $sql .= "
                , $wpdb->postmeta key2
            ";
        }

        $sql .= "
            WHERE key1.meta_key = %s
        ";

        if ($key2_exist) {
            $sql .= "
                and key1.post_id = key2.post_id
                and key2.meta_key = %s
                and key2.meta_value = %s
            ";
        }

        $sql .= "ORDER BY key1.meta_value ASC";
        $sql = $wpdb->prepare($sql, $key1, $key2, $value2);

        return $wpdb->get_col($sql);
    }
}



