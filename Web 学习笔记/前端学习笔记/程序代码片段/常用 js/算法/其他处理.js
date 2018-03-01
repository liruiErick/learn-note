// 阶乘
// 1.非递归实现
function factorialize(num) {
	var result = 1;
	if (num < 0) return -1;
	if (num == 0 || num == 1) return 1;
	while (num > 1) result *= num--;
	return result;
}

// 2.递归实现
function factorialize(num) {
	var result = 1;
	if (num < 0) return -1;
	else if (num == 0 || num == 1) return 1;
	else if (num > 1) return num * factorialize(num - 1);
}

// 生成菲波那切数列
// 斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列主要考察递归的调用。
// 通过定义 fibo[i] = fibo[i-1]+fibo[i-2]; 来生成斐波那契数组。
// 1.强行递归实现
function getfib(n) {
	if (n == 0) return 0;
	else if (n == 1) return 1;
	else if (n > 1) return getfib(n - 1) + getfib(n - 2);
}

function fibo(len) {
	var fibo = [];
	for (var i = 0; i < len; i++) fibo.push(getfib(i));
	return fibo;
}

// 2.简约非递归版
function getFibonacci(n) {
	var fibarr = [],
		i = 0;
	for (; i < n; i++) {
		if (i <= 1) {
			fibarr.push(i);
		} else {
			fibarr.push(fibarr[i - 1] + fibarr[i - 2])
		}
	}
	return fibarr;
}

// 二分查找（感觉该算法有问题，当判断 key > value 或者 key < value，应该为 low = mid 或者 high = mid）
// 二分查找又称折半查找，是在有序数组查找中用到的较为频繁的一种算法，优点是比较次数少，查找速度快，平均性能好；
// 其缺点是要求待查表为有序表，且插入删除困难。
// 1.非递归实现
function binary_search(arr, key) {
	var value,
		mid,
		low = 0,
		high = arr.length - 1;
	while (low <= high) {
		mid = parseInt((high + low) / 2);
		value = arr[mid];
		if (key == value) return mid;
		else if (key > value) low = mid + 1;
		else if (key < value) high = mid - 1;
	}
	return -1;
}

// 2.递归实现
function binary_search2(arr, low, high, key) {
	if (low > high) return -1;
	var mid = parseInt((low + high) / 2),
		value = arr[mid];
	if (key == value) return mid;
	else if (key > value) return binary_search2(arr, mid + 1, high, key);
	else if (key < value) return binary_search2(arr, low, mid - 1, key);
}


