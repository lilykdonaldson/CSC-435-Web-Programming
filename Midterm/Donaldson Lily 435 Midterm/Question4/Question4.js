var myList = [];

function addItem(){
	this.myList.push(document.getElementById("item").value.toLowerCase());
	document.getElementById("item").value = "";
	displayList();
	
}

function removeItem(){
	var toRemove = document.getElementById("item").value.toLowerCase();
	for(var i=0;i<myList.length;i++){
		if(myList[i]===toRemove){
			myList.splice(i,1);
			break;
		}
	} 
	document.getElementById("item").value = "";
	displayList();

}

function displayList(){
	var theHtml = "<ul>"
	for(var n = 0;n<myList.length;n++){
		theHtml = theHtml+"<li>"+myList[n]+"</li>";
	} 
	theHtml = theHtml+"</ul>"
	document.getElementById('answer').innerHTML = theHtml;
	var listing = document.getElementById("answer");
	var myItems = listing.getElementsByTagName("li");
	var bool = false;
	for(var x=0;x<myItems.length;x++){
		if(bool){
			myItems[x].style.backgroundColor="yellow";
			bool = false;
		}
		else{
			myItems[x].style.backgroundColor="white";
			bool = true;
		}
		

	}
}

