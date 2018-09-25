const lugar = require('./lugar/lugar.js')
const clima = require('./clima/clima.js')
const argv = require('yargs').options(
  {
  direccion:{
    alias: 'd',
    desc: 'Direccion de la cuidad para obtener el clima',
    demmand: true
    }
  }).argv;

let getInfo = async(direccion) =>{
  try {
    let coordenadas = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

    return `El clima en ${coordenadas.direccion}, es de: ${temp}º C`;

  } catch (e) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
}

// lugar.getLugarLatLng(argv.direccion)
//   .then(resp => console.log(resp))
//   .catch(e => console.log(e))
//
// clima.getClima(-27.0560551,-65.40216830000001)
//           .then(respuesta => console.log(`${respuesta}ºC`))
//           .catch(error => console.log(error));
//
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));











// const axios = require('axios');


// console.log(argv);

// let encodeUrl = encodeURI(argv.direccion); //transformar en URL friendly
// axios.get(
//   `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCTaWpfTaeav56tzHWa5Rhe5GBGjMXhCcE`)
//   .then(respuesta => {
//     // console.log(JSON.stringify(respuesta.data,undefined, 2));
//     let location = respuesta.data.results[0];
//     console.log(`Direccion: ${location.formatted_address}`);
//     console.log(`Latitud: ${location.geometry.location.lat}`);
//     console.log(`Longitud: ${location.geometry.location.lng} `);
//     // console.log(`Direccion: ${location[1]}`);
//   })
//   .catch(e => console.log('Error', e));
