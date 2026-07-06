// 05 · Listar com forEach
// Use forEach pra montar uma lista com um traço antes de cada nome.

let listaNom  = ["Helena", "Gabriele", "Felipe", "Oscar", "Mariana"];
let icone = "";

listaNom.forEach(nomes => {
    icone = icone + "- " + nomes + "\n";
});

alert(icone);