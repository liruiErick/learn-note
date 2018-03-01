function hasBindValue(arr, obj) {
    return arr.some(item => item[0] === obj);
}

function setBindValue(arr, obj, bindValue) {
    if (!arr.some(item => {
        if (item[0] === obj) {
            item[1] = bindValue;
            return true;
        }
    })) {
        arr.push([obj, bindValue]);
    }
    return arr;
}

function getBindValue(arr, obj) {
    let bindValue;
    arr.some(item => {
        if (item[0] === obj) {
            bindValue = item[1];
            return true;
        }
    });
    return bindValue;
}

function deleteBindValue(arr, obj) {
    arr.some((item, index) => {
        if (item[0] === obj) {
            arr.splice(index, 1);
            return true;
        }
    });
    return arr;
}