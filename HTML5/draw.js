console.log("Hello, I am Learning.");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "rgb(60, 100, 255)";
ctx.strokeRect(80, 80, 140, 140);
ctx.clearRect(120, 120, 60, 60);

ctx4.fillStyle = 'rgb(0,100,100)';
var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx4.fillRect(x, y, width, height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx4.clearRect(x, y, width, height);
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx4.fillRect(x, y, width, height);
}