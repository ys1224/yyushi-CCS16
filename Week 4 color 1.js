var x //upper rect height
var y //lower rect height
function setup() {
  createCanvas(500,600);
  background('white')
}

function draw() {
  x=230
  y=200
  noStroke()
  fill(175,226,237);//blue
 rect(50,30,20,230);
  fill(181,192,199);//dark blue grey
 rect(50,320,20,200);//1st
  fill(247,138,134)//yellow
 rect(70,30,5,x);
  fill(242,241,237);//light grey
 rect(70,320,5,y);//2nd
   fill(237,243,247)//grey
 rect(75,30,10,x);
  fill(179,181,182);//pink
 rect(75,320,10,y);//3rd
  fill(247,138,134)//yellow
 rect(85,30,80,x);
  fill(135,130,122);//light yellow
 rect(85,320,80,y);//4th
  fill(242,241,237);//light grey
 rect(165,30,3,x);
  fill(242,241,237);//light grey
 rect(165,320,3,y);//5th
   fill(237,175,219);//light pink
 rect(168,30,10,x);
  fill(206,216,219)//grey
 rect(168,320,10,y);//6th
 fill(237,243,247)//grey
 rect(178,30,30,x);
fill(135,130,122);//light yellow
 rect(178,320,30,y);//7th
  fill(237,175,219);//light pink
 rect(208,30,30,x);
  fill(181,192,199);//dark blue grey
 rect(208,320,30,y);//8th
 fill(175,226,237);//blue
 rect(238,30,70,x);
  fill(232,226,207);//light yellow
 rect(238,320,70,y);//9th
  fill(247,138,134)//yellow
 rect(308,30,3,x);
  fill(179,196,182);//light green
 rect(308,320,3,y);//10th
  fill(240,247,246)//white
 rect(311,30,10,x);
  fill(181,192,199);//dark blue grey
 rect(311,320,10,y);//11th
  fill(247,138,134)//yellow
 rect(320,30,30,x);
 fill(179,196,182);//light green
 rect(320,320,30,y);//12th
  fill(175,226,237);//blue
 rect(350,30,70,x);
  fill(186,180,169);//light grey
 rect(350,320,70,y);//13th
  
}