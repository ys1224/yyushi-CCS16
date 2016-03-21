function setup(){
  createCanvas(400, 400);
 
}
function draw() {
  noStroke();
  fill(0,0,0,50);
  translate(frameCount%width,frameCount%height);
  rotate(radians(frameCount));
  rect(0,0,100,100)
  translate(frameCount%width,frameCount%height);
  rotate(radians(frameCount));
  ellipse(200,200,100,100)
  translate(frameCount%width,frameCount%height);
  rotate(radians(frameCount));
  ellipse(300,300,100,100)
}
    function mousePressed(){
  clear();
    }