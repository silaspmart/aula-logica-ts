// 13 · O maior de três
// Leia três números e diga qual é o maior.

let firstNum = Number(prompt("Digite o primeiro numero:"));
let secNum = Number(prompt("Digite o segundo numero:"));
let thirdNum = Number(prompt("Digite o terceiro numero:"));

let maiorNum = 0;

if (firstNum>secNum && firstNum>thirdNum) {
    maiorNum = firstNum
} else if (secNum>firstNum && secNum>thirdNum) {
    maiorNum = secNum
} else if (thirdNum>firstNum && thirdNum>secNum) {
    maiorNum = thirdNum
} else {
    alert(`Ocorreu um erro!`)
}

alert(`O maior numero digitado foi ${maiorNum}`)