/**
 * 函数名：cutStr
 * 函数说明：将多行文本按指定高度截断，并在末尾加三点
 * @param selector 多行文本元素的jQuery对象
 * @param row 文本限制行数
 * @param lineHeight 文本行高的像素值
 */
function cutStr($obj, row, lineHeight) {
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/;
	$obj.each(function(){
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});

		var height = $this.height();
		if (height <= limitHeight) return;
		var text = $this.text();
		if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
			$this.text(text.substr(0, text.length * maxHeight / height));
		}
		while ($this.height() > limitHeight) {
			$this.text($this.text().replace(patt, '...'));
		}
	});
}
// 保留字段尾部<span>元素，例如：<span>[详情]</span>
function cutStr($obj, row, lineHeight) {
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/;
	$obj.each(function(){
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});

		var height = $this.height();
		if (height <= limitHeight) return;
		var textNode = $this.contents().first()[0]; //获取它的文本节点
		if (!textNode) return;
		var text = textNode.nodeValue;
		if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
			textNode.nodeValue = text.substr(0, text.length * maxHeight / height);
		}
		while ($this.height() > limitHeight) {
			textNode.nodeValue = textNode.nodeValue.replace(patt, '...');
		}
	});
}
// 字段尾部附带“展开”“收起'功能的字符截取
function cutStr($obj, row, lineHeight, btnColor) {
	btnColor = btnColor || '#f30';
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/;
	$obj.each(function(){
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});

		var height = $this.height();
		if (height <= limitHeight) return;
		$this.append('<a href="javascript:void(0);" style="color:'+btnColor+';">[展开]</a>'); //如果文本超出添加展开按钮
		var allShow = false; //文本是否完全显示
		var textNode = $this.contents().first()[0]; //获取它的文本节点
		if (!textNode) return;
		var text = textNode.nodeValue;
		if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
			textNode.nodeValue = text.substr(0, text.length * maxHeight / height);
		}
		while ($this.height() > limitHeight) {
			textNode.nodeValue = textNode.nodeValue.replace(patt, '...');
		}
		var cutText = textNode.nodeValue;
		var $a = $this.children('a');
		$a.click(function() {
			if (allShow) {
				allShow = false;
				textNode.nodeValue = cutText;
				$a.text('[展开]');
			} else {
				allShow = true;
				textNode.nodeValue = text;
				$a.text('[收起]');
			}
		});
	});
}




/* 屏幕自适应的字符截取 */
(function(){

// 一般字段截取
function cutStr($obj, row, lineHeight) {
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/; //逐个字符检查
	$obj.each(function(){ // 先保存原始文本
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});
		$this.data('text', $this.text());
	});
	resize();
	$(window).resize(resize);
	function resize() {
		$obj.each(function(){
			var $this = $(this),
				height = $this.height(),
				text = $this.data('text');
			$this.text(text); // 屏幕调整后找回原始文本
			if (height <= limitHeight) return;
			if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
				$this.text(text.substr(0, text.length * maxHeight / height));
			}
			while ($this.height() > limitHeight) {
				$this.text($this.text().replace(patt, '...'));
			}
		});
	}
}

// 保留字段尾部<span>元素，例如：<span>[详情]</span>
function cutStr($obj, row, lineHeight) {
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/; //逐个字符检查
	$obj.each(function(){ // 先保存原始文本
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});
		$this.data('text', $this.contents().first().text());
	});
	resize();
	$(window).resize(resize);
	function resize() {
		$obj.each(function(){
			var $this = $(this),
				height = $this.height(),
				textNode = $this.contents().first()[0]; //获取它的文本节点
			if (!textNode) return;
			var text = $this.data('text');
			textNode.nodeValue = text; // 屏幕调整后找回原始文本
			if (height <= limitHeight) return;
			if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
				textNode.nodeValue = text.substr(0, text.length * maxHeight / height);
			}
			while ($this.height() > limitHeight) {
				textNode.nodeValue = textNode.nodeValue.replace(patt, '...');
			}
		});
	}
}

// 字段尾部附带“展开”“收起“功能的字符截取
function cutStr($obj, row, lineHeight, btnColor) {
	btnColor = btnColor || '#f30';
	var limitHeight = row * lineHeight,
		maxRow = row * 3, // 假设最小的半角字符仅占最大的全角字符1/3的位置，并且所截取的行内全是最小的半角字符，而其余的行全是最大全角字符
		maxHeight = maxRow * lineHeight,
		patt = /(\s)*(.|\n)(\.\.\.)?$/;
	$obj.each(function(){ // 先保存原始文本
		var $this = $(this);
		$this.css({'height': 'auto', 'line-height': lineHeight+'px', 'min-height': limitHeight});
		$this.data('text', $this.contents().first().text());
	});
	resize();
	$(window).resize(resize);
	function resize() {
		$obj.each(function(){
			var $this = $(this),
				height = $this.height(),
				text = $this.data('text');
			$this.empty(); //先清空之前的所有内容
			$this.text(text); // 屏幕调整后找回原始文
			if (height <= limitHeight) return;
			$this.append('<a href="javascript:void(0);" style="color:'+btnColor+';">[展开]</a>'); //如果文本超出添加展开按钮
			var allShow = false; //文本是否完全显示
			var textNode = $this.contents().first()[0]; //获取它的文本节点
			if (!textNode) return;
			if (height > maxHeight) { //先进行一次模糊预截取，防止文本内容过多的时候导致截取过慢
				textNode.nodeValue = text.substr(0, text.length * maxHeight / height);
			}
			while ($this.height() > limitHeight) {
				textNode.nodeValue = textNode.nodeValue.replace(patt, '...');
			}
			var cutText = textNode.nodeValue;
			var $a = $this.children('a');
			$a.click(function() {
				if (allShow) {
					allShow = false;
					textNode.nodeValue = cutText;
					$a.text('[展开]');
				} else {
					allShow = true;
					textNode.nodeValue = text;
					$a.text('[收起]');
				}
			});
		});
	}
}


})();