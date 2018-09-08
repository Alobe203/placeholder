var out = document.getElementById('out');
var newTimer = document.getElementById('new');
var timer;
document.getElementById('data').onchange = function obr(){
	data.style.display = 'none';
	if (data.value>=0) {
		out.innerHTML = data.value;
		data.value--
		timer = setTimeout(obr, 1000);
	}
	else{
		clearTimeout(timer);
		newTimer.style.display = 'block';
		out.innerHTML = 'Время вышло :)';
	}
}
newTimer.onclick = function(){
	data.style.display = 'block';
	data.value = '';
	newTimer.style.display = 'none';
	out.innerHTML = 'Введите начало отсчета';
}


