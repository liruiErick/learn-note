package fontlib
{
	import flash.display.Sprite;
	import flash.text.Font; 
	/**
	 * 内嵌字体
	 */
	public dynamic class FontLib extends Sprite
	{
		//元数据加载方法,适用FLEX
		[Embed(source = 'msyh.ttc',
				fontFamily = 'swollen',
				fontStyle = 'normal',
				fontWeight = 'normal',
				unicodeRange = 'U+0020-U+002F,U+0030-U+0039,U+003A-U+0040,U+0041-U+005A,U+005B-U+0060,U+0061-U+007A,U+007B-U+007E,U+4E00-U+9FA5',
				embedAsCFF='false')]
		public static const yhRegular:Class;
					
		public function FontLib() 
		{
			Font.registerFont(yhRegular);
		}          
	}
}

/*
其他类调用方法
var font:FontLib = new FontLib();
var wen:TextField = new TextField();                        
wen.defaultTextFormat = new TextFormat("swollen", 20, 0xff0000);
wen.embedFonts = true;
*/