const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check( (argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un número'
                    }
                    return true
                })
                .option('l', {
                    alias: 'listar',
                    default: false,
                    describe: 'Muestra la tabla que se crea en el archivo',
                    type: 'boolean'
                })
                .option('h', {
                    alias: 'hasta',
                    default: 10,
                    describe: 'hasta que numero se ca a multiplicar',
                    type: 'number'
                })
                .argv;

module.exports = argv;