// VARIÁVEIS DA CONFIGURAÇÃO DO JOGO.
var imgCenario;
var jogador;
// [] VARIÁVEL QUE ARMAZENA VÁRIOS ITENS, COMO EM UMA LISTA.
var imgObjetos = [];
var objeto = [];
// VARÍAVEL DOS PONTOS.
var pontos = 0;
// VARÍAVEIS DOS SONS.
var somObj;
var somIni;
// VÁRIAVEL DO MENU
var imgAbertura;
var controleTela = "INICIO";
var imgFim;
var vidas = 3;
  
function preload(){
  imgCenario = loadImage ("./JOGO/imgJogo/cenario.png");
  
  // CARREGAMENTO DA IMAGEM DOS OBJETOS
  imgObjetos [0] = loadImage ("./JOGO/imgJogo/cogverde.png");
  imgObjetos [1] = loadImage ("./JOGO/imgJogo/cogvermelho.png");
  imgObjetos [2] = loadImage ("./JOGO/imgJogo/block.png");
  imgObjetos [3] = loadImage ("./JOGO/imgJogo/estrela.png");
  imgObjetos [4] = loadImage ("./JOGO/imgJogo/goomba.png");
  imgObjetos [5] = loadImage ("./JOGO/imgJogo/flor.png");
  
  // CRIAÇÃO DE NOVOS OBJETOS.
  objeto[0] = new Objetos(40);
  objeto[1] = new Objetos(110);
  objeto[2] = new Objetos(180);
  objeto[3] = new Objetos(240);
  objeto[4] = new Objetos(400);
  objeto[5] = new Objetos(500);
  
    // CRIAÇÃO DE UM NOVO JOGADOR.
  jogador = new Jogador();

  // CARREGAMENTO DA IMAGEM DO MENU
  imgAbertura = loadImage("./JOGO/imgJogo/menu.png");

  // CARREGAMENTO DA IMAGEM GAME OVER
  imgFim = loadImage("./JOGO/imgJogo/gameOver.png");
  
  // CARREGAMENTO DOS SONS.
  somObj = loadSound ("./JOGO/SONS/somObjeto.mp3");
  somIni = loadSound ("./JOGO/SONS/somBomb.mp3");
  
}

function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode==13){
    controleTela = "JOGO";
  }

  if(keyCode==32){
    controleTela = "INICIO";
  }
}

// DRAW - O QUE SERÁ EXIBIDO.
function draw() {
if(controleTela == "INICIO"){
  mostraAbertura();
}
if(controleTela == "JOGO"){
  executarJogo();
}
if(controleTela == "GAMEOVER"){
  mostraGameOver();
}
}



