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
  const novoArray4 = [];
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      novoArray4.push(i);
    }
  }
  return novoArray4;
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c && b === c) {
    return "Equilátero";
  } else if (
    (a === b && a !== c) ||
    (a === c && a !== b) ||
    (b === c && b !== a)
  ) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
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
  const novoObjeto = {};
  if (num1 > num2) {
    novoObjeto.maiorNumero = num1;
    if (novoObjeto.maiorNumero % num2 === 0) {
      novoObjeto.maiorDivisivelPorMenor = true;
    } else {
      novoObjeto.maiorDivisivelPorMenor = false;
    }
    novoObjeto.diferenca = num1 - num2;
  } else {
    novoObjeto.maiorNumero = num2;
    if (novoObjeto.maiorNumero % num1 === 0) {
      novoObjeto.maiorDivisivelPorMenor = true;
    } else {
      novoObjeto.maiorDivisivelPorMenor = false;
    }
    novoObjeto.diferenca = num2 - num1;
  }
  return novoObjeto;
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const novoArray5 = [];
  for (let i = 0; i < array.length; i++) {
    for (let l = 0; l < array.length; l++) {
      if (array[l] > array[l + 1]) {
        let temporario = array[l];
        array[l] = array[l + 1];
        array[l + 1] = temporario;
      }
    }
  }
  novoArray5.push(array[array.length - 2]);
  novoArray5.push(array[1]);
  return novoArray5;
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let l = 0; l < array.length; l++) {
      if (array[l] > array[l + 1]) {
        let temporario = array[l];
        array[l] = array[l + 1];
        array[l + 1] = temporario;
      }
    }
  }
  return array;
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return filme;
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
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
