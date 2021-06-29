const cartaUsuario = [comprarCarta(), comprarCarta()];
const cartaComputador = [comprarCarta(), comprarCarta()];
const somaResultados = [
  cartaUsuario[0].valor + cartaUsuario[1].valor,
  cartaComputador[0].valor + cartaComputador[1].valor,
];
const comprarCartaESomarResultadoUsuario = () => {
  cartaUsuario.push(comprarCarta());
  somaResultados[0] += cartaUsuario[cartaUsuario.length - 1].valor;
};
const comprarCartaESomarResultadoComputador = () => {
  cartaComputador.push(comprarCarta());
  cartaComputador.push(comprarCarta());
  somaResultados[1] += cartaComputador[cartaComputador.length - 1].valor;
};
const quemGanhou = () => {
  if (
    (somaResultados[0] <= 21 && somaResultados[0] > somaResultados[1]) ||
    (somaResultados[1] > 21 && somaResultados[1] > somaResultados[0])
  ) {
    return "O usuário ganhou!";
  } else if (
    (somaResultados[1] <= 21 && somaResultados[1] > somaResultados[0]) ||
    (somaResultados[0] > 21 && somaResultados[0] > somaResultados[1])
  ) {
    return "O computador ganhou!";
  } else {
    return "Empate!";
  }
};
const iniciarJogo = () => {
  if (
    (cartaUsuario[0].valor === 11 && cartaUsuario[1].valor === 11) ||
    (cartaComputador[0].valor === 11 && cartaComputador[1].valor === 11)
  ) {
    cartaUsuario = [comprarCarta(), comprarCarta()];
    cartaComputador = [comprarCarta(), comprarCarta()];
  }

  if (
    confirm(
      `Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto}. \nA carta revelada do computador é ${cartaComputador[0].texto}. \nDeseja comprar mais uma carta?`
    )
  ) {
    comprarCartaESomarResultadoUsuario();
    if (
      confirm(
        `Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} ${cartaUsuario[2].texto}. \nA carta revelada do computador é ${cartaComputador[0].texto}. \nDeseja comprar mais uma carta?`
      )
    ) {
      comprarCartaESomarResultadoUsuario();
      alert(
        `Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} ${
          cartaUsuario[2].texto
        } ${cartaUsuario[3].texto}. Sua pontuação é ${
          somaResultados[0]
        } \nA carta revelada do computador é ${cartaComputador[0].texto} ${
          cartaComputador[1].texto
        }. A pontuação do computador é ${somaResultados[1]}. \n${quemGanhou()}`
      );
    } else {
      comprarCartaESomarResultadoComputador();
      alert(
        `Suas cartas são ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} ${
          cartaUsuario[2].texto
        }. Sua pontuação é ${
          somaResultados[0]
        } \nAs cartas reveladas do computador são ${cartaComputador[0].texto} ${
          cartaComputador[1].texto
        } ${cartaComputador[2].texto} ${
          cartaComputador[3].texto
        }. A pontuação do computador é ${somaResultados[1]}. \n${quemGanhou()}`
      );
    }
  } else {
    comprarCartaESomarResultadoComputador();
    alert(
      `Suas cartas são ${cartaUsuario[0].texto} ${
        cartaUsuario[1].texto
      }. Sua pontuação é ${
        somaResultados[0]
      } \nAs cartas reveladas do computador são ${cartaComputador[0].texto} ${
        cartaComputador[1].texto
      } ${cartaComputador[2].texto} ${
        cartaComputador[3].texto
      }. A pontuação do computador é ${somaResultados[1]}. \n${quemGanhou()}`
    );
  }
};

if (confirm("Boas vindas ao jogo de Blackjack! \nDeseja iniciar o jogo?")) {
  iniciarJogo();
} else {
  alert("O jogo acabou.");
}

/**
       * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
       * 
       * 
          const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
          
          console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
          console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
       * 
       * 
       * 
       */
