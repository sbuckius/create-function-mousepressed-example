function setup() {
  createCanvas(400, 400);
  background(220);
}

// Custom function that draws a simple face
function drawFace(x, y) {
  fill("yellow");
  circle(x, y, 100);           // face
  fill(0);
  circle(x - 20, y - 20, 10);  // left eye
  circle(x + 20, y - 20, 10);  // right eye
  noFill();
  arc(x, y + 10, 50, 20, 0, PI); // smile
}

// Draw a new face every time you click
function mousePressed() {
  drawFace(mouseX, mouseY);
}
