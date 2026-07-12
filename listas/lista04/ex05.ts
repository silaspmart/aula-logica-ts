// 05 · Listar com forEach
// Use forEach pra montar uma lista com um traço antes de cada nome.

let listaNom  = ["Helena", "Gabriele", "Felipe", "Oscar", "Mariana"];
let listFin = "";

listaNom.forEach(nomes => {
    listFin = listFin + "- " + nomes + "\n";
});

alert(`Nomes listados: \n${listFin}`);