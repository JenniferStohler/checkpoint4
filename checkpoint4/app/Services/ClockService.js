

class ClockService {

timer(){

  let timer = document.getElementById('clock');

  function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    timer.innerText = 
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
  }

  
  setInterval(time, 1000);
}

}





 export const clockService = new ClockService();