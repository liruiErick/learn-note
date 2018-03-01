安装
```
$ npm install gulp-watch --save-dev
```


使用
```js
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', function() {
  return watch(['./**/*.less', '!./**/_*.less'])
    .pipe(less())
    .pipe(gulp.dest('./'));
});
```
这个任务可以取代 `gulp.watch()`，当某个文件被修改后，仅编译该文件。