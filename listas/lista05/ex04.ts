// 04 · Função é par?
// Crie ehPar(n) que retorna true se o número é par e false se não. Use a função num if.

let j = Number(prompt("É par?"));

function ehPar(n) {
    return n%2 === 0;
}

if (ehPar(j)) {
    alert(`O número ${j} é par`)
} else {
    alert(`O número ${j} é ímpar`)
}
