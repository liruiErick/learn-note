// 获取 dom1 与 dom2 这两个DOM对象的第一个共同容器的DOM对象
// 如果 dom1 包含 dom2，则直接返回 dom1
// 否则在 dom1 的父级中查找第一个包含 dom2 的元素
function getFirstParent(dom1, dom2) {
	if ($.contains(dom1, dom2)) {
		return $dom1;
	}

	var $dom1_parents = $(dom1).parents(),
		first_prant = null;

	$dom1_parents.each(function() {
		if ($.contains(this, dom2)) {
			first_prant = this;
			return false;
		}
	});

	return first_prant;
}