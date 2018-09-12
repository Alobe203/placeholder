

if(window.innerWidth<960){
	document.getElementsByClassName('main_menu')[0].style.display = 'none';
	document.getElementById('mini_menu').style.display = 'flex';
}

document.getElementsByClassName('mini_menu_child')[0].onclick = function move_menu(){
	document.getElementsByClassName('move_menu_container')[0].style.left = 0 + 'px';
	document.getElementsByClassName('move_menu_container')[0].onmouseleave = function(){
		document.getElementsByClassName('move_menu_container')[0].style.left = 500 + 'px';
	}
}

alert(window.screen.width);