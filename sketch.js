var x = 15
var y = 330
var a = 115
var b = 330
var z = 215
var w = 330


function setup() {
  createCanvas(600 , 400)
}

function draw() {
  colorMode(HSB);
background(150, 20, 100);

stroke(0);
fill(255);
line(0, 200, 600, 200);
arc(300, 200, 30, 200, PI + HALF_PI , HALF_PI);
circle(100, 200, 3);
circle(200, 200, 3);
circle(400, 200, 3);
circle(500, 200, 3);

noStroke();
noFill(); 
quad(50, 200, 55, 200, 55, 150, 50, 150);
quad(98, 200, 103, 200, 103, 150, 98, 150);
quad(150, 200, 155, 200, 155, 150, 150, 150);
quad(198, 200, 203, 200, 203, 150, 198, 150);
quad(250, 200, 255, 200, 255, 150, 250, 150);
quad(350, 200, 355, 200, 355, 150, 350, 150);
quad(398, 200, 403, 200, 403, 150, 398, 150);
quad(450, 200, 455, 200, 455, 150, 450, 150);
quad(498, 200, 503, 200, 503, 150, 498, 150);
quad(550, 200, 555, 200, 555, 150, 550, 150);

  
fill(0);
  textSize(25);
  textSize(25);
    text('Imagem no Espelho Esférico', 150, 30)
  
  textSize(15);
  text('Côncavo', 50, 100)
    
  textSize(20);
    text('C', 100, 230)
    text('F', 200, 230)
    text('V', 300, 230)
    text('F´', 400, 230)
    text('C´', 500, 230)
  
    
stroke(0);
fill(255);
  rect (x, y, 70, 30);
  rect (a, b, 70, 30);
  rect (z, w, 70, 30);

stroke(225);
fill(0);
  textSize(13);
    text('Real', 20, 350);
    text('Virtual', 20, 315);
    text('Direto', 120, 350);
    text('Invertido', 120, 315);
    text('Maior', 220, 350);
    text('Menor', 220, 315);
    text('Igual', 220, 375);
  
}

function KeyPressed(){
  if(key == "ArrowUp" && y>315)
    y=y-100;
  if(key == "ArrowDown" && y<370)
    y=y+100;
}