//11 · Saudação por horário
// Crie saudacaoHorario(hora) que retorna "Bom dia" (< 12), "Boa tarde" (< 18) ou "Boa noite".

function saudacaoHorario(h) {
    if (h<12) {
        return "Bom dia!"
    } else if (h<18) {
        return "Boa tarde!"
    } else {
        return "Boa noite!"
    }
}

let horas = Number(prompt("Informe as horas (0-23h):"));

alert(saudacaoHorario(horas))
