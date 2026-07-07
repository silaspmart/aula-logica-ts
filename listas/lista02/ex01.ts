// 1 · Maior de idade?
// Leia a idade e diga se a pessoa é maior ou menor de idade.

let idadePessoa = Number (prompt("Informe a sua idade:"))?? 0;

if (idadePessoa >= 18) {
    alert(`Você é maior de idade!`)
} else {
    alert(`Você é menor de idade!`)
}