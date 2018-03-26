<?php

if (!function_exists('bjj_pagination')) {
    function bjj_pagination($query, $print = false) {
        $cur_page = $query['paged'];
        $page_size = $query['posts_per_page'];

        $query['posts_per_page'] = -1;
        $total_posts = (new WP_Query($query))->post_count;

        if (empty($cur_page)) $cur_page = 1;
        $prev = $cur_page - 1;
        $next = $cur_page + 1;

        $range = 4; // 当前页前后分别显示多少个连接
        $show_link_count = ($range * 2) + 1;
        $page_count = ceil($total_posts / $page_size);

        $pagination = '';

        if ($page_count > 1) {
            $show_all_link = $show_link_count >= $page_count;
            $show_first = !$show_all_link && $cur_page > 2 && $cur_page - $range > 1; // 是否显示首页
            $show_last = !$show_all_link && $cur_page < $page_count - 1 && $cur_page + $range < $page_count; // 是否显示尾页
            $show_prev = $cur_page > 1; // 是否显示上一页
            $show_next = $cur_page < $page_count; // 是否显示下一页


            $pagination .= '<div class="pagination">';
            if ($show_first) $pagination .= '<a href="'.get_pagenum_link(1).'" class="btn-hollow small">«</a>';
            if ($show_prev) $pagination .= '<a href="'.get_pagenum_link($prev).'" class="btn-hollow small">'.htmlspecialchars('<').'</a>';

            for ($i = 1; $i <= $page_count; $i++) {
                if ($show_all_link || $i >= $cur_page - $range && $i <= $cur_page + $range) {
                    $pagination .= ($cur_page == $i) ?
                        '<span class="btn-hollow small active">'.$i.'</span>' :
                        '<a href="'.get_pagenum_link($i).'" class="btn-hollow small">'.$i.'</a>';
                }
            }

            if ($show_next) $pagination .= '<a href="'.get_pagenum_link($next).'" class="btn-hollow small">'.htmlspecialchars('>').'</a>';
            if ($show_last) $pagination .= '<a href="'.get_pagenum_link($page_count).'" class="btn-hollow small">»</a>';
            $pagination .= '</div>';
        }

        if ($print) {
            echo $pagination;
        } else {
            return array(
                'pagination' => $pagination,
                'total_posts' => $total_posts,
                'page_count' => $page_count,
                'page_size' => $page_size,
                'cur_page' => $cur_page,
            );
        }
    }
}

// 例如：
global $paged;
$args = array(
    'post_type'      => $post_type,
    'posts_per_page' => 24,
    'paged'          => empty($paged) ? 1 : $paged,
    'post_status'    => 'publish',
    'meta_key'       => $post_type.'_buy_time',
    'meta_type'      => 'DATE',
    'orderby'        => 'meta_value',
    'order'          => 'DESC',
    'meta_query'     => $meta_query
);
$query = new WP_Query($args);
$posts = $query->posts;

bjj_pagination($query->query);

