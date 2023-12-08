import CrewMember from "./crewMember";
import { CruiseCompany } from "./cruiseCompany";
import { CabinType, CrewMemberType } from "./interfaces";
import Ship from "./ship";
import Traveler from "./traveler";

const cruiseCompany = new CruiseCompany();

const crewMember = new CrewMember("Levani", CrewMemberType.Captain, []);

const ship = new Ship();
ship.setMembers([crewMember]);
ship.setCabbins();

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

traveler.applyDiscountCode("ABC");
traveler.makePayment();
