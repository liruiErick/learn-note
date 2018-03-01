var srcPath = './src/',
	destPath = './dist/';

module.exports = {
	less: {
		all: srcPath + 'css/**/*.less', // 所有less
		src: [srcPath + 'css/*.less', '!' + srcPath + 'css/**/_*.less'], // 需要编译的less
		dest: destPath + 'css/', // 输出目录
		settings: { // 编译less过程需要的配置，可以为空

		}
	},
	sprite: {
		src: destPath + 'css/**/*.css',
		dest: './', // css文件输出路径会在这个路径基础上自动加上源文件路径，因此这里只能是根目录路径
		// sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
		imagepath: destPath + 'img/slice/',
		// 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
		// 路径为最后输出目录的相对路径
		spritedest: destPath + 'img/slice/',
		// 替换后的背景路径，默认 ../images/
		// 路径为样式目录的相对路径
		spritepath: '../img/slice/',
	},
	img: {
		src: srcPath + '/img/**/*',
		dest: destPath + '/img'
	},
	js: {
		src: srcPath + 'js/**/*.js',
		dest: destPath + 'js/'
	},
	rjs: {
		appDir: srcPath + 'js/', // 项目根目录，这里仅仅指定js目录
		dir: destPath + 'js/', // 输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
		// 相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
		// 若该值未指定，模块则相对gulpfile.js文件所在目录。
		baseUrl: './',
		findNestedDependencies: true,
		mainConfigFile: srcPath + 'js/require.config.js', // 配置文件目录，目录相对于gulpfile.js文件所在目录，文件配置模块的路径为相对baseUrl的路径。
		modules: [
			{ name:'index' },
			{ name:'common' }
		]
	},
	html: {
		src: srcPath + '**/*.html',
		dest: destPath
	},
	clean:{
		src: destPath,
		cssSrc: destPath + 'css/',
		jsSrc: destPath + 'js/',
		imgSrc: destPath + 'img/',
		htmlSrc: destPath + '**/*.html',
	}
};