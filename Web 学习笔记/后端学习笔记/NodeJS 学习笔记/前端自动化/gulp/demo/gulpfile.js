// 导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), // 本地安装gulp所用到的地方
	less = require('gulp-less'), // less编译模块
	cssmin = require('gulp-minify-css'), // css压缩
	sourcemaps = require('gulp-sourcemaps'), // 生成less引用map
	jshint = require('gulp-jshint'), // js语法检查
	concat = require('gulp-concat'), // 文件合并
	uglify = require('gulp-uglify'), // 文件压缩
	rename = require('gulp-rename'), // 文件重命名
	rjs = require('requirejs'), // rjs
	imagemin = require('gulp-imagemin'), // 图片压缩
	pngquant = require('imagemin-pngquant'), // 图片质量
	cssSprite = require('gulp-css-spritesmith'), // 自动生成Sprite图片
	htmlmin = require('gulp-htmlmin'), //html压缩
	// 当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
	notify = require('gulp-notify'), // 提示信息
	plumber = require('gulp-plumber'),
	clean = require('gulp-clean'),
	changed = require('gulp-changed'),
	config = require('./config.js');

// less编译任务
gulp.task('less', ['cleanCss'], function () {
	return gulp.src(config.less.src)
		.pipe(changed(config.less.dest, {extension: '.css'}))
		// 当编译less时出现语法错误或者其他异常，会终止watch事件，通常需要查看命令提示符窗口才能知道，这并不是我们所希望的，
		// 所以我们需要处理出现异常并不终止watch事件（gulp-plumber），并提示我们出现了错误（gulp-notify）。
		.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
		//.pipe(sourcemaps.init())
		.pipe(less()) // 编译less
		.pipe(cssmin()) // 兼容IE7及以下需设置compatibility属性 .pipe(cssmin({compatibility: 'ie7'}))
		//.pipe(sourcemaps.write('./')) // 当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
		.pipe(gulp.dest(config.less.dest))
		.pipe(notify({ message: 'less task ok' }));
});

// 监听less文件修改
gulp.task('lessWatch', function () {
	gulp.watch(config.less.all, ['less']); // 当所有less文件发生改变时，调用less任务
});

// scripts任务
gulp.task('js', ['cleanJs'], function() {
	return gulp.src(config.js.src)
		// js文件检查任务
		//.pipe(jshint()) // 该模块在检测 require.js 时会报错，因此在使用 require.js 时避免使用
		//.pipe(jshint.reporter('default'))
		// 会合并 js/ 目录下得所有得js文件并输出到 dist/ 目录，然后gulp会重命名、压缩合并的文件，也输出到 dist/ 目录。
		//.pipe(concat('all.js'))
		//.pipe(gulp.dest(destPath + 'js/'))
		//.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(config.js.dest))
		.pipe(notify({ message: 'js task ok' }));
});

// 监听js变化
gulp.task('jsWatch', function () {
	gulp.watch(config.js.src, ['js']);
});

// requirejs任务
gulp.task('rjs', ['cleanJs'], function(cb) {
	rjs.optimize(config.rjs, function(buildResponse){
		console.log('build response', buildResponse);
		cb(); // 任务完成
	}, cb);
});

// 压缩html
gulp.task('html', ['cleanHtml'], function() {
	return gulp.src(config.html.src)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(config.html.dest))
		.pipe(notify({ message: 'html task ok' }));
});

// 监听html变化
gulp.task('htmlWatch', function () {
	gulp.watch(config.html.src, ['html']);
});

// 自动雪碧图
// autoSprite, with media query
gulp.task('autoSprite', ['cleanImg', 'less', 'imagemin'], function() {
	return gulp.src(config.sprite.src).pipe(cssSprite({
		// 必填项，sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
		imagepath: config.sprite.imagepath,

		// 映射CSS中背景路径，支持函数和数组，默认为 null
		imagepath_map: null,

		// 必填项，雪碧图输出目录，注意，会覆盖之前文件！默认 images/
		// 路径为最后输出目录的相对路径
		spritedest: config.sprite.spritedest,

		// 必填项，替换后的背景路径，默认 ../images/
		// 路径为样式目录的相对路径
		spritepath: config.sprite.spritepath,

		// 可选项，各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
		padding: 2,

		// 可选项，是否使用 image-set 作为2x图片实现，默认不使用
		useimageset: false,

		// 可选项，是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
		newsprite: false,

		// 可选项，给雪碧图追加时间戳，默认不追加
		spritestamp: true,

		// 可选项，在CSS文件末尾追加时间戳，默认不追加
		cssstamp: true,

		// 可选项，指定排列方式，有top-down （从上至下）, left-right（从左至右）, diagonal（从左上至右下）, alt-diagonal （从左下至右上）和 binary-tree（二叉树排列）五种供选择，默认 binary-tree
		algorithm: 'top-down',

		// 可选项，指定图像处理引擎，默认选择pngsmith
		//engine: 'pngsmith',
	}))
	.pipe(gulp.dest(config.sprite.dest))
	.pipe(notify({ message: 'autoSprite task ok' }));
});

// 图片压缩任务
gulp.task('imagemin', ['cleanImg'], function(){
	return gulp.src(config.img.src)
		//.pipe(imagemin())
		.pipe(imagemin({
			optimizationLevel: 5, // 类型：Number  默认：3  取值范围：0-7（优化等级）
			progressive: true, // 类型：Boolean 默认：false 无损压缩jpg图片
			interlaced: true, // 类型：Boolean 默认：false 隔行扫描gif进行渲染
			multipass: true, // 类型：Boolean 默认：false 多次优化svg直到完全优化
			svgoPlugins: [{ removeViewBox: false }], // 不要移除svg的viewbox属性
			use: [pngquant()]
		}))
		.pipe(gulp.dest(config.img.dest))
		.pipe(notify({ message: 'imagemin task ok' }));
});

gulp.task('cleanAll', function() { return gulp.src(config.clean.src, { read: false }).pipe(clean()).pipe(notify({ message: 'cleanAll task ok' })); });
gulp.task('cleanCss', function() { return gulp.src(config.clean.cssSrc, { read: false }).pipe(clean()).pipe(notify({ message: 'cleanCss task ok' })); });
gulp.task('cleanJs', function() { return gulp.src(config.clean.jsSrc, { read: false }).pipe(clean()).pipe(notify({ message: 'cleanJs task ok' })); });
gulp.task('cleanImg', function() { return gulp.src(config.clean.imgSrc, { read: false }).pipe(clean()).pipe(notify({ message: 'cleanImg task ok' })); });
gulp.task('cleanHtml', function() { return gulp.src(config.clean.htmlSrc, { read: false }).pipe(clean()).pipe(notify({ message: 'cleanHtml task ok' })); });

gulp.task('default', ['less', 'lessWatch', 'js', 'jsWatch', 'html', 'htmlWatch']);
gulp.task('imageOptimize', ['autoSprite']);
gulp.task('build', ['less', 'rjs', 'html', 'autoSprite']);

