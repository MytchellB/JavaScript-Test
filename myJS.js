
var myStop;
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var otterPicStatus = 0;

function myFunction() {
	myStop = setInterval( myLooper, 300);	
}

function myLooper() {
	var myVar = document.getElementById("demo").innerHTML;
	var myVar2 = myVar[myVar.length-1] + myVar.substring(0, myVar.length-1);
	document.getElementById("demo").innerHTML = myVar2;
}

function myFunction2() {
	clearInterval(myStop);
}

function myFunction3() {
	document.getElementById("demo2").innerHTML = daylist[day] + hour + ":" + minute + ":" + second;
}

function wordCombinations() {
	document.getElementById("wordCombo").innerHTML = "";
	var word = document.getElementById("myWord").value;
	var i;
	for ( i = 0; i < word.length; i++){
		document.getElementById("wordCombo").innerHTML += word[i] + ", ";
		if ( i < word.length-1){
			document.getElementById("wordCombo").innerHTML += word[i] + word[i+1] + ", ";
		}
	}
	for ( i = 0; i < Math.floor(word.length/2); i++){
		document.getElementById("wordCombo").innerHTML += word[i] + word[word.length-1-i] + ", ";
	}
	document.getElementById("wordCombo").innerHTML += word;
}

function upperCaseLetters() {
	var sentence = document.getElementById("myWord").value;
	if (sentence.indexOf(" ") > -1){
		document.getElementById("wordCombo").innerHTML += sentence.charAt(0).toUpperCase() + sentence.slice(1, sentence.indexOf(" ") +1);
		document.getElementById("myWord").value = sentence.slice(sentence.indexOf(" ")+1);
		upperCaseLetters();
	}
	else{
		document.getElementById("wordCombo").innerHTML += sentence.charAt(0).toUpperCase() + sentence.slice(1);
	}
}

function clearWord() {
	document.getElementById("wordCombo").innerHTML = "";
}

function alphabetizeLetters(){
	var sentence = document.getElementById("myWord").value;
	alert(sentence);
	document.getElementById("wordCombo").innerHTML = sentence.split('').sort().join('');
}

function findLargestWord(){
	var sentence = document.getElementById("myWord").value;
	var words = sentence.split(' ');	
	var i;
	var maxLength = -999;
	var largestWord = "No Word";
	for ( i = 0; i < words.length; i++){
		if ( words[i].length > maxLength){
			maxLength = words[i].length;
			largestWord = words[i];
		}
	}
	document.getElementById("wordCombo").innerHTML = "Largest Word: " + largestWord;
}

function createIdentityMatrix(){
	document.getElementById("identityMatrix").innerHTML = '';
	var nums = document.getElementById("myNum").value.split(" "); // rows[0] by columns[1]
	var i;
	var j;
	for ( i=0; i < nums[0]; i++){
		for( j=0; j < nums[1]; j++){
			if ( i == j ){
				document.getElementById("identityMatrix").innerHTML += "1 ";
			}
			else{
				document.getElementById("identityMatrix").innerHTML += "0 ";
			}
		} 
		document.getElementById("identityMatrix").innerHTML += '<br>';
	}
}

function generateStringId(){
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
	var i;
	var randomString = "";
	for ( i=0; i < document.getElementById("myNum").value; i++){
		randomString += possible[Math.floor(Math.random() * 63)];
	}
	document.getElementById("identityMatrix").innerHTML = randomString;
}

function binarySearch(){
	var searchValue = document.getElementById("mySearch").value;
	var myArray = document.getElementById("myArray").value.split(' ').sort();
	binarySearch2(myArray, searchValue);
}

function binarySearch2(myArray, searchValue){
	var i;
	var mid = Math.floor(myArray.length/2);
	var high;
	var low;
	var foundIt;
	if (searchValue == myArray[mid]){
		foundIt = myArray[mid];
		alert("Found it: " + foundIt);
	}
	else if (myArray.length == 1) {
		alert("Value not found");
	}
	else if ( searchValue > myArray[mid]){
		myArray = myArray.slice(mid+1);
		binarySearch2(myArray, searchValue);
	}
	else{
		myArray = myArray.slice(0, mid);
		binarySearch2(myArray, searchValue);
	}
}

function doubleFunction(secondFunc){
	secondFunc();
}

function secondFunction(){
	alert("Hello");
	document.getElementById("hello").innerHTML = "Hi";
}

function findFactorial(){
	var number = document.getElementById("myFactorialNum").value;
	alert(factorial(number));
}

function factorial(number){
	if( number == 1){
		return 1;
	}
	else{
		return factorial(number-1) * number;
	}
}

function changeOtterPicture(){
	if (otterPicStatus == 0){
		document.getElementById("otterPic").src="pics/otter2.jpg";
		otterPicStatus = 1;
	}
	else{
		otterPicStatus = 0;
		document.getElementById("otterPic").src="pics/otter.jpg";
	}
}
