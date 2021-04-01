import { ProxyState } from "../AppState.js";


//Private
function _draw() {

  let items = ProxyState.items;
  let cart = ProxyState.cart
  let template = ''
  let cartTemplate = ''
  items.forEach(i => template += i.Template)
  document.getElementById('items').innerHTML = template
  cart.forEach(i => cartTemplate += i.CartTemplate)
  document.getElementById('cart').innerHTML = cartTemplate
}

//Public
export default class ItemsController {
  constructor() {
    ProxyState.on("items", _draw);
    _draw()
  }
}
