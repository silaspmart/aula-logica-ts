// 06 · Contar pares
// Percorra o array e conte quantos números são pares.

let listNums = [5, 1, 7, 2, 4, 3, 9];
let pares = 0;

for (let i = 0; i < listNums.length; i++) {
    if ( listNums[i] % 2  ===  0) {
        pares = pares + 1;
    }
}

alert(`A lista possui ${pares} números pares`)
