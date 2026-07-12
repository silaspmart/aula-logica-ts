// 20 · Menu repetido
// Um caixa: 1 deposita, 2 vê saldo, 3 sai. 
// Repita o menu (while) até escolher Sair.

let opMenu = "";
let saldo = 0;

while (opMenu !== "3") {
  opMenu = prompt("1-Depositar \n2-Saldo \n3-Sair");
  if (opMenu === "1") {
    let valor = Number(prompt("Valor:"));
    saldo = saldo + valor;
  } else if (opMenu === "2") {
    alert(`Saldo: R$: ${saldo.toFixed(2)}`);
  }
}
alert("Até logo! 👋");