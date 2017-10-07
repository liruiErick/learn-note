// 将驼峰命名法的单词用 “-” 隔开
function toKebabCase(str) {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

// "-" 转小驼峰命名
function toSmallCamelCase(str){
    return str.replace(/-(\w)/g, function($0, $1){
        return $1.toUpperCase();
    });
}

// "-" 转大驼峰命名
function toBigCamelCase(str){
    return str.replace(/^\w/i, function($0){
        return $0.toUpperCase();
    }).replace(/-(\w)/g, function($0, $1){
        return $1.toUpperCase();
    });
}