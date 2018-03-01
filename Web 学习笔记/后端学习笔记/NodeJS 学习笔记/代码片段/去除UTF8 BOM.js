var fs = require('fs');

function readText(pathname) {
	var bin = fs.readFileSync(pathname);
	if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
		bin = bin.slice(3);
	}
	return bin.toString('utf-8');
}

console.log(readText('./aa.txt'));