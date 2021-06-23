// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

/*
O código cria uma variável valendo zero, e para cada iteração, sendo o contador até menor do que 5, adicione o valor do contador para a variável. No final, ela valerá 10.
*/

// EXERCÍCIO 2

/*
a. Serão impressos todos os números do array maiores que 18.
*/

// EXERCÍCIO 3

/*
 *
 **
 ***
 ****
 */

// EXERCÍCIOS DE ESCRITA DE CÓDI2GO

// EXERCÍCIO 1
/*
const qtdDeBichinhos = prompt("Quantos pets você possui?");
const listaDeBichinhos = [];
if (qtdDeBichinhos > 0) {
  for (let i = 0; i < qtdDeBichinhos; i++) {
    let nomeDoBichinho = prompt("Digite o nome do seu pet");
    listaDeBichinhos.push(nomeDoBichinho);
  }
} else {
  console.log(`Que pena! Você pode adotar um pet`);
}
for (let bichinho of listaDeBichinhos) {
  console.log(bichinho);
}
*/

// EXERCÍCIO 2

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// const imprimirValores = (arr) => {
//   for (valor of arr) {
//     console.log(valor);
//   }
// };
// imprimirValores(arrayOriginal);

// const imprimirValoresDivididosPor10 = (arr) => {
//   for (valor of arr) {
//     valor /= 10;
//     console.log(valor);
//   }
// };
// imprimirValoresDivididosPor10(arrayOriginal);

// const imprimirValoresPares = (arr) => {
//   for (valor of arr) {
//     if (valor % 2 === 0) {
//       console.log(valor);
//     }
//   }
// };
// imprimirValoresPares(arrayOriginal);

// let maiorNumero = -Infinity;
// let menorNumero = Infinity;
// const imprimirValoresMaiorEMenor = (arr) => {
//   for (valor of arr) {
//     if (valor < menorNumero) {
//       menorNumero = valor;
//     }
//     if (valor > maiorNumero) {
//       maiorNumero = valor;
//     }
//   }
//   console.log(menorNumero, maiorNumero);
// };
// imprimirValoresMaiorEMenor(arrayOriginal);

// DESAFIOS

// EXERCÍCIO 1
/*
let numeroEscolhido = Number(prompt("Digite um número"));
let numeroChutado;
let numeroTentativas = 0;
console.log("Vamos Jogar!");
while (numeroChutado !== numeroEscolhido) {
  numeroChutado = Number(prompt("Digite um número"));
  console.log(`O número chutado foi: ${numeroChutado}`);
  if (numeroChutado > numeroEscolhido) {
    console.log("Errou, é maior");
  } else {
    console.log("Errou, é menor");
  }
  numeroTentativas++;
}
console.log(`Acertou! O número correto é ${numeroEscolhido}`);
console.log(`O número de tentativas foi: ${numeroTentativas}`);
*/

// EXERCÍCIO 2
/*
let numeroEscolhido = Math.floor(Math.random() * 100) + 1;
console.log(numeroEscolhido);
let numeroChutado;
let numeroTentativas = 0;
console.log("Vamos Jogar!");
while (numeroChutado !== numeroEscolhido) {
  numeroChutado = Number(prompt("Digite um número"));
  console.log(`O número chutado foi: ${numeroChutado}`);
  if (numeroChutado > numeroEscolhido) {
    console.log("Errou, é maior");
  } else {
    console.log("Errou, é menor");
  }
  numeroTentativas++;
}
console.log(`Acertou! O número correto é ${numeroEscolhido}`);
console.log(`O número de tentativas foi: ${numeroTentativas}`);
*/

/*
Foi fácil, pois existe um método do objeto Math para aleatorizar números. Multiplicar por cem para aumentar o range de 1 a 100, precisou só do método floor para arredondar o número.
*/