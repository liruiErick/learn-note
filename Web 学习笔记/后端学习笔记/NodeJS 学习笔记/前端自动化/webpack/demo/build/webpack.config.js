module.exports = {
	// 定义入口
	entry: __dirname + '/src/js/main.js',

	// 输出
	output: {
		path: __dirname + '/dist/js',
		filename: 'main.js'
	},

	resolve: {
		alias: {
			'module': __dirname + '/src/js/module'
		}
	}
}