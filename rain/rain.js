function Drop() {
  this.x = random(displayWidth);
  this.y = -random(displayHeight);
  this.z = random(5, 15);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.gravity = 1;
  this.fall = function () {
    this.y += this.yspeed;
  };

  this.show = function () {
    if (this.y > displayHeight) {
      this.y = -random(20);
    }
    strokeWeight(this.z / 4);
    stroke(62, 95, 163);
    line(this.x, this.y, this.x, this.y + 10);
  };
}


const drops = [];
let canvas;
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < random(500, 1000); i += 1) {
    drops[i] = new Drop();
  }
}
function draw() {
  background(29, 31, 35);
  for (let i = 0; i < drops.length; i += 1) {
    drops[i].fall();
    drops[i].show();
  }
}

window.onresize = function () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  resizeCanvas(w, h);
  width = w;
  height = h;
};
