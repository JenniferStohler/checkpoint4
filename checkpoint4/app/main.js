import ValuesController from "./Controllers/InspiresController.js";
import ToDosController from "./Controllers/ToDosController.js";
import ImagesController from "./Controllers/ImagesController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  valuesController = new ValuesController();

  toDosController = new ToDosController();

  imagesController = new ImagesController();

  weatherController = new WeatherController();


}

window["app"] = new App();
