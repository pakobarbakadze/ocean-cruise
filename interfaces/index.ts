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

export interface EntertainmentActivity {
  name: string;
  price?: number;
}
