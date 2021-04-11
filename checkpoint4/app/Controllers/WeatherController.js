import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _drawWeather(){
  let template = ''
  let weatherTemp = ProxyState.weather.main.temp

  let toF = (weatherTemp - 32) * 5 / 9;
  let toc = (weatherTemp - 32) * 5 / 9;

    template += /*html */ `<div class="weather-text mt-2 text-center text-light text-shadow" onclick="app.weatherController."><p> ${weatherTemp} </p> 
    
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
