function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);

	var headX = mouseX,
		headY = mouseY,
		headH = 150,
		eyeH = 20;
	
	ellipse(headX, headY, headH, headH);
	ellipse(headX - 25, headY - 25, eyeH, eyeH);
	ellipse(headX + 25, headY - 25, eyeH, eyeH);
	if (mouseX < 200) {
		//line(headX + 25, headY + 25, headX - 25, headY + 25);
		//line(headX + 35, headY + 17, headX + 25, headY + 25);
		//line(headX - 25, headY + 25, headX - 35, headY + 17);
		arc(headX, headY + 25, 60, 40, 0, 3.1, HALF_PI);
	} else {
		arc(headX, headY + 25, 90, 10, 1, -3.1, HALF_PI);
	}
}
