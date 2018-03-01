// 判断是否为百分比
u.isPercent = function(value) {
	return /%$/.test(value + '');
};
// 判断是否为em
u.isEm = function(value) {
	return /em$/.test(value + '');
};
// 像素转百分比
u.pxToPercent = function(value, base) {
	if (typeof value !== 'number') value = parseFloat(value);
	if (typeof base !== 'number') base = parseFloat(base);
	return value / base * 100 + '%';
};
// 像素转em
u.pxToEm = function(value, base) {
	if (typeof value !== 'number') value = parseFloat(value);
	if (typeof base !== 'number') base = parseFloat(base);
	return value / base + 'em';
};
// 百分比转像素
u.percentToPx = function(value, base) {
	if (typeof value !== 'number') value = parseFloat(value);
	if (typeof base !== 'number') base = parseFloat(base);
	return value / 100 * base;
};
// em转像素
u.emToPx = function(value, base) {
	if (typeof value !== 'number') value = parseFloat(value);
	if (typeof base !== 'number') base = parseFloat(base);
	return value * base;
};
// 单位更换
u.unitTo = function(value, unit) {
	if (typeof value !== 'number') value = parseFloat(value);
	if (!unit) return value;
	return value + unit;
};

// 将样式属性由js书写风格转为css书写风格
u.styleFormat = function(style) {
	var newStyle = {};
	for (var i in style) {
		var prop = i.replace(/([A-Z])/g, '-$1'); //如marginLeft转为margin-Left
		prop = prop.toLowerCase(); //再转为小写margin-left
		newStyle[prop] = style[i];
	}
	return newStyle;
};


// ### uncamel(str)
// Converts a camelcase string to a dasherized string.
//
//    'marginLeft'              => 'margin-left'
//    'webkitTransformOrigin'   => '-webkit-transform-origin'
//
u.uncamel = function(str) {
	if (!str.indexOf('webkit')) str = 'W' + str.substr(1);
	if (!str.indexOf('moz') || !str.indexOf('ms')) str = 'M' + str.substr(1);
	return str.replace(/([A-Z])/g, '-$1').toLowerCase();
};

// ### unit(number, unit)
//
//    unit(30, 'px')      => '30px'
//    unit('30%', 'px')   => '30%'
//
u.unit = function(i, units) {
	if ((typeof i === 'string') && (!i.match(/^[\-0-9\.]+$/))) return i;
	else return '' + i + units;
};

// ### getUnit(str)
//
//    getUnit('30px')      => 'px'
//    getUnit('30%')       => '%'
//    getUnit('30')        => ''
//
u.getUnit = function(value) {
	if (typeof value !== 'string') return '';
	var s = value.match(/^[\-0-9\.]+/);
	if (!s) return '';
	return value.substr(s[0].length) || '';
};
