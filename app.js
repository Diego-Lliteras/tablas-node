const { options } = require('yargs');
const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

//asi se accedía antes a info de la terminal
// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//console.log(process.argv);
console.log(argv);


//const base = 7;
crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.green))
    .catch(err => console.log(err));
