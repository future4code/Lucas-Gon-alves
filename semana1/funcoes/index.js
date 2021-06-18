// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
/*
a. 10 e 50
b. Não apareceria nada no console, pois a função apenas calculou a variável com o 2, não há nenhum comando pedindo para exibir o resultado.
*/

// Exercício 2
/*
a. Primeiro, o código pede para o usuário digitar um texto e o armazena em uma variável. Após isso, se cria uma função que receberá o texto que o usuário inseriu, nela se retornará se contém a palavra "cenoura", toda em minúscula, mesmo que o usuário a tenha digitado em caixa alta. Por fim, armazena a função em uma variável e executa ela em um console.log.
b. i. true; ii. true; iii. false;
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
/*
function introduction() {
  console.log(
    "Eu sou Lucas, tenho 26 anos, moro no Rio de Janeiro e sou estudante."
  );
}

function infos(name, age, city, occupation) {
  return `Eu sou ${name}, tenho ${age} anos, moro no ${city} e sou ${occupation}`;
}

console.log(infos("Laís", 23, "São Paulo", "instrutora"));
*/

// EXERCÍCIO 2
/*
const sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(7, 7));

const greaterThan = function (num1, num2) {
  return num1 >= num2;
};
console.log(greaterThan(7, 6));

const evenOrOdd = function (num) {
  return num % 2 === 0;
};
console.log(evenOrOdd(4));

const phrase = function (text) {
  const upperText = text.toUpperCase();
  console.log(upperText.length);
  return upperText;
};
console.log(phrase("bringing home the blues"));
*/

// EXERCÍCIO 3
/*
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const firstNumber = Number(prompt("Digite o primeiro número."));
const lastNumber = Number(prompt("Digite o último número."));
console.log(`Números inseridos: ${firstNumber} e ${lastNumber}`);
console.log(`Soma: ${sum(firstNumber, lastNumber)}`);
console.log(`Diferença: ${sub(firstNumber, lastNumber)}`);
console.log(`Multiplicação: ${mult(firstNumber, lastNumber)}`);
console.log(`Divisão: ${div(firstNumber, lastNumber)}`);
*/

// *** DESAFIO ***

// EXERCÍCIO 1
/*
const showIt = (param) => console.log(param);
const sum = (num1, num2) => num1 + num2;
showIt(sum(5, 6));
*/

// EXERCÍCIO 2
/*
const pyth = (cat1, cat2) => Math.sqrt(cat1 ** 2 + cat2 ** 2);
console.log(pyth(3, 4));
*/