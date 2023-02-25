
/*
- setInterval
    Irá rodar uma função callback um número indefinido de vezes de acordo com o tempo definido no timeout
    Exemplo: Se o tempo definido no timeout for de 1000 a cada 1 segundo ele irá rodar a função repetidamente.
*/

const timeout = 1000;
const checkar = () => console.log ("Callback de checkagem");

setInterval(checkar, timeout);

