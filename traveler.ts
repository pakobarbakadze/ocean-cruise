import { CabinType, Schedule } from "./interfaces";
import Ship from "./ship";

export default class Traveler {
  private selectedSchedule: Schedule | null = null;
  private selectedCabinType: CabinType = CabinType.Economy;
  private discountCode: string | null = null;

  constructor(private name: string, private ship: Ship) {}

  public chooseCabinType(cabin: CabinType): void {
    this.selectedCabinType = cabin;
  }

  public makePayment(): void {
    const cabin = this.ship.getCabinByType(this.selectedCabinType);
    const cost = cabin?.calculateTotalCost([]);

    console.log(`Paid ${cost}$`);
  }

  public applyDiscountCode(code: string): void {
    this.discountCode = code;
  }
}
