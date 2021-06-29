console.log("Boas vindas ao jogo de Blackjack!");

const cartaUsuario = [comprarCarta(), comprarCarta()];
const cartaComputador = [comprarCarta(), comprarCarta()];
const somaResultados = [
  cartaUsuario[0].valor + cartaUsuario[1].valor,
  cartaComputador[0].valor + cartaComputador[1].valor,
];
const quemGanhou = () => {
  if (somaResultados[0] > somaResultados[1]) {
    return "O usuário ganhou!";
  } else if (somaResultados[0] < somaResultados[1]) {
    return "O computador ganhou!";
  } else {
    return "Empate!";
  }
};

let iniciarJogo = () => {
  console.log(
    `Usuário - cartas: ${cartaUsuario[0].texto} ${
      cartaUsuario[1].texto
    } - pontuação ${somaResultados[0]} \nComputador - cartas: ${
      cartaComputador[0].texto
    } ${cartaComputador[1].texto} - pontuação ${
      somaResultados[1]
    } \n${quemGanhou()}`
  );
};

if (confirm("Quer iniciar uma nova rodada?")) {
  iniciarJogo();
} else {
  console.log("O jogo acabou");
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
