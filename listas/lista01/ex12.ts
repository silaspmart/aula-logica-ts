// Lista 01 — Exercício 12
// Enunciado: Leia uma temperatura em Celsius e converta para Fahrenheit.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const celsius: string = prompt("Digite um valor em Celsius para ser convertido para Fahrenheit:") ?? "0";

const vlrCeslius: number = Number(celsius);

// 2. Processamento: o cálculo.
const farh: number = ((vlrCeslius * 9) / 5) + 32;

// 3. Saída: mostra o resultado.
alert(`${vlrCeslius} ºC equivalem a ${farh.toFixed(1)} ºF`);