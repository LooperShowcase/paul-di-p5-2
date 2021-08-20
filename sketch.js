let img;
function preload() {
  img = loadImage("p5-paul.png");
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}
function draw() {
  background(img);

  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  push();
  rotate(90);
  stroke("#7FC8F8");
  strokeWeight(1);
  text("12", 0, -100);
  pop();

  push();
  rotate(90);
  stroke("#7FC8F8");
  strokeWeight(1);
  text("6", 0, 100);
  pop();

  push();
  rotate(90);
  stroke("#7FC8F8");
  strokeWeight(1);
  text("9", -100, 0);
  pop();

  push();
  rotate(90);
  stroke("#7FC8F8");
  strokeWeight(1);
  text("3", 100, 0);
  pop();

  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  stroke("red");
  strokeWeight(8);
  arc(0, 0, 300, 300, 0, secondAngle);

  push();
  rotate(secondAngle);
  stroke("red");
  line(0, 0, 90, 0);
  pop();

  noFill();
  let minuteAngle = map(mn, 0, 60, 0, 360);
  stroke("green");
  strokeWeight(8);
  arc(0, 0, 260, 260, 0, minuteAngle);

  push();
  rotate(minuteAngle);
  stroke("green");
  line(0, 0, 60, 0);
  pop();

  noFill();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  stroke("white");
  strokeWeight(8);
  arc(0, 0, 230, 230, 0, hourAngle);

  push();
  rotate(hourAngle);
  stroke("white");
  line(0, 0, 30, 0);
  pop();

  stroke("gray");
  strokeWeight(10);
  point(0, 0);
}
