class Jogador{
    constructor(){
      // THIS - REFERÊNCIA DA CLASSE.
      this.imagem = loadImage ("./JOGO/imgJogo/persMB.png"); 
      this.posX = 300;
      this.posY = 280;
      this.velocidade = 5;
      this.larg = 60;
      this.alt = 70;
      
      // MAPEAMENTO DO JOGADOR.
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.alt;
      this.xInicial = this.posX;
      this.xFinal = this.posX +this.larg;
    }
    mova(){
      image(this.imagem, this.posX, this.posY, this.larg, this.alt);
      
      //keyIsDown - TECLAS UTILIZADAS PARA MOVIMENRTAR O JOGADOR.
      if((keyIsDown(37)) && (this.xInicial>-5)){
        this.posX -= this.velocidade;
      }
      if((keyIsDown(39)) && (this.xFinal<600)){
        this.posX += this.velocidade;
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.alt;
      this.xInicial = this.posX;
      this.xFinal = this.posX +this.larg;
  }
  }