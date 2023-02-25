
/* 
- timeout
    Cria um timeout passando uma função para fazer como callback quando o tempo se esgotar. 
*/


const timeOut = 3000;
const finalizou = () => console.log("Finalizada a chamada da Callback");

setTimeout(finalizou, timeOut);
console.log('Esse vai mostrar primeiro pois a funcao "finalizou" é uma callback');