// 15 · Cronômetro validado
// Só aceite segundos de 1 a 59. Se digitarem fora, peça de novo (while) até valer. Depois conte.

let crVali = Number(prompt("Digite um numero entre 1 e 59:"));

while (crVali<1 || crVali>59) {
    crVali = Number(prompt("Numero inválido!"))
}

let nttl = ""

for (let i=1; i<=crVali; i++) {
    nttl = nttl + i + "\n";
}

alert(nttl);