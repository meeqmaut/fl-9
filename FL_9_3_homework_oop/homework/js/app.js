function ShoppingCart(user) {
    this.name = user.name;
    this.owner = user.owner;
    this.maxCount = user.maxSize;
    this.products = [];
    let _logs = [`${this.name} was created in ${new Date()}`];
    let _formattedList = [];

    this.addNewProduct = function (newProd) {
        if (this.products.length === this.maxCount) {
            this.products.sort(function (a, b) {
                if (a.price > b.price) { 
                    return -1;
                }
                if (a.price < b.price) { 
                    return 1;
                }
                return 0;
            })            
            _logs.push(`${newProd.name} was added to ${this.name} 
on ${new Date()} and ${this.products[4].name} was removed`);
            
            _formattedList.push(`${newProd.name} is on ${this.name} from ${new Date()}.
Detailed product description: ${newProd.description.color}, ${newProd.description.size}`)
            
            this.products.pop();
            this.products.push(newProd);
            newProd.add(this.name);
        } else {
            this.products.push(newProd);
            
            _logs.push(`${newProd.name} was added to ${this.name} on ${new Date()}`);
            
            _formattedList.push(`${newProd.name} is on ${this.name} from ${new Date()}.
Detailed product description: ${newProd.description.color}, ${newProd.description.size}`)
            
            newProd.add(this.name);
        }
        return this;
    }

    this.removeProduct = function (product) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id) {
                _logs.push(`${product.name} was removed from ${this.name} on ${new Date()}`);
                this.products.splice([i], 1);
                product.removeProduct();
            }
        }
        return this;
    }

    this.getAvaragePrice = function () {
        let avaragePrice = 0;
        for (var i = 0; i < this.products.length; i++) {
            avaragePrice += this.products[i].price;
        }
        return (avaragePrice / this.products.length).toFixed(2);
    }

    this.getProducts = function () {
        let products = [];
        for (var i = 0; i < this.products.length; i++) {
            products.push(this.products[i].name)
        }
        return products.join(', ');
    }

    this.getFormattedListOfProducts = function () {
        return _formattedList;
    }

    this.getTotalPrice = function () {
        let totalPrice = 0;
        for (var i = 0; i < this.products.length; i++) {
            totalPrice += this.products[i].price;
        }
        return totalPrice;
    }

    this.getHistory = function () {
        return _logs;
    }
}


function Product(prod) {
    this.name = prod.name;
    this.price = prod.price;
    this.description = {
        color: prod.description.color,
        size: prod.description.size
    }
    this.id = Math.random().toString(36).substr(2, 9);
    let _owner = '';
    let historyLog = [];


    this.getPrice = function () {
        return this.price;
    }

    this.setPrice = function (newPrice) {
        if (newPrice >= 0) {
            if (newPrice > this.price) {
                historyLog.push(`change price from ${this.price} to ${newPrice}`);
                this.price = newPrice;
            } else {
                historyLog.push(`try to change price from ${this.price} to ${newPrice}`)
                console.log('Price cannot be smaller than previous');
            }
        } else {
            console.log('Error')
        }
        return this;
    }

    this.add = function (card) {
        _owner = card;
        historyLog.push(`${this.name} is added to ${card} on ${new Date()}`);
    }

    this.removeProduct = function () {
        historyLog.push(`${this.name} is removed from ${_owner} on ${new Date()}`)
        _owner = null;
    }

    this.getHistory = function () {
        return historyLog;
    }

}


//Products...

const banana = new Product({
    name: 'banana',
    description: {
        color: 'yellow',
        size: 'medium'
    },
    price: 10});
const apple = new Product({
    name: 'apple',
    description: {
        color: 'green',
        size: 'medium'
    },
    price: 20});
const cherry = new Product({
    name: 'cherry',
    description: {
        color: 'red',
        size: 'small'
    },
    price: 30});
const melon = new Product({
    name: 'melon',
    description: {
        color: 'lightyellow',
        size: 'big'
    },
    price: 40});
const cucumber = new Product({
    name: 'cucumber',
    description: {
        color: 'darkgreen',
        size: 'medium'
    },
    price: 50});
const potato = new Product({
    name: 'potato',
    description: {
        color: 'brown',
        size: 'medium'
    },
    price: 60});

//Cart...

const victorShoppingCart = new ShoppingCart({
    name: 'victorsCart',
    owner: 'Victor',
    maxSize: 5});

//Some script that demonstrates work of all functions...

banana.setPrice(50);
console.log(banana.getHistory());
victorShoppingCart.addNewProduct(banana).addNewProduct(apple).addNewProduct(cherry).addNewProduct(melon);
victorShoppingCart.addNewProduct(cucumber).addNewProduct(potato)
console.log(victorShoppingCart.removeProduct(cherry).getProducts());
console.log(victorShoppingCart.getAvaragePrice())
console.log(victorShoppingCart.getFormattedListOfProducts())


