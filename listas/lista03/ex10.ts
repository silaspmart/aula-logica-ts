// 10 · O maior de N
// Leia quantos números e depois cada um. No fim, diga qual foi o maior.

let tn = Number(prompt("Quantos números?"));
let maior = 0;

for (let i=1; i<=tn; i++) {
    let d = Number(prompt("Informe um número:"));
    if (d>maior) {
        maior = d;
    }
}
 alert(`O maior numero digitado foi ${maior}`);