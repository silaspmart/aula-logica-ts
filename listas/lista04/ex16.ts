// 16 · Inverter na mão
// Sem usar .reverse: percorra de trás pra frente e vá dando .push num array novo.

let letras = ["A", "B", "C", "D", "E", "F"];
let invertido = []; 

for (let i = letras.length - 1; i >= 0; i--) {
  invertido.push(letras[i]);
}
alert(invertido.join(", "));