
/*
- clearTimeout
    Cancela o timeout que foi criado, deixando assim de executar a função callback determinada pelo timeout. 
*/


const timeOut = 3000;
const finalizou = () => console.log("Finalizada a chamada da Callback");

let timer = setTimeout(finalizou, timeOut);
console.log('Esse vai mostrar primeiro pois a funcao "finalizou" é uma callback');

clearTimeout(timer);
