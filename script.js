var inp = document.getElementById('inp');
var timer;
var a = 10;
var score = 0;
var scorep = document.getElementById('score');

inp.onmouseenter = function(event){
	inp.style.top = getRandomInRange(1, 500) + 'px';
	inp.style.left = getRandomInRange(1, 800) + 'px';
	score+=1
	scorep.innerHTML = 'score: ' + score;
}

function getRandomInRange(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}


obr()

function obr(){
	document.getElementById('timer').innerHTML = a;
	a--;
	if (a < 0 && score <= 20){
		clearTimeout(timer);
		alert('Вы проиграли');
	}
	else if (a < 0 && score > 20) {
		clearTimeout(timer);
		alert('Вы выйграли\n' + 'Кол-во очков: ' + score);
	}
	else {
		timer = setTimeout(obr, 1000);
	}
}




