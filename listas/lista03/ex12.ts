// 12 · Fatorial de N
// O fatorial de N (N!) é 1 × 2 × 3 × … × N. Leia N e calcule. Acumulador de multiplicação começa em 1!

let fator = Number(prompt("Digite um numero para ver o fatorial:"));
let acum = 1;

for (let i=1; i<=fator; i++) {
    acum = acum * i;
}
alert(`O fatorial de ${fator} é ${acum}`);