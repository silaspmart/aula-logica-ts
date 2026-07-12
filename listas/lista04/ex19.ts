// 19 · Alunos aprovados
// Cada aluno é um objeto { nome, nota }. Use .filter pra pegar os aprovados (nota ≥ 6) e .map pros nomes.

let alunos = [
  { nome: "Ana", nota: 8 }, { nome: "Bruno", nota: 5 },
  { nome: "Caio", nota: 9 }, { nome: "Duda", nota: 4 }
];

let aprovados = alunos.filter(a => a.nota >= 6);
let nomes = aprovados.map(a => a.nome);

alert(`Aprovados: ${nomes.join(", ")}`);