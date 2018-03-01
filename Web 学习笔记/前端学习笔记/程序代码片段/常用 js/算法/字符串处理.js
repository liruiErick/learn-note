// 判断回文字符串
function palindrome(str) {
	// \W匹配任何非单词字符。等价于“[^A-Za-z0-9_]”。
	var re = /[\W_]/g;
	// 将字符串变成小写字符,并干掉除字母数字外的字符
	var lowRegStr = str.toLowerCase().replace(re, '');
	// 如果字符串lowRegStr的length长度为0时，字符串即是palindrome
	if (lowRegStr.length === 0) return true;
	// 如果字符串的第一个和最后一个字符不相同，那么字符串就不是palindrome
	if (lowRegStr[0] != lowRegStr[lowRegStr.length - 1]) return false;
	//递归
	return palindrome(lowRegStr.slice(1, lowRegStr.length - 1));
}

// 翻转字符串
// 思路1：转化成 array 简单写法
function reverseString(str) {
	return str.split('').reverse().join('');
}

// 思路2：反向遍历字符串
function reverseString(str) {
	var tmp = '',
		i = str.length;
	while (i--) tmp += str[i];
	return tmp
}

// 生成指定长度随机字符串
// 配合模糊等效果可以生成个验证码
function randomString(n) {
	var str = 'abcdefghijklmnopqrstuvwxyz0123456789',
		len = str.length,
		tmp = '';
	if (n < 0) n = 0;
	while (n--) tmp += str.charAt(Math.round(Math.random() * len));
	return tmp;
}

// 统计字符串中次数最多字母
// 利用 Object 中 key 的唯一性，利用 key 来进行筛选，然后计数。
function findMaxDuplicateChar(str) {
	var len = str.length;
	if (len == 1) return str;

	var charObj = {};
	for (var i = 1, c; c = str.charAt(i++);) {
		if (charObj[c]) {
			charObj[c]++;
		} else {
			charObj[c] = 1;
		}
	}

	var maxChar,
		maxValue = 0;
	for (var k in charObj) {
		if (charObj[k] >= maxValue) {
			maxChar = k;
			maxValue = charObj[k];
		}
	}

	return maxChar + '：' + maxValue;
}















