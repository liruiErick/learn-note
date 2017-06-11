package 
{
	import flash.display.MovieClip;
	import flash.display.DisplayObject;
	import flash.geom.Rectangle;
	import flash.geom.Point;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.utils.ByteArray;
	import flash.utils.Dictionary;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.geom.Matrix;
	import flash.text.*
	
	public class MyClass
	{
		public function MyClass()
		{
		}
		//碰撞检测
		static public function blockCollision(objectA:MovieClip,objectB:MovieClip):void
		{
			var objectA_Halfwidth:Number=objectA.width/2;
			var objectA_Halfheight:Number=objectA.height/2;
			var objectB_Halfwidth:Number=objectB.width/2;
			var objectB_Halfheight:Number=objectB.height/2;
			var dx:Number=objectA.x-objectB.x;
			var ox:Number=objectA_Halfwidth+objectB_Halfwidth-Math.abs(dx);

			if (ox>0)
			{
				var dy:Number=objectA.y-objectB.y;
				var oy:Number=objectA_Halfheight+objectB_Halfheight-Math.abs(dy);

				if (oy>0)
				{
					if (ox<oy)
					{
						if (dx>0)
						{
							//objectA左侧碰撞
							oy=0;
						}
						else
						{
							//objectA右侧碰撞
							oy=0;
							ox*=-1;
						}
					}
					else
					{
						if (dy>0)
						{
							//objectA顶部碰撞
							ox=0;
						}
						else
						{
							//objectA底部碰撞
							ox=0;
							oy*=-1;
						}
					}
					objectA.x+=ox;
					objectA.y+=oy;
				}
			}
		}
		//角色与平台碰撞检测(防止穿墙)
		static public function playerCollisionPlat(player:MovieClip,plats:Array,collisionArea:MovieClip=null):Object
		{
			//用于判断是否碰撞
			var collision:Boolean=false;
			var horizontalCollision:Boolean=false;
			var verticalCollision:Boolean=false;
			var collisionDirection:Object=new Object();
			collisionDirection.left=false;
			collisionDirection.right=false;
			collisionDirection.top=false;
			collisionDirection.bottom=false;
			collisionDirection.landing=false;
			//获取角色速度
			var vx:Number=player.vx;
			var vy:Number=player.vy;
			//计算角色起始坐标
			var start_X:Number=player.x-vx;
			var start_Y:Number=player.y-vy;
			//获取角色旋转角度
			var bodyAngle:Number=player.bodyAngle;
			//还原角色旋转角度
			player.bodyAngle=0;
			//旋转速度
			if (bodyAngle!=0)
			{
				var sin:Number=Math.sin(angleToRadian(bodyAngle));
				var cos:Number=Math.cos(angleToRadian(bodyAngle));
				//旋转后的速度
				var point:Point=rotate(vx,0,sin,cos,false);
				vx=point.x;
				vy+=point.y;
			}
			//重定角色坐标
			var player_X:Number=player.x=start_X+vx;
			var player_Y:Number=player.y=start_Y+vy;
			//角色半径
			var player_Halfwidth:Number;
			var player_Halfheight:Number;
			//设置碰撞区域
			if (collisionArea!=null)
			{
				//角色半径
				player_Halfwidth=collisionArea.width/2;
				player_Halfheight=collisionArea.height/2;
			}
			else
			{
				//角色半径
				player_Halfwidth=player.width/2;
				player_Halfheight=player.height/2;
			}
			var h:Number=player_Halfheight*0.3;
			//将角色运动的轨迹看做一个矩形
			var rectangle_Halfwidth:Number=player_Halfwidth+Math.abs(vx/2);
			var rectangle_Halfheight:Number=player_Halfheight+Math.abs(vy/2);
			var rectangle_X:Number=player_X-vx/2;
			var rectangle_Y:Number=player_Y-player_Halfheight-vy/2;
			//平台的半径
			var plat_Halfwidth:Number;
			var plat_Halfheight:Number;
			//平台旋转角度
			var angle:Number=0;
			//创建碰撞平台的数组
			var platSet:Array=new Array();
			//遍历平台数组
			for (var i in plats)
			{
				var plat:MovieClip=plats[i];
				//检查该平台是否有旋转角度
				if (plat.rotation!=0)
				{
					//获取平台旋转角度
					angle=plat.rotation;
					//获取平台旋转前的半径
					plat.rotation=0;
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
					plat.rotation=angle;
					sin=Math.sin(angleToRadian(angle));
					cos=Math.cos(angleToRadian(angle));
					//保存旋转前的起始点坐标及角色坐标
					var oldStart_X:Number=start_X;
					var oldStart_Y:Number=start_Y;
					var oldPlayer_X:Number=player_X;
					var oldPlayer_Y:Number=player_Y;
					//起始点与平台的相对距离
					var disx:Number=start_X-plat.x;
					var disy:Number=start_Y-plat.y;
					//旋转起始点后的新位置
					point=rotate(disx,disy,sin,cos,true);
					start_X=point.x+plat.x;
					start_Y=point.y+plat.y;
					//角色与平台的相对距离
					disx=player_X-plat.x;
					disy=player_Y-plat.y;
					//旋转角色后的新位置
					point=rotate(disx,disy,sin,cos,true);
					player_X=point.x+plat.x;
					player_Y=point.y+plat.y;
					//保存旋转前的矩形数据
					var oldRectangle_Halfwidth:Number=rectangle_Halfwidth;
					var oldRectangle_Halfheight:Number=rectangle_Halfheight;
					var oldRectangle_X:Number=rectangle_X;
					var oldRectangle_Y:Number=rectangle_Y;
					rectangle_Halfwidth=player_Halfwidth+Math.abs((player_X-start_X)/2);
					rectangle_Halfheight=player_Halfheight+Math.abs((player_Y-start_Y)/2);
					rectangle_X=player_X-(player_X-start_X)/2;
					rectangle_Y=player_Y-player_Halfheight-(player_Y-start_Y)/2;
				}
				else
				{
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
				}
				//计算X轴方向距离
				var dx:Number=rectangle_X-plat.x;
				var ox:Number=rectangle_Halfwidth+plat_Halfwidth-Math.abs(dx);
				if (ox>0)
				{
					//判断Y轴方向的重叠
					var dy:Number=rectangle_Y-(plat.y-plat_Halfheight);
					var oy:Number=rectangle_Halfheight+plat_Halfheight-Math.abs(dy);
					if (oy>0)
					{
						//将所有与矩形碰撞的平台推入数组
						platSet.push(plat);
					}
				}
				//还原旧数据
				if(angle!=0)
				{
					start_X=oldStart_X;
					start_Y=oldStart_Y;
					player_X=oldPlayer_X;
					player_Y=oldPlayer_Y;
					rectangle_Halfwidth=oldRectangle_Halfwidth;
					rectangle_Halfheight=oldRectangle_Halfheight;
					rectangle_X=oldRectangle_X;
					rectangle_Y=oldRectangle_Y;
					angle=0;	
				}
			}
			//是否有平台被碰撞
			if (platSet.length>0)
			{
				//计算移动前后的距离
				var distance:Number=Point.distance(new Point(start_X,start_Y),new Point(player_X,player_Y));
				//计算移动的速率
				var rateX:Number=vx/distance;
				var rateY:Number=vy/distance;
				if (isNaN(rateX)) rateX=0;
				if (isNaN(rateY)) rateY=0;
				//开始检测碰撞
				label:for (var k:int=0;k<distance;k++)
				{
					start_X+=rateX;
					start_Y+=rateY;
					for (i=platSet.length-1;i>=0;i--)
					{
						plat=platSet[i];
						//保存起始点
						var X:Number=start_X;
						var Y:Number=start_Y;
						//检查该平台是否有旋转角度
						if (plat.rotation!=0)
						{
							//获取平台旋转角度
							angle=plat.rotation;
							//获取平台旋转前的半径
							plat.rotation=0;
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
							plat.rotation=angle;
							sin=Math.sin(angleToRadian(angle));
							cos=Math.cos(angleToRadian(angle));
							var tan:Number=Math.tan(angleToRadian(angle));
							//检测点与平台的相对距离
							disx=X-plat.x;
							disy=Y-plat.y;
							//旋转检测点后的新位置
							point=rotate(disx,disy,sin,cos,true);
							X=point.x+plat.x;
							Y=point.y+plat.y;
						}
						else
						{
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
						}
						//碰撞区域的中心点
						var collisionAreaPoint:Point=new Point(X,Y-player_Halfheight);
						//计算碰撞点与平台的重叠
						dx=collisionAreaPoint.x-plat.x;
						ox=player_Halfwidth+plat_Halfwidth-Math.abs(dx);
						if (ox>0)
						{
							dy=collisionAreaPoint.y-(plat.y-plat_Halfheight);
							oy=player_Halfheight+plat_Halfheight-Math.abs(dy);
							if (oy>2)
							{
								//确认发生碰撞
								collision=true;
								if (angle!=0)
								{
									//物体与平台的相对距离
									disx=player_X-plat.x;
									disy=player_Y-plat.y;
									//旋转物体后的新位置
									point=rotate(disx,disy,sin,cos,true);
									player_X=point.x+plat.x;
									player_Y=point.y+plat.y;
								}
								//判断碰撞方向
								if (ox<oy&&oy>h)
								{
									//水平方向碰撞
									horizontalCollision=true;
									if (dx>0)
									{
										//左侧碰撞
										collisionDirection.left=true;
										collisionDirection.leftObject=plat;
										var leftAngle:Number=angle;
										var leftPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										if (collisionDirection.right)
										{
											tan=Math.tan(angleToRadian(leftAngle-rightAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,rightPlat.dy,oy,rightPlat.oy,ox,player_Halfheight*2,plat_Halfheight*2,rightPlat.h);
												oy=point.x;
												ox=point.y;
												//改变碰撞方向赋值
												collisionDirection.left=false;
												if (oy>0)
												{
													collisionDirection.top=true;
													collisionDirection.topObject=(ox==0)?plat:collisionDirection.rightObject;
												}
												else
												{
													collisionDirection.bottom=true;
													collisionDirection.bottomObject=(ox==0)?plat:collisionDirection.rightObject;
												}
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (collisionDirection.top)
										{
											tan=Math.tan(angleToRadian(leftAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (collisionDirection.bottom)
										{
											tan=Math.tan(angleToRadian(leftAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
									}
									else
									{
										//右侧碰撞
										collisionDirection.right=true;
										collisionDirection.rightObject=plat;
										var rightAngle:Number=angle;
										var rightPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										ox*=-1;
										if (collisionDirection.left)
										{
											tan=Math.tan(angleToRadian(rightAngle-leftAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,leftPlat.dy,oy,leftPlat.oy,ox,player_Halfheight*2,plat_Halfheight*2,leftPlat.h);
												oy=point.x;
												ox=point.y;
												//改变碰撞方向赋值
												collisionDirection.right=false;
												if (oy>0)
												{
													collisionDirection.top=true;
													collisionDirection.topObject=(ox==0)?plat:collisionDirection.leftObject;
												}
												else
												{
													collisionDirection.bottom=true;
													collisionDirection.bottomObject=(ox==0)?plat:collisionDirection.leftObject;
												}
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (collisionDirection.top)
										{
											tan=Math.tan(angleToRadian(rightAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (collisionDirection.bottom)
										{
											tan=Math.tan(angleToRadian(rightAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
									}
								}
								else
								{
									//垂直方向碰撞
									verticalCollision=true;
									if (dy>0)
									{
										//顶部碰撞
										collisionDirection.top=true;
										collisionDirection.topObject=plat;
										var topAngle:Number=angle;
										var topPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										if (collisionDirection.bottom)
										{
											tan=Math.tan(angleToRadian(topAngle-bottomAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,bottomPlat.dx,ox,bottomPlat.ox,oy,player_Halfwidth*2,plat_Halfwidth*2,bottomPlat.w);
												ox=point.x;
												oy=point.y;
												//改变碰撞方向赋值
												collisionDirection.top=false;
												if (ox>0)
												{
													collisionDirection.left=true;
													collisionDirection.leftObject=(oy==0)?plat:collisionDirection.bottomObject;
												}
												else
												{
													collisionDirection.right=true;
													collisionDirection.rightObject=(oy==0)?plat:collisionDirection.bottomObject;
												}
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (collisionDirection.left)
										{
											tan=Math.tan(angleToRadian(topAngle-leftAngle));
											ox=oy*tan;
										}
										else if (collisionDirection.right)
										{
											tan=Math.tan(angleToRadian(topAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										if (vy<0)
										{
											player.vy=0;
										}
									}
									else
									{
										//底部碰撞
										collisionDirection.bottom=true;
										collisionDirection.bottomObject=plat;
										var bottomAngle:Number=angle;
										var bottomPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										oy*=-1;
										if (collisionDirection.top)
										{
											tan=Math.tan(angleToRadian(bottomAngle-topAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,topPlat.dx,ox,topPlat.ox,oy,player_Halfwidth*2,plat_Halfwidth*2,topPlat.w);
												ox=point.x;
												oy=point.y;
												//改变碰撞方向赋值
												collisionDirection.bottom=false;
												if (ox>0)
												{
													collisionDirection.left=true;
													collisionDirection.leftObject=(oy==0)?plat:collisionDirection.topObject;
												}
												else
												{
													collisionDirection.right=true;
													collisionDirection.rightObject=(oy==0)?plat:collisionDirection.topObject;
												}
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (collisionDirection.left)
										{
											tan=Math.tan(angleToRadian(bottomAngle-leftAngle));
											ox=oy*tan;
										}
										else if (collisionDirection.right)
										{
											tan=Math.tan(angleToRadian(bottomAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										if (bodyAngle!=0)
										{
											//换算相对于身体斜度的vy方向
											point=rotate(vx,vy,sin,cos,true);
											vy=point.y;
										}
										if (vy>=0)
										{
											//着陆
											collisionDirection.landing=true;
											player.bodyAngle=angle;
										}
									}
								}
								//应用距离
								X+=ox;
								Y+=oy;
								//验证碰撞方向
								if (collisionDirection.top&&collisionDirection.bottom)
								{
									horizontalCollision=true;
								}
								if (collisionDirection.left&&collisionDirection.right)
								{
									verticalCollision=true;
								}
								//更新角色坐标
								if (horizontalCollision)
								{
									player_X=X;
								}
								if (verticalCollision)
								{
									if (!horizontalCollision&&angle!=0)
									{
										player_X+=(Y-player_Y)*tan;
									}
									player_Y=Y;
								}
								//将坐标及速度旋转回去
								if (angle!=0)
								{
									//检测点与平台的相对距离
									disx=X-plat.x;
									disy=Y-plat.y;
									//将检测点坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									X=point.x+plat.x;
									Y=point.y+plat.y;
									//物体与平台的相对距离
									disx=player_X-plat.x;
									disy=player_Y-plat.y;
									//将物体坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									player_X=point.x+plat.x;
									player_Y=point.y+plat.y;
								}
								//更新起始点坐标
								start_X=X;
								start_Y=Y;
								//将该平台移除数组
								platSet.splice(i,1);
							}
						}
						//还原角度
						if(angle!=0)
						{
							angle=0;	
						}
					}
					if (collision)
					{
						//更新角色坐标
						player.x=player_X;
						player.y=player_Y;
						if ((platSet.length>0)&&(!horizontalCollision||!verticalCollision))
						{
							//计算新速度
							var new_vx:Number=player_X-start_X;
							var new_vy:Number=player_Y-start_Y;
							//计算移动前后的新距离
							distance=Point.distance(new Point(start_X,start_Y),new Point(player_X,player_Y));
							//计算新的移动速率
							rateX=new_vx/distance;
							rateY=new_vy/distance;
							if (isNaN(rateX)) rateX=0;
							if (isNaN(rateY)) rateY=0;
							collision=false;
							k=-1;
							continue label;
						}
						break;
					}
				}
			}
			return collisionDirection;
		}
		//判断是否在墙下
		static public function underTheWall(player:MovieClip,maxHeight:Number,isOnGround:Boolean,plats:Array,collisionArea:MovieClip=null):Boolean
		{
			//判断是否在墙下
			var underTheWall:Boolean=false;
			//角色半径
			var player_Halfwidth:Number;
			var player_Halfheight:Number;
			//设置碰撞区域
			if (collisionArea!=null)
			{
				//角色半径
				player_Halfwidth=collisionArea.width/2;
				player_Halfheight=collisionArea.height/2;
			}
			else
			{
				//角色半径
				player_Halfwidth=player.width/2;
				player_Halfheight=player.height/2;
			}
			//角色脚底坐标
			var player_X:Number=player.x;
			var player_Y:Number=player.y;
			//平台的半径
			var plat_Halfwidth:Number;
			var plat_Halfheight:Number;
			//平台旋转角度
			var angle:Number=0;
			for (var i in plats)
			{
				var plat:MovieClip=plats[i];
				//检查该平台是否有旋转角度
				if (plat.rotation!=0)
				{
					//储存旋转前的坐标
					var oldX:Number=player_X;
					var oldY:Number=player_Y;
					//获取平台旋转角度
					angle=plat.rotation;
					//获取平台旋转前的半径
					plat.rotation=0;
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
					plat.rotation=angle;
					var sin:Number=Math.sin(angleToRadian(angle));
					var cos:Number=Math.cos(angleToRadian(angle));
					//角色与平台的相对距离
					var disx:Number=player_X-plat.x;
					var disy:Number=player_Y-plat.y;
					//旋转角色后的新位置
					var point:Point=rotate(disx,disy,sin,cos,true);
					player_X=point.x+plat.x;
					player_Y=point.y+plat.y;
				}
				else
				{
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
				}
				//碰撞区域的中心点
				var collisionAreaPoint:Point=new Point(player_X,player_Y-player_Halfheight);
				//计算X轴方向重叠
				var dx:Number=collisionAreaPoint.x-plat.x;
				var ox:Number=player_Halfwidth+plat_Halfwidth-Math.abs(dx);
				//计算Y轴方向重叠
				var dy:Number=collisionAreaPoint.y-(plat.y-plat_Halfheight);
				//精确到一位小数
				ox=preciseDecimal(ox,1);
				//判断是否在墙下
				if (isOnGround&&ox>0&&dy>0)
				{
					if(player_Y-maxHeight<plat.y)
					{
						underTheWall=true;
					}
				}
				if (angle!=0)
				{
					//还原角色旧坐标
					player_X=oldX;
					player_Y=oldY;
					angle=0;
				}
			}
			return underTheWall;
		}
		//物体与平台碰撞检测(防止穿墙)
		static public function objectCollisionPlat(object:MovieClip,plats:Array,collisionArea:MovieClip=null):Boolean
		{
			//物体角度缓动
			object.rotation=object.rotation/3;
			//用于判断是否碰撞
			var collision:Boolean=false;
			var horizontalCollision:Boolean=false;
			var verticalCollision:Boolean=false;
			var leftCollision:Boolean=false;
			var rightCollision:Boolean=false;
			var topCollision:Boolean=false;
			var bottomCollision:Boolean=false;
			var landing:Boolean=false;
			//object变量
			var object_X:Number=object.x;
			var object_Y:Number=object.y;
			var object_Halfwidth:Number;
			var object_Halfheight:Number;
			if (collisionArea!=null)
			{
				object_Halfwidth=collisionArea.width/2;
				object_Halfheight=collisionArea.height/2;
			}
			else
			{
				object_Halfwidth=object.width/2;
				object_Halfheight=object.height/2;
			}
			//获取object速度
			var vx:Number=object.vx;
			var vy:Number=object.vy;
			//设置object起始坐标
			var start_X:Number=object_X-vx;
			var start_Y:Number=object_Y-vy;
			//将object运动的轨迹看做一个矩形
			var rectangle_Halfwidth:Number=object_Halfwidth+Math.abs(vx/2);
			var rectangle_Halfheight:Number=object_Halfheight+Math.abs(vy/2);
			var rectangle_X:Number=object_X-vx/2;
			var rectangle_Y:Number=object_Y-object_Halfheight-vy/2;
			//平台的半径
			var plat_Halfwidth:Number;
			var plat_Halfheight:Number;
			//平台旋转角度
			var angle:Number=0;
			//创建碰撞平台的数组
			var platSet:Array=new Array();
			//遍历平台数组
			for (var i in plats)
			{
				var plat:MovieClip=plats[i];
				if (object==plat)
				{
					continue;
				}
				//检查该平台是否有旋转角度
				if (plat.rotation!=0)
				{
					//获取平台旋转角度
					angle=plat.rotation;
					//获取平台旋转前的半径
					plat.rotation=0;
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
					plat.rotation=angle;
					var sin:Number=Math.sin(angleToRadian(angle));
					var cos:Number=Math.cos(angleToRadian(angle));
					//保存旋转前的起始点坐标及角色坐标
					var oldStart_X:Number=start_X;
					var oldStart_Y:Number=start_Y;
					var oldObject_X:Number=object_X;
					var oldObject_Y:Number=object_Y;
					//起始点与平台的相对距离
					var disx:Number=start_X-plat.x;
					var disy:Number=start_Y-plat.y;
					//旋转起始点后的新位置
					var point:Point=rotate(disx,disy,sin,cos,true);
					start_X=point.x+plat.x;
					start_Y=point.y+plat.y;
					//角色与平台的相对距离
					disx=object_X-plat.x;
					disy=object_Y-plat.y;
					//旋转角色后的新位置
					point=rotate(disx,disy,sin,cos,true);
					object_X=point.x+plat.x;
					object_Y=point.y+plat.y;
					//保存旋转前的矩形数据
					var oldRectangle_Halfwidth:Number=rectangle_Halfwidth;
					var oldRectangle_Halfheight:Number=rectangle_Halfheight;
					var oldRectangle_X:Number=rectangle_X;
					var oldRectangle_Y:Number=rectangle_Y;
					rectangle_Halfwidth=object_Halfwidth+Math.abs((object_X-start_X)/2);
					rectangle_Halfheight=object_Halfheight+Math.abs((object_Y-start_Y)/2);
					rectangle_X=object_X-(object_X-start_X)/2;
					rectangle_Y=object_Y-object_Halfheight-(object_Y-start_Y)/2;
				}
				else
				{
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
				}
				//计算X轴方向距离
				var dx:Number=rectangle_X-plat.x;
				var ox:Number=rectangle_Halfwidth+plat_Halfwidth-Math.abs(dx);
				if (ox>0)
				{
					//判断Y轴方向的重叠
					var dy:Number=rectangle_Y-(plat.y-plat_Halfheight);
					var oy:Number=rectangle_Halfheight+plat_Halfheight-Math.abs(dy);
					if (oy>0)
					{
						//将所有与矩形碰撞的平台推入数组
						platSet.push(plat);
					}
				}
				//还原旧数据
				if(angle!=0)
				{
					start_X=oldStart_X;
					start_Y=oldStart_Y;
					object_X=oldObject_X;
					object_Y=oldObject_Y;
					rectangle_Halfwidth=oldRectangle_Halfwidth;
					rectangle_Halfheight=oldRectangle_Halfheight;
					rectangle_X=oldRectangle_X;
					rectangle_Y=oldRectangle_Y;
					angle=0;	
				}
			}
			//是否有平台被碰撞
			if (platSet.length>0)
			{
				//计算移动前后的距离
				var distance:Number=Point.distance(new Point(start_X,start_Y),new Point(object_X,object_Y));
				//计算移动的速率
				var rateX:Number=vx/distance;
				var rateY:Number=vy/distance;
				if (isNaN(rateX)) rateX=0;
				if (isNaN(rateY)) rateY=0;
				//开始检测碰撞
				label:for (var k:int=0;k<distance;k++)
				{
					start_X+=rateX;
					start_Y+=rateY;
					for (i=platSet.length-1;i>=0;i--)
					{
						plat=platSet[i];
						//保存起始点
						var X:Number=start_X;
						var Y:Number=start_Y;
						//检查该平台是否有旋转角度
						if (plat.rotation!=0)
						{
							//获取平台旋转角度
							angle=plat.rotation;
							//获取平台旋转前的半径
							plat.rotation=0;
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
							plat.rotation=angle;
							sin=Math.sin(angleToRadian(angle));
							cos=Math.cos(angleToRadian(angle));
							var tan:Number=Math.tan(angleToRadian(angle));
							//检测点与平台的相对距离
							disx=X-plat.x;
							disy=Y-plat.y;
							//旋转检测点后的新位置
							point=rotate(disx,disy,sin,cos,true);
							X=point.x+plat.x;
							Y=point.y+plat.y;
						}
						else
						{
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
						}
						//碰撞区域的中心点
						var collisionAreaPoint:Point=new Point(X,Y-object_Halfheight);
						//计算碰撞点与平台的重叠
						dx=collisionAreaPoint.x-plat.x;
						ox=object_Halfwidth+plat_Halfwidth-Math.abs(dx);
						if (ox>0)
						{
							dy=collisionAreaPoint.y-(plat.y-plat_Halfheight);
							oy=object_Halfheight+plat_Halfheight-Math.abs(dy);
							if (oy>0)
							{
								//确认发生碰撞
								collision=true;
								if (angle!=0)
								{
									//物体与平台的相对距离
									disx=object_X-plat.x;
									disy=object_Y-plat.y;
									//旋转物体后的新位置
									point=rotate(disx,disy,sin,cos,true);
									object_X=point.x+plat.x;
									object_Y=point.y+plat.y;
								}
								//判断碰撞方向
								if (ox<oy)
								{
									//水平方向碰撞
									horizontalCollision=true;
									if (dx>0)
									{
										//左侧碰撞
										leftCollision=true;
										var leftAngle:Number=angle;
										var leftPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										if (rightCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-rightAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,rightPlat.dy,oy,rightPlat.oy,ox,object_Halfheight*2,plat_Halfheight*2,rightPlat.h);
												oy=point.x;
												ox=point.y;
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (topCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
									}
									else
									{
										//右侧碰撞
										rightCollision=true;
										var rightAngle:Number=angle;
										var rightPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										ox*=-1;
										if (leftCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-leftAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,leftPlat.dy,oy,leftPlat.oy,ox,object_Halfheight*2,plat_Halfheight*2,leftPlat.h);
												oy=point.x;
												ox=point.y;
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (topCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
									}
								}
								else
								{
									//垂直方向碰撞
									verticalCollision=true;
									if (dy>0)
									{
										//顶部碰撞
										topCollision=true;
										var topAngle:Number=angle;
										var topPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-bottomAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,bottomPlat.dx,ox,bottomPlat.ox,oy,object_Halfwidth*2,plat_Halfwidth*2,bottomPlat.w);
												ox=point.x;
												oy=point.y;
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (leftCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-leftAngle));
											ox=oy*tan;
										}
										else if (rightCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										if (vy<0)
										{
											object.vy=0;
										}
									}
									else
									{
										//底部碰撞
										bottomCollision=true;
										var bottomAngle:Number=angle;
										var bottomPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										oy*=-1;
										if (topCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-topAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,topPlat.dx,ox,topPlat.ox,oy,object_Halfwidth*2,plat_Halfwidth*2,topPlat.w);
												ox=point.x;
												oy=point.y;
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (leftCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-leftAngle));
											ox=oy*tan;
										}
										else if (rightCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										//着陆
										if (vy>=0)
										{
											landing=true;
											object.rotation=angle;
										}
									}
								}
								//应用距离
								X+=ox;
								Y+=oy;
								//验证碰撞方向
								if (topCollision&&bottomCollision)
								{
									horizontalCollision=true;
								}
								if (leftCollision&&rightCollision)
								{
									verticalCollision=true;
								}
								//更新角色坐标
								if (horizontalCollision)
								{
									object_X=X;
								}
								if (verticalCollision)
								{
									if (!horizontalCollision&&angle!=0)
									{
										object_X+=(Y-object_Y)*tan;
									}
									object_Y=Y;
								}
								//将坐标及速度旋转回去
								if (angle!=0)
								{
									//检测点与平台的相对距离
									disx=X-plat.x;
									disy=Y-plat.y;
									//将检测点坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									X=point.x+plat.x;
									Y=point.y+plat.y;
									//物体与平台的相对距离
									disx=object_X-plat.x;
									disy=object_Y-plat.y;
									//将物体坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									object_X=point.x+plat.x;
									object_Y=point.y+plat.y;
								}
								//更新起始点坐标
								start_X=X;
								start_Y=Y;
								//将该平台移除数组
								platSet.splice(i,1);
							}
						}
						//还原角度
						if(angle!=0)
						{
							angle=0;	
						}
					}
					if (collision)
					{
						//更新角色坐标
						object.x=object_X;
						object.y=object_Y;
						if ((platSet.length>0)&&(!horizontalCollision||!verticalCollision))
						{
							//计算新速度
							var new_vx:Number=object_X-start_X;
							var new_vy:Number=object_Y-start_Y;
							//计算移动前后的新距离
							distance=Point.distance(new Point(start_X,start_Y),new Point(object_X,object_Y));
							//计算新的移动速率
							rateX=new_vx/distance;
							rateY=new_vy/distance;
							if (isNaN(rateX)) rateX=0;
							if (isNaN(rateY)) rateY=0;
							collision=false;
							k=-1;
							continue label;
						}
						break;
					}
				}
			}
			return landing;
		}
		//点与平台的碰撞反弹(防止穿墙)
		static public function pointCollisionBounce(object:MovieClip,plats:Array,bounce:Number=0):Boolean
		{
			//用于判断是否碰撞
			var collisionBounce:Boolean=false;
			var collision:Boolean=false;
			var horizontalCollision:Boolean=false;
			var verticalCollision:Boolean=false;
			var leftCollision:Boolean=false;
			var rightCollision:Boolean=false;
			var topCollision:Boolean=false;
			var bottomCollision:Boolean=false;
			//object坐标
			var object_X:Number=object.x;
			var object_Y:Number=object.y;
			//获取object的速度
			var vx:Number=object.vx;
			var vy:Number=object.vy;
			//设置object起始坐标
			var start_X:Number=object_X-vx;
			var start_Y:Number=object_Y-vy;
			//点每帧运动轨迹构成的矩形
			var rectangle_Halfwidth:Number=Math.abs(vx/2)+1;
			var rectangle_Halfheight:Number=Math.abs(vy/2)+1;
			var rectangle_X:Number=start_X+vx/2;
			var rectangle_Y:Number=start_Y+vy/2;
			//平台的半径
			var plat_Halfwidth:Number;
			var plat_Halfheight:Number;
			//创建碰撞平台的数组
			var platSet:Array=new Array();
			var rect1:Rectangle=new Rectangle(rectangle_X-rectangle_Halfwidth,rectangle_Y-rectangle_Halfheight,rectangle_Halfwidth*2,rectangle_Halfheight*2);
			//遍历平台数组
			for (var i in plats)
			{
				var plat:MovieClip=plats[i];
				var rect2:Rectangle=plat.getBounds(object.parent);
				if (rect1.intersects(rect2))
				{
					//将所有与矩形重叠的平台推入数组
					platSet.push(plat);
				}
			}
			//是否有平台被碰撞
			if (platSet.length>0)
			{
				//计算移动前后的距离
				var distance:Number=Point.distance(new Point(start_X,start_Y),new Point(object.x,object.y));
				//计算移动的速率
				var rateX:Number=vx/distance;
				var rateY:Number=vy/distance;
				if (isNaN(rateX)) rateX=0;
				if (isNaN(rateY)) rateY=0;
				//平台旋转角度
				var angle:Number=0;
				//开始检测碰撞
				label:for (var k:int=0;k<distance;k++)
				{
					start_X+=rateX;
					start_Y+=rateY;
					for (i=platSet.length-1;i>=0;i--)
					{
						plat=platSet[i];
						//保存起始点
						var X:Number=start_X;
						var Y:Number=start_Y;
						//检查该平台是否有旋转角度
						if (plat.rotation!=0)
						{
							//获取平台旋转角度
							angle=plat.rotation;
							//获取平台旋转前的半径
							plat.rotation=0;
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
							plat.rotation=angle;
							var sin:Number=Math.sin(angleToRadian(angle));
							var cos:Number=Math.cos(angleToRadian(angle));
							var tan:Number=Math.tan(angleToRadian(angle));
							//检测点与平台的相对距离
							var disx:Number=X-plat.x;
							var disy:Number=Y-plat.y;
							//旋转检测点后的新位置
							var point:Point=rotate(disx,disy,sin,cos,true);
							X=point.x+plat.x;
							Y=point.y+plat.y;
						}
						else
						{
							plat_Halfwidth=plat.width/2;
							plat_Halfheight=plat.height/2;
						}
						//计算碰撞点与平台的重叠
						var dx:Number=X-plat.x;
						var ox:Number=plat_Halfwidth-Math.abs(dx)+1;
						if (ox>0)
						{
							var dy:Number=Y-(plat.y-plat_Halfheight);
							var oy:Number=plat_Halfheight-Math.abs(dy)+1;
							if (oy>0)
							{
								//确认发生碰撞
								collisionBounce=true;
								collision=true;
								if (angle!=0)
								{
									//物体与平台的相对距离
									disx=object_X-plat.x;
									disy=object_Y-plat.y;
									//旋转物体后的新位置
									point=rotate(disx,disy,sin,cos,true);
									object_X=point.x+plat.x;
									object_Y=point.y+plat.y;
									//旋转后的速度
									point=rotate(vx,vy,sin,cos,true);
									vx=point.x;
									vy=point.y;
								}
								//判断碰撞方向
								if (ox<oy)
								{
									//水平方向碰撞
									horizontalCollision=true;
									//Y轴摩擦力
									vy*=1-Math.abs(angle)/300;
									if (dx>0)
									{
										//左侧碰撞
										leftCollision=true;;
										var leftAngle:Number=angle;
										var leftPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										if (rightCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-rightAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,rightPlat.dy,oy,rightPlat.oy,ox,0,plat_Halfheight*2,rightPlat.h);
												oy=point.x;
												ox=point.y;
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (topCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(leftAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
										if (vx<0&&bounce!=0)
										{
											vx*=-bounce;
										}
									}
									else
									{
										//右侧碰撞
										rightCollision=true;
										var rightAngle:Number=angle;
										var rightPlat:Object={h:plat_Halfheight*2,dy:dy,oy:oy};
										ox*=-1;
										if (leftCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-leftAngle));
											if (tan==0)
											{
												point=compareOxy(vy,dy,leftPlat.dy,oy,leftPlat.oy,ox,0,plat_Halfheight*2,leftPlat.h);
												oy=point.x;
												ox=point.y;
											}
											else
											{
												oy=ox/tan;
											}
										}
										else if (topCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-topAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(rightAngle-bottomAngle));
											oy=ox*tan;
											oy*=-1;
										}
										else
										{
											oy=0;
										}
										if (vx>0&&bounce!=0)
										{
											vx*=-bounce;
										}
									}
								}
								else
								{
									//垂直方向碰撞
									verticalCollision=true;
									//X轴摩擦力
									vx*=0.7+Math.abs(angle)/300;
									if (dy>0)
									{
										//顶部碰撞
										topCollision=true;
										var topAngle:Number=angle;
										var topPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										if (bottomCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-bottomAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,bottomPlat.dx,ox,bottomPlat.ox,oy,0,plat_Halfwidth*2,bottomPlat.w);
												ox=point.x;
												oy=point.y;
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (leftCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-leftAngle));
											ox=oy*tan;
										}
										else if (rightCollision)
										{
											tan=Math.tan(angleToRadian(topAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										if (vy<0&&bounce!=0)
										{
											vy*=-bounce;
										}
									}
									else
									{
										//底部碰撞
										bottomCollision=true;
										var bottomAngle:Number=angle;
										var bottomPlat:Object={w:plat_Halfwidth*2,dx:dx,ox:ox};
										oy*=-1;
										if (topCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-topAngle));
											if (tan==0)
											{
												point=compareOxy(vx,dx,topPlat.dx,ox,topPlat.ox,oy,0,plat_Halfwidth*2,topPlat.w);
												ox=point.x;
												oy=point.y;
											}
											else
											{
												ox=oy/tan;
												ox*=-1;
											}
										}
										else if (leftCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-leftAngle));
											ox=oy*tan;
										}
										else if (rightCollision)
										{
											tan=Math.tan(angleToRadian(bottomAngle-rightAngle));
											ox=oy*tan;
										}
										else
										{
											if (angle!=0)
											{
												ox=oy*tan;
											}
											else
											{
												ox=0;
											}
										}
										if (vy>0&&bounce!=0)
										{
											vy*=-bounce;
										}
									}
								}
								//应用距离
								X+=ox;
								Y+=oy;
								//验证碰撞方向
								if (topCollision&&bottomCollision)
								{
									horizontalCollision=true;
								}
								if (leftCollision&&rightCollision)
								{
									verticalCollision=true;
								}
								//更新物体坐标
								if (horizontalCollision)
								{
									object_X=X;
								}
								if (verticalCollision)
								{
									if (!horizontalCollision&&angle!=0)
									{
										object_X+=(Y-object_Y)*tan;
									}
									object_Y=Y;
								}
								//判断何时停止
								if (bottomCollision&&Math.abs(vy)<2)
								{
									vx=0;
									vy=0;
								}
								//将坐标及速度旋转回去
								if (angle!=0)
								{
									//检测点与平台的相对距离
									disx=X-plat.x;
									disy=Y-plat.y;
									//将检测点坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									X=point.x+plat.x;
									Y=point.y+plat.y;
									//物体与平台的相对距离
									disx=object_X-plat.x;
									disy=object_Y-plat.y;
									//将物体坐标旋转回去
									point=rotate(disx,disy,sin,cos,false);
									object_X=point.x+plat.x;
									object_Y=point.y+plat.y;
									//将速度旋转回去
									point=rotate(vx,vy,sin,cos,false);
									vx=point.x;
									vy=point.y;
								}
								//更新起始点坐标
								start_X=X;
								start_Y=Y;
								//将该平台移除数组
								platSet.splice(i,1);
							}
						}
						//还原角度
						if(angle!=0)
						{
							angle=0;	
						}
					}
					if (collision)
					{
						//更新object坐标及速度
						object.x=object_X;
						object.y=object_Y;
						object.vx=vx;
						object.vy=vy;
						if ((platSet.length>0)&&(!horizontalCollision||!verticalCollision))
						{
							//计算新速度
							var new_vx:Number=object_X-start_X;
							var new_vy:Number=object_Y-start_Y;
							//计算移动前后的新距离
							distance=Point.distance(new Point(start_X,start_Y),new Point(object_X,object_Y));
							//计算新的移动速率
							rateX=new_vx/distance;
							rateY=new_vy/distance;
							if (isNaN(rateX)) rateX=0;
							if (isNaN(rateY)) rateY=0;
							collision=false;
							k=-1;
							continue label;
						}
						break;
					}
				}
			}
			return collisionBounce;
		}
		//关节与平台碰撞检测
		static public function segmentCollisionPlat(segment:MovieClip,plats:Array,vx:Number,vy:Number,skew:Number=0,parentMC:MovieClip=null,parentCollisionDirection:Object=null):void
		{
			//用于判断碰撞方向
			var collision:Boolean=false;
			var isOnCollision:Boolean=false;
			var horizontalCollision:Boolean=false;
			var verticalCollision:Boolean=false;
			var leftCollision:Boolean=false;
			var rightCollision:Boolean=false;
			var topCollision:Boolean=false;
			var bottomCollision:Boolean=false;
			//父级碰撞方向
			var parentLeftCollision:Boolean=false;
			var parentRightCollision:Boolean=false;
			var parentTopCollision:Boolean=false;
			var parentBottomCollision:Boolean=false;
			//获取关节角度
			var segmentAngle:Number=angleTo180(segment.rotation+skew);
			//获取关节高宽
			segment.rotation=-skew;
			var segment_Height=segment.height;
			segment.rotation=segmentAngle-skew;
			//保存关节坐标
			var segment_X:Number=segment.x;
			var segment_Y:Number=segment.y;
			if (parentMC!=null)
			{
				var point:Point=new Point(segment_X,segment_Y);
				//将关节坐标转换成父级坐标
				point=parentMC.localToGlobal(point);
				point=parentMC.parent.globalToLocal(point);
				segment.x=point.x;
				segment.y=point.y;
				//若父级为反向
				if (parentMC.scaleX==-1)
				{
					vx*=-1;
					//将关节也反过来
					segment.rotation*=-1
					segmentAngle=angleTo180(segment.rotation+skew);
					segment.scaleX=-1;
				}
				//父级角度
				var parentAngle:Number=parentMC.rotation;
				segmentAngle=angleTo180(segmentAngle+parentAngle);
				segment.rotation=segmentAngle-skew;
				//保存父级的碰撞方向
				if (parentCollisionDirection!=null)
				{
					parentLeftCollision=parentCollisionDirection.left;
					parentRightCollision=parentCollisionDirection.right;
					parentTopCollision=parentCollisionDirection.top;
					parentBottomCollision=parentCollisionDirection.bottom;
				}
			}
			//平台的半径
			var plat_Halfwidth:Number;
			var plat_Halfheight:Number;
			//平台旋转角度
			var angle:Number=0;
			//遍历平台数组
			for (var i in plats)
			{
				var plat:MovieClip=plats[i];
				//保存旋转前的关节数据
				var oldSegment_X:Number=segment.x;
				var oldSegment_Y:Number=segment.y;
				//检查该平台是否有旋转角度
				if (plat.rotation!=0)
				{
					//获取平台旋转角度
					angle=plat.rotation;
					//获取平台旋转前的半径
					plat.rotation=0;
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
					plat.rotation=angle;
					var sin:Number=Math.sin(angleToRadian(angle));
					var cos:Number=Math.cos(angleToRadian(angle));
					//关节与平台的相对距离
					var disx:Number=segment.x-plat.x;
					var disy:Number=segment.y-plat.y;
					//旋转关节后的新位置
					point=rotate(disx,disy,sin,cos,true);
					segment.x=point.x+plat.x;
					segment.y=point.y+plat.y;
					//关节随平台旋转
					segmentAngle=angleTo180(segmentAngle-angle);
					segment.rotation=segmentAngle-skew;
				}
				else
				{
					plat_Halfwidth=plat.width/2;
					plat_Halfheight=plat.height/2;
				}
				//获取关节矩形
				var rectangle:Rectangle=segment.getBounds(segment.parent);
				var rectangle_Halfwidth:Number=rectangle.width/2;
				var rectangle_Halfheight:Number=rectangle.height/2;
				var rectangle_X:Number=rectangle.x+rectangle_Halfwidth;
				var rectangle_Y:Number=rectangle.y+rectangle_Halfheight;
				//计算X轴方向距离
				var dx:Number=rectangle_X-plat.x;
				var ox:Number=rectangle_Halfwidth+plat_Halfwidth-Math.abs(dx);
				if (ox>0)
				{
					//判断Y轴方向的重叠
					var dy:Number=rectangle_Y-(plat.y-plat_Halfheight);
					var oy:Number=rectangle_Halfheight+plat_Halfheight-Math.abs(dy);
					if (oy>0)
					{
						//发生碰撞
						isOnCollision=true;
						//碰撞点变量
						var CollisionPoint:Point=new Point();
						//关节坐标到碰撞点的距离
						var dis:Number;
						//关节弧度变量
						var radian:Number=angleToRadian(angleTo90(segmentAngle));
						var angle1:Number=0,angle2:Number=0,angle3:Number=0;
						//判断碰撞方向
						if (ox<oy)
						{
							//水平方向碰撞
							//若关节不是垂直或水平,将关节垂直
							if (segmentAngle!=90&&segmentAngle!=-90&&segmentAngle!=180&&segmentAngle!=-180&&segmentAngle!=0)
							{
								if (segmentAngle>0&&segmentAngle<180)
								{
									segment.rotation=90-skew;
								}
								else
								{
									segment.rotation=-90-skew;
								}
								//重定关节矩形
								rectangle=segment.getBounds(segment.parent);
								rectangle_Halfwidth=rectangle.width/2;
								rectangle_X=rectangle.x+rectangle_Halfwidth;
								//重算ox
								dx=rectangle_X-plat.x;
								ox=rectangle_Halfwidth+plat_Halfwidth-Math.abs(dx);
								//再次确认碰撞
								if (ox>0)
								{
									//应用角度
									segmentAngle=angleTo180(segment.rotation+skew);
								}
								else
								{
									//如果没有碰撞,则开始旋转关节
									//还原关节角度,重定关节矩形
									segment.rotation=segmentAngle-skew;
									rectangle=segment.getBounds(segment.parent);
									rectangle_X=rectangle.x+rectangle_Halfwidth;
									//重算dx
									dx=rectangle_X-plat.x;
									//确认发生角度碰撞
									if (dx>0)
									{
										//左侧碰撞
										//计算碰撞点
										CollisionPoint.x=rectangle.left;
										if (radian<0)
										{
											CollisionPoint.y=rectangle.bottom-Math.cos(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.x+plat_Halfwidth-segment.x)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2-90+angle1;
										}
										else
										{
											CollisionPoint.y=rectangle.top+Math.cos(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.x+plat_Halfwidth-segment.x)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2+90-angle1;
										}
									}
									else
									{
										//右侧碰撞
										//计算碰撞点
										CollisionPoint.x=rectangle.right;
										if (radian>0)
										{
											CollisionPoint.y=rectangle.bottom-Math.cos(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.x-plat_Halfwidth-segment.x)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2-90+angle1;
										}
										else
										{
											CollisionPoint.y=rectangle.top+Math.cos(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.x-plat_Halfwidth-segment.x)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2+90-angle1;
										}
									}
									segmentAngle=angleTo180(segmentAngle-angle3);
								}
							}
						}
						else
						{
							//垂直方向碰撞
							//若关节不是垂直或水平,将关节放平
							if (segmentAngle!=90&&segmentAngle!=-90&&segmentAngle!=180&&segmentAngle!=-180&&segmentAngle!=0)
							{
								if (segmentAngle>-90&&segmentAngle<90)
								{
									segment.rotation=-skew;
								}
								else
								{
									segment.rotation=180-skew;
								}
								//重定关节矩形
								rectangle=segment.getBounds(segment.parent);
								rectangle_Halfheight=rectangle.height/2;
								rectangle_Y=rectangle.y+rectangle_Halfheight;
								//重算oy
								dy=rectangle_Y-(plat.y-plat_Halfheight);
								oy=rectangle_Halfheight+plat_Halfheight-Math.abs(dy);
								//再次确认碰撞
								if (oy>0)
								{
									//应用角度
									segmentAngle=angleTo180(segment.rotation+skew);
								}
								else
								{
									//如果没有碰撞,则开始旋转关节
									//还原关节角度,重定关节矩形
									segment.rotation=segmentAngle-skew;
									rectangle=segment.getBounds(segment.parent);
									rectangle_Y=rectangle.y+rectangle_Halfheight;
									//重算dy
									dy=rectangle_Y-(plat.y-plat_Halfheight);
									//确认发生角度碰撞
									if (dy>0)
									{
										//顶部碰撞
										//计算碰撞点
										CollisionPoint.y=rectangle.top;
										if (radian<0)
										{
											CollisionPoint.x=rectangle.right+Math.sin(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.y-segment.y)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2-angle1;
										}
										else
										{
											CollisionPoint.x=rectangle.left+Math.sin(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.y-segment.y)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2+180+angle1;
										}
									}
									else
									{
										//底部碰撞
										//计算碰撞点
										CollisionPoint.y=rectangle.bottom;
										if (radian>0)
										{
											CollisionPoint.x=rectangle.right-Math.sin(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.y-plat_Halfheight*2-segment.y)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2-angle1;
										}
										else
										{
											CollisionPoint.x=rectangle.left-Math.sin(radian)*segment_Height;
											//计算旋转后弧度
											dis=Point.distance(new Point(segment.x,segment.y),CollisionPoint);
											angle1=radianToAngle(Math.asin(Math.max(-1,Math.min(1,(plat.y-plat_Halfheight*2-segment.y)/dis))));
											//计算现在弧度
											angle2=radianToAngle(Math.atan2(CollisionPoint.y-segment.y,CollisionPoint.x-segment.x));
											//换算角度
											angle3=angle2-180+angle1;
										}
									}
									segmentAngle=angleTo180(segmentAngle-angle3);
								}
							}
						}
					}
				}
				if (angle!=0)
				{
					//关节旋转回去
					segmentAngle=angleTo180(segmentAngle+angle);
					segment.rotation=segmentAngle-skew;
					angle=0;
				}
				//还原关节坐标
				segment.x=oldSegment_X;
				segment.y=oldSegment_Y;
				//更新关节角度
				segment.rotation=segmentAngle-skew;
				if (isOnCollision)
				{
					break;
				}
			}
			//若关节有过碰撞,则再次进行精确定位
			if (isOnCollision)
			{
				isOnCollision=false;
				//记录重复碰撞数据
				var leftAngle,rightAngle,topAngle,bottomAngle:Number;
				var leftPlat,rightPlat,topPlat,bottomPlat:Object;
				for (i=0;i<plats.length;i++)
				{
					plat=plats[i];
					//检查该平台是否有旋转角度
					if (plat.rotation!=0)
					{
						//获取平台旋转角度
						angle=plat.rotation;
						//获取平台旋转前的半径
						plat.rotation=0;
						plat_Halfwidth=plat.width/2;
						plat_Halfheight=plat.height/2;
						plat.rotation=angle;
						sin=Math.sin(angleToRadian(angle));
						cos=Math.cos(angleToRadian(angle));
						var tan:Number=Math.tan(angleToRadian(angle));
						//保存旋转前的关节数据
						oldSegment_X=segment.x;
						oldSegment_Y=segment.y;
						//关节与平台的相对距离
						disx=segment.x-plat.x;
						disy=segment.y-plat.y;
						//旋转关节后的新位置
						point=rotate(disx,disy,sin,cos,true);
						segment.x=point.x+plat.x;
						segment.y=point.y+plat.y;
						//关节随平台旋转
						segmentAngle=angleTo180(segmentAngle-angle);
						segment.rotation=segmentAngle-skew;
					}
					else
					{
						plat_Halfwidth=plat.width/2;
						plat_Halfheight=plat.height/2;
					}
					//重定关节矩形
					rectangle=segment.getBounds(segment.parent);
					rectangle_Halfwidth=rectangle.width/2;
					rectangle_Halfheight=rectangle.height/2;
					rectangle_X=rectangle.x+rectangle_Halfwidth;
					rectangle_Y=rectangle.y+rectangle_Halfheight;
					//计算X轴方向距离
					dx=rectangle_X-plat.x;
					ox=rectangle_Halfwidth+plat_Halfwidth-Math.abs(dx);
					if (ox>1)
					{
						//判断Y轴方向的重叠
						dy=rectangle_Y-(plat.y-plat_Halfheight);
						oy=rectangle_Halfheight+plat_Halfheight-Math.abs(dy);
						if (oy>1)
						{
							//确认发生碰撞
							collision=true;
							isOnCollision=true;
							//判断碰撞方向
							if (ox<oy)
							{
								//水平方向碰撞
								horizontalCollision=true;
								if ((dx>0&&!parentRightCollision)||(dx<0&&parentLeftCollision))
								{
									//左侧碰撞
									if (dx<0&&parentLeftCollision)
									{
										ox=plat_Halfwidth*2-ox+rectangle_Halfwidth*2;
									}
									leftCollision=true;
									leftAngle=angle;
									leftPlat={h:plat_Halfheight*2,dy:dy,oy:oy};
									if (rightCollision)
									{
										tan=Math.tan(angleToRadian(leftAngle-rightAngle));
										if (tan==0)
										{
											point=compareOxy(vy,dy,rightPlat.dy,oy,rightPlat.oy,ox,rectangle_Halfheight*2,plat_Halfheight*2,rightPlat.h);
											oy=point.x;
											ox=point.y;
										}
										else
										{
											oy=ox/tan;
										}
									}
									else if (topCollision)
									{
										tan=Math.tan(angleToRadian(leftAngle-topAngle));
										oy=ox*tan;
										oy*=-1;
									}
									else if (bottomCollision)
									{
										tan=Math.tan(angleToRadian(leftAngle-bottomAngle));
										oy=ox*tan;
										oy*=-1;
									}
									else
									{
										oy=0;
									}
								}
								else
								{
									//右侧碰撞
									if (dx>0&&parentRightCollision)
									{
										ox=plat_Halfwidth*2-ox+rectangle_Halfwidth*2;
									}
									rightCollision=true;
									rightAngle=angle;
									rightPlat={h:plat_Halfheight*2,dy:dy,oy:oy};
									ox*=-1;
									if (leftCollision)
									{
										tan=Math.tan(angleToRadian(rightAngle-leftAngle));
										if (tan==0)
										{
											point=compareOxy(vy,dy,leftPlat.dy,oy,leftPlat.oy,ox,rectangle_Halfheight*2,plat_Halfheight*2,leftPlat.h);
											oy=point.x;
											ox=point.y;
										}
										else
										{
											oy=ox/tan;
										}
									}
									else if (topCollision)
									{
										tan=Math.tan(angleToRadian(rightAngle-topAngle));
										oy=ox*tan;
										oy*=-1;
									}
									else if (bottomCollision)
									{
										tan=Math.tan(angleToRadian(rightAngle-bottomAngle));
										oy=ox*tan;
										oy*=-1;
									}
									else
									{
										oy=0;
									}
								}
							}
							else
							{
								//垂直方向碰撞
								verticalCollision=true;
								if ((dy>0&&!parentBottomCollision)||(dy<0&&parentTopCollision))
								{
									//顶部碰撞
									if (dy<0&&parentTopCollision)
									{
										oy=plat_Halfheight*2-oy+rectangle_Halfheight*2;
									}
									topCollision=true;
									topAngle=angle;
									topPlat={w:plat_Halfwidth*2,dx:dx,ox:ox};
									if (bottomCollision)
									{
										tan=Math.tan(angleToRadian(topAngle-bottomAngle));
										if (tan==0)
										{
											point=compareOxy(vx,dx,bottomPlat.dx,ox,bottomPlat.ox,oy,rectangle_Halfwidth*2,plat_Halfwidth*2,bottomPlat.w);
											ox=point.x;
											oy=point.y;
										}
										else
										{
											ox=oy/tan;
											ox*=-1;
										}
									}
									else if (leftCollision)
									{
										tan=Math.tan(angleToRadian(topAngle-leftAngle));
										ox=oy*tan;
									}
									else if (rightCollision)
									{
										tan=Math.tan(angleToRadian(topAngle-rightAngle));
										ox=oy*tan;
									}
									else
									{
										ox=0;
									}
								}
								else
								{
									//底部碰撞
									if (dy>0&&parentBottomCollision)
									{
										oy=plat_Halfheight*2-oy+rectangle_Halfheight*2;
									}
									bottomCollision=true;
									bottomAngle=angle;
									bottomPlat={w:plat_Halfwidth*2,dx:dx,ox:ox};
									oy*=-1;
									if (topCollision)
									{
										tan=Math.tan(angleToRadian(bottomAngle-topAngle));
										if (tan==0)
										{
											point=compareOxy(vx,dx,topPlat.dx,ox,topPlat.ox,oy,rectangle_Halfwidth*2,plat_Halfwidth*2,topPlat.w);
											ox=point.x;
											oy=point.y;
										}
										else
										{
											ox=oy/tan;
											ox*=-1;
										}
									}
									else if (leftCollision)
									{
										tan=Math.tan(angleToRadian(bottomAngle-leftAngle));
										ox=oy*tan;
									}
									else if (rightCollision)
									{
										tan=Math.tan(angleToRadian(bottomAngle-rightAngle));
										ox=oy*tan;
									}
									else
									{
										ox=0;
									}
								}
							}
							//应用距离
							segment.x+=ox;
							segment.y+=oy;
						}
					}
					if (angle!=0)
					{
						//关节旋转回去
						segmentAngle=angleTo180(segmentAngle+angle);
						segment.rotation=segmentAngle-skew;
						angle=0;
						if (isOnCollision)
						{
							//关节与平台的相对距离
							disx=segment.x-plat.x;
							disy=segment.y-plat.y;
							//将关节坐标旋转回去
							point=rotate(disx,disy,sin,cos,false);
							segment.x=point.x+plat.x;
							segment.y=point.y+plat.y;
							isOnCollision=false;
						}
						else
						{
							segment.x=oldSegment_X;
							segment.y=oldSegment_Y;
						}
					}
				}
			}
			if (collision)
			{
				//更新关节坐标
				if (parentMC!=null)
				{
					point=new Point(segment.x,segment.y);
					//将关节坐标转换回去
					point=parentMC.parent.localToGlobal(point);
					point=parentMC.globalToLocal(point);
					segment.x=point.x;
					segment.y=point.y;
				}
			}
			else
			{
				segment.x=segment_X;
				segment.y=segment_Y;
			}
			//根据父级角度换算角度
			if (parentMC!=null)
			{
				segmentAngle=angleTo180(segmentAngle-parentAngle);
				segment.rotation=segmentAngle-skew;
				//若父级为反向
				if (parentMC.scaleX==-1)
				{
					//将关节反回去
					segment.rotation*=-1
					segment.scaleX=1;
				}
			}
		}
		//返回关节上某点
		static public function getPoint(segment:MovieClip,distance:Number,skew:Number=0):Point
		{
			var radian:Number=(segment.rotation+skew)*Math.PI/180;
			var point:Point=new Point();
			point.x=segment.x+Math.cos(radian)*distance;
			point.y=segment.y+Math.sin(radian)*distance;
			return point;
		}
		//指向坐标
		static public function pointTo(object:MovieClip,X:Number,Y:Number,skew:Number=0):void
		{
			var dx:Number=X-object.x;
			var dy:Number=Y-object.y;
			var angle:Number=Math.atan2(dy,dx);
			object.rotation=angle*180/Math.PI-skew;
		}
		//正向运动
		static public function forwardMovement(segment1:MovieClip,segment2:MovieClip,distance:Number,skew:Number=0):void
		{
			var point:Point=getPoint(segment2,distance,skew);
			segment1.x=point.x;
			segment1.y=point.y;
		}
		//反向运动
		static public function reverseMovement(segment1:MovieClip,segment2:MovieClip,distance:Number,skew:Number=0):void
		{
			var point:Point=getPoint(segment2,distance,skew);
			var w:Number=point.x-segment2.x;
			var h:Number=point.y-segment2.y;
			segment2.x=segment1.x-w;
			segment2.y=segment1.y-h;
		}
		//关节运动
		static public function segmentMovement(segmentA:MovieClip,A_length:Number,A_skew:Number,segmentB:MovieClip,B_length:Number,B_skew:Number,X:Number,Y:Number,clockwise:Boolean):void
		{
			var dx:Number=X-segmentA.x;
			var dy:Number=Y-segmentA.y;
			var dist:Number=Math.sqrt(dx*dx+dy*dy);
			var a:Number=A_length;
			var b:Number=B_length;
			var c:Number=Math.min(dist,a+b);
			var B:Number=Math.acos(Math.max(-1,Math.min(1,((b*b-a*a-c*c)/(-2*a*c)))));
			var C:Number=Math.acos(Math.max(-1,Math.min(1,((c*c-a*a-b*b)/(-2*a*b)))));
			var D:Number=Math.atan2(dy,dx);
			var E:Number=clockwise?D+B:D-B;
			var F:Number=clockwise?E+Math.PI+C:E-Math.PI-C;
			segmentA.rotation=E*180/Math.PI-A_skew;
			segmentB.x=segmentA.x+Math.cos(E)*a;
			segmentB.y=segmentA.y+Math.sin(E)*a;
			segmentB.rotation=F*180/Math.PI-B_skew;
		}
		//关节指向角度(缓动)
		static public function segmentToAngle(object:MovieClip,angle:Number,skew:Number=0):void
		{
			//获取物体角度
			var objectAngle:Number=object.rotation+skew;
			//将物体角度换算成正负180度以内的角
			objectAngle=angleTo180(objectAngle);
			if (objectAngle!=angle)
			{
				//计算角度差
				var poor:Number=angle-objectAngle;
				poor=angleTo180(poor);
				if (Math.abs(poor)<0.1)
				{
					objectAngle=angle;
				}
				else
				{
					objectAngle+=poor/10;
				}
			}
			//应用角度
			object.rotation=objectAngle-skew;
		}
		//限制旋转
		static public function limitRotation(object:MovieClip,skew:Number,minAngle:Number,maxAngle:Number):void
		{
			var angle:Number=object.rotation+skew;
			//将物体角度换算成正负180度以内的角
			angle=angleTo180(angle);
			//将角度限制换算为正负180度以内的角
			minAngle=angleTo180(minAngle);
			maxAngle=angleTo180(maxAngle);
			var a:Number=preciseDecimal(Math.abs(angleTo180(angle-minAngle)),1);
			var b:Number=preciseDecimal(Math.abs(angleTo180(angle-maxAngle)),1);
			//比较角度与哪个值最近
			if (a>b)
			{
				//离最大值近
				if (((angle>=0&&maxAngle>=0||angle<=0&&maxAngle<=0)&&angle>maxAngle)||(angle>=0&&maxAngle<=0&&angle<maxAngle+180)||(angle<=0&&maxAngle>=0&&angle<maxAngle-180))
				{
					//超出最大值
					angle=maxAngle;
				}
			}
			else
			{
				//离最小值近
				if (((angle>=0&&minAngle>=0||angle<=0&&minAngle<=0)&&angle<minAngle)||(angle>=0&&minAngle<=0&&angle>minAngle+180)||(angle<=0&&minAngle>=0&&angle>minAngle-180))
				{
					//超出最小值
					angle=minAngle;
				}
			}
			object.rotation=angle-skew;
		}
		//获取对象的位图数据
		static public function getBitmapData(object:DisplayObject):BitmapData
		{
			var rect:Rectangle=object.getBounds(object.parent);
			var bmpd:BitmapData=new BitmapData(rect.width,rect.height,true,0x01000000);
			var matrix:Matrix=object.transform.matrix;
			matrix.tx=object.x-rect.x;
			matrix.ty=object.y-rect.y;
			bmpd.draw(object,matrix);
			return bmpd;
		}
		//返回点轨迹上与物体碰撞的点(高级碰撞检测)//碰撞物////////检测起始点////////速度,用于确认方向////////起始点的父级/////////////////检测间隔/////////透明是否参与碰撞
		static public function collisionPoint(object:MovieClip,startPoint:Point,vx:Number=0,vy:Number=0,startPointParent:Object=null,n:uint=1,collisonAlpha:Boolean=false):Point
		{
			var rect:Rectangle=object.getBounds(object.parent);
			var bmpd:BitmapData;
			if (object.bmpd==undefined)
			{
				//创建碰撞物体的位图数据
				bmpd=new BitmapData(rect.width,rect.height,true,0x01000000);
				var matrix:Matrix=object.transform.matrix;
				matrix.tx=object.x-rect.x;
				matrix.ty=object.y-rect.y;
				bmpd.draw(object,matrix);
			}
			else
			{
				bmpd=object.bmpd.clone();
			}
			var point:Point=startPoint;
			if (startPointParent!=null)
			{
				//将起始点坐标转换成全局坐标
				point=startPointParent.localToGlobal(point);
			}
			var a:uint=collisonAlpha?0:255;
			//如果速度为零,则只计算该点是否碰撞
			if (vx==0&&vy==0)
			{
				if (startPointParent!=null)
				{
					point=object.parent.globalToLocal(point);
				}
				if(bmpd.hitTest(new Point(rect.x,rect.y),a,point))
				{
					return startPoint;
				}
			}
			//根据速度计算移动的距离
			var distance:Number=Point.distance(new Point(startPoint.x,startPoint.y),new Point(startPoint.x+vx,startPoint.y+vy));
			//换算检测间隔
			distance=distance/n;
			//计算点移动的速率
			var rateX:Number=vx/distance;
			var rateY:Number=vy/distance;
			if (isNaN(rateX)) rateX=0;
			if (isNaN(rateY)) rateY=0;
			//碰撞检测
			for (var i:uint=0; i<distance; i++)
			{
				var localPoint:Point=new Point(point.x+rateX*i,point.y+rateY*i);
				if (startPointParent!=null)
				{
					localPoint=object.parent.globalToLocal(localPoint);
				}
				if(bmpd.hitTest(new Point(rect.x,rect.y),a,localPoint))
				{
					//创建碰撞点
					var collisionPoint:Point=new Point(startPoint.x+rateX*i,startPoint.y+rateY*i);
					break;
				}
			}
			//清楚位图数据
			bmpd.dispose();
			//返回该点
			return collisionPoint;
		}
		//返回子弹轨迹上与物体数组的最近碰撞点(高级碰撞检测)//碰撞物数组//检测起始点////////速度,用于确认方向////////起始点的父级//////////检测间隔/////////透明是否参与碰撞
		static public function arrayCollisionPoint(objects:Array,startPoint:Point,vx:Number=0,vy:Number=0,startPointParent:Object=null,n:uint=1,collisonAlpha:Boolean=false):Object
		{
			var dic:Dictionary=new Dictionary();
			var rec:Dictionary=new Dictionary();
			var collisionObject:Object=new Object();
			for each (var mc:MovieClip in objects)
			{
				var rect:Rectangle=mc.getBounds(mc.parent);
				rec[mc]=rect;
				if (mc.bmpd==undefined)
				{
					//创建碰撞物体的位图数据
					var bmpd:BitmapData=new BitmapData(rect.width,rect.height,true,0x01000000);
					var matrix:Matrix=mc.transform.matrix;
					matrix.tx=mc.x-rect.x;
					matrix.ty=mc.y-rect.y;
					bmpd.draw(mc,matrix);
					dic[mc]=bmpd.clone();
				}
				else
				{
					dic[mc]=mc.bmpd.clone();
				}
			}
			var point:Point=startPoint;
			if (startPointParent!=null)
			{
				//将起始点坐标转换成全局坐标
				point=startPointParent.localToGlobal(point);
			}
			var a:uint=collisonAlpha?0:255;
			//如果速度为零,则只计算该点是否碰撞
			if (vx==0&&vy==0)
			{
				for each (mc in objects)
				{ 
					if (startPointParent!=null)
					{
						point=mc.parent.globalToLocal(point);
					}
					if(dic[mc].hitTest(new Point(rec[mc].x,rec[mc].y),a,point))
					{
						collisionObject.name=mc;
						collisionObject.point=startPoint;
						collisionObject.dist=0;
						return collisionObject;
					}
				}
			}
			//根据速度计算移动的距离
			var distance:Number=Point.distance(new Point(startPoint.x,startPoint.y),new Point(startPoint.x+vx,startPoint.y+vy));
			//换算检测间隔
			distance=distance/n;
			//计算点移动的速率
			var rateX:Number=vx/distance;
			var rateY:Number=vy/distance;
			if (isNaN(rateX)) rateX=0;
			if (isNaN(rateY)) rateY=0;
			//碰撞检测
			for (var i:uint=0; i<distance; i++)
			{
				var globalPoint:Point=new Point(point.x+rateX*i,point.y+rateY*i);
				var localPoint:Point=globalPoint;
				for each (mc in objects)
				{
					if (startPointParent!=null)
					{
						localPoint=mc.parent.globalToLocal(globalPoint);
					}
					if(dic[mc].hitTest(new Point(rec[mc].x,rec[mc].y),a,localPoint))
					{
						collisionObject.name=mc;
						collisionObject.point=new Point(startPoint.x+rateX*i,startPoint.y+rateY*i);
						collisionObject.dist=Point.distance(collisionObject.point,startPoint);
						return collisionObject;
					}
				}
			}
			return null;
		}
		//判断物体集与线的碰撞检测(高级碰撞检测)///(没有点碰撞法效率高)
		static public function collisionLine(objects:Array,startPoint:Point,vx:Number,vy:Number,startPointParent:Object=null,n:uint=1,collisonAlpha:Boolean=false):Boolean
		{
			var collision:Boolean=false;
			if (objects.length==0) return collision;
			//创建线条的位图数据
			if (startPointParent!=null)
			{
				//将起始点坐标转换成碰撞检测物的局部坐标
				startPoint=startPointParent.localToGlobal(startPoint);
				startPoint=objects[0].parent.globalToLocal(startPoint);
			}
			var rect1:Rectangle=new Rectangle(Math.min(startPoint.x,startPoint.x+vx),Math.min(startPoint.y,startPoint.y+vy),Math.max(Math.abs(vx),1),Math.max(Math.abs(vy),1));
			var bmpd1:BitmapData=new BitmapData(rect1.width,rect1.height,true,0);
			//绘制线条
			//根据速度计算线条的长度
			var lineLength:Number=Point.distance(new Point(startPoint.x,startPoint.y),new Point(startPoint.x+vx,startPoint.y+vy));
			//换算检测间隔
			lineLength=lineLength/n;
			//计算X,Y的速率
			var rateX:Number=vx/lineLength;
			var rateY:Number=vy/lineLength;
			var point:Point=new Point();
			point.x=Math.min(0,vx);
			point.y=Math.min(0,vy);
			bmpd1.lock();
			for (var i:uint=0; i<lineLength; i++)
			{
				bmpd1.setPixel32(-point.x+rateX*i,-point.y+rateY*i,0xFFFFFFFF);
			}
			bmpd1.unlock();
			var a:uint=collisonAlpha?0:255;
			//碰撞检测
			for (var j in objects)
			{
				//创建碰撞物体的位图数据
				var object:MovieClip=objects[j];
				var rect2:Rectangle=object.getBounds(object.parent);
				var bmpd2:BitmapData=new BitmapData(rect2.width,rect2.height,true,0x01000000);
				var matrix:Matrix=object.transform.matrix;
				matrix.tx=object.x-rect2.x;
				matrix.ty=object.y-rect2.y;
				bmpd2.draw(object,matrix);
				if(bmpd1.hitTest(new Point(rect1.x,rect1.y),a,bmpd2,new Point(rect2.x,rect2.y),255))
				{
					collision=true;
				}
			}
			//清楚位图数据
			bmpd1.dispose();
			bmpd2.dispose();
			//返回该点
			return collision;
		}
		//判断两个矩形是否相交
		static public function rectIntersects(rect1:Rectangle,rect2:Rectangle):Boolean
		{
			var intersects:Boolean=false;
			var rect1_Halfwidth:Number=Math.abs(rect1.width);
			var rect1_Halfheight:Number=Math.abs(rect1.height);
			var rect2_Halfwidth:Number=Math.abs(rect2.width);
			var rect2_Halfheight:Number=Math.abs(rect2.height);
			var rect1_X:Number=rect1.x+rect1.width/2;
			var rect1_Y:Number=rect1.y+rect1.height/2;
			var rect2_X:Number=rect2.x+rect2.width/2;
			var rect2_Y:Number=rect2.y+rect2.height/2;
			var dx:Number=rect1_X-rect2_X;
			var ox:Number=rect1_Halfwidth+rect2_Halfwidth-Math.abs(dx);
			if (ox>0)
			{
				var dy:Number=rect1_Y-rect2_Y;
				var oy:Number=rect1_Halfheight+rect2_Halfheight-Math.abs(dy);
				if (oy>0)
				{
					intersects=true;
				}
			}
			return intersects
		}
		//比较对象的某个属性大小,返回比较的结果对象,size为真是返回最小对象
		static public function compareObject(property:String,size:Boolean,...objects):Object
		{
			if (objects[0] is Array)
			{
				objects=objects[0];
			}
			objects.sort(function(a:Object,b:Object):int{return a[property]<b[property]?-1:1;});
			return size?objects[0]:objects[objects.length-1];
		}
		//数组随机排序
		static public function randomArray(array:Array):void
		{
			var count:uint=array.length;
			var array2:Array=new Array();
			for (var i:uint=0;i<count;i++)
			{
				var r:uint=Math.random()*array.length;
				array2.push(array[r]);
				array.splice(r,1);
			}
			for (var j:uint=0;j<count;j++)
			{
				r=Math.random()*array2.length;
				array.push(array2[r]);
				array2.splice(r,1);
			}
		}
		//向量随机排序
		static public function randomVector(vector:Vector.<*>):void
		{
			var count:uint=vector.length;
			var vector2:Vector.<*>=new Vector.<*>();
			for (var i:uint=0;i<count;i++)
			{
				var r:uint=Math.random()*vector.length;
				vector2.push(vector[r]);
				vector.splice(r,1);
			}
			for (var j:uint=0;j<count;j++)
			{
				r=Math.random()*vector2.length;
				vector.push(vector2[r]);
				vector2.splice(r,1)
			}
		}
		//克隆对象
		static public function cloneObject(object:Object):Object
		{
			var byteArray:ByteArray=new ByteArray();
			byteArray.writeObject(object);
			byteArray.position=0;
			return byteArray.readObject();
		}
		//返回不在同一级的两点间的距离
		static public function distance(point1:Point,parent1:Object,point2:Point,parent2:Object):Number
		{
			var globalPoint1:Point=parent1.localToGlobal(point1);
			var globalPoint2:Point=parent2.localToGlobal(point2);
			return Point.distance(globalPoint1,globalPoint2);
		}
		//返回点1到点2的XY距离(即速度,如果不在同一层级,则需要输入父级对象)
		static public function distanceXY(startPoint:Point,overPoint:Point,startPointParent:Object=null,overPointParent:Object=null):Point
		{
			startPoint=startPointParent!=null?startPointParent.localToGlobal(startPoint):startPoint;
			overPoint=overPointParent!=null?overPointParent.localToGlobal(overPoint):overPoint;
			return overPoint.subtract(startPoint);
		}
		//旋转
		static public function rotate(dx:Number,dy:Number,sin:Number,cos:Number,reverse:Boolean):Point
		{
			var point:Point=new Point();
			if (reverse)
			{
				point.x=dx*cos+dy*sin;
				point.y=dy*cos-dx*sin;
			}
			else
			{
				point.x=dx*cos-dy*sin;
				point.y=dy*cos+dx*sin;
			}
			return point;
		}
		//将角度换算成正负180度以内的角
		static public function angleTo180(angle:Number):Number
		{
			if (angle>180)
			{
				angle-=360;
			}
			else if (angle<-180)
			{
				angle+=360;
			}
			return angle;
		}
		//将角度换算成正负90度以内的角
		static public function angleTo90(angle:Number):Number
		{
			if (angle>90)
			{
				angle-=180;
			}
			else if (angle<-90)
			{
				angle+=180;
			}
			return angle;
		}
		//精确小数
		static public function preciseDecimal(decimal:Number,point:uint):Number
		{
			var a:uint=1;
			for(var i:uint=0;i<point;i++)
			{
				a*=10;
			}
			return int(decimal*a)/a;
		}
		//角度转换弧度
		static public function angleToRadian(angle:Number):Number
		{
			return angle*Math.PI/180;
		}
		//弧度转换角度
		static public function radianToAngle(radian:Number):Number
		{
			return radian*180/Math.PI;
		}
		//返回最小距离(仅用于碰撞检测)///////自身速度//碰撞物dxy//旧碰撞物dxy//碰撞物oxy//旧碰撞物oxy//碰撞物oyx//自身宽高//碰撞物宽高//旧碰撞物宽高
		static private function compareOxy(V:Number,dxy1:Number,dxy2:Number,oxy1:Number,oxy2:Number,oyx:Number,wh:Number,wh1:Number,wh2:Number):Point
		{
			if (V>0)
			{
				//速度向右时，判定自身来自左边，重算oxy，使得方向相同
				if (dxy1>0)
				{
					oxy1=wh1-oxy1+wh;
				}
				if (dxy2>0)
				{
					oxy2=wh2-oxy2+wh;
				}
			}
			else if(V<0)
			{
				//速度向左时，判定自身来自右边，重算oxy，使得方向相同
				if (dxy1<0)
				{
					oxy1=wh1-oxy1+wh;
				}
				if (dxy2<0)
				{
					oxy2=wh2-oxy2+wh;
				}
			}
			if (oxy1<oxy2)
			{
				oyx=0;
			}
			var oxy:Number=Math.min(oxy1,oxy2);
			if (V>0)
			{
				oxy*=-1;
			}
			else if (V==0)
			{
				if (oxy1>oxy2)
				{
					if (dxy2<0)
					{
						oxy*=-1;
					}
				}
				else
				{
					if (dxy1<0)
					{
						oxy*=-1;
					}
				}
			}
			return new Point(oxy,oyx);
		}
	}
}