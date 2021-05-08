const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Este es el número base que será multiplicado'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Esta opción lista los números en consola al crear el archivo'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Este es el límite de números por el que será multiplicado el número base'
            })
            .check(  (argv, options) => {
                if ( isNaN (argv.b)){
                    throw 'La base tiene que ser un número'
                }
                return true;
            }) 
            .argv;

module.exports = argv;