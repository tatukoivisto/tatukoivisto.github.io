function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numberToGuess = getRandomInteger(1, 10);
function compareNumbers(first, second) {
	return (first == second);
}

document.getElementById("button").addEventListener("click", guessTheNumber);
function guessTheNumber() {


	var number = document.getElementById("number").value;
	if (!Number.isInteger(number) && number <= 1 && number >= 10){
		alert("luku ei kelpaa");
	}

	if(compareNumbers(numberToGuess, number)){
		window.alert("arvasit numeron oikein");
	}else{
		window.alert("arvasit numeron väärin");
	}

	numberToGuess = getRandomInteger(1, 10);
}