var exec = require('child_process').exec;

function start(response, postData) {

	 var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" content="text/html; '+
				'charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/upload" method="post">'+
				'<textarea name="text" rows="20" cols="60"></textarea>'+
				'<input type="submit" value="Submit text" />'+
				'</form>'+
				'</body>'+
				'</html>';

	responseWrite(response, body, 'text/html');

	/*exec('find /',
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) {
			responseWrite(response, stdout);
		});*/

	// 'ls -lah' 命令用于获取当前目录下所有的文件
	/*exec('ls -lah', function (error, stdout, stderr) {
		responseWrite(stdout);
	});*/
}

function upload(response, postData) {
	responseWrite(response, querystring.parse(postData).text);
}

function error(response, postData) {
	responseWrite(response, '404 Not found');
}

function responseWrite(response, content, type) {
	type = type || 'text/plain';
	response.writeHead(200, {'Content-Type': type});
	response.write(content);
	response.end();
}

exports.error = error;
exports.start = start;
exports.upload = upload;