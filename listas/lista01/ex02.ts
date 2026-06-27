// Lista 01 — Exercício 02
// Enunciado: Pergunte o nome e o sobrenome e mostre "Olá, nome sobrenome"

const primeiroNome: string = prompt("Digite o seu primeiro nome:") ?? " ";
const segundoNome: string = prompt("Digite o seu segundo nome:") ?? " ";

alert(`Olá, ${primeiroNome} ${segundoNome}!`);