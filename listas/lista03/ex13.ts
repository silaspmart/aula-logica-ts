// 13 · Cronômetro
// Leia N e conte de 1 até N com reticências. 
// No fim, escreva "Fim!".

let cron = Number(prompt("Contar até:"));
let mess = "";

for (let i=1; i<=cron; i++) {
    mess = mess + i + "... ";
}

alert(mess + `Fim!`);