import { Schedule } from "./interfaces";
import Ship from "./ship";

export class CruiseCompany {
  public createSchedule(ship: Ship, schedule: Schedule): void {
    ship.setSchedule(schedule);
  }

  public cancelSchedule(ship: Ship): void {
    ship.setSchedule({ locations: [] });
  }
}
