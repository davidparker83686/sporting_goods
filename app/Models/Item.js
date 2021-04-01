import { generateId } from "../Utils/GeneratedId.js"

export default class Item {
    constructor(brand, name, description, price, stock, quantity = 0, imgUrl = '//placehold.it/150x150', id = generateId()) {
        this.id = id
        this.brand = brand
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.quantity = quantity
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
        <div class="col-md-4 mb-3">
          <div class="card shadow">
              <img class="card-img-top" src="${this.imgUrl}" alt="">
              <div class="card-body">
                  <h4 class="card-title"> <u>${this.brand} | ${this.name} </u></h4>
                  <p class="card-text">${this.description}</p>
              </div>
              <div class="px-3 pb-3 d-flex justify-content-between">
              <h5 class="card-text">In Stock:<strong>${this.stock}</strong></h5>
                  <button type="button" class="btn btn-info" onclick="app.cartsController.addToCart('${this.id}')"> <strong> $${this.price.toFixed(2)}</strong></button>
              </div>
          </div>
        </div>
        `
    }

    get CartTemplate() {
        return `
<div class="row justify-content-around">
    <div class="col-4">
        <img src="${this.imgUrl}" alt="">
    </div>
    <div class="col-6">
        <h4><u>${this.brand}</u></h4>
        <h5>${this.name}</h5>
        <p>${this.description}</p>
    </div>
</div>       
<div class="row justify-content-between px-3">
    <div class="col-6">
        <div class="row">
            <div class="col-8"><p><strong>Items in Cart: ${this.quantity}</strong></p></div>
            <div class="col-4"><i class="fas fa-plus text-success px-0 mx-0" onclick='addOne('${this.id}')'></i> <i class="fas fa-minus text-danger px-0 mx-0" onclick='subOne('${this.id}')'></i></div>
        </div>
    </div>
    <div class="col-6">
        <button type="button" class="btn btn-info" disabled> <strong> $${this.price.toFixed(2)}</strong></button>
    </div>
</div>
`
    }
}
