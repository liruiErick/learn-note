var Buffer = require('buffer').Buffer,
	map = require('event-stream').map,
	PluginError = require('gulp-util');

module.exports = function(options) {
	// options 用于接收外部调用时的传参

	// map 遍历 gulp 读取的文件
	return map(function(file, callback) {
		// file 表示 gulp 读取的文件中的一个
		// callback 用于返回修改后的文件

		if (!file) {
			throw new PluginError('文件未找到!');
		}

		if (!file.contents) {
			throw new PluginError('文件内容未找到!');
		}

		var contents = file.contents.toString(), // 将文件内容转换为文本
			lines = contents.split('\n'); // 将文件内容按行分隔成数组

		lines.forEach(function(line, i) {
			// 遍历每一行内容，并对该行进行修改
			lines[i] = line.replace('x', 'y');
		});

		// 将修改后的内容通过 Buffer 写回原文件
		file.contents = new Buffer(lines.join('\n'));
		callback(null, file);
	});
}