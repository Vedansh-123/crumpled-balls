
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,680,800,20)
paper=new Ball(160,200,60)

dustbin3=new Dustbin(500,600,150,150)
	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  
ground1.display();
paper.display();

dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-45})
	}
}


