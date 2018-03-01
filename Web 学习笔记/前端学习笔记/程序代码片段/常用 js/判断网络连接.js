//检测是否已连网，以及网络速度

//最通用的：
if (window.navigator.onLine) {
	alert('online')
} else {
	alert('offline');
}
// 在 IE 8 'online' 和 'ofline' 事件都是由 document.body 派发, 而在 IE 9 下 document.body 和 window 都派发
window.addEventListener('offline', function(e) { alert('offline'); });
window.addEventListener('online', function(e) { alert('online'); });


//判断是否 wifi 网络
if (navigator.connection.type == navigator.connection.WIFI) {
	// WiFi 接入
}

//写成一个函数：
/**
 * 检测是否已连网，以及网络速度。
 * @return {String} [description]
 */
function netDetect(){
	//alert(window.navigator.userAgent);
	var connection, connectionSpeed;

	// create a custom object if navigator.connection isn't available
	connection = navigator.connection || {'type': '0'};

	switch(connection.type){
		case connection.ETHERNET:
		case connection.WIFI:
			connectionSpeed = 'highbandwidth';
			break;
		case connection.CELL_3G:
			connectionSpeed = 'mediumbandwidth';
			break;
		case connection.CELL_2G:
			connectionSpeed = 'lowbandwidth';
			break;
		case connection.UNKNOWN:
		default:
			connectionSpeed = 'noConnect';
	}
	return connectionSpeed;
}