function setup() {
	createCanvas(400, 400);	
}

var posX = 100;
function draw() {
	background(255);
	
	ellipse(posX,200,50,50);
	
	if(posX < 375) {
		posX = posX + 3;
	
		print("if");
}
	else {
		posX = posX - 3;
		print("else");
		
}
