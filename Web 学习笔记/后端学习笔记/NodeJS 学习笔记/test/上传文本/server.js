var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;
		var postData = '';

		request.setEncoding('utf8'); // 设置接收数据的编码格式

		request.addListener('data', function(postDataChunk) {
			postData += postDataChunk;
			console.log('收到POST数据块 '' + postDataChunk + ''。');
		});

		request.addListener('end', function() {
			route(handle, pathname, response, postData);
		});

		// 发送一个HTTP状态200和HTTP头的内容类型 content-type
		//response.writeHead(200, {'Content-Type': 'text/plain'});

		// 在HTTP相应主体中发送内容
		//response.write(content);

		// 完成响应
		//response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log('服务器启动');
}

exports.start = start;