// 12 · Função é primo?
// Crie ehPrimo(n) que retorna true/false. Dica: assim que achar um divisor, já pode dar return false (sai da função!).

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

let primo = Number(prompt("Qual o número?"));

if (ehPrimo(primo)) {
    alert(`O numero ${primo} é primo`);
} else {
    alert(`O numero ${primo} não é primo`);
}
