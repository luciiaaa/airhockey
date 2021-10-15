var gameState = 0;
let speed = 3;
var score = 0
var img;
var bg1;
var bg2;
var bal;

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
    image(bal, this.x, this.y, this.h, this.w);
    this.x = this.x + this.vx
    this.y = this.y + this.vy



    if (this.x < 0 || this.x > width) {
      this.vx = this.vx * -1;
    }

    if (this.y < 0 || this.y > height) {
      this.vy = this.vy * -1;
    }
  }
}

var player1, player2, goal1, goal2

class Player {
  constructor(x, y, control) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 70;
    this.vx = 0;
    this.vy = 0;
    this.c = "green";
    this.control = control

  }

  drawPlayer() {
    fill(this.c);

    if (ball.x < this.x + this.w && ball.x + ball.w > this.x) {
      if (ball.y < this.y + this.h && ball.y + ball.y > this.y) {
        ball.vx = ball.vx * -1;

      }
    }



    this.x = mouseX
    this.y = mouseY
    rect(this.x, this.y, this.w, this.h);





  }
}

class Player2 {
  constructor(x, y, control2) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 70;
    this.vx = 0;
    this.vy = 0;
    this.c = "green";
    this.control = control2

  }

  drawPlayer2() {
    fill(this.c);

    if (ball.x < this.x + this.w && ball.x + ball.w > this.x) {
      if (ball.y < this.y + this.h && ball.y + ball.y > this.y) {
        ball.vx = ball.vx * -1;

      }
    }



    if (this.control = "m") {
      fill("green")
      rect(this.x, this.y, this.w, this.h);
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= 5;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }
      if (keyIsDown(UP_ARROW)) {
        this.y -= 5;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 5;
      }
    }
  }
}




class Goal {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 0;
    this.vy = 0;
    this.c = "green";

  }

  drawGoal() {
    fill('black')

    rect(this.x, this.y, this.w, this.h);

    if (ball.x < this.x + this.w && ball.x + ball.w > this.x) {
      if (ball.y < this.y + this.h && ball.y + ball.y > this.y) {


        ball.x = width / 2;
        ball.y = height / 2;


      }
    }
  }
}

function setup() {
  createCanvas(600, 400);
  ball = new Ball(100, 300, 20, 20, 3, 3);
  player1 = new Player(20, 200);
  player2 = new Player2(60, 340);
  goal1 = new Goal(0, 100, 20, 225);
  goal2 = new Goal(580, 100, 20, 225);
  img = loadImage('images/startmenu.png')
  bg1 = loadImage('images/gamebg.jpg')
  bal = loadImage('images/redball.png')
  bg2 = loadImage('images/instructiebg.jpg')
}

function draw() {

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    background(bg2)
    textSize(15)
    text('druk op rechter muisknop om terug bij menu te komen', 230, 50)
    textSize(20)
    text('1. Gebruik je muis om de balk te bewegen. ', 20, 175)
    text('2. Probeer de bal tegen te houden.', 20, 225)
    text('Als de bal langs in je goal komt heeft de tegenstander een punt.', 20, 275)
    text('3. Het spel is afgelopen als iemand 10 punten behaald.', 20, 325)
    if (mouseButton == RIGHT) {
      gameState = 0
    }
  }
  if (gameState == 4) {
    gameOver();
  }


}

function gameOver() {
  background("black");
  text("GAME OVER", 25, 45);
  x = 0;
  if (score1 == 10) {
    text("GAMEOVER"+ enter+"YOU WON PLAYER2 , YOU LOST PLAYER1", 25, 45)
    if (score2 == 10) {
      text("GAMEOVER"+ enter+"YOU WON PLAYER1 , YOU LOST PLAYER2")
    }
  }
}



function game() {
  background(bg1);

  player1.drawPlayer();
 

  player2.drawPlayer2();
 

  ball.drawBall();
 
  //Score
  fill("white");
  textSize(24);
  text("Score: " + score, 10, 25);
  text("Score: " + score, 490, 25);
  if (score > 10) {
    gameState == 4
  }

  if (mouseButton == RIGHT) {
    gameState = 0
  }

  goal1.drawGoal();
  goal2.drawGoal();

}

function menu() {
  background(img);
  b = 'purple'
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