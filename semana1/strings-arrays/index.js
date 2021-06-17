// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
/*
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/

// EXERCÍCIO 2
/*
SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
/*
const nome = prompt("Digite o seu nome:");
const email = prompt("Digite o seu e-mail:");
console.log(
  `O e-mail ${email} foi cadastro com sucesso. Seja bem-vinda(o), ${nome}!`
);
*/

// EXERCÍCIO 2
/*
const comidasFavoritas = ["Arroz", "Feijão", "Salada", "Ovo", "Farofa"];
console.log(comidasFavoritas);
console.log("Essas são as minhas comidas preferidas: ", comidasFavoritas);

const comidaDesafio = prompt("Qual é a SUA comida favorita?");
comidasFavoritas[1] = comidaDesafio;
console.log(comidasFavoritas);
*/

// EXERCÍCIO 3
/*
const listaDeTarefas = [];
const tarefa1 = prompt("Digite sua primeira tarefa do dia:");
const tarefa2 = prompt("Digite sua segunda tarefa do dia:");
const tarefa3 = prompt("Digite sua terceira tarefa do dia:");
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
console.log(listaDeTarefas);
const indice = Number(
  prompt("Digite o índice de qual tarefa você já realizou. (0, 1, 2)")
);
listaDeTarefas.splice(indice, 1);
console.log(listaDeTarefas);
*/

// DESAFIOS

// EXERCÍCIO 1
/*
const frase = prompt("Digite uma frase abaixo.");
const fraseArr = frase.split(" ");
console.log(fraseArr);
*/

// EXERCÍCIO 2
/*
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const frutaIndex = frutas.indexOf("Abacaxi");
console.log(frutaIndex, frutas.length);
*/