
import { sandboxApi } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";

class WeatherService{
  constructor(){
  // console.log("from weathers service");
  }

  async getWeather() {
 
  let res = await sandboxApi.get('weather')
  //  console.log('Service weather', res);
  ProxyState.weather = res.data
  // console.log(res.data)
  
  }
}

export const weatherService = new WeatherService();