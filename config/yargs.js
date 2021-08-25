const argv = require("yargs")
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true
})
.option('l',{
    alias:'listar',
    type:"boolean",
    default: false,
    demandOption: false
})
.option('h',{
    alias:'hasta',
    type: 'number',
    demandOption: true
})
.check((argv, options)=>{
    if(isNaN(argv.b)) throw 'La base debe ser un número'
    if(isNaN(argv.h)) throw 'El valor hasta debe ser númerico'
    return true    
})
.argv;

module.exports = argv