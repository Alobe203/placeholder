var player = document.getElementById('main_player');
var game = document.getElementById('game');
var x = 2;
var y = 2;

document.onkeydown = function(event){
	console.log('y '+ y);
	console.log('x '+x);
	console.log(event.key);
	if(event.key == 'ArrowRight' && x < 541) {
		x += 77;
		player.style.left = x +'px';
	}
	else if(event.key == 'ArrowLeft' && x > 2) {
		x -= 77;
		player.style.left = x + 'px';
	}
	else if(event.key == 'ArrowDown' && y < 541) {
		y += 77;
		player.style.top = y +'px';
	}
	else if(event.key == 'ArrowUp' && y > 2) {
		y -= 77;
		player.style.top = y +'px';
	}
	//функция проход через стены в углах
	else if(y == 2 && x == 2 && event.key == 'ArrowUp' || y == 2 && x == 541 && event.key == 'ArrowUp'){
		y = 541;
		player.style.top = y +'px';
	}
	else if(y == 2 && x == 2 && event.key == 'ArrowLeft' || y == 541 && x == 2 && event.key == 'ArrowLeft' ){
		x = 541;
		player.style.left = x +'px';
	}
	else if(y == 2 && x == 541 && event.key == 'ArrowRight' || y == 541 && x == 541 && event.key == 'ArrowRight' ){
		x = 2;
		player.style.left = x +'px';
	}
	else if(y == 541 && x == 541 && event.keyC == 'ArrowDown' || y == 541 && x == 2 && event.key == 'ArrowDown' ){
		y = 2;
		player.style.top = y +'px';
	}
	//функция прохода сквозь стены, где нет углов
	else if(x == 2 && event.key == 'ArrowLeft'){
		x = 541;
		player.style.left = x + 'px';
	}
	else if(y == 2 && event.key == 'ArrowUp'){
		y = 541;
		player.style.top = y + 'px';
	}
	else if(x == 541 && event.key == 'ArrowRight'){
		x = 2;
		player.style.left = x + 'px';
	}
	else if(y == 541 && event.key == 'ArrowDown'){
		y = 2;
		player.style.top = y + 'px';
	}
}