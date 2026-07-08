// 16 · Ano bissexto
// É bissexto se for divisível por 4 e não por 100 — ou se for divisível por 400. Leia o ano.

let ano = Number(prompt("Digite um ano para saber se é bissexto:"));

if (((ano % 4) === 0) && ((ano % 100) != 0) || ((ano % 400) === 0)) {
    alert(`O ano ${ano} é bissexto`)
} else {
    alert(`O ano ${ano} não é bissexto`)
}