// iframe 阻断交互事件的解决方法
// <iframe frameborder="no" onload="ifmLoad(this)"></iframe>
// 注意，如果要监听 iframe 内的自定义事件，则必须使用原生 js 派发，使用 jquery.trigger('customevent') 无效

// iframe加载完成回调
function iframeLoad(self) {
	var ifmDoc = self.contentDocument,
		events = 'click mousedown mouseup mousemove touchstart touchmove touchend',
		eventArr = events.split(' ');

	for (var i = 0; evt = eventArr[i++];) {
		ifmDoc.addEventListener(evt, function(e) {
			self.dispatchEvent(e);
		});
	}
}

// 根据上面的原理可以更优雅的实现
/**
 * 创建事件转发器
 * @param  {string} events 需要转发的事件列表
 */
function createRepeater(events) {
	$('iframe').each(function() {
		// 这里为已经加载完成的页面注册转发器
		if (this.contentDocument.readyState === 'complete') {
			registerRepeater(this);
		}
	});

	// 同时监听iframe的load事件，在每次重载后重新注册转发器
	$('iframe').on('load', function () {
		registerRepeater(this);
	});

	function registerRepeater(iframe) {
		$(iframe.contentDocument).on(events, function(e) {
			$(iframe).trigger(e);
		});
	}
}

var events = 'click mousedown mouseup mousemove touchstart touchmove touchend';
createRepeater(events);