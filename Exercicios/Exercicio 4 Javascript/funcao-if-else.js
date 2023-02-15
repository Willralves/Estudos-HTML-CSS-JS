

function verificarNota(nota){

    let notaA = nota >= 90 && nota <= 100;
    let notaB = nota >= 80 && nota <= 89;
    let notaC = nota >= 70 && nota <= 79;
    let notaD = nota >= 60 && nota <= 69;
    let notaE = nota <= 59 && nota >= 0;
    let grade;

    if (notaA){
        grade = console.log(`sua nota é  e sua grade foi: A`);
   
    } else if (notaB){
        grade = console.lograde = g(`sua nota é e sua grade foi: B`);
    
    } else if (notaC){
        grade = console.log(`sua nota é  e sua grade foi: C`);
    
    } else if (notaD){
        grade = console.log(`sua nota é e sua grade foi: D`);

    } else if (notaE) {
        grade = console.log(`sua nota é e sua grade foi: E`);
    
    } else {
        grade = console.log(`Nota inválida`)
    }

    return grade;

}


verificarNota(150);
verificarNota(90)
verificarNota(30)
verificarNota(7)
verificarNota(75)
verificarNota(112)
verificarNota(210)
verificarNota(315)
verificarNota(0)
verificarNota(-52)