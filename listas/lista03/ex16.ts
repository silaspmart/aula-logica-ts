// 16 · Adivinhe o número. 
// O número secreto é 7. Peça palpites (while) até acertar, contando as tentativas.

let sec = 7;
let tent = 1;
let adv = Number(prompt("Advinhe o numero secreto:"));

while(sec != adv) {
    adv = Number(prompt("Advinhe o numero secreto:"));
    tent = tent+1;
}

if (sec = adv) {
    alert(`Você acertou depois de ${tent} tentativas!`)
}