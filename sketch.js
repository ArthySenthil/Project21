var object2,wall;
var speed, weight, thickness;
var damage;
function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(0,0,0);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="green";

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX = speed;
  damage =0;
}

function draw() {
  background(255,255,255);  

  if(isTouching(wall,bullet)){
    wall.shapeColor = "green";
    bullet.velocityX=0;
    damage= (0.5 * weight * speed * speed)/ thickness*thickness*thickness;
    if(damage > 10){
      wall.shapeColor = "red"; 
    }
     if(damage<=10){
      wall.shapeColor="green";
    }
    
    
  }
 
  drawSprites();


  
}
function isTouching(object1,object2){
  if(object1.x-object2.x < (object2.width+object1.width)/2 
  && object2.x-object1.x < (object2.width+object1.width)/2
  && object1.y-object2.y < (object2.height+object1.height)/2
  && object2.y-object1.y < (object2.height+object1.height)/2){
    return true;

    }
    else {
      return false;
    }
  
}