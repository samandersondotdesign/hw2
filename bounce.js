var posX = 100;
var speed = 5;
var left = -5;
function setup() {
	createCanvas(400, 400);	
}

function draw() {
	background(255);
	
	ellipse(posX,200,50,50);
	
if(posX > 380) {
	speed = speed - 5;
}
	if(posX < 20) {
	speed = speed + 5;
}
	posX = posX + speed;
	
}
