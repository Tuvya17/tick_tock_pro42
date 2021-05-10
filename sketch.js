var hr, sec, min;


function setup() {
  createCanvas(1000,800);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
  
}

function draw() {
  background("lightgreen");
  
  hr = hour();
  sec = second();
  min = minute();
  
  
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,60,0,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  
  
  translate(500,350);
  push();
  rotate(secAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke("orange");
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(4);
  line(0,0,50,0);
  pop();

  noFill();
  stroke("red");
  strokeWeight(10);
  arc(0,0,300,300,0,secAngle);
  stroke("orange");
  arc(0,0,270,270,0,minAngle);
  stroke("blue");
  arc(0,0,240,240,0,hrAngle);


  


  drawSprites();
}