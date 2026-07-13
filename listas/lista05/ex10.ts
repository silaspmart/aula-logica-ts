// 10 · Função fatorial
// Crie fatorial(n) que calcula n! com um for dentro e retorna o total. A função esconde o laço!

function fatorial(n) {
    let init = 1;
    for (let i=1; i<=n; i++) {
        init = init*i;
    }
    return init;
}

let nbr = Number(prompt("O fatorial de:"))

alert(`O fatorial de ${nbr} é ${fatorial(nbr)}`);
