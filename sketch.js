var hr;
var min;
var sec;


function setup() {
  createCanvas(800,800);
  
}

function draw() {
  background(255,255,255);
  ellipse(400, 400, 600, 600);
translate(400, 400)
rotate(-90);

hr= hour();
min= minute();
sec=second();

hrAngle=map(hr%12, 0, 12, 0, 360)
minAngle=map(min, 0, 60, 0, 360)
secAngle=map(sec, 0, 60, 0, 360)

push();
rotate(secAngle)
stroke("green")
strokeWeight(4)
line(0, 0, 250, 0)
pop();

push();
rotate(minAngle)
stroke("cyan")
strokeWeight(4)
line(0, 0, 220, 0)
pop();

push();
rotate(hrAngle)
stroke("blue")
strokeWeight(4)
line(0, 0, 150, 0)
pop();
}
