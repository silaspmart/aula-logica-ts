// 06 · Função maior de 2
// Crie maior(a, b) que retorna o maior dos dois números.

let c = Number(prompt("Digite um número:"));
let d = Number(prompt("Digite um número:"));

function ehMaior (a,b) {
    if (a>b) {
        return a;
    } else {
        return b
    }
};

alert(`O maior número entre eles é ${ehMaior(c,d)}`)
