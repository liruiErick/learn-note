// 设置属性
export default function(elem, prop, value) {
    if (typeof prop === 'object') {
        for (let p in prop) {
            elem[p] = prop[p];
        }
        return elem;
    }

    if (value === undefined) {
        return elem[prop];
    } else {
        elem[prop] = value;
        return elem;
    }
}