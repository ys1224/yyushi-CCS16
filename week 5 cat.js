function setup() {
  createCanvas(600,400);
}

function draw() {
  background('black')
  cat(440,100);
  cat(200,100);
  cat(150,100);
  cat(390,100);
  cat(230,150);
  cat(360,150);
  cat(120,150);
  cat(480,150);
  cat(100,200);
  cat(500,200);
  cat(120,250);
  cat(480,250);
  cat(150,300);
  cat(450,300);
  cat(200,350);
  cat(400,350);
  cat(300,400);
  cat(250,370);
  cat(350,370);
  cat(300,170);//center
 
  
}
function cat(x,y){
  fill('white')
  ellipse(x,y,50,45);//face
  line(x-30,y,x-5,y+5);
  line(x-30,y+5,x-5,y+7);//left mustache
  line(x+5,y+5,x+30,y);
  line(x+5,y+7,x+30,y+7);//right mustache 
  noStroke()
  fill('pink')
  ellipse(x,y+5,5,5)//nose
  fill(20,93,117);//blue
  ellipse(x-10,y-5,10,10);//left eye
  ellipse(x+10,y-5,10,10);//right eye
  noFill()
  stroke(1)
  stroke(180,180,180)
  line(x,y+7,x-8,y+15);
  line(x,y+7,x+8,y+15);//mouth
  line(x-25,y-22,x-15,y-20)
  line(x-25,y-22,x-22,y-13)//left ear
  line(x+25,y-22,x+15,y-18)
  line(x+25,y-22,x+22,y-12)//right ear
  
}