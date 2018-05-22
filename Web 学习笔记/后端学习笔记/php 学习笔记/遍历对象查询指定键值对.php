<?php

/**
 * @param $search {string} 要查询的字符串
 * @param $arr    {array}  数组
 * @param $exact  {bool}   是否精准匹配
 * @param $parent {string} 父级名称
 */
function search($search, $arr, $exact = false, $parent = '') {
    foreach ($arr as $key => $value) {
        $path = $parent ? $parent." => ".$key : $key;
        if (is_array($value)) {
            if ($value !== $arr) search($search, $value, $exact, $path);
        } else if (is_string($value)) {
            if (($exact && $value === $search)
                || (!$exact && stristr($value, $search))) echo "\r\n\r\n".$path." => ".$value;

        }
    }
}

search('blog', $GLOBALS);

?>