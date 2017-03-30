const fd = {
  width: 150,
  height: 0,
};

fd.height = fd.width * 2;

function Flame() {
  this.x = window.innerWidth / 2;
  this.y = (window.innerHeight / 2) - 20;
  this.width = fd.width;
  this.height = fd.height;
  this.resize = function () {
    this.x = window.innerWidth / 2;
    this.y = (window.innerHeight / 2) - 20;
  };
  this.flicker = function () {

  };
  this.show = function (transValue) {
    fill(249, 168, 37);
    strokeWeight(0);
    // outer flame
    ellipse(this.x, this.y, this.width, this.height * 1.2);
    fill(255, 235, 59);
    // inner flame
    ellipse(this.x, this.y + 10 + (this.height / 6), this.width * 0.66, this.height * 0.8);
  };
  this.overlay = function () {
    fill(255, 2, 59, 0.3);
    ellipse(this.x, this.y, this.width, this.height);
  };
}

function Match() {
  this.x = window.innerWidth / 2;
  this.y = (window.innerHeight / 2) + 18;

  this.resize = function () {
    this.x = window.innerWidth / 2;
    this.y = (window.innerHeight / 2) + 18;
  };
  this.show = function () {
    const x = this.x;
    const y = this.y;
    fill(93, 64, 55);
    // matchstick
    rect(x - (fd.width / 6), y + 50, fd.width / 3, y + 10, 5);
    // matchhead
    fill(84, 110, 122);
    // base trapezoid
    quad(x - 40, y + 20, x + 40, y + 20, x + 30, y + 100, x - 30, y + 100);
    // round tip
    arc(x, y + 20, 80, 85, 360, 20, OPEN);
  };
}

let flame;
let match;
function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  flame = new Flame();
  match = new Match();
}

function draw() {
  background(38, 50, 56);
  flame.show();
  match.show();
}

window.onresize = function () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  resizeCanvas(w, h);
  flame.resize();
  match.resize();
};
