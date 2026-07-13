// 05 · Função média
// Crie media(a, b) que retorna a média das duas notas. 
// Mostre com 1 casa decimal

let numUm = Number(prompt("Digite um número:"));
let numDois = Number(prompt("Digite um número:"));

function avg(a,b) {
    return (a+b)/2;
}

alert(`A média entre ${numUm} e ${numDois} é: ${avg(numUm, numDois).toFixed(1)}`)
