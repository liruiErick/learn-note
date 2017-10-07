function createSound(src, loop, id) {
	var sound = document.createElement("audio");
	if (!sound.canPlayType) return false;
	if (id) sound.id = id;
	sound.src = src;
	sound.preload = "auto";
	if (typeof(loop) === "undefined") loop = true;
	sound.loop = loop;
	return sound;
}

var bg_music = createSound('mp3/bg.mp3');


require(["jquery", "dynamicPage"], function($, dynamicPage) {

	var $progress = $("#loading .progress"),
		$arrow = $("#arrow"),
		$music = $("#music").addClass("animing");

	var isPlay = true;
	$music.click(function() {
		if (isPlay) {
			musicPause();
		} else {
			musicPlay();
		}
	});

	function musicPlay() {
		isPlay = true;
		bg_music.play();
		$music.addClass("animing");
	}
	function musicPause() {
		isPlay = false;
		bg_music.pause();
		$music.removeClass("animing");
	}

	var page0 = {
		autoShow: false,
		onlyOne: true,
		dir: "none",
		elemConfig: [{
			name: "#loading",
			keep: true,
			show: true,
			style: {opacity: 0},
			dur: 1000,
			opacity: 1,
			onEnd: function(obj) {
				obj.allUnfix();
				obj.nextShow(1000, function() {
					$music.fadeIn();
					$arrow.fadeIn();
					musicPlay();
				});
			}
		}]
	};


	var page1 = {
		bgImg: "img/page1/bg.jpg",
		elemConfig: [{
			url: "img/page1/ylzl.png",
			centerX: true,
			style: {width: 34, top: 400, left: "50%"},
			y: -50,
			dur: 1000,
			delay: 400
		}, {
			url: "img/page1/yl.png",
			centerX: true,
			style: {width: 34, top: 600, left: "50%"},
			y: 50,
			dur: 1000,
			baseDelay: 1000
		}, {
			url: "img/page1/sk.png",
			centerX: true,
			style: {width: 287, top: 700, left: "50%"},
			scale: 0,
			dur: 1000,
			easing: "easeOutElastic",
			baseDelay: 1000
		}]
	};

	var page2 = {

	};

	var page3 = {

	};

	var page4 = {

	};

	var page5 = {
	};

	var page6 = {
		onEnter: function() {
			$arrow.fadeOut();
		},
		onLeave: function() {
			$arrow.fadeIn();
		}
	};

	var config = {
		".page0": page0,
		".page1": page1,
		".page2": page2,
		".page3": page3,
		".page4": page4,
		".page5": page5,
		".page6": page6
	}

	var option = {
		config: config,
		curIndex: 0,
		scaleAdjust: true,
		enableScale: true,
		preload: true,
		container: "#pages",
		wrapSize: {width: 320, height: 480},
		callback: function(obj) {
			obj.allFix();
		},
		progress: function(data) {
			$progress.text(data.progress + "%");
			console.log(data.progress + "%");
		},
		complete: function(data) {
			data.obj.elemShow();
		}
	};

	dynamicPage(option);

});

require(["jquery", "wxShare"], function($, wxShare) {
	var href = encodeURIComponent(location.href.split('#')[0]);
		url = 'http://wx.cunite.cn/wechat-api/wechat.php?url=' + href + '&callback=?';

	$.getJSON(url, {
		format: "json"
	}, function(data) {
		wxShare({
			appId: data.appId, // 必填，公众号的唯一标识
			timestamp: data.timestamp, // 必填，生成签名的时间戳
			nonceStr: data.nonceStr, // 必填，生成签名的随机串
			signature: data.signature,// 必填，签名，见附录1
			title: '',
			desc: '',
			link: location.protocol + "//" + location.host + location.pathname,
			imgUrl: location.href.replace(/[^\/]*$/, "") + 'img/share.jpg' //这里必须是绝对路径
		});
	});
});
