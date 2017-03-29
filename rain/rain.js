function Drop() {
  this.x = random(displayWidth);
  this.y = -random(displayHeight);
  this.z = random(5, 15);
  this.length = random(4, 15);
  this.yspeed = map(this.z, 0, 20, 1, 20);
  this.fall = function () {
    this.y = this.y + this.yspeed;
    const grav = map(this.z, 0, 20, 0, 0.4);
    this.yspeed = this.yspeed + grav;

    if (this.y > displayHeight) {
      this.y = -random(displayHeight);
      this.yspeed = 0;
    }
  };

  this.show = function () {
    strokeWeight(this.z / 4);
    switch (round(random(50))) {
      case 48:
        stroke(177, 191, 218);
        break;
      case 49:
        stroke(235, 239, 245);
        break;
      default:
        stroke(62, 95, 163);
    }
    line(this.x, this.y, this.x, this.y + this.length);
  };
}

const drops = [];
let canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < random(1000, 1500); i += 1) {
    drops[i] = new Drop();
  }
}
function draw() {
  background(12, 12, 12);
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
