var p = document.getElementsByTagName('p')[0];
var inp = document.querySelector('#inp');

document.getElementById('2ich').onclick = function(){
	var n;
	var r = '';
	for(x = 1;Math.floor(inp.value/x)!=1; x=x*2){
		if(Math.floor(inp.value/x)%2==0){
			r = r + '0';
		}
		else {
			r = r + '1';
		}
	}
	r = r.split('');
	r = r.reverse();
	r = r.join('');
	p.innerHTML = Math.floor(inp.value/x) + r;
}
document.getElementById('10ich').onclick = function(){
	var sum;
	var arr = inp.value.split('');
	for(i=0;i<arr.length;i++){
		if(arr[i]>1){
			alert('Вы ввели уже десятичное число')
			return false;
		}
	}
	arr = arr.reverse();
	var sum = 0;
	for(i=0;i<arr.length;i++){
		sum += arr[i]*Math.pow(2, i);
	}
	p.innerHTML = sum;
}
