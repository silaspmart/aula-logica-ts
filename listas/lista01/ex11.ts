// Lista 01 — Exercício 11
// Enunciado: Leia as 4 notas de um aluno e mostre a média final.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const notaP1: string = prompt("Digite a 1ª nota do aluno:") ?? "0";
const notaP2: string = prompt("Digite a 2ª nota do aluno:") ?? "0";
const notaP3: string = prompt("Digite a 3ª nota do aluno:") ?? "0";
const notaP4: string = prompt("Digite a 4ª nota do aluno:") ?? "0";

const np1: number = Number(notaP1);
const np2: number = Number(notaP2);
const np3: number = Number(notaP3);
const np4: number = Number(notaP4);

// 2. Processamento: o cálculo.
const mediaFinal: number = (np1 + np2 + np3 + np4)/4;

// 3. Saída: mostra o resultado.
alert(`A média do aluno é = ${mediaFinal.toFixed(2)}`);
