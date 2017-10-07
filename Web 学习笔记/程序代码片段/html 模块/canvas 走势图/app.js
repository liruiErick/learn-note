!function(){
	document.write('<script src="libs/createjs-2013.12.12.min.js"></script>');
	document.write('<script src="libs/movieclip-0.7.1.min.js"></script>');
	document.write('<script src="trend.js"></script>');
	window.onload=stageInit;
	var canvas, stage, root;
	var cjs;
	
	var TXT_W = 48; //定义日期文本宽度
	var TXT_H = 16; //定义日期文本高度
	var S_WEIGHT = 3; //设置刻度的宽度
	var OFFSET_X = 40; //设置X坐标轴起始偏移量
	var _sw; //场景宽度
	var _sh; //场景高度
	var _sxCount; //设置X坐标轴刻度数量
	var _syCount; //设置Y坐标轴刻度数量
	var SY_MAX_COUNT = 6; //设置Y坐标轴最大刻度数量
	var _min; //设置Y坐标轴曲线最小值
	var _max; //设置Y坐标轴曲线最大值

	var _startX; //X轴起始坐标
	var _startY; //Y轴起始坐标
	var _sx; //X轴刻度间隔
	var _sy; //Y轴刻度间隔
	var _sxHarf //X轴刻度间隔的一半
	var _sValue; //Y轴的刻度值
	var _mIndex=-1; //鼠标在X轴上的目标日期索引
	var _moveOut; //检测鼠标是否移出舞台

	var _line; //走势图
	var _tableSp; //刻度文本容器
	var _txtBox; //跟随文本框
	var _date; //日期文本
	var _price; //价格文本
	var _priceY; //价格Y坐标
	var _txtBoxX; //跟随文本框目标X坐标
	var _txtBoxY; //跟随文本框目标Y坐标
	var _curIndex = -1; //用于记录当前X轴上的日期索引，防止频繁的刷新文本框
	
	var _yearArr;
	var _moonArr;
	var _priceArr;
	
	function stageInit()
	{
		canvas = document.getElementById("canvas");
		_sw = canvas.width;
		_sh = canvas.height;
		canvas.style.backgroundColor = "#FFFFFF";
		root = new lib.main();
		
		cjs = createjs;
		stage = new cjs.Stage(canvas);
		stage.addChild(root);
		//stage.update();
	
		cjs.Ticker.setFPS(lib.properties.fps);
		cjs.Ticker.addEventListener("tick", stage);
		
		onError();
		// 向服务器申请数据
		/*var url1 = "http://192.168.20.66:8080/ddbuilding/backstage/building_process";
		var url2 = "http://192.168.20.66:8080/ddbuilding/backstage/building_process";
		
		$.getJSON(url1,function(data){
			pageInit(data);
		}).fail(function(){
			alert("获取数据失败");
		});
		var $tab = $('.tab a');
		$tab.click(function(){
			var $this = $(this);
			$tab.removeClass('active');
			$this.addClass('active');
			$.getJSON(eval('url'+($this.index()+1)),function(data){
				pageInit(data);
			}).fail(function(){
				alert("获取数据失败");
			});
		});*/
		// 假数据
		json = {"2013-04":"4000","2013-09":"8000","2013-10":"7000","2013-11":"6000","2013-12":"9000","2014-01":"8000","2014-02":"5000","2014-03":"6000","2013-05":"5000","2013-06":"11000","2013-07":"9000","2013-08":"8000"};
		pageInit(json);
		
	}
	function pageInit(json)
	{
		root.removeAllChildren();
		if (hasKey(json))
		{
			onload(json);
		}
		else
		{
			onError();
		}
		function hasKey(obj)
		{
			var bol = false;
			if(obj == null) return bol;
			for(var key in obj) bol = true;
			return bol;
		}
	}
	function onload(json)
	{
		_sxCount=0;
		var date=[];
		// 由于接受到的json键值对顺序可能被打乱，所以需要针对日期重新排序
		var price={};
		for (var key in json)
		{
			date.push(key);
			price[key] = json[key]; //将日期对应的价格保存起来
			_sxCount++;
		}
		// 在这里针对日期排序
		date.sort();
		_priceArr=[];
		for (var j in date)
		{
			_priceArr.push(parseInt(price[date[j]]));
		}
		
		_yearArr=[];
		_moonArr=[];
		for (var k in date)
		{
			var str = date[k];
			var i=str.indexOf("-");
			_yearArr.push(str.substring(0,i));
			_moonArr.push(str.substring(i+1));
		}
		var sortArr = _priceArr.concat().sort(function(a,b){ ; return a - b;})
		_min = sortArr[0];
		_max = sortArr[sortArr.length-1];
		if (_max-_min < _syCount-1)
		{
			_syCount = _max-_min+2;
		}
		else _syCount = SY_MAX_COUNT;
		
		init();
	}
	function onError()
	{
		var loading=new lib.Loading();
		loading.x=_sw*0.5-loading.nominalBounds.width*0.5;
		loading.y=_sh*0.5-loading.nominalBounds.height*0.5;
		root.addChild(loading);
	}
	function init()
	{
		// 创建表格容器
		_tableSp = new cjs.Container();
		_tableSp.shape = new cjs.Shape();
		root.addChild(_tableSp);

		// 创建走势图
		_line = new cjs.Shape();
		root.addChild(_line);
		
		onresize();
		createTxtBox();

		root.on("tick", onTick);
		stage.on("mouseleave", onLeave);
		stage.on("mouseenter", onEnter);
	}
	function onresize()
	{
		_sw = canvas.width;
		_sh = canvas.height;
		drawTable(_tableSp);
		//从新计算价格坐标
		_priceY=[];
		for (var i in _priceArr)
		{
			_priceY[i] = getY(_priceArr[i]);
		}
		drawLine(_line);
	}
	function onTick()
	{
		var dx =_txtBoxX-_txtBox.x;
		if (Math.abs(dx)>1 && _txtBox.alpha>0) _txtBox.x+=dx*0.3;
		else _txtBox.x=_txtBoxX;
		
		var dy =_txtBoxY-_txtBox.y;
		if (Math.abs(dy)>1 && _txtBox.alpha>0) _txtBox.y+=dy*0.3;
		else _txtBox.y=_txtBoxY;
		
		if (_mIndex<0 && _txtBox.alpha>0) _txtBox.alpha-=0.1;
		else if (_mIndex>=0 && _txtBox.alpha<1) _txtBox.alpha+=0.1;
	}
	function onLeave()
	{
		_moveOut=true;
		stage.off("stagemousemove", onMove);
	}
	function onEnter()
	{
		_moveOut=false;
		stage.on("stagemousemove", onMove);
	}
	function onMove(e)
	{
		if (_moveOut)
		{
			_curIndex=_mIndex=-1;
			drawLine(_line);
		}
		else
		{
			var x = Math.max(e.stageX - (_startX + _sx), 0);
			_mIndex = ((x % _sx) > _sxHarf) ? Math.floor(x / _sx) + 1 : Math.floor(x / _sx);
		}
		
		if (_mIndex<0 || _curIndex==_mIndex) return;
		_curIndex=_mIndex;
		drawLine(_line);
		_date.text=_yearArr[_mIndex]+"年"+_moonArr[_mIndex]+"月";
		_price.text=_priceArr[_mIndex]+"元/平方米";
		drawBox(_txtBox);
		
		_txtBoxX = _startX + _sx + _mIndex * _sx;
		_txtBoxY = _priceY[_mIndex]+10;
		_txtBoxX = Math.max(0,Math.min(_sw-_txtBox.width,_txtBoxX));
		_txtBoxY = Math.max(0,Math.min(_sh-_txtBox.height,_txtBoxY));
	}
	// 绘制表格
	function drawTable(tableSp)
	{
		_startX = OFFSET_X;
		// 计算X轴刻度间隔
		_sx = (_sw - OFFSET_X) / (_sxCount + 0.5);
		_sxHarf = _sx * 0.5;
		var txtHarfW = TXT_W * 0.5;
		var txtHarfH = TXT_H * 0.5;
		// 根据X轴的刻度间隔计算文本的旋转角度
		var r = Math.acos(_sxHarf / txtHarfW) * 180 / Math.PI;
		// 根据文本旋转角度计算文本实际高度
		var spH;
		if (_sxHarf < txtHarfW)
		{
			spH = TXT_H + (TXT_W - TXT_H) * (r / 90) + txtHarfH;
		}
		else
		{
			spH = TXT_H + txtHarfH;
		}
		_startY = _sh - spH - S_WEIGHT; //计算Y轴刻度间隔
		// 根据Y轴起始位置计算Y轴刻度间隔
		_sy = _startY / (_syCount - 1 + 0.5);
		// 根据取值范围计算Y轴的刻度值，并四舍五入取整
		if (_max-_min == 0) _sValue = _min;
		else _sValue = (_max - _min) / (_syCount - 2);
		
		// 清空所有内容
		tableSp.removeAllChildren();
		tableSp.shape.graphics.clear();
		tableSp.shape.graphics.setStrokeStyle(2).beginStroke("#333");
		// 绘制X轴
		tableSp.shape.graphics.moveTo(_startX, _startY);
		tableSp.shape.graphics.lineTo(_startX, 0);
		// 绘制Y轴
		tableSp.shape.graphics.moveTo(_startX, _startY);
		tableSp.shape.graphics.lineTo(_sw, _startY);
		tableSp.addChild(tableSp.shape);
		
		// 绘制X轴刻度
		for (var i = 0; i < _sxCount; i++)
		{
			// 绘制刻度
			tableSp.shape.graphics.setStrokeStyle(2).beginStroke("#333");
			tableSp.shape.graphics.moveTo((_startX + _sx) + _sx * i, _startY);
			tableSp.shape.graphics.lineTo((_startX + _sx) + _sx * i, _startY + S_WEIGHT);
			// 绘制网线
			tableSp.shape.graphics.setStrokeStyle(1).beginStroke("#ccc");
			tableSp.shape.graphics.moveTo((_startX + _sx) + _sx * i, _startY-1);
			tableSp.shape.graphics.lineTo((_startX + _sx) + _sx * i, 0);
			// 放置文本
			var sp = new cjs.Container();
			sp.x = (_startX + _sx) + _sx * i;
			var txt = new cjs.Text("", "12px Arial", "#000");
			txt.text = _yearArr[i]+"-"+_moonArr[i];
			txt.lineWidth = TXT_W;
			txt.lineHeight = TXT_H;
			txt.textAlign = "right";
			txt.x = txtHarfW;
			txt.y = -txtHarfH;
			sp.addChild(txt);
			tableSp.addChild(sp);
			// 如果刻度值宽度超过刻度，则旋转刻度值
			sp.rotation = -r;
			if (_sxHarf < txtHarfW)
			{
				sp.y = _startY + S_WEIGHT*2 + txtHarfH*(1 - r / 90) + Math.sqrt(txtHarfW*txtHarfW - _sxHarf*_sxHarf);
			}
			else
			{
				sp.y = _startY + S_WEIGHT*2 + txtHarfH;
			}
		}
		// 绘制Y轴刻度
		for (var j = 0; j < _syCount; j++)
		{
			// 绘制刻度
			tableSp.shape.graphics.setStrokeStyle(2).beginStroke("#333");
			tableSp.shape.graphics.moveTo(_startX, _startY - _sy * j);
			tableSp.shape.graphics.lineTo(_startX - S_WEIGHT, _startY - _sy * j);
			// 绘制网线
			if (j>0)
			{
				tableSp.shape.graphics.setStrokeStyle(1).beginStroke("#ccc");
				tableSp.shape.graphics.moveTo(_startX+1, _startY - _sy * j);
				tableSp.shape.graphics.lineTo(_sw, _startY - _sy * j);
			}
			// 放置文本
			txt = new cjs.Text("", "12px Arial", "#000");
			txt.lineWidth = TXT_W;
			txt.lineHeight = TXT_H;
			txt.textAlign = "right";
			if (j == 0) txt.text = Math.floor(_min - _sValue) + "";
			else txt.text = Math.floor(_min + _sValue * (j - 1)) + "";
			txt.x = _startX - S_WEIGHT * 2;
			txt.y = _startY - _sy * j - txt.lineHeight * 0.5;
			tableSp.addChild(txt);
		}

	}
	// 绘制走势图
	function drawLine(sp)
	{
		sp.graphics.clear();
		sp.graphics.setStrokeStyle(1).beginStroke("#F00");
		sp.graphics.moveTo(_startX + _sx, _priceY[0]);
		for (var i = 0; i < _sxCount; i++)
		{
			sp.graphics.lineTo((_startX + _sx) + _sx * i, _priceY[i]);
			// 填充一个圆点
			sp.graphics.beginFill("#F00");
			var radius = (_mIndex == i) ? 4 : 2;
			sp.graphics.drawCircle((_startX + _sx) + _sx * i, _priceY[i], radius);
			sp.graphics.endFill();
			// 移动回圆心
			sp.graphics.moveTo((_startX + _sx) + _sx * i, _priceY[i]);
		}
	}
	// 根据当前值换算Y轴坐标
	function getY(value)
	{
		if (_max-_min == 0) return _sy * 0.5;
		return (_max - value) / (_max - _min) * _sy * (_syCount - 2) + _sy * 0.5;
	}
	// 创建文本框
	function createTxtBox()
	{
		_txtBox = new cjs.Container();
		_txtBox.shape = new cjs.Shape();
		_txtBox.addChild(_txtBox.shape);
		_date = new cjs.Text("", "13px Arial", "#06f");
		_date.textAlign = "left";
		_date.text="0000年00月";
		_date.x = 5;
		_date.y = 5;
		_txtBox.addChild(_date);
		_price = new cjs.Text("", "13px Arial", "#333");
		_price.textAlign = "left";
		_price.text ="00000元/平方米";
		_price.x = 5;
		_price.y = TXT_H + 5;
		_txtBox.addChild(_price);
		root.addChild(_txtBox);
		_txtBox.alpha=1;
		_txtBox.shadow=new cjs.Shadow("rgba(0,0,0,0.2)", 3, 3, 5);
		drawBox(_txtBox);
	}
	function drawBox(sp)
	{
		var dw = _price.getMeasuredWidth();
		var pw = _date.getMeasuredWidth();
		var w = dw>pw?dw:pw;
		sp.width = w+10; //为文本框定义一个宽度
		sp.height = TXT_H*2+10; //为文本框定义一个高度
		sp.shape.graphics.clear();
		sp.shape.graphics.setStrokeStyle(2).beginStroke("rgba(102,102,102,0.5)").beginFill("rgba(204,204,204,0.8)");
		sp.shape.graphics.drawRoundRectComplex(0,0,sp.width,sp.height,6,6,6,6);
		sp.shape.graphics.endFill();
	}
}();