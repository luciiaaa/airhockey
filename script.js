var gameState = 0;
var cx, px, cy, py, cv, pv;

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

function setup() {
  createCanvas(600, 400);
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
  createCanvas(600, 400)

  cx = 20;
  cy = 200;
  cv = 2;
  px = 560;
  py = 200;
  pv = 2;

  ball1 = new Ball(0, 300, 20, 20, 5, 5)

  background(0);

  let a = color('green')
  rect(cx, cy, 20, 70);
  fill(a)
  cy = cy + cv


  if (cy < 0 || cy > 350) {
    cv = cv * -1;
  }


  rect(px, mouseY, 20, 70);
  fill(a)
  py = py + pv

  if (py < 0 || py > 350) {
    pv = pv * -1;
  }

  ball1.drawBall();

  if (mouseButton == RIGHT) {
    gameState = 0
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