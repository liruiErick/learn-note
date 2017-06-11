require(["require"], function() {
	require(["lazyload"], function($) {
		var $lazyloadImg = $("li img");
		$lazyloadImg.lazyload();
		// $lazyloadImg.update();

		// var $directloadImg = $(".directload img");
		// $directloadImg.lazyload();
		// $directloadImg.allshow();
	});
});

require(["mediaQueries"], function(mediaQueries) {
	mediaQueries({
		rule: [0, 767],
		meet: function() {
			console.log('meet');
			require(["overscroll"], function(overscroll) {
				overscroll("#body");
			});
		},
		unmeet: function() {
			console.log('unmeet');
			require(["placeholder"], function($) {
				$('input, textarea').placeholder();
			});
		}
	});
});

require(["jquery", "wxShare"], function($, wxShare) {
	var href = encodeURIComponent(location.href.split('#')[0]);
		url = 'http://wx.cunite.cn/wechat-api/wechat.php?url=' + href + '&callback=?',
		title = $('head title').text(),
		desc = $('head meta[name="description"]').attr('content'),
		link = location.protocol + "//" + location.host + location.pathname,
		$shareImg = $('#shareImg'),
		shareImgUrl = $shareImg.length ? $shareImg[0].src : location.href.replace(/[^\/]*$/, "") + 'static/vrwanjia/img/share.jpg'; //这里必须是绝对路径

	$.getJSON(url, {
		format: "json"
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

require(["noclickdelay"]);