import { ProxyState } from "../AppState.js";

class CartsService {
  addToCart(id) {
    let addition = ProxyState.items.find(i => i.id == id)
    let pair = null
    addition.stock--
    addition.quantity++
    for (let i = 0; i < ProxyState.cart.length; i++) {
      if (ProxyState.cart[i].id == id) {
        pair = true
      }
    }
    if (!pair) {
      ProxyState.cart.push(addition)
    }

    ProxyState.items = ProxyState.items
  }

  checkout() {
    let total = 0
    for (let i = 0; i < ProxyState.cart.length; i++) {
      total += (ProxyState.cart.price * ProxyState.cart.quantity)
    }
    ProxyState.money -= total
    ProxyState.cart = []
    ProxyState.items = ProxyState.items
  }
}

export const cartsService = new CartsService();

