/**
 * 
 */

var myStop;
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

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