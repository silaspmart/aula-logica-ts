// 12 · Entrada no evento
// Menos de 16: não entra. 
// De 16 a 17: só acompanhado. 18+: entra normal. 
// Leia a idade.

let idade = Number (prompt("Informe a idade:")??0);

if (idade < 16) {
    alert(`A entrada é proibida!`)
} else if (idade >= 18) {
    alert(`Entrada permitida!`)
} else {
    alert(`Entrada permitida somente com um acompanhante!`)
}