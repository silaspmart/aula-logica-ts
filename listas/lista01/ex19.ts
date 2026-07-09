// Lista 01 — Exercício 19
// Leia um saque (inteiro) e mostre quantas notas de 100, 50, 20 e 10 entregar, usando o menor número de notas.

let valor = Number(prompt("Valor do saque:"));

let n100 = Math.floor(valor / 100);  
    valor = valor % 100;
let n50 = Math.floor(valor / 50);   
    valor = valor % 50;
let n20 = Math.floor(valor / 20);   
    valor = valor % 20;
let n10 = Math.floor(valor / 10);

alert(`R$ 100: ${n100} notas\nR$ 50: ${n50} notas\nR$ 20: ${n20} notas\nR$ 10: ${n10} notas`);