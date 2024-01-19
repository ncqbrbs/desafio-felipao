
let saldo = calcularSaldoDeRankeadas(205, 115)
let nivel = nivelar(saldo)

function calcularSaldoDeRankeadas(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function nivelar(saldo){
    let nivel
    if (saldo < 10) {
        return nivel = "Ferro";
    } else if (saldo < 21) {
        return nivel = "Bronze"
    } else if (saldo < 51) {
        return nivel = "Prata"
    } else if (saldo < 81) {
        return nivel = "Ouro"
    } else if (saldo < 91) {
        return nivel = "Diamante"
    } else if (saldo < 101) {
        return nivel = "Lendário"
    } else {
        return nivel = "Imortal"
    }
}

console.log(`O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`)