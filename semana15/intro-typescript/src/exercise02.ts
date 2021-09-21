function obterEstatisticas(numeros: number[]) {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  type Result = {
    maior: number;
    menor: number;
    media: number;
  };

  const estatisticas: Result = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// a - A entrada é uma array de números, a saída são o maior número, o menor número e a média de todos os valores da array.

console.log(obterEstatisticas([6, 9, 3]));
