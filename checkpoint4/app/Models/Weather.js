export default class Weather{
  constructor({main, name}){
   this.main = Number(main.temp)
   this.city = name
   this.KtoF =  Math.floor(((this.main - 273.15) * 1.8) + 32)

   this.KtoC = Math.floor(this.main - 273.15)
  }

}
