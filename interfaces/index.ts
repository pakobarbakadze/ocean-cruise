export interface Location {
  from: string;
  to: String;
  startDate: Date;
  endDate: Date;
}

export interface Schedule {
  locations: Location[];
}

export interface Task {
  id: string;
  description: string;
  status: string;
}

export enum CrewMemberType {
  Captain = "Captain",
  Mechanic = "Mechanic",
  Cook = "Cook",
  Cleaner = "Cleaner",
}

export enum CabinType {
  Economy = "Economy",
  Business = "Business",
  Luxury = "Luxury",
}

export interface EntertainmentActivity {
  name: string;
  price?: number;
}
