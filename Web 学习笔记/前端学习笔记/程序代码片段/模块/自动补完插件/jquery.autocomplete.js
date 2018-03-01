/*!
 * jQuery AutoComplete v0.1.0
 * @author baijunjie
 */

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	$.fn.autocomplete = function(options) {

		// 默认选项
		var defaultOptions = {
			search: [], // 待查询的数组
			result: '', // 显示结果容器的选择器
			itemHtml: '<li>', // 查询后产生选项html结构
			activeClass: 'active',
			maxItemCount: 0, // 限制选项最大数目，0为不限制
			onClick: function(val) {} // 单击选项后的回调，并将选择的值作为参数传入，this指向点击选项的DOM对象
		};

		var opt = $.extend({}, defaultOptions, options),
			textArr = opt.search,
			searchCount = textArr.length;

		this.each(function() {
			var currentSelection = -1,
				currentSelectList = [],
				currentValue = '';

			// 查询结果容器
			var $resultContainer = $(opt.result);
			if (!$resultContainer.length) {
				$resultContainer = $('<div>');
				$resultContainer.addClass('autocomplete-result-container');
			}

			var $input = $(this);
			$input.blur(function(){
				currentSelection = -1;
				currentSelectList = [];
				$resultContainer.empty();
			});

			$input.on('keyup', function(e) {
				switch(e.which) {
					case 38: // Up arrow
						e.preventDefault();
						var $children = $resultContainer.children();
						$children.removeClass(opt.activeClass);

						if (currentSelection >= 0) currentSelection--;
						else currentSelection = currentSelectList.length - 1;

						if (currentSelection >= 0) {
							$children.eq(currentSelection).addClass(opt.activeClass);
							$input.val(currentSelectList[currentSelection]);
						} else {
							$input.val(currentValue);
						}
						break;
					case 40: // Down arrow
						e.preventDefault();
						var $children = $resultContainer.children();
						$children.removeClass(opt.activeClass);

						if (currentSelection < currentSelectList.length) currentSelection++;
						else currentSelection = 0;

						if (currentSelection < currentSelectList.length) {
							$children.eq(currentSelection).addClass(opt.activeClass);
							$input.val(currentSelectList[currentSelection]);
						} else {
							$input.val(currentValue);
						}
						break;
				}
			});

			$input.on('input propertychange', function(e){
				empty();
				currentValue = $input.val();

				if(currentValue){
					var reg = new RegExp(currentValue, 'i'),
						$html = $();

					for(var i = 0, text; text = textArr[i++];) {
						if(reg.test(text)) {
							currentSelectList.push(text);
						}
					}

					currentSelectList.sort();
					if (opt.maxItemCount) currentSelectList.length = opt.maxItemCount;

					for(var i = 0, text; text = currentSelectList[i++];) {
						var $item = $(opt.itemHtml);
						$item
							.addClass('autocomplete-result-item')
							.css('cursor', 'pointer')
							.text(text);

						$html = $html.add($item);
					}

					$resultContainer.append($html);
				}
			});

			$resultContainer.on('click', '.autocomplete-result-item', function() {
				var $item = $(this);
				currentSelection = $item.index();
				$input.val(currentSelectList[currentSelection]);
				empty();
				opt.onClick.call(this, currentSelectList[currentSelection]);
			});

			$resultContainer.on('mouseenter', '.autocomplete-result-item', function() {
				var $item = $(this);
				currentSelection = $item.index();
				$input.val(currentSelectList[currentSelection]);
				$resultContainer.children().removeClass(opt.activeClass);
				$item.addClass(opt.activeClass);
			});

			$resultContainer.on('mouseleave', '.autocomplete-result-item', function() {
				var $item = $(this);
				currentSelection = -1;
				$input.val(currentValue);
				$resultContainer.children().removeClass(opt.activeClass);
			});

			function empty() {
				currentSelection = -1;
				currentSelectList = [];
				$resultContainer.empty();
			}
		});

		return this;
	};

	return $;
}));
