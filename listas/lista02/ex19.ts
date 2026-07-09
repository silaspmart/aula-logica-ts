// 19 · Calculadora com operação
//Leia 2 números e a operação (+ - * /). Faça a conta — e bloqueie a divisão por zero.

let number01 = Number(prompt("Digite um número:"));
let op = prompt("Escolha a operação('+','-','*' ou '/')");
let number02 = Number(prompt("Digite outro numero:"))

if (op === "+") {
    alert(number01 + number02) 
} else if(op === "-") {
    alert(number01 - number02) 
} else if(op === "*") {
    alert(number01 * number02) 
} else if(op === "/" && number02 != 0) {
    alert((number01 / number02).toFixed(2)) 
} else {
    alert(`Não é possível dividir por zero!`)
}