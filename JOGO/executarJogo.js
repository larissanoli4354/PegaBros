function executarJogo(){
    background(imgCenario);
  //MOVIMENTAR O JOGADOR.
  jogador.mova();
  
  //ALTERAÇÃO DOS OBJETOS E VELOCIDADE.
   for(let i = 0;i<objeto.length; i++){
    objeto[i].mova();
    if (objeto[i].posY >400){
        objeto [i]= new Objetos(objeto[i].posX);
    }
     //CONDIÇÃO DE COLISÃO DO JOGADOR. É NECESSÁRIO O MAPEAMENTO DO OBJETO.
    if (
      jogador.xInicial<objeto[i].xFinal &&
      jogador.xFinal>objeto[i].xInicial &&                                   
      jogador.yInicial<objeto[i].yFinal &&
      jogador.yFinal>objeto[i].yInicial
      ){
      // CONDIÇÃO PARA QUE ZERA A PONTUAÇÃO ASSIM QUE O PERSONAGEM TOQUE NO INIMIGO.
      if(objeto[i].imagem == imgObjetos [4]){
      objeto[i] = new Objetos(objeto[i].posX);
       pontos = 0 
      // SOM AO TOCAR NO INIMIGO.
       somIni.play()
       vidas -=1 
       if(vidas == 0){
        controleTela = "GAMEOVER";
        vidas = 3;
        pontos = 0;
        jogador = new Jogador;
       }
     }else{
     //SOMA DOS PONTOS SE O PERSONAGEM TOCAR NOS OBJETOS.
       objeto[i] = new Objetos(objeto[i].posX);
       pontos ++
      // SOM AO TOCAR NOS OBJETOS.
       somObj.play()
     }
    
    }
     //TEXTO DA PONTUAÇÃO.
  text("PONTUAÇÃO: " + pontos,280,40);
  text("VIDAS: " + vidas,200,40);
    }
}