function setup() {
  createCanvas(500,500)
 background('black')
}

function draw() {
    for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 50, 25, 25);
  }
   
  for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 100, 25, 25);
  }
     for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 150, 25, 25);
  }
  
  for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 200, 25, 25);
  }
    for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 250, 25, 25);
  }
   
  for(var x= 20; x <= width; x=x+50){
    fill('white')
    ellipse(x, 300, 25, 25);
  }
stroke('white')
noFill()
  strokeWeight(3)
  beginShape()
  vertex(480,320)
  vertex(20,320)
  vertex(20,350)
  vertex(480,350)
  vertex(480,380)
  vertex(20,380)
  vertex(20,410)
  vertex(480,410)
  vertex(480,440)
  vertex(20,440)
  vertex(20,470)
  vertex(480,470)
  
  
  
  endShape()
  
 
}