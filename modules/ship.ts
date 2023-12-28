import CrewMember from "./crewMember";
import { CabinType } from "../enums";
import { Cabin } from "./cabin/cabin";
import CabinFactory from "./cabin/cabin-factory";
import Traveler from "./traveler";
import Schedule from "./schedule";
import EntertainmentActivity from "./entertaintment-activity";

export default class Ship {
  private cabins: Cabin[] = [];
  private entertainmentActivities: EntertainmentActivity[] = [];
  private schedule: Schedule = new Schedule([]);
  private travelers: Traveler[] = [];
  private crewMembers: CrewMember[] = [];

  public setEntertainmentActivity(activity: EntertainmentActivity): void {
    this.entertainmentActivities.push(activity);
  }

  public getEntertainmentActivities(): EntertainmentActivity[] {
    return this.entertainmentActivities;
  }

  public setCabbins(
    quantityOfEconomy: number,
    quantityOfBusiness: number,
    quantityOfLuxury: number
  ): void {
    this.cabins.push(
      CabinFactory.createCabin(CabinType.Economy, quantityOfEconomy),
      CabinFactory.createCabin(CabinType.Business, quantityOfBusiness),
      CabinFactory.createCabin(CabinType.Luxury, quantityOfLuxury)
    );
    console.log(this.cabins);
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

  public setMember(member: CrewMember): void {
    this.crewMembers.push(member);
  }

  public setTraveler(traveler: Traveler): void {
    this.travelers.push(traveler);
  }

  public getTravelers(): Traveler[] {
    return this.travelers;
  }
}
