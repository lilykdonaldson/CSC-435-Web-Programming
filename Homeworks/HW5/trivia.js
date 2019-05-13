function displayCategories()
  {
    document.getElementById("categories-heading").className = null;
    document.getElementById("category-view").className = null;
    var holdString = "";
    for (var i = 0; i < categories.length; i++) { 
        holdString=holdString+"<li "+"id="+categories[i]+" >"+categories[i]+"</li>";
    }

    document.getElementById("categories").innerHTML = holdString;


document.getElementById("astronomy").addEventListener("click", astronomy);
document.getElementById("biology").addEventListener("click", biology);
document.getElementById("chemistry").addEventListener("click", chemistry);
document.getElementById("computerscience").addEventListener("click", computerscience);
document.getElementById("culture").addEventListener("click", culture);
document.getElementById("history").addEventListener("click", history);
document.getElementById("internet").addEventListener("click", internet);
document.getElementById("pokemon").addEventListener("click", pokemon);
document.getElementById("random").addEventListener("click", random);
var current;
}

function current(pass){
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("factors").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","getQuestion.php?q="+pass,true);
xmlhttp.send();
}

function astronomy(){
  current("astronomy");

}
function biology(){
  current("biology");
}
function chemistry(){
  current("chemistry");
}
function computerscience(){
  current("computerscience");
}
function culture(){
  current("culture");
}
function history(){
  current("history");
}
function internet(){
  current("internet");
}
function pokemon(){
  current("pokemon");
}
function random(){
  current("random");
}






