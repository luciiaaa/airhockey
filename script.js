 var x, y, v, z;
  

function setup() {
	createCanvas(600, 400);

  x = 55;
  y = 200;
  v = 5;
  z= 5;

}

function draw() {
	background(225);
  
  ellipse(x,y,10,10);
  x = x + v;
  y = y + z;

  

  if(x <= 0 || x > 600){
    v = v * -1;
  }

 if(y <= 0 || y > 400){
    z = z * -1;
 }
  
  

}
	
