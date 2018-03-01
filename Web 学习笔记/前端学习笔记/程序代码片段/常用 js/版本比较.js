/**
 * compare version
 * a = '1.11.1',  b = '1.8.2'
 * a > b return 1
 * a < b return -1
 * a = b return 0
 * @param a {String}
 * @param b {String}
 * @returns {Number}
 */
function compareVersion(a, b) {
	var aa = a.split('.'),
		bb = b.split('.'),
		len = Math.max(aa.length, bb.length),
		aInt, bInt;
	while(len--) {
		aInt = parseInt(aa.shift()) || 0;
		bInt = parseInt(bb.shift()) || 0;
		if (aInt > bInt) return 1;
		else if (aInt < bInt) return -1;
	}
	return 0;
}

// ES6
function compareVersion(a, b) {
    const aa = a.split('.');
    const bb = b.split('.');

    let aInt, bInt,
        len = Math.max(aa.length, bb.length);
    while(len--) {
        aInt = parseInt(aa.shift()) || 0;
        bInt = parseInt(bb.shift()) || 0;
        if (aInt > bInt) return 1;
        else if (aInt < bInt) return -1;
    }
    return 0;
}