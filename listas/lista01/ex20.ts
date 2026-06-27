// Lista 01 — Exercício 20
// Enunciado: Leia o salário bruto. Desconte INSS 11%, IR 7,5% e VT 6%, e mostre cada desconto e o líquido.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const stgSalario: string = prompt("Informe o valor de salário bruto:") ?? "0";

const salarioBruto: number = Number(stgSalario);

// 2. Processamento: o cálculo.
const inss: number = salarioBruto*0.11;
const ir: number = salarioBruto *0.075;
const vt: number = salarioBruto * 0.06;
const salarioLiq = salarioBruto-inss-ir-vt;

// 3. Saída: mostra o resultado.
alert(`Salário bruto = R$ ${salarioBruto.toFixed(2)}
INSS = R$ ${inss.toFixed(2)}
IR = R$ ${ir.toFixed(2)}
VT = R$ ${vt.toFixed(2)}
Salário líquido = R$ ${salarioLiq.toFixed(2)}`);
