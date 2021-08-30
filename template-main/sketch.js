var astronot,astronotimg;
var spaceship,soaceshipimg;
var sleep,bath,brush,eat,exercise,drink,move;



function preload(){
spaceshipimg = loadImage("/images/spaceship.jpg")
sleep=loadAnimation("/images/sleep.png")
bath=loadAnimation("/images/bath1.png","/images/bath2.png")
brush=loadAnimation("/images/brush.png")
eat=loadAnimation("/images/eat1.png","/images/eat2.png")
exercise=loadAnimation("/images/gym1.png","/images/gym2.png","/images/gym11.png","/images/gym12.png")
drink=loadAnimation("/images/drink1.png","/images/drink2.png")
move=loadAnimation("/images/move.png","/images/move1.png")


}





function setup() {
  
  
  createCanvas(500, 500);

  spaceship = createSprite(250,250,500,500)
  spaceship.addImage("spaceshipimg",spaceshipimg)
  spaceship.scale=2
  
  
  astronot = createSprite(300,230)
  astronot.addAnimation("sleep",sleep);
  astronot.scale=0.1
}


function draw() {
 
  background(220);

 if(keyDown("UP_ARROW")){
 astronot.addAnimation("brush",brush)
 astronot.changeAnimation("brush");
 astronot.y = 350
 astronot.velocityX = 0;
 astronot.velocityY=0;
 }

 if(keyDown("DOWN_ARROW")){
  astronot.addAnimation("exercise",exercise)
  astronot.changeAnimation("exercise");
  astronot.y = 350
  astronot.velocityX = 0;
  astronot.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronot.addAnimation("bath",bath)
    astronot.changeAnimation("bath");
    astronot.y = 350
    astronot.velocityX = 0;
    astronot.velocityY=0;
    }

    if(keyDown("RIGHT_ARROW")){
      astronot.addAnimation("eat",eat)
      astronot.changeAnimation("eat");
      
      astronot.y = 350
      astronot.velocityX = 0;
      astronot.velocityY=0;
      }

    
      if(keyDown("m")){
        astronot.addAnimation("move",move)
        astronot.changeAnimation("move");
        astronot.y = 350
        astronot.velocityX = 5;
       astronot.velocityY=5;
        }
  drawSprites()



}