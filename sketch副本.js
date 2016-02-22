function setup() {
  createCanvas(500,500);
}

function draw() {

stroke('black')
strokeWeight(2)
  for(var i=10; i < 300; i+=5){
    rect(0,0,500-i,500-i);
  }
 

 stroke('red')
 strokeWeight(4)
  beginShape()
  vertex(0,70)
  vertex(205,70)
  vertex(5,205)
  vertex(105,0)
  vertex(190,205)
  vertex(0,70)
endShape()






}