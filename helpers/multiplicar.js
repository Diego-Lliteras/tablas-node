const fs = require('fs');
const colors = require('colors');

const crearTabla = (base = 5, listar =  false, limite = 10) => {
    return new Promise((resolve,reject) => {
        console.log('------------------'.yellow)
        console.log(`Tabla del ${base}`.bgYellow)
        console.log('------------------'.yellow)

        let salida = '';
        for(let i = 1; i <= limite; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar) console.log(salida.rainbow);

        fs.writeFile(`./salida/tabla-${base}.txt`,salida, (err)=>{
            if(err){
                reject(err)
            }else{
                resolve(`tabla-${base}.txt`)
            }

        })
    })
}

module.exports = {
    crearTabla
}