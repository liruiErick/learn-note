/**
 * 函数名：cutStr
 * 函数说明：将字符串截取至指定半角长度
 * @param str 字符串
 * @param limit 字符串半角长度限制
 * @param addPoint 如果字符被截断，是否在字符结尾加入“...”
 * @return 截取完毕的字符串
 */
function cutStr(str, limit, addPoint) {
	if (getStrLen(str) <= limit) return str;
	var charLen;
	var charLenSum = 0;
	var result = '';
	for (var i = 0; i < str.length; i++) {
		charLen = isDbcCase(str.charCodeAt(i)) ? 1 : 2;
		charLenSum += charLen;
		if (charLenSum == limit)
		{
			if (addPoint)
			{
				if (charLen == 1) result = str.substring(0, i-1);
				else result = str.substring(0, i);
				result += '...';
			}
			else result = str.substring(0, i+1);
			break;
		}
		else if (charLenSum > limit)
		{
			if (addPoint)
			{
				result = str.substring(0, i-1);
				result += '...';
			}
			else result = str.substring(0, i);
			break;
		}
	}
	return result;
}

/**
 * 函数名：getStrLen
 * 函数说明：计算字符串长度，半角长度为1，全角长度为2
 * @param str 字符串
 * @return 字符串长度
 */
function getStrLen(str) {
	var len = 0;
	var i;
	var c;
	for (var i=0;i<str.length;i++) {
		c = str.charCodeAt(i);
		if (isDbcCase(c)) len = len + 1;//半角
		else len = len + 2;//全角
	}
	return len;
}

/**
 * 函数名：isDbcCase
 * 函数说明：判断字符是否为半角字符
 * @param c 字符
 * @return true：半角 false：全角
 * 半角范围：u0000 - u00FF, uFF61 - uFF9F, uFFE8 - uFFEE
 * 全角范围：
 * 全角数字(0-9) uFF10 - uFF19
 * 全角大文字(A-Z): uFF21 - uFF3A
 * 全角小文字(a-z): uFF41 - uFF5A
 * 全角平仮名：u3040 - u309F
 * 全角片仮名：u30A0 - u30FF
 * 全角Latin: uFF01 - uFF5E
 * 全角Symbol: uFFE0 - uFFE5
 */
function isDbcCase(c) {
	//var u00FF = parseInt('00FF', 16);  得到 255
	//var uFF61 = parseInt('FF61', 16);  得到 65377
    //var uFF9F = parseInt('FF9F', 16);  得到 65439
    //var uFFE8 = parseInt('FFE8', 16);  得到 65512
    //var uFFEE = parseInt('FFEE', 16);  得到 65518
	if (c <= 255) return true;
	else if (c >= 65377 && c <= 65439) return true;
	else if (c >= 65512 && c <= 65518) return true;
	return false;
}