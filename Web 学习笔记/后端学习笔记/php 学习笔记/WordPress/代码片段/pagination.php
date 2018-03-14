<?php

function pagination($query_string) {
	global $posts_per_page, $paged;

	$my_query = new WP_Query($query_string.'&posts_per_page=-1');
	$total_posts = $my_query->post_count;

	if (empty($paged)) $paged = 1;
	$prev = $paged - 1;
	$next = $paged + 1;

	$range = 4; // 当前页前后分别显示多少个连接
	$show_link_count = ($range * 2) + 1;
	$page_count = ceil($total_posts / $posts_per_page);

	if ($page_count > 1) {
		$show_all_link = $show_link_count >= $page_count;
		$show_first = !$show_all_link && $paged > 2 && $paged - $range > 1; // 是否显示首页
		$show_last = !$show_all_link && $paged < $page_count - 1 && $paged + $range < $page_count; // 是否显示尾页
		$show_prev = $paged > 1; // 是否显示上一页
		$show_next = $paged < $page_count; // 是否显示下一页

		// output
		echo '<div class="pagination">';
		if ($show_first) echo '<a href="'.get_pagenum_link(1).'">首页</a>';
		if ($show_prev) echo '<a href="'.get_pagenum_link($prev).'">上一页</a>';

		for ($i = 1; $i <= $page_count; $i++) {
			if ($show_all_link || $i >= $paged - $range && $i <= $paged + $range) {
				echo ($paged == $i) ?
					'<span>'.$i.'</span>' :
					'<a href="'.get_pagenum_link($i).'>'.$i.'</a>';
			}
		}

		if ($show_next) echo '<a href="'.get_pagenum_link($next).'">下一页</a>';
		if ($show_last) echo '<a href="'.get_pagenum_link($page_count).'">尾页</a>';
		echo '</div>\n';
	}
}