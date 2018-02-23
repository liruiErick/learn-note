// 每3位用“,”隔开
// 也可以直接使用 number.toLocaleString() 来实现该功能
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}

// 数字补位
// 将数字转换为固定长度的字符串，位数不足则在前面补0
function digitalFillBit(val, n) {
    n = n || 2;
    val = val + '';

    if (val.length < n) {
        var l = n - val.length;
        while(l--) {
            val = '0' + val;
        }
    }

    return val;
}