// <div class="aside__navbar">
//     <ul class="level-1-list">
//         <li>
//             <a>買取実績ラインナップ</a>
//             <ul class="level-2-list">
//                 <li><a>バッグ·鞄</a></li>
//             </ul>
//         </li>
//     <div class="aside__navbar__pointer"></div>
// </div>
require(['jquery', 'NavManager', 'Fixer'], function($, NavManager, Fixer) {
    var $asideNavbar = $('.aside__navbar');
    if (!$asideNavbar.length) return;

    var $doc = $(document);
    var $pointer = $asideNavbar.find('.aside__navbar__pointer');
    var offset = $pointer.height() / 2;
    var $curAnchor = null;

    // 生成 aside__navbar
    var html = '';
    var $anchor_1 = $('.anchor-1');

    $anchor_1.each(function(i, n) {
        var $anchor = $(n);
        html += '<li>';
        html += '<a href="#' + $anchor.attr('id') + '">' + $anchor.data('title') + '</a>';

        var $anchor_2 = $anchor.find('.anchor-2');
        if ($anchor_2.length) {
            html += '<ul class="level-2-list">';
            $anchor_2.each(function (i, n) {
                var $anchor = $(n);
                html += '<li>';
                html += '<a href="#' + $anchor.attr('id') + '">' + $anchor.data('title') + '</a>';
                $anchor.find('.anchor-2').each();
                html += '</li>';
            });
            html += '</ul>';
        }

        html += '</li>';
    });

    $asideNavbar.find('ul').html(html);
    $asideNavbar.find('.level-2-list').hide();

    new NavManager({
        offset: $('.common-header').height(),
        nav: $asideNavbar.find('a'),
        section: '.section',
        duration: 0,
        enterPosition: 'top',
        enterPositionOffset: 40,
        onEnter: function(index, $section, $anchor) {
            $curAnchor = $anchor;
            update();
        }
    });

    $doc.on('aside-navbar-update', update);

    function update() {
        if (!$curAnchor) return;
        var $visibleLevel2List = $asideNavbar.find('.level-2-list:visible');
        var $level2List = $curAnchor.next('.level-2-list');

        if (!$level2List.length) {
            $level2List = $curAnchor.parents('.level-2-list');
        }

        if ($level2List.length) {
            $visibleLevel2List = $visibleLevel2List.filter(function(i, n) { return n !== $level2List[0] });
        }

        $level2List.stop().show();
        $visibleLevel2List.stop().hide();
        $pointer.stop().animate({ top: $curAnchor.position().top + $curAnchor.height() /2 - offset }, 200);
        $visibleLevel2List.stop().show();

        if ($level2List.length) {
            $level2List.stop().slideDown(200);
        }
        $visibleLevel2List.stop().slideUp(200);
    }
});