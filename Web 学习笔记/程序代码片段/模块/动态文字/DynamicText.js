(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.DynamicText = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';

	// 动态文字
	// 基于 jQuery 和 jQuery Animate 扩展插件
	function DynamicText(selector, option) {
		var opt = {
			loop: false, // 设置循环次数，如果是布尔值，则true表示无限循环，false表示不循环
			interval: 3000, // 循环的时间间隔
			effect: 'scale', // 默认为缩放效果
			wrap: 'span' // 包裹文字的标签
		};

		$.extend(opt, option);

		this.loop = opt.loop;
		this.interval = opt.interval;
		this.wrap = opt.wrap;
		this.effect = opt.effect;

		this.texts = []; //一个二维数组，储存所有文本段数组，每个数组储存所有字符的 jQuery 对象
		this.timerId = 0; //用于储存计时器id号

		this._checkText = $.proxy(this, '_checkText');
		this._textAnimate = $.proxy(this, '_textAnimate');
		this._hide = $.proxy(this, '_hide');
		this._show = $.proxy(this, '_show');

		//检查所有的文本字段
		this.$container = $(selector);
		this._createText();
	}

	DynamicText.prototype = {
		_createText: function() { //创建文本段
			var _this = this;

			this.$container.each(function() {
				var chars = [];

				$(this).each(function() {
					_this._checkText(this, chars);
				});

				_this.texts.push(chars);
			});
		},

		_checkText: function(text, chars) { //检查该对象是否为字符段，如果不是则递归检查，直到获取到字符段
			var $text = $(text),
				$child = $text.children(),
				_this = this;

			if ($child.length > 0) {
				$child.each(function() {
					_this._checkText(this, chars);
				});
			} else if ($text.is('img')) {
				this._wrapImg($text, chars);
			} else {
				this._wrapText($text, chars);
			}
		},

		_wrapText: function($text, chars) { //包装每个字符
			var text = $text.text(),
				html = '';

			for (var i = 0, l = text.length; i < l; i++) {
				html += '<' + this.wrap + '>' + text.charAt(i) + '</' + this.wrap + '>';
			}

			$text
				.html(html)
				.children()
				.css('display', 'inline-block')
				.each(function() {
					chars.push($(this)); //将所有字符段的 jQuery 对象储存起来
				});
		},

		_wrapImg: function($img, chars) { //包装图片
			chars.push(
				$img
					.wrap('<' + this.wrap + '>')
					.parent()
					.css('display', 'inline-block')
			);
		},

		_textAnimate: function() { //为文本块内所有字符段的每一个字符设置动画
			var effect = DynamicText.effects[this.effect];
			$.each(this.texts, function(i, chars) {
				$.each(chars, function(i, $char) {
					effect(i, $char);
				});
			});

			if (typeof this.loop === 'number') {
				this.loop--;
			}

			if (this.loop) {
				this.timerId = setTimeout(this._textAnimate, this.interval);
			} else {
				this.timerId = 0;
			}
		},

		_hide: function() { //隐藏所有文本
			this.$container.hide();
		},

		_show: function() { //显示所有文本
			this.$container.show();
		},

		hide: function(delay) { //隐藏所有文本，接受一个毫秒数作为参数，表示延时多少毫秒后再隐藏
			if (typeof delay === 'number' && delay > 0) {
				this.timerId = setTimeout(this._hide, delay);
			} else {
				this._hide();
			}
			return this;
		},

		show: function(delay) { //显示所有文本，接受一个毫秒数作为参数，表示延时多少毫秒后再显示
			if (typeof delay === 'number' && delay > 0) {
				this.timerId = setTimeout(this._show, delay);
			} else {
				this._show();
			}
			return this;
		},

		play: function(delay) { // 播放动画，接受一个毫秒数作为参数，表示延时多少毫秒后再进行播放
			if (typeof delay === 'number' && delay > 0) {
				this.timerId = setTimeout(this._textAnimate, delay);
			} else {
				this._textAnimate();
			}
			return this;
		},

		stop: function() { // 停止循环
			if (this.timerId) {
				clearTimeout(this.timerId);
			}
			return this;
		},

		setLoop: function(value) { // 设置循环次数
			this.loop = value;
			return this;
		},

		setInterval: function(value) { // 设置循环间隔
			this.interval = value;
			return this;
		},

		setEffect: function(effect) { // 设置动画效果。如果 DynamicText.effects 中没有改效果，则忽略
			if (effect in DynamicText.effects) {
				this.effect = effect;
			} else {
				alert('您指定的效果未定义！');
			}
			return this;
		}
	};

	DynamicText.effects = {
		'scale': function(i, $char) {
			$char
				.delay(i * 100)
				.animate({ 'scale': 2 }, 300)
				.animate({ 'scale': 1 }, 600, 'easeOutBack');
		},

		'fadeIn': function(i, $char) {
			$char
				.css({
					'scale': 2,
					'opacity': 0
				})
				.delay(i * 100)
				.animate({
					'scale': 1,
					'opacity': 1
				}, 600);
		},

		'fadOut': function(i, $char) {
			$char
				.css({
					'scale': 1,
					'opacity': 1
				})
				.delay(i * 100)
				.animate({
					'scale': 2,
					'opacity': 0
				}, 600);
		},

		'floatIn': function(i, $char) {
			$char
				.css({
					'x': -$char.width(),
					'y': -$char.height(),
					'scale': 2,
					'opacity': 0
				})
				.delay(i * 100)
				.animate({
					'x': 0,
					'y': 0,
					'scale': 1,
					'opacity': 1
				}, 600);
		},

		'floatOut': function(i, $char) {
			$char
				.css({
					'x': 0,
					'y': 0,
					'scale': 1,
					'opacity': 1
				})
				.delay(i * 100)
				.animate({
					'x': $char.width(),
					'y': -$char.height(),
					'scale': 2,
					'opacity': 0
				}, 600);
		},

		'rotateIn': function(i, $char) {
			$char
				.css({
					'rotate': 360,
					'opacity': 0
				})
				.delay(i * 100)
				.animate({
					'rotate': 0,
					'opacity': 1
				}, 600, 'easeOutBack');
		},

		'rotateOut': function(i, $char) {
			$char
				.css({
					'rotate': 0,
					'opacity': 1
				})
				.delay(i * 100)
				.animate({
					'rotate': 360,
					'opacity': 0
				}, 600, 'easeInBack');
		},
	};

	return DynamicText;

}));

