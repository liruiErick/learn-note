
// 禁止TAB正向切换
function disableTAB(select) {

	var tabIdx = -2;
	$(select).each(function() {
		disableTAB(this);
	});

	// 禁止TAB正向切换
	function disableTAB(container) {
		var $container = $(container),
			$allInputs = $container.find('input, textarea, select'),
		    $tabIndexElems = $container.find('a, area, button, object'),
		    len = $allInputs.length;
		tabIdx -= len;
		// 禁止 IOS TAB 正向切换
		for (var i = 0, j = tabIdx; i < len; i++, j++) {
			$allInputs[i].tabIndex = j;
		}
		// 禁止 PC TAB 自动选中
		for (var i = 0, len = $tabIndexElems.length; i < len; i++) {
			$tabIndexElems[i].tabIndex = -1;
		}
	}
}


// 为 jQuery 扩展该方法
(function() {

$.fn.disableTAB = function() {

	this.each(function() {
		disableTAB(this);
	});

	return this;
}

var tabIdx = -2;

// 禁止TAB正向切换
function disableTAB(container) {
	var $container = $(container),
		$allInputs = $container.find('input, textarea, select'),
	    $tabIndexElems = $container.find('a, area, button, object'),
	    len = $allInputs.length;
	tabIdx -= len;
	// 禁止 IOS TAB 正向切换
	for (var i = 0, j = tabIdx; i < len; i++, j++) {
		$allInputs[i].tabIndex = j;
	}
	// 禁止 PC TAB 自动选中
	for (var i = 0, len = $tabIndexElems.length; i < len; i++) {
		$tabIndexElems[i].tabIndex = -1;
	}
}

})();