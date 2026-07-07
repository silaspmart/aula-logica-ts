// 3 · Par ou ímpar?
// Leia um número e diga se ele é par ou ímpar.

let numeral = Number (prompt("Diga um número para saber se ele é par:"))?? 0;

if ((numeral % 2) === 0) {
    alert(`O número ${numeral} é par`)
} else {
    alert(`O número ${numeral} é ímpar`)
}