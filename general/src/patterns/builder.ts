console.log("###-- Builder --###");


class CoolProduct {
  price: number = 0;
  name: string = "";


  setPrice(price: number) {
    this.price = price;
  }

  setName(name: string) {
    this.name = name;
  }
}

class CoolProductBuilder {
  product: CoolProduct;
  constructor() {
    this.product = new CoolProduct()
  }


  setPrice(price: number): CoolProductBuilder {
    this
      .product
      .setPrice(price);
    return this;
  }

  setName(name: string): CoolProductBuilder {
    this
      .product
      .setName(name);
    return this;
  }

  getCoolProduct(): CoolProduct {
    return this.product;
  }
}

const builder = new CoolProductBuilder();
builder
  .setName('Bread')
  .setPrice(1);
const product = builder.getCoolProduct();
console.log(product)
