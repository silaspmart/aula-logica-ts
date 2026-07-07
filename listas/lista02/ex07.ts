// 7 · Tem desconto?
// A loja dá 10% de desconto em compras acima de R$ 100. Leia o valor e mostre quanto pagar.

let prInicial = Number (prompt("Digite o preço do produto:"))?? 0;
let prFinal = 0;

if (prInicial >= 100) {
    prFinal = prInicial * 0.9;
    alert(`O valor possui 10% de desconto! Preço final R$ ${prFinal.toFixed(2)}`);
} else {
    prFinal = prInicial;
    alert(`O valor não possui desconto!`)
}

