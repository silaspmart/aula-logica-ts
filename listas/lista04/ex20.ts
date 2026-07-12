// 20 · O melhor aluno
// Na mesma lista de objetos, descubra quem tem a maior nota — guardando o objeto inteiro, não só o número.

let classe = [
  { nome: "Ana", nota: 8 }, { nome: "Bruno", nota: 5 },
  { nome: "Caio", nota: 9 }, { nome: "Duda", nota: 4 }
];
let melhorAluno = classe[0];

for (let i=0; i<classe.length; i++) {
    if(classe[i].nota > melhorAluno.nota) {
        melhorAluno = classe[i]
    }
}

alert(`O melhor aluno foi ${melhorAluno.nome}, nota: ${melhorAluno.nota}`)