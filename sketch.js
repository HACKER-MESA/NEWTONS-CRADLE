
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 660);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(645, 120, 300, 50);

	bob1 = new Bob(530, 520, 30);
	bob2 = new Bob(590, 520, 30);
	bob3 = new Bob(650, 520, 30);
	bob4 = new Bob(710, 520, 30);
	bob5 = new Bob(770, 520, 30);

	rope1= new Rope(bob1.body,roof.body,-120,0);
  	rope2= new Rope(bob2.body,roof.body,-60,0);
  	rope3= new Rope(bob3.body,roof.body,0,0);
  	rope4= new Rope(bob4.body,roof.body,60,0);
  	rope5= new Rope(bob5.body,roof.body,120,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 22, 78);
  
roof.display();  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


  drawSprites();
 
}



