 var bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight)
  for(var i= 0; i<100; i++) {
  bubbles[i] = {
      x: random(0,width),
      y: random(0,height),
     display: function(){
        stroke(255)
        noFill();
        
        ellipse(this.x, this.y,25,25)
   },
 
      move: function() {
        this.y = this.y -1
        this.x = this.x+random(-3,3);
       
        },
   }
}
}

function draw() {
  background(0)
  frameRate(20)
  for (var i= 0; i< bubbles.length; i++){
  bubbles[i].move();
  bubbles[i].display();
  }


}



