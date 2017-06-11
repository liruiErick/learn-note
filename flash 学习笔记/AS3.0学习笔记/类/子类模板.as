package
{
	import flash.display.DisplayObjectContainer;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	
	public class "类名" extends MovieClip
	{
		private var _"私有变量名":"私有变量类型";
		
		public function "类名"()
		{
			//监听添加动作
			addEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
		}
		//被添加时要初始化的事件
		private function onAddedToStage(event:Event):void
		{
			//添加监听
			addEventListener(Event.ENTER_FRAME,onEnterFrame);
			addEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			"触发物体名".addEventListener(MouseEvent.CLICK,onClick);
			stage.addEventListener(KeyboardEvent.DOWN,onKeyDown);
			stage.addEventListener(KeyboardEvent.UP,onKeyUp);
		}
		//被移除时要同时移除的监听
		private function onRemovedFromStage(event:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
			removeEventListener(Event.ENTER_FRAME,onEnterframe);
			removeEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			"触发物体名".removeEventListener(MouseEvent.CLICK,onClick);
			stage.removeEventListener(KeyboardEvent.DOWN,onKeydown);
			stage.removeEventListener(KeyboardEvent.UP,onKeyup);
			//清除所有实例名引用，并停止影片剪辑播放
			removeMC(this);
			function removeMC(mc:Object):void
			{
				if (mc is MovieClip) mc.stop();
				var n:int=mc.numChildren;
				while (n>0)
				{
					var m:Object=mc.removeChildAt(0);
					if (m is DisplayObjectContainer)
					{
						if (m is MovieClip)
						{
							if (mc.hasOwnProperty(m.name)) mc[m.name] = null;
						}
						removeMC(m);
					}
					n--;
				}
			}
		}
		//鼠标事件
		private function onClick(event:MouseEvent):void
		{
			//内容
		}
		//键盘按下事件
		private function onKeydown(event:KeyboardEvent):void
		{
			//内容
		}
		//键盘弹起事件
		private function onKeyup(event:KeyboardEvent):void
		{
			//内容
		}
		//每帧事件
		private function onEnterframe(event:Event):void
		{
			//内容
		}
		//取值
		public function get "获取方法名"():"数据类型"
		{
			//返回变量所包含的值
			return "变量名";
		}
		//赋值
		public function set "设置方法名"("变量状态":"数据类型"):void
		{
			//将储存在变量状态里的值赋给变量
			"变量名"="变量状态";
		}
	}
}