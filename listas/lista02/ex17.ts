// 17 · Login e senha
// Login certo: admin, senha: 1234. Se algo estiver errado, diga qual (login ou senha).

let login = prompt("Digite o login:") === "admin";
let senha = prompt("Digite a senha:") === "1234";

if (login && senha) {
    alert(`Acesso liberado`)
} else if (login == false && senha) {
    alert(`Login errado!`)
} else if (login && senha == false) {
    alert (`Senha errada!`)
} else {
    alert(`Login e senha errados!`)
}