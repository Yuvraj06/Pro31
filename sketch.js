const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;



function setup() {
  createCanvas(480,800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(240,790,480,20);

  particle = new Particle(240,50);

  for(var j= 40;j <= width;j+=50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j=15;j<=width-10;j+=50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j= 40;j <= width;j+=50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j=15;j<=width-10;j+=50){
    plinkos.push(new Plinko(j,375));
  }

  for( i=0; i<=width;i=i+80){
    divisions.push(new Ground(i,height-divisionHeight/2,10,divisionHeight));
  }
  
}

function draw() {
  background(0);  
  var i;

  Engine.update(engine);  

  if(frameCount%30===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j = 0; j< plinkos.length;j++){
    plinkos[j].display();
  }
  for(var j = 0; j< divisions.length;j++){
    divisions[j].display();
  }
  for(var j = 0; j< particles.length;j++){
    particles[j].display();
  }


  ground.display();

  drawSprites();
}