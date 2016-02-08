function setup() {
  createCanvas(600,400);
  background(237,219,194);
  var y
}

function draw() {
  y=22
  fill("black");//black rect
  rect(40,40,500,300);
  fill(237,219,194);//light color
  var i = 60// 5 rect left
  while (i <250){
    rect(60,i,88,y);
    i=i+43
  }
  var i = 60//4 rect middle
  while (i < 200){
    rect(207,i,50,y)
    i=i+43
  }
  var i = 207
  while (i<250){
  rect(i,232,25,y)
  i=i+25
}
  var i = 71//ellipse middle left
  while (i < 250){
    ellipse(290,i,y,y);
    i=i+y
  }
  var i = 71//ellipse middle right
  while (i < 250){
    ellipse(335,i,y,y);
    i=i+y
  }
  var i = 375//five rect right
  while (i < 485){
  rect(i,60,y,y);
  i=i+y
}
rect(375,103,110,43)
var i = 168//four rect right
while (i < 340){
  rect(375,i,66,y)
  i=i+43
}
var i = 180// four ellipse right
while (i < 340){
  ellipse(475,i,y,y)
  i=i+43
}
var i = 71//3 ellipse left
while ( i < 180){
ellipse(179,i,y,y)
i=i+43
}
ellipse(179,243,y,y);
var x = 308
var i =115//2 ellipse below
while( i < 150){
  ellipse (i,x,y,y);
  i=i+y
}
var i =223//4 ellipse below
while (i < 300){
  ellipse(i,x,y,y)
  i=i+y
}
ellipse(335,x,y,y);
ellipse(71,x,y,y);
ellipse(179,x,y,y);
}
 