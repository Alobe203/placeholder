var test = document.getElementById('test');

var height = 0;
document.getElementById('circle').onwheel = function(event){
	var line = event.deltaY;
	height = height + line/20;
	console.log(height);
	test.style.height = height + 'px';
	if(height > 490){
		height = -10;
	}
	else if(height< -10){
		height = -10;
	}
}