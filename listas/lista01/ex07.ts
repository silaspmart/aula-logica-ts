// Lista 01 — Exercício 07
// Enunciado: Leia duas notas e mostre a média entre elas..

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const nota1: string = prompt("Digite a primeira nota do aluno:") ?? "0";
const nota2: string = prompt("Digite a segunda nota do aluno:") ?? "0";

const n1: number = Number(nota1);
const n2: number = Number(nota2);

// 2. Processamento: o cálculo.
const media: number = (n1 + n2)/2;

// 3. Saída: mostra o resultado.
alert(`A média do aluno é = ${media}`);
