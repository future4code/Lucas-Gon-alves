```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const numerosRepetidos = []
  arrayDeNumeros.filter((numero) => {
    if (numero === numeroEscolhido) {
      numerosRepetidos.push(numero)
    }
  })
  if(numerosRepetidos.length === 0) {
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${numerosRepetidos.length}x`
  }
}
```
