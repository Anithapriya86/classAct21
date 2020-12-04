var fixedRect, movingRect;
var rect1;
function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,50,60,50);
  rect1.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect1))
  {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
   else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
    fixedRect.shapeColor = "green";
   }


  drawSprites();
}
//object1 as movingRect, object2 as fixedRect
