// 09 · Média de N notas
// Leia quantas notas, depois cada nota, e mostre a média com 1 casa decimal.

let nt = Number(prompt("Média de quantas notas?"));
let sn = 0;

for (let i=1; i<=nt; i++) {
    let nts = Number(prompt("Informe a nota"));
    sn = sn + nts;
};

let md = sn/nt;
alert(`A média das notas é ${md.toFixed(1)}`);