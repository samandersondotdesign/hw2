var posX = 0;
var speed = 3;
function setup() {
	createCanvas(400, 400);	
}

function draw() {
	background(255);
	
	ellipse(posX,200,50,50);
	
if(posX > 380) {
	speed = -3;
}
	posX = posX + speed;

}
