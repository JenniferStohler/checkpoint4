import Quotes from "../Models/Quotes.js"
import { quotesApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
 
class QuotesService{
 async getQuote() {
 
    let res = await quotesApi.get("/quotes")
    ProxyState.quotes = new Quotes(res.data)
  }

}
  export const quotesService = new QuotesService();