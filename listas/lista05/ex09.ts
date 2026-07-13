// 09 · Celsius → Fahrenheit
// Crie celsiusParaF(c) que converte usando F = C × 9 / 5 + 32 e retorna o valor.

function celsiusParaF(c) {
    return ((c*9)/5)+32;
}

let tc = Number(prompt("Termperatura º Celsius:"));

alert (`${celsiusParaF(tc).toFixed(1)} ºF`)