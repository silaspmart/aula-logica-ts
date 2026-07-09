// 08 · Soma de N números
// Pergunte quantos números serão digitados. Depois leia cada um e mostre a soma total.

let a = Number(prompt("Quantos numeros serão digitados:"));
let b = 0;

for (let i=1; i<=a; i++) {
    let c = Number(prompt("Digite o número:"));
    b = b+c;
};

alert(`A soma final é ${b}`);