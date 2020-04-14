let baby;
let babyImg;
let sawImg;
let sawImg2;
let bImg;
let saws = [];

function preload() {

  babyImg = loadImage('baby.png');
  sawImg = loadImage('Saw1.png');
  sawImg2 = loadImage('Saw2.png');
  bImg = loadImage('playground.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  baby = new Baby();
}



function keyPressed() {
  if (key == ' ') {
    baby.jump();
  }
}



function draw() {
  if (random(1) < 0.005) {
    saws.push(new Saw());
  }

  background(bImg);
  for (let s of saws) {
    s.move();
    s.show();
    s.show2();
    if (baby.hits(s)) {
      textSize(64);
      fill(255, 30, 53);
      text('game over', width / 3, height / 2);
      noLoop();
    }
  }


  baby.show();
  baby.move();
}
