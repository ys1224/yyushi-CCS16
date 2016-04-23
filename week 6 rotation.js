var angle=0.0

function setup() {
  createCanvas(400,400); 
  background('white')
}

function draw(){
  translate(200,200);
  rotate(angle)
  mine(0,0);
  angle+=0.1
  
  translate(100,100);
  rotate(angle)
  mine(0,0);
  angle+=0.1
  
  
    
  
}

function mine(x,y){
  fill('black')
  ellipse(x,y,50,50);
  fill('white')
  noStroke()
  rect(x-20,y-20,40,40)
}

