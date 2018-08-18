'use strict'

$(document).ready(function(){
	
	$(".points").on("mouseenter", function(){
		let children = $(this).children();
		$(children).addClass("show").animate({"opacity": "1"}, 200);
	});

	$(".points").on("mouseleave", function(){
		let children = $(this).children();
		$(children).animate({"opacity": "0"}, 200);
		setTimeout(()=>{$(children).removeClass("show")}, 200);
	});

});