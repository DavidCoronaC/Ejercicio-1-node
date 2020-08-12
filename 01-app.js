// Requireds

// requiered (fs) son los paquetes que
// vienen directamente de la libreria de node
// const fs = require('fs');

// requiered (Express) son los paquetes que no
// vienen directamente de la libreria de node
// const fs = require('express');

// requiered (./...) son los paquetes creados o
// que se inicializan dentro de las carpetas del
// proyecto
// const fs = require('./fs');

const argv = require('./config/yargs').argv;
const { crearArchivo, listarArchivo } = require("./multiplicar/multiplicar");
var Color = require('color');
var color = Color('rgb(255, 255, 255)');

let comando = argv._[0];

switch (comando) {
  case "crear":
    crearArchivo( argv.base, argv.limite )
      .then((archivo) => console.log(`archivo creado: ${archivo}`))
      .catch((err) => console.log(err));
    break;

  case "listar":
    listarArchivo(argv.base, argv.limite);
        // .then( archivo => console.log(archivo))
        // .catch( (err) => console.log(err));
    break;

  default:
    console.log("comando no reconocido");
    break;
}

// let base = 3;

// console.log(` limite: ${argv.limite}`);

// let parametro = argv[2];
// let base = parametro.split("=")[1];
