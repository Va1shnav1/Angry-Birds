const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var pig1, pig2;
var bird;
var log1, log2;
var log3, log4;
var box1, box2, box3, box4, box5;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(500, 560, 70, 70, 180, 30, 47);
    box2 = new Box(700, 560, 70, 70, 69, 40, 50);
    box3 = new Box(500, 470, 70, 70, 180, 30, 47);
    box4= new Box(700, 470, 70, 70, 69, 40, 50);
    box5 = new Box(600, 380, 70, 70, 180, 30, 47);
    ground = new Ground(500, 580, 1000, 50);
    pig1 = new Pig(600, 560);
    log1 = new Log(600, 490, 280, PI/2);
    pig2 = new Pig(600, 470);
    log2 = new Log(600, 400, 280, PI/2);
    log3 = new Log(540, 300, 150, PI/7);
    log4 = new Log(660, 300, 150, PI/-7);
    bird = new Bird(150, 300);
}

function draw(){
    background(255);
    Engine.update(engine);

    //ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);
    
    fill("blue");
    box1.display();
    fill("yellow");
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}