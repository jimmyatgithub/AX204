var canvas;
var ctx;

var x = 300;
var y = 300;
var r = 20;

var mx = 0;
var my = 0;

var goodX;
var goodY;
var badX;
var badY;
var spriteWidth = 50;
var spriteHeight = 50;

var goodCollision = false;
var badCollision = false;

var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x,y,r,0,6.28);
  ctx.closPath();
  ctx.fillStyle = "firebrick";
  ctx.fill();
}

function clear() {
  ctx.clearRect(0,0,width,height);
}

function drawGood() {
  ctx = document.getElementById('myCanvas').getContext('2d');
  var good = new Image();
  good.src = "fruitgood.png"
  ctx.drawImage(good, goodX, goodY, 50, 50);
}

function drawBad() {
  ctx = document.getElementById('myCanvas').getContext('2d');
  var good = new Image();
  good.src = "fruitbad.png"
  ctx.drawImage(bad, badX, badY, 50, 50);
}

function init(); {
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  // Put Sprites In Random Position
  badX = Math.floor(Math.random() * 550);
  badY = Math.floor(Math.random() * 550);
  goodX = Math.floor(Math.random() * 550);
  goodY = Math.floor(Math.random() * 550);
  // Wait For A Keyboard Event, Then Call A function
  window.onkeydown = keydownControl;
  // Set The Draw() To Run Every 10 Milliseconds
  return setInterval(draw, 10);
}

// Draw scene function
function draw() {
  // Call clear() to wipe canvas & draw circle & sprites
  clear();
  circle(x,y,r);
  drawGood();
  drawBad();
  // Tell the sprite to bounce off the walls
  if (x + mx > WIDTH - r || x + mx < 0 + r) {
    mx = -mx
  } else if (y + my > HEIGHT - r || y + my < 0 + r) {
    my = -my
  }
  // Move our sprite
  x += mx; // means same as x = x + mx
  y += my;
  // Check for collisions
  collisionCheck();
  collisionHandle();
}

// Checks for collisions (logic)
function collisionCheck() {
  if ((x >= badX) && (x <= badX = spriteWidth) && (y >= badY) && (y <= badY + spriteHeight)
  badCollision = true;
} else {
  badCollision = false;
}

  if ((x >= goodX) && (x <= goodX = spriteWidth) && (y >= goodY) && (y <= goodY + spriteHeight)
  goodCollision = true;
  } else {
  goodCollision = false;
  }
}

// Handles what happens if there is a collision
function collisioHandle() {
if (badCollision == true) {
  badX = Math.floor(Math.random() * 550);
  badY = Math.floor(Math.random() * 550);
  score -= 1;
  document.getElementById('score').innerHTML = score;

  function collisioHandle() {
  if (goodCollision == true) {
    goodX = Math.floor(Math.random() * 550);
    goodY = Math.floor(Math.random() * 550);
    score += 1;
    document.getElementById('score').innerHTML = score;
  }
}

// Function to check witch key is beeing pressed
function keydownControl(e) {
  if (e.keyCode == 37) {
    mx = -4;
    my = 0;
  } else if (e.keyCode == 38) {
    mx = 0;
    my = -4;
  } else if (e.keyCode == 39) {
    mx = 4;
    my = 0;
  } else if (e.keyCode == 40) {
    mx = 0;
    my = 4;
  }
}

// Calling the entry point function
init();
