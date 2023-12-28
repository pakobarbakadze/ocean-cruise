export default class EntertainmentActivity {
  private name: string;
  private price?: number;

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setName() {
    return this.price;
  }

  public getPrice() {
    return this.price;
  }

  public setPrice(price: number) {
    this.price = price;
  }
}
