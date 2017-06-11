// 要求 prop 声明是如下形式
// :prop="'data[' + index + '].value'"
let colRules = {
    validator(roule, value, callback) {
        // 获取自己的 index 和属性 key
        let selfIndex = rule.field.match(/\[(\d+)\]/)[1];
        let selfKey = rule.field.match(/\]\.([\w\d]+)/)[1];
        let valid = true;
        this.form.data.some((item, i) => {
            if (i == selfIndex) return;
            if (item.key == value) {
                callback(new Error('表单不能重复'));
                return true;
            }
        });
        valid && callback();
    }
}