// 04 · Soma de 1 a N
//Leia N e some todos os números de 1 até N. Use um acumulador.

let sum = Number(prompt("Somar até:"));
let ctdr = 0;

for(let i=0; i<=sum; i++) {
    ctdr = ctdr + i;
}
alert(`O somatorio é ${ctdr}`);
