// Exercício 1

// a - Utilizamos a propriedade process.argv a partir do terceiro item do array.

// b -
/*
const name = process.argv[2];
const age = process.argv[3];

console.log(`Olá, ${name}! Você tem ${age} anos.`);

// node index.js Lucas 26
*/

// c -
/*
const futureAge = Number(process.argv[3]) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}.`
);
*/

// Exercício 2
/*
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mult":
    result = num1 * num2;
    break;
  case "div":
    result = num1 / num2;
    break;
}

console.log(result);
*/

// Exercício 3
/*
const taskList = [];
taskList.push(process.argv[2]);

console.log("Tarefa adicionada com sucesso.");
console.log(taskList);
*/
