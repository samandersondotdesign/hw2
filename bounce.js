
var speed = 5;
var posX = 0;
var posY = 200;

function setup() {
	createCanvas(400, 400);	
}

function draw() {
	background(255);

	
	ellipse(posX,posY,50,50);
	
if(posX > 380) {
	speed = speed - 5;
}
	if(posX < 20) {
	speed = speed + 5;
}
	posX = posX + speed;
}
function mousePressed() {
	posX = mouseX;
	posY = mouseY;
}
