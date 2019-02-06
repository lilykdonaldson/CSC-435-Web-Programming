let hair = 0;
let skin = 0;
let color = 0;
let season = 0;
let either =false;
let seasontext;
function preload() {
  hairpic = loadImage('images/hair.png');
	undertones = loadImage('images/undertones.jpg');
	colors = loadImage('images/colors.png');
}
function setup() {
	createCanvas(1200, 1700);
	start();
	buttonGo = createButton('Get Results');
    buttonGo.position(550, 1600);
    buttonGo.mousePressed(getresults);
}

function start() {
	background(229, 239, 255);
	hair = 0;
  skin = 0;
  color = 0;
  season = 0;
	either =false;
	stroke(0);
	strokeWeight(1);
	fill(0);
	//Question Text set up
	textAlign(CENTER, CENTER);
	textFont('Garamond');
  textSize(40);
	//Question1
	text('What color is your hair?', 600,40);
	image(hairpic,200,100);
	//Question2
	text("What's your skin's undertone?", 600, 580);
	image(undertones,230,650);
	//Question3
	text("What's your favorite color?", 600, 1120);
	image(colors,190,1150);
	

	
}
function mousePressed(){

	hitCheck(mouseX,mouseY);
}
function hitCheck(x,y){
	//hair
	if(x>200&&x<397.5&&y>100&&y<297.5){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(200,100,197.5,197.5);
		hair=1;
	}
	else if(x>397.5&&x<595&&y>100&&y<297.5){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(397.5,100,197.5,197.5);
		hair=2;
	}
	else if(x>595&&x<792.5&&y>100&&y<297.5){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(595,100,197.5,197.5);
		hair=3;
	}
	else if(x>792.5&&x<990&&y>100&&y<297.5){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(792.5,100,197.5,197.5);
		hair=4;
	}
	else if(x>200&&x<397.5&&y>300&&y<495){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(200,300,197.5,197.5);
		hair=5;
	}
	else if(x>397.5&&x<595&&y>300&&y<495){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(397.5,300,197.5,197.5);
		hair=6;
	}
	else if(x>595&&x<792.5&&y>300&&y<495){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(595,300,197.5,197.5);
		hair=7;
	}
	else if(x>792.5&&x<990&&y>300&&y<495){
		image(hairpic,200,100);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(792.5,300,197.5,197.5);
		hair=8;
	}
	//undertones
	if(x>230&&x<480&&y>650&&y<1081){
		image(undertones,230,650);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(233,653,247,424);
		skin=1;
	}
	else if(x>480&&x<690&&y>650&&y<1081){
		image(undertones,230,650);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(477,653,207,424);
		skin=2;
	}
	else if(x>690&&x<930&&y>650&&y<1081){
		image(undertones,230,650);
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(687,653,247,424);
		skin=3;
	}
//color
	if(x>200&&x<397.5&&y>1150&&y<1347.5){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(200,1150,185,197.5);
		color=1;
	}
	else if(x>397.5&&x<595&&y>1150&&y<1347.5){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(397.5,1150,197.5,197.5);
		color=2;
	}
	else if(x>595&&x<792.5&&y>1150&&y<1347.5){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(595,1150,197.5,197.5);
		color=3;
	}
	else if(x>792.5&&x<990&&y>1150&&y<1347.5){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(792.5,1150,197.5,197.5);
		color=4;
	}
	else if(x>200&&x<397.5&&y>1347.5&&y<1545){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(200,1347.5,185,197.5);
		color=5;
	}
	else if(x>397.5&&x<595&&y>1347.5&&y<1545){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(397.5,1347.5,197.5,197.5);
		color=6;
	}
	else if(x>595&&x<792.5&&y>1347.5&&y<1545){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(595,1347.5,197.5,197.5);
		color=7;
	}
	else if(x>792.5&&x<990&&y>1347.5&&y<1545){
		image(colors,190,1150)
		strokeWeight(5);
		fill(0,0,0,0);
		stroke(237, 211, 47);
		rect(792.5,1347.5,197.5,197.5);;
		color=8;
	}
}
function getresults(){
	if(skin==1){
		//winter or summer
		if(hair==8||hair==7||hair==1){
			season=0;
		}
		else{
			season=1}
	}
	else if(skin==2){
		//either
		if(color==3||color==4||color==7){
			either+=4;
		}
		else if(color==1||color==6){
			either+=3;
		}
		else if(color==2){
			either+=2;
		}
		if(hair==8||hair==7||hair==1){
			either+=4;
		}
		else if(hair==3||hair==4||hair==5||hair==6){
			either+=3;
		}
	}
	else if(skin==3){
		//spring or autumn
		if(hair==1||hair==2||hair==3||hair==7||hair==8){
			season=2;
		}
		else{
			season=3}
	}
	printresults();
}
function printresults(){
	if(either!=false){
		if(either>=6){
			season=0;}
		else if(either>=5){
			season=1;}
		else if(either>=3){
			season=2;}
		else{season=3;}
	}
	if(season==0){seasontext="Winter";}
	else if(season==1){seasontext="Summer";}
	else if(season==2){seasontext="Spring";}
	else if(season==3){seasontext="Autumn";}
	start();
	textAlign(CENTER);
	text(seasontext,600, 1690);
}