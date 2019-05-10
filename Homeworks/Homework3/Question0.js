function frequentMember(){
	var userInput = document.getElementById("userInput").value;
	var array = userInput.split(",");
	var test = 0;
	var highest = 0;
	var frequent="";
	for(var i = 0; i<array.length;i++){
		var current = array[i];
		test=0;
		for(var j = 0; j<array.length;j++){
			if(array[i]===array[j]){
				test++;
			}
		}
		if(test>highest){
			highest=test;
			frequent=array[i];
		}
	}
	if(test!=1){
	document.getElementById('answer').innerHTML = "<p>"+frequent+"</p>";
}
	else{
		document.getElementById('answer').innerHTML = "<p>"+"All members occur once."+"</p>";
	}
}