// 14 · Contar pares do array
// Crie contarPares(lista) que recebe um array e retorna quantos números são pares.

function contarPares(lista) {
  let conta = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      conta = conta + 1;
    }
  }
  return conta;
}
let nums = [4, 7, 2, 9, 10, 3];
alert(`Total de itens: ${nums.length} \nNúmeros pares: ${contarPares(nums)}`);