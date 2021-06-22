// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
/*
"Matheus Nachtergaele"
"Virginia Cavendish"
{canal: "Globo", horario: "14h"}
*/

// EXERCÍCIO 2
/* 
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}
*/
/*
Cria um novo objeto, aproveitando as propriedades e métodos do objeto anterior, onde você pode fazer alterações a vontade e não irá interferir no objeto original.
*/

// EXERCÍCIO 3
/*
false
undefined
*/
/*
O valor "false" foi porque a função pedia para retornar o valor da propriedade do objeto dado nos argumentos, o valor de "backeender" era falso. Já "altura", não existe essa propriedade no objeto "pessoa" .
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
/*
const usuario = {
  nome: "Lucas",
  apelidos: ["Luquinhas", "Lucão", "Lukita"],
};

function mensagemDeAmigo(objeto) {
  console.log(
    `Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`
  );
}

mensagemDeAmigo(usuario);

const novoUsuario = {
  ...usuario,
  apelidos: ["Luquete", "Lucaucio", "Lucario"],
};

mensagemDeAmigo(novoUsuario);
*/

// EXERCÍCIO 2
/*
const primeiraPessoa = {
  nome: "Reginaldo",
  idade: 15,
  profissao: "Gerente",
};
const segundaPessoa = {
  nome: "Claudionor",
  idade: 7,
  profissao: "Senador",
};

function valoresDosObjetos(objeto) {
  return [
    objeto.nome,
    objeto.nome.length,
    objeto.idade,
    objeto.profissao,
    objeto.profissao.length,
  ];
}
console.log(valoresDosObjetos(primeiraPessoa));
console.log(valoresDosObjetos(segundaPessoa));
*/

// EXERCÍCIO 3
/*
const carrinho = [];
const fruta1 = {
  nome: "Uva",
  disponibilidade: true,
};
const fruta2 = {
  nome: "Laranja",
  disponibilidade: true,
};
const fruta3 = {
  nome: "Mamão",
  disponibilidade: true,
};
function addFrutas(objeto) {
  carrinho.push(objeto);
  return carrinho;
}
addFrutas(fruta1);
addFrutas(fruta2);
addFrutas(fruta3);
console.log(carrinho);

function mudarEstoque(objeto) {
  // objeto.disponibilidade = !objeto.disponibilidade;
  return (objeto.disponibilidade = !objeto.disponibilidade);
}
mudarEstoque(fruta1)
console.log(fruta1);
*/

// DESAFIOS

// EXERCÍCIO 1
/*
function curiosidades(nome, idade, profissao) {
  nome = prompt("Qual é o seu nome?");
  idade = Number(prompt("Qual é a sua idade?"));
  profissao = prompt("No que você trampa?");
  const pessoa = {nome, profissao, idade}
  console.log(typeof pessoa)
  return pessoa;
}
console.log(curiosidades());
*/

// EXERCÍCIO 2
/*
const filme1 = {
  anoEstreia: 1994,
  nome: "The Mask",
};
const filme2 = {
  anoEstreia: 1995,
  nome: "Seven",
};
function anoLancamento(obj1, obj2) {
  console.log(
    `O primeiro filme foi lançado antes do segundo? ${
      obj1.anoEstreia < obj2.anoEstreia
    }`
  );
  console.log(
    `O primeiro filme foi lançado no mesmo ano do segundo? ${
      obj1.anoEstreia == obj2.anoEstreia
    }`
  );
}
anoLancamento(filme1, filme2);
*/

// EXERCÍCIO 3

// Feito acima (exercício 3 de escrita de código).