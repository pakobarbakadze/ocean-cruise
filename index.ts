import CrewMember from "./modules/crewMember";
import CruiseCompany from "./modules/cruiseCompany";
import { CabinType, CrewMemberType } from "./enums";
import { CalculatorService } from "./services/calculator.service";
import Ship from "./modules/ship";
import Traveler from "./modules/traveler";
import Task from "./modules/task";
import Schedule from "./modules/schedule";
import Location from "./modules/location";
import NotificationService from "./services/notification.service";
import TaskService from "./services/task.service";
import PaymentService from "./services/payment.service";

const cruiseCompany = new CruiseCompany();

const levaniCaptain = new CrewMember("1", "Levani", CrewMemberType.Captain);
const taskService = new TaskService();
taskService.setTask(
  new Task("1", levaniCaptain.getId(), "test", "In progress")
);
console.log(taskService.getTask("1"));
taskService.changeTaskStatus("1", "Done");
console.log(taskService.getTask("1"));

const ship = new Ship();
ship.setMember(levaniCaptain);
ship.setCabbins(5, 5, 5);

const cabin = ship.getCabinByType(CabinType.Economy);
const calculator = new CalculatorService();
const cost = calculator.calculateTotalCost(
  cabin!,
  ship.getEntertainmentActivities()
);
console.log(`Cabin cost is: ${cost}$`);

cruiseCompany.createSchedule(
  ship,
  new Schedule([
    new Location("batumi", "stambul", new Date("1/9/23"), new Date("3/9/23")),
    new Location("stambul", "anthalia", new Date("3/9/23"), new Date("5/9/23")),
    new Location(
      "antalia",
      "alexandria",
      new Date("5/9/23"),
      new Date("7/9/23")
    ),
  ])
);

const traveler = new Traveler("Giorgi", ship);

traveler.setCabinType(CabinType.Business);
ship.setTraveler(traveler);
console.log(traveler.getSchedule());
traveler.setDiscountCode("ABC");

const paymentService = new PaymentService(calculator);
paymentService.makePayment(250, ship, traveler);

const notificationService = new NotificationService();
notificationService.sendNotifications(ship);

cruiseCompany.cancelSchedule(ship);
console.log(ship.getSchedule());
