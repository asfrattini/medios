function setup() {
  createCanvas(320, 207);
}

function draw() {
  background(0);


  //Estrellas titilando
  push();
  fill(255);
  noStroke();
  frameRate(15);
  ellipse(random(0, 320), random(0, 207), 3, 3);
  ellipse(random(0, 320), random(0, 207), 3, 3);
  ellipse(random(0, 320), random(0, 207), 3, 3);
  ellipse(random(0, 320), random(0, 207), 2, 2);
  ellipse(random(0, 320), random(0, 207), 2, 2);
  ellipse(random(0, 320), random(0, 207), 2, 2);
  ellipse(random(0, 320), random(0, 207), 1, 1);
  ellipse(random(0, 320), random(0, 207), 1, 1);
  ellipse(random(0, 320), random(0, 207), 1, 1);
	pop();
  
  //Sol
  fill(243, 174, 33);
  noStroke();
  ellipse(150, 100, 64, 50);
  //Difuminado del sol

  strokeWeight(5);
  noFill();
  stroke(243, 174, 33, 90);
  ellipse(150, 100, 70, 55);
  stroke(243, 174, 33, 70);
  ellipse(150, 100, 80, 65);
  stroke(243, 174, 33, 50);
  ellipse(150, 100, 90, 75);
  stroke(243, 174, 33, 30);
  ellipse(150, 100, 100, 85);

  //Orbitas planetas

  strokeWeight(random(0.3,  0.4));
  stroke(255);
  ellipse(160, 100, 150, 120);
  ellipse(170, 100, 180, 140);
  ellipse(180, 100, 210, 160);
  ellipse(190, 100, 240, 180);

  //Planeta
  rectMode(CENTER);
  translate(150, 100);

  for (var x=80;x<100;x++)
  {
  translate(p5.Vector.fromAngle(millis() / 1000, x));
  fill(255);
  noStroke();
  ellipse(0, 0, 15, 15);
  }
  }