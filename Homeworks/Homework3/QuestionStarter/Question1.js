
function clearME(){
	document.getElementById("HW1").value="";
	document.getElementById("HW1o").value="";
	document.getElementById("HW2").value="";
	document.getElementById("HW2o").value="";
	document.getElementById("HW3").value="";
	document.getElementById("HW3o").value="";
	document.getElementById('resultsarea').innerHTML = "";

}
function compute(){
	var HW1 = document.getElementById("HW1").value;
	var HW1o = document.getElementById("HW1o").value;
	var HW2 = document.getElementById("HW2").value;
	var HW2o = document.getElementById("HW2o").value;
	var HW3 = document.getElementById("HW3").value;
	var HW3o = document.getElementById("HW3o").value;
	var total = HW1o+HW2o+HW3o;
	var numerator = HW1+HW2+HW3;
	if(document.getElementById("curve").checked){
		var end = (numerator/total)+0.05;
	}
	else{
		var end = (numerator/total);
	}
	
	document.getElementById('resultsarea').innerHTML = "<p>"+(end*100)+"%"+"</p>";
}
