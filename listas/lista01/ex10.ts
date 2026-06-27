// Lista 01 — Exercício 10
// Enunciado: Leia a distância (km) e os litros gastos, e mostre o consumo médio (km/l) com 1 casa..

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const distanciaPercorrida: string = prompt("Informe a distância percorrida em KM:") ?? "0";
const litrosGastos: string = prompt("Informe os litros gastos:") ?? "0";

const distancia: number = Number(distanciaPercorrida);
const litros: number = Number(litrosGastos);

// 2. Processamento: o cálculo.
const consumoMedio: number = distancia / litros;

// 3. Saída: mostra o resultado.
alert(`O consumo médio foi de ${consumoMedio.toFixed(2)} km/litro`);
