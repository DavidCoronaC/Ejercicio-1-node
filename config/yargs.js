const opt = {
    base: {
        alias: 'b',
        demand: true
        
      },
      limite: {
        alias: 'l',
        default: 10
      },
}

const argv = require("yargs")
.command('listar', "Imprime en consola la tabla de multiplicar", opt)
.command('crear', "Genera un archivo para tabla de multiplicar", opt)
  .help()
  .argv;

module.exports = {
    argv
}