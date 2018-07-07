var i;

function changeBG(newBG) {
	switch(newBG) {
		case "blackBG":
			document.body.style.backgroundColor="black";
			document.body.style.color="white";
			break;
		case "whiteBG":
			document.body.style.backgroundColor="white";
			document.body.style.color="black";
			break;
		case "blueBG":
			document.body.style.backgroundColor="blue";
			document.body.style.color="white";
			break;
	}
}

function blackBG(){
	document.body.style.backgroundColor="black";
}

function whiteBG(){
	document.body.style.backgroundColor="white";
}

function blueBG(){
	document.body.style.backgroundColor="blue";
}