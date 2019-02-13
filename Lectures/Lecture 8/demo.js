function first() {
	/*alert(document.title);
	let count = 10;
	let s1= ""+count;
	let s2 = count + " bananas, ah, ah";
	alert(s2);*/
	var inches = prompt("Enter the value in inches.");
	if (inches != null) {
		var cm = inches*2.54;
		//document.write(""+cm);
	  document.getElementById("demo").innerHTML =
	  ""+cm;
	}
}