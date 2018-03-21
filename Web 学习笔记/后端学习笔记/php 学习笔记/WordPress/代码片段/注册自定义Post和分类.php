<?php

// 注册 post-type
if (!function_exists('bjj_register_post_type')) {
    function bjj_register_post_type($type, $name, $args = array()) {
        $labels = array(
            'name'               => sprintf(_x('%s', 'post type general name', TEXT_DOMAIN), $name),
            'singular_name'      => sprintf(_x('%s', 'post type singular title', TEXT_DOMAIN), $name),
            'add_new'            => sprintf(_x('新規追加', '%s', TEXT_DOMAIN), $name),
            'add_new_item'       => sprintf(__('新しい%sを追加', TEXT_DOMAIN), $name),
            'edit_item'          => sprintf(__('%sを編集', TEXT_DOMAIN), $name),
            'new_item'           => sprintf(__('新規%s', TEXT_DOMAIN), $name),
            'all_items'          => sprintf(__('%s一覧', TEXT_DOMAIN), $name),
            'view_item'          => sprintf(__('%sを見る', TEXT_DOMAIN), $name),
            'search_items'       => sprintf(__('%sを検索', TEXT_DOMAIN), $name),
            'not_found'          => sprintf(__('%sが見つかりません', TEXT_DOMAIN), $name),
            'not_found_in_trash' => sprintf(__('ゴミ場に%sが入っていません', TEXT_DOMAIN), $name),
            'parent_item_colon'  => sprintf(__('%s Parent', TEXT_DOMAIN), $name),
            'menu_name'          => sprintf(__('%s', TEXT_DOMAIN), $name)
        );

        register_post_type(
            $type,
            array_merge(array(
                'label'         => sprintf(__('%s', TEXT_DOMAIN), $name),
                'labels'        => $labels,
                'description'   => sprintf(__('%s入力', TEXT_DOMAIN), $name),
                'public'        => true,
                'menu_position' => 100,
                //'supports'      => array('title', 'editor', 'thumbnail'),
                'supports'      => array('title'),
                'has_archive'   => true
            ), $args)
        );
    }
}

// 注册 taxonomy
if (!function_exists('bjj_register_taxonomy')) {
    function bjj_register_taxonomy($post_type, $type, $name, $args = array()) {
        $labels = array(
            'name'              => sprintf(_x('%s', 'taxonomy general name', TEXT_DOMAIN), $name),
            'singular_name'     => sprintf(_x('%s', 'taxonomy singular title', TEXT_DOMAIN), $name),
            'search_items'      => sprintf(__('%sを検索', TEXT_DOMAIN), $name),
            'all_items'         => sprintf(__('%s一覧', TEXT_DOMAIN), $this->plural),
            'parent_item'       => sprintf(__('Parent %s', TEXT_DOMAIN), $name),
            'parent_item_colon' => sprintf(__('Parent %s:', TEXT_DOMAIN), $name),
            'edit_item'         => sprintf(__('%sを編集', TEXT_DOMAIN) , $name),
            'update_item'       => sprintf(__('Update %s', TEXT_DOMAIN), $name),
            'add_new_item'      => sprintf(__('新しい%sを追加', TEXT_DOMAIN), $name),
            'new_item_name'     => sprintf(__('New %s Name', TEXT_DOMAIN), $name),
            'menu_name'         => sprintf(__('%s', TEXT_DOMAIN), $name)
        );

        register_taxonomy(
            $type,
            $post_type,
            array_merge(array(
                'label'         => sprintf(__('%s', TEXT_DOMAIN), $name),
                'labels'        => $labels,
                'hierarchical'  => true,
                'public'        => true,
                'show_ui'       => true,
                'show_in_nav_menus' => true,
            ), $args)
        );
    }
}
