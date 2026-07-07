// 4 · Positivo ou negativo?
// Leia um número e diga se é positivo (≥ 0) ou negativo.

let numer = Number (prompt("Diga um número para saber se ele é positivo:"))?? 0;

if (numer > 0) {
    alert(`O número ${numer} é positivo`)
} else if (numer == 0) {
    alert(`O número ${numer} é neutro`)
} else {
    alert(`O número ${numer} é negativo`)
}