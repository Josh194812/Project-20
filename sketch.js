var car, wall, speed, weight
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,canvas.height/2);
  car.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(wall.x-car.x <= car.width/2+wall.width/2){

    car.velocityX=0;
    car.x=1445;
    var deformation=0.5*speed*speed*weight/22500;
    console.log(deformation);
    if(deformation>=180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<=100){
      car.shapeColor="green";
    }
  }
  
  drawSprites();
}
