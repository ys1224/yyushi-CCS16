var table;
var week=[];
var sleepHours=[];




function preload() {
  table = loadTable("data/data.csv", "csv", "header");
}
function setup() {
  createCanvas(400,400);
  textSize(24);
  textAlign(CENTER)
  week = table.getColumn('DAY');
  sleepHours =table.getColumn('HOURS');
  
}

function draw(){
   //title
  clear();
  background("#00779E");
  fill("white");
  noStroke();
  textSize(20);
  text("My sleep hours in past week",width/2,120);

fill("#F5C453");
 translate(0,height/2);
  for(var i = 0; i < sleepHours.length; i++){
    //move each rectangle horizontally with translate
    translate(55,0);
    push();
    rect(25,100,25,sleepHours[i] * -15.0);
    pop();
  }
  //week
  translate(-180,130);
  for (var i=0; i<week.length; i++){
    fill("#white");
    textSize(10);
    text(week[i],55*i,0);
  }
  
  translate(-5,20);
  for (var j=0; j<sleepHours.length; j++){
    fill("#white");
    textSize(10);
    text(sleepHours[j],56*j,0);
}
}




      
