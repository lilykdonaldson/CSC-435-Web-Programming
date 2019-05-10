var colors= ["pink","light_blue","orange","red","purple","tomato","coral"];
var current = "coral";
var newColor="";
function changethecolor(){
	newColor=document.getElementById('data').value;

	if(newColor==""||newColor==null){
		current = colors[Math.floor(Math.random()*colors.length)]
	}
	else{
		current=newColor;
	}
	document.getElementById("theBody").style.backgroundColor = current;
}

