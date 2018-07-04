var i;

function findNumberRange(){
	document.getElementById("numberRangeResult").innerHTML = " ";
	var x = document.getElementById("myNumberRange").value.split(" ");
	findingNumberRange(x[0], x[1]);
}

function findingNumberRange(x, y){
	if ( x == y){
		document.getElementById("numberRangeResult").innerHTML += x;
		return x;
	}
	else{
		document.getElementById("numberRangeResult").innerHTML += x + " ";
		x++;
		return findingNumberRange(x, y);
	}
}