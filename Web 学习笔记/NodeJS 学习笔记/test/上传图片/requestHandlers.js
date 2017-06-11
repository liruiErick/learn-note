var exec = require('child_process').exec; // 非阻塞操作模块
var querystring = require('querystring'); // 字符串解析模块
var fs = require('fs'); // 保存文件到本地模块
var formidable = require('formidable');

// 修改全局的临时文件的目录（貌似没有效果）
//formidable.IncomingForm.UPLOAD_DIR = "./tmp";

function start(response, request) {

	 var body = '<html>'+
				'<head>'+
				'<meta http-equiv="Content-Type" '+
				'content="text/html; charset=UTF-8" />'+
				'</head>'+
				'<body>'+
				'<form action="/upload" enctype="multipart/form-data" '+
				'method="post">'+
				'<input type="file" name="upload">'+
				'<input type="submit" value="Upload file" />'+
				'</form>'+
				'</body>'+
				'</html>';

	responseWrite(response, body, 'text/html');

	/*exec('find /',
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) {
			console.log('请求处理 'start'');
			responseWrite(response, stdout);
		});*/

	// 'ls -lah' 命令用于获取当前目录下所有的文件
	/*exec('ls -lah', function (error, stdout, stderr) {
		responseWrite(stdout);
	});*/
}

function upload(response, request) {
	var form = new formidable.IncomingForm();
	//form.uploadDir = "./tmp"; // 修改临时文件的目录
	console.log("开始解析");
	form.parse(request, function(error, fields, files) {
		console.log("解析完成");
		fs.renameSync(files.upload.path, "./tmp/test.jpg");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function show(response, request) {
	console.log("读取图片");
	fs.readFile('./tmp/test.jpg', 'binary', function(error, file) {
		if (error) {
			responseWrite(response, error + '\n', null, 500);
		} else {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(file, 'binary');
			response.end();
		}
	});
}

function error(response, request) {
	responseWrite(response, '404 Not found');
}

function responseWrite(response, content, type, state) {
	type = type || 'text/plain';
	state = state || 200;
	response.writeHead(state, {'Content-Type': type});
	response.write(content);
	response.end();
}

exports.error = error;
exports.start = start;
exports.upload = upload;
exports.show = show;