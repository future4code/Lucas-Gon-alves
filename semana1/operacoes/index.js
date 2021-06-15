/* Exercícios de interpretação de código */

// Exercício 1 -- a. false; b. false; c. true; d. boolean.

// Exercício 2 -- O prompt retornará os valores concatenados, pois converte os inputs do prompt em strings. Será retornado um valor concatenado.

// Exercício 3 -- Uma solução para poder somar os números seria colocar a soma do primeiroNumero e segundoNumero dentro de uma função Number().

/* Exercícios de escrita de código */

// Exercício 1
/*
const idade1 = prompt("Qual é a sua idade?");
const idade2 = prompt("Qual é a idade do seu parça?");
const difIdade = Number(idade1 - idade2);
console.log("Sua idade é maior do que a do seu amigo?", idade1 > idade2);
console.log(difIdade);
*/

// Exercício 2
/*
const numPar = Number(prompt("Digite um número par"));
console.log(numPar % 2);

// Todos os números pares, ao dividirem por 2, tem zero como resto da divisão.

// Ao adicionar um número ímpar, dividindo por 2, não tem zero como resto da divisão. 
*/

// Exercício 3
/*
const idade = Number(prompt("Qual é a sua idade?"));
const idadeEmMeses = idade * 12;
const idadeEmDias = idade * 365;
const idadeEmHoras = idade * 24;
console.log(
  "Idade em meses, dias e horas, respectivamente:",
  idadeEmMeses,
  idadeEmDias,
  idadeEmHoras
);
*/

// Exercício 4
/*
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
console.log("O primeiro número é maior do que o segundo?", num1 > num2);
console.log("O primeiro número é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);
*/

/* Desafio */

// Exercício 1

/*
const kelvin = (77 - 32) * (5 / 9) + 273.15;
console.log(kelvin.toString() + "K");
*/

/*
const fahrenheit = 80 * (9 / 5) + 32;
console.log(fahrenheit.toString() + "°F");
*/

/*
const celsiusFahrenheit = 30 * (9 / 5) + 32;
const celsiusKelvin = (celsiusFahrenheit - 32) * (5 / 9) + 273.15;
console.log(
  celsiusFahrenheit.toString() + "°F",
  celsiusKelvin.toString() + "K"
);
*/

/*
const celsiusFahrenheit = Number(prompt("Digite o valor da temperatura em C°:"));
const celsiusKelvin = (celsiusFahrenheit - 32) * (5 / 9) + 273.15;
console.log(
  celsiusFahrenheit.toString() + "°F",
  celsiusKelvin.toString() + "K"
);
*/

// Exercício 2

/*
const custoEnergia = 0.05;
const consumoEnergia = 280;
const valorPago = custoEnergia * consumoEnergia;
console.log(valorPago);
*/

/*
const custoEnergia = 0.05;
const consumoEnergia = 280;
const desconto = 0.15;
const valorPago = (custoEnergia * consumoEnergia) - (custoEnergia * consumoEnergia) * desconto;
console.log(valorPago);
*/

// Exercício 3

/*
const lbParaKg = 0.45;
console.log((20 * lbParaKg).toString() + "kg");
*/

/*
const ozParakg = 0.03;
console.log((10.5 * ozParakg).toString() + "kg");
*/

/*
const miParam = 1609;
console.log((100 * miParam).toString() + "m");
*/

/*
const ftParam = 0.3048;
console.log((50 * ftParam).toString + "m");
*/

/*
const galParaL = 3.78;
console.log((103.56 * galParaL).toString() + "L");
*/

/*
const xicParaL = 0.24;
console.log((450 * xicParaL).toString() + "L");
*/

/*
const xicParaL = 0.24;
const quantidadeXic = Number(prompt("Digite a quantidade em xícaras:"));
console.log((quantidadeXic * xicParaL).toString() + "L");
*/
