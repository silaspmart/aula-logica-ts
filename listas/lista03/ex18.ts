// 18 · Fibonacci
// Cada termo é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8… Leia N e mostre os N primeiros termos.

let ntl = Number(prompt("Quantos termos?"));
let pnu = 0;
let snu = 1;
let seqFin = "";

for (let i = 1; i <= ntl; i++) {
  seqFin = seqFin + pnu + " ";
  let prox = pnu + snu; 
  pnu = snu;
  snu = prox;
}
alert(seqFin);