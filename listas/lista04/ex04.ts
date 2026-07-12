// 04 · Somar tudo
// Percorra o array com for e some todos os números num acumulador.

let listaNums = [5, 10, 15, 20, 25, 30];
let somaNums = 0;

for (let i = 0; i < listaNums.length; i++) {
    somaNums = somaNums + listaNums[i];
}

alert(`Números: ${listaNums.join(", ")} \nSoma dos valores = ${somaNums}`)