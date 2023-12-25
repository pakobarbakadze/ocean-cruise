import { Cabin } from "../modules/cabin/cabin";
import EntertainmentActivity from "../modules/entertaintment-activity";

export class CalculatorService {
  public calculateTotalCost(
    cabin: Cabin,
    activities: EntertainmentActivity[]
  ): number {
    const baseCost = cabin.getBaseCost();
    const additionalFees = this.calculateAdditionalFees(activities);
    return baseCost + additionalFees;
  }

  private calculateAdditionalFees(activities: EntertainmentActivity[]): number {
    return activities.reduce(
      (total, activity) => total + (activity.getPrice() ?? 0),
      0
    );
  }
}
