// 17 · Contar votos
// Percorra a lista de votos e conte quantas vezes o 
// "sim" apareceu.

let votos = ["sim","não","sim","sim","não", "sim","não"];
let sim = 0;

for (let i=0; i <votos.length; i++) {
    if (votos[i] === "sim") {
        sim = sim+1;
    }
}

alert(`O total de votos SIM é: ${sim}`);