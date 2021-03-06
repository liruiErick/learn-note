// 命令行中，打开到 r.js 文件的目录，然后执行 node r.js -o build.js
({
	appDir: '../', // 项目根目录

	dir: '../output', // 输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

	baseUrl: 'js', // 相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的

	modules: [
		// 要优化的模块，说白了就是各页面的入口文件，相对baseUrl的路径，也是省略后缀“.js”
		// 压缩完成后每个页面只需要如下引用：
		// <script src="js/require.js" data-main="js/index"></script>
		{ name:'common'},
		{ name:'index'}
	],

	fileExclusionRegExp: /^(r|build)\.js|.*\.less$/, // 过滤，匹配到的文件将不会被输出到输出目录去

	optimizeCss: 'standard', // css文件的压缩模式

	removeCombined: true, // 如果为true，将从输出目录中删除已合并的文件

	paths: { // 相对baseUrl的路径
		"css": "lib/css.min",
		"jquery": "lib/jquery-1.11.3.min",
		"animate": "lib/jquery.animate.min",
		"common": "lib/common",
		"mainLoop": "lib/mainLoop",
		"alert": "lib/alert.min",
		"lazyload": "lib/jquery.lazyload.min",
		"lazyLoadFile": "lib/lazyLoadFile",
		"overscroll": "lib/overscroll",
		"noclickdelay": "lib/noclickdelay",
		"mediaQueries": "lib/mediaQueries",
		"DragEvent": "lib/DragEvent.min",
		"hammer": "lib/hammer.min",
		"jgestures": "lib/jquery.jgestures.min",
		"TabBanner": "lib/TabBanner.min"
	},

	shim:{

	}
})