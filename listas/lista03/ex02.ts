// 02 · Contagem regressiva
// Leia N e conte de N até 1 (de trás pra frente). No fim, solte um 🚀.

let N = Number(prompt("Contagem regressiva:"));
let cont = "";

for (let i=N; i>=1; i--){
    cont = cont + i + " ";
}
alert (cont + "🚀");