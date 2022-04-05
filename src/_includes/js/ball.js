var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = canvas.width/10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = canvas.height/20;
var dy = -(canvas.height/20);
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#be100e";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}
setInterval(draw, 10);