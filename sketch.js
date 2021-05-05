var hr,mn,sc;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0); 

  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360); 

  push();
  rotate(scAngle)
  strokeWeight(7);
  stroke(255,0,0);//seconds
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle)
  strokeWeight(7);
  stroke(0,255,0);//minute
  line(0,0,70,0);
  pop();
 
    push();
   rotate(hrAngle)
   strokeWeight(7);
   stroke(0,0,255);//hour
   line(0,0,50,0);
   pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300, 0, scAngle);

  stroke(0,255,0);
  arc(0,0,275,275, 0, mnAngle);

  stroke(0,0,255);
  arc(0,0,250,250, 0, hrAngle);

  
  angleMode(DEGREES);
   
  drawSprites();
}