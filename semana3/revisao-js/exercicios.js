// EXERCÍCIO 01
function inverteArray(array) {
  const novoArray = [];
  while (array.length > 0) {
    let elementoDoArray = array.pop();
    novoArray.push(elementoDoArray);
  }
  return novoArray;
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const novoArray2 = [];
  for (let numero of array) {
    if (numero % 2 === 0) {
      novoArray2.push(numero ** 2);
    }
  }
  return novoArray2;
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const novoArray3 = [];
  array.filter((numero) => {
    if (numero % 2 === 0) {
      novoArray3.push(numero);
    }
  });
  return novoArray3;
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0;
  array.filter((numero) => {
    if (numero > maior) {
      maior = numero;
    }
  });
  return maior;
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length;
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true];
  return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
 }

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {}

// EXERCÍCIO 11
function ordenaArray(array) {}

// EXERCÍCIO 12
function filmeFavorito() {}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {}

// EXERCÍCIO 17C
function verificaParidade(array) {}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {}

// EXERCÍCIO 20
function calculaSaldo(contas) {}
