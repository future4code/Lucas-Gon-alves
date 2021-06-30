```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const valorCadaCarro = valorTotalVendas / qtdeCarrosVendidos;
const comissao = (100 + (0.05 * valorCadaCarro)) * qtdeCarrosVendidos;
let salarioFinal = 0;
  if (qtdeCarrosVendidos !== 0 || valorTotalVendas !== 0) {
    salarioFinal = comissao + 2000;
  } else {
    salarioFinal = 2000;
    }
return salarioFinal;
}
```
