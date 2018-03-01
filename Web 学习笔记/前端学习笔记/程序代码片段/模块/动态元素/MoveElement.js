(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'), require('mainLoop'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate', 'mainLoop'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.MoveElement = factory(root.jQuery, root.bjj.mainLoop);
	}

}(this, function($, mainLoop) {
	'use strict';

	var $win = $(window);

	var defaultOptions = {
		winOffset: {x: 0, y: 0}, //窗口的x、y轴的偏移量
		maxSpeed: 1, //设置最大速度的绝对值
		container: '', //设置参考容器选择器，每个元素会遍历祖先元素，找到距离自己最近的元素作为参考容器
		refer: 'y', //元素运动的参考方向，可以为'x'、'y'、'xy'这3种值。默认为'y'，表示只参考页面垂直滚动的位置做运动。
		speedAttr: 'data-speed', //声明速度的属性名
		speedInversionAttr: 'data-speed-inversion', //声明是否速度反转的属性名
		directionInversionAttr: 'data-direction-inversion' //声明是否方向反转的属性名
	};

	// 视差移动元素
	// 基于 jQuery 和 jQuery Animate 动画扩展插件
	// 需要预先为动态元素绑定速度系数到 data-speed 属性，默认值为 -1 ~ 1 之间。
	// - data-speed 的速度区间可以通过 maxSpeed 进行设置。
	// - 负值 表示和滚动轴反方向位移，且 -maxSpeed 位移最大
	// - 0 表示没有位移
	// - 正值 表示和滚动轴同方向位移，且 maxSpeed 位移最大
	//
	// 如果声明了 data-speed-inversion 速度反转属性，那么当元素划到参考点另一端的时候速度变为 1-speed
	//
	// 如果声明了 data-direction-inversion 方向反转属性，那么元素延参考方向的运动将会水平与垂直对调

	var MoveElement = function() {
		this._init.apply(this, arguments);
	};

	var p = MoveElement.prototype;

	p.constructor = MoveElement;

	p._init = function(selector, options) {

		var opt = $.extend(true, {}, defaultOptions, options);

		this.$obj = $(selector); //接受的参数为所有动态元素所组成的 jQuery 对象
		this.maxSpeed = opt.maxSpeed;
		this.container = opt.container;
		this.speedAttr = opt.speedAttr;
		this.speedInversionAttr = opt.speedInversionAttr;
		this.directionInversionAttr = opt.directionInversionAttr;
		this.elements = []; //储存每个元素的 jQuery 对象

		this._initElement(); //初始化所有动态元素
		this._calculateMargin();

		var refer = opt.refer;
		var resize = function() {
			this.winLeft = $win.scrollLeft() + opt.winOffset.x;
			this.winRight = this.winLeft + $win.width();
			this.winTop = $win.scrollTop() + opt.winOffset.y;
			this.winBottom = this.winTop + $win.height();

			if (refer === 'x') {
				this.move(this.winLeft, 0);
			} else if (refer === 'y') {
				this.move(0, this.winTop);
			} else if (refer === 'xy') {
				this.move(this.winLeft, this.winTop);
			}
		};

		resize.call(this);

		$win.resize($.proxy(function() {
			this._calculateMargin();
			resize.call(this);
		}, this));

		$win.scroll($.proxy(function() {
			resize.call(this);
		}, this));
	};

	p._initElement = function() {
		$.each(this.$obj, $.proxy(function(i, n) {
			var $n = $(n),
				custom = $n.custom = {};
			custom.speed = parseFloat($n.attr(this.speedAttr));
			custom.speedInversion = ($n.attr(this.speedInversionAttr) != undefined);
			custom.directionInversion = ($n.attr(this.directionInversionAttr) != undefined);

			if (custom.speedInversion) custom.speedReverse = custom.speed / Math.abs(custom.speed) * this.maxSpeed - custom.speed;
			custom.x = 0;
			custom.y = 0;
			custom.run = false; //表示计时器是否在运行

			custom.$container = $n.parents(this.container);
			if (custom.$container.length != 1) { //如果参考容器获取错误，那么获取该元素的祖先元素中的body下的直接子元素作为参考容器
				custom.$container = $n;
				var $parent = $n.parent();
				while (!$parent.is('body')) {
					custom.$container = $parent;
					$parent = $parent.parent();
				}
			}

			this.elements.push($n);
		}, this));
	};

	p._calculateMargin = function() {
		this._hideAction(this.elements, function() {
			$.each(this.elements, function(i, $n) {
				$n.css({'x': 0, 'y': 0});
				// 计算容器的所在位置
				var custom = $n.custom,
					offset = custom.$container.offset();
				custom.cw = custom.$container.width();
				custom.ch = custom.$container.height();
				custom.cl = offset.left;
				custom.cr = custom.cl + custom.cw;
				custom.ct = offset.top;
				custom.cb = custom.ct + custom.ch;
			});
		});
	};

	p._hideAction = function(jq, func, target) {
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
	};

	p._run = function($n) {
		var custom = $n.custom;

		if (custom.directionInversion) {
			custom.x = parseFloat($n.css('y'));
			custom.y = parseFloat($n.css('x'));
		} else {
			custom.x = parseFloat($n.css('x'));
			custom.y = parseFloat($n.css('y'));
		}

		var dx = custom.tarX - custom.x,
			dy = custom.tarY - custom.y;
		if (dx | 0 != 0) {
			dx *= 0.2;
			custom.x += dx;
		} else {
			custom.x = custom.tarX;
		}
		if (dy | 0 != 0) {
			dy *= 0.2;
			custom.y += dy;
		} else {
			dy = 0;
			custom.y = custom.tarY;
		}

		if (custom.directionInversion) {
			$n.css({'y': custom.x, 'x': custom.y});
		} else {
			$n.css({'x': custom.x, 'y': custom.y});
		}

		if (custom.x === custom.tarX && custom.y === custom.tarY) {
			custom.run = false;
		}

		return custom.run;
	};

	// 传入当前窗口在文档中的坐标
	p.move = function(winLeft, winTop) {
		$.each(this.elements, $.proxy(function(i, $n) {
			if ($n.is(':hidden')) return; //如果元素是隐藏的，则终止

			var custom = $n.custom,
				dx = winLeft - custom.cl, //容器的X位置为水平参考点
				dy = winTop - custom.ct; //容器的Y位置为垂直参考点
			if (custom.speedInversion) {
				if (dx < 0 ) custom.tarX = dx * custom.speed;
				else custom.tarX = dx * custom.speedReverse;
				if (dy < 0 ) custom.tarY = dy * custom.speed;
				else custom.tarY = dy * custom.speedReverse;
			} else {
				custom.tarX = dx * custom.speed;
				custom.tarY = dy * custom.speed;
			}

			// 如果元素的容器不在窗口内，那么直接改变元素位置
			if (custom.cl > this.winRight || custom.cr < this.winLeft || custom.ct > this.winBottom || custom.cb < this.winTop) {
				if (custom.directionInversion) {
					$n.css({'y': custom.tarX, 'x': custom.tarY});
				} else {
					$n.css({'x': custom.tarX, 'y': custom.tarY});
				}
				return;
			}
			// 否则用动画改变元素位置
			if (custom.run) return;
			custom.run = true;
			mainLoop.add($.proxy(this._run, null, $n));

		}, this));
	};

	return MoveElement;

}));
