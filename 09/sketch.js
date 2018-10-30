// Estado 0 = Introduccion
// Estado 0.1 = Instrucciones
// Estado 0.2 = Avatar
// Estado 1 = Nivel 1
// Estado 2 = Nivel 2
// Estado 3 = Nivel 3
// Estado 4 = Victoria
// Estado 5 = Perdida

//El estado empieza en 0 porque es la introduccion
var estado = 0;

//Variable que guarda las imagenes de los obstaculos
var pez1;
var pez2;
var puerco;
var paredRoja;



//Variable direccion obstaculos
var dir

//Variable que define el avatar usado, comienza en 0 por default
var avelegido = 0;

var x; //variable para la posicion del avatar en x y en y;
var velx; //variables para velocidad o cambio de posicion en el tiempo

//Variables de las pantallas
var intro;
var avatar;
var instru;
var nivel1;
var nivel2;
var nivel3;
var perdiste;

//Variables de los avatares
var av0;
var av1;
var av2;
var av3;
//Variables de los avatares especiales
var av0e;
var av1e;
var av2e;
var av3e;

//Variables de los beneficios
var gorrito;
var sensei;
var monedita;

//Fuente
var fuente;

//Preload de las imagenes
function preload() {

  //Preload de la fuente
  fuente = loadFont("Fuentes/MahsuriSansMTStd-Regular.otf")

  //Preload de las pantallas
  intro = loadImage("Pantallas/Intro.jpg");
  avatar = loadImage("Pantallas/Avatar.jpg");
  instru = loadImage("Pantallas/Instru.jpg");
  nivel1 = loadImage("Pantallas/Nivel1.jpg");
  nivel2 = loadImage("Pantallas/Nivel2.jpg");
  nivel3 = loadImage("Pantallas/Nivel3.jpg");
  perdiste = loadImage("Pantallas/Perdiste.jpg");

  //Preload de los avatares
  av0 = loadImage("Avatares/0.png");
  av1 = loadImage("Avatares/1.png");
  av2 = loadImage("Avatares/2.png");
  av2 = loadImage("Avatares/2.png");
  //Preload de los avatares especiales
  av0e = loadImage("Avatares/0e.png");
  av1e = loadImage("Avatares/1e.png");
  av2e = loadImage("Avatares/2e.png");
  av2e = loadImage("Avatares/2e.png");

  //Preload de los beneficios
  gorrito = loadImage("Beneficios/1.png");
  sensei = loadImage("Beneficios/2.png");
  monedita = loadImage("Beneficios/3.png");

  //Preload de los obstaculos
  pez1 = loadImage("Obstaculos/1.png")
  pez2 = loadImage("Obstaculos/2.png")
  puerco = loadImage("Obstaculos/4.png")
  paredRoja = loadImage("Obstaculos/5.png")
}

function setup() {

  //crea un canvas del tamano de la ventana
  createCanvas(windowWidth, windowHeight);


  //Variable que le da el X al avatar
  xvar = width / 2;
  yvar = height - (height / 10)
  tam = height / 12


  //Variable que le da el Y a las pantallas del nivel
  ynivel = -1 * (windowHeight * 4)

  primy = -70
  segy = -(2 * height)

  senseiY = -(2 * height)

  //Variable de los puntos!
  puntos = 0
}

function draw() {
  background(220);



  //PANTALLA INTRODUCCION
  if (estado == 0) {

    image(intro, 0, 0, windowWidth, windowHeight)

    //recorre todos los puntos en los que se esta tocando la pantalla y revisa su distancia con respecto al boton
    for (var i = 0; i < touches.length; i++) {

      if (touches[i].x > 3 * (windowWidth / 4) && touches[i].x < windowWidth) {
        if (touches[i].y > 17 * (windowHeight / 18) && touches[i].y < windowHeight) {

          //si el boton es presionado cambia a la pantalla de instrucciones
          estado = 0.1;

        }
      } else if (touches[i].x > windowWidth / 4 && touches[i].x < 3 * (windowWidth / 4)) {

        if (touches[i].y > 8 * (windowHeight / 10) && touches[i].y < 9 * (windowHeight / 10)) {

          //si el boton es presionado cambia a la pantalla de avatar
          estado = 0.2;
        }
      }

    }

    //PANTALLA DE INSTRUCCIONES
  } else if (estado == 0.1) {

    image(instru, 0, 0, windowWidth, windowHeight)

    //Botoon de VOLVER
    for (var k = 0; k < touches.length; k++) {

      if (touches[k].x > 5 * (windowWidth / 7) && touches[k].x < windowWidth) {
        if (touches[k].y > 0 && touches[k].y < windowHeight / 18) {

          //si el boton es presionado cambia a la pantalla principal
          estado = 0;

        }
      }
    }

    //PANTALLA DEL AVATAR
  } else if (estado == 0.2) {

    image(avatar, 0, 0, windowWidth, windowHeight)

    //SOLO MIENTRAS SOLUCIONO EL PROXIMO CODIGO, DESPUES BORRAAAAAAAAAAAAAAAAARRRRRRRRRR
    noFill()
    stroke(255, 0, 0)
    strokeWeight(width / 70)
    rect(0, 0, width / 2, height / 2)
    noStroke()
    fill(255, 0, 0)
    text("PRUEBA", width / 4, height / 4)
    text("UNDE ACA", width / 4, height / 4 + 20)

    //Intento temporal para porbar el resto del juego
    for (var j = 0; j < touches.length; j++) {

      if (touches[j].x > 0 && touches[j].x < windowWidth / 2) {
        if (touches[j].y > 0 && touches[j].y < windowHeight / 2) {

          //si el boton es presionado cambia a la pantalla del nivel 1
          estado = 1;
        }
      }

      //PROBLEMAS CON LA PANTALLA DEL AVATAR
      //     for (var j = 0; j < touches.length; j++) {

      //       if (touches[j].x > windowWidth - (windowWidth / 3) && touches[j].x < windowWidth) {
      //         if (touches[j].y > windowHeight - (windowHeight / 10) && touches[j].y < windowHeight) {

      //           //si el boton es presionado cambia a la pantalla del nivel 1
      //           estado = 1;
      //         }
      //       }


      //       //Boton que elige los avatares
      //       if (touches[j].x > windowWidth / 11 && touches[j].x < 5 * (windowWidth / 11)) {
      //         if (touches[j].y > 3 * (windowWidth / 10) && touches[j].y < 5 * (windowWidth / 10)) {
      //           ave = 0
      //           avelegido = av0;
      //         }
      //       }

      //       if (touches[j].x > 6 * (windowWidth / 11) && touches[j].x < 10 * (windowWidth / 11)) {
      //         if (touches[j].y > 3 * (windowWidth / 10) && touches[j].y < 5 * (windowWidth / 10)) {
      //           ave = 1
      //           avelegido = av1;
      //         }
      //       }

      //       if (touches[j].x > windowWidth / 11 && touches[j].x < 5 * (windowWidth / 11)) {
      //         if (touches[j].y > 6 * (windowWidth / 10) && touches[j].y < 9 * (windowWidth / 10)) {
      //           ave = 2
      //           avelegido = av2;
      //         }
      //       }

      //       if (touches[j].x > 6 * (windowWidth / 11) && touches[j].x < 10 * (windowWidth / 11)) {
      //         if (touches[j].y > 6 * (windowWidth / 10) && touches[j].y < 9 * (windowWidth / 10)) {
      //           ave = 3
      //           avelegido = av3;
      //         }
      //       }

      // stroke(0, 200, 255)
      // strokeWeight(windowWidth/100)
      // noFill()

      //       if (ave == 0) {
      //         rect(windowWidth / 11,  (windowWidth / 10), (windowWidth / 3), (windowWidth / 3))
      //       } else if (ave == 1) {
      //         rect(6 * (windowWidth / 11), 3 * (windowWidth / 10), (windowWidth / 3), (windowWidth / 3))
      //       } else if (ave == 2) {
      //         rect(windowWidth / 11, 6 * (windowWidth / 10), (windowWidth / 3), (windowWidth / 3))
      //       } else if (ave == 3) {
      //         rect(6 * (windowWidth / 11), 6 * (windowWidth / 10), (windowWidth / 3), (windowWidth / 3))
      //       }

    }



    //PANTALLA NIVEL 1
  } else if (estado == 1) {



    image(nivel1, 0, ynivel, windowWidth, windowHeight * 5)

    if (ynivel < -50) {
      ynivel = ynivel + 5
    } else if (ynivel >= -50) {
      estado = 2
    }


    push()
    imageMode(CENTER)
    //Pone al avatar
    image(av1, xvar, yvar, tam, tam)


    //Aparece el primer pez
    image(pez1, width / 2, primy, width / 3, width / 8)

    primy = primy + 5

    //Mata al muñeco si se choca contra el primez pez
    if (dist(xvar, yvar, width / 2, primy) <= 40) {
      estado = 5
    }

    //Aprece el segundo pez
    image(pez2, width / 3, segy, width / 3, width / 8)

    segy = segy + 5

    //Mata el muñeco si se choca contra el segundo pez
    if (dist(xvar, yvar, width / 3, segy) <= 40) {
      estado = 5
    }


    image(pez1, width / 8, primy - 500, width / 3, width / 8)

    primy = primy + 5

    //Mata al muñeco si se choca contra el primez pez
    if (dist(xvar, yvar, width / 2, primy - 500) <= 40) {
      estado = 5
    }

    //Aprece el segundo pez
    image(pez2, 2 * (width / 6), segy - 500, width / 3, width / 8)

    segy = segy + 5

    //Mata el muñeco si se choca contra el segundo pez
    if (dist(xvar, yvar, width / 3, segy - 500) <= 40) {
      estado = 5
    }


    //Aparece el senseei
    image(sensei, width / 2, senseiY, width / 5, height / 5)

    senseiY = senseiY + 5

    //Duplica los puntos si se choca contra el sensei
    if (dist(xvar, yvar, width / 2, senseiY) <= 40) {
      puntos = puntos * 1.5
    }

    pop()


    puntos = puntos + 1;

    //Pedazo que muestra los puntos
    textFont(fuente)
    textSize(20)
    fill(0)
    image(monedita, 0, 0, width / 4, height / 20)
    text("Puntos: " + puntos, 0 + 5, (height / 20) * 2)

  } else if (estado == 2) {



    image(nivel2, 0, ynivel, windowWidth, windowHeight * 5)

    if (ynivel < -50) {
      ynivel = ynivel + 5
    } else if (ynivel >= -50) {
      estado = 3
    }


    imageMode(CENTER)
    //Pone al avatar
    image(av1, xvar, yvar, tam, tam)

  } else if (estado == 3) {


  } else if (estado == 4) {

  } else if (estado == 5) {

    image(perdiste, 0, 0, windowWidth, windowHeight)


    //recorre todos los puntos en los que se esta tocando la pantalla y revisa su distancia con respecto al boton
    for (var l = 0; l < touches.length; l++) {

      if (touches[l].x > 3 * (windowWidth / 4) && touches[l].x < windowWidth) {
        if (touches[l].y > 17 * (windowHeight / 18) && touches[l].y < windowHeight) {

          //si el boton es presionado cambia a la pantalla de inicio para volvar a empezar
          estado = 0;

        }
      }
    }
  }
}

//esta funcion se activa cuando el dispositivo reconoce que se movio un toque en la pantalla
function touchMoved() {



  for (var i = 0; i < touches.length; i++) {
    //revisa si se estaba tocando la bola
    //se usa touches[0] porque se asume que solo hay un toque a la vez
    if (dist(touches[i].x, touches[i].y, xvar, yvar) < tam * 2) {

      if (touches[i].x > tam && touches[i].x < (width - (width / 11)) - tam / 2) {
        if (touches[i].y > height / 2 && touches[i].y < height) {

          //actualiza la posicion de la elipse con la posicion del toque
          xvar = touches[i].x
          yvar = touches[i].y
        }
      }
    }
  }
  return false;
}




