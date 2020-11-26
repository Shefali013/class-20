var fix_rec, moving_rec;
function setup() {
  createCanvas(800,400);
  fix_rec = createSprite(30, 200, 50, 50);
  moving_rec = createSprite(700,200,40,90);
  moving_rec.shapeColor = "green";
  fix_rec.shapeColor = "red";
  fix_rec.velocityX = 2;
  moving_rec.velocityX = -2; 
}

function draw() {
  background(255,255,255);
  //console.log(moving_rec.x);  
  //moving_rec.x = World.mouseX;
  //moving_rec.y = World.mouseY;
  if(moving_rec.x - fix_rec.x < fix_rec.width/2+moving_rec.width/2){

  fix_rec.velocityX = -2;
  moving_rec.velocityX = 2; 

  }
  drawSprites();
}
