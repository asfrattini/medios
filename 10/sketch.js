// Estado 1 = Introduccion
// Estado 2 = Instrucciones
// Estado 3 = Avatar
// Estado 4 = Perdida
// Estado 5 = Victoria
// Estado 6 = Nivel 1
// Estado 7 = Nivel 2
// Estado 8 = Nivel 3

//Variable que crea el arreglo de los peces!
var peces = [];
var peces2 = [];
var peces3 = [];
//Variable que crea los arreglos de los puerco espines
var puercos = [];
var puercos3 = [];

//Variable que crea el arreglo de las paredes de nivel 2 y nivel 3
var paredN2 = [];
var paredN2D = [];
var paredN3 = [];
var paredN3D = [];

//El estado empieza en 1 porque es la introduccion
var estado = 1;

//Variable direccion obstaculos 
var dir;


//El estado del avatar empieza en el primero, 1
var avatarElegido = 1;

//VARIABLES DE IMAGENES

//Variable que guarda las imagenes de los obstaculos
var pez1;
var pez2;
var puercoesp;
var paredRoja;
var paredN2;
var paredN3;

//Variables de las pantallas
var intro;
var avatar;
var instru;
var nivel1;
var nivel2;
var nivel3;
var perdiste;
var ganaste;

//Variables de los avatares
var av1;
var av2;
var av3;
var av4;
//Variables de los avatares especiales
var av1e;
var av2e;
var av3e;
var av4e;

//Variables de los beneficios 
var gorrito;
var sensei;
var monedita;

//Fuente
var fuente;

  
//Cantidad de obstaculos para los arreglos
var numPeces;
var numPeces2;
var numPeces3;

var numPuercos2;
var numPuercos3;

var pared2X;
var pared2Y;
var pared2YD; 
var pared2XD; 

var pared3X; 
var pared3Y; 
var pared3XD; 
var pared3YD; 


//Cantidad de paredes nivel 2
var numPared2 
var numPared2D 
var numPared3 
var numPared3D 



//Booleano para determinar si el puffle tiene o no el gorrito
var tieneGorro = false;

function preload() {

  //Preload de la fuente
  fuente = loadFont("Fuentes/MahsuriSansMTStd-Regular.otf");

  //Preload de las pantallas
  intro = loadImage("Pantallas/1.jpg");
  instru = loadImage("Pantallas/2.jpg");
  avatar = loadImage("Pantallas/3.jpg");
  perdiste = loadImage("Pantallas/4.jpg");
  ganaste = loadImage("Pantallas/5.jpg");
  nivel1 = loadImage("Pantallas/6.jpg");
  nivel2 = loadImage("Pantallas/7.jpg");
  nivel3 = loadImage("Pantallas/8.jpg");

  //Preload de los avatares
  av1 = loadImage("Avatares/1.png");
  av4 = loadImage("Avatares/4.png");
  av2 = loadImage("Avatares/2.png");
  av3 = loadImage("Avatares/3.png");
  //Preload de los avatares especiales
  av1e = loadImage("Avatares/1e.png");
  av4e = loadImage("Avatares/4e.png");
  av2e = loadImage("Avatares/2e.png");
  av3e = loadImage("Avatares/3e.png");

  //Preload de los beneficios
  gorrito = loadImage("Beneficios/1.png");
  sensei = loadImage("Beneficios/2.png");
  monedita = loadImage("Beneficios/3.png");

  //Preload de los obstaculos
  pez1 = loadImage("Obstaculos/1.png");
  pez2 = loadImage("Obstaculos/2.png");
  puercoesp = loadImage("Obstaculos/3.png");
  paredN2 = loadImage("Obstaculos/ParedN2.png");
  paredN3 = loadImage("Obstaculos/ParedN3.png");

}

function setup() {



  //Crea el canvas del tamaño de la ventana del ipad
  createCanvas(768, 1024);

  
//Cantidad de obstaculos para los arreglos
 numPeces = 15;
 numPeces2 = 20;
 numPeces3 = 15;

 numPuercos2 = 5;
 numPuercos3 = 8;

 pared2X = 0;
 pared2Y = -4095.75;
 pared2YD = -3956;
 pared2XD = 699.311;

 pared3X = 0;
 pared3Y = -4095.803;
 pared3XD = 699.311;
 pared3YD = -3956;


//Cantidad de paredes nivel 2
 numPared2 = 19;
 numPared2D = 19;
numPared3 = 19;
 numPared3D = 19;

  
  
  //Estado timer para el gorrito
  timer = 0
  timer2 = 0
  timer3 = 0
  //Booleano que permite comenzar a contar cuando tiene el gorro
  contar = false


  //Variable que le da el X al avatar
  xvar = width / 2;
  yvar = 890;

  //Variable que le da el Y a las pantallas del nivel
  ynivel = -4095.75;
  ynivel2 = -4095.75;
  ynivel3 = -4095.75;

  rango = 4872 / numPeces;

  rango2 = 4872 / numPeces2;

  rango3 = 4872 / numPeces3;

  rangoPuerco = 4872 / numPuercos2;

  rangoPuerco3 = 4872 / numPuercos3;

  //Variable de los puntos
  puntos = 0;

  //Le da posicion x y y al sensei
  xsensei = random(77, 440)
  ysensei = random(ynivel / 3, 2 * (ynivel / 3))

  //Le da posicion x y y al sensei en el nivel 2
  xsensei2 = random(77, 440)
  ysensei2 = random(ynivel / 6, 2 * (ynivel / 6))


  //Le da posicion x y y al sensei en el nivel 3
  xsensei3 = random(77, 440)
  ysensei3 = random(ynivel / 6, 2 * (ynivel / 6))

  //Le da posicion x y y al gorrito
  xgorro = random(77, 440)
  ygorro = random(ynivel, ynivel / 6)

  //Le da posicion x y y al gorrito en el nivel 2
  xgorro2 = random(77, 440)
  ygorro2 = random(ynivel2, ynivel2 / 3)

  //Le da la posicion x y y al gorrito en el nivel 3
  xgorro3 = random(77, 440)
  ygorro3 = random(ynivel3, ynivel3 / 7)

  //Crea el arreglo de peces
  for (var p = 0; p < numPeces; p++) {



    var pecesX = random(77, 440);
    var pecesY = random((-p * rango) - rango / 2, -p * rango - rango / 2);
    var pecesTipo = floor(random(0, 2));


    peces[p] = new pez(pecesX, pecesY, pecesTipo);


  }

  //Crea el arreglo de peces Nivel 2
  for (var p2 = 0; p2 < numPeces2; p2++) {

    var peces2X = random(77, 440);
    var peces2Y = random((-p2 * rango2) - rango2 / 2, -p2 * rango2 - rango2 / 2);
    var peces2Tipo = floor(random(0, 2));

    peces2[p2] = new pez(peces2X, peces2Y, peces2Tipo);

  }

  //Crea el arreglo de peces Nivel 3
  for (var p3 = 0; p3 < numPeces; p3++) {

    var peces3X = random(77, 440);
    var peces3Y = random((-p3 * rango3) - rango3 / 2, -p3 * rango3 - rango3 / 2);
    var peces3Tipo = floor(random(0, 2));

    peces3[p3] = new pez(peces3X, peces3Y, peces3Tipo);

  }


  //Crea el arreglo de puerco espines Nivel 2
  for (var e = 0; e < numPuercos2; e++) {

    var espinX = random(77, 440);
    var espinY = random((-e * rangoPuerco) - rangoPuerco / 2, -e * rangoPuerco - rangoPuerco / 2);

    puercos[e] = new puerco(espinX, espinY);

  }

  //Crea el arreglo de puerco espines Nivel 3
  for (var e3 = 0; e3 < numPuercos3; e3++) {

    var espin3X = random(77, 440);
    var espin3Y = random((-e3 * rangoPuerco3) - rangoPuerco3 / 2, -e3 * rangoPuerco3 - rangoPuerco3 / 2);

    puercos3[e3] = new puerco(espin3X, espin3Y);

  }

  //Crea el arreglo de la pared del nivel 2
  for (var par2 = 0; par2 < numPared2; par2++) {

    paredN2[par2] = new pared2(pared2X, pared2Y);

    pared2Y = pared2Y + 280.118;
  }

  //Crea el arreglo de la pared del nivel 2 del lado derecho
  for (var par2D = 0; par2D < numPared2; par2D++) {

    paredN2D[par2D] = new pared2(pared2XD, pared2YD);

    pared2YD = pared2YD + 280.118;
  }

  //Crea el arreglo de la pared del nivel 3 izquierdo
  for (var par3 = 0; par3 < numPared3; par3++) {

    paredN3[par3] = new pared3(pared3X, pared3Y);

    pared3Y = pared3Y + 280.024;
  }

  //Crea el arreglo de la pared del nivel 3 derecho
  for (var par3D = 0; par3D < numPared3D; par3D++) {

    paredN3D[par3D] = new pared3(pared3XD, pared3YD);

    pared3YD = pared3YD + 280.024;
  }
}

function draw() {

  //PANTALLA INTRODUCCIÓN
  if (estado == 1) {

    image(intro, 0, 0);

    //recorre todos los puntos en los que se esta tocando la pantalla y revisa su distancia con respecto al boton
    for (var i = 0; i < touches.length; i++) {

      if (touches[i].x > 572 && touches[i].x < windowWidth) {
        if (touches[i].y > 966 && touches[i].y < windowHeight) {

          //si el boton es presionado cambia a la pantalla de instrucciones
          estado = 2;

        }
      } else if (touches[i].x > 184 && touches[i].x < 585) {

        if (touches[i].y > 819 && touches[i].y < 916) {

          //si el boton es presionado cambia a la pantalla de avatar
          estado = 3;
        }
      }

    }


    //PANTALLA DE INSTRUCCIONES
  } else if (estado == 2) {

    image(instru, 0, 0);

    //Botoon de VOLVER
    for (var k = 0; k < touches.length; k++) {

      if (touches[k].x > 551 && touches[k].x < windowWidth) {
        if (touches[k].y > 0 && touches[k].y < 68) {

          //si el boton es presionado cambia a la pantalla principal
          estado = 1;

        }
      }
    }

    //PANTALLA DEL AVATAR
  } else if (estado == 3) {

    image(avatar, 0, 0);

    //Me dice dónde hay un toque para definir avatar y el boton de continuar
    for (var j = 0; j < touches.length; j++) {


      if (touches[j].x > 572 && touches[j].x < windowWidth) {
        if (touches[j].y > 966 && touches[j].y < windowHeight) {
          //si el boton es presionado cambia a la pantalla del primer nivel
          estado = 6;
        }
      }

      if (touches[j].x > 60 && touches[j].x < 378) {
        if (touches[j].y > 264 && touches[j].y < 582) {
          avatarElegido = 1;
        }
      }

      if (touches[j].x > 401 && touches[j].x < 719) {
        if (touches[j].y > 264 && touches[j].y < 582) {
          avatarElegido = 4;
        }
      }

      if (touches[j].x > 60 && touches[j].x < 378) {
        if (touches[j].y > 622 && touches[j].y < 940) {
          avatarElegido = 2;
        }
      }

      if (touches[j].x > 401 && touches[j].x < 719) {
        if (touches[j].y > 622 && touches[j].y < 940) {
          avatarElegido = 3;
        }
      }
    }

    noFill();
    stroke(123, 170, 208);
    strokeWeight(10);
    if (avatarElegido == 1) {
      avel = av1;
      avelgorro = av1e;
      rect(60, 264, 318, 318);
    } else if (avatarElegido == 2) {
      avel = av2;
      avelgorro = av2e;
      rect(60, 622, 318, 318);
    } else if (avatarElegido == 3) {
      avel = av3;
      avelgorro = av3e;
      rect(401, 622, 318, 318);
    } else if (avatarElegido == 4) {
      avel = av4;
      avelgorro = av4e;
      rect(401, 264, 318, 318);
    }


    avelGuardado = avel;

    //PANTALLA DE PERDIDA
  } else if (estado == 4) {

    image(perdiste, 0, 0);

    //Me dice dónde hay un toque para definir el boton de volver a la pagina principal
    for (var l = 0; l < touches.length; l++) {


      if (touches[l].x > 559 && touches[l].x < windowWidth) {
        if (touches[l].y > 958 && touches[l].y < windowHeight) {
          //si el boton es presionado cambia a la pantalla de introduccion
          estado = 1;
        }
      }

    }
    //PANTALLA DE VICTORIA
  } else if (estado == 5) {

    image(ganaste, 0, 0);

    //Me dice dónde hay un toque para definir el boton de volver a la pagina principal
    for (var m = 0; m < touches.length; m++) {


      if (touches[m].x > 559 && touches[m].x < windowWidth) {
        if (touches[m].y > 958 && touches[m].y < windowHeight) {
          //si el boton es presionado cambia a la pantalla de introduccion
          estado = 1;
          setup();
        }
      }

    }
    //PANTALLA DE NIVEL 1
  } else if (estado == 6) {

    //FONDO
    image(nivel3, 0, ynivel);

    if (ynivel < -50) {
      ynivel = ynivel + 3;
    } else if (ynivel > -50) {
      estado = 7;
    }



    //BENEFICIOS
    //Dibujo del sensei
    image(sensei, xsensei, ysensei)

    ysensei = ysensei + 5


    //If que prueba si el puffle está cerca del sensei para multiplicar los puntos por 1.1
    if (dist(xvar, yvar, xsensei + 70, ysensei + 90) <= 70) {
      puntos = floor(puntos * 1.1)
    }

    //Gorrooo
    image(gorrito, xgorro, ygorro);
    ygorro = ygorro + 6;

    //If que prueba si el puffle para cerca del gorro, y se lo pone
    if (dist(xvar, yvar, xgorro + 47, ygorro + 30) < 50) {
      contar = true;
    }

    //Timer que funciona para ponerle el gorro al muñeco solo durante 500 milisegundos
    if (contar == true) {
      timer++;
    }

    if (timer >= 1 && timer < 500) {

      tieneGorro = true;
    }
    if (timer >= 500) {

      tieneGorro = false;
    }

    if (tieneGorro == true) {
      avel = avelgorro
    } else {
      avel = avelGuardado
    }

    //OBSTACULOS
    //Dibujo de los peces
    for (var p = 0; p < numPeces; p++) {
      peces[p].dibujarse();
      peces[p].moverse();

      //mata el puffle cuando toca un pez, le pregunta si tiene el gorro, para protegerlo
      if (tieneGorro == false) {
        if (dist(peces[p].x + 120, peces[p].y + 41, xvar, yvar) < 100) {
          estado = 4;
          setup();
        }
      }
    }

    //PUNTOS
    puntos = floor(puntos + 1);

    image(monedita, 22, 22);
    fill(9, 19, 75);
    noStroke();
    textFont(fuente);
    textSize(40);
    text("Puntos: " + puntos, 120, 200);

    //AVATAR
    //Pone al avatar en el centro de la pantallla
    push();
    velx1 = map(rotationY, -90, 90, -20, 20);

    imageMode(CENTER);
    image(avel, xvar, yvar);

    //Hace que el avatar se mueva en x dependiendo del mvnt del ipad
    xvar = xvar + velx1;

    xvar = constrain(xvar, 124.5, width - 124.5);
    pop();

    //PANTALLA DE NIVEL 2
  } else if (estado == 7) {


    tieneGorro = false;
    contar = false;


    //FONDO
    image(nivel2, 0, ynivel2);

    if (ynivel2 < -50) {
      ynivel2 = ynivel2 + 3;
    } else if (ynivel2 > -50) {
      estado = 8;
    }




    //BENEFICIOS

    //Dibujo del sensei
    image(sensei, xsensei2, ysensei2)

    ysensei2 = ysensei2 + 5


    //If que prueba si el puffle está cerca del sensei para multiplicar los puntos por 1.1
    if (dist(xvar, yvar, xsensei2 + 70, ysensei2 + 90) <= 70) {
      puntos = floor(puntos * 1.1)
    }



    //Gorrooo
    image(gorrito, xgorro2, ygorro2);
    ygorro2 = ygorro2 + 6;

    //If que prueba si el puffle para cerca del gorro, y se lo pone
    if (dist(xvar, yvar, xgorro2 + 47, ygorro2 + 30) < 50) {
      contar = true;
    }

    //Timer que funciona para ponerle el gorro al muñeco solo durante 500 milisegundos
    if (contar == true) {
      timer2++;
    }

    if (timer2 >= 1 && timer2 < 500) {
      avel = avelgorro
      tieneGorro = true;
    }
    if (timer2 >= 500) {
      avel = avelGuardado
      tieneGorro = false;
    }

    if (tieneGorro == true) {
      avel = avelgorro
    } else {
      avel = avelGuardado
    }



    //OBSTACULOS
    //Dibujo de los peces
    for (var p2 = 0; p2 < numPeces2; p2++) {
      peces2[p2].dibujarse();
      peces2[p2].moverse();

      //mata el puffle cuando toca un pez, soloo si no tiene gorritooo
      if (tieneGorro == false) {
        if (dist(peces2[p2].x + 120, peces2[p2].y + 41, xvar, yvar) < 100) {
          estado = 4
          setup()
        }
      }
    }

    //Dibujo de los puercos espines
    for (var e = 0; e < numPuercos2; e++) {
      puercos[e].dibujarse();
      puercos[e].moverse();


      //Mata el puffle cuando toca un puerco espín, solo si no tiene gorrito
      if (tieneGorro == false) {
        if (dist(puercos[e].x + 60, puercos[e].y + 20, xvar, yvar) < 50) {
          estado = 4;
          setup();
        }
      }
    }






    //Dibujo de las paredes
    for (var par2 = 0; par2 < numPared2; par2++) {
      paredN2[par2].dibujarse()
      paredN2[par2].moverse()

      if (xvar - 55 <= paredN2[par2].x + 68.577) {
        if (yvar - 47 <= paredN2[par2].y + 69.407 && yvar - 47 >= paredN2[par2].y - 96.32) {
          xvar = constrain(xvar, 124.5, width - 124.5);
        }
      }

    }

    //Dibujo de la pared de la derecha
    for (var par2D = 0; par2D < numPared2D; par2D++) {

      paredN2D[par2D].dibujarse();
      paredN2D[par2D].moverse();

      if (xvar + 55 >= paredN2D[par2D].x) {
        if (yvar - 47 <= paredN2D[par2D].y + 69.407 && yvar - 47 >= paredN2D[par2D].y - 96.32) {
          xvar = constrain(xvar, 124.5, width - 124.5);
        }
      }
    }


    //Cambia a la pantalla de perdiste cuando se sale de las paredes.

    if (xvar < 0) {
      estado = 4;
      setup();
    }
    if (xvar > width) {
      estado = 4;
      setup();
    }

    //PUNTOS
    puntos = puntos + 1;

    image(monedita, 22, 22);
    fill(9, 19, 75);
    noStroke();
    textFont(fuente);
    textSize(40);
    text("Puntos: " + puntos, 120, 200);

    //AVATAR
    //Pone al avatar en el centro de la pantallla
    push();
    velx1 = map(rotationY, -90, 90, -20, 20);

    imageMode(CENTER);
    image(avel, xvar, yvar);

    //Hace que el avatar se mueva en x dependiendo del mvnt del ipad
    xvar = xvar + velx1;

    pop();

    //PANTALLA DE NIVEL 3   
  } else if (estado == 8) {


    tieneGorro = false;
    contar = false;



    //FONDO
    image(nivel1, 0, ynivel3);

    if (ynivel3 < -50) {
      ynivel3 = ynivel3 + 3;
    } else if (ynivel3 > -50) {
      estado = 5;
    }



    //Cambia a la pantalla de perdiste cuando se sale de las paredes
    if (xvar < 50) {
      estado = 4;
      setup()
    }

    //BENEFICIOS
    //Dibujo del sensei
    image(sensei, xsensei3, ysensei3)

    ysensei3 = ysensei3 + 5


    //If que prueba si el puffle está cerca del sensei para multiplicar los puntos por 1.1
    if (dist(xvar, yvar, xsensei3 + 70, ysensei3 + 90) <= 70) {
      puntos = floor(puntos * 1.1)
    }



    //Gorrooo
    image(gorrito, xgorro3, ygorro3);
    ygorro3 = ygorro3 + 6;

    //If que prueba si el puffle para cerca del gorro, y se lo pone
    if (dist(xvar, yvar, xgorro3 + 47, ygorro3 + 30) < 50) {
      contar = true;
    }

    //Timer que funciona para ponerle el gorro al muñeco solo durante 500 milisegundos
    if (contar == true) {
      timer3++;
    }

    if (timer3 >= 1 && timer3 < 500) {
      avel = avelgorro
      tieneGorro = true;
    }
    if (timer3 >= 500) {
      avel = avelGuardado
      tieneGorro = false;
    }

    if (tieneGorro == true) {
      avel = avelgorro
    } else {
      avel = avelGuardado
    }


    //OBSTACULOS
    //Dibujo de los peces
    for (var p3 = 0; p3 < numPeces; p3++) {
      peces3[p3].dibujarse();
      peces3[p3].moverse();

      //mata el puffle cuando toca un pez si no tiene gorrito
      if (tieneGorro == false) {
            if (dist(peces3[p3].x + 120, peces3[p3].y + 41, xvar, yvar) < 100) {
              estado = 4
              setup()
            }
      }
    }


    //Dibujo de los puercos espines
    for (var e3 = 0; e3 < numPuercos3; e3++) {
      puercos3[e3].dibujarse();
      puercos3[e3].moverse();

      //If que mata el puffle cuando toca un puerco y no tiene gorro
      if (tieneGorro == false) {
            if (dist(puercos3[e3].x + 60, puercos3[e3].y + 20, xvar, yvar) < 50) {
              estado = 4;
              setup();
            }
      }
    }



    //Dibujo de las paredes izquierdas
    for (var par3 = 0; par3 < numPared3; par3++) {
      paredN3[par3].dibujarse();
      paredN3[par3].moverse();

      if (xvar - 55 <= paredN3[par3].x + 68.577) {
        if (yvar - 47 <= paredN3[par3].y + 69.407 && yvar - 47 >= paredN3[par3].y - 96.32) {
          xvar = constrain(xvar, 124.5, width - 124.5);
        }
      }
    }

    //Dibujo de las paredes derechas
    for (var par3D = 0; par3D < numPared3D; par3D++) {

      paredN3D[par3D].dibujarse();
      paredN3D[par3D].moverse();

      if (xvar + 55 >= paredN3D[par3D].x) {
        if (yvar - 47 <= paredN3D[par3D].y + 69.407 && yvar - 47 >= paredN3D[par3D].y - 96.32) {
          xvar = constrain(xvar, 124.5, width - 124.5);
        }
      }
    }

    //Cambia a la pantalla de perdiste cuando se sale de las paredes.

    if (xvar < 0) {
      estado = 4;
      setup();
    }
    if (xvar > width) {
      estado = 4;
      setup();
    }


    //PUNTOS
    puntos = puntos + 1;

    image(monedita, 22, 22);
    fill(9, 19, 75);
    noStroke();
    textFont(fuente);
    textSize(40);
    text("Puntos: " + puntos, 120, 200);


    //AVATAR
    //Pone al avatar en el centro de la pantallla
    push();
    velx1 = map(rotationY, -90, 90, -20, 20);

    imageMode(CENTER);
    image(avel, xvar, yvar);

    //Hace que el avatar se mueva en x dependiendo del mvnt del ipad
    xvar = xvar + velx1;

    pop();


  }



}

function pez(miX, miY, miTipo) {

  //CARACTERISTICAS
  this.x = miX;
  this.y = miY;
  this.tipo = miTipo;

  //HABILIDADES
  this.dibujarse = function() {

    if (this.tipo == 1) {
      image(pez1, this.x, this.y);
    } else {
      image(pez2, this.x, this.y);
    }
  }

  this.moverse = function() {

    this.y = this.y + 5;
  }
}

function puerco(miX, miY) {

  //CARACTERISTICAS
  this.x = miX;
  this.y = miY;


  //HABILIDADES
  this.dibujarse = function() {

    image(puercoesp, this.x, this.y, 120, 94);

  }

  this.moverse = function() {

    this.y = this.y + 6;
  }
}

function pared2(miX, miY) {

  //CARACTERISTICAS
  this.x = miX;
  this.y = miY;


  //HABILIDADES
  this.dibujarse = function() {

    image(paredN2, this.x, this.y);

  }

  this.moverse = function() {

    this.y = this.y + 3;
  }
}


function pared3(miX, miY) {

  //CARACTERISTICAS
  this.x = miX;
  this.y = miY;


  //HABILIDADES
  this.dibujarse = function() {

    image(paredN3, this.x, this.y);

  }

  this.moverse = function() {

    this.y = this.y + 3;
  }

}
