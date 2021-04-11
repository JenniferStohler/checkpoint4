import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


function _drawClock() {
  
}

export default class ClockController {
  constructor(){
    ProxyState.on('clock', _drawClock())
    this.getClock()
    
  }
  async getClock(){
    try{
       clockService.getClock()
    }catch (error){
      console.error;
    }
  }
}