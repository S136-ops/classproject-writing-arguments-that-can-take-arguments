
var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  moveRect=createSprite(600,800,20,20)
  moveRect.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

  if(isTouching(moveRect,fixedRect)){
  moveRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    moveRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




