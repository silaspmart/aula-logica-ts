// 14 · Faixa etária
// Leia a idade e classifique: criança (0–11), adolescente (12–17), adulto (18–59), idoso (60+).

let suaIdade = Number(prompt("Informe a sua idade:"));

if (suaIdade <= 11) {
    alert("Você é criança!")
} else if (suaIdade <= 17) {
    alert("Você é adolescente!")
} else if (suaIdade <= 59) {
    alert("Você é adulto!")
} else {
    alert("Você está na terceira idade!")
}