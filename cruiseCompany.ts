import { Schedule } from "./interfaces";
import Ship from "./ship";

export class CruiseCompany {
  public createSchedule(ship: Ship, schedule: Schedule): void {
    ship.setSchedule(schedule);
  }

  public cancelSchedule(ship: Ship): void {
    ship.setSchedule({ locations: [] });
  }

  public sendNotifications(ship: Ship): void {
    const travelers = ship.getTravelers();
    travelers.forEach((traveler) => {
      //Send notification here
      console.log(`Sent notification to: ${traveler.getName()}`);
    });
  }
}
