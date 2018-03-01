// 数组去重
// 利用 Object 中 key 的唯一性，利用 key 来进行筛选。
function unique(arr) {
	var obj = {},
		data = [];
	for (var i = 0, l = arr.length, key; i < l; i++) {
		key = arr[i];
		if (!obj[key]) {
			obj[key] = true;
			data.push(key);
		}
	}
	return data;
}

// Number 数组中最大差值
function getMaxProfit(arr) {
	var min = arr[0],
		max = arr[0];
	for (var i = 1, l = arr.length; i < l; i++) {
		if (arr[i] < min) min = arr[i];
		if (arr[i] > max) max = arr[i];
	}
	return max - min;
}

// 实现 array 的 reverse 操作
function reverse(arr) {
	for (var i = 0, j = arr.length - 1, tmp; i < j; i++, j--) {
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	return arr;
}










