var PLAY = 1;
var END = 0;
var gameState = PLAY;
var vill,ground;
var diamond , diaimg;
var lead,leadimg;
var villimg,bg,bgimg;
var score=0;
var bgi;
var diamgrp,monsgpr;
function preload(){
leadimg = loadImage("gamefl.png")
bgimg = loadImage("bg.jpg")
villimg = loadImage("yu.png")
diaimg = loadImage("dia.png")
}
function setup() {
  createCanvas(1000,650);
  bgi = createSprite(800,300,3000,20);
  lead = createSprite(256,530,20,40);
  ground = createSprite(800,670,1600,20);
  monsgrp = new Group();
  diamgrp = new Group();
lead.addImage(leadimg);
bgi.addImage(bgimg);
//lead.debug = true;
lead.setCollider("circle",0,120,40)
bgi.scale = 5;
bgi.velocityX = -2;
lead.scale = 0.6;
ground.visible = false;
}

function draw() {
 background("green");
 // console.log(lead.y);
  
  console.log(bgi.x)
  if (gameState===PLAY){
  if(bgi.x<530){
 bgi.x = 800;
}
 if(keyDown("space" )&& lead.y >= 546)
 {
   lead.velocityY = -24;
 }
 lead.velocityY = lead.velocityY + 0.8;
 lead.collide(ground);
spawnmonster();
spawndia();
if(diamgrp.isTouching(lead)){
  score++
}
if(monsgrp.isTouching(lead)){
  gameState = END;

}
  }
  else if (gameState === END) {
  
  
    
    //set velcity of each game object to 0
   // ground.velocityX = 0;
 
    monsgrp.setVelocityXEach(0);
    diamgrp.setVelocityXEach(0);
    
    //change the trex animation
   // trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
   // monsgrp.setLifetimeEach(-1);
    //diamgrp.setLifetimeEach(-1);
    monsgrp.destroyEach();
    diamgrp.destroyEach();
    bgi.velocityX = 0
    lead.velocityY = 0;
  }
    drawSprites();
    textSize(30);
    text("Score: "+ score, 500,50);
}

function spawnmonster(){
  if (frameCount % 90 === 0) {

vill = createSprite(1600,580,20,40);
//vill.debug = true;
vill.setCollider("circle",0,120,40)
vill.velocityX = -7;
vill.addImage("vil",villimg);
vill.scale = 0.5;
monsgrp.add(vill);
  }
}
function spawndia(){
  if (frameCount % 120 === 0) {
  diamond = createSprite(1600,100,20,20);
  diamond.y = Math.round(random(200,400));
  diamond.velocityX = -4;
  diamond.addImage(diaimg);
  diamond.scale = 0.4
  diamgrp.add(diamond);
  }
}