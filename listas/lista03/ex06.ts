// 06 · Repetir mensagem
// Leia um nome e quantas vezes repetir. Escreva o nome esse tanto de vezes.

let seuNome = prompt("Digite um nome:");
let repete = Number(prompt("Quantas repetições?"));
let texto = "";

for (let i=1; i<=repete; i++) {
    texto = texto + seuNome + "\n";
};

alert(texto);