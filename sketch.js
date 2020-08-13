const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2, b3, b4, b5;
var p1, p2;
var l1, l2, l3, l4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    b1 = new Box(750,250,50,50);
    b2 = new Box(950,250,50,50);
    b3 = new Box(750,200,50,50);
    b4 = new Box(950,200,50,50);
    b5 = new Box(850,155,50,50);

    ground = new Ground(600,height,2400,20)

    p1 = new Pig(850,250);
    p2 = new Pig(850,205);

    l1 = new Log(850,225,300,PI/2);
    l2 = new Log(850,175,300,PI/2);
    l3 = new Log(775,150,125,PI/3);
    l4 = new Log(925,150,125,PI/-3);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(b2.body.position.x);
    //console.log(b2.body.position.y);
    //console.log(b2.body.angle);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();

    ground.display();

    p1.display();
    p2.display();

    l1.display();
    l2.display();
    l3.display();
    l4.display();
}