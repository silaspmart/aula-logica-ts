//01 · Função saudação
// Crie uma função saudacao(nome) que mostra 
// "Olá, [nome]! Bem-vindo(a)." num alert. 
// Depois chame-a com um nome.

let nm = prompt("Digite seu nome");

function saudacao() {
    alert(`Olá, ${nm}! Bem-vindo!`)
}

saudacao();