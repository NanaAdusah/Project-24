
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paperObject, dustbinObj;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Creating the dustbin
	dustbinObj= new Dustbin(1200,650);

	//Create a Ground.
	ground = new Ground(width/2,670,width,20);
	 
	//Creating the paper
	paperObject = new paper(200,450,40);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();  
  dustbinObj.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}




