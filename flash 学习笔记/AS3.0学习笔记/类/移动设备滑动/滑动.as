package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	public dynamic class 滑动 extends Sprite
	{
		private const AREA_WIDTH:uint=795;
		
		//Sprite target
		private var _spt:Sprite;
		private var _sptTargetX:Number;
		private var _relativeX:Number;
		private var _sptDown:Boolean;
		private var _sptOldX:Number;
		private var _frameDX:Number;
		private var _SwipeVX:Number=0;
		
		public function 滑动()
		{
			addEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
		}
		private function onAddedToStage(event:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
			
			addEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			addEventListener(Event.ENTER_FRAME,onEnterframe);
			
			_spt.addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			stage.addEventListener(MouseEvent.MOUSE_UP,onUp);
			
			
		}
		private function onRemovedFromStage(event:Event):void
		{
			removeEventListener(Event.REMOVED_FROM_STAGE,onRemovedFromStage);
			removeEventListener(Event.ENTER_FRAME,onEnterframe);
			
			_spt.removeEventListener(MouseEvent.MOUSE_DOWN,onDown);
			stage.removeEventListener(MouseEvent.MOUSE_UP,onUp);
			
			_spt=null;
		}
		private function onEnterframe(event:Event):void
		{
			//_spt slow action
			if (_sptDown)
			{
				_spt.x=this.mouseX-_relativeX;
				
				_frameDX=_spt.x-_sptOldX;
				_sptOldX=_spt.x;
			}
			else
			{
				if (_SwipeVX==0)
				{
					var dx:Number=_sptTargetX-_spt.x;
					if (Math.abs(dx)>1)
					{
						_spt.x+=dx*0.5;
					}
					else
					{
						_spt.x=_sptTargetX;
					}
				}
				else
				{
					_SwipeVX*=0.7;
					if (Math.abs(_SwipeVX)<1)
					{
						_SwipeVX=0;
						_sptTargetX=_spt.x;
						_sptMinX=-AREA_WIDTH*Math.floor(_btnCount/5);
					}
					else _spt.x+=_SwipeVX;
				}
			}
			
			_spt.x=Math.max(_sptMinX,Math.min(_sptMaxX,_spt.x));
			if (_sptTargetX<_sptMaxX) "向左按钮".gotoAndStop(1);
			else "向左按钮".gotoAndStop(2);
			if (_sptTargetX>_sptMinX) "向右按钮".gotoAndStop(1);
			else "向右按钮".gotoAndStop(2);
		}
		private function onClick(event:MouseEvent):void
		{
			var btn:MovieClip=MovieClip(event.currentTarget);
			if (btn.currentFrame==1)
			{
				//Add sound effects
				(new Se2()).play();
			}
			//Set the moving target
			if (btn=="向左按钮")
			{
				if (_sptTargetX<_sptMaxX)
				{
					_sptTargetX=-(Math.ceil(Math.abs(_spt.x)/AREA_WIDTH)-1)*AREA_WIDTH;
				}
			}
			else if (btn=="向右按钮")
			{
				if (_sptTargetX>_sptMinX)
				{
					_sptTargetX=-(uint(Math.abs(_spt.x)/AREA_WIDTH)+1)*AREA_WIDTH;
				}
			}
		}
		private function onDown(event:MouseEvent):void
		{
			_sptDown=true;
			_relativeX=this.mouseX-_spt.x;
			var newMinX:Number=-("spt总宽度"-AREA_WIDTH);
			if (_spt.x>=newMinX) _sptMinX=newMinX;
		}
		private function onUp(event:MouseEvent):void
		{
			if (!_sptDown) return;
			_sptDown=false;
			_sptTargetX=_spt.x;
			
			if (Math.abs(_frameDX)>20) _SwipeVX=_frameDX;
			else _sptMinX=-AREA_WIDTH*"页数";
		}
	}

}