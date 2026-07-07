// 11 · Conceito da nota
// Leia a nota (0–10) e mostre o conceito: A (≥9), B (≥7), C (≥6), D (≥4), F (<4).

let notaFinal = Number (prompt("Digite a nota do aluno:"))?? 0;

if (notaFinal >= 9) {
    alert(`Conceito A`);
} else if (notaFinal >= 7) {
    alert(`Conceito B`);
} else if (notaFinal >= 6) {
    alert(`Conceito C`);
} else if (notaFinal >= 4) {
    alert(`Conceito D`);
} else {
    alert(`Conceito F`)
}

