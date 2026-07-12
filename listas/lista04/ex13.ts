// 13 · Está na lista?
// Pergunte um nome e use .includes pra dizer se ele está entre os convidados.

let listNomes = ["Helena", " Gabriele", " Felipe", " Oscar", " Mariana"];
let conv = prompt("Informe o nome");

if(listNomes.includes(conv)) {
    alert(`Você esta convidado`)
} else {
    alert(`Você não possui convite`)
}