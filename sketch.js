var bullet,wall,thickness
var speed, weight

function setup() {
  speed=random(223,221)
 thickness=random(22,83)
  createCanvas(1600,400);
  weight=random(30,52)
  bullet = createSprite(50,200,50,50)
  wall=createSprite(1500,200,thickness,height/2)
  bullet.velocityX = speed;

  
  
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(hasCollided(bullet,wall))
  {
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage>10){
    wall.shapeColor="red"
  }


  if(damage<10){
    wall.shapeColor="green"
  }


  

  }
}
function hasCollided(p1,p2){
  if(p1.x+p1.width>=p2.x){
    return true 
  }
  return false
}