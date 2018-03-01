// 判断浏览器是否支持 rgba 颜色
$.support['rgba'] = (function() {
	var $script = $('script:first'),
			color = $script.css('color'),
			result = false;
	if (/^rgba/.test(color)) {
		result = true;
	} else {
		try {
			result = ( color != $script.css('color', 'rgba(0, 0, 0, 0.5)').css('color') );
			$script.css('color', color);
		} catch (e) { }
	}

	return result;
})();

// ### isColor(value)
// 判断一个值是否为颜色，如果是颜色则返回该颜色的 rgb 形式
//
//    isColor(white);  =>  'rgb(255,255,255)'
//    isColor(abcd);   =>  false
//
function isColor(value) {
	testElem.style.color = '';
	testElem.style.color = value;
	$testElem.appendTo('body');
	var color = testElem.style.color !== '' && $testElem.css('color');
	$testElem.detach();
	return color;
}

// ### calculateColor(begin, end, pos)
// 根据 0-1 之间的位置比，计算两个颜色在该位置上的过渡色
//
//    calculateColor([255,255,255,1], [0,0,0,1], .5);  =>  'rgba(127,127,127,1)'
//    calculateColor([255,255,255],   [0,0,0],   .5);  =>  'rgb(127,127,127)'
//
function calculateColor(begin, end, pos) {
	var len = Math.min(begin.length, end.length),
		color = 'rgb',
		dr = pos * (end[0] - begin[0]),
		dg = pos * (end[1] - begin[1]),
		db = pos * (end[2] - begin[2]),
		r = begin[0] + dr,
		g = begin[1] + dg,
		b = begin[2] + db,
		a = 1;
	if (len > 3) {
		color += 'a';
		a = parseFloat(begin[3] + pos * (end[3] - begin[3]), 10);
		r = begin[0] + dr / a * end[3];
		g = begin[1] + dg / a * end[3];
		b = begin[2] + db / a * end[3];
	}
	r = parseInt(r, 10);
	g = parseInt(g, 10);
	b = parseInt(b, 10);
	color += '(' + r + ',' + g + ',' + b ;
	if (len > 3) { color += ',' + a; }
	color += ')';
	return color;
}

// ### parseColor(color)
// 将一个颜色值转化为数组形式
//
//    'rgba(127,127,127,1)'  =>  [127, 127, 127, 1]
//    'rgb(127,127,127)'     =>  [127, 127, 127, 1]
//    '#000000'              =>  [  0,   0,   0, 1]
//    '#fff'                 =>  [255, 255, 255, 1]
//
function parseColor(color) {
	var match, triplet;

	// Match #aabbcc
	if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
		triplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

		// Match #abc
	} else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
		triplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

		// Match rgb(n, n, n)
	} else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
		triplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

	} else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
		triplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10),parseFloat(match[4])];

		// No browser returns rgb(n%, n%, n%), so little reason to support this format.
	}
	return triplet;
}