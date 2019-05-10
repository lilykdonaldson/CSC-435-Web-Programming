window.onload = function() {
	document.getElementById("start").onclick = startClick;
	
	//document.body.onmousemove = overBody;   // haxor exercise
};

function overBoundary(){
	playing = false;
	document.getElementById("status").innerHTML = "You lose!";
	var bounds = document.querySelectorAll("div.boundary");
	for(var j=0;j<bounds.length;j++){
		bounds[j].classList.add("youlose");
	}
	//event.stopPropagation();
	return true;
}

function startClick(){
	var playing = true;
	var boundaries = document.querySelectorAll("div#maze div.boundary");
	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].onmouseover = overBoundary;
	}
}

function overEnd(){
	var bounds = document.querySelectorAll("div.boundary");
	if(playing){
	for(var j=0;j<bounds.length;j++){
		bounds[j].classList.remove("youlose");
	}
	document.getElementById("status").innerHTML = "You win!";
}

}
//function overBody(){

