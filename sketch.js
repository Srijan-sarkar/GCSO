var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);

  wall.shapeColour = colour(80,80,80);
}

function draw() {
  background(255,255,255);
  
  car.velocityX = speed;

   if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
       fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
       movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
       fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
     
        var deformation = (0.5*weight*speed*speed)/22500;
        car.velocityX = 0;

        if(deformation > 180){

            car.shapeColour = colour(255,0,0);

        }

        if(deformation < 180 && deformation > 100){

          car.shapeColour = colour(230,230,0);

      }

      if(deformation < 100){

        car.shapeColour = colour(0,255,0);

    }


   }

  drawSprites();
}