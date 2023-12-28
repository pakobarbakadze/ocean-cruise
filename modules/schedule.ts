import Location from "./location";

export default class Schedule {
  private locations: Location[];

  constructor(locations: Location[]) {
    this.locations = locations;
  }

  public getLocations(): Location[] {
    return this.locations;
  }

  public setLocation(location: Location): void {
    this.locations.push(location);
  }
}
