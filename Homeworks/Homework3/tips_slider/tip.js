window.onload = function()
{
	document.getElementById("calculate").onclick = getTip;
	//updateSlider(document.getElementById('tipme').value);
};

function getTip()
{
	var bill = (document.getElementById('bill').value);
	var tip = (document.getElementById('tipme').value);
	var total = bill*((tip * .01)+1);
	document.getElementById("results").innerHTML = "$" + total.toFixed(2);
}

/*function updateSlider(val) {
          document.getElementById('slideme').innerHTML=val;
          updateSlider(document.getElementById('tipme').value);
        }*/