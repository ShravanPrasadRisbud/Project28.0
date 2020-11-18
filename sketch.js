const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, boy, stone, ground, mango1, mango2, mango3, mango4, mango5, mango6;

function preload()
{
	boy = loadImage("Boy.png");
	tree = loadImage("Tree.png");
}

function setup() {
	var canvas = createCanvas(800, 700);

	ground = new Ground(600,height,800,20);

	tree = createSprite(650,570,400,500);

	launcher = new launcher({x:200,y:100});

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.create(options);
  background("red");

  ground.display();
  tree.display();
  launcher.display();
  
  drawSprites();
 
}



