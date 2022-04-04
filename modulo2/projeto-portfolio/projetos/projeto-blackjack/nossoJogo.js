   const primeiraCartaUsuario = comprarCarta();
   const segundaCartaUsuario = comprarCarta();
   const primeiraCartaIA = comprarCarta();
   const segundaCartaIA = comprarCarta();

   const somaCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   const somaCartasIA = primeiraCartaIA.valor + segundaCartaIA.valor

   console.log("Valores Usuário:", primeiraCartaUsuario.texto, segundaCartaUsuario.texto, "=", somaCartasUsuario)
   console.log("Valores Computador:", primeiraCartaIA.texto, segundaCartaIA.texto, "=", somaCartasIA)

   if(confirm("Boas vindas ao jogo de Blackjack! Gostaria de começar um novo jogo?")) {
      if(somaCartasUsuario > somaCartasIA) {
         console.log("O usuário ganhou!")
      } 
      else if(somaCartasUsuario < somaCartasIA) {
         console.log("O computador venceu!")
      }
      else if(somaCartasUsuario === somaCartasIA) {
         console.log("Empate!")
      }
   } else {
      console.log("O jogo acabou")
   }