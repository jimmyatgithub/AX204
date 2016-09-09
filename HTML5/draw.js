console.log("Hello, I am Learning.");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.fillStyle = "rgb(255, 0, 0)";
ctx.fillRect(100,100,100,100);
ctx.strokeStyle = "rgb(60, 100, 255)";
ctx.strokeRect(80, 80, 140, 140);
ctx.clearRect(120, 120, 60, 60);