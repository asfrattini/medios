function setup() 
{
  createCanvas(680, 680);
  background(255);
}

//CODIGO NORMALES HACIA LA DERECHA (IMPARES)

function dibujaNegro(x,y,col)
{
  noStroke();
  fill(255);
  rect(x, y, 20, 20);
  fill(col);
  triangle(x, y, x+20, y, x+20, y+20);
}


function dibujaBlanco(x,y,col)
{
  noStroke();
  fill(255);
  rect(x, y, 20, 20);
  fill(col);
  triangle(x, y, x, y+20, x+20, y+20);
}

function dibujaFila(posX, posY, numeroFila, col)
{
  numeroFila = numeroFila%4
  
  if(numeroFila == 0){
  	dibujaBlanco(posX,posY,col);
    dibujaBlanco(posX + 20,posY,col);
    dibujaNegro(posX + 40,posY,col);
    dibujaNegro(posX + 60,posY,col);
    dibujaBlanco(posX + 80,posY,col);
    dibujaBlanco(posX + 100,posY,col);
    dibujaNegro(posX + 120,posY,col);
    dibujaNegro(posX + 140,posY,col);
  }
  
  if(numeroFila == 1){
    dibujaBlanco(posX,posY,col);
    dibujaNegro(posX + 20,posY,col);
    dibujaNegro(posX + 40,posY,col);
    dibujaBlanco(posX + 60,posY,col);
    dibujaBlanco(posX + 80,posY,col);
    dibujaNegro(posX + 100,posY,col);
    dibujaNegro(posX + 120,posY,col);
    dibujaBlanco(posX + 140,posY,col);
  }
  
  if(numeroFila == 2){
    dibujaNegro(posX,posY,col);
    dibujaNegro(posX + 20,posY,col);
    dibujaBlanco(posX + 40,posY,col);
    dibujaBlanco(posX + 60,posY,col);
    dibujaNegro(posX + 80,posY,col);
    dibujaNegro(posX + 100 ,posY,col);
    dibujaBlanco(posX + 120 ,posY,col);
    dibujaBlanco(posX + 140,posY,col);
  }
  
  
  if(numeroFila == 3){
    dibujaNegro(posX,posY,col);
    dibujaBlanco(posX + 20,posY,col);
    dibujaBlanco(posX + 40,posY,col);
    dibujaNegro(posX + 60,posY,col);
    dibujaNegro(posX + 80 ,posY,col);
    dibujaBlanco(posX + 100 ,posY,col);
    dibujaBlanco(posX + 120,posY,col);
    dibujaNegro(posX + 140,posY,col);
  }
}

function dibujaCuadro(xloc, yloc,tipo, col)
{
	for (i = 0; i < 8; i++) {
    dibujaFila(xloc, yloc + i*20,(i+tipo)%4, col);
	}
}

//CODIGO DIAGONALES HACIA LA IZQUIERDA (PARES)

function dibujaNegroD(x,y,col)
{
  noStroke();
  fill(255);
  rect(x, y, 20, 20);
  fill(col);
  triangle(x, y, x+20, y, x, y+20);
}
 

function dibujaBlancoD(x,y,col)
{
  noStroke();
  fill(255);
  rect(x, y, 20, 20);
  fill(col);
  triangle(x+20, y, x+20, y+20, x, y+20);
}


function dibujaFilaD(posX, posY, numeroFila, col)
{
  numeroFila = numeroFila%4
  
  
  if(numeroFila == 0){
  	dibujaBlancoD(posX,posY,col);
    dibujaBlancoD(posX + 20,posY,col);
    dibujaNegroD(posX + 40,posY,col);
    dibujaNegroD(posX + 60,posY,col);
    dibujaBlancoD(posX + 80,posY,col);
    dibujaBlancoD(posX + 100,posY,col);
    dibujaNegroD(posX + 120,posY,col);
    dibujaNegroD(posX + 140,posY,col);
  }
  
  
  
  if(numeroFila == 1){
    dibujaNegroD(posX,posY,col);
    dibujaBlancoD(posX + 20,posY,col);
    dibujaBlancoD(posX + 40,posY,col);
    dibujaNegroD(posX + 60,posY,col);
    dibujaNegroD(posX + 80 ,posY,col);
    dibujaBlancoD(posX + 100 ,posY,col);
    dibujaBlancoD(posX + 120,posY,col);
    dibujaNegroD(posX + 140,posY,col);
  }
  
  
  if(numeroFila ==2){
    dibujaNegroD(posX,posY,col);
    dibujaNegroD(posX + 20,posY,col);
    dibujaBlancoD(posX + 40,posY,col);
    dibujaBlancoD(posX + 60,posY,col);
    dibujaNegroD(posX + 80,posY,col);
    dibujaNegroD(posX + 100 ,posY,col);
    dibujaBlancoD(posX + 120 ,posY,col);
    dibujaBlancoD(posX + 140,posY,col);
  } 
  
  if(numeroFila == 3){
    dibujaBlancoD(posX,posY,col);
    dibujaNegroD(posX + 20,posY,col);
    dibujaNegroD(posX + 40,posY,col);
    dibujaBlancoD(posX + 60,posY,col);
    dibujaBlancoD(posX + 80,posY,col);
    dibujaNegroD(posX + 100,posY,col);
    dibujaNegroD(posX + 120,posY,col);
    dibujaBlancoD(posX + 140,posY,col);
  }
  
  
  
  
  
  
  
}

function dibujaCuadroD(xloc, yloc,tipo, col)
{
	for (i = 0; i < 8; i++) {
    dibujaFilaD(xloc, yloc + i*20,(i+tipo)%4, col);
	}
}

//DIBUJO

function draw() {
  
  var negro = color(60, 60, 40); 
  var amarillo = color(246, 196, 63);
  
  //Cuadrados izquierda derecha fila 1
  dibujaCuadro(20, 20,0, negro);
  dibujaCuadroD(180, 20, 0, negro);
   dibujaCuadro(340, 20,0, negro);
  dibujaCuadroD(500, 20, 0, negro);
  
  //Cuadrados izquierda derecha fila 2
  dibujaCuadroD(20, 180, 1, negro);
  dibujaCuadro(180, 180 ,1, amarillo);
  dibujaCuadroD(340, 180, 1, amarillo);
  dibujaCuadro(500, 180, 1, negro);
  
  //Cuadrados izquierda derecha fila 3
 	dibujaCuadro(20, 340,0, negro);
  dibujaCuadroD(180, 340, 0, amarillo);
   dibujaCuadro(340, 340,0, amarillo);
  dibujaCuadroD(500, 340, 0, negro);
  
  //Cuadrados izquierda derecha fila 4
  dibujaCuadroD(20, 500, 1, negro);
  dibujaCuadro(180, 500 ,1, negro);
  dibujaCuadroD(340, 500, 1, negro);
  dibujaCuadro(500, 500, 1, negro);
 
}