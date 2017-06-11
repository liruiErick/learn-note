安装
```
$ npm install gulp-changed --save-dev
```


使用
```js
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-changed');

gulp.task('default', function() {
  return gulp.src(['./**/*.less', '!./**/_*.less'])
    .pipe(changed('./', {extension: '.wxss'}))
    .pipe(less())
    .pipe(rename({ extname: '.wxss' }))
    .pipe(gulp.dest('./'));
});
```
这个任务执行时，仅编译有改动的文件。

其中 `changed()` 的第一参数为文件编译后的输出路径，即 `gulp.dest()` 的输出路径，如果最终 `gulp.dest()` 输出的文件扩展名与源文件扩展名不相同，则需要设置第二个参数 `options` 的 `extension` 属性为最终输出的扩展名。