
// .once = Ouve o evento apenas na primeira vez.

const {EventEmitter} = require('events');

const ev = new EventEmitter();

ev.once('Diga algo', (mensagem) => {
    console.log("Eu ouvi este evento!", mensagem)
});

ev.emit('Diga algo', "William");
ev.emit('Diga algo', "Adrielly");