// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

/*
a. O código pede um número ao usuário, converte ele para uma variável do tipo 'Number', após isso, o código verifica se o número inserido é par ou não. Se for, é mostrado na tela "Passou no teste", se não for é mostrado na tela "Não passou no teste".
*/
/*
b. Somente número par.
*/
/*
c. Somente número ímpar.
*/

// EXERCÍCIO 2
/* 
a. O código serve, a partir de uma escolha de fruta, digitada pelo usuário, definir o valor a ser impresso.
*/
/* 
b. "O preço da fruta Maçã é R$ 2.25"
*/
/*
c. "O preço da fruta Pêra é R$ 5"
*/

// EXERCÍCIO 3

/*
a. Está pedindo um número para o usuário, convertendo para o tipo "Number" e guardando na variável "numero".
*/
/*
b. "Esse número passou no teste". Se fosse um número negativo nada seria mostrado.
*/
/*
c. Sim, pois a variável criada no escopo da condicional não é interpretada no escopo global.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
/*
const idadeUsuario = Number(prompt("Digite a sua idade."));
if (idadeUsuario >= 18) {
  console.log("Você pode dirigir");
} else {
  console.log("Você não pode dirigir");
}
*/

// EXERCÍCIO 2
/*
const turnoEstudado = prompt("Qual é o turno em que você estuda? Digite M/V/N");
if (turnoEstudado === "M") {
  console.log("Bom Dia!");
} else if (turnoEstudado === "V") {
  console.log("Boa Tarde!");
} else if (turnoEstudado === "N") {
  console.log("Boa Noite!");
}
*/

// EXERCÍCIO 3
/*
const turnoEstudado = prompt("Qual é o turno em que você estuda? Digite M/V/N");
switch (turnoEstudado) {
  case "M":
    console.log("Bom Dia!");
    break;
  case "V":
    console.log("Boa Tarde!");
    break;
  case "N":
    console.log("Boa Noite");
    break;
}
*/

// EXERCÍCIO 4
/*
const generoFilme = prompt("Qual gênero de filme você topa assistir? Fantasia / Ação / Comédia").toLowerCase();
const valorIngresso = Number(prompt("Digite o valor do ingresso"));
if (generoFilme === "fantasia" && valorIngresso === 15) {
  console.log("Bom filme!");
} else {
  console.log("Escolha outro filme :(");
}
*/

// DESAFIOS

// EXERCÍCIO 1
/*
const generoFilme = prompt(
  "Qual gênero de filme você topa assistir? Fantasia / Ação / Comédia"
).toLowerCase();
const valorIngresso = Number(prompt("Digite o valor do ingresso"));
if (generoFilme === "fantasia" && valorIngresso === 15) {
  const lanchinhoTop = prompt("Qual lanchinho você irá comprar?");
  console.log("Bom filme!");
  console.log(`Aproveite o seu ${lanchinhoTop}`);
} else {
  console.log("Escolha outro filme :(");
}
*/

// EXERCÍCIO 2
/*
let nomeCompleto = prompt("Digite o seu nome");
let tipoJogo = prompt("Digite o tipo de jogo. IN / DO").toUpperCase();
let etapaJogo = prompt("Digite a etapa do jogo. SF / DT/ FI").toUpperCase();
let categoriaJogo = Number(prompt("Digite a categoria. 1 / 2 / 3 / 4"));
let quantidadeIngressos = Number(prompt("Digite a quantidade de ingresssos"));
let valorIngresso = 0;
let valorTotal = 0;
let moeda;
if (tipoJogo === "IN" || tipoJogo === "DO") {
  if (categoriaJogo === 1) {
    switch (etapaJogo) {
      case "SF":
        valorIngresso += 1320;
        etapaJogo = "Semi Final";
        break;
      case "DT":
        valorIngresso += 660;
        etapaJogo = "Decisão do 3° lugar";
        break;
      case "FI":
        valorIngresso += 1980;
        etapaJogo = "Final";
        break;
    }
  } else if (categoriaJogo === 2) {
    switch (etapaJogo) {
      case "SF":
        valorIngresso += 880;
        etapaJogo = "Semi Final";
        break;
      case "DT":
        valorIngresso += 440;
        etapaJogo = "Decisão do 3° lugar";
        break;
      case "FI":
        valorIngresso += 1320;
        etapaJogo = "Final";
        break;
    }
  } else if (categoriaJogo === 3) {
    switch (etapaJogo) {
      case "SF":
        valorIngresso += 550;
        etapaJogo = "Semi Final";
        break;
      case "DT":
        valorIngresso += 330;
        etapaJogo = "Decisão do 3° lugar";
        break;
      case "FI":
        valorIngresso += 880;
        etapaJogo = "Final";
        break;
    }
  } else if (categoriaJogo === 4) {
    switch (etapaJogo) {
      case "SF":
        valorIngresso += 220;
        etapaJogo = "Semi Final";
        break;
      case "DT":
        valorIngresso += 170;
        etapaJogo = "Decisão do 3° lugar";
        break;
      case "FI":
        valorIngresso += 330;
        etapaJogo = "Final";
        break;
    }
  }
  if (tipoJogo === "IN") {
    tipoJogo = "Internacional";
    valorIngresso *= 4.1;
    valorTotal = valorIngresso * quantidadeIngressos;
    moeda = "U$";
  } else if (tipoJogo === "DO") {
    tipoJogo = "Nacional";
    valorTotal = valorIngresso * quantidadeIngressos;
    moeda = "R$";
  }
}
console.log(`
---Dados da compra---
Nome do cliente: ${nomeCompleto}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoriaJogo}
Quantidade de Ingressos: ${quantidadeIngressos} ingressos
---Valores---
Valor do ingresso: ${moeda} ${valorIngresso.toFixed(2)}
Valor total: ${moeda} ${valorTotal.toFixed(2)}
`);
*/