var x = 100;
var y = 100;

function moveShape(newX, newY) {
    x = newX
    y = newY

    drawShapes();
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 1500;
canvas.height = 1000;

function drawShapes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var rectX = 870;
  var rectY = 30;
  var rectWidth = 100;
  var rectHeight = 100;

  ctx.fillStyle = 'red'; // retangulo
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

  var circleX = rectX + rectWidth / 2;
  var circleY = rectY + rectHeight + 70;
  var circleRadius = 50;

  ctx.fillStyle = '#DE3163'; // bola
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
  ctx.fill();

  var triangleX = rectX - 50;
  var triangleY = rectY + rectHeight + 100;

  ctx.fillStyle = 'pink'; // triangulo
  ctx.beginPath();
  ctx.moveTo(triangleX + 100, triangleY + 50);
  ctx.lineTo(triangleX + 50, triangleY + 150);
  ctx.lineTo(triangleX + 150, triangleY + 150);
  ctx.closePath();
  ctx.fill();

  var triangleY = rectY + rectHeight + 270;
  ctx.beginPath();
  ctx.moveTo(triangleX, triangleY + 250);
  ctx.bezierCurveTo(
    triangleX + 50,
    triangleY - 50,
    triangleX + 50,
    triangleY - 50,
    triangleX + 300,
    triangleY + 200
  );
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'blue'; // curva
  ctx.stroke();

  var startX = triangleX - 200;
  var startY = triangleY;
  var endX = triangleX + 350;
  var endY = triangleY;

  ctx.strokeStyle = '#DFFF00'; // reta
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();

  requestAnimationFrame(drawShapes);
}

drawShapes();

function draw(){
  var ctx5 = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function(){
    for (var i = 0; i< 1; i++){
      for (var j = 0; j<1; j++){
        ctx5.drawImage(img,j*700, i *700,300,200);
      }
    }
  };
  img.src = 'images/soul.jpg';
}

var h1 = document.getElementById("tex");
var colors = ["red", "pink", "#DFFF00", "blue", "#DE3163"];
var currentIndex = 0;

function changeColor(){
    h1.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeColor, 1000)
