const axios = require('axios');

const getLugarLatLng = async(direccion) =>{
  let encodeUrl = encodeURI(direccion); //transformar en URL friendly
  let respuesta = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCTaWpfTaeav56tzHWa5Rhe5GBGjMXhCcE`)

    if (respuesta.data.status==='ZERO_RESULTS') {
      throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

      // console.log(JSON.stringify(respuesta.data,undefined, 2));
      let location = respuesta.data.results[0];


  return{
    direccion:location.formatted_address,
    lat:location.geometry.location.lat,
    lng: location.geometry.location.lng
  }
}

module.exports = {
  getLugarLatLng
}
