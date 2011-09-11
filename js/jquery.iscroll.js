/*
 * Plugin: jQuery iScroll 0.8
 *
 * Create iScroll Objects in jQuery style. Instead of: 
 *     new iScroll('myId') 
 * you can now use :
 *    $('#myId').iScroll();
 * 
 * Plus: a scrollwrapper is created automatically when specifying a width or height
 *
 * Author: Manuel Bieh
 * Author URL: http://www.manuelbieh.com/
 *
 * iScroll Author: Matteo Spinelli
 * iScroll URL: http://www.cubiq.org/iscroll
 *
 */

if(typeof jQuery != 'undefined') {

	jQuery(function($) {

		$.fn.extend({

			iScroll: function(options) {

				var settings = $.extend({}, $.fn.iScroll.defaults, options);
				var that = this;

				if($(this).data('iScroll')) {
					return $(this).data('iScroll');
				}

				this.each(

					function() {

						var	$$	= $(this),
							o	= $.metadata ? $.extend({}, settings, $$.metadata()) : settings,
							scrollWrapper = $$,
							iScroller = {};

						if(o.width || o.height) {

							$$.wrap('<div class="scrollWrapper" />').parent().css({
								width: parseInt(o.width) > 0 ? parseInt(o.width) + 'px' : 'auto',
								height: parseInt(o.height) > 0 ? parseInt(o.height) + 'px' : 'auto'
							});

							scrollWrapper = $$.parent('.scrollWrapper');

						}

						var elementScroller = new iScroll(scrollWrapper[0], o);
						$(this).data('iScroll', elementScroller);

					}

				);

			}

		});
		
		$.fn.iScroll.defaults = {
			vScrollbar: false,
			hScrollbar: false
		};

	});

}
