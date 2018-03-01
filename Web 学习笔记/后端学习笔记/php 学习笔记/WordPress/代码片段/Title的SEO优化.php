<title>
    <?php if (is_home()) {
        bloginfo('name'); echo ' - '; bloginfo('description');
    } elseif (is_category()) {
        single_cat_title(); echo ' - '; bloginfo('name');
    } elseif (is_single() || is_page()) {
        single_post_title();
    } elseif (is_search()) {
        echo 'Search results'; echo ' - '; bloginfo('name');
    } elseif (is_404()) {
        echo 'Page not found!';
    } else {
        wp_title('',true);
    } ?>      
</title>