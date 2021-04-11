

class ClockService {

  getClock(){
    let time = setInterval(function(){
      clockTimer(time);
    }, 1000);
  }
}

function clockTimer(){
    var c = new Date(c);
    document.getElementById("clock").innerHTML = c.LocaleTimeString;
  }





 export const clockService = new ClockService();