class Store {
    constructor(pizzaSlicePrice) {
        this.pizzaSlicePrice = pizzaSlicePrice;
        this.nightDiscount = 0;
        this.weekendDiscount = 0;
        this.bonus = 0;
        this.totalPrice = 0;
    }

    calculatePrice() {
        this.totalPrice = this.pizzaSlicePrice - this.weekendDiscount - this.nightDiscount ;
    }

    buyPizzaSlice() {
        return `Price after discount is ${this.totalPrice} and you have ${this.bonus} bonuses.`;
    }
}

const getDiscount = (store) => {
    let date = new Date();
    
    if (date.getHours() < 6) {
        store.nightDiscount = 2;
    }
    if (date.getDay() === 6 || date.getDay() === 0) {
        store.weekendDiscount = 2;
    }
    
    store.calculatePrice();
};

const setBonus = (store) => {
    store.bonus += Math.floor(store.totalPrice / 10);
};


const store1 = new Store(4.20);
getDiscount(store1);
setBonus(store1);
console.log(store1.totalPrice);