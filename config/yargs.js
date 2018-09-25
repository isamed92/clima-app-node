

const argv = require('yargs').options(
  {
  direccion:{
    alias: 'd',
    desc: 'Direccion de la cuidad para obtener el clima',
    demmand: true
    }
  }).argv;

module.exports={
  argv
}
