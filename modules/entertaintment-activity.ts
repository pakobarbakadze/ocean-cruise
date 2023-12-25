export default class EntertainmentActivity {
  private name: string;
  private price?: number;

  constructor(name: string) {
    this.name = name;
  }

  public setPrice(price: number) {
    this.price = price;
  }

  public getPrice() {
    return this.price;
  }
}
