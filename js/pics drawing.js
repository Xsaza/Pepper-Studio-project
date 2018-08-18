'use strict'

$(document).ready(function(){

	var counter = {
		1: true,
		2: true,
		3: true,
		4: true,
		5: true
	};

	function drawPic(key){
		var [x, y, cityName, picName] = getPicInfo();

		$("#map").append("<div class='img-point' id='id_" + key + "'></div>");

		var imgPointId = "#id_" + key;
		$(imgPointId).css("left", x);
		$(imgPointId).css("top", y);

		$(imgPointId).append("<span class='img-popup' id='img-id_" + key + "'><img src='img/cities/" + cityName + "/" + picName + "'></span>");

		var imgId = "#img-id_" + key;
		$(imgId).addClass("show").animate({"opacity": "1"}, 300); 

		setTimeout(()=>{
			$(imgId).animate({"opacity": "0"}, 300);

			setTimeout(()=>{
				$(imgPointId).remove();
			},300);

		}, 3300);

		setTimeout(()=>{counter[key] = true;}, 3700);
	};

	function prepareDraw(){
		for (var key in counter){
			if(counter[key] === true){
				counter[key] = false;
				setTimeout(drawPic, getRandomInInterval(0, 6000), key);
				break;
			};
		};
	};

	setInterval(prepareDraw, 1000);
	
});