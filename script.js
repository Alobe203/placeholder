for (var i=0;i<9;i++){
	document.getElementById('game').innerHTML += '<div class="block"></div>'
}


document.getElementById('krest').onchange = function(){
	var hod = 0;
	document.getElementById('yourchoice').style.display = 'none';
	document.getElementById('choice').innerHTML = 'Вы выбрали крестики';
	document.getElementById('game').style.display = 'block';
	document.getElementById('cheihod').innerHTML = 'ходят крестики';

	document.getElementById('game').onclick = function(event){
		console.log(event.target);
		if(event.target.className=='block'){
			if (hod%2==0){
				event.target.innerHTML = 'X';
				document.getElementById('cheihod').innerHTML = 'ходят нолики';
			}
			else {
				document.getElementById('cheihod').innerHTML = 'ходят крестики';
				event.target.innerHTML = '0';
			}
			hod++;
		}
		checkWinner();
	}
}

document.getElementById('nolik').onchange = function(){
	var hod = 1;
	document.getElementById('yourchoice').style.display = 'none';
	document.getElementById('choice').innerHTML = 'Вы выбрали нолики';
	document.getElementById('game').style.display = 'block';
	document.getElementById('cheihod').innerHTML = 'ходят нолики';

	document.getElementById('game').onclick = function(event){
		console.log(event.target);
		if(event.target.className=='block'){
			if (hod%2==0){
				event.target.innerHTML = 'X';
				document.getElementById('cheihod').innerHTML = 'ходят нолики';
			}
			else {
				document.getElementById('cheihod').innerHTML = 'ходят крестики';
				event.target.innerHTML = '0';
			}
			hod++;
		}
		checkWinner();
	}
}


function checkWinner(){
	var allblock = document.getElementsByClassName('block');
	if(allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[0].style.color = 'white';allblock[1].style.color = 'white';allblock[2].style.color = 'white';
	}
	if(allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[3].style.color = 'white';allblock[4].style.color = 'white';allblock[5].style.color = 'white';
	}
	if(allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[6].style.color = 'white';allblock[7].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[0].style.color = 'white';allblock[3].style.color = 'white';allblock[6].style.color = 'white';
	}
	if(allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[1].style.color = 'white';allblock[4].style.color = 'white';allblock[7].style.color = 'white';
	}
	if(allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[2].style.color = 'white';allblock[5].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[0].style.color = 'white';allblock[4].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML=='X'){
		alert('Победили крестики!');
		allblock[2].style.color = 'white';allblock[4].style.color = 'white';allblock[6].style.color = 'white';
	}


	//нолики
	if(allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[0].style.color = 'white';allblock[1].style.color = 'white';allblock[2].style.color = 'white';
	}
	if(allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[3].style.color = 'white';allblock[4].style.color = 'white';allblock[5].style.color = 'white';
	}
	if(allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[6].style.color = 'white';allblock[7].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[0].style.color = 'white';allblock[3].style.color = 'white';allblock[6].style.color = 'white';
	}
	if(allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[1].style.color = 'white';allblock[4].style.color = 'white';allblock[7].style.color = 'white';
	}
	if(allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[2].style.color = 'white';allblock[5].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[0].style.color = 'white';allblock[4].style.color = 'white';allblock[8].style.color = 'white';
	}
	if(allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0'){
		alert('Победили нолики!');
		allblock[2].style.color = 'white';allblock[4].style.color = 'white';allblock[6].style.color = 'white';
	}
}
