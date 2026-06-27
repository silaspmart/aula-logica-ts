// Lista 01 — Exercício 14
// Enunciado: Leia um total de segundos e mostre quantos minutos e segundos são — com divisão inteira e resto.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const vlrSegundos: string = prompt("Digite o total de segundos para ser convertido em minutos:") ?? "0";

const totalSegundos: number = Number(vlrSegundos);

// 2. Processamento: o cálculo.
const minutos: number = totalSegundos / 60;
const segundos = totalSegundos % 60;

// 3. Saída: mostra o resultado.
alert(`${totalSegundos} segundos equivalem a ${minutos.toFixed(0)} minutos e ${segundos} segundos`);
