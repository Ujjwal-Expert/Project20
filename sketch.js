var car, wall;
var touch=false;

var weight=0

var speed = 0

var deformation= 0
function setup() {
  createCanvas(800,400);
  wall = createSprite(600,200,20,200);
  wall.shapeColor="grey"

  car = createSprite(200,200,50,30);
  car.shapeColor="grey";

  weight= random(1000,3000);
  speed = random(40,60);

  deformation=weight*speed*speed/45000;
  
}

function draw() {
  background("white");
  //car.x = World.mouseX;

  car.velocityX=speed;

  if(car.x-wall.x <= car.width/2 + wall.width/2&&
     wall.x-car.x<= car.width/2 + wall.width/2 ){
     touch=true;
  }
  
  if(keyWentDown("space")){
    car.velocityX=speed;
  }

  if(touch === true && deformation < 80){
    car.shapeColor="green";
    car.velocityX=0;
  }
  if(touch === true && deformation > 80 && deformation < 180){
    car.shapeColor="yellow";
    car.velocityX=0;
  }
  if(touch === true && deformation > 180){
    car.shapeColor="red";
    car.velocityX=0;
  }

  drawSprites();

}