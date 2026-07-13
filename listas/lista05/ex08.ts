// 08 · Função situação
// Crie situacao(nota) que retorna o texto "Aprovado" (nota ≥ 6) ou "Reprovado". Note: dá pra ter mais de um return.

let notaAl = Number(prompt("Nota do aluno"));

function situacao(n) {
    if (n>=6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

alert(`O aluno foi: ${situacao(notaAl)}!`);