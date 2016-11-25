// console.log("Everything is working")
var pikapika = new Image();
pikapika.src = "pikachu.png";
// Drawing Sprite Onto Canvas
pikapika.onload = function() {
  ctx2.drawImage(pikapika, 50, 300, 70, 70);
}
var snorlax = new Image();
snorlax.src = "snorlax.png";
// Drawing Sprite Onto Canvas
snorlax.onload = function() {
  ctx2.drawImage(snorlax, 550, 250, 120, 120);
}
var tree = new Image();
tree.src = "tree.png";
// Drawing Sprite Onto Canvas
tree.onload = function() {
  ctx2.drawImage(tree, 650, 200, 105, 165);
}


var c=document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//start from (0,0)
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,300);
ctx.lineTo(300,150);
ctx.lineTo(0,150);
ctx.lineTo(0,0);
ctx.moveTo(150,0);
ctx.lineTo(150,300);
ctx.lineTo(0,300);
ctx.lineTo(300,0);
ctx.lineTo(150,0);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "turquoise";
ctx.fill();



var c2 = document.getElementById("sceneCanvas");
var ctx2= c2.getContext("2d");
// Sky and Land
ctx2.fillStyle="lightgreen"
ctx2.fillRect(0,350,800,150);
ctx2.fillStyle="cyan"
ctx2.fillRect(0,0,800,350);
// Sun
ctx2.beginPath();
ctx2.arc(100,100,50,0,6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "yellow";
ctx2.fill();
//Path
ctx2.beginPath();
ctx2.moveTo(300,500);
ctx2.lineTo(350,350);
ctx2.lineTo(400,350);
ctx2.lineTo(450,500);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "grey";
ctx2.fill();
//Building
ctx2.fillRect(100,250,200,100);
ctx2.clearRect(130,280,30,30);
ctx2.clearRect(170,280,30,30);
ctx2.clearRect(210,280,30,30);
ctx2.clearRect(250,280,30,30);
