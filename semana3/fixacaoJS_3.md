```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  ex = ex * 1;
  p1 = p1 * 2;
  p2 = p2 * 3;
  const total = (ex + p1 + p2) / 6
  if (total >= 9) {
    return "A";
  } else if (total < 9 && total >= 7.5) {
    return "B";
  } else if (total < 7.5 && total >= 6) {
    return "C";
  } else {
    return "D";
  }
}
```
