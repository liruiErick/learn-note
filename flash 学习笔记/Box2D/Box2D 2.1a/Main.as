/**
 * 
 * 想要制作一个像纸上怪物一样酷的基于物理学的flash游戏吗？ 最好的方式就是使用一个叫做Box2D的很好的flash开源类库。
 * 现在有很多关于flash的物理引擎，但是Box2D就属于这些引擎中的战斗机。
 * 很多开发人员选择使用Box2D，并且现在Box2D有许多个语言版本（C++,java,xna,iphone,android),这使得Box2D成为了一款炙手可热的开发引擎。
 * 但是这也意味着，大部分的教程使用的不是AS3.0的编程语言，或者使用的是过时的版本。
 * 本教程使用AS3.0，以及最新的Box2D——2.1a版本。
 * 
 * 在本教程中，将会运用Box2D创建一个由能够进行真实碰撞的对象组成的世界，让你在实践中学习取得经验。
 * 如果你是第一次接触Box2D,你可能会对其以直观的方式将创建一个物体分为几个步骤的方式感到不解。
 * 比如，如果你想创建一个方块状和一个球状图形，并让他们能够发生碰撞。
 * 你可能希望只需要一个Block类和Ball类，通过new就能创建方块状和一个球状图形，并将他们添加到你的Box2dWord.
 * 但是你错了，在Box2D中，如果你想创建一个方块，你需要进行以下几个步骤，现在不用去担忧它是否是没意义的，后面我们将给出案例源码。
 *  1.创建一个Shape(形状)——这是一个对象的几何部分。
 *  2.创建一个Body(刚体)定义——这是Box2D中的一个特殊对象类型，作为创建刚体的参数。
 *  3.告诉World(世界)创建一个body(刚体)——将你创建的body定义传给world(世界),让世界以它作为参数创建一个刚体。
 *    一个刚体在世界中是由多个形状构成的不可分割的对象，这些形状共享同一个质心，即刚体的质心。
 * 
 * Box2D有一个特殊的方式让你创建物体。而且你必须在正确的时间，按正确的顺序进行。它不需要你在了解其内部组织结构上浪费时间。
 * 原因有两方面：其一，它最初是用不同的语言编写的，它遵循这些语言的许多公约。其二，这些步骤使得Box2D的运行很有效率。
 * 要明白，Box2D和其它的Actionscript APIS是不同的。不要去反对它，去用它就行了。因为它对自己的规则非常自信，并且异常强大。
 * 
 * 好了，让我们来写一些代码。我们将要创建一个box2d世界，在里面建两个矩形刚体，并用box2d内置的调试渲染器将其画在屏幕上。
 * 下面是我们将要创建的整个类。现在只需要大致的看一下，后面我们将详细的对其进行讲解。
 * 
 */

package
{
	import flash.display.Sprite;
	import flash.events.Event;
	//导入box2D所有类包
	import Box2D.Dynamics.*
	import Box2D.Collision.*
	import Box2D.Collision.Shapes.*
	import Box2D.Dynamics.Joints.*
	import Box2D.Dynamics.Contacts.*
	import Box2D.Common.Math.*

	public class Main extends Sprite  
	{
		private var world:b2World;//box2D世界
		private var timestep:Number;//同步时间，一般为 1/24，表示1秒24次
		private var iterations:uint;//一次碰撞中的迭代次数
		private var pixelsPerMeter:Number = 30;//box2D中1米代表的像素
		/**
		 * 理解Box2D中的单位
		 * Box2D是根据以米和千克为其计量单位来设计的。这非常的方便，因为物理科学也是以米和千克为计量单位的。这能让Box2D对真实世界的现象进行真实的模拟。
		 * 很明显，我们不能在任何方向都让一米和一像素等价。因此我们需要降低其比例。
		 * 你可以设定你的比例，让一米等于一像素，但是这会让Box2D的运行效率降低，因为在Box2D中，1米和两米间的差异很大，很明显，但是在1像素与2像素间的差异基本上不可见。
		 * 你必须在用户可见的计量单位与Box2D的计量单位间找到一个平衡点。按照惯例，用Box2D的程序员将30个像素设置为1米，这样对Box2D的性能和精确度来说是一个折中的办法。
		 * 因此，当你想放一个对象进入Box2D世界的时候，让你的具体的像素位置除以你的比例。下面是如何将坐标转换的公式：
		 * 	pixels / pixelsPerMeter = box2DMeters;
		 *  box2DMeters * pixelsPerMeter = pixels;
		 * 请记住最后一点。Box2D刚体的注册点在其几何中心。因此，以他们的左上角为特殊点摆放物体，你会看到那些数字都除了2。
		 * 比如：如果你想创建一个100像素的正方形Box2D刚体，并将其坐标设为(0,0),你只会在屏幕上看到这个正方形的一半。
		 * 要想将100x100的方形放置在屏幕的左上方，你需要将其坐标设为(100/2,100/2)。
		 * 
		 */
		public function Main():void
		{
			makeWorld();//制造世界
			makeWalls();//制造墙壁
			makeDebugDraw();//制造模拟测试环境
			
			//接下来，我们在构造函数中添加一个此函数的调用并置于makeDebugDraw()函数调用之后：
			makeABunchOfDynamicBodies();
			
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		private function init(e:Event = null):void
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			//最后，我们需要添加一个事件侦听器来调用update。
			//眼下，我们只调用了一次update,之后我们创建我们所有的东西。所以，我们能看到新的世界的第一个实例。不过，这并不是动画。
			//为了让创建的东西移动，我们需要反复的调用world.Step()。
			//添加下面这行代码：
			addEventListener(Event.ENTER_FRAME, update);
		}
		//要想在舞台看到东西的最后步骤就是运行Box2D世界，并更新debugDraw。我们在update函数中做这些。
		private function update(e:Event = null):void
		{
			//这个简单的函数更新b2world，当他被调用后，每隔很短的一段时间进行一次模拟。
			//注意update(e:event) 有一个可选的事件参数。这是因为update函数将成为你的主游戏循环。它将会通过一个Timer事件每隔30毫秒左右更新一次。
			world.Step(timestep, iterations, iterations);
			world.ClearForces();//然后调用 world.ClearForces() 清除作用力。现在不用担心这行了。在2.1a版本中，它已经变得可有可无了。
			//但是现在你不得不在再次调用Step()前调用ClearForces() 。
			world.DrawDebugData();//最后我们用world.DrawDebugdata()将box2D绘制在屏幕上。
			
			//现在开始去测试你的动画吧。你会看到四个长方形从你的舞台边缘探出。恭喜，到此你已经迈过了Box2D基础的较困难的一部分。
			//然后准备一下，我们将要添加一些东西到Box2D世界：一些实际物理碰撞。
		}
		//第一步：创建world(世界)
		//在Box2D 2.1a版本中，创建世界要比以前的版本简单得多。
		//如果你看过旧版本的例子，你应该知道，创建世界需要进行定义世界的大小等许多零零碎碎的操作。但是现在不用了。
		//现在创建世界非常的直接了当。
		private function makeWorld():void  
		{
			//重力向量
			var gravity:b2Vec2 = new b2Vec2(0.0, 10.0);
			//我们定义了一个重力变量，为向量类型，世界中的所有对象都将被赋予这个重力向量。
			//你可以通过设置向量为(0,-10)来创建反重力，或者设置向量为(0,0)来创建零重力，甚至是将X参数设为一个正数，Y参数设为O来创建不可思议的侧身重力。
			
			//是否休眠
			var doSleep:Boolean = true;
			//决定是否让Box2D停止检测已经停止移动的物体的碰撞。
			//设为True会降低CPU的消耗，但是你需要注意在某些情况下使其为flase.就个人而言，我还没遇到这样的情况。
			
			//构造一个世界对象
			world = new b2World(gravity, doSleep);
			//创建世界！我们设置它的重力参数，是否休眠属性。
			
			world.SetWarmStarting(true);
			//告诉世界，所有的刚体开始的时候都没有休眠。如果你设为flase,新建的刚体将不会立刻受到重力的影响直到你明确的将他们唤醒，或受到外力的作用。
			//对于用Box2d制作像台球类型的游戏，因为其游戏开始的时候所有的球都是静止的，就可以将其设为flase.
			
			timestep = 1.0 / 30.0;//同步时间，表示1秒30次
			//Box2D在指定的时间内处理模拟对象的碰撞检测。timestep(步长)告诉Box2d两次碰撞检测应该间隔多久时间。保持这个数值较小是个好主意。
			
			iterations = 10;//一次碰撞中的迭代次数
			//告诉Box2D在移动前要解决多少次复杂的碰撞。考虑这样一个情形，一次碰撞让一个刚体移进第三个刚体。
			//现在他们发生了碰撞，并将一个刚体反弹回第一个刚体。由于物理模拟的实质，这些碰撞将没有止境。
			//你使用iterations(迭代次数)告诉box2D“好了，已经够近了——向前移动"。
			//如果你将iterations设得小，你的碰撞模拟将会包含更多的错误和奇怪的行为，但是会更快。
			//如果你将其值设得较大，将会更加精确，但是会降低整个程序的性能。除非你遇到问题，不然就将其值都设为10。
			//现在进行下一步——添加对象到我们的世界。
		}
		//第二步：创建墙(边界)
		//现在我们有了一个空的Box2D世界。现在我们将添加一些能发生碰撞的刚体到里面。
		//值得注意的是，Box2D中所有的类都是以”b2“为前缀开始的。
		//这是一个非常有用的方式，通过这个方式，Box2D确保你不会创建和其同名的类。
		//于是你创建一个英雄，英雄有一个身体——你依然可以为他创建一个b2Body,而不用担心覆盖类名。
		private function makeWalls():void
		{
			//注意:我假设一个舞台大小为640 x400
			//这些机构将一排箱子大约一个区域的大小。
			//我们重用形状和身体的定义。
			//Box2D创建一个不同的身体我们每一次呼叫 world.CreateBody(wallBd);
			
			var wall:b2PolygonShape= new b2PolygonShape();//创建新的多边形
			var wallBd:b2BodyDef = new b2BodyDef();//创建body工厂
			var wallB:b2Body;
			//我们声明了我们需要的变量。我们将要创建4座墙，因此我们每次会重用相同的变量。
			//由于这些对象都是不动的，我们没必要为他们创建fixture来定义密度以及其他属性。
			//Box2D创建的默认的fixture对于不动的刚体来说已经非常完美了。
			//我们只需要使用一个BodyDefinition,一个Shape,每次让Box2D创建刚体的时候改变他们的参数就行了。
			//把这当作一个可以重用的有顺序的表单，box2D世界通过它创建实际的刚体。
			//但是每个刚体创建后，已获得参数的刚体和表单间就没有联系了。
			//因此，如果你改变了表单，并将它传递给了Box2D世界，你将获得一个新的顺序表单创建的新的刚体。
			//事实上，你可能会经常提交相同的BodyDefinition，box2D会一遍又一遍的创建一个匹配你BodyDefinition的新的刚体。
			//下面让我们来看看方块的创建。
			
			// Left
			wallBd.position.Set( -95 / pixelsPerMeter, 400 / pixelsPerMeter / 2);
			//这里我们定义了新刚体的位置。它接收X,Y的坐标参数。
			//但是为什么会复杂的除两次？因为box2D以米和千克测量它的世界，而我们的游戏用像素测量它的世界。
			
			wall.SetAsBox(100/pixelsPerMeter, 400/pixelsPerMeter/2);
			//在这里我们调用了SetAsBox()函数。这是创建不需要旋转的盒子的快捷函数。如果要创建需要旋转的盒子，就使用SetAsOrientedBox()。
			
			wallB = world.CreateBody(wallBd); //Box2D为我们处理创建一个新的b2Body。
			//我们让世界以我们的bodyDefinition为规范创建一个刚体。所有对bodyDefinition的改变都会在我们调用world.CreateBody()的时候发生作用。
			//新建的刚体在我们对其添加东西前只是一个放置几何形状的空容器。从这一刻开始，任何对bodyDefinition的改变只会影响后续使用world.CreateBody()创建的刚体。
			
			wallB.CreateFixture2(wall);
			//最后，我们添加方形给我们的刚体。现在，空的刚体包含了一个长方形。
			
			// Right
			wallBd.position.Set((640 + 95) / pixelsPerMeter, 400 / pixelsPerMeter / 2);
			wallB = world.CreateBody(wallBd);
			wallB.CreateFixture2(wall);
			// Top
			wallBd.position.Set(640 / pixelsPerMeter / 2, -95 / pixelsPerMeter);
			wall.SetAsBox(680/pixelsPerMeter/2, 100/pixelsPerMeter);
			wallB = world.CreateBody(wallBd);
			wallB.CreateFixture2(wall);
			// Bottom
			wallBd.position.Set(640 / pixelsPerMeter / 2, (400 + 95) / pixelsPerMeter);
			wallB = world.CreateBody(wallBd);
			wallB.CreateFixture2(wall);
			//接着我们对其它的墙重复这个过程。在这点上，Box2D世界做得很好。不需要其它额外的工作。Box2D通过其内部数据进行模拟，不需要任何舞台上的对象工作。
			//如果你是一个不需要GUI的通过linux命令行进行编程的人，你可以到此结束了，去管理数据库或其它的内容。
			//当然，你是一个flash程序员。这意味着不看到它的运行情况就无法进行编程。好了，让我们来添加视觉元素到舞台，看看我们的世界看起来像个什么吧！
		}
		//使用DebugDraw来呈现在Box2D世界发生了什么
		//使用内置的DebugDraw类是呈现我们创建的Box2D世界的最快的方法。
		//这并不奇特，只是一些矢量线和填充块，但这对于只想看看游戏引擎的效果而不担心游戏美工的我们来说已经很完美了。
		//如何在Box2D中使用你自己的图形和影片剪辑不在本教程的讲述范围内。
		private function makeDebugDraw():void
		{
			//设置DebugDraw
			//要想使用b2DebugDraw 类，我们需要：
			// 1.创建b2DebugDraw类得实例。
			// 2.赋一个空的影片剪辑给它来进行所有的绘画。
			// 3.让世界使用这个b2DebugDraw实例。
			
			var debugDraw:b2DebugDraw = new b2DebugDraw();//创建b2DebugDraw 类得实例。
			var debugSprite:Sprite = new Sprite();
			addChild(debugSprite);//创建一个影片剪辑并添加到舞台。
			debugDraw.SetSprite(debugSprite);
			debugDraw.SetDrawScale(30.0);
			//需要注意的是，SetDrawScale 需要匹配我们的pixelsPerMeter，以至于我们通过debugDraw画出的东西能得到我们预期的状况。
			debugDraw.SetFillAlpha(0.3);
			debugDraw.SetLineThickness(1.0);
			//为影片剪辑设一些属性以控制其显示。
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
			//SetFlags()告诉debugDraw我们需要显示的数据。你想要显示出什么只取决于几何(形状)或关节(joints),或其他属性。这个函数值得一些高级项目的二次运用。
			world.SetDebugDraw(debugDraw);//最后，告诉世界用这个b2DebugDraw 实例来绘制。
		}
		//对于最后一步，我不打算再像前面那样进行极尽详尽的讲解：我们将依次通过几个for循环来添加各种刚体。
		//将会有3个主要类型：方形，圆形，多边形。
		//我们的世界的边界永远不会移动。其实是他们不能移动。但是所有这些新的刚体都会受重力影响坠落，并在途中发生碰撞。
		//产生这样的差异的关键代码行就是：bodyDef.type = b2Body.b2_dynamicBody;
		//在Box2D 2.1a中，刚体拥有3种可选状态。
		//Static（静态刚体）：永远不移动。
		//Dynamic（动态刚体）：当收到力的作用时会发生移动，比洞碰撞，冲力，重力。
		//Kinematic（运动刚体）:和静态刚体相比,就是它可以移动。它也同样不会被环境力所影响。比如说电梯，运动的滚梯，运行的火车等等，按照固定路线运动的物体。
		//如果你将一个刚体设为Dynamic，并将其唤醒，它将会移动，直到到达一个休眠点。下面是用于添加一系列刚体的函数：
		private function makeABunchOfDynamicBodies():void
		{
			var i:int;
			var body:b2Body;
			var fd:b2FixtureDef;
			//添加矩形
			for (i = 0; i < 5; i++)
			{
				var bodyDef:b2BodyDef = new b2BodyDef();
				bodyDef.type = b2Body.b2_dynamicBody;
				var boxDef:b2PolygonShape = new b2PolygonShape();
				fd = new b2FixtureDef();
				fd.shape = boxDef;
				fd.density = 1.0;//Density(密度):在碰撞的等式中我们使用密度*面积=质量，密度如果是0或者null,将会是一个静止的对象。
				//覆盖默认的摩擦力
				fd.friction = 0.3;//Friction(摩擦力):这用来计算两个对象之间的摩擦，你可以在0.0-1.0之间调整它们。
				fd.restitution = 0.1;//Restitution(弹性):这是调整对象弹性程度的属性，你可以在0.0-1.0之间调整它们。
				boxDef.SetAsBox((Math.random() * 5 + 10) / pixelsPerMeter, (Math.random() * 5 + 10) / pixelsPerMeter);
				bodyDef.position.Set((Math.random() * 400 + 120) / pixelsPerMeter, (Math.random() * 150 + 50) / pixelsPerMeter);
				bodyDef.angle = Math.random() * Math.PI;
				body = world.CreateBody(bodyDef);
				body.CreateFixture(fd);
			}
			//添加圆形
			for (i = 0; i < 5; i++)
			{
				var bodyDefC:b2BodyDef = new b2BodyDef();
				bodyDefC.type = b2Body.b2_dynamicBody;
				var circDef:b2CircleShape= new b2CircleShape((Math.random() * 5 + 10) / pixelsPerMeter);
				fd = new b2FixtureDef();
				fd.shape = circDef;
				fd.density = 1.0;
				//覆盖默认的摩擦力
				fd.friction = 0.3;
				fd.restitution = 0.1;
				bodyDefC.position.Set((Math.random() * 400 + 120) / pixelsPerMeter, (Math.random() * 150 + 50) / pixelsPerMeter);
				bodyDefC.angle = Math.random() * Math.PI;
				body = world.CreateBody(bodyDefC);
				body.CreateFixture(fd);
			}
			//添加不规则凸多边形
			for (i = 0; i < 15; i++)
			{
				var bodyDefP:b2BodyDef = new b2BodyDef();
				bodyDefP.type = b2Body.b2_dynamicBody;
				var polyDef:b2PolygonShape = new b2PolygonShape();
				//逐点画一个多边形
				if (Math.random() > 0.66)
				{
					polyDef.SetAsArray([
					new b2Vec2((-10 -Math.random()*10) / pixelsPerMeter, ( 10 +Math.random()*10) / pixelsPerMeter),
					new b2Vec2(( -5 -Math.random()*10) / pixelsPerMeter, (-10 -Math.random()*10) / pixelsPerMeter),
					new b2Vec2((  5 +Math.random()*10) / pixelsPerMeter, (-10 -Math.random()*10) / pixelsPerMeter),
					new b2Vec2(( 10 +Math.random() * 10) / pixelsPerMeter, ( 10 +Math.random() * 10) / pixelsPerMeter)
					]);
				}
				else if (Math.random() > 0.5)
				{
					var array:Array = [];
					array[0] = new b2Vec2(0, (10 +Math.random()*10) / pixelsPerMeter);
					array[2] = new b2Vec2((-5 -Math.random()*10) / pixelsPerMeter, (-10 -Math.random()*10) / pixelsPerMeter);
					array[3] = new b2Vec2(( 5 +Math.random()*10) / pixelsPerMeter, (-10 -Math.random()*10) / pixelsPerMeter);
					array[1] = new b2Vec2((array[0].x + array[2].x), (array[0].y + array[2].y));
					array[1].Multiply(Math.random()/2+0.8);
					array[4] = new b2Vec2((array[3].x + array[0].x), (array[3].y + array[0].y));
					array[4].Multiply(Math.random() / 2 + 0.8);
					polyDef.SetAsArray(array);
				}
				else
				{
					polyDef.SetAsArray([
					new b2Vec2(0, (10 +Math.random()*10) / pixelsPerMeter),
					new b2Vec2((-5 -Math.random()*10) / pixelsPerMeter, (-10 -Math.random()*10) / pixelsPerMeter),
					new b2Vec2(( 5 +Math.random() * 10) / pixelsPerMeter, ( -10 -Math.random() * 10) / pixelsPerMeter)
					]);
				}
				fd = new b2FixtureDef();
				fd.shape = polyDef;
				fd.density = 1.0;
				fd.friction = 0.3;
				fd.restitution = 0.1;
				bodyDefP.position.Set((Math.random() * 400 + 120) / pixelsPerMeter, (Math.random() * 150 + 50) / pixelsPerMeter);
				bodyDefP.angle = Math.random() * Math.PI;
				body = world.CreateBody(bodyDefP);
				body.CreateFixture(fd);
			}
		}
		//现在发布你的影片，你回看到一大堆的图形降落并发生碰撞。
		//这差不多就是我们整个教程中所得出的效果了。这里有一些进一步的操作：
		//添加一个混合了static 和dynamic 状态的图形，产生更有趣的碰撞。
		//Box2d 包里面有很多的不错的例子，这些例子告诉你怎样实现帅得冒泡的效果
	}
}