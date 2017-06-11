/**
 * Box2D v2.1a 静态方法
 */

/**
 * API list:
 * 
 * createWorld 创建并返回一个重力为10的Box2D世界
 * createDebug 创建Box2D Debug对象，调试Box2D应用
 * createBox 创建并返回一个矩形的b2Body刚体对象，所有涉及到坐标的参数都是以像素为单位
 * createCircle 创建并返回一个圆形的b2Body刚体对象，所有涉及到坐标的参数都是以像素为单位
 * createWrapWall 在Box2D世界中创建围绕canvas四周的墙体，
 */
package Box2D
{
	import Box2D.Collision.Shapes.b2CircleShape;
	import Box2D.Collision.Shapes.b2PolygonShape;
	import Box2D.Common.Math.b2Vec2;
	import Box2D.Dynamics.b2Body;
	import Box2D.Dynamics.b2BodyDef;
	import Box2D.Dynamics.b2DebugDraw;
	import Box2D.Dynamics.b2FixtureDef;
	import Box2D.Dynamics.b2World;
	
	import flash.display.DisplayObject;
	import flash.display.DisplayObjectContainer;
	import flash.display.Sprite;
	
	public class Box2DTools
	{
		private static const COUNT1:Number=1 / 30;
		private static const COUNT2:Number=180 / Math.PI;
		
		public function Box2DTools() 
		{
			
		}
		/**
		 * 创建并返回一个重力为10的Box2D世界
		 * @return b2World
		 */
		public static function createWorld(h:int=0, v:int=10, sleep:Boolean=true):b2World
		{
			//1.声明重力
			var gravity:b2Vec2 = new b2Vec2(h, v);
			//2.睡着的对象是否模拟
			var doSleep:Boolean = true;
			//3.创建b2World世界
			var world:b2World = new b2World(gravity, doSleep);
			
			return world;
		}
		/**
		 * 创建Box2D Debug对象，调试Box2D应用
		 * @param	world Box2D的世界
		 * @return Sprite
		 */
		public static function createDebug(world:b2World):Sprite
		{
			var debugSprite:Sprite = new Sprite();
			
			var debugDraw:b2DebugDraw = new b2DebugDraw();
			debugDraw.SetSprite(debugSprite);
			debugDraw.SetDrawScale(30.0);
			debugDraw.SetFillAlpha(0.5);
			debugDraw.SetLineThickness(1.0);
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
			
			world.SetDebugDraw(debugDraw);
			
			world.DrawDebugData();
			return debugSprite;
		}
		/**
		 * 创建并返回一个矩形的b2Body刚体对象，所有涉及到坐标的参数都是以像素为单位
		 * @param	world
		 * @param	posX box的x坐标
		 * @param	posY box的y坐标
		 * @param	boxWidth box的宽度
		 * @param	boxHeight box的高度
		 * @param	isStatic box是否静止不动
		 * @param	userData box的外观
		 * @return b2Body
		 */
		public static function createBox(world:b2World, posX:Number, posY:Number, boxWidth:Number, boxHeight:Number, isStatic:Boolean=false, userData:DisplayObject=null, userDataParent:DisplayObjectContainer=null, density:Number = 3, friction:Number = 0.3, restitution:Number = 0.2):b2Body
		{
			//1.创建刚体需求b2BodyDef
			var bodyRequest:b2BodyDef = new b2BodyDef();
			bodyRequest.type = isStatic? b2Body.b2_staticBody:b2Body.b2_dynamicBody;
			bodyRequest.position.Set(posX / 30, posY / 30);//记得米和像素的转换关系
			//userData是Flash元件库中的一个图片
			if (userData != null)
			{
				bodyRequest.userData = userData;
				//设定上衣的尺寸
				bodyRequest.userData.width = boxWidth;
				bodyRequest.userData.height = boxHeight;
				//需手动将上衣添加到舞台上
				userDataParent.addChild(bodyRequest.userData);
			}
			//2.Box2D世界工厂更具需求创建createBody()生产刚体
			var box:b2Body = world.CreateBody(bodyRequest);
			//3.创建形状
			var shapeBox:b2PolygonShape = new b2PolygonShape();
			shapeBox.SetAsBox(boxWidth / 30 * 0.5, boxHeight / 30 * 0.5);
			//4.创建刚体形状需求b2ShapeDef的子类
			var fixtureRequest:b2FixtureDef = new b2FixtureDef();
			fixtureRequest.density = 3;
			fixtureRequest.friction = 0.3;
			fixtureRequest.restitution = 0.2;
			fixtureRequest.shape = shapeBox;
			
			//4.b2Body刚体工厂根据需求createShape生产形状			
			box.CreateFixture(fixtureRequest);
			
			return box;
		}
		/**
		 * 创建并返回一个圆形刚体对象，所有涉及到坐标的参数都是以像素为单位
		 * @param	world
		 * @param	posX
		 * @param	posY
		 * @param	radius
		 * @param	isStatic
		 * @param	userData
		 * @return 返回一个圆形刚体
		 */
		public static function createCircle(world:b2World, posX:Number, posY:Number, radius:Number, isStatic:Boolean = false, userData:DisplayObject=null, userDataParent:DisplayObjectContainer=null, density:Number = 3, friction:Number = 0.3, restitution:Number = 0.2):b2Body
		{
			//1.创建刚体需求b2BodyDef
			var bodyRequest:b2BodyDef = new b2BodyDef();
			bodyRequest.type = isStatic? b2Body.b2_staticBody:b2Body.b2_dynamicBody;
			bodyRequest.position.Set(posX / 30, posY / 30);//记得米和像素的转换关系
			//userData是Flash元件库中的一个图片
			if ( userData != null)
			{
				bodyRequest.userData = userData;
				//设定上衣的尺寸
				bodyRequest.userData.width = radius*2;//像素
				bodyRequest.userData.height = radius*2;//像素
				//需手动将上衣添加到舞台上
				userDataParent.addChild(bodyRequest.userData);
			}
			//2.Box2D世界工厂更具需求创建createBody()生产刚体
			var circle:b2Body = world.CreateBody(bodyRequest);
			//3.创建形状
			var shapeCircle:b2CircleShape = new b2CircleShape();
			shapeCircle.SetRadius(radius / 30);
			//4.创建敢提形状需求b2ShapeDef的子类
			var fixtureRequest:b2FixtureDef = new b2FixtureDef();
			fixtureRequest.density = density;
			fixtureRequest.friction = friction;
			fixtureRequest.restitution = restitution;
			fixtureRequest.shape = shapeCircle;
			
			//4.b2Body刚体工厂根据需求createShape生产形状			
			circle.CreateFixture(fixtureRequest);
			
			return circle;
		}
		/**
		 * 在Box2D世界中创建围绕场景四周的墙体，
		 * @param	world
		 * @param	scene
		 */
		public static function createWrapWall(world:b2World, sceneWidth:Number, sceneHeight:Number, wallThick:Number=20):void
		{
			createBox(world, sceneWidth * 0.5, 0, sceneWidth , wallThick, true);
			createBox(world, sceneWidth * 0.5, sceneHeight, sceneWidth , wallThick, true);
			createBox(world, 0, sceneHeight * 0.5, wallThick, sceneHeight , true);
			createBox(world, sceneWidth, sceneHeight * 0.5, wallThick, sceneHeight , true);
		}
		/**
		 * 刷新Box2D世界中的元素
		 * @param	world
		 * @param	timestep 同步时间，一般为 1/24，表示1秒24次
		 * @param	iterations 一次碰撞中的迭代次数，次数越多碰撞越精确，但是消耗的运算也就越多，默认是10次
		 * @param	iterations box2D中1米代表的像素值，默认是30像素/米
		 */
		public static function updateWorld(world:b2World, timestep:Number=COUNT1, iterations:int=10, pixelsPerMeter:int=30):void 
		{
			world.Step(timestep, iterations, iterations);
			world.ClearForces();
			world.DrawDebugData();
			
			for (var body:b2Body = world.GetBodyList(); body; body=body.GetNext())
			{
				if (body.GetUserData() != null)
				{
					//根据刚体的坐标个角度，更新绑定的userData
					body.GetUserData().x = body.GetPosition().x * pixelsPerMeter;
					body.GetUserData().y = body.GetPosition().y * pixelsPerMeter;
					body.GetUserData().rotation = body.GetAngle() * COUNT2;
				}
			}
		}
	}
}