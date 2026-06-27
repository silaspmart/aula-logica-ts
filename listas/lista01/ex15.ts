// Lista 01 — Exercício 15
// Enunciado: Leia o total da conta e o nº de pessoas. Some 10% de gorjeta e mostre quanto cada um paga.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const totalConta: string = prompt("Digite o valor inicial da conta:") ?? "0";
const totalPessoas: string = prompt("Informe quantas pessoas dividirão a conta:") ?? "0";

const conta: number = Number(totalConta);
const pessoas: number = Number(totalPessoas);

// 2. Processamento: o cálculo.
const vlrIndividual: number = ((conta*0.1)+conta)/pessoas;

// 3. Saída: mostra o resultado.
alert(`O valor final para cada pessoa é de R$ ${vlrIndividual.toFixed(2)}`);
