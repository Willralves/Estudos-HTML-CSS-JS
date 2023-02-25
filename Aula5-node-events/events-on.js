// .on = Ouve todas as vezes que o evento for disparado.

const {EventEmitter} = require('events');

const ev = new EventEmitter();

ev.on('Diga algo', (mensagem) => {
    console.log("Eu ouvi este evento!", mensagem)
});

ev.emit('Diga algo', "William");
ev.emit('Diga algo', "Adrielly");

