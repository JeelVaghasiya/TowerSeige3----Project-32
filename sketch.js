const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2, ground;

var block1, block2, block3, block4, 
block5, block6, block7, block8, 
block9, block10, block11, block12, 
block13, block14, block15, block16;

var block17, block18, block19, block20,
block21, block22, block23, block24, block25;

var polygonObject, polygonImage;

var backgroundImg;
var slingShot;
var score = 0;

var bg = loadImage("sprites/day.jpg")

function preload() {
  polygonImage = loadImage("sprites/polygon.png");
  getBackgroundImg();

}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
  world = engine.world;

	rectMode(CENTER);

	Engine.run(engine);

	//Create the Bodies Here.
	stand1 = new Ground(490, 550, 315, 10, 172, 66, 67);
	stand2 = new Ground(940, 350, 235, 10, 172, 66, 67);

	ground = new Ground(width/2, 585, width, 10, 212, 175, 55);

	block1 = new Block(370, 540, "blue");
	block2 = new Block(410, 540, "blue");
	block3 = new Block(450, 540, "blue");
	block4 = new Block(490, 540, "blue");
	block5 = new Block(530, 540, "blue");
	block6 = new Block(570, 540, "blue");
	block7 = new Block(610, 540, "blue");
	block8 = new Block(410, 480, "pink");
	block9 = new Block(450, 480, "pink");
	block10 = new Block(490, 480, "pink");
	block11 = new Block(530, 480, "pink");
	block12 = new Block(570, 480, "pink");
	block13 = new Block(450, 420, "turquoise");
	block14 = new Block(490, 420, "turquoise");
	block15 = new Block(530, 420, "turquoise");
	block16 = new Block(490, 360, "grey");

	block17 = new Block(860, 340, "blue");
	block18 = new Block(900, 340, "blue");
	block19 = new Block(940, 340, "blue");
	block20 = new Block(980, 340, "blue");
	block21 = new Block(1020, 340, "blue");
	block22 = new Block(900, 280, "turquoise");
	block23 = new Block(940, 280, " turquoise");
	block24 = new Block(980, 280, "turquoise");
  block25 = new Block(940, 220, "pink");
  
  var options= {
    restitution:0.8,
    friction: 1.0,
    density: 2.0
  }

	polygonObject = Bodies.circle(100, 400, 25, options);
  World.add(world, polygonObject);

	slingShot = new SlingShot(this.polygonObject, {x:125, y:300});
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(35)
        fill("white")
        text("Score: " + score/10, 750, 40)
  rectMode(CENTER);
  
  //Stands display
  stand1.display();
  stand2.display();
  ground.display();

  //Blocks Set 1
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  

  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();

  //Blocks Set 2
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();

  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();

  block25.display();
  block25.score();

  imageMode(CENTER);
  image(polygonImage, polygonObject.position.x, polygonObject.position.y, 55, 55);

  slingShot.display();

  drawSprites();

  fill("white");
  textSize(20);
  text("Press Space To get Another Chance",20,20);

  console.log(score);
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygonObject, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode == 32) {
    slingShot.attach(polygonObject);
    Matter.Body.setPosition(polygonObject.body,{x:200,y:50})
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=6 && hour<=18){
      bg = "sprites/day.jpg";
  }
  else{
      bg = "sprites/night.jpg";
  }

  backgroundImg = loadImage(bg);
}
