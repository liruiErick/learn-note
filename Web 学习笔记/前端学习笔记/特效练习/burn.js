/**
 * @brief 火焰燃烧效果
 * @author 白俊杰 2014/02/10 
 * @param elem 要实现火焰样式的元素,dom对象或字符串（id号） 
 * @return 返回循环计时器的id号
 */
function burn(elem)    
{
	elem = ("string"==typeof elem)?document.getElementById(elem):elem;
	if(!elem) return null;
	var size = parseInt(getStyle(elem,"fontSize"));
	var tyCoe = size/12;
	var blurCoe = size/15;
	var min = -size/60;
	var max = size/60;
	var value = new Object();
	value.vx1 = max*.2;
	value.vx2 = max*.4;
	value.vx3 = max*.6;
	value.vx4 = max*.8;
	value.tx1 = Math.random()*max*2-max;
	value.tx2 = Math.random()*max*4-max*2;
	value.tx3 = Math.random()*max*6-max*3;
	value.tx4 = Math.random()*max*8-max*4;
	value.ty1 = -tyCoe;
	value.ty2 = value.ty1-tyCoe;
	value.ty3 = value.ty2-tyCoe;
	value.ty4 = value.ty3-tyCoe*2;
	value.blur1 = blurCoe;
	value.blur2 = value.blur1+blurCoe;
	value.blur3 = value.blur2+blurCoe;
	value.blur4 = value.blur3+blurCoe*1.5;
	var timerId = setInterval(function(){
		for (var i=1;i<5;i++)
		{
			if (Math.random()==0) value["vx"+i]*=-1;
			if (value["tx"+i]>max*i) value["vx"+i]=-1;
			else if (value["tx"+i]<min*i) value["vx"+i]=1;
			value["tx"+i] += value["vx"+i];
		}
		elem.style.textShadow = "0 0 "+value.blur2+"px white,"+
		value.tx1+"px "+value.ty1+"px "+value.blur1+"px #ff3,"+
		value.tx2+"px "+value.ty2+"px "+value.blur2+"px #fd3,"+
		value.tx3+"px "+value.ty3+"px "+value.blur3+"px #f80,"+
		value.tx4+"px "+value.ty4+"px "+value.blur4+"px #f20";
	},40);
	return timerId;
}
/** 
 * @brief 获取元素的计算样式（最终的样式）
 * @param elem 要计算样式的元素,dom对象或字符串（id号）
 * @param pro 要获取的样式属性,这个字符串是骆驼型的，如marginLeft而不是margin-left
 */
function getStyle(elem,pro)    
{
    elem = ("string"==typeof elem)?document.getElementById(elem):elem;
    if(!elem) return null;
    if(elem.style[pro]) //内联
	{
        return elem.style[pro];  
	}
    else if(elem.currentStyle) //IE
    {
        return elem.currentStyle[pro];
    }
    else if(window.getComputedStyle) //W3C标准
	{
        var s=window.getComputedStyle(elem,null);
        return s[pro];
    }
    else if(document.defaultView&&document.defaultView.getComputedStyle) //FF,CHROME等  
    {
        pro=pro.replace(/([A-Z])/g,"-$1"); //如marginLeft转为margin-Left
        pro=pro.toLowerCase(); //再转为小写margin-left
        var s=document.defaultView.getComputedStyle(elem,"");
        return s&&s.getPropertyValue(pro);    
    }
    else return null;  
}