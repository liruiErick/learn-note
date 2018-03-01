var http = require('http');
var url = require('url'); // url 解析模块

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('收到请求 ' + pathname);
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(8888);

	console.log('服务器启动');
}

exports.start = start;