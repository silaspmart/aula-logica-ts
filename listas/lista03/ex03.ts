// 03 · Tabuada
// Leia um número e mostre a tabuada dele, de 1 a 10 — uma linha por multiplicação.

let m = Number(prompt("Digite um numero para saber sua tabuada:"));
let p = "";

for (let i=1; i<=10; i++) {
    p = p + m + " x " + i + " = " + (m * i) + "\n";
};

alert(p);