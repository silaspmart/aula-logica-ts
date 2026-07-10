// 14 · Contar pares e ímpares
// Leia quantos números e cada um. No fim, diga quantos foram pares e quantos ímpares. Dois contadores!

let qtd = Number(prompt("Quantos numeros testar?"));
let np = 0;
let ni = 0;

for (let i=1; i<=qtd; i++) {
    let h = Number(prompt("Digite o número:"))
    if (h%2 === 0) {
        np = np + 1
    } else {
        ni = ni + 1;
    }
}

alert(`Você digitou ${np} numeros pares e ${ni} ímpares`)