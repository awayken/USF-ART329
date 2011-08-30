/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global $: false, window: false */

(function () {
	"use strict";
	
	window.ART329 = {
		init: function () {
			this.smoothScroll();
		},
		
	// Smooth Scroll
		smoothScroll: function () {
			var scroller = $('html:not(:animated),body:not(:animated)');
			
			$('a[href^=#]')
				.click(function (e) {
					var goto = $(this).attr('href'), goto_el = $(goto), goto_pos = 0;
					
					if (goto_el.length) {
						e.preventDefault();
						
						goto_pos = goto_el.offset().top;
						scroller.animate({ 'scrollTop': String(goto_pos) + 'px' }, 600, 'swing', function () { location.hash = goto; });
					}
				});
		}
	};
	
	$(document).ready(function () {
		window.ART329.init();
	});
}());
