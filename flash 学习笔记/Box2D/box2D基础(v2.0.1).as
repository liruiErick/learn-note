package
{
	import flash.display.MovieClip;
	import Box2D.Dynamics.*;
	import Box2D.Collision.*;
	import Box2D.Collision.Shapes.*;
	import Box2D.Common.Math.*;
	import flash.events.Event;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	/**
	 * date:2009.3.18
	 * BOX2D测试
	 * @author cwin5
	 * 
	 *
	 * 全局的对象的构造函数作了三件事情：
	 * 1、一个在b2AABB类中的实例构建的坐标系统
	 * 2、一个定义重力的向量，这是一个b2Vec2类构建的实例。
	 * 3、一个布尔变量来定义对象是否"沉迷"。（如果你设置为true，对象将会沉迷）。
	 *
	 * 执行Step()函数，每一帧都会更新所有的Body在world中的位置。
	 * 
	 *
	 * 虽然现在的world中是空的，但是你可以往里面添加任何的球体或者盒子，以及你想到的任何形状的东西，我们需要定义一个Body。
	 * 一个body体大概需要做2-4件事情：
	 *
	 * 1、定义一个形状。
	 * 2、一个（x,y）的位置
	 * 下面的定义可选：
	 * 3、角度
	 * 4、一个预制的Sprite对象。
	 * 
	 * 在Box2DFlash的例子中，你可能注意到所有的形状都是简单的。这是因为所有的东西在每一帧都是被线条重绘。
	 * 如果你想在你的游戏或者其他的什么中具有一些有特色的东西，你可以通过综合形状定义Body来制作一个Sprite
	 *
	 * 形状的定义，我们有3种类型的形状定义，他们都是扩展的b2ShapeDef基类。
	 * 
	 * 我们先来说b2BoxDef类，这个具有4个重要的属性：
	 * 1、SetAsBox(设定边框):这是一个向量，本质上说他就是一个形状的中心坐标。
	 * 2、Density(密度):在碰撞的等式中我们使用密度*面积=质量，密度如果是0或者null,将会是一个静止的对象。
	 * 3、Friction(摩擦力):这用来计算两个对象之间的摩擦，你可以在0.0-1.0之间调整它们。
	 * 4、Restitution(弹性):这是调整对象弹性程度的属性，你可以在0.0-1.0之间调整它们。
	 * b2CircleDef类中有一个不同的属性，代替SetAsBox是他的Radius(半径)。
	 * b2PolyDef类具有一个顶点数组（最大是8）来代替SetAsBox和Radius。这些顶点都是b2Vec2类型的对象。
	 * 
	 * AS3/FMS/Flex交流 QQ高级群:26150196
	 *
	 * Blog:http://cwin5.cnblogs.com/
	 */

	public class Main extends MovieClip
	{
		public var m_world:b2World;//世界对象
		public var m_iterations:int = 10;//跌代
		public var m_timeStep:Number = 1.0/24.0;//时间步
		public function Main()
		{
			//创建世界边界
			var worldAABB:b2AABB = new b2AABB();
			worldAABB.lowerBound.Set( -100.0, -100.0);//上限
			worldAABB.upperBound.Set(100.0, 100.0);//下限
			//确定重力
			var gravity:b2Vec2 = new b2Vec2(0.0, 10.0);
			//允许引擎睡眠
			var doSleep:Boolean = true;
			//构建一个世界对象
			m_world = new b2World(worldAABB, gravity, doSleep);//边界,重力,睡眠开关
			//创建变量
			var body:b2Body;
			var bodyDef:b2BodyDef;
			var boxDef:b2PolygonDef;
			var circleDef:b2CircleDef;
			//添加地表
			bodyDef = new b2BodyDef();//物体
			bodyDef.position.Set(10, 12);//位置
			boxDef = new b2PolygonDef();//多边形写义
			boxDef.SetAsBox(30, 3);//设定边框
			boxDef.friction = 0.3;//摩擦力
			boxDef.density = 0;//密度,静态物体需要0密度
			bodyDef.userData = new PhysGround();//用户数据,可为显示对象,或为自己的对象
			bodyDef.userData.width = 30 * 2 * 30;//宽
			bodyDef.userData.height = 30 * 2 * 3;//高
			addChild(bodyDef.userData);//添加至舞台
			body = m_world.CreateBody(bodyDef);//创建刚体
			body.CreateShape(boxDef);//创建图形
			body.SetMassFromShapes();//从图形创建质量
			//添加一些对象
			for (var i:int = 1; i < 10; i++)
			{
				bodyDef = new b2BodyDef();//刚体定义
				bodyDef.position.x = Math.random() * 15 + 5;//位置:X
				bodyDef.position.y = Math.random() * 10;//位置:Y
				//取随机边框参数
				var rX:Number = Math.random() + 0.5;
				var rY:Number = Math.random() + 0.5;
				//盒(方块)
				if (Math.random() < 0.5)
				{
					//取随机数
					boxDef = new b2PolygonDef();//多边形
					boxDef.SetAsBox(rX, rY);//设定边框
					boxDef.density = 1.0;//密度
					boxDef.friction = 0.5;//摩擦力
					boxDef.restitution = 0.2;//弹性
					bodyDef.userData = new PhysBox();//用户数据
					bodyDef.userData.width = rX * 2 * 30; //宽
					bodyDef.userData.height = rY * 2 * 30; //高
					body = m_world.CreateBody(bodyDef);//创建刚体
					body.CreateShape(boxDef);//创建BOX2D里的图形
				}
				else
				{
					//圆
					circleDef = new b2CircleDef();//圆形
					circleDef.radius = rX;//半径
					circleDef.density = 1.0;//密度
					circleDef.friction = 0.5;//摩擦力
					circleDef.restitution = 0.2//弹性
					bodyDef.userData = new PhysCircle();//用户数据
					bodyDef.userData.width = rX * 2 * 30; //宽
					bodyDef.userData.height = rX * 2 * 30; //高
					body = m_world.CreateBody(bodyDef);//创建刚体
					body.CreateShape(circleDef);//创建图形
				}
				body.SetMassFromShapes();//从图形创建质量
				addChild(bodyDef.userData);//添加至舞台
			}
			//添加循环事件
			addEventListener(Event.ENTER_FRAME, Update, false, 0, true);
		}
		public function Update(e:Event):void
		{
			m_world.Step(m_timeStep, m_iterations);//刷新物理世界
			// 通过刚体列表更新Sprite的位置/角度
			for (var bb:b2Body = m_world.m_bodyList; bb; bb = bb.m_next)
			{
				//声明bb = 世界对象的刚体列表;
				//bb(如果为空值, 即null, 0, underfind), 则不运行,
				//bb = bb.m_next(下一个值为它的m_next)
				if (bb.m_userData is Sprite)
				{
					//如果数据是一个sprite
					bb.m_userData.x = bb.GetPosition().x * 30;//设置X
					bb.m_userData.y = bb.GetPosition().y * 30;//设置Y
					bb.m_userData.rotation = bb.GetAngle() * (180/Math.PI); //设置角度
				}
			}
		}
	}
}


说明：Box2D会自动管理各个物体的碰撞，弹跳等物理状态，我们只需要创建各种刚体。创建刚体可以通过b2BodyDef.userData来创建。b2Shape.SetAsBox(width,height)指的是物体的半宽和半高，所以在计算时都要乘以2。由于Box2D本身的限制，运算时要进行长度换算。


创建步骤:

1 创建一个世界(边界,重力,休眠开关)
*********************************************************

//创建世界边界
var worldAABB:b2AABB = new b2AABB();

worldAABB.lowerBound.Set( -100.0, -100.0);//上限

worldAABB.upperBound.Set(100.0, 100.0);//下限

worldAABB 应该永远比物体所在的区域要大,让 worldAABB 更大总比太小要好.如果一个物体到达了 worldAABB 的边界,它就会被冻结并停止模拟.

*********************************************************

//确定重力
var gravity:b2Vec2 = new b2Vec2(0.0, 10.0);

//允许引擎睡眠
var doSleep:Boolean = true;

接下来我们定义重力矢量.是的,你可以使重力朝向侧面(或者你只好转动你的显示器).并且,我们告诉世界(world)当物体停止移动时允许物体休眠.一个休眠中的物体不需要任何模拟.

*********************************************************

//构建一个世界对象
m_world = new b2World(worldAABB, gravity, doSleep);//边界,重力,睡眠开关

那么现在我们有了自己的物理世界,让我们再加些东西进

*********************************************************


2 创建一个地面盒或者物体
*********************************************************

1.使用位置(position),阻尼(damping)等定义一个物体
2.使用世界对象创建物体
3.使用几何结构,摩擦,密度等定义形状
4.在物体上创建形状
5.可选地调整物体的质量以和附加的形状相匹配

*********************************************************

bodyDef = new b2BodyDef();//刚体定义

bodyDef.position.Set(10, 12);//位置

设定位置

*********************************************************

boxDef = new b2PolygonDef();//多边形定义

boxDef.SetAsBox(30, 3);//设定边框

boxDef.friction = 0.3;//摩擦力

boxDef.density = 0;//密度,静态物体需要0密度

设定虚拟属性,密度为0即是静态物体(障碍物)

*********************************************************                        

bodyDef.userData = new PhysGround();//用户数据

bodyDef.userData.width = 30 * 2 * 30;//宽

bodyDef.userData.height = 30 * 2 * 3;//高

addChild(bodyDef.userData);//添加至舞台

创建显示对象

*********************************************************                        

body = m_world.CreateBody(bodyDef);//创建物体                        

body.CreateShape(boxDef);//创建图形

body.SetMassFromShapes();//从图形创建质量

把显示对象写入世界坐标,再把虚拟属性写入显示对象,最后从图形创建质量

*********************************************************
