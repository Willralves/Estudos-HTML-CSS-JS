// O inherits é a herança, o que quer dizer que a classe Character está herdando tudo da classe EventEmitter.

const {inherits} = require('util');
const {EventEmitter} = require("events");

function Character(name){
    this.name = name;
}

inherits(Character, EventEmitter)

const joao = new Character("João Pedro");

joao.on('help', () => console.log(`Olá eu ${joao.name} vim lhe ajudar`))
joao.emit('help');
