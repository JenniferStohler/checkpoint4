import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


export default class ClockController {
  constructor(){
    this.timer()
}
timer(){clockService.timer()}
}
