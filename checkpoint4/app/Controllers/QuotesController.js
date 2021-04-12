import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/ImagesService.js"

function _drawQuote(){
   document.body.style.quote = `url(${ProxyState.quotes})`
}

export default class QuotesController {
  constructor(){
    ProxyState.on("quotes", _drawQuote);
    this.getQuote()
  }

  async getQuote(){
    try {
      await quotesService.getQuote()
    } catch (error){
      console.error(error);
    }
  }
}