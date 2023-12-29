import { CabinType } from "../enums";
import Ship from "../modules/ship";
import Traveler from "../modules/traveler";
import { CalculatorService } from "./calculator.service";

export default class PaymentService {
  constructor(private readonly calculator: CalculatorService) {}

  public makePayment(amount: number, ship: Ship, traveler: Traveler): void {
    const cabin = ship.getCabinByType(traveler.getSelectedCabinType());

    if (!cabin) return console.log("You haven't selected cabin");

    let cost = this.calculator.calculateTotalCost(cabin, []);

    if (traveler.getDiscountCode()) cost = cost - cost / 5;

    amount = amount - cost;

    console.log(`Paid ${cost}$`);
  }
}
