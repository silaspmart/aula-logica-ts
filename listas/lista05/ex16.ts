// 16 · Uma função usa a outra
// Reaproveite o ehPrimo do ex. 12 dentro de primosAte(max), 
// que retorna a lista de primos até max.

function ehPrimo(n) {
    if (n<2) {
        return false;
    }   
    for(let i=2; i<n; i++) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}

function primosAte(max) {
  let lista = [];
  for (let num = 2; num <= max; num++) {
    if (ehPrimo(num)) { lista.push(num); } 
  }
  return lista;
}
alert(primosAte(Number(prompt("Primos até:"))).join(", "));
