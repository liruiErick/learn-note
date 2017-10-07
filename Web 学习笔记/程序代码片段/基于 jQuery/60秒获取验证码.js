// 获取验证码
var timerID = 0,
	text = '秒后重新获取验证码',
	time = 60;

$alertDialogBox.on('click', '.security', function(e) {

	var $this = $(this);
	$this.prop('disabled', true);
	$this.text(time + text);

	if ($this.parents().is('.logon-box')) {

		console.log('发送注册验证码');

	} else if ($this.parents().is('.reset-box')) {

		console.log('发送修改密码验证码');

	}

	timerID = window.setInterval(function() {
		time--;
		$this.text(time + text);
		if (time == 0) {
			window.clearInterval(timerID);
			$this.prop('disabled', false);
			$this.text('获取验证码');
			time = 60;
		}
	}, 1000);

	return false;
});