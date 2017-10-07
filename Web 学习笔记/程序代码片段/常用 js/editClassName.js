// 检查元素是否引用了该类
function hasClassName(inElement, inClassName)
{
	var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
	return regExp.test(inElement.className);
}
// 将该类加入到元素的引用类中
function addClassName(inElement, inClassName)
{
	if (!hasClassName(inElement, inClassName))
		inElement.className = [inElement.className, inClassName].join(' ');
}
// 将该类从元素的引用类中删除
function removeClassName(inElement, inClassName)
{
	if (hasClassName(inElement, inClassName)) {
		var regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
		var curClasses = inElement.className;
		inElement.className = curClasses.replace(regExp, ' ');
	}
}
// 切换引用类，即指定类不存在这添加，指定类存在则删除
function toggleClassName(inElement, inClassName)
{
	if (hasClassName(inElement, inClassName))
		removeClassName(inElement, inClassName);
	else
		addClassName(inElement, inClassName);
}