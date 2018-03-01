(function(){

	var $float = $('#float').css({'position': 'fixed', 'z-index': 999});
	var $img = $float.find('img');
	var imgW = $img.width();
	var imgH = $img.height();
	var $win = $(window);
	var maxW = $win.width() - imgW;
	var maxH = $win.height() - imgH;
	$img.load(function() {
		maxW = $win.width() - imgW;
		maxH = $win.height() - imgH;
	});
	$win.resize(function() {
		maxW = $win.width() - imgW;
		maxH = $win.height() - imgH;
	});

	var vx = 2;//Math.random() * 10 - 5;
	var vy = 2;//Math.random() * 10 - 5;
	var x = Math.random() * maxW;
	var y = Math.random() * maxH;
	$float.css({'position': 'fixed', 'left': x, 'top': y});
	var timer = setInterval(callback, 40);
	function callback() {
		//vx += Math.random()*0.4 - 0.2;
		//vy += Math.random()*0.4 - 0.2;
		x += vx;
		y += vy;
		if (x < 0 || x > maxW) vx *= -1;
		if (y < 0 || y > maxH) vy *= -1;
		x = Math.max(0, Math.min(maxW, x));
		y = Math.max(0, Math.min(maxH, y));
		$float.css({ 'left': x, 'top': y });
	}

	$float.hover(function() {
		clearInterval(timer);
	},function(){
		timer = setInterval(callback, 40);
	});

})();