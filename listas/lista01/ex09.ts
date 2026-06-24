// Lista 01 — Exercício 09
// Enunciado: Leia a área de um terreno e o valor do m², e mostre o preço total.

// 1. Entrada: prompt devolve texto (string), por isso usamos Number(...).
const areaDoTerreno: string = prompt("Informe a área do terreno em m²:") ?? "0";
const valorDoTerreno: string = prompt("Informe o valor do m²:") ?? "0";

const areaTerreno: number = Number(areaDoTerreno);
const vlrTerreno: number = Number(valorDoTerreno);

// 2. Processamento: o cálculo.
const precoTerreno: number = areaTerreno * vlrTerreno;

// 3. Saída: mostra o resultado.
alert(`O valor do terreno é de R$ ${precoTerreno}`);
