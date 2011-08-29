/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global $: false, window: false */

(function () {
	"use strict";
	
	window.ART329 = {
		init: function () {
			this.smoothScroll();
		},
		
	// Smooth Scroll action
		smoothScroll: function () {
			var body = $('body');
			
			$('a[href^=#]')
				.click(function (e) {
					var target = $(this).attr('href'), targetel = $(target), targetpos = 0;
					
					if (targetel.length) {
						e.preventDefault();
						
						targetpos = targetel.offset().top;
						body.animate({ 'scrollTop': targetpos + 'px' }, 300);
						location.hash = target;
					}
				});
		}
	};
	
	$(document).ready(function () {
		window.ART329.init();
	});
}());
