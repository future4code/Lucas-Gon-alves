// EXERCÍCIOS DE INTERPRETAÇÃO DE

// EXERCÍCIO 1
/*
{nome: 'Amanda Rangel', apelido: 'Mandi'} 
0 
[
  {nome: 'Amanda Rangel', apelido: 'Mandi'},
  {nome: 'Laís Petra', apelido: 'Laura'},
  {nome: 'Letícia Chijo', apelido: 'Chijo'}
]

{nome: 'Laís Petra', apelido: 'Laura'} 
1 
[
  {nome: 'Amanda Rangel', apelido: 'Mandi'},
  {nome: 'Laís Petra', apelido: 'Laura'},
  {nome: 'Letícia Chijo', apelido: 'Chijo'}
]

{nome: 'Letícia Chijo', apelido: 'Chijo'} 
2 
[
  {nome: 'Amanda Rangel', apelido: 'Mandi'},
  {nome: 'Laís Petra', apelido: 'Laura'},
  {nome: 'Letícia Chijo', apelido: 'Chijo'}
]
*/

// EXERCÍCIO 2
/*
["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
*/

// EXERCÍCIO 3
/*
[
  {nome: "Amanda Rangel", apelido: "Mandi"},
  {nome: "Laís Petra", apelido: "Laura"}
]
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
/*
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const nomePets = pets.map((pet) => pet.nome);
console.log(nomePets);

const salsichinhas = pets.filter((pet) => pet.raca === "Salsicha");
console.log(salsichinhas);

const descontoParaPoodles = pets
  .filter((pet) => pet.raca === "Poodle")
  .map(
    (pet) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
  );
console.log(descontoParaPoodles);
*/

// EXERCÍCIO 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a.
// const nomeProdutos = produtos.map((produto) => {
//   return produto.nome;
// });
// console.log(nomeProdutos);

// b.
// const nomeEPrecoProdutos = produtos.map((produto) => {
//   return { nome: produto.nome, preco: produto.preco - produto.preco * 0.05 };
// });
// console.log(nomeEPrecoProdutos);

// c.
// const produtosBebidas = produtos.filter(
//   (produto) => produto.categoria === "Bebidas"
// );
// console.log(produtosBebidas);

// d.
// const produtosYpe = produtos.filter((produto) => produto.nome.includes("Ypê"));
// console.log(produtosYpe);

// e.
// const produtosYpe = produtos.filter((produto) => produto.nome.includes("Ypê")).map((produto) => `Compre ${produto.nome} por ${produto.preco}`)
// console.log(produtosYpe);

// DESAFIOS

// EXERCÍCIO 1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

// a.
// const pokemonsOrdemAlfabetica = pokemons.map((pokemon) => pokemon.nome).sort();
// console.log(pokemonsOrdemAlfabetica);

// b.
// const tiposPokemon = pokemons.map((pokemon) => pokemon.tipo);
// const semTiposRepetidos = tiposPokemon.filter(
//   (tipo, index) => tiposPokemon.indexOf(tipo) === index
// );
// console.log(semTiposRepetidos);
