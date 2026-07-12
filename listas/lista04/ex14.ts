// 14 · Em que posição?
// Use .indexOf pra achar a posição de um nome na fila. Ele devolve -1 se não achar!

let listNom = ["Helena", "Gabriele", "Felipe", "Oscar", "Mariana"];
let nom = prompt("Qual nome?");
let nomPos = listNom.indexOf(nom);

if (nomPos === -1) {
    alert(`${nomPos} não está na fila!`)
} else {
    alert(`O nome ${nom} ocupa a posição ${nomPos + 1} na lista!`)
}