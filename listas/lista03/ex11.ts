// 11 · Pares entre dois números
// Leia A e B e mostre os números pares de A até B. O laço não precisa começar em 1!

let pnbr = Number(prompt("Primeiro número:"));
let snbr = Number(prompt("Segundo número:"));
let prs = "";

if (pnbr<snbr) {
    for (let i=pnbr; i<snbr; i++) {
        if (i%2 === 0) {
            prs = prs + i + " ";
        };
    };
} else if (pnbr>snbr) {
    for (let i=snbr; i<pnbr; i++) {
        if (i%2 === 0) {
            prs = prs + i + " ";
        };
    };
};

if (pnbr === snbr) {
    alert (`Os números são iguais`);
}

alert(`Números pares entre eles: \n${prs}`);