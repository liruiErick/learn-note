/**
 *
 * 内容:
 * - common
 *
 * 作成者:
 * - HR)BaiJunjie
 *
 * 履歴:
 * - 新規作成
 */
package jp.co.benesse.dcha.swf.common
{
	import flash.display.DisplayObject;
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.net.URLRequest;
	
	public class LoadTool
	{
		/**
		 * loadURL()
		 * 
		 * urls:load path,type is Vector.<String> or Vector.<Object> 
		 * 
		 * fun:Executive function when loaded
		 * 
		 * self:The carrier of sending error event
		 * 
		 */
		public static function loadURL(urls:*,fun:Function,self:Object):void
		{
			try
			{
				if (urls is Vector.<String>)
				{
					var n:uint=urls.length;
					if (n==0) return;
					for (var i:uint=0;i<n;i++)
					{
						try
						{
							var url:String=urls[i];
							if (url==null) continue;
							var loader:Loader=new Loader();
							loader.x=i;
							loader.y=-1;
							loader.load(new URLRequest(url));
							loader.contentLoaderInfo.addEventListener(Event.COMPLETE,fun,false,0,true);
							loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,fun,false,0,true);
						}
						catch(err:Error)
						{
							var dchaSwfErrorEvent:DchaSwfErrorEvent=new DchaSwfErrorEvent(err.message,err.errorID);
							dchaSwfErrorEvent.btID=i;
							self.dispatchEvent(dchaSwfErrorEvent);
						}
					}
				}
				else if (urls is Vector.<Object>)
				{
					n=urls.length;
					if (n==0) return;
					for (i=0;i<n;i++)
					{
						try
						{
							if (urls[i]==null) continue;
							var up_url:String=urls[i].up;
							loader=new Loader();
							loader.x=i;
							loader.y=0;
							loader.load(new URLRequest(up_url));
							loader.contentLoaderInfo.addEventListener(Event.COMPLETE,fun,false,0,true);
							loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,fun,false,0,true);
							var down_url:String=urls[i].down;
							loader=new Loader();
							loader.x=i;
							loader.y=1;
							loader.load(new URLRequest(down_url));
							loader.contentLoaderInfo.addEventListener(Event.COMPLETE,fun,false,0,true);
							loader.contentLoaderInfo.addEventListener(IOErrorEvent.IO_ERROR,fun,false,0,true);
						}
						catch(err:Error)
						{
							dchaSwfErrorEvent=new DchaSwfErrorEvent(err.message,err.errorID);
							dchaSwfErrorEvent.btID=i;
							self.dispatchEvent(dchaSwfErrorEvent);
						}
					}
				}
				else
				{
					dchaSwfErrorEvent=new DchaSwfErrorEvent("Incorrect parameter",-1);
					dchaSwfErrorEvent.btID=-1;
					self.dispatchEvent(dchaSwfErrorEvent);
				}
			}
			catch(err:Error)
			{
				dchaSwfErrorEvent=new DchaSwfErrorEvent(err.message,err.errorID);
				dchaSwfErrorEvent.btID=-1;
				self.dispatchEvent(dchaSwfErrorEvent);
			}
			
		}
		/**
		 * readLoad()
		 * 
		 * setTarget:To need to change the movieclip Vector
		 * 
		 * event:The event of executive function when it is loaded
		 * 
		 * fun:Executive function when loaded
		 * 
		 * self:The carrier of sending error event
		 * 
		 */
		public static function readLoadAndSetImage(setTarget:Vector.<MovieClip>,event:Event,fun:Function,self:Object):void
		{
			try
			{
				var loader:Loader=event.target.loader;
				loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,fun,false);
				loader.contentLoaderInfo.removeEventListener(IOErrorEvent.IO_ERROR,fun,false);
				
				if (event.type==Event.COMPLETE)
				{
					
					var index:int=loader.x;
					var displayObject:DisplayObject=DisplayObject(loader.content);
					switch (loader.y)
					{
						case -1:
							setTarget[index].removeChildren();
							setTarget[index].addChild(displayObject);
							break;
						case 0:
							setTarget[index].upImage=displayObject;
							break;
						case 1:
							setTarget[index].downImage=displayObject;
							break;
					}
					setTarget[index].visible=true;
					var dchaSwfCompleteEvent:DchaSwfCompleteEvent=new DchaSwfCompleteEvent();
					dchaSwfCompleteEvent.btID=index;
					self.dispatchEvent(dchaSwfCompleteEvent);
					
					loader.x=loader.y=0;
					loader.unload();
				}
				else if (event.type==IOErrorEvent.IO_ERROR)
				{
					var dchaSwfErrorEvent:DchaSwfErrorEvent=new DchaSwfErrorEvent("PATHERR",-1);
					dchaSwfErrorEvent.btID=-1;
					self.dispatchEvent(dchaSwfErrorEvent);
				}
			}
			catch(err:Error)
			{
				dchaSwfErrorEvent=new DchaSwfErrorEvent(err.message,err.errorID);
				dchaSwfErrorEvent.btID=index;
				self.dispatchEvent(dchaSwfErrorEvent);
			}
		}
	}
}