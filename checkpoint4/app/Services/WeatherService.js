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
}

 

export const weatherService = new WeatherService();