// Lista 01 — Exercício 18
// Enunciado: Leia um total de segundos e mostre em horas, minutos e segundos.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const stgTotalSegundos: string = prompt("Informe o total de segundos:") ?? "0";

const totalSeg: number = Number(stgTotalSegundos);

// 2. Processamento: o cálculo.
const hora: number = totalSeg/3600;
const minuto: number = (totalSeg%3600)/60;
const segund: number = ((totalSeg%3600)%60);

// 3. Saída: mostra o resultado.
alert(`${totalSeg} s → ${hora.toFixed(0)} h, ${minuto.toFixed(0)} min e ${segund} s`);
