// 8 · Par, ímpar ou zero
// Leia um número e diga se é par, ímpar ou zero. (Use else if.)

let newNum = Number (prompt("Digite um número:"))?? 0;
let restoDiv = newNum % 2;

if (newNum === 0) {
    alert(`Zero é neutro!`);
} else if (restoDiv === 0) {
    alert(`O número ${newNum} é par!`)
} else {
    alert(`O número ${newNum} é ímpar!`)
}