const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Ground(390, 310, 180, 10);

  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(360, 235, 30, 40);
  block3 = new Box(390, 235, 30, 40);
  block4 = new Box(420, 235, 30, 40);
  block5 = new Box(450, 235, 30, 40);

  block6 = new Box(360, 195, 30, 40);
  block7 = new Box(390, 195, 30, 40);
  block8 = new Box(420, 195, 30, 40);

  block9 = new Box(390, 155, 30, 40);

  s2 = new Ground(640, 250, 180, 10);

  b1 = new Box(580, 235, 30, 40);
  b2 = new Box(610, 235, 30, 40);
  b3 = new Box(640, 235, 30, 40);
  b4 = new Box(670, 235, 30, 40);
  b5 = new Box(700, 235, 30, 40);

  b6 = new Box(610, 195, 30, 40);
  b7 = new Box(640, 195, 30, 40);
  b8 = new Box(670, 195, 30, 40);

  b9 = new Box(640, 155, 30, 40);

  var poly_options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
  polygon = Bodies.rectangle(180, 120, 50, 50, poly_options);
  World.add(world, polygon);
  slingshot = new SlingShot(polygon, {x: 180, y: 120});
}

function draw() {
  background(0);
  Engine.update(engine);
  stand1.display();
  s2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  slingshot.display();
  rect(polygon.position.x, polygon.position.y, 50, 50);
}

function mouseDragged(){
    Matter.Body.position = polygon.body, {x: mouseX , y: mouseY};
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}