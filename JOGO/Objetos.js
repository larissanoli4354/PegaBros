class Objetos{
    constructor(parametroX){
      //CARACTERÍSTICAS DO OBJETO.
      this.imagem = imgObjetos [int(random(0,5.9))];
      this.posX = parametroX;
      this.posY = 0;
      this.velocidade = random(1,5 + pontos);
      this.largura = 50;
      this.altura = 50;
      //MAPEAMENTO DOS OBJETOS.
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX +this.largura;
    }
    mova(){
      this.posY += this.velocidade;
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX +this.largura;
    }
  }