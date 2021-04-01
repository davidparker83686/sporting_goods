import { ProxyState } from "../AppState.js";
import { cartsService } from "../Services/CartsService.js";


//Private
function _draw() {

}

//Public
export default class CartsController {
  constructor() {

  }

  addToCart(id) {
    cartsService.addToCart(id)
  }

  checkout() {
    cartsService.checkout()
  }

}
