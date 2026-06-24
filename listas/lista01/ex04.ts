// Lista 01 — Exercício 04
// Enunciado: Leia um número e mostre o dobro, o triplo e a metade dele.

const num: string = prompt("Digite um número para saber o dobro, o triplo e a metade:") ?? "0";

const numConvertido: number = Number(num);

// 2. Processamento: o cálculo.
const dobro: number = (numConvertido * 2) ;
const triplo: number = (numConvertido * 3) ;
const metade: number = (numConvertido / 2) ;

// 3. Saída: mostra o resultado.
alert(`Você digitou = ${numConvertido} \nDobro = ${dobro} \nTriplo = ${triplo} \nMetade = ${metade}`);
