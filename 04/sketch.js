//BOTONES HERRAMIENTAS

//Boton 1
var posXbot1 = 20;
var posYbot1 = 20;
var tamBot1 = 40;

//Boton 2
var posXbot2 = 60;
var posYbot2 = 20;
var tamBot2 = 40;

//Boton 3
var posXbot3 = 100;
var posYbot3 = 20;
var tamBot3 = 40;

//Boton 4
var posXbot4 = 140;
var posYbot4 = 20;
var tamBot4 = 40;

//Boton 5
var posXbot5 = 180;
var posYbot5 = 20;
var tamBot5 = 40;

//Boton 6
var posXbot6 = 220;
var posYbot6 = 20;
var tamBot6 = 40;

//Boton 7
var posXbot7 = 260;
var posYbot7 = 20;
var tamBot7 = 40;

//Boton 8
var posXbot8 = 300;
var posYbot8 = 20;
var tamBot8 = 40;

//Boton 9
var posXbot9 = 340;
var posYbot9 = 20;
var tamBot9 = 40;

//Boton 10
var posXbot10 = 380;
var posYbot10 = 20;
var tamBot10 = 40;

//BOTONES COLORES


//Boton 1 color
var posXbotcol1 = 960;
var posYbotcol1 = 20;
var tamBotcol1 = 20;

//Boton 2 color 
var posXbotcol2 = 940;
var posYbotcol2 = 20;
var tamBotcol2 = 20;

//Boton 3 color
var posXbotcol3 = 920;
var posYbotcol3 = 20;
var tamBotcol3 = 20;

//Boton 4 color
var posXbotcol4 = 900;
var posYbotcol4 = 20;
var tamBotcol4 = 20;

//Boton 5 color
var posXbotcol5 = 880;
var posYbotcol5 = 20;
var tamBotcol5 = 20;

//Boton 6 color
var posXbotcol6 = 860;
var posYbotcol6 = 20;
var tamBotcol6 = 20;

//Boton 7 color
var posXbotcol7 = 840;
var posYbotcol7 = 20;
var tamBotcol7 = 20;

//Boton 8 color
var posXbotcol8 = 820;
var posYbotcol8 = 20;
var tamBotcol8 = 20;

//Boton 9 color
var posXbotcol9 = 800;
var posYbotcol9 = 20;
var tamBotcol9 = 20;

//Boton 10 color
var posXbotcol10 = 780;
var posYbotcol10 = 20;
var tamBotcol10 = 20;

//BOTON BORRAR

var posXborrar = 20;
var posYborrar = 960;
var tamBorrar = 40;



//Herramienta seleccionada
var herSelec = 0;

//Color seleccionado
var colSelec = 0;

function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {

  //Rectangulo herramientas
  noStroke();
  fill(233);
  rect(0, 0, width, 80);
  rect(0, height - 60, width, 60);

  //Titulos
  textSize(18);
  fill(0);
  noStroke();
  text("HERRAMIENTAS", 20, 18);
  text("COLORES", 780, 18);
  text("BORRAR CANVAS", posXborrar + tamBorrar + 5, posYborrar + (tamBorrar / 2));

  // Boton borrar
  fill(255, 0, 0);
  stroke(0);
  rect(posXborrar, posYborrar, tamBorrar, tamBorrar / 2);

  //Botones Herramientas
  push();
  fill(220);
  stroke(0);

  rect(posXbot1, posYbot1, tamBot1, tamBot1);
  line(posXbot1 + 20, posYbot1 + 20, 25, 25);
  line(posXbot1 + 20, posYbot1 + 20, 55, 25);
  line(posXbot1 + 20, posYbot1 + 20, 40, 25);
  line(posXbot1 + 20, posYbot1 + 20, 32, 25);
  line(posXbot1 + 20, posYbot1 + 20, 48, 25);

  rect(posXbot2, posYbot2, tamBot2, tamBot2);
  line(posXbot2 + 5, posYbot2 + 10, posXbot2 + 10, posYbot2 + 5);
  line(posXbot2 + 5, posYbot2 + 15, posXbot2 + 15, posYbot2 + 5);
  line(posXbot2 + 5, posYbot2 + 20, posXbot2 + 20, posYbot2 + 5);
  line(posXbot2 + 5, posYbot2 + 25, posXbot2 + 25, posYbot2 + 5);
  line(posXbot2 + 5, posYbot2 + 30, posXbot2 + 30, posYbot2 + 5);

  rect(posXbot3, posYbot3, tamBot3, tamBot3);
  line(posXbot3, posYbot3, posXbot4 - 5, posYbot2 + 5)
  line(posXbot3, posYbot3, posXbot4 - 10, posYbot2 + 10)
  line(posXbot3, posYbot3, posXbot4 - 15, posYbot2 + 15)
  line(posXbot3, posYbot3, posXbot4 - 20, posYbot2 + 20)
  line(posXbot3, posYbot3, posXbot4 - 25, posYbot2 + 25)
  line(posXbot3, posYbot3, posXbot4 - 30, posYbot2 + 30)
  line(posXbot3, posYbot3, posXbot4 - 35, posYbot2 + 35)

  rect(posXbot4, posYbot4, tamBot4, tamBot4);
  line(posXbot4 + 5, posYbot4 + 20, posXbot4 + 35, posYbot4 + 20)
  line(posXbot4 + 20, posYbot4 + 5, posXbot4 + 20, posYbot4 + 35)
  line(posXbot4 + 6, posYbot4 + 6, posXbot4 + 34, posYbot4 + 34)
  line(posXbot4 + 34, posYbot4 + 6, posXbot4 + 6, posYbot4 + 34)
  line(posXbot4 + 26, posYbot4 + 5, posXbot4 + 14, posYbot4 + 34)
  line(posXbot4 + 13, posYbot4 + 5, posXbot4 + 26, posYbot4 + 34)

  rect(posXbot5, posYbot5, tamBot5, tamBot5);
  quad(posXbot5 + 5, posYbot5 + 5, posXbot5 + 20, posYbot5 + 5, posXbot5 + 5, posYbot5 + 20)
  quad(posXbot5 + 12, posYbot5 + 12, posXbot5 + 27, posYbot5 + 12, posXbot5 + 12, posYbot5 + 27);

  rect(posXbot6, posYbot6, tamBot6, tamBot6);
  noFill();
  arc(posXbot6 + 35, posYbot6 + 35, 10, 10, PI, (3 * PI) / 2);
  arc(posXbot6 + 35, posYbot6 + 35, 25, 25, PI, (3 * PI) / 2);
  arc(posXbot6 + 35, posYbot6 + 35, 40, 40, PI, (3 * PI) / 2);
  arc(posXbot6 + 35, posYbot6 + 35, 55, 55, PI, (3 * PI) / 2);

  rect(posXbot7, posYbot7, tamBot7, tamBot7);
  ellipse(posXbot7 + 20, posYbot7 + 20, 30, 30)
  line(posXbot7 + 20, posYbot7 + 20, posXbot7 + 20, posYbot7 + 4.6)
  line(posXbot7 + 20, posYbot7 + 20, posXbot7 + 9, posYbot7 + 30)
  line(posXbot7 + 20, posYbot7 + 20, posXbot7 + 30, posYbot7 + 30)

  rect(posXbot8, posYbot8, tamBot8, tamBot8);
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 5, posYbot8 + 5)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 10, posYbot8 + 10)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 15, posYbot8 + 15)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 20, posYbot8 + 20)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 25, posYbot8 + 25)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 30, posYbot8 + 30)
  line(posXbot8 + 40, posYbot8 + 40, posXbot9 - 35, posYbot8 + 35)

  rect(posXbot9, posYbot9, tamBot9, tamBot9);
  quad(posXbot9 + 4, posYbot9 + 4, posXbot9 + 4, posYbot9 + 37, posXbot9 + 37, posYbot9 + 4, posXbot9 + 37, posYbot9 + 37)
  quad(posXbot9 + 10, posYbot9 + 5, posXbot9 + 30, posYbot9 + 5, posXbot9 + 10, posYbot9 + 35, posXbot9 + 30, posYbot9 + 35)

  rect(posXbot10, posYbot10, tamBot10, tamBot10);
  fill(0);
  ellipse(posXbot10 + 10, posYbot10 + 20, 5, 5);
  ellipse(posXbot10 + 20, posYbot10 + 20, 5, 5);
  ellipse(posXbot10 + 30, posYbot10 + 20, 5, 5);

  //Botones Colores

  fill(random(0, 255), 0, 0);
  rect(posXbotcol1, posYbotcol1, tamBotcol1, tamBotcol1);
  fill(0, random(0, 255), 0);
  rect(posXbotcol2, posYbotcol2, tamBotcol2, tamBotcol2);
  fill(0, 0, random(0, 255));
  rect(posXbotcol3, posYbotcol3, tamBotcol3, tamBotcol3);
  fill(154, 144, 244);
  rect(posXbotcol4, posYbotcol4, tamBotcol4, tamBotcol4);
  fill(57, 255, 203);
  rect(posXbotcol5, posYbotcol5, tamBotcol5, tamBotcol5);
  fill(100, 50, 100);
  rect(posXbotcol6, posYbotcol6, tamBotcol6, tamBotcol6);
  fill(200, 200, 10);
  rect(posXbotcol7, posYbotcol7, tamBotcol7, tamBotcol7);
  fill(0, 0, 255);
  rect(posXbotcol8, posYbotcol8, tamBotcol8, tamBotcol8);
  fill(0, 255, 0);
  rect(posXbotcol9, posYbotcol9, tamBotcol9, tamBotcol9);
  fill(255, 0, 0);
  rect(posXbotcol10, posYbotcol10, tamBotcol10, tamBotcol10);


  if (mouseIsPressed) {

    //Posibles colores

    if (colSelec == 1) {
      fill(random(0, 255), 0, 0);
      stroke(random(0, 255), 0, 0);
    } else if (colSelec == 2) {
      fill(0, random(0, 255), 0);
      stroke(0, random(0, 255), 0);
    } else if (colSelec == 3) {
      fill(0, 0, random(0, 255));
      stroke(0, 0, random(0, 255));
    } else if (colSelec == 4) {
      fill(154, 144, 244);
      stroke(154, 144, 244);
    } else if (colSelec == 5) {
      fill(57, 255, 203);
      stroke(57, 255, 203);
    } else if (colSelec == 6) {
      fill(100, 50, 100);
      stroke(100, 50, 100);
    } else if (colSelec == 7) {
      fill(200, 200, 10);
      stroke(200, 200, 10);
    } else if (colSelec == 8) {
      fill(0, 0, 255);
      stroke(0, 0, 255);
    } else if (colSelec == 9) {
      fill(0, 255, 0);
      stroke(0, 255, 0);
    } else if (colSelec == 10) {
      fill(255, 0, 0);
      stroke(255, 0, 0);
    }

    //Posibles herramientas
    if (mouseY > 60 && mouseY < height - 40) {
      if (herSelec == 1) {
        line(width / 4, height / 4, mouseX, mouseY);
      } else if (herSelec == 2) {
        line(mouseX, mouseY, mouseY, mouseX);
      } else if (herSelec == 3) {
        line(mouseX, mouseY, 0, 60);
      } else if (herSelec == 4) {
        line(mouseX, mouseY, width - mouseX, height - mouseY);
      } else if (herSelec == 5) {
        beginShape();
        vertex(mouseX, mouseY);
        vertex(mouseX + 20, mouseY);
        vertex(mouseX + 10, mouseY + 10);
        vertex(mouseX + 30, mouseY + 10);
        vertex(mouseX + 10, mouseY + 30);
        vertex(mouseX + 10, mouseY + 10);
        vertex(mouseX, mouseY + 20);
        endShape(CLOSE);
      } else if (herSelec == 6) {
        push();
        noFill();
        arc(mouseX, mouseY, 20, 20, PI, (3 * PI) / 2);
        arc(mouseX, mouseY, 40, 40, PI, (3 * PI) / 2);
        arc(mouseX, mouseY, 60, 60, PI, (3 * PI) / 2);
        arc(mouseX, mouseY, 80, 80, PI, (3 * PI) / 2);
        pop();
      } else if (herSelec == 7) {
        stroke(0);
        ellipse(mouseX, mouseY, 40, 40);
        line(mouseX, mouseY, mouseX, mouseY - 20);
        line(mouseX, mouseY, mouseX + 12, mouseY + 14);
        line(mouseX, mouseY, mouseX - 12, mouseY + 14);
      } else if (herSelec == 8) {
        line(mouseX, mouseY, width, height - 60);
      } else if (herSelec == 9) {
        stroke(0);
        quad(mouseX, mouseY, mouseX, mouseY + 75, mouseX + 75, mouseY, mouseX + 75, mouseY + 75)
        quad(mouseX + 16, mouseY + 6, mouseX + 60, mouseY + 6, mouseX + 16, mouseY + 70, mouseX + 60, mouseY + 70)
      } else if (herSelec == 10) {
        ellipse(mouseX, mouseY, 20, 20);
        ellipse(mouseX + 40, mouseY, 20, 20);
        ellipse(mouseX + 80, mouseY, 20, 20);
      }
    }

    //Botones herramientas

    if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 && mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
      herSelec = 1;
    } else if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 && mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
      herSelec = 2;
    } else if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 && mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
      herSelec = 3;
    } else if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 && mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
      herSelec = 4;
    } else if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 && mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {
      herSelec = 5;
    } else if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 && mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {
      herSelec = 6;
    } else if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 && mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {
      herSelec = 7;
    } else if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 && mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {
      herSelec = 8;
    } else if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 && mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {
      herSelec = 9;
    } else if (mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 && mouseY > posYbot10 && mouseY < posYbot10 + tamBot10) {
      herSelec = 10;
    }


    //Botones colores
    if (mouseX > posXbotcol1 && mouseX < posXbotcol1 + tamBotcol1 && mouseY > posYbotcol1 && mouseY < posYbotcol1 + tamBotcol1) {
      colSelec = 1;
    } else if (mouseX > posXbotcol2 && mouseX < posXbotcol2 + tamBotcol2 && mouseY > posYbotcol2 && mouseY < posYbotcol2 + tamBotcol2) {
      colSelec = 2;
    } else if (mouseX > posXbotcol3 && mouseX < posXbotcol3 + tamBotcol3 + tamBotcol3 && mouseY > posYbotcol3 && mouseY < posYbotcol3 + tamBotcol3) {
      colSelec = 3;
    } else if (mouseX > posXbotcol4 && mouseX < posXbotcol4 + tamBotcol4 && mouseY > posYbotcol4 && mouseY < posYbotcol4 + tamBotcol4) {
      colSelec = 4;
    } else if (mouseX > posXbotcol5 && mouseX < posXbotcol5 + tamBotcol5 + tamBotcol5 && mouseY > posYbotcol5 && mouseY < posYbotcol5 + tamBotcol5) {
      colSelec = 5;
    } else if (mouseX > posXbotcol6 && mouseX < posXbotcol6 + tamBotcol6 && mouseY > posYbotcol6 && mouseY < posYbotcol6 + tamBotcol6) {
      colSelec = 6;
    } else if (mouseX > posXbotcol7 && mouseX < posXbotcol7 + tamBotcol7 + tamBotcol7 && mouseY > posYbotcol7 && mouseY < posYbotcol7 + tamBotcol7) {
      colSelec = 7;
    } else if (mouseX > posXbotcol8 && mouseX < posXbotcol8 + tamBotcol8 + tamBotcol8 && mouseY > posYbotcol8 && mouseY < posYbotcol8 + tamBotcol8) {
      colSelec = 8;
    } else if (mouseX > posXbotcol9 && mouseX < posXbotcol9 + tamBotcol9 && mouseY > posYbotcol9 && mouseY < posYbotcol9 + tamBotcol9) {
      colSelec = 9;
    } else if (mouseX > posXbotcol10 && mouseX < posXbotcol10 + tamBotcol10 + tamBotcol10 && mouseY > posYbotcol10 && mouseY < posYbotcol10 + tamBotcol10) {
      colSelec = 10;
    }


    //Boton BORRAR
    if (mouseX > posXborrar && mouseX < posXborrar + tamBorrar && mouseY > posYborrar && mouseY < posYborrar + tamBorrar) {
      background(255);
      herSelec = 0;
      colSelec = 0;
    }
  }


}
