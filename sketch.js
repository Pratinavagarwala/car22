var ob1,ob2,ob3,ob4;
var speed,weight;
var wall,deformation;

 function setup() {
  createCanvas(1600,400);

  ob1=createSprite(100,50,90,40);
  ob1.shapeColor="gold";

  ob2=createSprite(100,150,90,40);
  ob2.shapeColor="silver"; 

  ob3=createSprite(100, 250, 90, 40);
  ob3.shapeColor="pink";

  ob4= createSprite(100,350,90,40);
  ob4.shapeColor="blue";

  speed = random(55,90);
  weight = random(400,1500);
  
  wall = createSprite(1120,200,50,400);
  wall.shapeColor= "grey";
  

}

function draw() {
  background(0); 

  bounceoff(ob1,wall);
  bounceoff(ob2,wall);
  bounceoff(ob3,wall);
  bounceoff(ob4,wall);

  ob4.velocityX=speed;
  ob3.velocityX=speed;
  ob2.velocityX=speed;
  ob1.velocityX=speed;
  

   deformation=(0.5*weight*speed*speed)/22500;
   if(isTouching(ob4,wall)){
    ob4.velocityX= 0;
    
  }
  if(isTouching(ob3,wall)){
    ob3.velocityX= 0;
  }
  
  if(isTouching(ob2,wall)){
    ob2.velocityX=0;
  }
    
  if(isTouching(ob1,wall)){
    ob1.velocityX=0;
  }
  
  if(deformation<100){
  ob1.shapeColor="green";
  ob2.shapeColor="green";
  ob3.shapeColor="green";
  ob4.shapeColor="green";
  }else if(deformation>100<180){
    ob1.shapeColor="yellow";
    ob2.shapeColor="yellow";
    ob3.shapeColor="yellow";
    ob4.shapeColor="yellow";
  } else if(deformation>180){
    ob1.shapeColor="red";
    ob2.shapeColor="red";
    ob3.shapeColor="red";
    ob4.shapeColor="red";
   
  }

  drawSprites();
}














