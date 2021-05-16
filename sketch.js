var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var snow = [];
var bgImg;
var boy;

function preload() {
  bgImg = loadImage ("snow1.jpg");
  boy = loadImage ("boy.png");

}

function setup() {
  createCanvas(800,400);
  boy = createSprite (200,200,50,50);
}

function draw() {
  background(bgImg); 
  

      if(frameCount%10===0){
       snow.push(new Snow(random(0,800),20));

      }

      for (var s= 0; s < snow.length; s++) {
        snow[s].display();
      } 

      boy.display();
      drawSprites();
}