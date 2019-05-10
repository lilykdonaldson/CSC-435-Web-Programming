var validation;
var myAnswer;
function convert(){
	var userInput = document.getElementById("userInput").value;
	userInput = parseFloat(userInput);
	validate(userInput);
	if(!validation){
		document.getElementById('answer').innerHTML = "<p>Please enter a number.</p>"
	}
	else{
		var whatConvert = document.getElementById('conversion').value;
		if(whatConvert==="kgtopounds"){
			myAnswer = userInput*2.2045;
		}
		else{
			myAnswer = userInput*0.45359;
		}
		document.getElementById('answer').innerHTML = "<p>"+myAnswer+"</p>";
	}
}
function validate(aNumber){
	if(isNaN(aNumber)){
		validation = false;
	}
	else{
		validation=true;
	}
}