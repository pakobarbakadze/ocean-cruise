import { CabinType } from "../../enums";

export class Cabin {
  constructor(public type: CabinType, public numberOfCabins: number) {}

  public getBaseCost(): number {
    return 0;
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
