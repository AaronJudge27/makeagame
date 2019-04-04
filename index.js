var playerX = 225;
var playerY = 225;

function setup () {
  createCanvas(500,500);
}

function draw () {
  background(123,123,213);
  noStroke();
  fill(255,0,0);
  rect(playerX,playerY,50,50);
  rect(playerX*5-800,playerY*5-800,50,50);
  rect(playerX/(-2)+500,playerY/(-2)+500,100,100);
  rect(playerX/(-2)+500,playerY/(-2)+500,100,100);
  rect(playerX/(-2)+500,playerY/(-2)+500,100,100);
  rect(playerX/(2),100,150,150)
  move();
}

function move () {
  if (left == true) {
    playerX--;
  }
  if (right == true) {
    playerX++;
  }
  if (up == true) {
    playerY--;
  }
  if (down == true) {
    playerY++;
  }
}
