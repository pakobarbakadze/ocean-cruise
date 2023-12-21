import CrewMember from "./crewMember";
import { CruiseCompany } from "./cruiseCompany";
import { CabinType, CrewMemberType } from "./enums";
import Ship from "./ship";
import Traveler from "./traveler";

const cruiseCompany = new CruiseCompany();

const levaniCaptain = new CrewMember("Levani", CrewMemberType.Captain, []);
levaniCaptain.setTask({ id: "1", description: "test", status: "In Proggres" });
levaniCaptain.changeTaskStatus("1", "Done");
console.log(levaniCaptain.getTask("1"));

const ship = new Ship();
ship.setMember(levaniCaptain);
ship.setCabbins(5, 5, 5);

cruiseCompany.createSchedule(ship, {
  locations: [
    {
      from: "batumi",
      to: "stambul",
      startDate: new Date("1/9/23"),
      endDate: new Date("3/9/23"),
    },
    {
      from: "stambul",
      to: "antalia",
      startDate: new Date("3/9/23"),
      endDate: new Date("5/9/23"),
    },
    {
      from: "antalia",
      to: "alexandria",
      startDate: new Date("5/9/23"),
      endDate: new Date("7/9/23"),
    },
  ],
});

const traveler = new Traveler("Giorgi", ship);
traveler.chooseCabinType(CabinType.Business);
ship.setTraveler(traveler);
console.log(traveler.getSchedule());
traveler.applyDiscountCode("ABC");
traveler.makePayment(250);
console.log(traveler.getBalance());

cruiseCompany.sendNotifications(ship);

cruiseCompany.cancelSchedule(ship);
console.log(ship.getSchedule());
