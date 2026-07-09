// 18 · Tipo de triângulo
// Leia 3 lados. Se formam triângulo (cada lado < soma dos outros 2), classifique: equilátero, isósceles ou escaleno.

let lado1 = Number(prompt("Informe a valor do lado 1 do triângulo:"));
let lado2 = Number(prompt("Informe a valor do lado 2 do triângulo:"));
let lado3 = Number(prompt("Informe a valor do lado 3 do triângulo:"));

if (lado1>(lado2+lado3) || lado2>(lado1+lado3) || lado3>(lado2+lado1)) {
    alert(`Essas medidas não formam um triangulo`)
} else if (lado1===lado2 || lado1===lado3 || lado2===lado3) {
    alert(`Triângulo isósceles`)
} else if (lado1===lado2 && lado2===lado3) {
    alert(`Triângulo equilátero`)
} else {
    alert(`Triângulo escaleno`)
}