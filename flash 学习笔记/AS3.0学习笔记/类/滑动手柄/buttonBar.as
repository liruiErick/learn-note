package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public dynamic class Scroll extends Sprite
	{
		private const DISPLAY_AREA_WIDTH:Number="显示区域的宽度";
		private var _ScrollAreaInitX:Number;
		private var _ScrollAreaLimit:Number;
		
		private var _barMinX:Number;
		private var _barMaxX:Number;
		private var _barDx:Number;
		private var _barLimit:Number;
		private var _barDown:Boolean;
		
		public function Scroll()
		{
			addEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
		}
		private function onAddedToStage(event:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
			addEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			addEventListener(Event.ENTER_FRAME,onEnterframe);
			
			root.addEventListener(MouseEvent.MOUSE_UP,onUp);
			this."向左按钮".addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this."向右按钮".addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this."滑动手柄".addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			
			_ScrollAreaInitX=this."滑动区域".x;
			_ScrollAreaLimit=this."滑动区域".width-DISPLAY_AREA_WIDTH;
			if (_ScrollAreaLimit<0) _ScrollAreaLimit=0;
			
			_barMinX=this."向左按钮".x+this."向左按钮".width;
			_barMaxX=this."向右按钮".x-this."滑动手柄".width;
			_barLimit=_barMaxX-_barMinX;
			
			this."滑动手柄".x=_barMinX;
		}
		private function onRemovedFromStage(event:Event):void
		{
			removeEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			removeEventListener(Event.ENTER_FRAME,onEnterframe);
			root.removeEventListener(MouseEvent.MOUSE_UP,onUp);
			
			this."向左按钮".removeEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this."向右按钮".removeEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this."滑动手柄".removeEventListener(MouseEvent.MOUSE_DOWN,onDown);
		}
		private function onEnterframe(event:Event):void
		{
			if (_barDown)
			{
				this."滑动手柄".x=Math.max(Math.min(mouseX-_barDx,_barMaxX),_barMinX);
			}
			
			
			if (this."滑动区域".width>DISPLAY_AREA_WIDTH)
			{
				this."滑动手柄".visible=true;
				this."滑动区域".x=_ScrollAreaInitX-(this."滑动手柄".x-_barMinX)/_barLimit*_ScrollAreaLimit;
			}
			else
			{
				this."滑动手柄".visible=false;//内容过少则隐藏滑动手柄
				if (!_barDown) this."滑动手柄".x=_barMinX;
			}
			
		}
		private function onDown(event:MouseEvent):void
		{
			
			switch (event.currentTarget)
			{
				case "向左按钮":
					this."滑动手柄".x=Math.max(Math.min(this."滑动手柄".x-_barLimit*0.2,_barMaxX),_barMinX);
					break;
				case "向右按钮":
					this."滑动手柄".x=Math.max(Math.min(this."滑动手柄".x+_barLimit*0.2,_barMaxX),_barMinX);
					break;
				case "滑动手柄":
					_barDx=mouseX-this."滑动手柄".x;
					_barDown=true;
					break;
			}
		}
		private function onUp(event:MouseEvent):void
		{
			_barDown=false;
		}
	}	
}


