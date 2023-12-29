import { CabinType } from "../enums";
import { CalculatorService } from "../services/calculator.service";
import Schedule from "./schedule";
import Ship from "./ship";

export default class Traveler {
  private selectedSchedule: Schedule;
  private selectedCabinType: CabinType = CabinType.Economy;
  private balance: number = 0;
  private discountCode: string | null = null;

  constructor(private name: string, private ship: Ship) {
    this.selectedSchedule = ship.getSchedule();
  }

  public setCabinType(cabinType: CabinType): void {
    const cabin = this.ship.getCabinByType(cabinType);

    if (!cabin) return console.log("This type of cabin doesn't exist");

    this.selectedCabinType = cabin.type;
  }

  public setDiscountCode(code: string): void {
    this.discountCode = code;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getName(): string {
    return this.name;
  }

  public getSchedule(): Schedule {
    return this.selectedSchedule;
  }

  public getSelectedCabinType(): CabinType {
    return this.selectedCabinType;
  }

  public getDiscountCode(): string {
    return this.discountCode ?? "";
  }
}
