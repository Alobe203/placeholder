main();
function main(){
	var inp = document.getElementById('inp');
	var first = 'foo@bar.com';
	var second = 'john.doe@gmail.com';
	var x = 0;
	var y = 0;

	one();
	function one(){
		var timer1 = setInterval(function() {
			if(x<=(first.length-1)){
				x++;
				inp.placeholder += first[x-1];
			}
			else {
				clearInterval(timer1);
				var timer2 = setInterval(function() {
					if(first.length!=0){
						first = first.substring(first.length-1, 0);
						inp.placeholder = 'Eg. ' + first;
					}
					else {
						clearInterval(timer2);
						two();
						function two(){
							var timer3 = setInterval(function() {
								if(y<=(second.length-1)){
									y++;
									inp.placeholder += second[y-1];
								}
								else {
									clearInterval(timer3);
									var timer4 = setInterval(function() {
										if(second.length!=0){
											second = second.substring(second.length-1, 0);
											inp.placeholder = 'Eg. ' + second;
										}
										else {
											clearInterval(timer4);
											main();
										}			
									}, 100)
								}
							}, 100);
						}
					}			
				}, 100)
			}
		}, 100);
	}
}



