var foodGroup;
var banana, bananaImage;
var monkey, monkey_running;
var obstacle, obstacleImage;
var obstacleGroup;
var backgroundImage;
var score;
var ground;


function preload(){

  backgroundImage = loadImage("jungle.jpg");
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png",)

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

}
function setup() {
  createCanvas(400, 400);
  
  backgr = createSprite(200,200, 200, 200)
  backgr.scale = 1;
  backgr.addImage(backgroundImage)
  backgr.velocityX = -4;
  
  monkey = createSprite(80, 310, 60, 60)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
 bananaGroup = new Group();
 obstacleGroup = new Group();
  
  score = 0;
  ground = createSprite(200, 390, 400, 20);
  ground.visible = false;
  
  background.visible = false;
  
}

function draw() {
  background(backgroundImage);
  text("Score :" + score, 400, 50)
  stroke("white")
  textSize(20)
  fill("white")
  
  if(backgr.x<100) {
  backgr.x = backgr.width/2;
  }
  
  
  if(keyDown("space") && monkey.collide(ground)) {
    monkey.velocityY = -4;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
 
  food();
  obstacle();
  drawSprites();
} 
function food() {
  if(frameCount % 180 === 0){
    banana = createSprite(350, 220, 40, 40)
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 120;
    banana.velocityX = -3;

   bananaGroup.add(banana)
    
    switch(score) {
       case 10: monkey.scale = 0.12
              break;
      case 20: monkey.scale = 0.14
              break;
      case 30: monkey.scale = 0.16
              break;
      case 40: monkey.scale = 0.18
              break;
      default: break;
    }
  }
    
}
function obstacle(){
  if(frameCount % 150 === 0) {
  object = createSprite(300, 350, 40, 40)
  object.addImage(obstacleImage)
  object.scale = 0.2;
  object.lifetime =  40;
  object.velocityX = -4
  
    obstacleGroup.add(object)
  }
  if(obstacleGroup.isTouching(monkey)) {
    monkey.scale = 0.2;

  }
}