// 17 · Login com 3 tentativas
// Senha certa: 1234. Dê até 3 chances. Na 2ª falha, avise "última tentativa". Bloqueie após 3 erros.

let sign = 1234;
let log = Number(prompt("Digite a senha:"));
let chances = 3;

while (chances>0) {
    if (sign === log) {
        alert(`Acesso liberado`)
    } else {
        log = Number(prompt("Digite a senha:"));
        chances = chances-1;
    }
}

if (chances=1) {
        alert(`Ultima tentativa`);
    }
