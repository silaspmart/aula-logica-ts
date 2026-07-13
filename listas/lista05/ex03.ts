// 03 · Função soma
// Crie uma função soma(a, b) com dois parâmetros 
// que retorna a soma. Leia 2 números e mostre o 
// resultado.

let pnm = Number(prompt("Digite um número:"));
let snm = Number(prompt("Digite um número:"));

function somar (a,b) {
    return a+b
}

alert(`${pnm} + ${snm} = ${somar(pnm, snm)}`);