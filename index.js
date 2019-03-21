var playerX = 225;
var playerY = 225;
var left = 0;
var right = 0;
var up = 0;
var down = 0;
function setup () {
  createCanvas(500,500);
}
function draw () {
  background(123,123,213);
  noStroke();
  fill(255,0,0);
  rect(playerX,playerY,50,50);


  if (left == true) {
    playerX--;
  }
  if (right == true) {
    playerX++;
  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    left = 1;
  }
  if (keyCode === RIGHT_ARROW) {
    right = 1;
  }
}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    left = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    right = 0;
  }
}
