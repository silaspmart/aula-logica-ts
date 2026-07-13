// 15 · Função que retorna array
// Crie soPares(lista) que retorna um novo array só com os pares. Uma função pode devolver uma coleção!

function soPares(lista) {
  let novos = [];   // array novo, vazio
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      novos.push(lista[i]);
    }
  }
  return novos;
}
let lst = [4, 7, 2, 9, 10, 3];
alert (`Lista: ${lst} \nPares: ${soPares(lst).join(", ")}`);