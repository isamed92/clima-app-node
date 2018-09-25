
const axios = require('axios');


const getClima = async (lat, lng) =>{
    let respuesta = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8b0b81c923255294addac62a68be7e05`)
      return respuesta.data.main.temp;
}

module.exports = {
  getClima
}
