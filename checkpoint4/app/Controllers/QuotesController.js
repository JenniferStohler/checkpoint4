import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _drawQuote(){
   document.getElementById('quotes').innerHTML = ProxyState.quotes.quoteTemplate
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