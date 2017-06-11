package 
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	//import Box2D.Dynamics.b2Body;
	import Box2D.Dynamics.b2World;
	import Box2D.Dynamics.b2ContactListener;
	import Box2D.Box2DTools;
	
	public class Test extends Sprite
	{
		private var world:b2World;
		
		public function Test()
		{
			world = Box2DTools.createWorld(0,20);
			Box2DTools.createWrapWall(world,stage.stageWidth,stage.stageHeight);
			addChild(Box2DTools.createDebug(world));
			
			stage.addEventListener(MouseEvent.MOUSE_DOWN, onDown);
			addEventListener(Event.ENTER_FRAME, loop);
			
			world.SetContactListener(new ContactListener());//加入碰撞检测监听
		}
		private function loop(e:Event):void 
		{
			Box2DTools.updateWorld(world);
		}
		private function onDown(e:MouseEvent):void 
		{
			Box2DTools.createCircle(world,mouseX,15,30,false,new Ball(),this,3,0.2,1);
		}
	}
}