// 02 · Tamanho e meio
// Mostre quantos itens tem o array e o item do meio (use Math.floor pra achar o índice central).

let listaN = ["Helena", " Gabriele", " Felipe", " Oscar", " Mariana"];
let meioDaListaN = listaN[Math.floor(listaN.length/2)];

alert (`A lista tem ${listaN.length} itens.
O item do meio é ${meioDaListaN}`);