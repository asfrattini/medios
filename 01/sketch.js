function setup() {
  createCanvas(600, 600);
  
  //Color del fondo
  background(244, 222, 183);
  
 //Triangulo color naranja
  noStroke();
  fill(162, 119, 56);
  triangle(600, 268, 600, 184, 484, 268);
  //Circulos arriba derecha
  noStroke();
  fill(422, 207, 86, 65)
  arc(436, 44, 112, 112, 0, 2*PI);
  strokeWeight(1);
  stroke(0);
  fill(255);
  arc(436, 44, 88, 88, 0, 2*PI);
  strokeWeight(4);
  arc(436, 44, 56, 56, 0, 2*PI);
  stroke(110, 39, 30);
  arc(436, 44, 50, 50, 0, 2*PI);
  
  
  //Circulo amarillo
  noStroke();
  fill(248, 209, 101);
  arc(294, 568, 110, 110, 0, 2*PI);
  //Circulo piel
  fill(218, 193, 161);
  arc(292, 568, 92, 92, 0, 2*PI);
  //Circulo azul abajo
  fill(70,127,148);
  arc(288, 568, 72, 72, 0, 2*PI);
   //Amarillo difuminado
  fill(228, 176, 54, 95);
  arc(36, 80, 140, 140, 0, 2*PI);
  stroke(228, 176, 54, 80);
  strokeWeight(10);
  noFill();
  arc(36, 80, 150, 150, 0, 2*PI);
  stroke(228, 176, 54, 50);
  arc(36, 80, 170, 170, 0, 2*PI);
  stroke(228, 176, 54, 20);
  arc(36, 80, 190, 190, 0, 2*PI);
  stroke(228, 176, 54, 10);
  arc(36, 80, 210, 210, 0, 2*PI);
  //Circulo rojo difuminado
  fill(255, 0, 0, 95);
  arc(0, 0, 140, 140, 0, 2*PI);
  stroke(255, 0, 0, 80);
  strokeWeight(10);
  noFill();
  arc(0, 0, 150, 150, 0, 2*PI);
  stroke(255, 0, 0, 50);
  arc(0, 0, 170, 170, 0, 2*PI);
  stroke(255, 0, 0, 20);
  arc(0, 0, 190, 190, 0, 2*PI);
  stroke(255, 0, 0, 10);
  arc(0, 0, 210, 210, 0, 2*PI);
 
  //Circulo rojo de color
  noStroke();
  fill(181, 31, 24);
  arc(36, 80, 103, 103, 0, 2*PI);
  //Circulo negro relleno
  fill(0);
  arc(0, 0, 120, 128, 0, 2*PI);
 
  
  //Lineas negras delgadas
  stroke(0);
  strokeWeight(1);
  line(328, 500, 224, 600);
  line(532, 560, 600, 484);
  line(536, 565, 600, 492);
  line(564, 348, 564, 600);
  line(520, 480, 600, 392);
  line(516, 476, 600, 384);
  line(510, 472, 600, 376);
  line(320, 496, 424, 496);
  line(324, 524, 440, 524);
  line(220, 388,600, 388);
  line(524, 192, 600, 124);

  
  //Color del triangulo azul
  fill(119, 181, 196, 60);
  noStroke();
  triangle(16, 212, 220, 0, 584, 316)
  //stroke(105, 159, 188, 70);
  //strokeWeight(20);
  //line(16, 212, 584, 316);
  //Lineas del triangulo azul
  strokeWeight(1);
  stroke(0);
  line(16, 212, 220, 0);
  line(220, 0, 584, 316);


  //Linea roja arriba de negra
	stroke(148, 70, 64);
  strokeWeight(2);
  line(452, 143, 605, 67);
  
  
  //Lineas negras delgadas al frente 
  stroke(0);
  strokeWeight(1);
  line(216, 0, 216, 88);
  line(0, 200, 384, 88);
 	line(464, 108, 605, 40);
	line(466, 112, 605, 44);
  line(452, 144, 605, 68);
  line(568, 128, 592, 108);
  
  
  
  //Arco azul y amarillo, borde negro y relleno blanco
	
  stroke(0);
  strokeWeight(1);
  fill(255);
  arc(396, 388, 112, 112, PI, 2*PI);
  arc(508, 388, 112, 112, PI, 2*PI);
  
  //Arcos negros y rojos derecha arriba
  noFill();
  stroke(148, 70, 64);
  strokeWeight(3);
  arc(568, 168, 79, 79, PI-1/4*PI, 2*PI-1/4*PI);
  strokeWeight(6);
  arc(625, 114, 79, 79, PI-1/4*PI, 2*PI-1/4*PI);
  stroke(0);
  strokeWeight(1);
  arc(568, 168, 76, 76, PI-1/4*PI, 2*PI-1/4*PI);
  arc(625, 114, 76, 76, PI-1/4*PI, 2*PI-1/4*PI);
 
  
  
  
  //Rectangulos rellenos negros
  
  fill(0);
  quad( 452, 88, 464, 100, 450, 116, 438, 104);
  quad( 426, 118, 438, 130, 424, 145, 412, 133);
  quad( 398, 148, 412, 161, 395, 178, 382, 167);
  quad( 376, 160, 382, 167, 364, 188, 356, 180);
  quad( 377, 200, 356, 224, 344, 212, 364, 188);
  quad( 260, 192, 300, 236, 284, 252, 244, 216);
  quad( 236, 228, 222, 248, 256, 280, 274, 261);
  quad( 152, 184, 222, 248, 204, 276, 132, 232);
  quad( 284, 252, 296, 264, 284, 276, 270, 264);
  quad( 284, 274, 300, 288, 286, 307, 271, 295);
  quad( 162, 340, 182, 354, 154, 384, 140, 372);
  
  //Rectangulos rellenos verde
  fill(137, 165, 110);
  noStroke();
  quad( 118, 268, 106, 296, 162, 340, 186, 304);
  quad( 256, 280, 270, 292, 258, 306, 240, 296);
  quad( 174, 400, 191, 416, 168, 444, 148, 432);
  
  //Rectangulos rellenos naranja
  fill( 161, 93, 34);
  quad( 68, 392, 96, 324, 142, 368, 112, 412);
  quad( 312, 277, 324, 262, 312, 248, 296, 264);
  
  //Rectangulos rellenos azul
  fill( 126, 178, 179);
  quad( 203, 273, 240, 296, 216, 320, 186, 304);
  
  //Rectangulo negro
  stroke(0);
  strokeWeight(1);
  fill(0);
  quad(0, 352, 168, 444, 156, 456, 0, 368);
  //Rectangulos negros grandes
  noFill();
  quad( 168, 444, 148, 432, 452, 88, 464, 100);
  quad( 148, 432, 382, 167, 376, 160, 119, 418);
  quad( 119, 418, 300, 236, 260, 192, 112, 412);
  quad( 112, 412,  222, 248, 152, 184, 68, 392);
  line( 96, 324, 191, 416);
  line( 106, 296, 220, 384);
  line( 118, 268, 256, 340);
  line( 132, 232, 276, 316);
  line( 152, 184, 286, 307);
  line( 236, 228, 300, 288);
  line( 244, 216, 310, 276);
  line( 260, 192, 324, 262);
  line( 336, 200, 356, 224);
  line( 356, 180, 374, 205);
  line( 376, 160, 394, 178);
  line( 397, 148, 412, 161);
  line( 412, 132, 424, 144);
  line( 426, 118, 438, 130);
  line( 438, 104, 450, 116);
  
  //Arcos sin relleno desfazados
  stroke(0);
  noFill();
  arc(456, 448, 112, 112, PI-PI/18, 2*PI-PI/18);
  arc(566, 448, 112, 112, PI+PI/18, 2*PI);
  
  //Arco pequeño arriba color difum
  stroke(131, 157, 110, 80);
  arc(568, 0, 40, 40, 0, 2*PI);
  //Arco pequeño arriba
  stroke(0);
  arc(568, 0, 32, 32, 0, 2*PI);
  
  //Colores
  
  stroke(243, 228, 130);
  strokeWeight(4);
  arc(508, 388, 107, 107, PI, 2*PI);
  
  stroke(166, 174, 164);
  strokeWeight(4);
  arc(396, 388, 107, 107, PI, 2*PI);
  
    
  //Arco rojo con relleno blanco
  strokeWeight(4);
  stroke(161, 59, 22);
  fill(255);
  arc(620, 388, 107, 107, PI, 2*PI);
  

  
  //Rectangulito con lineas
  fill(146, 136, 104);
  strokeWeight(0);
  quad(556, 389, 562, 399, 605, 368, 605, 356);
  stroke(0);
  strokeWeight(2);
  noFill();
  quad(492, 448, 486, 440, 605, 356, 605, 368); 
  fill(0);
  quad(492, 448, 486, 440, 506, 426, 512, 434);
  line(528, 410, 533, 418);
  line(534, 406, 538, 414);
  line(540, 403, 544, 411);
  line(546, 400, 550, 407);
  line(551, 394, 556, 403);
  line(556, 389, 562, 399);

  
  
  //Líneas negras gruesas
  noFill();
  stroke(0);
  strokeWeight(4);

  line(356, 452, 136, 600);
  line(528, 552, 600, 472);
  line(508, 0, 360, 560);
  
	//Lineas semi triangulo negro y verde
  strokeWeight(2);
  fill(0);
  beginShape();
  vertex(605, 60);
  vertex(564, 34);
  vertex(426, 222);
  vertex(564, 44);
  vertex(605, 66);
  endShape();
  
  fill(137, 165, 110);
  noStroke();
  beginShape();
  vertex(605, 66);
  vertex(564, 44);
  vertex(508, 116);
  vertex(564, 52);
  vertex(605, 68);
  endShape();
  
  //Lineas rectangulares negras y rojo
  fill(0);
  strokeWeight(1);
  beginShape();
  vertex(588, 258);
  vertex(588, 264);
  vertex(196, 340);
  vertex(196, 332);
  endShape();
  
  fill(148, 70, 64);
  stroke(0);
  beginShape();
  vertex(188, 384);
  vertex(188, 392);
  vertex(544, 286);
  vertex(544, 280);
  endShape();
}
