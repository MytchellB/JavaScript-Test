var i;

function findNumberRange(){
	document.getElementById("numberRangeResult").innerHTML = " ";
	var x = document.getElementById("myNumberRange").value.split(" ");
	var num = parseInt(x[0]);
	num++;
	findingNumberRange(num, x[1]);
}

function findingNumberRange(x, y){
	if ( x == y-1){
		document.getElementById("numberRangeResult").innerHTML += x;
		return x;
	}
	else{
		document.getElementById("numberRangeResult").innerHTML += x + " ";
		x++;
		return findingNumberRange(x, y);
	}
}