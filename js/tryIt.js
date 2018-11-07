var noPic = document.getElementById("noPic");
var cat = document.getElementById("Cat");
var dog = document.getElementById("Dog");
var pinguin = document.getElementById("Pinguin");
var ott = document.getElementById("Ott");
var panda = document.getElementById("Panda");

document.getElementById("Motiv").onchange = function(){
	loadPic(this.selectedIndex);
}

document.getElementById("Color").onchange = function(){
	switch(this.selectedIndex){
		case 0:
			changeColor('red');
			break;
		case 1:
			changeColor('green');
			break;
		case 2:
			changeColor('blue');
			break;
		case 3:
			changeColor('black');
			break;
		case 4:
			changeColor('white');
			break;
	}
	
}

function changeColor(color){
	document.getElementById('Color').style.background = color;
	
	document.getElementById('kidNameTwo').style.color = color;
	document.getElementById('kidName').style.color = color;
	document.getElementById('kidName3').style.color = color;
	document.getElementById('kidName4').style.color = color;
	document.getElementById('kidName5').style.color = color;
	document.getElementById('kidName6').style.color = color;
}

function loadPic(selected){
	noPic.style.display = (selected == 0) ? "block" : "none";
    cat.style.display = (selected == 1) ? "block" : "none";
    dog.style.display = (selected == 2) ? "block" : "none";
    pinguin.style.display = (selected == 3) ? "block" : "none";
    ott.style.display = (selected == 4) ? "block" : "none";
    panda.style.display = (selected == 5) ? "block" : "none";
}

function changeSelectedMotiv(selected){
	document.getElementById("select").selectedIndex = selected;
}

function theFunction(e)
{ 
	var clicked = e.target.id;

	document.getElementById('CatMotiv').style.border = "0px solid blue";
	document.getElementById('DogMotiv').style.border = "0px solid blue";
	document.getElementById('PinguinMotiv').style.border = "0px solid blue";
	document.getElementById('OtterMotiv').style.border = "0px solid blue";
	document.getElementById('PandaMotiv').style.border = "0px solid blue";
	document.getElementById('PumiMotiv').style.border = "0px solid blue";
	
	document.getElementById(clicked).style.border = "3px solid #01BAFF";
	switch(clicked) {
    case 'CatMotiv':
        document.getElementById("Motiv").selectedIndex = 1;
		loadPic(1);
        break;
    case 'DogMotiv':
        document.getElementById("Motiv").selectedIndex = 2;
		loadPic(2);
        break;
    case 'PinguinMotiv':
        document.getElementById("Motiv").selectedIndex = 3;
		loadPic(3);
        break;
	case 'OtterMotiv':
        document.getElementById("Motiv").selectedIndex = 4;
		loadPic(4);
        break;
	case 'PandaMotiv':
        document.getElementById("Motiv").selectedIndex = 5;
		loadPic(5);
        break;
	}
}