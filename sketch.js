function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)

}

function draw() {
  background(0);  
  translate(200, 200);
  rotate(-90);

  hr = hour()%12;
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push()
  rotate(scAngle)
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop()

  push()
  rotate(mnAngle);
  stroke("blue")
  strokeWeight(7)
  line(0, 0, 75, 0);
  pop()

  push()
  rotate(hrAngle)
  stroke("green");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop()


  //drawing the arcs
  strokeWeight(9);
  noFill()
  stroke(255, 0, 0);
    
 arc(0, 0, 300, 300, 0, scAngle)

 strokeWeight(9);
 stroke("blue")
 arc(0, 0, 260, 260, 0, mnAngle);

 strokeWeight(9);
 stroke("green")
 arc(0, 0, 220, 220, 0, hrAngle);
  
 

  drawSprites();
}