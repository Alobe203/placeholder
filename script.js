var lvl1 = document.getElementById('lvl1');
var lvl2 = document.getElementById('lvl2');
var lvl3 = document.getElementById('lvl3');

lvl1.onchange = function(){
	var inp = document.getElementById('inp');
	var timer;
	var a = 10;
	var score = 0;
	var scorep = document.getElementById('score');

	inp.onmouseenter = function(event){
		inp.style.top = getRandomInRange(1, 300) + 'px';
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
		else if (a < 0 && score >= 20) {
			clearTimeout(timer);
			alert('Вы выйграли\n' + 'Кол-во очков: ' + score);
		}
		else {
			timer = setTimeout(obr, 1000);
		}
	}
}

lvl2.onchange = function(){
	var inp = document.getElementById('inp');
	var timer;
	var a = 10;
	var score = 0;
	var scorep = document.getElementById('score');

	inp.onmouseenter = function(event){
		inp.style.top = getRandomInRange(1, 300) + 'px';
		inp.style.left = getRandomInRange(1, 800) + 'px';
		score+=1
		scorep.innerHTML = 'score: ' + score;
		inp.style.transition = .5 + 's';
		inp.style.width = 120 + 'px';
		inp.style.height = 40 + 'px';
	}

	function getRandomInRange(min, max) {
	  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	obr()

	function obr(){
		document.getElementById('timer').innerHTML = a;
		a--;
		if (a < 0 && score < 20){
			clearTimeout(timer);
			alert('Вы проиграли');
		}
		else if (a < 0 && score >= 20) {
			clearTimeout(timer);
			alert('Вы выйграли\n' + 'Кол-во очков: ' + score);
		}
		else {
			timer = setTimeout(obr, 1000);
		}
	}
}

lvl3.onchange = function(){
	var inp = document.getElementById('inp');
	var timer;
	var a = 8;
	var score = 0;
	var scorep = document.getElementById('score');

	inp.onmouseenter = function(event){
		inp.style.top = getRandomInRange(1, 300) + 'px';
		inp.style.left = getRandomInRange(1, 800) + 'px';
		score+=1
		scorep.innerHTML = 'score: ' + score;
		inp.style.transition = .2 + 's';
		inp.style.width = 110 + 'px';
		inp.style.height = 35 + 'px';
	}

	function getRandomInRange(min, max) {
	  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	obr()

	function obr(){
		document.getElementById('timer').innerHTML = a;
		a--;
		if (a < 0 && score < 20){
			clearTimeout(timer);
			alert('Вы проиграли');
		}
		else if (a < 0 && score >= 20) {
			clearTimeout(timer);
			alert('Вы выйграли\n' + 'Кол-во очков: ' + score);
		}
		else {
			timer = setTimeout(obr, 1000);
		}
	}
}








