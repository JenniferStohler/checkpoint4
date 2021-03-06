import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather(){
  let template = ''


  //Convert from Kelvin to Fahrenheit ℉=((K-273.15)*1.8)+32
//Convert from Kelvin to Celsius ℃=K-273.15

  

    template = /*html */ `<div class="weather-text mt-2 text-center text-light text-shadow" onclick="app.weatherController."><p> ${ProxyState.weather.KtoF}F</p>
    
    </div>`
  document.getElementById('weather').innerHTML = template
}



export default class WeatherController{
  constructor(){
    ProxyState.on('weather', _drawWeather)
    console.log('weather')
    this.getWeather()
  }


async getWeather(){
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error);
    }
  }
}
