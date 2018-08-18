'use strict'

$(document).ready(function(){

	function getRandomFromArray(array){
		return array[Math.floor(array.length * Math.random())];
	};

	function getRandomInInterval(min, max){
		return Math.round(min + (max - min) * Math.random());
	};

	function createPossibleY(zone){
		switch(zone){
			case 1: 
			possibleY[1] = [5, 6, 7];
			possibleY[2] = [5, 6, 7, 8];
			possibleY[3] = [5, 6, 7, 8];
			possibleY[4] = [6, 7, 8];
			break;

			case 2: 
			possibleY[3] = [3, 4, 5, 6];
			possibleY[4] = [3, 4, 5, 6];
			possibleY[5] = [3, 4, 5, 6];
			possibleY[6] = [4, 5, 6];
			break;

			case 3:
			possibleY[16] = [9, 10, 11, 12];
			possibleY[17] = [9, 10, 11, 12];
			possibleY[18] = [9, 10, 11, 12];
			possibleY[19] = [9, 10, 11, 12];
			possibleY[20] = [9, 10, 11, 12];

		}
	}

	var possibleY = [];
	var x;

	for(var i = 0; i < 21; i++){
		possibleY[i] = [];
	};

	createPossibleY();


	function getPicInfo(){
		var zone = getRandomFromArray([1, 2, 3]);
		var cityName;
		var picName;

		createPossibleY(zone);


		switch (zone) {
			case 1:
			x = getRandomInInterval(1, 4);
			switch(getRandomInInterval(1, 3)){
				case 1: cityName = "armalit"; break;
				case 2: cityName = "burevestnik"; break;
				case 3: cityName = "skbk";
			};
			switch(cityName){
				case "armalit":
				picName = "0" + getRandomInInterval(1, 9) + ".png";
				break;

				case "burevestnik":
				picName = "0" + getRandomInInterval(1, 6) + ".png";
				break;

				case "skbk":
				picName = "0" + getRandomInInterval(1, 6) + ".png";
			};
			break;

			case 2:
			x = getRandomInInterval(3, 6);
			cityName = "askold";
			picName = getRandomInInterval(1, 10) + ".png";
			break;

			case 3:
			x = getRandomInInterval(16, 20);
			cityName = "askold";
			picName = getRandomInInterval(1, 10) + ".png";
		};

		var y = getRandomFromArray(possibleY[x]);

		x = Math.round(-0.4 + x * 4.8 + 4.8*Math.random());
		y = Math.round(-0.7 + y * 7.7 + 7.7*Math.random());

		return [x + "%", y + "%", cityName, picName];

		
	};

	window.getPicInfo = getPicInfo;
	window.getRandomInInterval = getRandomInInterval;


});