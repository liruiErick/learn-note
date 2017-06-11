(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(["wx"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("wx"));
	} else {
		root.wxShare = factory(root.wx);
	}

}(this, function(wx) {
	"use strict";

	return function(option) {

		option = option || {};

		wx.config({
		    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: option.appId, // 必填，公众号的唯一标识
			timestamp: option.timestamp, // 必填，生成签名的时间戳
			nonceStr: option.nonceStr, // 必填，生成签名的随机串
			signature: option.signature,// 必填，签名，见附录1
			jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				'onMenuShareTimeline',
        		'onMenuShareAppMessage',
        		'onMenuShareQQ',
        		'onMenuShareWeibo',
        		'onMenuShareQZone'
        	]
		});

		var shareData = {
			title: option.title,
			desc: option.desc,
			link: option.link || location.protocol + "//" + location.host + location.pathname,
			imgUrl: option.imgUrl,
			trigger: function(res) {
				//alert('用户点击分享');
			},
			success: function(res) {
				//alert('已分享');
			},
			cancel: function(res) {
				//alert('已取消');
			},
			complete: function(res) {
				//alert(JSON.stringify(res))
			},
			fail: function(res) {
				//alert(JSON.stringify(res));
			}
		};

		wx.ready(function() {
			// 2. 分享接口
			// 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareAppMessage(shareData);

			// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareTimeline(shareData);

			// 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareQQ(shareData);

			// 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
			wx.onMenuShareWeibo(shareData);

			// 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
			wx.onMenuShareQZone(shareData);
		});

		wx.error(function(res){
			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			//alert(JSON.stringify(res));
		});
	};
}));