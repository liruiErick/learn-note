// 获取对象键所组成的数组
function getObjectKeys(object) {
	var keys = [];
	for (var property in object) keys.push(property);
	return keys;
}
// 获取对象值所组成的数组
function getObjectValues(object) {
	var values = [];
	for (var property in object) values.push(object[property]);
	return values;
}

/**
 * 根据 key 和 value 在数组中查找对应的对象，并返回该对象
 * @param  {String} key    要查找值对应的 key
 * @param  {*}      value  要查找的值
 * @param  {Array}  array  查找对象所在的数组，数组中每一个值都是一个对象
 * @return {Object} 返回该对象
 */
function getObjectByKeyValue(key, value, array) {
	for (var i = 0, obj; obj = array[i++];) {
		if (typeof obj === 'object' && obj[key] && obj[key] === value) {
			return obj;
		}
	}
}

/** 将多级对象转化成一级对象
	{
		a: 1,
		b: 2,
		c: {
			a: 1,
			b: 2,
			c: {
				a: 1,
				b: 2
			}
		}
	}
	=>
	{
		a: 1
		b: 2
		c.a: 1
		c.b: 2
		c.c.a: 1
		c.c.b: 2
	}
*/
function convertObj(obj, baseKey) {
	baseKey = baseKey || '';

	var key,
		value,
		newObj = {};

	for (var k in obj) {
		key = baseKey + k;
		value = obj[k];
		if (typeof value === 'object') {
			$.extend(newObj, convertObj(value, key + '.'));
		} else {
			newObj[key] = value;
		}
	}

	return newObj;
}

// 设置对象的值
// 例如：
//   setValue(obj, 'a.b.c', 100) => obj.a.b.c === 100
//   setValue(obj, '', { a: 100 }) => obj.a === 100
function setValue(obj, key, value) {
	if (!key) {
		if (typeof value === 'object') {
			$.extend(obj, value);
		}
		return;
	}

	var reg = /(\[[^\.]*)(\.+)([^\.]*\])/g, // 匹配 a.b['a.b'] 中的 ['a.b']
		reg2 = /(.+)\[(.+)\]/, // 匹配 a[b] 中的 a 和 b
		reg3 = /^['"](.+)['"]$/; // 匹配 'b' 中的 b

	key = key.replace(reg, function(x, $1, $2, $3) {
		return $1 + $2.replace(/\./g, '\n') + $3;
	});

	var lastObj = obj,
		arr = key.split('.');

	for (var i = 0, l = arr.length, n; n = arr[i++];) {
		n = n.replace(/\n/g, '.');
		var res = reg2.exec(n),
			prop = res ? res[1] : n;

		if (res) {
			var sub = res[2],
				res2 = reg3.exec(sub),
				sub = res2 ? res2[1] : sub,
				isArr = !res2 && sub == parseInt(sub);

			lastObj = lastObj[prop] = lastObj[prop] || (isArr ? [] : {});
			prop = sub;
		}

		if (i === l) {
			lastObj[prop] = value;
		} else {
			lastObj = lastObj[prop] = lastObj[prop] || {};
		}
	}
}

// 获取对象的值
// 例如：
//   getValue(obj, 'a.b.c') => 100
//   getValue(obj, '') => undefined
function getValue(obj, key) {
	if (!key) return undefined;
	try {
		return eval('obj' + (key.indexOf('[') === 0 ? '' : '.') + key);
	} catch(err) {
		return undefined;
	}
}
