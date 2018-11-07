var noPic = document.getElementById("noPic");
var cat = document.getElementById("Cat");
var dog = document.getElementById("Dog");
var pinguin = document.getElementById("Pinguin");
var ott = document.getElementById("Ott");
var panda = document.getElementById("Panda");

document.getElementById("Motiv").onchange = function(){
	loadPic(this.selectedIndex)
  
}

function loadPic(selected){
	noPic.style.display = (selected == 0) ? "block" : "none";
  cat.style.display = (selected == 1) ? "block" : "none";
  dog.style.display = (selected == 2) ? "block" : "none";
  pinguin.style.display = (selected == 3) ? "block" : "none";
  ott.style.display = (selected == 4) ? "block" : "none";
  panda.style.display = (selected == 5) ? "block" : "none";
}