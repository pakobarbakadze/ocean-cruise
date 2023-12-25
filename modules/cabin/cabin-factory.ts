import { BusinessCabin, Cabin, EconomyCabin, LuxuryCabin } from "./cabin";
import { CabinType } from "../../enums";

export default class CabinFactory {
  public static createCabin(cabinType: CabinType, quantity: number): Cabin {
    let cabin: Cabin;
    switch (cabinType) {
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
