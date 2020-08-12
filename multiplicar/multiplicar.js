const fs = require('fs');
var Color = require('color');


let listarArchivo = (base, limit = 10) => {

    // return new Promise ( (resolve, reject) => {
        // let datos = '';
        // fs.readFile(`./tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
        //     if (err){
        //         reject( err );  
        //     }
        //     // for(let i = 0; i < limit; i++){
        //     //     datos += data[;
        //     // }
        //     resolve( data );
        //   });

        for ( let i = 0; i <= limit; i++ ){
             console.log(`${base} * ${i} = ${base * i}`);
        }

    // });

}

let crearArchivo = ( base, limite = 10 ) => {

    return new Promise((resolve, reject) => {

        let data = '';
       
        if(!Number(base)){
            reject('sentencia invalida, ingresa un numero');
            return;
        }
       for ( let i = 0; i <= limite; i++ ){
            data += `${base} * ${i} = ${base * i}\n` ; 
       }
       
       fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
         if (err){ reject(err)

         } else {

             resolve(`tabla-${base}.txt`);
         };
       });

    })
}

module.exports = {
    crearArchivo,
    listarArchivo
}