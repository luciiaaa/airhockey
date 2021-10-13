var gameState = 0;


let directionX = 1.5;
let directionY = 1;
let paddle_width = 20;
let paddle_height = 70;
let ball_x = 100;
let ball_y = 100;
let speed = 3;
let score = 0

class Ball {
  constructor(x, y, h, w, vx, vy) {
    this.x = x
    this.y = y
    this.h = h
    this.w = w
    this.vx = vx
    this.vy = vy
  }

  drawBall() {
    ellipse(this.x, this.y, this.h, this.w);
    this.x = this.x + this.vx
    this.y = this.y + this.vy


    if (this.x < 0 || this.x > 600) {
      this.vx = this.vx * -1;
    }

    if (this.y < 0 || this.y > 400) {
      this.vy = this.vy * -1;
    }
  }
}

var player1, player2
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 70;
    this.vx = 0;
    this.vy = 0;
    this.c = "green";

  }

  drawPlayer() {
    fill(this.c)
    this.x = mouseX;
    this.y = mouseY;
    rect(mouseX, mouseY, this.w, this.h);

    //console.log(ball_x, this.x, this.w);

    if(ball_x < this.x + this.w && ball_x + 20 > this.x){ 
      if(ball_y < this.y + this.h && ball_y + 70 > this.y)
       directionX = -directionX
       directionY = -directionY
       score++;

      
     
      
    }
    


    // if (ball_y < paddle_height && ball_x > mouseX - this.w / 2 &&
    //   ball_x < mouseX + this.h / 2) {
    //   directionX = -directionX
    // }

    // this.y = this.y + this.vx


    // if (this.y < 0 || this.y > 350) {
    //   this.vx = this.vx * -1;
    // }

  }
}

function setup() {
  createCanvas(600, 400);
  ball1 = new Ball(100, 300, 20, 20, 5, 5);
  player1 = new Player(20, 200);
  //player2 = new Player(550, 20);
}

function draw() {

  if (gameState == 0) {
    menu();
  }


  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    background(0)
    textSize(15)
    text('druk op rechter muisknop om terug bij menu te komen', 230, 50)
    textSize(20)
    text('1. Gebruik je muis om de balk te bewegen. ', 20, 175)
    text('2. Probeer de bal tegen te houden.', 20, 225)
    text('Als de bal langs je balk komt heeft de tegenstander een punt.', 20, 275)
    text('3. Het spel is afgelopen als iemand 10 punten behaald.', 20, 325)
    if (mouseButton == RIGHT) {
      gameState = 0
    }
  }
}

function game() {
  background(0);
  

  ball1.drawBall();
  player1.drawPlayer();
  ballBounce();
  //Score
  fill("black");
  textSize(24);
  text("Score: " + score, 10, 25);
  
  if (mouseButton == RIGHT) {
    gameState = 0
  }
}

function ballBounce() {

  ellipse(ball_x, ball_y, 20, 20);
  ball_x += directionX * speed;
  ball_y += directionY * speed;

  if (ball_x >= width || ball_x <= 0) {
    directionX = -directionX
  }

  if (ball_y >= height || ball_y <= 4) {
    directionY = -directionY
  }
}

function menu() {
  background(255);
  b = 'green'
  fill(b);
  rect(50, 50, 200, 75);
  fill(b);
  rect(50, 200, 200, 75);
  textSize(30)
  a = 'white'
  fill(a);
  text('start', 70, 96);
  text('instructions', 70, 246);


  if (mouseButton == RIGHT) {
    gameState = 0;
  }
}

function mouseClicked() {
  if (gameState == 0) {
    if (mouseX < 200 && mouseX > 50) {
      if (mouseY < 125 && mouseY > 50) {
        gameState = 1
      }
      if (mouseY < 275 && mouseY > 200) {
        gameState = 2
      }
    }
  }
}