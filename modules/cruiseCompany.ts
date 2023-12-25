import Schedule from "./schedule";
import Ship from "./ship";

export default class CruiseCompany {
  public createSchedule(ship: Ship, schedule: Schedule): void {
    ship.setSchedule(schedule);
  }

  public cancelSchedule(ship: Ship): void {
    ship.setSchedule(new Schedule([]));
  }
}
