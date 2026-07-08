// 15 · Fila do banco
// Vai pra fila preferencial quem tem mais de 65, ou é deficiente, ou é gestante. Faça as 3 perguntas.

let idadeCli = Number(prompt("Informe a sua idade:"));
let pne = prompt("Possui deficiência (S/N):") === "s";
let gestante = prompt("É gestante (S/N):") === "s";

if (idadeCli >= 65 || pne || gestante) {
    alert(`CLIENTE PREFERENCIAL`)
} else {
    alert(`Fila comum.`)
}