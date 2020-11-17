
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1,dustbin2,dustbin3, ground, gameState="ready";
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 350);
	ground = new Ground(600, 590, 1200, 10)
	dustbin1 = new Dustbin(755, 530, 10, 100);
	dustbin2 = new Dustbin(850, 580, 200, 10);
	dustbin3 = new Dustbin(945, 530 , 10, 100)
	paper.debug=true

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
	background(0);
	
	
  if(gameState === "ready"){
		textSize(30);
		textStyle("bold")
		fill(255);
		text("Press the up arrow key", 450, 350);
	}if (gameState==="play"){
		textStyle("bold")
		textSize(30)
		fill(255,0,0)
		text("CONGRATULATIONS!🎉🎉🎉🎉🎉🎉🎉🎉🎉", 300, 300)
		text("You did it !", 480, 350)
		text("You cleaned the environment !", 400, 400)
	}
  paper.display()
	ground.display()
	dustbin1.display()
	dustbin3.display()
	dustbin2.display()

	if(keyDown('up') && gameState==="ready"){
		gameState="play"
		Matter.Body.applyForce(paper.body , paper.body.position,{x:50,y:-35})
		
		
	}

}



