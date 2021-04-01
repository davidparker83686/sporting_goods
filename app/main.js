import CartsController from "./Controllers/CartsController.js";
import ItemsController from "./Controllers/ItemsController.js";

class App {
  itemsController = new ItemsController();
  cartsController = new CartsController();
}

window["app"] = new App();
