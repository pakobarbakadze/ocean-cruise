export default class Location {
  private from: string;
  private to: String;
  private startDate: Date;
  private endDate: Date;

  constructor(from: string, to: String, startDate: Date, endDate: Date) {
    this.from = from;
    this.to = to;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
