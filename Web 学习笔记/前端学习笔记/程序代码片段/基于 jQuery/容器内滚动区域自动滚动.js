// 列表滚动
var $list = $('.list');
var list = $list[0];
var maxTop = list.scrollHeight - list.clientHeight;
var speed = 1;
var timeroutID = -1;
var intervalID = window.setInterval(scrollList, 40);

$list.on('touchstart', function() {
	window.clearInterval(timeroutID);
	window.clearInterval(intervalID);
});
$list.on('touchend touchcancel', function() {
	timeroutID = window.setTimeout(function() {
		intervalID = window.setInterval(scrollList, 40);
	}, 1000);
});
function scrollList(){
	list.scrollTop += speed;
	if (list.scrollTop >= maxTop) {
		speed = -1;
	} else if (list.scrollTop <= 0) {
		speed = 1;
	}
}