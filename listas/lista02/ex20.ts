// 20 · IMC com classificação
// Leia peso e altura, calcule o IMC (peso ÷ altura²) e classifique: abaixo (<18.5), normal (<25), sobrepeso (<30), obesidade (≥30).

let seuPeso = Number(prompt("Informe seu peso em kg:"));
let suaAltura = Number(prompt("Informe sua altura em m:"))
let seuIMC = seuPeso / (suaAltura*suaAltura);

if (seuIMC < 18.5) {
    alert(`Seu IMC é ${seuIMC.toFixed(2)}, abaixo do peso`)
} else if (seuIMC < 25) {
    alert(`Seu IMC é ${seuIMC.toFixed(2)}, peso normal`)
} else if (seuIMC < 30) {
    alert(`Seu IMC é ${seuIMC.toFixed(2)}, sobrepeso`)
} else {
    alert(`Seu IMC é ${seuIMC.toFixed(2)}, obesidade`)
}