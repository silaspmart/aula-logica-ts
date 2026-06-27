// Lista 01 — Exercício 15
// Enunciado: Leia o preço e o valor pago. Mostre o troco, quantas notas de R$ 10 cabem nele e quanto sobra.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const stgPreco: string = prompt("Informe o preço a ser cobrado:") ?? "0";
const stgVlrPago: string = prompt("Informe valor pago:") ?? "0";

const preco: number = Number(stgPreco);
const vlrPago: number = Number(stgVlrPago);

// 2. Processamento: o cálculo.
const troco: number = vlrPago-preco;
const notas: number = troco/10;
const vlrSobra: number = troco%10; 

// 3. Saída: mostra o resultado.
alert(`O troco final é R$ ${troco.toFixed(2)}, que corresponde a ${notas.toFixed(0)} notas de R$ 10 + R$ ${vlrSobra.toFixed(2)}`);
