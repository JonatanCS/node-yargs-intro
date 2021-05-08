const fr = require('fs');

const crearArchivo = async(base, limite, listar=false) => {
    try {
        
        let salida = '';
    
        for (let i = 1; i <= limite; i++){
            salida += `${base} x ${limite} = ${base*i}\n`;
        }
        
        if (listar){
            console.log('======================');
            console.log(`  Tabla del ${base}   `);
            console.log('======================');
            console.log(salida);
        }
        
        
        fr.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Archivo table-${base}.txt`;
    } catch (err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}