function userGo(){
	//Get the users data
	var theName = document.getElementById("yourname").value;
	var theFont = document.getElementById("font").value;
	if(document.getElementById("random").checked){
		var thePosition = "random"; 
	}
	else{
		var thePosition = "sequential";
	}
	//Blend the users data
	blendMe(theName,theFont,thePosition);
}
function blendMe(name,font,position){
	var myCanvas = document.getElementById('output');
	var canvas = myCanvas.getContext("2d");
	canvas.fillStyle = "white";
	canvas.fillRect(0, 0, 320, 120);
	canvas.clearRect(20, 20, 100, 50);
	canvas.fillStyle = "black";
	//name to array of letters
	var splitMe = name.split("");
	var insert = "20px "+font;
	canvas.font = insert;
	if(position === "sequential"){
		//I'm sequential
		var x = 15;
		var y = 15;
		for(var i = 0; i<splitMe.length; i++){
			canvas.fillText(splitMe[i],x+=15,y+=15);

		}
	}
	else{
		//I'm Random
		for(var i = 0; i<splitMe.length; i++){
			console.log(i);
			//canvas.fillText(splitMe[i],x+=15,y+=15);
			x = Math.floor((Math.random()*301))
			y = Math.floor((Math.random()*101))
			canvas.fillText(splitMe[i],x,y);
		}

	}

}