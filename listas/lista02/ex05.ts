// 5 · O maior de dois
// Leia dois números e diga qual é o maior.

let num01 = Number (prompt("Digite um número:"))?? 0;
let num02 = Number (prompt("Digite outro número:"))?? 0;

if (num01 > num02) {
    alert(`O número ${num01} é maior do que ${num02}`)
} else if (num02 > num01) {
    alert(`O número ${num02} é maior do que ${num01}`)
} else {
    alert(`Os números são iguais`)
}