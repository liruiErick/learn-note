(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery.animate'), require('mainLoop'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery.animate', 'mainLoop'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.DynamicElement = factory(root.jQuery, root.bjj.mainLoop);
	}

}(this, function($, mainLoop) {
	'use strict';

	var $win = $(window);

	// 视差动态元素
	// 基于 jQuery 和 jQuery Animate 动画扩展插件
	// 需要预先为动态元素绑定速度系数到 data-speed 属性，值为 -1 ~ 1 之间。
	// - -1 表示和滚动轴反方向位移，且位移最快
	// - 0 表示没有位置
	// - 1 表示和滚动轴同方向位移，且位移最快
	var DynamicElement = function() {
		this._init.apply(this, arguments);
	};

	var p = DynamicElement.prototype;

	p.constructor = DynamicElement;

	p._init = function(selector, speedAttr) {
		this.speedAttr = speedAttr || 'data-speed';
		this.$obj = $(selector);
		this.elements = []; //储存每个元素的 jQuery 对象

		this._initElement(); //初始化所有动态元素
		this._calculateMargin();

		var oldX = $win.scrollLeft(),
			oldY = $win.scrollTop(),
			newX, newY,
			dx, dy;

		var resize = function() {
			this.winTop = $win.scrollTop();
			this.winBottom = this.winTop + $win.height();
			this.winLeft = $win.scrollLeft();
			this.winRight = this.winLeft + $win.width();

			newX = this.winLeft;
			newY = this.winTop;
			dx = newX - oldX;
			dy = newY - oldY;
			oldX = newX;
			oldY = newY;

			this.move(dx, dy);
		}

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
			custom.friction = 0.96; //生成摩擦力
			custom.moveCoe = Math.min(Math.abs(custom.speed) * 0.3 + 0.6, 0.9); //生成位移系数

			custom.vx = 0;
			custom.vy = 0;
			custom.x = 0;
			custom.y = 0;
			custom.run = false; //表示该元素是否在运行

			this.elements.push($n);
		}, this));
	};

	p._calculateMargin = function() {
		this._hideAction(this.elements, function() {
			$.each(this.elements, function(i, $n) {
				$n.css({'x': 0, 'y': 0});
				// 计算原始位置
				var custom = $n.custom,
					offset = $n.offset();
				custom.nw = $n.width();
				custom.nh = $n.height();
				custom.nl = offset.left;
				custom.nr = custom.nl + custom.nw;
				custom.nt = offset.top;
				custom.nb = custom.nt + custom.nh;
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
		if (custom.vx | 0 !== 0) custom.vx *= custom.friction;
		else custom.vx = 0;
		if (custom.vy | 0 !== 0) custom.vy *= custom.friction;
		else custom.vy = 0;
		custom.x += custom.vx;
		custom.y += custom.vy;

		if (custom.x | 0 !== 0) custom.x *= custom.moveCoe;
		else custom.x = 0;
		if (custom.y | 0 !== 0) custom.y *= custom.moveCoe;
		else custom.y = 0;

		$n.css({'x': custom.x, 'y': custom.y});

		if (custom.x === 0 && custom.y === 0) {
			custom.run = false;
		}

		return custom.run;
	};

	// 传入新坐标与旧坐标的差值
	// 也可以传入一个选择器字符串或者对象作为筛选范围，这个范围可以是元素自身或元素的父容器，每个元素检查如果不是自身或者自己的父容器，则不移动
	p.move = function(dx, dy, container) {
		$.each(this.elements, $.proxy(function(i, $n) {
			if ($n.is(':hidden')) return; //如果元素是隐藏的，则终止

			var custom = $n.custom;

			if (container) {
				// 如果是在其它容器中的元素，由于容器是移动的，但窗口没有移动，所以要重新计算该元素在文档中的所在位置
				if ($n.parents().is(container)) {
					var offset = $n.offset();
					custom.nl = offset.left;
					custom.nr = custom.nl + custom.nw;
					custom.nt = offset.top;
					custom.nb = custom.nt + custom.nh;
				} else if (!$n.is(container)) {
					return;
				}
			}

			custom.vx += dx * custom.speed;
			custom.vy += dy * custom.speed;

			var isLeft, isRight, isTop, isBottom;
			// 如果元素原始位置超出窗口，且速度为零或者位移的方向也与距离窗口的方向相反，那么就停止更新速度
			// 这里可能会在元素突然转向的时候不能以正确的速度进行累加，不过为了优化性能，这点误差可以接受
			if (custom.nr < this.winLeft) {
				isLeft = true;
				if (custom.vx <= 0) return custom.vx = 0;
			}
			if (custom.nl > this.winRight) {
				isRight = true;
				if (custom.vx >= 0) return custom.vx = 0;
			}
			if (custom.nb < this.winTop) {
				isTop = true;
				if (custom.vy <= 0) return custom.vy = 0;
			}
			if (custom.nt > this.winBottom) {
				isBottom = true;
				if (custom.vy >= 0) return custom.vy = 0;
			}

			if (isLeft || isRight) {
				// 计算当前速度下可能的移动量
				// 如果元素原始位置依然超出窗口，那么不添加计时器
				var vx = custom.vx, newX = custom.x, x;
				do {
					x = newX;
					vx *= custom.friction;
					newX += vx;
					newX *= custom.moveCoe;
				} while ((vx > 0 && newX > x)|| (vx < 0 && newX < x))

				if (isLeft && custom.nr + x < this.winLeft) return custom.vx = 0;
				if (isRight && custom.nl + x > this.winRight) return custom.vx = 0;
			}
			if (isTop || isBottom) {
				// 计算当前速度下可能的移动量
				// 如果元素原始位置依然超出窗口，那么不添加计时器
				var vy = custom.vy, newY = custom.y, y;
				do {
					y = newY;
					vy *= custom.friction;
					newY += vy;
					newY *= custom.moveCoe;
				} while ((vy > 0 && newY > y)|| (vy < 0 && newY < y))

				if (isTop && custom.nb + y < this.winTop) return custom.vy = 0;
				if (isBottom && custom.nt + y > this.winBottom) return custom.vy = 0;
			}

			if (custom.run || (custom.vx === 0 && custom.vy === 0)) return;
			custom.run = true;
			mainLoop.add($.proxy(this._run, null, $n));

		}, this));
	};

	return DynamicElement;

}));
