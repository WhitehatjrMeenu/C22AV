const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

// namespacing 
















var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  //  ball.x=200; ball.y=300;ball.shapeColor="red"


   //  JSON Format ---  Java Scriot Object Notation

  var ground_options= { isStatic: true}


    ground=Bodies.rectangle(200,380,20,20,ground_options);

    World.add(world,ground);

    console.log(ground);

    var box1_options= { restitution : 1.0,friction :1.0, density : 1.2}

    box1=Bodies.rectangle(200,100,20,20,box1_options);

    World.add(world,box1);

    var box2_options= { restitution : 1.0,friction :1.0, density : 1.2}

    box2=Bodies.rectangle(190,200,20,20,box2_options);

    World.add(world,box2);


/*var options = { restitution:1, density :2.0, friction :1.0}

  ball=Bodies.circle(200,200,20,options);

  World.add(world,ball);*/












   /* var object_options ={
        isStatic: true
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

   


    console.log(object);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);

    fill("red");
    rect(box1.position.x,box1.position.y,50,50);
    rect(box2.position.x,box2.position.y,50,50);
    /*ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);*/
}
