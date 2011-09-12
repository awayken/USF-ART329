/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */
/*global $: false, window: false */

(function () {
	"use strict";
	
	window.PRESENTATION = {
		slides: [],
		init: function () {
			$("body").addClass("js");
			
			this.getSlides();
			this.makeNavigable();
			this.goToSlide(location.hash.split("#goto_")[1]);
		},
		
	// Get the ids of the slides for reference
		getSlides: function () {
			var that = this;
			
			$("#presentation .slides > *")
				.each(function () {
					that.slides.push($(this).attr("id"));
				});
		},
		
	// Bind every anchor pointing to an id with goToSlide
	// Also, add keyboard shortcuts
		makeNavigable: function () {
			var that = this;
			
			$("a[href^=#]")
				.live("click", function (ev) {
					that.goToSlide($(this).attr("href").split("#")[1], ev);
				});
				
			$("<div />")
				.attr("id", "shortcuts")
				.html(function () {
					var html = "";
					
					html = html + "<div class=\"wrap\">";
					html = html + "<p><strong>Previous Slide:</strong> [Left], [Up], k</p>";
					html = html + "<p><strong>Next Slide:</strong> [Right], [Down], [Spacebar], j</p>";
					html = html + "<p><strong>Refresh:</strong> r</p>";
					html = html + "<p><strong>Show or Hide Shortcuts:</strong> [Period]</p>";
					html = html + "</div>";
					
					return html;
				})
				.appendTo("#presentation");
				
			$(document).keydown(function (ev) {
				var index = $.inArray(location.hash.split("#goto_")[1], that.slides);
				
				switch (ev.keyCode) {
				case 40:
				case 39:
				case 32:
				case 74:
					that.goToSlide(that.slides[(index + 1)], ev);
					break;
				case 38:
				case 37:
				case 75:
					that.goToSlide(that.slides[(index - 1)], ev);
					break;
				case 82:
					location.hash = "goto_slide1";
					window.location.reload();
					break;
				case 190:
					$("#shortcuts").toggleClass("show");
					break;
				}
			});
		},
		
	// Take you to the slide indicated by the id
		goToSlide: function (identification, thisevent) {
			var id = identification || "slide1", ev = thisevent || { preventDefault: function () { } }, index = $.inArray(id, this.slides), slidetop = 0;
	
			if (index > -1) {
				ev.preventDefault();
				
				$(".slides").stop();
				
				$("#" + id)
					.prevAll()
						.each(function () {
							slidetop = slidetop + $(this).outerHeight(true);
						});
				
				$(".slides")
					.animate({
						scrollTop: slidetop
					}, "slow");
					
				$("nav a[href=#" + id + "]")
					.siblings().removeClass("active").end()
					.addClass("active");
				
				location.hash = "goto_" + id;
			}
		}
	};
	
	$(document).ready(function () {
		window.PRESENTATION.init();
	});
}());