import { Cabin } from "./cabin";
import { CabinFactory } from "./cabinFactory";
import CrewMember from "./crewMember";
import { CabinType } from "./enums";
import { EntertainmentActivity, Schedule } from "./interfaces";
import Traveler from "./traveler";

export default class Ship {
  private cabins: Cabin[] = [];
  private entertainmentActivities: EntertainmentActivity[] = [];
  private schedule: Schedule = { locations: [] };
  private travelers: Traveler[] = [];
  private crewMembers: CrewMember[] = [];

  constructor() {}

  public addEntertainmentActivity(activity: EntertainmentActivity): void {
    this.entertainmentActivities.push(activity);
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
