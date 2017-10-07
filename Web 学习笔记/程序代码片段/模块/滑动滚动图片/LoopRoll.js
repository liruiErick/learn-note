/*! 循环卷屏 */

/*
// LoopRoll 结构如下
<div id="loopRoll">
	<ul>
		<li></li>
		<li></li>
	</ul>
</div>

// 初始化
var loopRoll = new LoopRoll($("#loopRoll"), {
	prevBtn: ".prevBtn",
	nextBtn: ".nextBtn"
});

// 开始卷屏
loopRoll.play();

// 停止卷屏
loopRoll.stop();

// 切换到前一个
loopRoll.prevTab();

// 切换到下一个
loopRoll.nextTab();

// 刷新内容
loopRoll.update();

// 销毁 LoopRoll 对象
loopRoll.destroy();

*/

(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.LoopRoll = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	var is_lte_IE8 = false,
		version = navigator.appVersion.match(/MSIE (\d+\.\d)/),
		versionNum = version && version[1] - 0;
	if (navigator.appName === 'Microsoft Internet Explorer' && versionNum <= 8) is_lte_IE8 = true;

	var $win = $(window),

		defaultOptions = {
			prevBtn: '', // 前一个按钮
			nextBtn: '', // 前一个按钮
			isVer: false, // 是否为垂直
			frameRate: 40 // 卷平动画的帧频率
		};

	function LoopRoll() {
		this._init.apply(this, arguments);
	}

	var p = LoopRoll.prototype;

	p._init = function(container, options) {
		var opt = $.extend({}, defaultOptions, options);

		this.$prevBtn = $(opt.prevBtn);
		this.$nextBtn = $(opt.nextBtn);
		this.hasPrevBtn = !!this.$prevBtn.length;
		this.hasNextBtn = !!this.$nextBtn.length;

		this.isVer = opt.isVer;
		this.frameRate = opt.frameRate;

		this.isRoll = false; // 是否正在卷屏
		this.isSlide = false; // 是否正在滑动
		this.inited = false; // 是否初始化完成

		this.$container = $(container).css({'overflow': 'hidden', 'user-select': 'none'});
		if (this.$container.css('position') === 'static') {
			this.$container.css('position', 'relative');
		}

		this.$content = this.$container.children().first();

		this.$wrap = this.$content
			.wrapAll('<div>')
			.parent()
			.css({
				'position': 'absolute',
				'left': 0,
				'right': 0,
				'top': 0,
				'bottom': 0
			});

		if ($.cssHooks.x) {
			if (this.isVer) this.tabAttr = 'y';
			else this.tabAttr = 'x';

			if ($.support.transform3d) {
				this.$wrap.css('z', 0);
			}
		} else {
			if (this.isVer) this.tabAttr = 'top';
			else this.tabAttr = 'left';
		}

		this.sizeApi = this.isVer ? 'height' : 'width';

		// 生成回调代理
		this.prevTab = $.proxy(this, 'prevTab');
		this.nextTab = $.proxy(this, 'nextTab');
		this._resize = $.proxy(this, '_resize');
		this._run = $.proxy(this, '_run');

		this.update();

		this._addEvent();
	}

	p._addEvent = function() {
		$win.on('resize', this._resize);

		if (this.hasPrevBtn) {
			this.$prevBtn.on('click', this.prevTab);
		}
		if (this.hasNextBtn) {
			this.$nextBtn.on('click', this.nextTab);
		}
	};

	p._removeEvent = function() {
		$win.off('resize', this._resize);

		if (this.hasPrevBtn) {
			this.$prevBtn.off('click', this.prevTab);
		}
		if (this.hasNextBtn) {
			this.$nextBtn.off('click', this.nextTab);
		}
	};

	p._resize = function() {
		if (!$.contains(document, this.$wrap[0])) return; //如果容器被移出文档，则不向下执行

		this.isRoll && this._stop();
		// 如果该元素被隐藏，那么先将隐藏的元素显示出来，计算完宽度后再隐藏
		hideAction(this.$wrap, function() {
			this.containerSize = this.$container[this.sizeApi]();
			this.$wrap[this.sizeApi](this.containerSize);

			var itemPos = [0],
				contentSize = 0,
				itemSize = 0,
				apiName = 'outer' + this.sizeApi.substr(0, 1).toUpperCase() + this.sizeApi.substr(1);

			this.$content
				.css('float', 'none')
				.css(this.sizeApi, '')
				.children()
				.each(function() {
					itemSize = $(this)[apiName](true);
					contentSize += itemSize;
					itemPos.push(-contentSize);
				});

			this.itemPos = itemPos; // 用于保存每个项目的位置
			this.itemCount = itemPos.length - 1;
			this.contentSize = contentSize;

		}, this);

		var $contents = this.$wrap.children();
		$contents[this.sizeApi](this.contentSize);

		if (!this.isVer) {
			$contents.css('float', 'left');
		}

		this._clone();
		this.$wrap[this.sizeApi](this.contentCount * this.contentSize);

		this.totalTime = this.frameRate * this.contentSize; //完成一次卷屏需要的总毫秒数
		this.maxPos = -this.contentSize;

		this.inited = true;

		if (this.isRoll) this._run();
		else this._reset();
	};

	p._clone = function() { //迭代克隆，直到总宽度能够达到无缝循环的宽度
		if (this.contentCount * this.contentSize < this.containerSize + this.contentSize) {
			this.contentCount++;
			this.$wrap.append(this.$content.clone());
			this._clone();
		}
	};

	// 获取当前的索引
	p._getIndex = function() {
		var curPos = this.curPos,
			curIndex = -1;
		$.each(this.itemPos, function(i, v) {
			if (curPos > v) {
				return false;
			}
			curIndex = i;
		});
		return curIndex;
	};

	// 根据目标位置跳转
	p._gotoIndex = function(index) {
		this.isSlide = true;

		if (index < 0) {
			index = (index % this.itemCount + this.itemCount) % this.itemCount;
			this.curPos -= this.contentSize;
			this.$wrap.css(this.tabAttr, this.curPos);
		}

		var _this = this,
			tarPos = this.itemPos[index],
			style = {};
		style[this.tabAttr] = tarPos;
		this.$wrap.animate(style, function() {
			_this.isSlide = false;
			_this._run();
		});
	};

	// 重置图片位置
	p._reset = function() {
		this.curPos = parseFloat(this.$wrap.css(this.tabAttr));
		if (this.curPos > 0) {
			this.curPos -= this.contentSize;
		} else if (this.curPos <= this.maxPos) {
			this.curPos += this.contentSize;
		}
		this.$wrap.css(this.tabAttr, this.curPos);
	};

	// 根据当前位置，获取到达最大位置的剩余时间
	p._getTime = function() {
		return (1 - this.curPos / this.maxPos) * this.totalTime;
	};

	// 运行滚动
	p._run = function() {
		if (!this.inited) return;

		this._reset();

		var style = {};
		style[this.tabAttr] = this.maxPos;
		this.$wrap.animate(style, this._getTime(), 'linear', this._run);
	};

	p._stop = function() {
		this.$wrap.stop();
		this._reset();
	};

	p.play = function() {
		if (this.isRoll) return;
		this.isRoll = true;
		this._run();
	};

	p.stop = function() {
		if (!this.isRoll) return;
		this.isRoll = false;
		this._stop();
	};

	p.prevTab = function() {
		if (this.isSlide) return;
		this._stop();
		var curIndex = this._getIndex();
		this._gotoIndex(--curIndex);
	};

	p.nextTab = function() {
		if (this.isSlide) return;
		this._stop();
		var curIndex = this._getIndex();
		this._gotoIndex(++curIndex);
	};

	p.update = function() {
		this.$wrap.children(':not(:first)').remove();
		this.contentCount = 1;

		// 如果浏览器版本为IE8及以下浏览器，则异步执行一次resize
		if (is_lte_IE8) window.setTimeout(this._resize, 0);
		else this._resize();
	};

	p.destroy = function() {
		this._removeEvent();
		this.$container = null;
		this.$wrap = null;
		this.$item = null;
		this.$prevBtn = null;
		this.$nextBtn = null;
	};

	function hideAction(jq, func, target) {
		var $hide = $();
		$.each(jq, function(i, n){
			var $n = (n instanceof jQuery) ? n : $(n),
				$hidden = $n.parents().addBack().filter(':hidden'),
				$none,
				i = $hidden.length;
			while (i--) {
				if (!$n.is(':hidden')) break;
				$none = $hidden.eq(i);
				if ($none.css('display') === 'none') $hide = $hide.add($none.show());
			}
		});
		if (typeof(func) === 'function') func.call(target || this);
		$hide.hide();
	}

	return LoopRoll;

}));
