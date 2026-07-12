// 12 · Só os caros
// Use .filter pra ficar só com os preços acima de 100.

let precos = [50, 120, 30, 200, 90];
let caros = precos.filter(n => n>100);

alert(`${caros.join(", ")}`)