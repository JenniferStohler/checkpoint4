import { sandboxApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js"
import { ProxyState } from "../AppState.js";


class WeatherService{
  constructor(){
  
  }

  async getWeather() {
 
  let res = await sandboxApi.get('weather')
  console.log(res.data)
  ProxyState.weather = new Weather(res.data)
 
  // ProxyState.weather = res.data

  
  }

  getTemp(checked){
    let weather = ProxyState.weather
    let toCelsius = Math.round(weather - 273.15)
    let toFarenheit = Math.round(((weather - 273.15) * 1.8) + 32)

    if (ProxyState.weather != checked){
      toFarenheit
    }else{
      toCelsius
    }
  }
}

export const weatherService = new WeatherService();