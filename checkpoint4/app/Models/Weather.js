export default class Weather{
  constructor({main, data}){
   this.main = main.temp 
   this.city = data.name
  }

}

//   get weatherTemplate(){
//     return `<div id="weather" class="col-md-4">
//     <h3>${this.weather}${Math.floor(((this.main - 273.15) * 1.8) + 32)}F</h3>
//     <p>${this.name}</p>
//     </div>`
//   }
// }
  
 
 
