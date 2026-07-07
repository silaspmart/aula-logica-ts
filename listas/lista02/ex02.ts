// 2 · Aprovado ou reprovado?
// Leia a nota (0 a 10) e diga se o aluno foi aprovado (≥ 6) ou reprovado.

let nota = Number (prompt("Informe a sua nota:"))?? 0;

if (nota >= 6) {
    alert(`Você foi aprovado! :)`)
} else {
    alert(`Você foi reprovado! :()`)
}