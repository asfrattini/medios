var tam = 0;
var op = 100;
var x = 0;
var y = 0;

var prop = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(0);

  //Estrellas titilando
  fill(255);
  noStroke();
  ellipse(random(0, width), random(0, width), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, width), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 2 * height / 207, 2 * height / 207);
  ellipse(random(0, width), random(0, height), 1 * height / 207, 1 * height / 207);
  ellipse(random(0, width), random(0, height), 1 * height / 207, 1 * height / 207);
  ellipse(random(0, width), random(0, height), 1 * height / 207, 1 * height / 207);
  ellipse(random(0, width), random(0, height), 1 * height / 207, 1 * height / 207);


  //Orbitas
  push();
  strokeWeight(random(0 * (height / 207), 0.3 * (height / 207)));
  stroke(255);
  noFill();
  ellipse(width / 2, height / 2, 500, 500);
  ellipse(width / 2, height / 2, 900, 900);
  ellipse(width / 2, height / 2, 1200, 1200);
  ellipse(width / 2, height / 2, 1500, 1500);

  pop();
  //Planetas
  push();
  rectMode(CENTER);
  fill(114, 68, 17);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 250));
  ellipse(0, 0, 20, 20);
  fill(220, 187, 135);
  translate(p5.Vector.fromAngle(millis() / 1000, 200));
  ellipse(0, 0, 30, 30);
  fill(48, 187, 222);
  translate(p5.Vector.fromAngle(millis() / 1000, 150));
  ellipse(0, 0, 30, 30);
  fill(230, 58, 24);
  translate(p5.Vector.fromAngle(millis() / 1000, 150));
  ellipse(0, 0, 25, 25);
  pop();



  //Sol
  push();
  fill(243, 174, 33);
  noStroke();
  ellipse(width / 2, height / 2, 80 * prop, 80 * prop);
  noFill();
  strokeWeight(5 * prop)
  stroke(243, 174, 33, 60);
  ellipse(width / 2, height / 2, 85 * prop, 85 * prop)
  stroke(243, 174, 33, 50);
  ellipse(width / 2, height / 2, 95 * prop, 95 * prop)
  stroke(243, 174, 33, 40);
  ellipse(width / 2, height / 2, 105 * prop, 105 * prop)
  stroke(243, 174, 33, 20);
  ellipse(width / 2, height / 2, 115 * prop, 115 * prop)
  stroke(243, 174, 33, 10);
  ellipse(width / 2, height / 2, 125 * prop, 125 * prop)
  pop();

  //Crecimiento del sol
  if (frameCount > 100 && frameCount < 150) {
    prop = 5;
  } else if (frameCount > 150 && frameCount < 200) {
    prop = 10;
  } else if (frameCount > 200 && frameCount < 250) {
    prop = 15;
  } else if (frameCount > 250 && frameCount < 300) {
    prop = 20;
  }

  //Marciano
  if (frameCount > 250) {
    beginShape();
    fill(93, random(0,255), 45);
    vertex((width / 2) - 215, (height / 2) + 164);
    vertex((width / 2) - 215, (height / 2) + 248);
    vertex((width / 2) - 48, (height / 2) + 248);
    vertex((width / 2) - 48, (height / 2) + 331);
    vertex((width / 2) - 215, (height / 2) + 331);
    vertex((width / 2) - 215, (height / 2) + 248);
    vertex((width / 2) - 299, (height / 2) + 248);
    vertex((width / 2) - 299, (height / 2) - 84);
    vertex((width / 2) - 383, (height / 2) - 84);
    vertex((width / 2) - 383, (height / 2) - 81);
    vertex((width / 2) - 299, (height / 2) - 81);
    vertex((width / 2) - 299, (height / 2) - 164);
    vertex((width / 2) - 215, (height / 2) - 164);
    vertex((width / 2) - 215, (height / 2) - 248);
    vertex((width / 2) - 132, (height / 2) - 248);
    vertex((width / 2) - 132, (height / 2) - 164);
    vertex((width / 2) + 133, (height / 2) - 164);
    vertex((width / 2) + 133, (height / 2) - 248);
    vertex((width / 2) + 216, (height / 2) - 248);
    vertex((width / 2) + 216, (height / 2) - 164);
    vertex((width / 2) + 300, (height / 2) - 164);
    vertex((width / 2) + 300, (height / 2) - 81);
    vertex((width / 2) + 383, (height / 2) - 81);
    vertex((width / 2) + 383, (height / 2) - 84);
    vertex((width / 2) + 299, (height / 2) - 84);
    vertex((width / 2) + 299, (height / 2) + 248);
    vertex((width / 2) + 215, (height / 2) + 248);
    vertex((width / 2) + 215, (height / 2) + 331);
    vertex((width / 2) + 48, (height / 2) + 331);
    vertex((width / 2) + 48, (height / 2) + 248);
    vertex((width / 2) + 215, (height / 2) + 248);
    vertex((width / 2) + 215, (height / 2) + 164);
    endShape();

    rect((width / 2) - 383, (height / 2) - 81, 84, 167);
    rect((width / 2) + 298, (height / 2) - 81, 84, 167);
    rect((width / 2) - 299, (height / 2) - 331, 83, 83);
    rect((width / 2) + 216, (height / 2) - 331, 83, 83);
    push();
    fill(0);
    rect((width / 2) - 215, (height / 2) - 81, 83, 83);
    rect((width / 2) + 133, (height / 2) - 81, 83, 83);
    pop();
    if (frameCount > 250 && frameCount < 300) {
      rect((width / 2) - 466, (height / 2) - 242, 83, 247);
      rect((width / 2) + 383, (height / 2), 83, 247);
    } else if (frameCount > 300 && frameCount < 320) {
      rect((width / 2) - 466, (height / 2), 83, 247);
      rect((width / 2) + 383, (height / 2) - 242, 83, 247);
    } else if (frameCount > 320 && frameCount < 340) {
      rect((width / 2) - 466, (height / 2) - 242, 83, 247);
      rect((width / 2) + 383, (height / 2), 83, 247);
    } else if (frameCount > 340 && frameCount < 360) {
      rect((width / 2) - 466, (height / 2), 83, 247);
      rect((width / 2) + 383, (height / 2) - 242, 83, 247);
    } else if (frameCount > 360 && frameCount < 380) {
      rect((width / 2) - 466, (height / 2) - 242, 83, 247);
      rect((width / 2) + 383, (height / 2), 83, 247);
    } else if (frameCount > 380 && frameCount < 400) {
      rect((width / 2) - 466, (height / 2), 83, 247);
      rect((width / 2) + 383, (height / 2) - 242, 83, 247);
    }
  }
  
  print(frameCount);


  if (frameCount < 400) {
    if (frameCount % 5 == 0) {
      //saveCanvas("miFlipbook" + frameCount + "jpg");
    }
  }
}
