var fs = require('fs');

function copy(src, dst) {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv) {
	copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
// process 是一个全局变量，可通过process.argv 获得命令行参数。由于argv[0]固定等于NodeJS 执行程序的绝对路径，argv[1]固定等于主模块的绝对路径，因此第一个命令行参数从argv[2]这个位置开始。