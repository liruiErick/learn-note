$(function(){

	// 倒计时，在标签中写入结束日期
	// <div class="time" data-end-time="2014-05-07 23:59:59">剩余时间：读取中...</div>
	var $time = $('.time');
	$time.each(function(){
		var $this = $(this);
		// 火狐不支持"2014-05-07 23:59:59"这种格式，必须转换成"2014/05/07 23:59:59"
		var endTime = Date.parse(String($this.data('end-time')).replace('-', '/').replace('-', '/'));
		var curTime = (new Date()).getTime();
		var time = Math.floor((endTime-curTime)/1000);

		if (time <= 0) {
			timeEnd($this);
			return;
		}

		var day, hour, minu, sec;
		var timeID = setInterval(function(){
			time --;

			if (time < 0) {
				clearInterval(timeID);
				timeEnd($this);
			}

			day = to2(Math.floor(time/86400));
			hour = to2(Math.floor(time%86400/3600));
			minu = to2(Math.floor(time%86400%3600/60));
			sec = to2(Math.floor(time%86400%3600%60));
			$this.text('剩余时间：'+day+'天 '+hour+'时 '+minu+'分 '+sec+'秒');
		}, 1000);
	});

	function timeEnd($obj) {
		$obj.text('活动已结束！')
		$obj.css('color','red');
	}

	function to2(value) {
		return (value + 100 + '').slice(-2)	;
	}

});