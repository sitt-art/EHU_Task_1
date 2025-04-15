function setup() {
  createCanvas(400, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  frameRate(30);
}

function draw() {
  clear();
  background(255);

  let progress = frameCount * 10
  let centerX = 200
  let centerY = 200
  
  for (let i = 0; i < progress; i++) {
    let x = circlePointX(centerX, radians(2 * i), 0.1 * i)
    let y = circlePointY(centerY, radians(2 * i), 0.1 * i)
    
    strokeWeight(3);
    stroke(0)
    point(x, y)
    
    x = circlePointX(centerX, radians(2 * -i), 0.1 * i)
    y = circlePointY(centerY, radians(2 * -i), 0.1 * i)
    
    strokeWeight(3);
    stroke(200, 0, 200)
    point(x, y)
  }
}

function circlePointX(centerX, angle, radius) {
  return centerX + cos(angle) * radius;
}
function circlePointY(centerY, angle, radius) {
  return centerY + sin(angle) * radius;
}