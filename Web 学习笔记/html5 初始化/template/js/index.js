require(['jquery'], function($) {

});

require(['jquery.placeholder'], function($) {
	$('input, textarea').placeholder();
});

require(['mediaQueries'], function(mediaQueries) {
	mediaQueries({
		rule: [0, 767],
		meet: function() {

		},
		unmeet: function() {

		}
	});
});

require(['Lazyload'], function(Lazyload) {
	var lazyload = new Lazyload('.lazyload img');
	// lazyload.update();

	// var directload = new Lazyload('.directload img');
	// directload.allshow();
});

require(['overscroll'], function(overscroll) {
	overscroll('#body');
});

require(['jquery', 'wxShare'], function($, wxShare) {
	var href = encodeURIComponent(location.href.split('#')[0]);
		url = 'http://wx.cunite.cn/wechat-api/wechat.php?url=' + href + '&callback=?',
		title = $('head title').text(),
		desc = $('head meta[name="description"]').attr('content'),
		link = location.protocol + '//' + location.host + location.pathname,
		$shareImg = $('#shareImg'),
		shareImgUrl = $shareImg.length ? $shareImg[0].src : location.href.replace(/[^\/]*$/, '') + 'static/vrwanjia/img/share.jpg'; //这里必须是绝对路径

	$.getJSON(url, {
		format: 'json'
	}, function(data) {
		wxShare({
			appId: data.appId, // 必填，公众号的唯一标识
			timestamp: data.timestamp, // 必填，生成签名的时间戳
			nonceStr: data.nonceStr, // 必填，生成签名的随机串
			signature: data.signature,// 必填，签名，见附录1
			title: title,
			desc: desc,
			link: link,
			imgUrl: shareImgUrl
		});
	});
});

require(['noclickdelay']);