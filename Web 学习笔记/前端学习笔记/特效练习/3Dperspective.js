/**
 * @brief 3D透视效果
 * @author 白俊杰 2014/02/18
 * @param elem 要实现3D效果的元素,dom对象或字符串（id号）
 * @param curX 设定元素当前X位置
 * @param curY 设定元素当前Y位置
 * @param fixX 设定元素旋转固定点的X位置
 * @param fixY 设定元素旋转固定点的Y位置
 * @param layer 设定元素的层级，取值为整数，数值越大，离观察者越远
 * @param shadow 要设定元素是否有投影，布尔值,默认为flase
 * @param shadowType 设定元素投影类型，默认值为0表示块阴影，1表示采用Canvas绘制的轮廓阴影
 * @param rangeCoe 要设定元素跟随鼠标旋转幅度的系数，默认值为0.02
 */
function followMouse(elem,curX,curY,fixX,fixY,layer,shadow,shadowType,rangeCoe)    
{
	elem = ("string"==typeof elem)?document.getElementById(elem):elem;
	if(!elem) return;
	layer = layer?layer:0;
	shadow = shadow?shadow:false;
	shadowType = shadowType?shadowType:0;
	rangeCoe = rangeCoe?rangeCoe:0.02;
	// 为父节点设置透视属性
	if (!elem.parentNode.style.webkitPerspective)
	{
		elem.parentNode.style.position = "relative";
		elem.parentNode.style.perspective = "600px";
		elem.parentNode.style.webkitPerspective = "600px";
		elem.parentNode.style.transformStyle = "flat";
		elem.parentNode.style.webkitTransformStyle = "flat";
		//elem.parentNode.style.transformStyle = "preserve-3d";
		//elem.parentNode.style.webkitTransformStyle = "preserve-3d";
	}
	// 纪录该元素的位置
	elem.x = curX;
	elem.y = curY;
	if (shadow)
	{
		if (shadowType==0)
		{
			elem.style.boxShadow = "5px 5px 20px 10px rgba(0,0,0,0.5)";
		}
		else if (shadowType==1)
		{
			// 如果设置有投影，则改为使用Canvas元素
			var canvas = document.createElement("canvas");
			var img = elem.firstChild;
			var ctx = canvas.getContext("2d");
			img.onload = function(){
				canvas.width = elem.parentNode.clientWidth;
				canvas.height = elem.parentNode.clientHeight;
				drawShadow(ctx,img,curX,curY,50,50);
			}
			canvas.width = elem.parentNode.clientWidth;
			canvas.height = elem.parentNode.clientHeight;
			drawShadow(ctx,img,curX,curY,50,50);
			img.onabort = function(){alert("加载中断")};
			img.onerror = function(){alert("加载错误")};
			// 将元素替换成Canvas对象
			elem.parentNode.replaceChild(canvas,elem);
			elem = canvas;
			// 重设元素位置
			elem.x = 0;
			elem.y = 0;
		}
	}
	// 设置该元素的位置
	elem.style.position = "absolute";
	elem.style.left = elem.x+"px";
	elem.style.top = elem.y+"px";
	elem.style.zIndex = layer;
	elem.style.webkitTransformOrigin = (fixX-elem.offsetLeft)+"px "+(fixY-elem.offsetTop)+"px";
	elem.style.webkitTransform = "rotateX(0deg) rotateY(0deg)";
	// 注册鼠标移动监听
	addEventListener("mousemove",onmousemove);
	var scrollX,scrollY,mouseX,mouseY,rx,ry,sx,sy,offset;
	var rect = elem.parentNode.getBoundingClientRect();
	if (shadow) offset=layer*0.01+1;
	function onmousemove(event)
	{
		// 计算鼠标相对于父级元素的坐标
		scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		mouseX = event.clientX+scrollX-rect.left;
		mouseY = event.clientY+scrollY-rect.top;
		// 计算朝向
		ry=(mouseX-fixX)*rangeCoe;
		rx=(fixY-mouseY)*rangeCoe;
		elem.style.left = elem.x+ry*layer+"px";
		elem.style.top = elem.y-rx*layer+"px";
		elem.style.webkitTransform = "rotateX("+rx+"deg) rotateY("+ry+"deg)";
		// 计算投影方向
		if (shadow)
		{
			sx=(fixX-mouseX)*0.05*offset;
			sy=(fixY-mouseY)*0.05*offset;
			if (shadowType==0) elem.style.boxShadow = sx+"px "+sy+"px 20px 10px rgba(0,0,0,0.5)";
			else if (shadowType==1) drawShadow(ctx,img,curX,curY,sx,sy);
		}
	}
	// 使用Canvas绘制阴影
	function drawShadow(ctx,img,x,y,sx,sy) {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		// 设置阴影。
		ctx.shadowOffsetX = sx;
		ctx.shadowOffsetY = sy;
		ctx.shadowBlur = 10;
		ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
		// 绘制image对象。
		ctx.drawImage(img, x, y);
	}
}