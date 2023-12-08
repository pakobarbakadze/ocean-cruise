import { BusinessCabin, Cabin, EconomyCabin, LuxuryCabin } from "./cabin";
import { CabinType } from "./interfaces";

export class CabinFactory {
  public static createCabin(c: CabinType): Cabin {
    let cabin: Cabin;
    switch (c) {
      case CabinType.Economy:
        cabin = new EconomyCabin(5);
        break;
      case CabinType.Business:
        cabin = new BusinessCabin(5);
        break;
      case CabinType.Luxury:
        cabin = new LuxuryCabin(5);
        break;
      default:
        cabin = new EconomyCabin(5);
        break;
    }
    return cabin;
  }
}
