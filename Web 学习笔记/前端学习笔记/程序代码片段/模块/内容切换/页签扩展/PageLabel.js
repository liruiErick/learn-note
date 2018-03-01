/*
html 格式如下：
<div class="labelContainer">
	<ul class="labelWrap">
		<li>窗口1<i class="close"></i></li>
		<li>窗口2<i class="close"></i></li>
		<li>窗口3<i class="close"></i></li>
	</ul>
</div>
<div class="contentContainer">
	<ul class="contentWrap">
		<li><iframe></iframe></li>
		<li><iframe></iframe></li>
		<li><iframe></iframe></li>
	</ul>
</div>
*/

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('TabContent'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery', 'TabContent'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.PageLabel = factory(root.jQuery);
	}

}(this, function($, TabContent) {
	'use strict';

	var clickEventType = !!navigator.userAgent.match(/mobile/i) ? 'touchend' : 'click',

		defaultOptions = {
			labelWrap: '', // 标签包裹的选择器
			// 标签和关闭按钮的选择器必须是标签容器选择器的子选择器
			label: '', // 标签元素选择器
			close: '', // 关闭按钮元素选择器

			contentWrap: '', // 内容包裹的选择器
			content: '', // 内容元素选择器

			activeClass: 'active', // 焦点类
			tabDuration: 0, // 页签切换动画持续时间
			closeDuration: 300, // 页签关闭动画持续时间
			onTab: function(i, $label){}, // 页签切换回调，this指向当前页签的DOM对象，并将当前切换的索引以及页签的jQuery对象作为参数传入
			onClose: function(i, $label){} // 页签关闭回调，this指向关闭页签的DOM对象，并将当前关闭的索引以及页签的jQuery对象作为参数传入
			// 注意，onTab 与 onClose 的返回值如果 false，则会停止切换或者关闭行为
		};

	function PageLabel(options) {
		// 读取配置数据
		var opt = $.extend({}, defaultOptions, options);

		this.labelWrapSelector = opt.labelWrap;
		this.contentWrapSelector = opt.contentWrap;
		this.labelSelector = opt.label;
		this.closeSelector = opt.close;
		this.contentSelector = opt.content;
		this.activeClass = opt.activeClass;
		this.tabDuration = opt.tabDuration;
		this.closeDuration = opt.closeDuration;
		this.onTab = opt.onTab;
		this.onClose = opt.onClose;

		// 生成回调代理
		this._onClose = $.proxy(this, '_onClose');
		this._onTab = $.proxy(this, '_onTab');

		this.$labelWrap = this._getElem('labelWrap');
		this.$contentWrap = this._getElem('contentWrap');
		this.$labelContainer = this.$labelWrap.parent();

		this.$labelWrap.on(clickEventType, this.closeSelector, this._onClose);

		// 获取页签包裹的偏移量
		this.labelWrapOffsetLeft = parseFloat(this.$labelWrap.css('padding-left'))
								+ parseFloat(this.$labelWrap.css('margin-left'));

		this.labelWrapOffsetRight = parseFloat(this.$labelWrap.css('padding-right'))
								+ parseFloat(this.$labelWrap.css('margin-right'));

		// 获取当前页签数量以及全部宽度
		var $labels = this._getElem('label'),
			$contents = this._getElem('content'),
			_this = this;

		this.labels = []; // 储存每个标签的jQuery对象
		this.contents = []; // 储存每个内容的jQuery对象
		this.totalWidth = this.labelWrapOffsetLeft + this.labelWrapOffsetRight;

		this.curIndex = -1;
		this.noUpdateIndex = false; // 表示是否不刷新当前 curIndex

		$labels.each(function(i) {
			var $label = $labels.eq(i);

			if ($label.hasClass(_this.activeClass)) {
				_this.curIndex = i;
			}

			_this.totalWidth += $label.outerWidth(true);
			_this.labels.push($label);
			_this.contents.push($contents.eq(i));
		});

		this.$labelWrap.width(this.totalWidth);

		this.tabContent = new TabContent(this.labelSelector, {
			content: this.contentSelector,
			delegate: this.labelWrapSelector,
			activeClass: this.activeClass,
			initIndex: this.curIndex,
			tabDuration: this.tabDuration
		}, this._onTab);
	}

	var p = PageLabel.prototype;

	p._updatePos = function(index) {
		var labels = this.labels,
			$curLabel = labels[index],
			containerOffset = this.$labelContainer.offset(),
			curLabelOffset = $curLabel.offset(),

			containerWidth = this.$labelContainer.width(),
			curLabelWidth = $curLabel.outerWidth(true),
			prevLabelWidth = index - 1 >= 0 ? labels[index - 1].outerWidth(true) : 0,
			nextLabelWidth = index + 1 < labels.length ? labels[index + 1].outerWidth(true) : 0,

			minPos = containerOffset.left + prevLabelWidth + this.labelWrapOffsetLeft,
			maxPos = containerOffset.left + containerWidth - nextLabelWidth - this.labelWrapOffsetRight,
			curLeft = curLabelOffset.left - parseFloat($curLabel.css('margin-left')),
			curRight = curLeft + curLabelWidth,

			marginLeft = parseFloat(this.$labelWrap.css('margin-left'));

		if (isNaN(marginLeft)) marginLeft = 0;

		if (minPos > curLeft) {
			marginLeft += minPos - curLeft;
		} else if (maxPos < curRight) {
			marginLeft += maxPos - curRight;
		}

		// 页签包裹优先贴紧左侧，如果左侧溢出，则保证页签包裹右侧与容器右侧贴紧
		marginLeft = Math.min(0, Math.max(marginLeft, containerWidth - this.totalWidth));

		this.$labelWrap.stop().animate({ 'margin-left': marginLeft }, this.tabDuration);
	};

	p._getCurIndex = function($label) {
		var index = -1,
			label = $label[0];

		$.each(this.labels, function(i, $n) {
			if ($n[0] === label) {
				index = i;
				return false;
			}
		});
		return index;
	};

	p._onClose = function(e) {
		var $close = $(e.currentTarget),
			$label = $close.siblings(this.labelSelector);

		if (!$label.length) {
			$label = $close.parents(this.labelSelector);
		}

		var index = this._getCurIndex($label);

		if (index < 0) return false;
		if (this.onClose.call($label[0], index, $label) === false) return false;

		this.close(index);
		return false;
	};

	p._getElem = function(keyword) {
		return keyword === 'label' ? $(this.labelWrapSelector + ' ' + this[keyword + 'Selector']) : $(this[keyword + 'Selector']);
	};

	p._onTab = function(i, $label) {
		var index = this._getCurIndex($label);

		if (index < 0) return false;
		if (this.onTab.call($label[0], index, $label) === false) return false;

		this.curIndex = index;
		this._updatePos(index);
	};

	// 获取当前所有页签 jQuery 对象所组成的数组
	p.getLabels = function() {
		return this.labels;
	};

	// 获取当前所有内容 jQuery 对象所组成的数组
	p.getContents = function() {
		return this.contents;
	};

	// 获取当前焦点页签的索引值
	p.getIndex = function() {
		return this.curIndex;
	};

	p.tab = function(index) {
		this.tabContent.tab(index);
	};

	// 打开一个页签
	// label 为新页签的 html 结构
	// content 为新页签对应内容的 html 结构
	p.open = function(label, content) {
		var $label = $(label),
			$content = $(content).hide();

		if (!$label.length) return;

		this.$labelWrap.append($label);
		this.$contentWrap.append($content);
		this.labels.push($label);
		this.contents.push($content);

		// 从新计算宽度
		this.totalWidth += $label.outerWidth(true);
		// 更新总宽度
		this.$labelWrap.width(this.totalWidth);

		// 页签打开动画
		var marginTop = parseFloat($label.css('margin-top')),
			marginRight = parseFloat($label.css('margin-right')),
			width = $label.width(),
			height = $label.height();

		$label.css({
			'overflow': 'hidden',
			'width': 0,
			'height': 0,
			'margin-right': marginRight + width,
			'margin-top': marginTop + height
		});

		$label.animate({
			'width': width,
			'height': height,
			'margin-right': marginRight,
			'margin-top': marginTop
		}, this.closeDuration, function() {
			$label.css({
				'overflow': '',
				'width': '',
				'height': '',
				'margin-right': '',
				'margin-top': ''
			});
		});

		this.tab(this.labels.length - 1);
	};

	// 关闭一个页签
	// $label 为可选参数，表示要关闭页签的 jQuery 对象
	// $content 为可选参数，表示要关闭页签对应内容的 jQuery 对象
	p.close = function(index) {
		if (index < 0 || index >= this.labels.length) return;

		var $label = this.labels.splice(index, 1)[0],
			$content = this.contents.splice(index, 1)[0],
			maxIndex = this.labels.length;

		// 从新计算宽度
		this.totalWidth -= $label.outerWidth(true);

		if (index === this.curIndex) { // 如果关闭的为当前页签
			var newIndex;
			if (maxIndex > index) { // 如果关闭的标签后面还有标签，则自动切换到后一个的页签，且 curIndex 不改变
				newIndex = index + 1;
			} else if (index !== 0) { // 如果关闭的标签后面没有标签，而前面有标签，则自动切换到前一个的页签
				newIndex = index - 1;
			} else { // 如果关闭的标签前后都没有标签，则切换到空页
				newIndex = -1;
			}

			this.tab(newIndex);
		} else {
			if (index < this.curIndex) {
				this.curIndex--;
			}
			this._updatePos(this.curIndex);
		}

		// 页签移除动画
		var marginTop = parseFloat($label.css('margin-top')),
			height = $label.height(),
			_this = this;

		if (isNaN(marginTop)) marginTop = 0;

		$label
			.stop()
			.css('overflow', 'hidden')
			.animate({
				'width': 0,
				'height': 0,
				'padding-left': 0,
				'padding-right': 0,
				'margin-left': 0,
				'margin-right': 0,
				'margin-top': marginTop + height
			}, this.closeDuration, function() {
				$label.remove();
				$content.remove();
			});
	};

	p.destroy = function() {
		this.$labelWrap.off(clickEventType, this.closeSelector, this._onClose);
		this.$labelWrap = null;
		this.$labelContainer = null;
	};

	return PageLabel;
}));
