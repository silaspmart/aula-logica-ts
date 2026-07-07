// 6 · Múltiplo de 3?
// Leia um número e diga se ele é múltiplo de 3.

let n = Number (prompt("Digite um número:"))?? 0;

if ((n % 3) === 0) {
    alert(`O número ${n} é multiplo de 3`)
} else {
    alert(`O número ${n} não é multiplo de 3`)
}