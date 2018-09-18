//Variables que me dan el color del fondo segun la hora del dia

var colorMadrugada = (254, 59, 1);
var colorManana = (252, 140, 1);
var colorMedioDia = (254, 226, 3);
var colorTarde = (47, 125, 158);
var colorTardeNoche = (11, 35, 148);
var colorNoche = (3, 19, 79);

//Variables de horas
var horas;

//Variable del outfit

var outfit = 0;

function setup() {
  createCanvas(800, 800);


}

function draw() {



  //Posibilidad de poner la hora manualmente, quitar el comentario de la segunda linea y comentar la primera

  horas = hour();
  //horas = 14;

  //Print que imprime la hora actual para poder ubicarse en el tiempo durante el dia\
  print(horas);


  //If que decide el outfit de la persona dependiendo de la hora y le da color al fondo
  //En la mañana, entre 7pm y 7 am le pone pijama
  //Entre 8am y 12pm le pone traje porque está trabajando
  //Entre 12 y 2 pm le pone el traje sin saco porque es la hora de almuerzo
  //Entre 2 y 5 pm le pone traje nuevamente porque está trabajando
  //Entre 5 y 7 pm le pone ropa comoda para estar en la casa descansando

  if (horas >= 1 && horas < 7) {
    outfit = 1;

    //Fondo elegido
    background(colorNoche);

  } else if (horas >= 7 && horas < 8) {
    outfit = 2;

    //Fondo elegido
    background(colorMadrugada);

  } else if (horas >= 8 && horas < 12) {
    outfit = 3;

    //Fondo elegido
    background(colorManana);

  } else if (horas >= 12 && horas < 14) {
    outfit = 4;

    //Fondo elegido
    background(colorMedioDia)

  } else if (horas >= 14 && horas < 17) {
    outfit = 3;

    //Fondo elegido
    background(colorTarde)

  } else if (horas >= 17 && horas < 19) {
    outfit = 5;

    //Fondo elegido
    background(colorTardeNoche)

  } else if (horas >= 19 && horas <= 24) {
    outfit = 1;

    //Fondo elegido
    background(colorNoche);

  }



  //	Dibujo base de la figura humana sin ropa

  //Peloo
  fill(255, 248, 0)
  beginShape()
  vertex(300, 209)
  vertex(263, 129)
  vertex(303, 168)
  vertex(292, 70)
  vertex(326, 101)
  vertex(331, 51)
  vertex(347, 107)
  vertex(376, 35)
  vertex(380, 76)
  vertex(402, 20)
  vertex(432, 82)
  vertex(452, 22)
  vertex(479, 100)
  vertex(505, 78)
  vertex(499, 144)
  vertex(520, 138)
  vertex(501, 205)
  endShape(CLOSE)


  //Cabeza y cuello
  fill(219, 158, 134)
  rect(375, 250, 50, 100)
  ellipse(width / 2, 200, 200, 200)

  //Ojoss
  push()
  fill(255)
  ellipse(372, 180, 39, 62)
  ellipse(424, 180, 39, 62)

  //pupilas
  fill(0)
  ellipse(372, 198, 26, 25)
  ellipse(424, 198, 26, 25)

  //Nariz
  line(398, 211, 382, 244)
  line(382, 244, 404, 244)

  //Bocaa
  fill(255, 0, 0)
  arc(415, 274, 53, 29, PI - PI / 30, 0 - PI / 5)
  noFill()
  arc(395, 242, 111, 68, 0, PI)

  pop()


  //Cuerpoo lado izquierdo
  beginShape();
  vertex(315, 341)
  vertex(197, 460)
  vertex(197, 508)
  vertex(228, 508)
  vertex(232, 489)
  vertex(305, 416)
  vertex(305, 781)
  vertex(395, 780)
  vertex(395, 637)
  vertex(395, 780)

  //Cuerpo lado derecho
  vertex(498, 781)
  vertex(498, 416)
  vertex(571, 489)
  vertex(575, 508)
  vertex(606, 508)
  vertex(606, 460)
  vertex(488, 341)
  vertex(422, 341)
  endShape(CLOSE);



  //If que dibuja cada uno de los outfits

  if (outfit == 1) {

    //Cuerpoo lado izquierdo con pijama azul
    beginShape();
    fill(41, 211, 211)
    vertex(315, 341)
    vertex(197, 460)
    vertex(215, 441)
    vertex(245, 476)
    vertex(305, 416)
    vertex(305, 736)
    vertex(395, 736)
    vertex(395, 637)
    vertex(395, 736)

    //Cuerpo lado derecho con pijama azul
    vertex(498, 736)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    endShape(CLOSE);

    //Linea de la cintura
    line(305, 577, 498, 577)

    //Gorrito de dormir azul
    beginShape()
    vertex(320, 226)
    vertex(292, 210)
    vertex(236, 107)
    vertex(337, 7)
    vertex(468, 7)
    vertex(551, 90)
    vertex(514, 216)
    vertex(477, 216)
    vertex(445, 142)
    vertex(356, 142)
    vertex(320, 225)
    endShape()


    //Circulitos arriba
    push()
    fill(255)
    noStroke()
    ellipse(315, 374, 20, 20)
    ellipse(350, 374, 20, 20)
    ellipse(385, 374, 20, 20)
    ellipse(420, 374, 20, 20)
    ellipse(455, 374, 20, 20)
    ellipse(490, 374, 20, 20)

    //Circulitos abajo en el pantalon
    ellipse(319, 595, 20, 20)
    ellipse(354, 595, 20, 20)
    ellipse(389, 595, 20, 20)
    ellipse(424, 595, 20, 20)
    ellipse(459, 595, 20, 20)
    ellipse(488, 595, 20, 20)

    //Circulitos en el gorro
    ellipse(337, 28, 20, 20)
    ellipse(372, 28, 20, 20)
    ellipse(407, 28, 20, 20)
    ellipse(442, 28, 20, 20)
    ellipse(470, 28, 20, 20)

    pop()


    //Camita
    push()
    fill(0)
    rect(-10, 549, 29, 266)
    rect(-8, 661, 262, 147)
    
    //Almohada
    fill(255)
    ellipse(58, 642, 80, 35)
    
    //Cobija
    rect(105, 661, 148, 147)
    
    //Texto Bed
    fill(0)
    textSize(50)
    text("BED", 125, 750)
    pop()
    
  } else if (outfit == 2) {

    //Cuerpoo lado izquierdo con camiseta rosada
    beginShape();
    fill(216, 3, 145)
    vertex(315, 341)
    vertex(261, 395)
    vertex(274, 447)
    vertex(305, 416)
    vertex(305, 577)
    //Cuerpo lado derecho con camiseta rosada
    vertex(498, 577)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    endShape(CLOSE);

    //Pantalones azules oscuros
    push()
    fill(0, 0, 255)
    rect(305, 577, 193, 120)
    pop()
    //Linea de la cintura
    line(305, 577, 498, 577)

    //Pesa de gimnasio
    beginShape()
    fill(200)
    vertex(554, 536)
    vertex(554, 619)
    vertex(598, 619)
    vertex(598, 584)
    vertex(651, 584)
    vertex(651, 619)
    vertex(695, 619)
    vertex(695, 536)
    vertex(652, 536)
    vertex(652, 560)
    vertex(597, 560)
    vertex(597, 536)
    vertex(554, 536)
    endShape()


  } else if (outfit == 3) {

    //Cuerpo lado izquierdo con camisa blanca
    beginShape();
    fill(255)
    vertex(315, 341)
    vertex(261, 395)
    vertex(274, 447)
    vertex(305, 416)
    vertex(305, 577)
    //Cuerpo lado derecho con camisa blanca
    vertex(498, 577)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    endShape(CLOSE);
    //Linea de botones de la camisa
    line(401, 342, 401, 577)
    ellipse(392, 365, 9, 9)
    ellipse(392, 415, 9, 9)
    ellipse(392, 465, 9, 9)
    ellipse(392, 513, 9, 9)
    ellipse(392, 563, 9, 9)

    //TRAJEE

    //Cuerpoo lado izquierdo 
    beginShape();
    fill(40)
    vertex(315, 341)
    vertex(197, 460)
    vertex(215, 441)
    vertex(245, 476)
    vertex(305, 416)
    vertex(305, 736)
    vertex(305, 577)
    vertex(378, 577)
    vertex(381, 341)
    endShape()

    //Cuerpo lado derecho 
    beginShape()
    vertex(498, 736)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    vertex(425, 577)
    endShape(CLOSE);


    //Pantalones negros
    push()
    fill(50)
    rect(305, 577, 193, 180)
    pop()

    //Linea del pantalon
    line(395, 637, 395, 780)
    //Zapatos gris oscuro
    push()
    fill(100)
    rect(265, 740, 275, 40)
    pop()

  } else if (outfit == 4) {

    //Cuerpo lado izquierdo con camisa blanca
    beginShape();
    fill(255)
    vertex(315, 341)
    vertex(261, 395)
    vertex(274, 447)
    vertex(305, 416)
    vertex(305, 577)
    //Cuerpo lado derecho con camisa blanca
    vertex(498, 577)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    endShape(CLOSE);
    //Linea de botones de la camisa
    line(401, 342, 401, 577)
    ellipse(392, 365, 9, 9)
    ellipse(392, 415, 9, 9)
    ellipse(392, 465, 9, 9)
    ellipse(392, 513, 9, 9)
    ellipse(392, 563, 9, 9)

    //Pantalones negros
    push()
    fill(50)
    rect(305, 577, 193, 180)
    pop()

    //Linea del pantalon
    line(395, 637, 395, 780)
    //Zapatos gris oscuro
    push()
    fill(100)
    rect(265, 740, 275, 40)
    pop()

    //Lonchera del almuerzoo
    push()
    fill(255, 0, 0)
    arc(627, 542, 125, 80, PI, 2 * PI)
    rect(547, 542, 162, 99)
    fill(0)
    textSize(40)
    text("LUNCH", 558, 600)
    pop()


  } else if (outfit == 5) {


    //Cuerpo lado izquierdo con camiseta azul
    beginShape();
    fill(0, 0, 255)
    vertex(315, 341)
    vertex(261, 395)
    vertex(274, 447)
    vertex(305, 416)
    vertex(305, 577)
    //Cuerpo lado derecho con camiseta azul
    vertex(498, 577)
    vertex(498, 416)
    vertex(559, 477)
    vertex(591, 444)
    vertex(488, 341)
    vertex(422, 341)
    endShape(CLOSE);

    //Pantalones grises oscuros
    push()
    fill(50)
    rect(305, 577, 193, 120)
    pop()
    //Linea de la cintura
    line(305, 577, 498, 577)

    //Televisionn
    push()
    fill(0)
    rect(74, 727, 168, 15)
    rect(131, 691, 56, 41)
    strokeWeight(10)
    fill(255)
    rect(21, 534, 275, 168)
    fill(0)
    textSize(100)
    text("TV", 100, 650)
    pop()
  }
}