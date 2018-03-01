// 根据数组中对象的属性值排序，并返回排好序的新数组
// ascending 表示是否由小到大排序
function propertySort(arr, prop, ascending) {
	var newArr = arr.concat();
	newArr.sort(function(a, b) {
		var av = a[prop],
			bv = b[prop];
		return (ascending) ? av - bv : bv - av;
	});
	return newArr;
}

// 根据数组中对象的属性值字符串进行排序，并返回排好序的新数组
function propertyStringSort(arr, prop) {
	var newArr = arr.concat();
	newArr.sort(function(a, b) {
		var av = a[prop],
			bv = b[prop];
		return av.localeCompare(bv);
	});
	return newArr;
}