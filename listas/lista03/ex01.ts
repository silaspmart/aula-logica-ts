// 01 · Contar até N
// Leia um número N e escreva todos os números de 1 até N, um do lado do outro.

let Num = Number(prompt("Até quanto contar?"));
let contador = "";
for (let i = 1; i <= Num; i++) {
  contador = contador + i + " ";
}
alert(contador);