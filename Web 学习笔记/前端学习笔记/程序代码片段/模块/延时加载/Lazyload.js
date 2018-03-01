(function(root, factory) {
	'use strict';

	if (typeof module === 'object' && typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		root.bjj = root.bjj || {};
		root.bjj.Lazyload = factory(root.jQuery);
	}

}(this, function($) {
	'use strict';
	var $window = $(window);

	var defaultOptions = {
		threshold: 0,
		failure_limit: 0,
		event: 'scroll touchmove',
		effect: 'fadeIn',
		container: window,
		src_attribute: 'data-src',
		size_attribute: 'data-size',
		skip_invisible: false,
		prune_detached: false,
		appear: $.noop,
		load: $.noop,
		error: $.noop,
		placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
	};

	function Lazyload(selector, options) {
		var $elements = $(selector);
		var $container;
		var settings = $.extend({}, defaultOptions, options);

		function update() {
			var counter = 0;
			var prune_list = [],
				trigger_list = [];
			var container_box, position;
			var threshold = settings.threshold,
				failure_limit = settings.failure_limit,
				skip_invisible = settings.skip_invisible,
				prune_detached = settings.prune_detached;

			$elements.each(function() {
				if (this.loaded) {
					return prune_list.push(this);
				}

				container_box = container_box || Box($container[0]).pad(threshold);
				var compareElem = this;

				if (!skip_invisible) {
					var $this = $(this);
					if ($this.is(':hidden')) {
						compareElem = $this.closest(':visible')[0]; // 找到离隐藏元素最近的非display:none的父元素
						var $hidden = $this.parentsUntil(compareElem).addBack(), // 获取他们之前可能为display:none的元素
							$elem;

						// 从最外层开始遍历
						for (var i = 0, l = $hidden.length; i < l; i++) {
							$elem = $hidden.eq(i);
							if ($elem.css('display') === 'none') {
								break;
							} else {
								compareElem = $elem[0];
							}
						}
					}
				}

				position = Box(compareElem).compareTo(container_box);

				if (undefined === position && prune_detached && !$.contains(document, this)) {
					prune_list.push(this);
				} else if (0 === position) {
					trigger_list.push(this);
					/* if we found an image we'll load, reset the counter */
					counter = 0;
				} else if (1 === position) {
					return counter++ < failure_limit;
				}
			});

			$elements = $elements.not(prune_list);
			setTimeout(function() {
				$(trigger_list).trigger('appear');
			}, 0);
		}

		function updateAndReattach(event) {
			update();
			if ($elements.length && event) {
				$(event.currentTarget).one(event.type, updateAndReattach);
			}
		}

		/* Cache container as jQuery as object. */
		$container = (settings.container === undefined ||
			settings.container === window) ? $window : $(settings.container);


		/* 为了防止某些设备不支持 scroll 事件，settings.event 可以同时监控多个事件，比如 scroll touchmove */
		var is_container_event = !!settings.event.match(/scroll|touchmove/);
		if (is_container_event) {
			$container.one(settings.event, updateAndReattach);

			/* Check if something appears when window is resized. */
			$window.one('resize', updateAndReattach);

			// 立即刷新一次
			update();
		}

		$elements.each(init);

		function init() {
			var self = this,
				$self = $(self);

			// 检查图片地址是否发生变化
			var data_src = $self.attr(settings.src_attribute),
				data_size = $self.attr(settings.size_attribute);
			if (data_src) { // 当设置了图片地址时
				if (data_src === $self.data('original-image')) { // 当前设置的图片地址已经加载
					return;
				} else { // 当前设置的图片地址没有加载
					self.loaded = false;

					// 如果 src 属性未设置，则使用 placeholder
					if ($self.attr('src') === undefined || $self.attr('src') === '') {
						if ($self.is('img')) {
							$self.attr('src', settings.placeholder);
						}
					}
				}
			} else { // 当没有设置图片地址时
				self.loaded = true;
				$self.data('original-image', data_src);
				if (data_src === '') {
					// 如果data-src为null或者false，则表示清空图片，并重新使用 placeholder
					if ($self.is('img')) {
						$self.attr('src', settings.placeholder);
					} else {
						$self.css('background-image', $self.data('background-image'));
					}
				}
				return;
			}

			/* When appear is triggered load original image. */
			$self.off('appear');
			$self.one('appear', function() {
				if (self.loaded) {
					return;
				}

				settings.appear.call(self, $elements.length, settings);

				$('<img>')
					.one('load error', function(event) {

						if ('error' === event.type) {
							return settings.error.call(self, $elements.length, settings);
						}

						var animated = settings.effect !== 'show' || settings.effect_speed;
						if (animated) {
							$self.hide();
						}

						if ($self.is('img') && !data_size) {
							$self.attr('src', data_src);
						} else {
							$self.data('background-image', $self.css('background-image'));
							$self.css({
								'background-image': 'url(' + data_src + ')',
								'background-position': 'center',
								'background-repeat': 'no-repeat',
								'background-size': data_size || '100% 100%'
							});
						}

						if (animated) {
							$self[settings.effect](settings.effect_speed);
						}

						settings.load.call(self, $elements.length, settings);
					})
					.attr('src', data_src);

				self.loaded = true;
				$self.data('original-image', data_src);
			});

			/* When wanted event is triggered load original image */
			/* by triggering appear.                              */
			if (!is_container_event) {
				$self.off(settings.event); // 防止重复绑定
				$self.one(settings.event, function() {
					$self.trigger('appear');
				});
			}
		}

		/* With IOS5 force loading images when navigating with back button. */
		/* Non optimal workaround. */
		if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
			$window.on('pageshow', function(event) {
				if (event.originalEvent && event.originalEvent.persisted) {
					$elements.each(function() {
						$(this).trigger('appear');
					});
				}
			});
		}

		/* 添加一个刷新方法的接口 */
		this.update = function() {
			if (selector) {
				// 更新jQuery对象包含的元素
				for (var i = $elements.length; i--;) delete $elements[i];
				$elements.length = 0;
				$.merge($elements, $(selector));
				$elements.each(init);

				if (is_container_event) {
					$container.off(settings.event, updateAndReattach);
					$container.one(settings.event, updateAndReattach);

					$window.off('resize', updateAndReattach);
					$window.one('resize', updateAndReattach);
				}
			}

			if (is_container_event) {
				update();
			}
			return this;
		},

		/* 添加一个直接加载全部图片的接口 */
		this.allshow = function() {
			$elements.trigger('appear');
			return this;
		}
	}

	Lazyload.prototype.constructor = Lazyload;

	/* Convenience methods in jQuery namespace.           */
	/* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

	function makeUtility(func) {
		return function(element, settings) {
			var s = settings || {},
				e = Box(element[0] || element),
				c = Box(s.container ? s.container[0] || s.container : window);

			return e.empty || c.empty ? undefined :
				func.call(e, e, s.threshold ? c.pad(s.threshold) : c);
		};
	}

	$.extend({
		belowthefold: makeUtility(function(e, c) {
			return e.top > c.bottom;
		}),
		rightoffold: makeUtility(function(e, c) {
			return e.left > c.right;
		}),
		abovethetop: makeUtility(function(e, c) {
			return e.bottom < c.top;
		}),
		leftofbegin: makeUtility(function(e, c) {
			return e.right < c.left;
		}),
		inviewport: makeUtility(function(e, c) {
			return e.compareTo(c) === 0;
		})
	});

	/* Custom selectors for your convenience.   */
	/* Use as $('img:below-the-fold').something() or */
	/* $('img').filter(':below-the-fold').something() which is faster */

	$.extend($.expr[':'], {
		'below-the-fold': function(a) {
			return $.belowthefold(a);
		},
		'above-the-top': function(a) {
			return $.abovethetop(a);
		},
		'right-of-screen': function(a) {
			return $.rightoffold(a);
		},
		'left-of-screen': function(a) {
			return $.leftofbegin(a);
		},
		'in-viewport': function(a) {
			return $.inviewport(a);
		},
		/* Maintain BC for couple of versions. */
		'above-the-fold': function(a) {
			return !$.belowthefold(a);
		},
		'right-of-fold': function(a) {
			return $.rightoffold(a);
		},
		'left-of-fold': function(a) {
			return !$.rightoffold(a);
		}
	});

	/* Measurement logic. */
	/* Uses getBoundingClientRect() where possible for maximum performance. */
	/* Includes jQuery fallbacks for maximum compatibility. */

	function Box(element) {
		if (!(this instanceof Box)) {
			return new Box(element);
		}

		if (element === window) {
			this.top = Box.gbcr ? 0 : (window.pageYOffset || document.documentElement.scrollTop);
			this.left = Box.gbcr ? 0 : (window.pageXOffset || document.documentElement.scrollLeft);
			this.bottom = this.top + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
			this.right = this.left + (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		} else if (Box.gbcr) {
			var rect = element.getBoundingClientRect();
			this.top = rect.top;
			this.left = rect.left;
			this.bottom = rect.bottom;
			this.right = rect.right;
		} else {
			var $element = $(element);
			// 这里必须要用 !$element.is(':visible') 而不是 $element.is(':hidden')
			// 因为如果元素不在文档中时 $element.is(':hidden') 也返回 false
			if (!$element.is(':visible')) {
				this.top = this.left = this.bottom = this.right = 0;
			} else {
				var offset = $element.offset();
				this.top = offset.top;
				this.left = offset.left;
				this.bottom = this.top + $element.outerHeight();
				this.right = this.left + $element.outerWidth();
			}
		}

		this.empty = 0 === this.top && 0 === this.bottom && 0 === this.left && 0 === this.right;
	}

	Box.gbcr = undefined !== document.documentElement.getBoundingClientRect;

	Box.prototype.pad = function(n) {
		this.top -= n;
		this.left -= n;
		this.bottom += n;
		this.right += n;

		return this;
	};

	Box.prototype.compareTo = function(other) {
		return this.empty || other.empty ? undefined :
			this.bottom < other.top || this.right < other.left ? -1 : /* before */
			this.top > other.bottom || this.left > other.right ? 1 : /* after */
			0; /* intersecting */
	};

	return Lazyload;
}));