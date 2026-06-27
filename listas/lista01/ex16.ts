// Lista 01 — Exercício 16
// Enunciado: Leia o peso (kg) e a altura (m) e calcule o IMC = peso ÷ altura², com 2 casas.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const stgPeso: string = prompt("Informe o seu peso em kg:") ?? "0";
const stgAltura: string = prompt("Informe sua altura em metros:") ?? "0";

const peso: number = Number(stgPeso);
const altura2: number = Number(stgAltura);

// 2. Processamento: o cálculo.
const imc: number = peso / (altura2 * altura2);

// 3. Saída: mostra o resultado.
alert(`O seu IMC é de ${imc.toFixed(2)}`);
