function setup() {
  createCanvas(400,600);
  background(235,225,224);
}

function draw() {
  noStroke()
  fill(235,96,230)//bright pink
  rect(50,30,300,180)
  fill(245,241,120);
  beginShape()
  vertex(50,220)
  vertex(350,220)
  vertex(350,370)
  vertex(50,370)
  vertex(50,320)
  vertex(200,320)
  vertex(200,250)
  vertex(50,250)
  vertex(50,220)
  endShape()
  fill(125,191,201)
  rect(50,260,130,45)
  fill(128,117,125);
  rect(50,420,300,100)
  
}