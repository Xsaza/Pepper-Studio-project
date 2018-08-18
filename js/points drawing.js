'use strict'

$(document).ready(function(){

	var cities = JSON.parse(citiesData);

	for (var cityName in cities){
		$(map).append("<div class='points hidden' " + "id='" + cityName + "'></div>");
		$("#"+cityName).css("left", cities[cityName].x);
		$("#"+cityName).css("top", cities[cityName].y);
		$("#"+cityName).append("<span class='popups'>" + cityName + "</span>");
	};

	$(".points").hide().removeClass("hidden").show(700);

});