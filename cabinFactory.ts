import { BusinessCabin, Cabin, EconomyCabin, LuxuryCabin } from "./cabin";
import { CabinType } from "./interfaces";

export class CabinFactory {
  public static createCabin(c: CabinType, quantity: number): Cabin {
    let cabin: Cabin;
    switch (c) {
      case CabinType.Economy:
        cabin = new EconomyCabin(quantity);
        break;
      case CabinType.Business:
        cabin = new BusinessCabin(quantity);
        break;
      case CabinType.Luxury:
        cabin = new LuxuryCabin(quantity);
        break;
      default:
        cabin = new EconomyCabin(quantity);
        break;
    }
    return cabin;
  }
}
