var left = 0;
var right = 0;
var up = 0;
var down = 0;

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    left = 1;
  }
  if (keyCode === RIGHT_ARROW) {
    right = 1;
  }
  if (keyCode === UP_ARROW) {
    up = 1;
  }
  if (keyCode === DOWN_ARROW) {
    down = 1;
  }
}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    left = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    right = 0;
  }
  if (keyCode === UP_ARROW) {
    up = 0;
  }
  if (keyCode === DOWN_ARROW) {
    down = 0;
  }
}
