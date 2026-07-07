// 07 · Média das notas
// Some tudo e divida pelo .length. Mostre com 1 casa decimal.

let notasDoAluno = [9, 7, 10, 7, 9];
let somaNotas = 0;

for (let i = 0; i < notasDoAluno.length; i++) {
  somaNotas = somaNotas + notasDoAluno[i];
}

let mediaNotas = somaNotas / notasDoAluno.length;
alert(`Média final = ${mediaNotas.toFixed(1)}`)