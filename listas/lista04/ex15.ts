// 15 · Ordenar números
// Ordene do menor pro maior com .sort. Pegadinha: 
// sem (a,b)=>a-b, o sort compara como texto e erra!

let listN = [10,2,33,4,25];
let ordList = listN.sort((a,b) => a-b);

alert(`Lista inicial ${listN.join(",")} \nLista ordenada: ${ordList.join(", ")}`)
