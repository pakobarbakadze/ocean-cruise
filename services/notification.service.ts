import Ship from "../modules/ship";

export default class NotificationService {
  public sendNotifications(ship: Ship): void {
    const travelers = ship.getTravelers();
    travelers.forEach((traveler) => {
      //Send notification here
      console.log(`Sent notification to: ${traveler.getName()}`);
    });
  }
}
