var fs = require('fs');

function replace(pathname) {
	// 利用二进制编码格式来读取和写入，不用关心文件的实际编码是GBK 还是UTF8。
	var str = fs.readFileSync(pathname, 'binary');
	str = str.replace('foo', 'bar');
	fs.writeFileSync(pathname, str, 'binary');
}