//Variables fotos emojis
var fotoFox;
var fotoTurtle;

//Cancion
var cancion;

//Variables botones
var botStop;
var botMomento;
var botMinute;

//Variable slider del volumen
var volumen;

//Variable slider de la velocidad
var velocidad;

//Duracion de la cancion
var duracion;

//Posicion en la barra
var barraX;
var barraXsegundo;

//Variable que define si la cancion está sonando o no
var sonando;

//Variable que me da el momento actual de la cancion
var momento;

//Variable para analizar la musica
var miAnalizador;

//Funcion que carga la cancion y las dos fotos usadas
function preload() {
  cancion = loadSound("Musica/cancion.mp3")
  fotoFox = loadImage("Imagenes/fox.png")
  fotoTurtle = loadImage("Imagenes/Turtle_Emoji.png")
}

function setup() {
  createCanvas(1000, 700);

  //Crea el analizador de la amplitud de onda
  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(cancion);

  /*Crea las dos zonas negras de arriba y abajo que tienen
  las herramientas
  */
  fill(0)
  noStroke()
  rect(0, 0, width, 60);
  rect(0, height - 60, width, 60);

  //Boton play inicio
  fill(255)
  triangle(38, 10, 70, 29, 38, 48);

  /*
  Boton volumen, crea el boton fisico y la barra
  deslizadora
  */

  noStroke()
  rect(670, 22, 14.25, 14.25);
  triangle(670, 29, 696, 14.4, 696, 44);
  noFill();
  strokeWeight(3);
  stroke(255)
  arc(698, 29, 11, 11, -PI / 4, PI / 4);
  arc(698, 29, 23, 23, -PI / 4, PI / 4);
  arc(698, 29, 35, 35, -PI / 4, PI / 4);

  volumen = createSlider(0, 1, 0.5, 0.01)
  volumen.position(725, 20)

  //Pone los dos emojis en la parte de abajo
  image(fotoTurtle, 750, 647, 45.6, 45.6)
  image(fotoFox, 941, 647, 45.6, 45.6)

  //Crea el slider de la velocidad
  velocidad = createSlider(0.5, 1.5, 1, 0.01)
  velocidad.position(800, 660)

}

function draw() {

  //Rectangulo que me da el color del fondo
  fill(230, momento * 5, 126)
  rect(0, 59, width, height - 118)

  //Rectangulo que borra el momento de la cancion
  fill(0)
  noStroke()
  rect(874, 1.5, 1000, 53)

  //Text duracion
  textSize(30);
  noStroke();
  fill(255);
  text(cancion.currentTime(), 890, 45)

  //Rectangulo que elimina los decimales
  fill(0)
  noStroke()
  rect(949, 1.5, 1000, 53)

  //Volumen
  cancion.setVolume(volumen.value());

  //Velocidad
  cancion.rate(velocidad.value());

  //Play a la cancion cuando unde boton de play y stop cuando se unde stop

  if (cancion.isPlaying() == false && sonando == 0) {
    cancion.play();
    fill(255)
    rect(38, 10.1, 38.2, 38.2)
  } else if (sonando == 1) {
    cancion.stop();
    fill(0)
    rect(38, 10.1, 38.2, 38.2)
    fill(255)
    triangle(38, 10, 70, 29, 38, 48);
  }

  //Linea duracion
  stroke(255);
  strokeWeight(5);
  line(100, 12, 100, 45);
  line(653, 12, 653, 45);
  
  //Cuadrado que tapa la barra de duracion
  fill(0)
  noStroke()
  rect(102.8, 15, 546, 30)
  stroke(255);
  strokeWeight(5);
  line(100, 29, 651, 29);

  //Linea de momento de la cancion
  if (mouseIsPressed) {
    if (mouseY > 21 && mouseY < 37.8) {
      if (mouseX > 110 && mouseX < 640.3) {
        //Elipse que pinta el momento de la cancion
        noStroke()
        fill(255)
        ellipse(mouseX, 29.4, 20, 20)
        barraX = map(mouseX, 0, 222.55125, 110.6, 640.3);
        barraXsegundo = map(mouseX, 110.6, 640.3, 0, 222.55125)
        cancion.jump(barraXsegundo)
      }
    }

  }

  //If que ubica la elipse del momento de la cancion para poderlo ver

  if (mouseX > 110 && mouseX < 640.3 && mouseY > 21 && mouseY < 37.8) {
    fill(255)
    noStroke()
    ellipse(mouseX, 29.4, 20, 20)
  }

  //If que va cambiando el color del fondo segun el momento en la cancion
  momento = cancion.currentTime();

  if (momento > 10 && momento < 34) {
    fill(momento * 10, 0, 126)
    rect(0, 59, width, height - 118)
  } else if (momento > 34 && momento < 46) {
    fill(45, 221, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 46 && momento < 58) {
    fill(momento * 10, 161, 126)
    rect(0, 59, width, height - 118)
  } else if (momento > 58 && momento < 82.8) {
    fill(14, 20, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 82.8 && momento < 88.8) {
    fill(45, 221, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 88.8 && momento < 100) {
    fill(momento * 10, 161, 126)
    rect(0, 59, width, height - 118)
  } else if (momento > 100 && momento < 113) {
    fill(14, 20, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 113 && momento < 121) {
    fill(45, 221, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 121 && momento < 137) {
    fill(momento * 10, 161, 126)
    rect(0, 59, width, height - 118)
  } else if (momento > 137 && momento < 161) {
    fill(14, 20, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 161 && momento < 167) {
    fill(45, 221, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 167 && momento < 170) {
    fill(45, momento * 10, 221)
    rect(0, 59, width, height - 118)
  } else if (momento > 170 && momento < 179) {
    fill(122, 20, momento * 10)
    rect(0, 59, width, height - 118)
  } else if (momento > 179 && momento < 191) {
    fill(122, momento * 10, 20)
    rect(0, 59, width, height - 118)
  } else if (momento > 191 && momento < 215) {
    fill(momento * 10, 122, 20)
    rect(0, 59, width, height - 118)
  } else if (momento > 215 && momento < 255) {
    fill(0)
    rect(0, 59, width, height - 118)
  }

  var nivel = miAnalizador.getLevel();

  //If que va cambiando la figura según el momentooo de la cancion, siempre en la misma posicion y
  // el tamaño depende del nivel de la cancion
  noStroke()
  if (momento > 10 && momento < 34) {
    push()
    fill(0, random(0, 255), 0)
    ellipse(width / 2, height / 2, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 34 && momento < 46) {
    push()
    fill(random(0, 255), 0, 0)
    ellipse(width / 2, height / 2, nivel * 1000, nivel * 1000)
    ellipse(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 46 && momento < 58) {
    push()
    fill(0, 0, random(0, 255))
    ellipse(width / 2, height / 2, nivel * 1000, nivel * 1000)
    ellipse(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 + width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 58 && momento < 82.8) {
    push()
    fill(0, random(0, 255), 100)
    ellipse(width / 2, height / 2, nivel * 1000, nivel * 1000)
    ellipse(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 + width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 + width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 82.8 && momento < 88.8) {
    push()
    fill(155, 200, random(0, 255))
    ellipse(width / 2, height / 2, nivel * 1000, nivel * 1000)
    ellipse(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 + width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 + width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    ellipse(width / 2 - width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 88.8 && momento < 100) {
    push()
    fill(0, random(0, 255), 0)
    rect(width / 2, height / 2, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 100 && momento < 113) {
    push()
    fill(random(0, 255), 0, 0)
    rect(width / 2, height / 2, nivel * 1000, nivel * 1000)
    rect(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 113 && momento < 121) {
    push()
    fill(0, 0, random(0, 255))
    rect(width / 2, height / 2, nivel * 1000, nivel * 1000)
    rect(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    rect(width / 2 + width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 121 && momento < 137) {
    push()
    fill(0, random(0, 255), 100)
    rect(width / 2, height / 2, nivel * 1000, nivel * 1000)
    rect(width / 2 - width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    rect(width / 2 + width / 4, height / 2 + height / 4, nivel * 1000, nivel * 1000)
    rect(width / 2 + width / 4, height / 2 - height / 4, nivel * 1000, nivel * 1000)
    pop()
  } else if (momento > 137 && momento < 161) {
    push()
    fill(0, random(0, 255), 0)
    star(width / 2, height / 2, nivel * 1000, nivel * 1000, random(3, 5))
    pop()
  } else if (momento > 161 && momento < 167) {
    push()
    fill(0, random(0, 255), 0)
    star(width / 2, height / 2, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 - width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    pop()
  } else if (momento > 167 && momento < 170) {
    push()
    fill(0, random(0, 255), 0)
    star(width / 2, height / 2, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 - width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 + width / 4, height / 2 + width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    pop()
  } else if (momento > 170 && momento < 179) {
    push()
    fill(0, random(0, 255), 0)
    star(width / 2, height / 2, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 - width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 + width / 4, height / 2 + width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 + width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    pop()
  } else if (momento > 179 && momento < 191) {
    push()
    fill(0, random(0, 255), 0)
    star(width / 2, height / 2, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 - width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 + width / 4, height / 2 + width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 + width / 4, height / 2 - width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    star(width / 2 - width / 4, height / 2 + width / 4, nivel * 1000, nivel * 1000, random(3, 5))
    pop()
  } else if (momento > 191 && momento < 215) {
    fill(momento * 10, 122, 20)
    rect(0, 59, width, height - 118)
  } else if (momento > 215 && momento < 255) {
    fill(0)
    rect(0, 59, width, height - 118)
  }

}

//Funcion que permite cambiar de estado en play y pausa desde el botón
function mouseClicked() {

  if (mouseX > 37.4 && mouseX < 70.9) {

    if (mouseY > 9.7 && mouseY < 48, 7) {

      if (sonando == 0)
        sonando = 1;
      else
        sonando = 0
    }
  }

}

//Funcion que crea una estrella, tomada de P5JS.ORG EXAMPLES
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}