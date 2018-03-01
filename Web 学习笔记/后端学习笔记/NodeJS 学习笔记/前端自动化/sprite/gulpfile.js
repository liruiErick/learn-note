// https://www.npmjs.com/package/gulp.spritesmith
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
	return gulp.src('src/*.png')
	.pipe(spritesmith({
		imgName: 'sp360.png',
		cssName: 'sp360.css',
		cssTemplate: 'cssTemplate.css'
	}))
	.pipe(gulp.dest('dest/'));
});