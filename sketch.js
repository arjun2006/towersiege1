const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(600,height,1200,20);
  platform = new Ground(700, 320, 300, 20);
  box= new Box(650,290,50,50);
  box2= new Box(710,290,50,50);
  box3=new Box(680,240,50,50)
  striker=new Striker(200,240,25,25);
  slingshot = new Slingshot(striker.body,{x:200, y:240});
}
function draw() {
  background(255,255,255);  
  


  ground.display();
  platform.display();
  box.display();
  box2.display();
  box3.display();
  striker.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}