安装
```
$ npm install gulp-rename --save-dev
```


使用
```js
var rename = require("gulp-rename");
 
// rename via string 
gulp.src("./src/main/text/hello.txt")
  .pipe(rename("main/text/ciao/goodbye.md"))
  .pipe(gulp.dest("./dist"));
//=> ./dist/main/text/ciao/goodbye.md 
 
// rename via function 
gulp.src("./src/**/hello.txt")
  .pipe(rename(function (path) {
    path.dirname += "/ciao";
    path.basename += "-goodbye";
    path.extname = ".md"
  }))
  .pipe(gulp.dest("./dist"));
//=> ./dist/main/text/ciao/hello-goodbye.md 
 
// rename via hash 
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
  .pipe(rename({
    dirname: "main/text/ciao",
    basename: "aloha",
    prefix: "bonjour-",
    suffix: "-hola",
    extname: ".md"
  }))
  .pipe(gulp.dest("./dist"));
//=> ./dist/main/text/ciao/bonjour-aloha-hola.md
```