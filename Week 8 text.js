var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Click to change", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(100);
 
  var output = "Your " +
    lexicon.randomWord("nns") + " are " + 
    lexicon.randomWord("nn") + ",whose " +
    lexicon.randomWord("nn") + " touch the sky. Which sky? The sky where " +
    lexicon.randomWord("nn") + 
    " hung " +
    lexicon.randomWord("nn") + 
    lexicon.randomWord("nn. ");
    
    textAlign(random);
   
    
   
  text(output, 10, 10, width-20, height-20);
}
      