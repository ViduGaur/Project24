
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,400,50,50); 
	ground = new Ground(400,650,800,100);	
	basket1 = new Basket(550,600,100,20);
	basket2 = new Basket(500,550,20,100);
	basket3 = new Basket(600,550,20,100);

	  Engine.run(engine)
	  Engine.update(engine)

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  basket1.display(); 
  basket2.display();
  basket3.display();
  drawSprites();
}
