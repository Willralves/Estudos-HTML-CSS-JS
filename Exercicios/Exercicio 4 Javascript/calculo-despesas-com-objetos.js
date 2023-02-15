

let receitaWilliam = {
    receitas: [2500, 3200, 250, 360.45, ],
    despesas: [320.34, 128.45, 176.87, 1450.00],
}


function calculaReceita(receita) {
    let totalReceita = 0;
    for (let valor of receita){
        totalReceita += valor;
    }

    return totalReceita;
}

function calculaDespesas(despesas) {
    let totalDespesas = 0;
    for (let valor of despesas){
        totalDespesas += valor;
    }

    return totalDespesas
}

function calculaTotal (despesas, receita){ 
    const total = calculaReceita(receita) - calculaDespesas(despesas);
    const balanco = total > 0 ? "POSITIVO" : "NEGATIVO";


        if (balanco === "POSITIVO") {
            return console.log(`Seu saldo é de R$ ${total.toFixed(2)} e você está com saldo ${balanco}`)
        } else {
            return console.log( `Seu saldo é de R$ ${total.toFixed(2)} e você està com saldo ${balanco}`);
        }

}

calculaTotal(receitaWilliam.despesas, receitaWilliam.receitas);



