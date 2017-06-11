package 
{
	import flash.display.DisplayObjectContainer;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.events.Event;
	
	public class Player extends Sprite
	{
		private var _mc:MovieClip;
		private var _stopBtn:Boolean;
		private var _mouseDown:Boolean;
		private var _playing:Boolean;
		
		private var _dx:Number;
		private var _totalFrame:Number;
		private var _controlLineLength:Number;
		private var _controlPointMinX:Number;
		private var _controlPointMaxX:Number;
		
		//播放器内部实例名命名规则
		//播放器包含↓
		//播放按钮：play_mc
		//暂停按钮：stop_mc
		//重置按钮：reset_mc
		//控制条：controlStrip
		//控制条包含↓
		//控制点：controlPoint
		//控制线：controlLine
		//当前进度线：progressLine
		public function Player(movie:MovieClip=null)
		{
			mc=movie;
			addEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
		}
		private function onAddedToStage(event:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE,onAddedToStage);
			
			addEventListener(Event.ENTER_FRAME,onEnterframe);
			addEventListener(Event.REMOVED_FROM_STAGE,onRemovedToStage);
			root.addEventListener(MouseEvent.MOUSE_UP,onUp);
			
			_controlLineLength=this.controlStrip.controlLine.width;
			_controlPointMinX=this.controlStrip.controlLine.x;
			_controlPointMaxX=this.controlStrip.controlLine.x+this.controlStrip.controlLine.width;
			this.controlStrip.buttonMode=true;
			this.controlStrip.addEventListener(MouseEvent.CLICK,onClick);
			this.controlStrip.controlPoint.addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			
			this.play_mc.addEventListener(MouseEvent.CLICK,onClick);
			this.reset_mc.addEventListener(MouseEvent.CLICK,onClick);
			_stopBtn=this.hasOwnProperty("stop_mc")
			if (_stopBtn)
			{
				this.stop_mc.addEventListener(MouseEvent.CLICK,onClick);
			}
			
			_playing=false;
			if (_mc!=null) control(_mc,"stop");
		}
		private function onRemovedToStage(event:Event):void
		{
			removeEventListener(Event.ENTER_FRAME,onEnterframe);
			removeEventListener(Event.REMOVED_FROM_STAGE,onRemovedToStage);
			root.removeEventListener(MouseEvent.MOUSE_UP,onUp);
			this.controlStrip.removeEventListener(MouseEvent.CLICK,onClick);
			this.controlStrip.controlPoint.removeEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this.play_mc.removeEventListener(MouseEvent.CLICK,onClick);
			this.reset_mc.removeEventListener(MouseEvent.CLICK,onClick);
			if (_stopBtn)
			{
				this.stop_mc.removeEventListener(MouseEvent.CLICK,onClick);
			}
		}
		private function onEnterframe(event:Event):void
		{
			if (_mc==null) return;
			if (_mouseDown)
			{
				this.controlStrip.controlPoint.x=Math.max(_controlPointMinX,Math.min(_controlPointMaxX,this.controlStrip.mouseX))+this.controlStrip.controlLine.x;
			}
			else
			{
				this.controlStrip.controlPoint.x=_mc.currentFrame/_totalFrame*_controlLineLength+this.controlStrip.controlLine.x;
			}
			this.controlStrip.progressLine.width=this.controlStrip.controlPoint.x-this.controlStrip.controlLine.x;
			//播完停止
			if (_mc.currentFrame==_mc.totalFrames)
			{
				_playing=false;
				control(_mc,"stop");
			}
		}
		private function onClick(event:MouseEvent):void
		{
			if (_mc==null) return;
			var btnName:String=event.currentTarget.name;
			if (btnName=="play_mc")
			{
				if (_playing) return;
				_playing=true;
				control(_mc,"play");
				
				if (_stopBtn&&(this.play_mc is MovieClip)) MovieClip(this.play_mc).gotoAndStop(2);
			}
			else if (btnName=="stop_mc")
			{
				if (! _playing) return;
				_playing=false;
				control(_mc,"stop");
				
				if (_stopBtn&&(this.play_mc is MovieClip)) MovieClip(this.play_mc).gotoAndStop(1);
			}
			else if (btnName=="reset_mc")
			{
				if (! _playing) return;
				_playing=false;
				control(_mc,"reset");
				
				if (_stopBtn&&(this.play_mc is MovieClip)) MovieClip(this.play_mc).gotoAndStop(1);
			}
			else if (btnName=="controlStrip")
			{
				this.controlStrip.controlPoint.x=Math.max(_controlPointMinX,Math.min(_controlPointMaxX,this.controlStrip.mouseX))+this.controlStrip.controlLine.x;
				var targetFrame:uint=(this.controlStrip.controlPoint.x-this.controlStrip.controlLine.x)/_controlLineLength*_totalFrame;
				if (_playing)
				{
					_mc.gotoAndPlay(targetFrame);
					control(_mc,"play");
				}
				else
				{
					_mc.gotoAndStop(targetFrame);
					control(_mc,"stop");
				}
			}
		}
		private function onDown(event:MouseEvent):void
		{
			_mouseDown=true;
		}
		private function onUp(event:MouseEvent):void
		{
			if (!_mouseDown) return;
			_mouseDown=false;
			var targetFrame:uint=this.controlStrip.controlPoint.x/_controlLineLength*_totalFrame;
			if (_playing)
			{
				_mc.gotoAndPlay(targetFrame);
				control(_mc,"play");
			}
			else
			{
				_mc.gotoAndStop(targetFrame);
				control(_mc,"stop");
			}
		}
		private function control(mc:MovieClip,method:String):void
		{
			if (method=="reset")
			{
				mc.gotoAndStop(1);
				method="stop";
			}
			controlMC(mc);
			function controlMC(mc:Object):void
			{
				if (mc is MovieClip) mc[method]();
				var n:int=mc.numChildren;
				for (var i:uint=0;i<n;i++)
				{
					var m:Object=mc.getChildAt(i);
					if (m is DisplayObjectContainer)
					{
						controlMC(m);
					}
				}
			}
		}
		public function set mc(moive:MovieClip):void
		{
			_mc=moive;
			if (_mc==null) return;
			_totalFrame=_mc.totalFrames;
			if (! _playing) control(_mc,"stop");
		}
	}
}