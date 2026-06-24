// Lista 01 — Exercício 05
// Enunciado: Receba um valor em reais e converta para dólar.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const valorReal: string = prompt("Digite um valor em reais para ser convertido para dólar:") ?? "0";

const vlr: number = Number(valorReal);

// 2. Processamento: o cálculo.
const conversao: number = vlr * 4.95;
console.log(vlr.toFixed(2));

// 3. Saída: mostra o resultado.
alert(`R$ ${vlr} equivalem a US$ ${conversao}`); // como arredondar para 2 casas decimais?
