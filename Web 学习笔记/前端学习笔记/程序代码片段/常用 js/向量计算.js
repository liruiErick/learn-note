(function(holder) {

holder.CubicBezier = CubicBezier;
holder.Vector = Vector;

/**
 * 三次贝塞尔
 * 其中 begin 和 end 表示起始点和结束点, c1 和 c2 是控制点
 * t 参数表示一个时间参数，方法返回的结果是一个在某个时刻计算出来的点的坐标
 */
function CubicBezier(begin, c1, c2, end, t) {
	var p = new Vector(0, 0);
	p.x = begin.x * Math.pow(1 - t, 3) + c1.x * 3 * t * Math.pow(1 - t, 2) + c2.x * 3 * (1 - t) * Math.pow(t, 2) + end.x * Math.pow(t, 3);
    p.y = begin.y * Math.pow(1 - t, 3) + c1.y * 3 * t * Math.pow(1 - t, 2) + c2.y * 3 * (1 - t) * Math.pow(t, 2) + end.y * Math.pow(t, 3);
	return p;
}


function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	/*~!Vector*/
	toArray: function() {
		return [this.x, this.y];
	},
	add: function(v) {
		return new holder.Vector(this.x + v.x, this.y + v.y);
	},
	sub: function(v) {
		return new holder.Vector(this.x - v.x, this.y - v.y);
	},
	getMod: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	mulNum: function(num) {
		return new holder.Vector(this.x * num, this.y * num);
	},
	getNegative: function() {
		return new holder.Vector(-this.x, -this.y);
	},
	/**
	 *返回一个常数代表b在a上的投影乘以a的长度
	 */
	dotMul: function(v) {
		return this.x * v.x + this.y * v.y;
	},
	crossMul: function(v) {
		return this.x * v.y - this.y * v.x;
	},
	/**
	 *获取夹角,注意返回的是角度
	 */
	getAngle: function(v) {
		return Math.acos(this.dotMul(v) / (this.getMod() * v.getMod())) * 180 / Math.PI;

	},
	/**
	 *获取夹角,返回的是弧度
	 */
	getRadian: function(v) {
		var m1 = this.getMod(),
			m2 = v.getMod();
		if (m1 == 0 || m2 == 0) {
			return 0;
		}
		return Math.acos(this.dotMul(v) / (m1 * m2));
	},
	distance: function(v) {
		return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
	},
	distance2: function(v) {
		return Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2);
	},
	/**
	 *求某向量的法向量,返回一个单位向量,其模为1,返回的向量总是指向this向量的右边
	 * @return
	 */
	getNormal: function() {
		return new holder.Vector(this.y / (Math.sqrt(this.x * this.x + this.y * this.y)), -this.x / (Math.sqrt(this.x * this.x + this.y * this.y)));
	},
	reflex: function(v) {
		var normal = v.getNormal(); //先求法向量
		var angle = this.getAngle(normal); //求与法线的夹角
		return this.sub(normal.mulNum(2 * this.dotMul(normal)));
	},
	mirror: function(v) {
		return this.reflex(v).getNegative();
	},
	isZero: function() {
		if (this.x == 0 && this.y == 0) return true;
		else return false;
	},
	/**
	 * 判断某个点是否在某个矩形区域里，如果在里面的话，并且存在第四个参数的话（true），
	 * 就继续判断相对矩形中心点所在象限，最后返回象限，不存在第四个参数返回-1
	 * 如果不在矩形区域里，就直接返回false
	 *
	 * @param {vector} t 矩形左上角坐标
	 * @param {vector} b 矩形右下角坐标
	 * @param {boolean} q 是否返回象限
	 * @return {number} 象限或者-1
	 */
	isIn: function(t, b, q) {
		var r1 = this.sub(t),
			r2 = this.sub(b);
		if (r1.x >= 0 && r1.y >= 0 && r2.x <= 0 && r2.y <= 0) {
			if (q) {
				var c = t.add(b).mulNum(0.5);
				return this.getQ(c);
			} else {
				return -1;
			}
		} else {
			return false;
		}
	},
	/**
	 * 获取第一个点相对第二个点所在的象限
	 *
	 * @param {vector} pc 第二个点的坐标
	 */
	getQ: function(pc) {
		var r = this.sub(pc);
		if (r.x >= 0 && r.y >= 0) {
			return 4;
		} else if (r.x < 0 && r.y >= 0) {
			return 3;
		} else if (r.x < 0 && r.y < 0) {
			return 2;
		} else if (r.x >= 0 && r.y < 0) {
			return 1;
		}
	},
	toString: function() {
		return this.x + ':' + this.y;
	}
}

})(window.bjj = window.bjj || {});


/**
 * 数学工具
 */
(function(holder){

var util = holder.util = holder.util || {};

// 向量叉乘
util.crossMul = function(v1, v2) {
	return v1.x * v2.y - v1.y * v2.x;
};

// 判断两条线段是否相交
util.checkCross = function(p1, p2, p3, p4) {
	var v1 = {
			x: p1.x - p3.x,
			y: p1.y - p3.y
		},
		v2 = {
			x: p2.x - p3.x,
			y: p2.y - p3.y
		},
		v3 = {
			x: p4.x - p3.x,
			y: p4.y - p3.y
		},
		v = this.crossMul(v1, v3) * this.crossMul(v2, v3);
	v1 = {
		x: p3.x - p1.x,
		y: p3.y - p1.y
	}
	v2 = {
		x: p4.x - p1.x,
		y: p4.y - p1.y
	}
	v3 = {
		x: p2.x - p1.x,
		y: p2.y - p1.y
	}
	return (v <= 0 && this.crossMul(v1, v3) * this.crossMul(v2, v3) <= 0) ? true : false
};

// 检测点是否在多边形内
util.checkPP = function(point, polygon) {
	var p1, p2, p3, p4;
	p1 = point
	p2 = {
		x: -100,
		y: point.y
	}
	var count = 0;
		//对每条边都和射线作对比
	for (var i = 0; i < polygon.length - 1; i++) {
		p3 = polygon[i]
		p4 = polygon[i + 1]
		if (this.checkCross(p1, p2, p3, p4) == true) {
			count++
		}
	}
	p3 = polygon[polygon.length - 1];
	p4 = polygon[0];
	if (this.checkCross(p1, p2, p3, p4) == true) {
		count++;
	}
	//  console.log(count)
	return (count % 2 == 0) ? false : true;
};

// B(u) = P0 * ( 1 - u ) 2 + P1 * 2 * u ( 1 - u ) + P2 u2
// P0 * ( 1 - u )3 + P1 * 3 * u * ( 1 - u )2 + P2 * 3 * u2 * ( 1 - u ) + P3 * u3
// 三维贝塞尔
util.bezier = function(begin, c1, c2, end, t) {
	var p = new holder.Vector(0, 0);
	p.x = begin.x * Math.pow(1 - t, 3) + c1.x * 3 * t * Math.pow(1 - t, 2) + c2.x * 3 * Math.pow(t, 2) * (1 - t) + end.x * Math.pow(t, 3);
	p.y = begin.y * Math.pow(1 - t, 3) + c1.y * 3 * t * Math.pow(1 - t, 2) + c2.y * 3 * Math.pow(t, 2) * (1 - t) + end.y * Math.pow(t, 3);
	return p;
};

// 二维贝塞尔
util.quadratic = function(begin, c1, end, t) {
	var p = new holder.Vector(0, 0);
	p.x = begin.x * Math.pow(1 - t, 2) + c1.x * 2 * t * (1 - t) + end.x * Math.pow(t, 2);
	p.y = begin.y * Math.pow(1 - t, 2) + c1.y * 2 * t * (1 - t) + end.y * Math.pow(t, 2);
	return p;
};

// 打碎三维贝塞尔
util.brokenBezier = function(begin, c1, c2, end, partCount) {
	var partCount = partCount || 10;
	var points = [];
	var t = 0;
	for (var t = 0; t <= 1; t += 1 / partCount) {

		points.push(this.bezier(begin, c1, c2, end, t));
	}
	return points;
};

// 打碎二维贝塞尔
util.brokenQuadratic = function(begin, c1, end, partCount) {
	var partCount = partCount || 10;
	var points = [];
	var t = 0;
	for (var t = 0; t <= 1; t += 1 / partCount) {

		points.push(this.quadratic(begin, c1, end, t));
	}
	return points;
};

})(window.bjj = window.bjj || {});