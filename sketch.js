var fixedRect, movingRect;
var object1,object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  object1 = createSprite(100,300,50,50);
  object2 = createSprite(500,300,50,50);

  object1.velocityX = +5;
  object2.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(object1,object2);
  bounceOff(movingRect,fixedRect);

 
  drawSprites();
}
