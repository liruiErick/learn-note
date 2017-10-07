// 多个文本框连续输入
// 现在 Android 设备以及 IOS 设备都允许非真实用户触摸事件的js设置文本框焦点
// 这些设备只允许真实用户触摸事件来激活文本框的焦点

var $input = $('form input[type=tel]');

$input.on('input propertychange', function() {
	var limit = 2;
	var index = $.inArray(this, $input);
	if (this.id == 'year') limit = 4;
	if (this.value.length == limit) {
		if (index < $input.length) {
			$input.eq(index + 1).focus();
		}
	}
});

$input.on('keydown', function(e) {
	var index = $.inArray(this, $input);
	if (e.keyCode == 8) { //退格键被按下
		if (this.value.length == 0) {
			if (index > 0) {
				$input.eq(index - 1).focus();
			}
		}
	}
});