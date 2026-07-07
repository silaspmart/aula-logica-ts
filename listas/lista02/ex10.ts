//10 · Maior, menor ou iguais
// Leia dois números e diga se o 1º é maior, menor ou se são iguais.

let number1 = Number (prompt("Digite um número:"))?? 0;
let number2 = Number (prompt("Digite outro número:"))?? 0;

if (number1 > number2) {
    alert(`${number1} é maior do que ${number2}`);
} else if (number2 > number1) {
    alert(`${number1} é menor do que ${number2}`)
} else {
    alert(`Os números são iguais!`)
}