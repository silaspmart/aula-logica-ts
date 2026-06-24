// Lista 01 — Exercício 01
// Enunciado: Leia a base e a altura de um retângulo e mostre a área..

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const vlrBase: string = prompt("Digite o valor da base do retângulo em cm:") ?? "0";
const vlrAltura: string = prompt("Digite o valor da altura em cm:") ?? "0";

const base: number = Number(vlrBase);
const altura: number = Number(vlrAltura);

// 2. Processamento: o cálculo.
const area: number = base * altura;

// 3. Saída: mostra o resultado.
alert(`A área do retângulo é: ${area} cm²`);
