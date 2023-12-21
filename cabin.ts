import { CabinType } from "./enums";
import { EntertainmentActivity } from "./interfaces";

export class Cabin {
  constructor(public type: CabinType, public numberOfCabins: number) {}

  public calculateTotalCost(activities: EntertainmentActivity[]): number {
    const baseCost = this.getBaseCost();
    const additionalFees = this.calculateAdditionalFees(activities);
    return baseCost + additionalFees;
  }

  protected getBaseCost(): number {
    return 0;
  }

  private calculateAdditionalFees(activities: EntertainmentActivity[]): number {
    return activities.reduce(
      (total, activity) => total + (activity.price ?? 0),
      0
    );
  }
}

export class EconomyCabin extends Cabin {
  constructor(numberOfCabins: number) {
    super(CabinType.Economy, numberOfCabins);
  }

  public getBaseCost(): number {
    return 100;
  }
}

export class BusinessCabin extends Cabin {
  constructor(numberOfCabins: number) {
    super(CabinType.Business, numberOfCabins);
  }

  public getBaseCost(): number {
    return 200;
  }
}

export class LuxuryCabin extends Cabin {
  constructor(numberOfCabins: number) {
    super(CabinType.Luxury, numberOfCabins);
  }

  public getBaseCost(): number {
    return 500;
  }
}
