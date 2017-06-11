package 
{
	import flash.display.Sprite;
	import flash.net.NetworkInfo;
	import flash.net.NetworkInterface;

	public class NetWorkInfo extends Sprite
	{
		public function NetWorkInfo()
		{
			initView();
		}
		private function initView():void
		{
			//检测所有网络连接
			var interfaces:Vector.<NetworkInterface>=NetworkInfo.networkInfo.findInterfaces();

			for (var i:uint=0; i<interfaces.length; i++)
			{
				trace(interfaces[i].name.toLowerCase(),interfaces[i].active);
				//NetworkInterface.name 返回这个线路的名称
				//name.toLowerCase() 将名称全部转换成小写
				//NetworkInterface.active 返回是否在使用中
				if (interfaces[i].name.toLowerCase()=="wifi"&&interfaces[i].active)
				{
					trace("WiFi启用中");
					break;
				}
				else if (interfaces[i].name.toLowerCase()=="mobile"&&interfaces[i].active)
				{
					trace("移动网络启用中");
					break;
				}
			}
		}

	}
}