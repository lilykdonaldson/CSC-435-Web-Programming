window.onload = function()
{
	document.getElementById("calculate").onclick = getTip;
};

function getTip()
{
	var bill = (document.getElementById('bill').value);
	var tip = (document.getElementById('tipme').value);
	var total = bill*((tip * .01)+1);
	if(tip <= 10)
	{
		red = document.getElementById("tipme");
		red.style.backgroundColor = "red";
	}
	else{
		red = document.getElementById("tipme");
		red.style.backgroundColor = "white";}

	document.getElementById("results").innerHTML = "$" + total.toFixed(2);
}