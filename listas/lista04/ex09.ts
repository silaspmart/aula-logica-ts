// 09 · O menor
// Mesma ideia do maior, mas trocando quando achar um menor. Cuidado: não comece o menor em 0!

let listMn = [54, 37, 17, 84, 66, 12, 42, 39, 22];
let menorN = listMn[0];

for (let i=0; i<listMn.length; i++) {
    if (listMn[i]<menorN){
        menorN = listMn[i]
    }
}

alert(`Lista: ${listMn.join(", ")} \nMenor numero da lista: ${menorN}`)
