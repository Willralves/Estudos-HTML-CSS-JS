const { clear } = require('console');
const process = require('process')

const questoes = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];

const perguntar = ( index = 0 ) => {
    process.stdout.write(questoes[index] + " > ")
};

perguntar();

const respostas = [];

process.stdin.on("data", data => {
    respostas.push(data.toString().trim() + "\n");

        if (respostas.length < questoes.length) {
           perguntar(respostas.length);
        } else {
            console.log(respostas)
            process.exit();
        }
});

process.on('exit', () => {
    console.log(
        `Bacana William
        
        "O que aprendi hoje?"
        ${respostas[0]}

        "O que me deixou aborrecido?"
        ${respostas[1]}

        "O que me deixou feliz hoje?"
        ${respostas[2]}

        "Quantas pessoas ajudei hoje?"
        ${respostas[3]}

        Volte amanhã para mais reflexões!!!
        `)
    })





