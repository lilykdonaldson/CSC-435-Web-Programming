var X = '300px'; 
var Y = '300px';
var colors = ["pink","orange","lightBlue"];
var newColor="orange";

window.onload = function()
{
	puzzleArea = document.getElementById('puzzlearea');
	puzzlePieces = puzzleArea.getElementsByTagName('div'); 
	document.getElementById("theBody").style.backgroundColor = "pink";
	createPieces();
	startMe();


function createPieces()
{
	var count = 16;
	for(let i = 1; i < count; i++)
	{
		if(i<=15)
		{
			var new_n = document.createElement('div');
			new_n.id = "piece"+i;
			new_n.className = 'puzzlepiece';
			new_n.innerHTML = i;
			document.getElementById('puzzlearea').appendChild(new_n);
		}
		else
		{
			var new_n = document.createElement('div');
			new_n.id = "piece"+i;
			new_n.className = 'puzzlepiece';
			document.getElementById('puzzlearea').appendChild(new_n);
		}
	}
}

function check(position) 
{
	if(left(X, Y)==(position-1)){return true;}
	else if (down(X, Y)==(position-1)){return true;}
	else if (up(X, Y)==(position-1)){return true;}
	else if (right(X, Y)==(position-1)){return true;}
	else{return false;}
}

function youWin() 
{
	while(newColor==document.getElementById("theBody").style.backgroundColor){
	newColor = colors[Math.floor(Math.random()*colors.length)]}

	document.getElementById("theBody").style.backgroundColor = newColor;
	alert("Congrats! You win! Keep trying to get extra smart.");
}

function finish()
{
	let flag = true;
	for (let i = 0; i < puzzlePieces.length; i++)  
	{
		var top = parseInt(puzzlePieces[i].style.top);
		var left = parseInt(puzzlePieces[i].style.left);
		if (left != (i%4*100) || top != parseInt(i/4)*100) {
			flag = false;
			break;}
	}
	return flag;
}

function startMe(){
		for (let i=0; i<puzzlePieces.length; i++){
			puzzlePieces[i].className = 'puzzlepiece'; 
			puzzlePieces[i].style.left = (i%4*100)+'px'; 
			puzzlePieces[i].style.top = (parseInt(i/4)*100) + 'px'; 
			puzzlePieces[i].style.backgroundPosition= '-' + puzzlePieces[i].style.left + ' ' + '-' + puzzlePieces[i].style.top; 
			puzzlePieces[i].onmouseover = function(){
				if (check(parseInt(this.innerHTML))) 
				{this.style.border = "4px solid pink";}
			};
			puzzlePieces[i].onmouseout = function(){
				this.style.border = "1px dotted grey";};
			puzzlePieces[i].onclick = function(){
			if (check(parseInt(this.innerHTML))){
				switcho(this.innerHTML-1); 
				if (finish()){
					youWin();}
			return;
			}
		};
	}

	var shuffle = document.getElementById('shufflebutton'); 
	shuffle.onclick = function(){
		for (let i=0; i<300; i++){
			var shuffle_num = parseInt(Math.shuffle_numom()* 100) %4;
			if (shuffle_num == 0){
				var hold = up(X, Y); 
				if ( hold != -1){
					switcho(hold);}
			}
			else if (shuffle_num == 1){
				var hold = down(X, Y);
				if (hold != -1){
					switcho(hold);}
			}
			else if (shuffle_num == 2){
				var hold = left(X, Y);
				if ( hold != -1){
					switcho(hold);}
			}
			else if (shuffle_num == 3){
				var hold = right(X, Y);
				if (hold != -1){
					switcho(hold);}
			}
			}
		};
	};
}

function left(x, y){
	var xTwo = parseInt(x);
	var yTwo = parseInt(y);
	if (xTwo > 0){
		for (var i = 0; i < puzzlePieces.length; i++){
			if (parseInt(puzzlePieces[i].style.left) + 100 == xTwo && parseInt(puzzlePieces[i].style.top) == yTwo){
				return i;
			} 
		}
	}
	else {return -1;}
}

function right(x, y) {
	var xTwo = parseInt(x);
	var yTwo = parseInt(y);
	if (xTwo < 300){
		for (var i =0; i<puzzlePieces.length; i++){
			if (parseInt(puzzlePieces[i].style.left) - 100 == xTwo && parseInt(puzzlePieces[i].style.top) == yTwo) 
			{return i;}
		}
	}
	else{return -1;} 
}

function up(x, y){
	var xTwo = parseInt(x);
	var yTwo = parseInt(y);
	if (yTwo > 0){
		for (var i=0; i<puzzlePieces.length; i++){
			if (parseInt(puzzlePieces[i].style.top) + 100 == yTwo && parseInt(puzzlePieces[i].style.left) == xTwo){
				return i;}
			} 
		}
	else{return -1;}
}

function down(x, y){
	var xTwo = parseInt(x);
	var yTwo = parseInt(y);
	if (yTwo < 300){
		for (var i=0; i<puzzlePieces.length; i++){
			if (parseInt(puzzlePieces[i].style.top) - 100 == yTwo && parseInt(puzzlePieces[i].style.left) == xTwo){
				return i;}
			}
	}
	else{return -1;} 
}

function switcho(pos){
	var hold = puzzlePieces[pos].style.top;
	puzzlePieces[pos].style.top = Y;
	Y = hold;
	hold = puzzlePieces[pos].style.left;
	puzzlePieces[pos].style.left = X;
	X = hold;
}

