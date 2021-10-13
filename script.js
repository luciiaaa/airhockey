var gameState = 0;
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
    rect(this.x, this.y, this.h, this.w);
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


    if (ball.x < this.x + this.w && ball.x + ball.w > this.x) {
      if (ball.y < this.y + this.h && ball.y + ball.y > this.y) {
        ball.vx = ball.vx * -1;
        score++;
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
    fill(this.c)

    rect(this.x, this.y, this.w, this.h);

    if (ball.x < this.x + this.w && ball.x + ball.w > this.x) {
      if (ball.y < this.y + this.h && ball.y + ball.y > this.y) {
        score--;
        ball.x = width / 2;
        ball.y = height / 2;
      }
    }
  }
}

function setup() {
  createCanvas(600, 400);
  ball = new Ball(100, 300, 20, 20, 5, 5);
  player1 = new Player(20, 200);
  //player2 = new Player(550, 20);
  goal1 = new Goal (0,150, 20, 150 );
  goal2 = new Goal (580, 150, 20, 150 );
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

  player1.drawPlayer();
  ball.drawBall();
  //ballBounce();
  //Score
  fill("white");
  textSize(24);
  text("Score: " + score, 10, 25);

  if (mouseButton == RIGHT) {
    gameState = 0
  }

  goal1.drawGoal();
  goal2.drawGoal();

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