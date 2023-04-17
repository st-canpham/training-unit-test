type CartType = {
  fruits: Fruit[];
  totalPrice: number;
}

export type Fruit = {
  id: string;
  name: string;
  price: number;
  discounts: {
    quantity: number;
    percent: number;
  }[];
  quantity: number;
}

export class FruitStoreCart implements CartType {
  fruits: Fruit[];
  totalPrice: number;
  
  constructor(fruits: Fruit[]) {
    this.fruits = fruits;
    this.totalPrice = 0;
  }

  getIndexFruitInCart(id: string) {
    return this.fruits.findIndex(item => item.id === id);
  }

  addFruit(fruit: Fruit) {
    if (fruit) {
      const index = this.getIndexFruitInCart(fruit.id);
      if (index !== -1) {
        this.fruits[index].quantity += fruit.quantity;
      } else {
        this.fruits.push(fruit);
      }
      this.calcTotalPrice();
    }
  }

  removeFruit(id: string) {
    const index = this.getIndexFruitInCart(id);
    if (index === -1 || !id || !this.fruits.length) {
      return;
    }
      this.fruits = this.fruits.filter(item => item.id !== id);
      this.calcTotalPrice();
  }

  editFruit(fruit: Fruit) {
    if (fruit) {
      const index = this.getIndexFruitInCart(fruit.id);
      if (index !== -1) {
        this.fruits = this.fruits.map(item => {
          if (item.id === fruit.id) {
            return fruit;
          }
          return item;
        });
        this.calcTotalPrice();
      }
    }
  }

  clearCart() {
    this.fruits = [];
    this.totalPrice = 0;
  }

  getDiscount(fruit: Fruit) {
    let discount = 0;
    fruit.discounts.forEach(item => {
      if (fruit.quantity >= item.quantity) {
        discount = item.percent;
      }
    });
    return discount;
  }

  calcTotalPrice () {
    this.totalPrice = this.fruits.reduce((total, fruit: Fruit) => {
      const discount = this.getDiscount(fruit);
      return total + fruit.quantity * fruit.price * (100 - discount)/100;
    }, 0);
  }
}
