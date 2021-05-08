const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
//const argv = require('colors'); **Este paquete hace que puedas colorear lo que salga en pantalla, por ejemplo: 'base.green' en 'multiplicar.js'**


console.clear()

// console.log( argv )

crearArchivo(argv.b, argv.h, argv.l)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));

//Esto simplemente hace que se pueda recibir argumentos por consola (yargs lo simplifica)
//const [ , , arg3 = 'base=5' ] = process.argv;
//const [ , base = 5 ] = arg3.split('=');
