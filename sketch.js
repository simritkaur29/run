
function preload(){
  //pre-load images
  path=loadImage("path.png")
  run=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200)
  track.addImage("tt",path)
  track.scale=1.2
  track.velocityY=4

  runner=createSprite(200,300)
  runner.addAnimation("aa",run)
  runner.scale=0.1

  re=createSprite(0,2,1,4000)
  le=createSprite(399,4,2,4000)
  re.visible=false
  le.visible=false
}

function draw() {
  background(0);
  if(track.y>400){
    track.y=200
  }
  drawSprites()
  runner.collide(re)
  runner.collide(le)
  runner.x=mouseX
}
