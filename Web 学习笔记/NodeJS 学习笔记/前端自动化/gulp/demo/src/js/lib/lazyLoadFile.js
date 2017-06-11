(function(root, factory) {
	"use strict";

	if (typeof define === "function" && define.amd) {
		define(factory);
	} else if (typeof exports === "object") {
		module.exports = factory();
	} else {
		root.bjj = root.bjj || {};
		root.bjj.lazyLoadFile = factory();
	}

}(this, function() {
	"use strict";

	function lazyLoadFile(file) {
		if (!isObj(file)) return;
		if (isArray(file.css)) createFile(css, "link");
		if (isArray(file.js)) createFile(js, "script");
	}

	function createFile(list, fileType) {
		for (var i = 0, l = list.length; i < l; i++) {
			var file = document.createElement(fileType);
			if (fileType === "script") {
				file.src = list[i];
			} else if (fileType === "link") {
				file.rel = "stylesheet";
				file.href = list[i];
			}
			document.body.appendChild(file);
		}
	}

	function isObj(obj) {
		return typeof obj === "object";
	}

	function isArray(obj) {
		return Object.prototype.toString.call(obj) === "[object Array]";
	}

	if (window.addEventListener) window.addEventListener("load", lazyLoadFile, false);
	else if (window.attachEvent) window.attachEvent("onload", lazyLoadFile);
	else window.onload = lazyLoadFile;

	return lazyLoadFile;
}));