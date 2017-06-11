// 命令行中，打开到 r.js 文件的目录，然后执行 node r.js -o build.js
({
	appDir: '../js', // 项目根目录

	dir: '../output/js', // 输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）

	baseUrl: './', // 相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的。若该值未指定，模块则相对build文件所在目录。

	modules: [
		// 要优化的模块，说白了就是各页面的入口文件，相对 baseUrl 的路径，也是省略后缀 ".js"
		// 压缩完成后每个页面只需要如下引用：
		// <script src="js/require.js" data-main="js/index"></script>
		{ name:'index' },
	],

	fileExclusionRegExp: /^(r|build)\.js|.*\.less$/, // 过滤，匹配到的文件将不会被输出到输出目录去

	optimizeCss: 'standard', // css文件的压缩模式

	// JS 文件优化方式，目前支持以下几种：
    //   uglify: （默认） 使用 UglifyJS 来压缩代码
    //   uglify2: 使用 Uglify2 来压缩代码，支持 SourceMap
    //   none: 不压缩代码
	optimize: 'uglify2',

	useSourceUrl: true, // 在压缩 angular 模块时，该属性为 ture 可以防止出错。

	generateSourceMaps: true, // 生成 SourceMap

	preserveLicenseComments: false, // 如果需要生成 SourceMap，次选项必须为 false

	removeCombined: true, // 如果为true，将从输出目录中删除已合并的文件

	findNestedDependencies: true, // 处理级联依赖，如果require()中包含有require()，则将他们的依赖一起打包。默认为false，即不会打包嵌套中require()请求的模块。

	mainConfigFile: '../js/require.config.js' // 配置文件目录，目录相对于build.js文件所在目录，文件配置模块的路径为相对baseUrl的路径。
})