var colors= ["pink","light_blue","orange","red","purple","tomato","coral"];
var current = "coral";

function changethecolor(){
	current = colors[Math.floor(Math.random()*colors.length)]
	document.getElementById("theBody").style.backgroundColor = current;
}