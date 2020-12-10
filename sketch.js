
var car,wall,thickness
var speed,weight




function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  speed =random(223,321)
  thickness =random(22,83)
  weight =random(30,52)
  car=createSprite(50,200,50,50)
  wall=createSprite(500,200,thickness,height/2)
 
 
}

function draw() {
  background(255,255,255);  
  car. velocityX = speed;
   
if (hascollided(car,wall)){
  car.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if (damage<10){
  car.shapeColor = "green";
  }
  if (damage>10){
    car.shapeColor = "red"
  }
  
   }

  drawSprites();
}







function hascollided(carl,walll){
bl = carl.x+carl.width;
wl = walll.x ;

if (bl>wl)
{
return true
}

return false
}

