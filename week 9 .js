var btn;
var bgColor = 'white';
var bubbles = [];
var btn2;
var buColor='black'

function setup() {
  btn = createButton("Change background");
  btn.position(20,20);
  btn2 = createButton('Change bubble color')
  btn2.position(20,50);

  btn.mousePressed(
    function(){
      bgColor = color(random(255),random(255),random(255));
    }
  );
  btn2.mousePressed(
    function(){
      buColor = stroke(random(255),random(255),random(255));
    }
    );
   createCanvas(windowWidth, windowHeight)
  
}

function draw() {
  background(bgColor);
  frameRate(5)
  for (var i= 0; i< bubbles.length; i++){
  bubbles[i].move();
  bubbles[i].display();
  }
  for(var i= 0; i<100; i++) {
  bubbles[i] = {
      x: random(0,width),
      y: random(0,height),
     display: function(){
        noFill();
        btn2.mousePressed
        ellipse(this.x, this.y,25,25)
   },
 
      move: function() {
        this.y = this.y -1
        this.x = this.x+random(-1,1);
       
        },
   }
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



