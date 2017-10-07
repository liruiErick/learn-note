// 冒泡排序
function bubbleSort(arr) {
	var l = arr.length,
		i = 0,
		j = 0;
	for (i = 1; i < l; i++) {
		for (j = 0; j <= l - i; j++) {
			var temp = 0;
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

// 快速排序
function quickSort(arr, l, r) {
	if (l < r) {
		var i = l,
			j = r,
			x = arr[i];

		while (i < j) {
			while (i < j && arr[j] > x) j--;

			//这里用i++，被换过来的必然比x小，赋值后直接让i自加，不用再比较，可以提高效率
			if (i < j) arr[i++] = arr[j];

			while (i < j && arr[i] < x) i++;

			//这里用j--，被换过来的必然比x大，赋值后直接让j自减，不用再比较，可以提高效率
			if (i < j)arr[j--] = arr[i];
		}

		arr[i] = x;

		quickSort(arr, l, i - 1);
		quickSort(arr, i + 1, r);
	}
}

// 二路归并
// 将两个按值有序序列合并成一个按值有序序列，则称之为二路归并排序。
function merge(left, right) {
	var result = [],
		l = 0,
		r = 0,
		ll = left.length,
		rl = right.length;

	while (l < ll && r < rl) {
		if (left[l] < right[r]) result.push(left[l++]);
		else result.push(right[r++]);
	}
	while (left[l]) result.push(left[l++]);
	while (right[r]) result.push(right[r++]);
	return result;
}







