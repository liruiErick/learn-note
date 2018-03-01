// 跟随输入自动增长
$('textarea').on('scroll', function() {
	var obj = $(this);
	if(obj.scrollTop() > 0) {
		obj.attr('rows', parseInt(obj.attr('rows'))+2);
	}
});

// 回填内容后自动增长
function setTextarea($textarea, text) {
	$textarea.val(text);
	var lineHeight = parseFloat($textarea.css('line-height')),
		paddingTop = parseFloat($textarea.css('padding-top')),
		paddingBottom = parseFloat($textarea.css('padding-bottom')),
		offset = $textarea[0].scrollHeight - paddingTop - paddingBottom,
		rows = Math.ceil(offset / lineHeight);

	$textarea.attr('rows', rows);
	myScroll.refresh();
}