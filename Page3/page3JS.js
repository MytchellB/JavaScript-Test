var i;
var myArraySum = 0;

function findNumberRange(){
	document.getElementById("numberRangeResult").innerHTML = " ";
	var x = document.getElementById("myNumberRange").value.split(" ");
	var num = parseInt(x[0]);
	num++;
	findingNumberRange(num, x[1]);
}

function findingNumberRange(x, y){
	if ( x == y-1){
		document.getElementById("numberRangeResult").style.display = "block";
		document.getElementById("numberRangeResult").innerHTML += x;
		return x;
	}
	else{
		document.getElementById("numberRangeResult").innerHTML += x + " ";
		x++;
		return findingNumberRange(x, y);
	}
}

function findArraySum(){
	document.getElementById("sumArrayResult").innerHTML = " ";
	var myArray2 = document.getElementById("mySumArray").value.split(" ");
	var myArray = myArray2.map(Number);
	findingArraySum(myArray);
}

function findingArraySum(myArray){
	if ( myArray.length == 0){
		document.getElementById("sumArrayResult").style.display = "block";
		document.getElementById("sumArrayResult").innerHTML = "Sum of all numbers in Array: " + myArraySum;
		myArraySum = 0;
		return 0;
	}
	else{
		myArraySum += myArray[0];
		myArray.splice(0, 1);
		findingArraySum(myArray);
	}
}