<?php

// log
if (!function_exists('bjj_log')) {
    function bjj_log(...$args) {
        foreach ($args as $arg) {
            echo '<br/>===========================<br/>';

            if (is_array($arg) || is_object($arg)) {
                print_r($arg);
            } else {
                echo $arg;
            }
        }
    }
}

// 去掉参数值尾部可能存在的斜杠
if (!function_exists('bjj_get_url_param')) {
    function bjj_get_url_param($key) {
        $value = $_GET[$key];
        if (!empty($value)) $value = preg_replace('/\/$/', '', $value);
        return $value;
    }
}

// 移除 url 中的参数
if (!function_exists('bjj_remove_url_query')) {
    function bjj_remove_url_query($url) {
        return preg_replace('/[#?].*$/', '', $url);
    }
}

// 为 url 删除一个指定的参数（针对 #038; 问题）
if (!function_exists('bjj_remove_query_arg')) {
    function bjj_remove_query_arg($url, $key) {
        $url = preg_replace('/(&)(#038;)?/', '$1', $url);
        $url = preg_replace('/(.*)(\?|&)' . $key . '=[^&]+?(&)(.*)/i', '$1$2$4', $url . '&');
        $url = substr($url, 0, -1);
        return $url;
    }
}

// 为 url 添加一个指定的参数（针对 #038; 问题）
if (!function_exists('bjj_add_query_arg')) {
    function bjj_add_query_arg($url, $key, $value) {
        $url = preg_replace('/(&)(#038;)?/', '$1', $url);
        preg_match('/(.*)(\?|&)' . $key . '=[^&]+?(&)(.*)/i', $url . '&', $match);
        if (!empty($match)) {
            $url = $match[1] . $match[2] . $key . '=' . $value . '&' . $match[4];
            $url = substr($url, 0, -1);
        } elseif (strstr($url, '?')) {
            if (preg_match('/(\?|&)$/', $url)) {
                $url .= $key . '=' . $value;
            } else {
                $url .= '&' . $key . '=' . $value;
            }
        } else {
            $url .= '?' . $key . '=' . $value;
        }
        return $url;
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

// 在头部添加样式
if (!function_exists('bjj_add_style')) {
    function bjj_add_style($paths) {
        global $style_paths;
        $style_paths = $paths;
        add_action('wp_enqueue_scripts', function() {
            global $style_paths;
            if (is_string($style_paths)) {
                wp_enqueue_style($style_paths, get_template_directory_uri() . $style_paths, null, VERSION);
            } elseif (is_array($style_paths)) {
                foreach ($style_paths as $path) {
                    wp_enqueue_style($path, get_template_directory_uri() . $path, null, VERSION);
                }
            }
        });
    }
}

// 根据自定义属性值排序
if (!function_exists('bjj_post_custom_property_sort')) {
    // $up 表示是否由小到大排序
    function bjj_post_custom_property_sort($arr, $prop, $up = false) {
        global $property, $smallToBig;
        $property = $prop;
        $smallToBig = $up;
        usort($arr, function($a, $b) {
            global $property, $smallToBig;
            $a_value = get_field($property, $a->ID);
            $b_value = get_field($property, $b->ID);
            return ($smallToBig) ? $a_value - $b_value : $b_value - $a_value;
        });
        return $arr;
    }
}

// 查询指定的自定义字段的不同值的集合
// 例如：
// 查询所有 buy_record_model == birkin 的 post，将他们的 buy_record_size 的不同值组成的数组返回
// bjj_find_field_value_set('buy-record', 'bag', 'buy_record_size', 'buy_record_model', 'birkin');
if (!function_exists('bjj_find_field_value_set')) {
    function bjj_find_field_value_set($post_type, $term_slug, $search_key, $condition_key = '', $condition_value = '') {
        global $wpdb;

        $term_exist = !empty($term_slug);
        $condition_exist = !empty($condition_key) && !empty($condition_value);

        $sql = "
            SELECT DISTINCT search_key.meta_value
            FROM $wpdb->posts posts,
                 $wpdb->postmeta search_key
        ";

        if ($term_exist) {
            $sql .= "
                , $wpdb->terms terms
                , $wpdb->term_relationships relationships
            ";
        }

        if ($condition_exist) {
            $sql .= "
                , $wpdb->postmeta condition_key
            ";
        }

        $sql .= "
            WHERE posts.post_type = %s
                and posts.ID = search_key.post_id
                and search_key.meta_key = %s
        ";
        $params = array($post_type, $search_key);

        if ($term_exist) {
            $sql .= "
                and terms.slug = %s
                and terms.term_id = relationships.term_taxonomy_id
                and posts.ID = relationships.object_id
            ";
            array_push($params, $term_slug);
        }

        if ($condition_exist) {
            $sql .= "
                and search_key.post_id = condition_key.post_id
                and condition_key.meta_key = %s
                and condition_key.meta_value = %s
            ";
            array_push($params, $condition_key, $condition_value);
        }

        $sql .= "ORDER BY search_key.meta_value ASC";
        array_unshift($params, $sql);
        $sql = call_user_func_array(array($wpdb, 'prepare'), $params);


        return $wpdb->get_col($sql);
    }
}


/**
 * 根据 slug 或 post_name 获取 post_ID
 * @param $post_name {String} slug / name
 * @return Integer
 */
if (!function_exists('bjj_get_post_by_name')) {
    function bjj_get_post_by_name($post_name) {
        global $wpdb;
        $sql = "SELECT ID FROM $wpdb->posts WHERE post_name = '" . urlencode($post_name) . "'";
        return $wpdb->get_var($sql);
    }
}
