var backgroundImg;
var snow1,Snow;



function preload() {
  backgroundImg = loadImage("snow2.jpg");
  Snow = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(backgroundImg); 
  if(frameCount%10===0){
    snow1=createSprite(400, 1, 50, 50);
    snow1.x = Math.round(random(1200,10));
    snow1.addImage(Snow);
    snow1.velocityY=5;
    snow1.scale=0.2;
    snow1.lifetime = 194;
  }
    drawSprites();
}