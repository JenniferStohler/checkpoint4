import ValuesController from "./Controllers/ValuesController.js";
import ToDosController from "./Controllers/ToDosController.js";
import ImagesController from "./Controllers/ImagesController.js";
import WeatherController from "./Controllers/WeatherController.js";
import QuotesController from "./Controllers/QuotesController.js";
// import ClockController from "./Controllers/ClockController.js";

class App {
  valuesController = new ValuesController();

  toDosController = new ToDosController();

  imagesController = new ImagesController();

  // clockController = new ClockController();

  weatherController = new WeatherController();

  quotesController = new QuotesController();


}

window["app"] = new App();
