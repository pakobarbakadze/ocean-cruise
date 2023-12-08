import { Cabin } from "./cabin";
import { CabinFactory } from "./cabinFactory";
import CrewMember from "./crewMember";
import { CabinType, EntertainmentActivity, Schedule } from "./interfaces";

export default class Ship {
  private cabins: Cabin[] = [];
  private entertainmentActivities: EntertainmentActivity[] = [];
  private schedule: Schedule = { locations: [] };
  private crewMembers: CrewMember[] = [];

  constructor() {}

  public addEntertainmentActivity(activity: EntertainmentActivity): void {
    this.entertainmentActivities.push(activity);
  }

  public setCabbins(): void {
    this.cabins.push(
      CabinFactory.createCabin(CabinType.Economy),
      CabinFactory.createCabin(CabinType.Business),
      CabinFactory.createCabin(CabinType.Luxury)
    );
  }

  public getNumberOfCabins(): number {
    return this.cabins.length;
  }

  public setSchedule(schedule: Schedule): void {
    this.schedule = schedule;
  }

  public getSchedule(): Schedule {
    return this.schedule;
  }

  public getCabinByType(cabinType: CabinType): Cabin | undefined {
    return this.cabins.find((cabin) => cabin.type === cabinType);
  }

  public setMembers(members: CrewMember[]): void {
    this.crewMembers = members;
  }
}
