// Lista 01 — Exercício 01
// Enunciado: Leia um número inteiro e mostre o antecessor e o sucessor dele..

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const numero: string = prompt("Digite um número para saber seu antecessor e o seu sucessor:") ?? "0";

const numDigitado: number = Number(numero);

// 2. Processamento: o cálculo.
const antecessor: number = numDigitado - 1;
const sucessor: number = numDigitado + 1;

// 3. Saída: mostra o resultado.
alert(`Você digitou o numero = ${numDigitado} \n Antecessor = ${antecessor}\n Sucessor = ${sucessor}`);
