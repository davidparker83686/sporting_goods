import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  money = 1000
  cart = []

  /** @type {Item[]} */
  items = [
    new Item('John Deer', 'Sword', 'Its shinny its sharp it does the job!', 15, 5),
    new Item('Lowes', 'Battle Axe', 'It will chop trees and skulls!', 25, 10),
    new Item('Home Depot', 'Mace', 'Smashes rodents real good!', 20, 10),]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
