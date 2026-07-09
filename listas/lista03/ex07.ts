// 07 · Pares de 1 a N
// Leia N e mostre só os números pares de 1 até N.

let z = Number(prompt("Todos os pares até:"));
let paresZ = "";

for (let i=1; i<=z; i++) {
    if (i%2 === 0) {
        paresZ = paresZ + i + " ";
    };
};

alert(`Os pares de 0 ate ${z} são: \n${paresZ}`);