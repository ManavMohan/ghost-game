var moving,fixed

var car1,car2






function setup() {
  createCanvas(800,400);
   
  fixed=createSprite(200,200,40,70)
  fixed.shapeColor="green"

  moving=createSprite(600,200,70,40)
  moving.shapeColor="green"

  car1=createSprite(100,100,40,40)
  car1.shapeColor="blue"

  car2=createSprite(600,100,40,40)
  car2.shapeColor="yellow"

  car1.velocityX=5
  car2.velocityX=-5
}

function draw() {
  background(0); 
  
  moving.x=mouseX;
  moving.y=mouseY;

  if(fixed.x-moving.x<=moving.width/2+fixed.width/2  && 
    moving.x-fixed.x<=fixed.width/2+moving.width/2  &&  
    fixed.y-moving.y<=moving.height/2+fixed.height/2  &&
    moving.y-fixed.y<=fixed.height/2+moving.height/2)
  {
    fixed.shapeColor="red"
    moving.shapeColor="red"
  }else{
    fixed.shapeColor="green"
    moving.shapeColor="green"
  }
  
  if(car1.x-car2.x<=car1.width/2+car2.width/2  && 
    car2.x-car1.x<=car2.width/2+car1.width/2){
      car1.velocityX=car1.velocityX*-1
      car2.velocityX=car2.velocityX*-1
    }
  
  drawSprites();
}