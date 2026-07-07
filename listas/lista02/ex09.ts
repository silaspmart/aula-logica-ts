// 9 · Positivo, negativo ou zero
// Leia um número e diga se é positivo, negativo ou zero.

let newNumber = Number (prompt("Digite um número:"))?? 0;

if (newNumber === 0) {
    alert(`Zero é neutro!`);
} else if (newNumber > 0) {
    alert(`O número ${newNumber} é positivo!`)
} else {
    alert(`O número ${newNumber} é negativo!`)
}