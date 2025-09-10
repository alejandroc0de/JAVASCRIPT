// class = Provides a more structured and cleaner way to work with objects

class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }

    displayProducts(params) {
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)   

    }
    calculateTotal(salesTax){
        return this.price + (this.price*salesTax)
    }

}

const salesTax = 0.05;

const product1 = new Product("Shirt",19.99)
const product2 = new Product("Pants",24.99)

product1.displayProducts()
product2.displayProducts()
const total = product1.calculateTotal(salesTax)
console.log(`Total price with that is ${total.toFixed(2)}`);