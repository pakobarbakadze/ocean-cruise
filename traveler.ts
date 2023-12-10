import { CabinType, Schedule } from "./interfaces";
import Ship from "./ship";

export default class Traveler {
  private selectedSchedule: Schedule;
  private selectedCabinType: CabinType = CabinType.Economy;
  private discountCode: string | null = null;

  constructor(private name: string, private ship: Ship) {
    this.selectedSchedule = ship.getSchedule();
  }

  public chooseCabinType(cabinType: CabinType): void {
    const cabin = this.ship.getCabinByType(cabinType);

    if (!cabin) return console.log("This type of cabin doesn't exist");

    this.selectedCabinType = cabin.type;
  }

  public makePayment(): void {
    const cabin = this.ship.getCabinByType(this.selectedCabinType);

    if (!cabin) return console.log("You haven't delected cabin");

    let cost = cabin.calculateTotalCost([]);

    if (this.discountCode) cost = cost - cost / 5;

    console.log(`Paid ${cost}$`);
  }

  public applyDiscountCode(code: string): void {
    this.discountCode = code;
  }

  public getSchedule(): Schedule {
    return this.selectedSchedule;
  }
}
