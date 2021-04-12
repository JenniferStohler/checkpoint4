import { sandboxApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
 
class QuotesService{
 async getQuote() {
 
    let res = await sandboxApi.get("/quotes")
 
        ProxyState.quotes = res.data.url
  }

}
  export const quotesService = new QuotesService();