var monkey, monkey_running;
var banana, bananaImage, obstacles, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivalTime = 0;
var fruitImage
var food

function preload() {



  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  fruitImage = loadImage("banana.png")
  obstacleImage = loadImage("obstacle.png")
}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
   
  
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x);

  obstacleGroup = new Group();
  foodGroup = new Group();

  score = 0

}


function draw() {
  background("white")
  text("score :" + score, 30, 50)
  food();
  spawnObstacles();

  ground.x = ground.width / 2;

  if (keyDown("space")) {
    monkey.velocityY = -2
  }
monkey.velocityY=monkey.velocityY+0.5
monkey.collide(ground);

  
  
  
  
  drawSprites();

if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0
    monkey.velocityY=0
    obstacleGroup.setVelocityXEach(0)
  foodGroup.setVelocityXEach(0)
  obstacleGroup.setLifetimeEach(-1)
 foodGroup.setLifetimeEach(-1)
}

if(foodGroup.isTouching(monkey)){
   foodGroup.destroyEach();
    
  score=score+1
  
  
  
}






}

function food() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(600, 315, 20, 20)
    fruit.y = Math.round(random(120, 200));
    fruit.addImage(fruitImage, banana)
    foodGroup.add(fruit)
    fruit.scale = 0.1
    fruit.velocityX = -5
  fruit.lifetime=-2
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
     obstacles = createSprite(600, 330, 10, 40);
    obstacles.velocityX = -(6 + 3 * score / 100);


    obstacles.addImage(obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacles.scale = 0.1;
    obstacles.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacles);

  }


}