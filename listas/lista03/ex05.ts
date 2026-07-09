// 05 · Múltiplos de 5
// Leia N e mostre todos os múltiplos de 5 de 1 até N. Dentro do laço, um if decide.

let Numb = Number(prompt("Digite um número:"));
let msg = "";

for (let i=1; i<=Numb; i++) {
    if (i%5 === 0) {
        msg = msg + i + " ";
    };
};
 alert (`Os múltiplos de 5 entre 0 e ${Numb} são :\n${msg}`);