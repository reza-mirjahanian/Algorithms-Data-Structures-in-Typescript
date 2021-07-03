console.log("###-- Factory --###");


class Product {
    name: string;
    price: number;

    constructor(p: [string, number]) {
        this.name = p[0];
        this.price = p[1];
    }
}

class Food extends Product {
    weight: number;

    constructor(p: [string, number, number]) {
        super([p[0], p[1]]);
        this.weight = p[2];
    }
}


class Drink extends Product {
    ml: number;

    constructor(p: [string, number, number]) {
        super([p[0], p[1]]);
        this.ml = p[2];
    }
}


class ProductFactory {

    static createProduct(type: string, data: [string, number, number]): Product {
        switch (type) {
            case 'food':
                return new Food(data);
            case 'drink':
                return new Drink(data);
            default:
                return new Product([data[0], data[1]]);
        }
    }
}

const bread = ProductFactory.createProduct('food', ['Bread', 1, 100]);
console.log(bread);
console.log(bread instanceof Food);
