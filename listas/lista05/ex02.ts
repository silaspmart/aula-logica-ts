// 02 · Função dobro
// Crie uma função dobro(n) que retorna o dobro do número (não use alert dentro dela!). Depois mostre o valor devolvido.

let alg = Number(prompt("O dobro de:"));

function double(n) {
    return n * 2
}

alert(`O dobro de ${alg} é ${double(alg)}`)