inp = document.getElementById('inp');


inp.onmouseenter = function(event){
	inp.style.top = getRandomInRange(1, 700) + 'px';
	inp.style.left = getRandomInRange(1, 900) + 'px';
	console.log(inp.style.left)
}

function getRandomInRange(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
}




