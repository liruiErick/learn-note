// 在应用 rem 时，页面初始化时需要执行的代码
// maxWidth 允许页面的最大宽度
// projectWidth 设计图宽度，当页面宽度正好等于设计图宽度时，页面的字体大小为 100px
(function() {
	var htmlStyle = document.documentElement.style,
		maxWidth = 750,
		projectWidth = maxWidth,
		recalc = function () { htmlStyle.fontSize = Math.min(window.innerWidth / projectWidth, maxWidth / projectWidth) * 100 + 'px'; };
	recalc();
    window.addEventListener('DOMContentLoaded', recalc, false);
	window.addEventListener('resize', recalc, false);
})();