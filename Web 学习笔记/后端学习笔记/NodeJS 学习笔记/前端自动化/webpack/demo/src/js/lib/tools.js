(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		root.bjj = root.bjj || {};
		root.jQuery.extend(root.bjj.tools || {}, factory(root.jQuery));
	}

}(this, function($) {
	"use strict";

	var tools = {

		// 添加一个cookie：setCookie(name,value,expiresHours)
		setCookie: function(name, value, expiresHours) {
			var cookieString = name + "=" + escape(value);
			//判断是否设置过期时间
			if (expiresHours > 0) {
				var date = new Date();
				date.setTime(date.getTime + expiresHours * 3600 * 1000);
				cookieString = cookieString + "; expires=" + date.toGMTString();
			}
			document.cookie = cookieString;
		},

		// 获取指定名称的cookie值：getCookie(name)
		getCookie: function(name) {
			var strCookie = document.cookie;
			var arrCookie = strCookie.split("; ");
			for (var i = 0; i < arrCookie.length; i++) {
				var arr = arrCookie[i].split("=");
				if (arr[0] == name) return arr[1];
			}
			return "";
		},

		// 删除指定名称的cookie：deleteCookie(name)
		deleteCookie: function(name) {
			var date = new Date();
			date.setTime(date.getTime() - 10000);
			document.cookie = name + "=v; expires=" + date.toGMTString();
		},

		createSound: function(src, loop, id) {
			var sound = document.createElement("audio");
			if (!sound.canPlayType) return false;
			if (id) sound.id = id;
			sound.src = src;
			sound.preload = "auto";
			if (typeof(loop) === "undefined") loop = true;
			sound.loop = loop;
			return sound;
		}


	}

	return tools;
}));