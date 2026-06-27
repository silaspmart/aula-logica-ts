// Lista 01 — Exercício 13
// Enunciado: Leia o salário e a porcentagem de aumento, e mostre o novo salário.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const salario: string = prompt("Digite um valor do salário em reais:") ?? "0";
const percentual: string = prompt("Digite o percentual para o reajuste:") ?? "0";

const vlrSalario: number = Number(salario);
const vlrPercentual: number = Number(percentual);

// 2. Processamento: o cálculo.
const reajustado: number = vlrSalario + (vlrSalario * (vlrPercentual/100));

// 3. Saída: mostra o resultado.
alert(`O salário reajustado é de R$ ${reajustado.toFixed(2)}`);
