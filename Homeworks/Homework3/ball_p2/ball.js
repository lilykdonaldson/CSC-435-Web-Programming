var ball = null;
var animate;
var x = 200;
var y = 0;
var dy = 4;

function init()
{
	ball = document.getElementById('ball');
	ball.style.position = "relative";
	ball.style.left = x + 'px';
	ball.style.top = y + 'px';
	bounce();
	
}

function bounce()
{
	animate = setInterval(bounce, 500);
	if(parseInt(ball.style.top)>400){bounceback();}
	console.log(parseInt(ball.style.top));
	ball.style.top = parseInt(ball.style.top) + 10 + 'px';
	
	
}
function bounceback(){
	//alert("now");
	animate = setInterval(bounceback, 500);
	ball.style.top = parseInt(ball.style.top) - 10 + 'px';
	//animate = setInterval(bounce, 200);
	if(parseInt(ball.style.top)<10){bounce();}
}

window.onload = init;



























































