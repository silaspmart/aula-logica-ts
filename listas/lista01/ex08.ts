// Lista 01 — Exercício 01
// Enunciado: Leia dois números e mostre a soma, a subtração, a multiplicação, a divisão e o resto..

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const num1: string = prompt("Digite o primeiro número:") ?? "0";
const num2: string = prompt("Digite o segundo número:") ?? "0";

const prim: number = Number(num1);
const seg: number = Number(num2);

// 2. Processamento: o cálculo.
const somar: number = prim + seg;
const subtrair: number = prim - seg;
const multiplicar: number = prim * seg;
const dividir: number = prim / seg;
const resto: number = prim % seg;

// 3. Saída: mostra o resultado.
alert(`Soma = ${somar} \nSubtração = ${subtrair} \nMultiplicação = ${multiplicar} \nDivisão = ${dividir} \nResto = ${resto}\n`);
