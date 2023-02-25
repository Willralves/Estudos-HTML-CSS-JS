/* 
- clearInterval
    Cancela o setInterval que foi criado, deixando assim de executar a função callback determinada pelo setInterval.     
*/


const timeout = 1000;
const checkar = () => console.log ("Callback de checkagem");

let intervalo = setInterval(checkar, timeout);

setTimeout( () => clearInterval(intervalo), 5000);

console.log("finalizado após o setTimeout do clearInterval")