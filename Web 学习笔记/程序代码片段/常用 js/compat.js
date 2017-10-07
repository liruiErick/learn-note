/**
 * @brief 在js中兼容各种核心浏览器的属性和方法
 * @param element dom对象或字符串（id号）
 * @param methodOrProperty 属性或者方法的字符串形式
 * @param value 如果第二个参数为属性，则该值为要传给属性的属性值
 * @return 返回属性或方法的返回值
 */
function compat(element, methodOrProperty, value)
{
	element = ('string'==typeof element) ? document.getElementById(element) : element;
    if(!element) return null;
	var returnValue;
	['webkit', 'moz', 'ms', 'o', ''].forEach(function(prefix) {
		var postfix;
		if (prefix != '')
		{
			// 有前缀，方法或属性的首字母大写
			postfix = methodOrProperty.slice(0,1).toUpperCase() + methodOrProperty.slice(1);
		}
		else postfix = methodOrProperty;

		var type = typeof element[prefix + postfix];
		if (type != 'undefined')
		{
			if (type == 'function')
			{
				returnValue = element[prefix + postfix]();
			}
			else
			{
				if (value)
				{
					returnValue = element[prefix + postfix] = value;
				}
				else returnValue = element[prefix + postfix];
			}
			// 当确定有返回值时，表示方法或属性已调用完毕，跳出循环并返回该返回值
			if (returnValue) return returnValue;
		}
	});
    return returnValue;
}