function calcularNivel(numVitorias, numDerrotas){
    let saldoVitoria = numVitorias - numDerrotas;
    let nivel;

    switch(true){
        case numVitorias < 10:
            nivel = "Ferro";
            break;

        case numVitorias >= 11 && numVitorias <= 20:
            nivel = "Bronze";
            break;

        case numVitorias >= 21 && numVitorias <= 50:
            nivel = "Prata";
            break;

        case numVitorias >= 51 && numVitorias <= 80:
            nivel = "Ouro";
            break;

        default:
            nivel = "Imortal";
    }

    console.log("O herói tem um saldo de " + saldoVitoria + " e está no nível " + nivel + ".");
}

calcularNivel(80, 15);