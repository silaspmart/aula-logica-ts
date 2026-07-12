// 19 · Números primos
// Primo só divide por 1 e por ele mesmo. Leia N e liste os primos de 2 até N. Vai precisar de laço dentro de laço.

let nps = Number(prompt("Primos até:"));
let npf = "";

for (let i = 2; i <= nps; i++) {
  let ehPrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) { ehPrimo = false; }
  }
  if (ehPrimo) { npf = npf + i + ", "; }
}

alert("Primos: " + npf);