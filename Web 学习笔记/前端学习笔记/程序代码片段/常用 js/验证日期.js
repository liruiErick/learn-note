// 验证日期范围是否交错
// dateArr 是一个日期范围对象数组，每一个对象包含 beginTime 和 endTime
dateArr.some((item, i) => {
    let range;
    let l = i;
    while (l--) {
        range = dateArr[l];

        if (item.beginTime >= range.beginTime && item.beginTime <= range.endTime) {
            // dateArr[i].beginTime 验证没有通过
            return true;
        } else if (item.endTime <= range.endTime && item.endTime >= range.endTime) {
            // dateArr[i].endTime 验证没有通过
            return true;
        } else if (item.beginTime <= range.beginTime && item.endTime >= range.endTime) {
            // dateArr[i].beginTime 验证没有通过
            // dateArr[i].endTime 验证没有通过
            return true;
        }
    }
});