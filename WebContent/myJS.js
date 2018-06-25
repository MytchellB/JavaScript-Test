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