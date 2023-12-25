import Location from "./location";

export default class Schedule {
  private locations: Location[];

  constructor(locations: Location[]) {
    this.locations = locations;
  }
}
