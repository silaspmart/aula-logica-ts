// 13 · Somar um array
// Crie somar(lista) que recebe um array de números e retorna a soma de todos.

function somaLista(lista) {
    let total = 0;
    for (let i=0; i<lista.length; i++) {
        total = total + lista[i];
    }
    return total;
}

let val = [5, 10, 15, 20, 25];

alert(`Lista: ${val} \nSoma dos itens: ${somaLista(val)}`);