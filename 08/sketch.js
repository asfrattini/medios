var tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
var vel = 0; //variable para guardar la velocidad de los clics    


var bX = -5519;
var bY = 241;

//Variable del fondo y de instrucciones
var fondo;
var instrucciones;

//Variable que guarda las canciones
var jaws;
var cancion;
var munch;
var choque;
var ballenaSound;
var mine;

//Variable que guarda cada uno de los animales
var tiburon1;
var tiburon2;
var tiburon3;
var tortuga1;
var tortuga2;
var nemo1;
var nemo2;
var dory1;
var dory2;
var dory3;
var dorypapas;
var pelicano;
var globo1;
var globo2;
var ballenaa;
var gaviota1;
var gaviota2;

//Arreglos de cada especie de animal
var tiburones = [];
var tiburones2 = [];
var tiburones3 = [];
var tortugas = [];
var tortugas2 = [];
var nemos = [];
var nemos2 = [];
var dorys = [];
var dorys2 = [];
var dorys3 = [];
var dorys4 = [];
var pelicanos = [];
var globos = [];
var gaviotas = [];
var gaviotas2 = [];
var ballenas = [];

function preload() {
  //Carga la foto del fondo
  fondo = loadImage("Fondo/FONDO.png")

  //Carga la foto de las instrucciones
  instrucciones = loadImage("Fondo/Instrucciones.jpg")
  
  
  //Carga de la cancion del tiburon
  jaws = loadSound("Musica/Jaws.mp3")

  //Carga de la cancion de fondo
  cancion = loadSound("Musica/Cancion2.mp3")

  //Carga el audio de comida
  munch = loadSound("Musica/Munch.mp3")

  //Carga el audio de choque tortugas
  choque = loadSound("Musica/Choque.mp3")

  //Carga el audio de la ballena
  ballenaSound = loadSound("Musica/Ballena.mp3")

  //Carga el audio de las gaviotas
  mine = loadSound("Musica/Mine.mp3")

  //Carga las fotos de los animales
  tiburon1 = loadImage("Animales/1.png")
  tiburon2 = loadImage("Animales/2.png")
  tiburon3 = loadImage("Animales/3.png")
  tortuga1 = loadImage("Animales/6.png")
  tortuga2 = loadImage("Animales/7.png")
  nemo1 = loadImage("Animales/8.png")
  nemo2 = loadImage("Animales/9.png")
  dory1 = loadImage("Animales/10.png")
  dory2 = loadImage("Animales/11.png")
  dory3 = loadImage("Animales/12.png")
  dorypapas = loadImage("Animales/19.png")
  pelicano = loadImage("Animales/13.png")
  globo1 = loadImage("Animales/14.png")
  globo2 = loadImage("Animales/15.png")
  ballenaa = loadImage("Animales/16.png")
  gaviota1 = loadImage("Animales/17.png")
  gaviota2 = loadImage("Animales/18.png")

}


function setup() {
  createCanvas(1250, 1000);



  //Crea los arreglos de tiburones
  for (var i = 0; i < 1; i++) {
    var tibuX = width;
    var tibuY = random(270, 470);
    tiburones[i] = new tiburon(tibuX, tibuY, 1);
  }
  for (var i2 = 0; i2 < 1; i2++) {
    var tibu2X = width;
    var tibu2Y = random(270, 470);
    tiburones2[i2] = new tiburon(tibu2X, tibu2Y, 3);
  }
  for (var i3 = 0; i3 < 1; i3++) {
    var tibu3X = width;
    var tibu3Y = random(270, 470);
    tiburones3[i3] = new tiburon(tibu3X, tibu3Y, 2);
  }


  //Crea los arreglos de las tortugas
  for (var t = 0; t < 1; t++) {
    var torX = random(-2500, 0)
    var torY = 711
    tortugas[t] = new tortuga(torX, torY, 1)
  }
  for (var t2 = 0; t2 < 15; t2++) {
    var tor2X = random(-10000, 0)
    var tor2Y = random(803, 850)
    tortugas2[t2] = new tortuga(tor2X, tor2Y, 2)
  }

  //Crea los arreglos de los nemos
  for (var n = 0; n < 10; n++) {
    var nemoX = random(-10000, 0)
    var nemoY = random(270, 470)
    nemos[n] = new nemo(nemoX, nemoY, 1)
  }
  for (var n2 = 0; n2 < 10; n2++) {
    var nemo2X = random(-10000, 0)
    var nemo2Y = random(270, 470)
    nemos2[n2] = new nemo(nemo2X, nemo2Y, 2)
  }

  //Crea los arreglos de las doris
  for (var d = 0; d < 10; d++) {
    var doriX = random(-10000, 0)
    var doriY = random(270, 470)
    dorys[d] = new dory(doriX, doriY, 1)
  }
  for (var d2 = 0; d2 < 10; d2++) {
    var dori2X = random(width, 50000)
    var dori2Y = random(270, 470)
    dorys2[d2] = new dory(dori2X, dori2Y, 2)
  }
  for (var d3 = 0; d3 < 10; d3++) {
    var dori3X = random(-10000, 0)
    var dori3Y = random(270, 470)
    dorys3[d3] = new dory(dori3X, dori3Y, 3)
  }

  //Crea los arreglos de al gaviota
  for (var g = 0; g < 7; g++) {
    var gaX = random(0, width)
    var gaY = random(-2500, 0)
    gaviotas[g] = new gaviota(gaX, gaY, 1)
  }
  for (var g2 = 0; g2 < 7; g2++) {
    var ga2X = random(0, width)
    var ga2Y = random(-1000, 0)
    gaviotas2[g2] = new gaviota(ga2X, ga2Y, 2)
  }

  //Crea el arreglo del pelicano
  for (var p = 0; p < 4; p++) {
    var pX = random(width + 2000, 10000)
    var pY = 100
    pelicanos[p] = new pelicanoss(pX, pY)
  }

  //Crea el arreglo del pez globo
  for (var gl = 0; gl < 6; gl++) {
    var glX = random(-10000, 0)
    var glY = random(270, height)
    globos[gl] = new globo(glX, glY, 2)
  }

  //Crea el arreglo de la ballena
  for (var b = 0; b <= 1; b++) {
    var bX = -5519;
    var bY = 241;
    ballenas[b] = new ballena(bX, bY)
  }
}

function draw() {


  //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  var vel = 60000 / (tiempo[1] - tiempo[0]);


  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }

  print(frameCount)
  //Imagen en el fondo
  image(fondo, 0, 0)


  if (!cancion.isPlaying()) {
    cancion.setVolume(1)
    cancion.play()
  }


  //Dibujo de los nemos
  for (var n = 0; n < nemos.length; n++) {
    nemos[n].dibujarse();
    nemos[n].moverse();

    for (var i3 = 0; i3 < tiburones.length; i3++) {
      if (dist(nemos[n].x, nemos[n].y, tiburones[i3].x, tiburones[i3].y) < 200) {
        if (tiburones[i3].x > 0 && tiburones[i3].x < 1250) {
          nemos[n].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }

    }
    for (var i31 = 0; i31 < tiburones2.length; i31++) {
      if (dist(nemos[n].x, nemos[n].y, tiburones2[i31].x, tiburones2[i31].y) < 200) {
        if (tiburones[i31].x > 0 && tiburones[i31].x < 1250) {
          nemos[n].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }

    }
  }
  for (var n2 = 0; n2 < nemos2.length; n2++) {
    nemos2[n2].dibujarse();
    nemos2[n2].moverse();

    for (var i4 = 0; i4 < tiburones.length; i4++) {
      if (dist(nemos2[n2].x, nemos2[n2].y, tiburones[i4].x, tiburones[i4].y) < 200) {
        if (tiburones[i4].x > 0 && tiburones[i4].x < 1250) {
          nemos2[n2].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }

    }
  }

  //Dibujo de las dory
  for (var d = 0; d < dorys.length; d++) {
    dorys[d].dibujarse();
    dorys[d].moverse();

    for (var i5 = 0; i5 < tiburones.length; i5++) {
      if (dist(dorys[d].x, dorys[d].y, tiburones[i5].x, tiburones[i5].y) < 200) {
        if (tiburones[i5].x > 0 && tiburones[i5].x < 1250) {
          dorys[d].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }
    }
  }
  for (var d2 = 0; d2 < dorys2.length; d2++) {
    dorys2[d2].dibujarse();
    dorys2[d2].moverse();

    //For que mata los dorys cuando se pegan contra el tiburon
    for (var i6 = 0; i6 < tiburones.length; i6++) {
      if (dist(dorys2[d2].x, dorys2[d2].y, tiburones[i6].x, tiburones[i6].y) < 200) {
        if (tiburones[i6].x > 0 && tiburones[i6].x < 1250) {
          dorys2[d2].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }
    }

    //For que crea un nuevo dory cuando se juntan papa y mama dory
    for (var d5 = 0; d5 < dorys3.length; d5++) {
      if (dist(dorys2[d2].x, dorys2[d2].y, dorys3[d5].x, dorys3[d5].y) < 20) {
        if (dorys3[d5].x > 0 && dorys3[d5].x < 1250) {
          dorys3[d5].reproducirse()
        }
      }
    }
  }
  for (var d3 = 0; d3 < dorys3.length; d3++) {
    dorys3[d3].dibujarse();
    dorys3[d3].moverse();

    for (var i7 = 0; i7 < tiburones.length; i7++) {
      if (dist(dorys3[d3].x, dorys3[d3].y, tiburones[i7].x, tiburones[i7].y) < 200) {
        if (tiburones[i7].x > 0 && tiburones[i7].x < 1250) {
          dorys3[d3].morirse()
          if (!munch.isPlaying())
            munch.play()
        } else {
          munch.stop()
        }
      }
    }
  }

  //Dibujo de las tortugas
  for (var t = 0; t < tortugas.length; t++) {
    tortugas[t].dibujarse();
    tortugas[t].moverse();

    if (tortugas[t].x >= length / 2 && tortugas[t].x < 150) {
      if (!choque.isPlaying())
        choque.play()
      choque.setVolume(1)
      cancion.setVolume(0.3)
      jaws.setVolume(0)
    }

  }
  for (var t2 = 0; t2 < tortugas2.length; t2++) {
    tortugas2[t2].dibujarse();
    tortugas2[t2].moverse();


  }



  //Dibujo de los globos
  for (var gl = 0; gl < globos.length; gl++) {
    globos[gl].dibujarse();
    globos[gl].moverse();

    
    if(globos[gl].tamX >= 500)
    {
      globos[gl].engordarse()
    }
    
    //revisa si el mouse esta tocando alguna bola
    if (dist(mouseX, mouseY, globos[gl].x, globos[gl].y) < globos[gl].tamX + 5) {


      globos[gl].crecer(vel)
    } else {
      globos[gl].creciendo = false;
    }
  }

  //Dibujo de los tiburones
  if (frameCount >= 500 && frameCount <= 1800) {
    for (var i = 0; i < tiburones.length; i++) {
      tiburones[i].dibujarse();
      tiburones[i].moverse();
    }
    if (!jaws.isPlaying()) {
      jaws.setVolume(1)
      jaws.play()
      cancion.setVolume(0.3)
    }
  }
  if (frameCount > 1800 && frameCount < 3000) {
    jaws.stop()
    cancion.setVolume(1)
  }



  //Dibujo de las gaviotas
  for (var g = 0; g < gaviotas.length; g++) {
    gaviotas[g].dibujarse();
    gaviotas[g].moverse();

    for (var p1 = 0; p1 < pelicanos.length; p1++) {
      if (dist(gaviotas[g].x, gaviotas[g].y, pelicanos[p1].x, pelicanos[p1].y) < 100) {
        if (pelicanos[p1].x > 0 && pelicanos[p1].x < 1250) {
          gaviotas[g].morirse()
          if (!mine.isPlaying()) {
            mine.play()
          }
        }
      }
    }
  }
  for (var g2 = 0; g2 < gaviotas2.length; g2++) {
    gaviotas2[g2].dibujarse();
    gaviotas2[g2].moverse();

    for (var p2 = 0; p2 < pelicanos.length; p2++) {
      if (dist(gaviotas2[g2].x, gaviotas2[g2].y, pelicanos[p2].x, pelicanos[p2].y) < 100) {
        if (pelicanos[p2].x > 0 && pelicanos[p2].x < 1250) {
          gaviotas2[g2].morirse()
          if (!mine.isPlaying()) {
            mine.play()
          }
        }
      }
    }

  }

  //Dibujo del pelicano
  for (var p = 0; p < pelicanos.length; p++) {
    pelicanos[p].dibujarse()
    pelicanos[p].moverse()
  }

  //Dibujo de la ballena
  if (frameCount >= 1) {

    if (bX < -15) {

      if (!ballenaSound.isPlaying()) {
        ballenaSound.play()
      }
      image(ballenaa, bX, bY)
      bX = bX + 1;
    } else if (bX == -15) {
      image(fondo, 0, 0)
      image(ballenaa, bX, bY)
      cancion.stop()
    }

  }
  
  
  //Dibuja las instrucciones para que queden encima de todo
  	image(instrucciones, 815, 820)
}


//FUNCION DE LOS TIBURONES
function tiburon(miX, miY, miTipo) {
  //Caracteristicas de cada tiburon 
  this.x = miX;
  this.y = miY;
  this.tipo = miTipo;
  this.estaVivo = true;


  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {

    if (this.estaVivo == true) {

      if (this.tipo == 1) {
        image(tiburon1, this.x, this.y)
      } else if (this.tipo == 2) {
        image(tiburon2, this.x, this.y)
      } else if (this.tipo == 3) {
        image(tiburon3, this.x, this.y)
      }

    }

    //Funcion de moverse

    this.moverse = function() {

      this.x = this.x - 1;

    }


    //Funcion de morirse
    this.morirse = function() {

      this.estaVivo = false;

    }

  }
}



//FUNCION DE LA TORTUGAS
function tortuga(miX, miY, miTipo) {

  //Caracteristicas de cada alga
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.tipo = miTipo;

  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {
    if (this.estaVivo == true) {

      if (this.tipo == 1) {
        image(tortuga1, this.x, this.y);
      } else if (this.tipo == 2) {
        image(tortuga2, this.x, this.y);
      }
    }
  }

  //Funcion de moverse
  this.moverse = function() {
    this.x = this.x + 0.5;
  }

  //Funcion de morirse
  this.morirse = function() {
    this.estaVivo = false;
  }
}


//FUNCION DE LOS NEMOS
function nemo(miX, miY, miTipo) {

  //Caracteristicas de cada nemo
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.tipo = miTipo;

  this.tamX2 = 150;
  this.tamY2 = 112;
  
  
    this.tamX = 211;
  this.tamY = 164;
  
  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {

    if (this.estaVivo == true) {
      if (this.tipo == 1) {
        image(nemo1, this.x, this.y, this.tamX, this.tamY)
      } else if (this.tipo == 2) {
        image(nemo2, this.x, this.y, this.tamX2, this.tamY2)
      }
    }
  }

  //Funcion de moverse
  this.moverse = function() {
    this.x = this.x + 1;
  }

  //Funcion de morirse
  this.morirse = function() {
    this.estaVivo = false;
  }

  //Funcion de arrastrarse
  this.arrastrar = function(){
   this.x = mouseX
   this.y = mouseY
  }
}


//FUNCION DE DORY
function dory(miX, miY, miTipo) {

  //Caracteristicas de cada dory
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.tipo = miTipo;

  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {

    if (this.estaVivo == true) {
      if (this.tipo == 1) {
        image(dory1, this.x, this.y)
      } else if (this.tipo == 2) {
        image(dory2, this.x, this.y)
      } else if (this.tipo == 3) {
        image(dory3, this.x, this.y)
      } else if (this.tipo == 4) {
        image(dorypapa, this.x, this.y)
      }

    }
  }

  //Funcion de moverse
  this.moverse = function() {
    if (this.tipo == 1 || this.tipo == 3) {
      this.x = this.x + 2;
    } else {
      this.x = this.x - 2;
    }
  }

  //Funcion de morirse  
  this.morirse = function() {
    this.estaVivo = false;
  }

  //Funcion de reproducirse
  this.reproducirse = function() {
    image(dory1, this.x + 50, this.y + 50, 60, 50)
    image(dorypapas, this.x, this.y)
  }
}

//FUNCION DE LA GAVIOTA
function gaviota(miX, miY, miTipo) {

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  this.tipo = miTipo;


  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      if (this.tipo == 1) {
        image(gaviota1, this.x, this.y, 55, 105)
      } else {
        image(gaviota2, this.x, this.y, 49, 90)
      }
    }
  }

  //Funcion de moverse
  this.moverse = function() {

    if (this.y < 170) {
      this.y = this.y + 0.2;
    }
  }

  //Funcion de morirse
  this.morirse = function() {
    this.estaVivo = false;
  }
}

//FUNCION PELICANO
function pelicanoss(miX, miY) {

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(pelicano, this.x, this.y, 131.4, 190)
    }
  }
  //Funcion de moverse
  this.moverse = function() {
    this.x = this.x - 1;
  }

  //Funcion de morirse
  this.morirse = function() {
    this.estaVivo = false;
  }

}

//FUNCION PEZ GLOBO
function globo(miX, miY, miEstado) {

  //Carateristicas 
  this.x = miX;
  this.y = miY;
  this.estado = miEstado;
  this.estaVivo = true;

  this.tamX = 300;
  this.tamY = 250;

  //variable booleana para saber si la bola esta creciendo o no
  this.creciendo = false;


  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {
    if (this.estaVivo == true) {

      image(globo2, this.x, this.y, this.tamX, this.tamY)

    }
  }

  //Funcion de moverse
  this.moverse = function() {
    this.x = this.x + 1.5;
  }

  //Funcion de engordarse
  this.engordarse = function() {
    this.estaVivo = false;
    image(globo1, this.x, this.y, this.tamX, this.tamY)
  }

  //Funcion de enflaquecerse
  this.enflaquecer = function() {
    this.estaVivo = true;
  }

  //Funcion que disminuye el tamaño del pez globo si no se esta haciendo click
  this.disminuir = function() {

    //revisa que el tamano de la bola sea por lo menos 20 y que la variable creciendo sea false
    if (!this.creciendo) {

      //reduce el tamano en 1
      this.tamX -= 1;
      this.tamY -= 1;
    }
  }


  //funcion que aumenta el tamano de la bola y recibe por parametro la velocidad de clics
  this.crecer = function(v) {

    //revisa que la velocidad sea por lo menos 200 clics por minuto
    if (v > 200) {

      //a la variable creciendo le asigna true
      this.creciendo = true;

      //aumenta el tamano de la bola en 1 unidad
      this.tamX += 1;
      this.tamY += 1;
    } else {

      //si la velocidad no es mayor a 200 se le asigna false a la variable creciendo
      this.creciendo = false;
    }
  }
}

//FUNCION DE LA BALLENA
function ballena(miX, miY) {

  //Caracterisitcas 
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;

  //Habilidades
  //Funcion de dibujarse
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(ballenaa, this.x, this.y)
    }
  }

  //Funcion de moverse
  this.moverse = function() {

    if (this.x < -10) {
      this.x = this.x + 1;
    }
  }
}

function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
}

//funcion que se activa si el mouse es arrastrado
function mouseDragged(){
  
  //Recorre la lista de nemos 1
  for (var n = 0; n < nemos.length; n++) {
    
    //Revisa si el mosue esta encima de alguna bola
     //revisa si el mouse esta encima de alguna bola
    if (dist(mouseX, mouseY, nemos[n].x, nemos[n].y) <nemos[n].tamX + 10) {

      //llama a la funcion arrastrar
      nemos[n].arrastrar();
    }
  }
  
    //Recorre la lista de nemos2
  for (var n2 = 0; n2 < nemos2.length; n2++) {
    
    //Revisa si el mosue esta encima de alguna bola
     //revisa si el mouse esta encima de alguna bola
    if (dist(mouseX, mouseY, nemos2[n2].x, nemos2[n2].y) <nemos2[n2].tamX + 10) {

      //llama a la funcion arrastrar
      nemos2[n2].arrastrar();
    }
  }
  
}



