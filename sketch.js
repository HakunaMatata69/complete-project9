var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg;
var leafimg;
var apple;
var leaves;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafimg = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleimg)
  apple.scale=0.1
  apple.velocityY = 5
}



function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leafimg)
  leaves.scale=0.1;
  leaves.velocityY=5
}




  
 

function draw() {
  background(0);
  var select_sprites = Math.round(random(1,2));
if (frameCount % 80 == 0) {
  if(select_sprites==1){
    createApples()
  }
  else{
    createLeaves()
  }
}
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x = World.mouseX;
  drawSprites();
}