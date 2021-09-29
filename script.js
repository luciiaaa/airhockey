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
	createCanvas(600, 400)

  cx = 20;
  cy = 200;
  cv = 2;
  px = 560;
  py = 200;
  pv = 2;

  ball1 = new Ball(0, 300, 20, 20, 5, 5)
}

function draw() {
	background(0);

  let a = color('green')
  rect(cx, cy, 20, 70);
  fill(a)
  cy = cy + cv
 

  if(cy < 0 || cy > 350) {
   cv = cv * -1;
  }


  rect(px, mouseY, 20, 70);
  fill(a)
  py = py + pv

  if(py < 0 || py > 350) {
   pv = pv * -1;
  }
  ball1.drawBall()

}
